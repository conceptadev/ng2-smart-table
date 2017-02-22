import { EventEmitter } from '@angular/core';
import { Cell } from '../../lib/data-set/cell';
export declare class CellComponent {
    cell: Cell;
    inputClass: string;
    mode: string;
    isInEditing: boolean;
    edited: EventEmitter<any>;
    onEdited(event: any): boolean;
}
