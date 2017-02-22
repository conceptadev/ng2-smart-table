import { EventEmitter, AfterViewInit } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';
export declare class FilterComponent implements AfterViewInit {
    column: Column;
    source: DataSource;
    inputClass: string;
    filter: EventEmitter<any>;
    query: string;
    timeout: any;
    delay: number;
    ngAfterViewInit(): void;
    _filter(event: any): boolean;
    addFilter(): void;
}
