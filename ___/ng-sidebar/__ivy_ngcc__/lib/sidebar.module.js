"use strict";
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('./sidebar-container.component');
var ɵngcc2 = require('./sidebar.component');
var ɵngcc3 = require('./close.directive');
var ɵngcc4 = require('@angular/common');
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var sidebar_container_component_1 = require("./sidebar-container.component");
var sidebar_component_1 = require("./sidebar.component");
var close_directive_1 = require("./close.directive");
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule_1 = SidebarModule;
    SidebarModule.forRoot = function () {
        return {
            ngModule: SidebarModule_1
        };
    };
    var SidebarModule_1;
SidebarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SidebarModule });
SidebarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SidebarModule_Factory(t) { return new (t || SidebarModule)(); }, imports: [[common_1.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SidebarModule, { declarations: [ɵngcc1.SidebarContainer, ɵngcc2.Sidebar, ɵngcc3.CloseSidebar], imports: [ɵngcc4.CommonModule], exports: [ɵngcc1.SidebarContainer, ɵngcc2.Sidebar, ɵngcc3.CloseSidebar] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SidebarModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [sidebar_container_component_1.SidebarContainer, sidebar_component_1.Sidebar, close_directive_1.CloseSidebar],
                imports: [common_1.CommonModule],
                exports: [sidebar_container_component_1.SidebarContainer, sidebar_component_1.Sidebar, close_directive_1.CloseSidebar]
            }]
    }], function () { return []; }, null); })();
    return SidebarModule;
}());
exports.SidebarModule = SidebarModule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VzIjpbInNpZGViYXIubW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQXFCd0I7Ozs7Ozs7Ozs7O2dEQU9GIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgY29tbW9uXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xudmFyIHNpZGViYXJfY29udGFpbmVyX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vc2lkZWJhci1jb250YWluZXIuY29tcG9uZW50XCIpO1xudmFyIHNpZGViYXJfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9zaWRlYmFyLmNvbXBvbmVudFwiKTtcbnZhciBjbG9zZV9kaXJlY3RpdmVfMSA9IHJlcXVpcmUoXCIuL2Nsb3NlLmRpcmVjdGl2ZVwiKTtcbnZhciBTaWRlYmFyTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNpZGViYXJNb2R1bGUoKSB7XG4gICAgfVxuICAgIFNpZGViYXJNb2R1bGVfMSA9IFNpZGViYXJNb2R1bGU7XG4gICAgU2lkZWJhck1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFNpZGViYXJNb2R1bGVfMVxuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIFNpZGViYXJNb2R1bGVfMTtcbiAgICBTaWRlYmFyTW9kdWxlID0gU2lkZWJhck1vZHVsZV8xID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtzaWRlYmFyX2NvbnRhaW5lcl9jb21wb25lbnRfMS5TaWRlYmFyQ29udGFpbmVyLCBzaWRlYmFyX2NvbXBvbmVudF8xLlNpZGViYXIsIGNsb3NlX2RpcmVjdGl2ZV8xLkNsb3NlU2lkZWJhcl0sXG4gICAgICAgICAgICBpbXBvcnRzOiBbY29tbW9uXzEuQ29tbW9uTW9kdWxlXSxcbiAgICAgICAgICAgIGV4cG9ydHM6IFtzaWRlYmFyX2NvbnRhaW5lcl9jb21wb25lbnRfMS5TaWRlYmFyQ29udGFpbmVyLCBzaWRlYmFyX2NvbXBvbmVudF8xLlNpZGViYXIsIGNsb3NlX2RpcmVjdGl2ZV8xLkNsb3NlU2lkZWJhcl1cbiAgICAgICAgfSlcbiAgICBdLCBTaWRlYmFyTW9kdWxlKTtcbiAgICByZXR1cm4gU2lkZWJhck1vZHVsZTtcbn0oKSk7XG5leHBvcnRzLlNpZGViYXJNb2R1bGUgPSBTaWRlYmFyTW9kdWxlO1xuIl19