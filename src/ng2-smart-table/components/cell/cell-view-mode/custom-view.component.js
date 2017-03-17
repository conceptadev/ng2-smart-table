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
var CustomViewComponent = (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.value = this.cell.getValue();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    return CustomViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cell_1.Cell)
], CustomViewComponent.prototype, "cell", void 0);
__decorate([
    core_1.ViewChild('dynamicTarget', { read: core_1.ViewContainerRef }),
    __metadata("design:type", Object)
], CustomViewComponent.prototype, "dynamicTarget", void 0);
CustomViewComponent = __decorate([
    core_1.Component({
        selector: 'custom-view-component',
        template: "\n    <template #dynamicTarget></template>\n  ",
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], CustomViewComponent);
exports.CustomViewComponent = CustomViewComponent;
//# sourceMappingURL=custom-view.component.js.map