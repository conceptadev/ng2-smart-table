import { EventEmitter } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';
export declare class TitleComponent {
    column: Column;
    source: DataSource;
    sort: EventEmitter<any>;
    currentDirection: string;
    ngOnInit(): void;
    _sort(): boolean;
    changeSortDirection(): string;
}
