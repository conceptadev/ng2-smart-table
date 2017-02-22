import { DataSet } from './data-set';
export declare class Column {
    id: string;
    protected settings: any;
    protected dataSet: DataSet;
    title: string;
    type: string;
    class: string;
    isSortable: boolean;
    isEditable: boolean;
    isFilterable: boolean;
    sortDirection: string;
    defaultSortDirection: string;
    editor: {
        type: string;
        config: any;
        component: any;
    };
    compareFunction: Function;
    valuePrepareFunction: Function;
    filterFunction: Function;
    cellRenderFunction: Function;
    constructor(id: string, settings: any, dataSet: DataSet);
    getCompareFunction(): Function;
    getValuePrepareFunction(): Function;
    getFilterFunction(): Function;
    getCellRenderFunction(): Function;
    getConfig(): any;
    protected process(): void;
    prepareType(): string;
    prepareSortDirection(): string;
    determineType(): string;
}
