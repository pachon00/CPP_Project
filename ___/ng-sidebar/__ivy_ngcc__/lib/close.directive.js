"use strict";
var ɵngcc0 = require('@angular/core');
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidebar_component_1 = require("./sidebar.component");
var CloseSidebar = /** @class */ (function () {
    function CloseSidebar(_sidebar) {
        this._sidebar = _sidebar;
    }
    /** @internal */
    CloseSidebar.prototype._onClick = function () {
        if (this._sidebar) {
            this._sidebar.close();
        }
    };
    CloseSidebar = __decorate([ __metadata("design:paramtypes", [sidebar_component_1.Sidebar])
    ], CloseSidebar);
CloseSidebar.ɵfac = function CloseSidebar_Factory(t) { return new (t || CloseSidebar)(ɵngcc0.ɵɵdirectiveInject(sidebar_component_1.Sidebar)); };
CloseSidebar.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CloseSidebar, selectors: [["", "closeSidebar", ""]], hostBindings: function CloseSidebar_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CloseSidebar_click_HostBindingHandler($event) { return ctx._onClick(); });
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CloseSidebar, [{
        type: core_1.Directive,
        args: [{
                selector: '[closeSidebar]',
                host: {
                    '(click)': '_onClick()'
                }
            }]
    }], function () { return [{ type: sidebar_component_1.Sidebar }]; }, null); })();
    return CloseSidebar;
}());
exports.CloseSidebar = CloseSidebar;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJjbG9zZS5kaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBc0IrQixBQU94Qjs7Ozs7Ozs7Ozs7Ozs7cUZBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgc2lkZWJhcl9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3NpZGViYXIuY29tcG9uZW50XCIpO1xudmFyIENsb3NlU2lkZWJhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDbG9zZVNpZGViYXIoX3NpZGViYXIpIHtcbiAgICAgICAgdGhpcy5fc2lkZWJhciA9IF9zaWRlYmFyO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgQ2xvc2VTaWRlYmFyLnByb3RvdHlwZS5fb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NpZGViYXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpZGViYXIuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2xvc2VTaWRlYmFyID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5EaXJlY3RpdmUoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbY2xvc2VTaWRlYmFyXScsXG4gICAgICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICAgICAgJyhjbGljayknOiAnX29uQ2xpY2soKSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbc2lkZWJhcl9jb21wb25lbnRfMS5TaWRlYmFyXSlcbiAgICBdLCBDbG9zZVNpZGViYXIpO1xuICAgIHJldHVybiBDbG9zZVNpZGViYXI7XG59KCkpO1xuZXhwb3J0cy5DbG9zZVNpZGViYXIgPSBDbG9zZVNpZGViYXI7XG4iXX0=