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
var cell_1 = require("../../../lib/data-set/cell");
var EditCellDefault = (function () {
    function EditCellDefault() {
        this.inputClass = '';
        this.edited = new core_1.EventEmitter();
    }
    EditCellDefault.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellDefault.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        return false;
    };
    EditCellDefault.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    return EditCellDefault;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cell_1.Cell)
], EditCellDefault.prototype, "cell", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EditCellDefault.prototype, "inputClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditCellDefault.prototype, "edited", void 0);
exports.EditCellDefault = EditCellDefault;
//# sourceMappingURL=edit-cell-default.js.map