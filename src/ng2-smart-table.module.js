"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_completer_1 = require("ng2-completer");
var ng2_smart_table_directives_1 = require("./ng2-smart-table.directives");
var cell_component_1 = require("./ng2-smart-table/components/cell/cell.component");
var view_cell_component_1 = require("./ng2-smart-table/components/cell/cell-view-mode/view-cell.component");
var cell_edit_mode_1 = require("./ng2-smart-table/components/cell/cell-edit-mode");
var cell_editors_1 = require("./ng2-smart-table/components/cell/cell-editors");
var filter_component_1 = require("./ng2-smart-table/components/filter/filter.component");
var pager_component_1 = require("./ng2-smart-table/components/pager/pager.component");
var title_component_1 = require("./ng2-smart-table/components/title/title.component");
var Ng2SmartTableModule = (function () {
    function Ng2SmartTableModule() {
    }
    return Ng2SmartTableModule;
}());
Ng2SmartTableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_completer_1.Ng2CompleterModule,
            forms_1.FormsModule
        ],
        declarations: [
            cell_component_1.CellComponent,
            view_cell_component_1.ViewCellComponent,
            cell_edit_mode_1.DefaultEditComponent,
            cell_edit_mode_1.CustomEditComponent,
            cell_edit_mode_1.EditCellComponent,
            cell_editors_1.CompleterEditorComponent,
            cell_editors_1.InputEditorComponent,
            cell_editors_1.SelectEditorComponent,
            cell_editors_1.TextareaEditorComponent,
            cell_editors_1.CheckboxEditorComponent,
            filter_component_1.FilterComponent,
            pager_component_1.PagerComponent,
            title_component_1.TitleComponent
        ].concat(ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES),
        exports: ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES.slice()
    })
], Ng2SmartTableModule);
exports.Ng2SmartTableModule = Ng2SmartTableModule;
//# sourceMappingURL=ng2-smart-table.module.js.map