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
var ViewCellComponent = (function () {
    function ViewCellComponent() {
    }
    ViewCellComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        setTimeout(function () { return _this.renderCustomValue(); });
    };
    ViewCellComponent.prototype.ngAfterViewInit = function () {
        this.renderCustomValue();
    };
    ViewCellComponent.prototype.renderCustomValue = function () {
        var cellRenderFunc = this.cell.getColumn().getCellRenderFunction();
        if (cellRenderFunc && this.cellRef)
            cellRenderFunc.call(null, this.cell, this.cellRef.nativeElement);
    };
    return ViewCellComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cell_1.Cell)
], ViewCellComponent.prototype, "cell", void 0);
__decorate([
    core_1.ViewChild('cellContainer'),
    __metadata("design:type", core_1.ElementRef)
], ViewCellComponent.prototype, "cellRef", void 0);
ViewCellComponent = __decorate([
    core_1.Component({
        selector: 'table-cell-view-mode',
        template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <div *ngSwitchCase=\"'html'\" #cellContainer [innerHTML]=\"cell.getValue()\"></div>\n\n        <div *ngSwitchDefault #cellContainer>{{ cell.getValue() }}</div>\n    </div>\n    "
    })
], ViewCellComponent);
exports.ViewCellComponent = ViewCellComponent;
//# sourceMappingURL=view-cell.component.js.map