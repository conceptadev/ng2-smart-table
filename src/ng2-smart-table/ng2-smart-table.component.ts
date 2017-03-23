import {
    Component,
    Input, Output, SimpleChange, EventEmitter,
    OnChanges
} from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';

import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';

@Component({
    selector: 'ng2-smart-table',
    templateUrl: 'ng2-smart-table.html',
    host: {
        '(document:click)': '(selectedRow.isInEditing || grid.createFormShown) && !disableConfirmModal ? openConfirmCancelModal($event) : null',
    }
})
export class Ng2SmartTableComponent implements OnChanges {
    @Input() source: any;
    @Input() settings: Object = {};

    @Output() public rowSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() public userRowSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() public delete: EventEmitter<any> = new EventEmitter<any>();
    @Output() public edit: EventEmitter<any> = new EventEmitter<any>();
    @Output() public create: EventEmitter<any> = new EventEmitter<any>();

    @Output() public deleteConfirm: EventEmitter<any> = new EventEmitter<any>();
    @Output() public editConfirm: EventEmitter<any> = new EventEmitter<any>();
    @Output() public createConfirm: EventEmitter<any> = new EventEmitter<any>();

    @Output() public grid: Grid;
    defaultSettings: Object = {
        mode: 'inline', // inline|external|click-to-edit
        selectMode: 'single', // single|multi
        hideHeader: false,
        hideSubHeader: true,
        hideFooter: true,
        actions: {
            columnTitle: 'Actions',
            editInline: false,
            add: true,
            edit: true,
            delete: true,
            position: 'left' // left|right
        },
        filter: {
            inputClass: '',
        },
        edit: {
            inputClass: '',
            editButtonContent: 'Edit',
            saveButtonContent: 'Update',
            cancelButtonContent: 'Cancel',
            confirmSave: false
        },
        add: {
            position: 'top',
            inputClass: '',
            addButtonContent: 'Add New',
            createButtonContent: 'Create',
            cancelButtonContent: 'Cancel',
            confirmCreate: false
        },
        delete: {
            deleteButtonContent: 'Delete',
            confirmDelete: false
        },
        attr: {
            id: '',
            class: '',
        },
        noDataMessage: 'No data found',
        disableConfirmModal: false,
        disableRowEdit: false,
        columns: {},
        pager: {
            display: true,
            perPage: 10
        }
    };

    public isAllSelected: boolean = false;
    public selectedRow = { isInEditing: false };
    public showConfirmCancelModal: boolean = false;
    public disableConfirmModal: boolean = false;
    public disableRowEdit: boolean = false;
    public editInline: boolean = false;

    @Output()
    public onDisableSidebar = new EventEmitter<boolean>();
    public sidebarDisabled: boolean = false;

    public disableSidebar(disable: boolean): void {
        console.log(disable);
        this.onDisableSidebar.emit(true);
        this.sidebarDisabled = disable;
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.grid.setSource(this.source);
                this.source.grid = this.grid;
            }
        } else {
            this.initGrid();
        }
    }

    onAdd(event): boolean {
        event.stopPropagation();

        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source
            });
        } else {
            this.grid.createFormShown = true;

            this.create.emit({
                newRow: this.grid.getNewRow()
            });
        }
        return false;
    }

    onUserSelectRow(row: Row): void {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this._onUserSelectRow(row.getData());
            this.onSelectRow(row);
        }
    }

    private _onUserSelectRow(data: any, selected: Array<any> = []) {
        this.userRowSelect.emit({
            data: data || null,
            source: this.source,
            selected: selected.length ? selected : this.grid.getSelectedRows(),
        });
    }

    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this._onUserSelectRow(row.getData());
        this._onSelectRow(row.getData());
    }

    selectAllRows() {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        let selectedRows = this.grid.getSelectedRows();

        this._onUserSelectRow(selectedRows[0], selectedRows);
        this._onSelectRow(selectedRows[0]);
    }

    onSelectRow(row: Row): void {
        this.grid.selectRow(row);
        this._onSelectRow(row.getData());
    }

    openConfirmCancelModal(event): void {
        event.preventDefault();
        event.stopPropagation();

        this.disableSidebar(true);
        this.showConfirmCancelModal = true;
    }

    onMultipleSelectRow(row: Row): void {
        this._onSelectRow(row.getData());
    }

    private _onSelectRow(data: any) {
        this.rowSelect.emit({
            data: data || null,
            selectedRow: this.selectedRow,
            source: this.source,
        });
    }

    onEdit(row: Row, event): boolean {
        event.stopPropagation();
        this.selectedRow.isInEditing = false;
        this.selectedRow = row;
        this.selectedRow.isInEditing = true;

        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        } else {
            this.onSelectRow(row);
        }

        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: row.getData(),
                source: this.source
            });
        } else {
            this.grid.edit(row);
        }

        if (this.disableRowEdit && !this.editInline) {
            row.isInEditing = false;
            this.selectedRow.isInEditing = false;
        }
        return false;
    }

    onDelete(row: Row, event): boolean {
        event.stopPropagation();

        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: row.getData(),
                source: this.source
            });
        } else {
            this.grid.delete(row, this.deleteConfirm);
        }
        return false;
    }

    onCreate(row: Row, event): boolean {
        event.stopPropagation();

        this.grid.create(row, this.createConfirm);
        return false;
    }

    onSave(row: Row, event): boolean {
        event.stopPropagation();

        this.grid.save(row, this.editConfirm);
        return false;
    }

    onCancelEdit(row, event): boolean {
        event.stopPropagation();

        row = row || this.selectedRow;

        row.isInEditing = false;
        this.grid.createFormShown = false;
        this.selectedRow.isInEditing = false;

        this.disableSidebar(false);
        this.showConfirmCancelModal = false;
        return false;
    }

    initGrid(): void {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.onSelectRow(row));
        this.disableConfirmModal = this.grid.getSetting('disableConfirmModal');
        this.disableRowEdit = this.grid.getSetting('disableRowEdit');
        this.editInline = this.grid.getSetting('actions').editInline;

        this.source.grid = this.grid;
    }

    prepareSource(): DataSource {
        if (this.source instanceof DataSource) {
            return this.source;
        } else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }

        return new LocalDataSource();
    }

    prepareSettings(): Object {
        return deepExtend({}, this.defaultSettings, this.settings);
    }

    changePage($event) {
        this.resetAllSelector();
    }

    sort($event) {
        this.resetAllSelector();
    }

    filter($event) {
        this.resetAllSelector();
    }

    private resetAllSelector() {
        this.isAllSelected = false;
    }
}
