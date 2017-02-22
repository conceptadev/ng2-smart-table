import { ElementRef, OnChanges, AfterViewInit } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export declare class ViewCellComponent implements OnChanges, AfterViewInit {
    cell: Cell;
    cellRef: ElementRef;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    renderCustomValue(): void;
}
