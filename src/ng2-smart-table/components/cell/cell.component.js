"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var cell_1 = require("../../lib/data-set/cell");
var CellComponent = (function () {
    function CellComponent() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new core_1.EventEmitter();
    }
    CellComponent.prototype.onEdited = function (event) {
        this.edited.emit(event);
        return false;
    };
    return CellComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cell_1.Cell)
], CellComponent.prototype, "cell", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "inputClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "mode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isInEditing", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CellComponent.prototype, "edited", void 0);
CellComponent = __decorate([
    core_1.Component({
        selector: 'ng2-smart-table-cell',
        template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  ",
    })
], CellComponent);
exports.CellComponent = CellComponent;
//# sourceMappingURL=cell.component.js.map