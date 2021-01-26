"use strict";
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('@angular/common');

function SidebarContainer_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r215 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("click", function SidebarContainer_div_0_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r215); var ctx_r214 = ɵngcc0.ɵɵnextContext(); return ctx_r214._onBackdropClicked(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r213 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r213.backdropClass);
} }
var _c0 = [[["ng-sidebar"], ["", "ng-sidebar", ""]], [["", "ng-sidebar-content", ""]]];
var _c1 = ["ng-sidebar,[ng-sidebar]", "[ng-sidebar-content]"];
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// Based on https://github.com/angular/material2/tree/master/src/lib/sidenav
var SidebarContainer = /** @class */ (function () {
    function SidebarContainer(_ref, platformId) {
        this._ref = _ref;
        this.animate = true;
        this.allowSidebarBackdropControl = true;
        this.showBackdrop = false;
        this.showBackdropChange = new core_1.EventEmitter();
        this.onBackdropClicked = new core_1.EventEmitter();
        this._sidebars = [];
        this._isBrowser = common_1.isPlatformBrowser(platformId);
    }
    SidebarContainer.prototype.ngAfterContentInit = function () {
        if (!this._isBrowser) {
            return;
        }
        this._onToggle();
    };
    SidebarContainer.prototype.ngOnChanges = function (changes) {
        if (!this._isBrowser) {
            return;
        }
        if (changes['showBackdrop']) {
            this.showBackdropChange.emit(changes['showBackdrop'].currentValue);
        }
    };
    SidebarContainer.prototype.ngOnDestroy = function () {
        if (!this._isBrowser) {
            return;
        }
        this._unsubscribe();
    };
    /**
     * @internal
     *
     * Adds a sidebar to the container's list of sidebars.
     *
     * @param sidebar {Sidebar} A sidebar within the container to register.
     */
    SidebarContainer.prototype._addSidebar = function (sidebar) {
        this._sidebars.push(sidebar);
        this._subscribe(sidebar);
    };
    /**
     * @internal
     *
     * Removes a sidebar from the container's list of sidebars.
     *
     * @param sidebar {Sidebar} The sidebar to remove.
     */
    SidebarContainer.prototype._removeSidebar = function (sidebar) {
        var index = this._sidebars.indexOf(sidebar);
        if (index !== -1) {
            this._sidebars.splice(index, 1);
        }
    };
    /**
     * @internal
     *
     * Computes `margin` value to push page contents to accommodate open sidebars as needed.
     *
     * @return {CSSStyleDeclaration} margin styles for the page content.
     */
    SidebarContainer.prototype._getContentStyle = function () {
        var left = 0, right = 0, top = 0, bottom = 0;
        var transformStyle = '';
        var heightStyle = '';
        var widthStyle = '';
        for (var _i = 0, _a = this._sidebars; _i < _a.length; _i++) {
            var sidebar = _a[_i];
            // Slide mode: we need to translate the entire container
            if (sidebar._isModeSlide) {
                if (sidebar.opened) {
                    var transformDir = sidebar._isLeftOrRight ? 'X' : 'Y';
                    var transformAmt = "" + (sidebar._isLeftOrTop ? '' : '-') + (sidebar._isLeftOrRight ? sidebar._width : sidebar._height);
                    transformStyle = "translate" + transformDir + "(" + transformAmt + "px)";
                }
            }
            // Create a space for the sidebar
            if ((sidebar._isModePush && sidebar.opened) || sidebar.dock) {
                var paddingAmt = 0;
                if (sidebar._isModeSlide && sidebar.opened) {
                    if (sidebar._isLeftOrRight) {
                        widthStyle = '100%';
                    }
                    else {
                        heightStyle = '100%';
                    }
                }
                else {
                    if (sidebar._isDocked || (sidebar._isModeOver && sidebar.dock)) {
                        paddingAmt = sidebar._dockedSize;
                    }
                    else {
                        paddingAmt = sidebar._isLeftOrRight ? sidebar._width : sidebar._height;
                    }
                }
                switch (sidebar.position) {
                    case 'left':
                        left = Math.max(left, paddingAmt);
                        break;
                    case 'right':
                        right = Math.max(right, paddingAmt);
                        break;
                    case 'top':
                        top = Math.max(top, paddingAmt);
                        break;
                    case 'bottom':
                        bottom = Math.max(bottom, paddingAmt);
                        break;
                }
            }
        }
        return {
            padding: top + "px " + right + "px " + bottom + "px " + left + "px",
            webkitTransform: transformStyle,
            transform: transformStyle,
            height: heightStyle,
            width: widthStyle
        };
    };
    /**
     * @internal
     *
     * Closes sidebars when the backdrop is clicked, if they have the
     * `closeOnClickBackdrop` option set.
     */
    SidebarContainer.prototype._onBackdropClicked = function () {
        var backdropClicked = false;
        for (var _i = 0, _a = this._sidebars; _i < _a.length; _i++) {
            var sidebar = _a[_i];
            if (sidebar.opened && sidebar.showBackdrop && sidebar.closeOnClickBackdrop) {
                sidebar.close();
                backdropClicked = true;
            }
        }
        if (backdropClicked) {
            this.onBackdropClicked.emit();
        }
    };
    /**
     * Subscribes from a sidebar events to react properly.
     */
    SidebarContainer.prototype._subscribe = function (sidebar) {
        var _this = this;
        sidebar.onOpenStart.subscribe(function () { return _this._onToggle(); });
        sidebar.onOpened.subscribe(function () { return _this._markForCheck(); });
        sidebar.onCloseStart.subscribe(function () { return _this._onToggle(); });
        sidebar.onClosed.subscribe(function () { return _this._markForCheck(); });
        sidebar.onModeChange.subscribe(function () { return _this._markForCheck(); });
        sidebar.onPositionChange.subscribe(function () { return _this._markForCheck(); });
        sidebar._onRerender.subscribe(function () { return _this._markForCheck(); });
    };
    /**
     * Unsubscribes from all sidebars.
     */
    SidebarContainer.prototype._unsubscribe = function () {
        for (var _i = 0, _a = this._sidebars; _i < _a.length; _i++) {
            var sidebar = _a[_i];
            sidebar.onOpenStart.unsubscribe();
            sidebar.onOpened.unsubscribe();
            sidebar.onCloseStart.unsubscribe();
            sidebar.onClosed.unsubscribe();
            sidebar.onModeChange.unsubscribe();
            sidebar.onPositionChange.unsubscribe();
            sidebar._onRerender.unsubscribe();
        }
    };
    /**
     * Check if we should show the backdrop when a sidebar is toggled.
     */
    SidebarContainer.prototype._onToggle = function () {
        var _this = this;
        if (this._sidebars.length > 0 && this.allowSidebarBackdropControl) {
            // Show backdrop if a single open sidebar has it set
            var hasOpen = this._sidebars.some(function (sidebar) { return sidebar.opened && sidebar.showBackdrop; });
            this.showBackdrop = hasOpen;
            this.showBackdropChange.emit(hasOpen);
        }
        setTimeout(function () {
            _this._markForCheck();
        });
    };
    /**
     * Triggers change detection to recompute styles.
     */
    SidebarContainer.prototype._markForCheck = function () {
        this._ref.markForCheck();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SidebarContainer.prototype, "animate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SidebarContainer.prototype, "allowSidebarBackdropControl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SidebarContainer.prototype, "showBackdrop", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarContainer.prototype, "showBackdropChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarContainer.prototype, "onBackdropClicked", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SidebarContainer.prototype, "contentClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SidebarContainer.prototype, "backdropClass", void 0);
    SidebarContainer = __decorate([ __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            Object])
    ], SidebarContainer);
SidebarContainer.ɵfac = function SidebarContainer_Factory(t) { return new (t || SidebarContainer)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(core_1.PLATFORM_ID)); };
SidebarContainer.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SidebarContainer, selectors: [["ng-sidebar-container"]], inputs: { animate: "animate", allowSidebarBackdropControl: "allowSidebarBackdropControl", showBackdrop: "showBackdrop", contentClass: "contentClass", backdropClass: "backdropClass" }, outputs: { showBackdropChange: "showBackdropChange", onBackdropClicked: "onBackdropClicked" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 4, vars: 5, consts: [["aria-hidden", "true", "class", "ng-sidebar__backdrop", 3, "ngClass", "click", 4, "ngIf"], [1, "ng-sidebar__content", 3, "ngClass", "ngStyle"], ["aria-hidden", "true", 1, "ng-sidebar__backdrop", 3, "ngClass", "click"]], template: function SidebarContainer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵtemplate(0, SidebarContainer_div_0_Template, 1, 1, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵprojection(3, 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.showBackdrop);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("ng-sidebar__content--animate", ctx.animate);
        ɵngcc0.ɵɵproperty("ngClass", ctx.contentClass)("ngStyle", ctx._getContentStyle());
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: ["[_nghost-%COMP%] {\n      box-sizing: border-box;\n      display: block;\n      position: relative;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n    }\n\n    .ng-sidebar__backdrop[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: #000;\n      opacity: 0.75;\n      pointer-events: auto;\n      z-index: 1;\n    }\n\n    .ng-sidebar__content[_ngcontent-%COMP%] {\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n\n    .ng-sidebar__content--animate[_ngcontent-%COMP%] {\n      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1), padding 0.3s cubic-bezier(0, 0, 0.3, 1);\n      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1), padding 0.3s cubic-bezier(0, 0, 0.3, 1);\n    }"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SidebarContainer, [{
        type: core_1.Component,
        args: [{
                selector: 'ng-sidebar-container',
                template: "\n    <div *ngIf=\"showBackdrop\"\n      aria-hidden=\"true\"\n      class=\"ng-sidebar__backdrop\"\n      [ngClass]=\"backdropClass\"\n      (click)=\"_onBackdropClicked()\"></div>\n\n    <ng-content select=\"ng-sidebar,[ng-sidebar]\"></ng-content>\n\n    <div class=\"ng-sidebar__content\"\n      [class.ng-sidebar__content--animate]=\"animate\"\n      [ngClass]=\"contentClass\"\n      [ngStyle]=\"_getContentStyle()\">\n      <ng-content select=\"[ng-sidebar-content]\"></ng-content>\n    </div>\n  ",
                styles: ["\n    :host {\n      box-sizing: border-box;\n      display: block;\n      position: relative;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n    }\n\n    .ng-sidebar__backdrop {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: #000;\n      opacity: 0.75;\n      pointer-events: auto;\n      z-index: 1;\n    }\n\n    .ng-sidebar__content {\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n\n    .ng-sidebar__content--animate {\n      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1), padding 0.3s cubic-bezier(0, 0, 0.3, 1);\n      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1), padding 0.3s cubic-bezier(0, 0, 0.3, 1);\n    }\n  "],
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: Object, decorators: [{
                type: core_1.Inject,
                args: [core_1.PLATFORM_ID]
            }] }]; }, { animate: [{
            type: core_1.Input
        }], allowSidebarBackdropControl: [{
            type: core_1.Input
        }], showBackdrop: [{
            type: core_1.Input
        }], showBackdropChange: [{
            type: core_1.Output
        }], onBackdropClicked: [{
            type: core_1.Output
        }], contentClass: [{
            type: core_1.Input
        }], backdropClass: [{
            type: core_1.Input
        }] }); })();
    return SidebarContainer;
}());
exports.SidebarContainer = SidebarContainer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJzaWRlYmFyLWNvbnRhaW5lci5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQXdPbUMsQUFPNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR2tCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9fcGFyYW0gPSAodGhpcyAmJiB0aGlzLl9fcGFyYW0pIHx8IGZ1bmN0aW9uIChwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgY29tbW9uXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxudmFyIFNpZGViYXJDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2lkZWJhckNvbnRhaW5lcihfcmVmLCBwbGF0Zm9ybUlkKSB7XG4gICAgICAgIHRoaXMuX3JlZiA9IF9yZWY7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxsb3dTaWRlYmFyQmFja2Ryb3BDb250cm9sID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93QmFja2Ryb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93QmFja2Ryb3BDaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BDbGlja2VkID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fc2lkZWJhcnMgPSBbXTtcbiAgICAgICAgdGhpcy5faXNCcm93c2VyID0gY29tbW9uXzEuaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgfVxuICAgIFNpZGViYXJDb250YWluZXIucHJvdG90eXBlLm5nQWZ0ZXJDb250ZW50SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblRvZ2dsZSgpO1xuICAgIH07XG4gICAgU2lkZWJhckNvbnRhaW5lci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydzaG93QmFja2Ryb3AnXSkge1xuICAgICAgICAgICAgdGhpcy5zaG93QmFja2Ryb3BDaGFuZ2UuZW1pdChjaGFuZ2VzWydzaG93QmFja2Ryb3AnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTaWRlYmFyQ29udGFpbmVyLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICpcbiAgICAgKiBBZGRzIGEgc2lkZWJhciB0byB0aGUgY29udGFpbmVyJ3MgbGlzdCBvZiBzaWRlYmFycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaWRlYmFyIHtTaWRlYmFyfSBBIHNpZGViYXIgd2l0aGluIHRoZSBjb250YWluZXIgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgU2lkZWJhckNvbnRhaW5lci5wcm90b3R5cGUuX2FkZFNpZGViYXIgPSBmdW5jdGlvbiAoc2lkZWJhcikge1xuICAgICAgICB0aGlzLl9zaWRlYmFycy5wdXNoKHNpZGViYXIpO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc2lkZWJhcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKlxuICAgICAqIFJlbW92ZXMgYSBzaWRlYmFyIGZyb20gdGhlIGNvbnRhaW5lcidzIGxpc3Qgb2Ygc2lkZWJhcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2lkZWJhciB7U2lkZWJhcn0gVGhlIHNpZGViYXIgdG8gcmVtb3ZlLlxuICAgICAqL1xuICAgIFNpZGViYXJDb250YWluZXIucHJvdG90eXBlLl9yZW1vdmVTaWRlYmFyID0gZnVuY3Rpb24gKHNpZGViYXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fc2lkZWJhcnMuaW5kZXhPZihzaWRlYmFyKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fc2lkZWJhcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICpcbiAgICAgKiBDb21wdXRlcyBgbWFyZ2luYCB2YWx1ZSB0byBwdXNoIHBhZ2UgY29udGVudHMgdG8gYWNjb21tb2RhdGUgb3BlbiBzaWRlYmFycyBhcyBuZWVkZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBtYXJnaW4gc3R5bGVzIGZvciB0aGUgcGFnZSBjb250ZW50LlxuICAgICAqL1xuICAgIFNpZGViYXJDb250YWluZXIucHJvdG90eXBlLl9nZXRDb250ZW50U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gMCwgcmlnaHQgPSAwLCB0b3AgPSAwLCBib3R0b20gPSAwO1xuICAgICAgICB2YXIgdHJhbnNmb3JtU3R5bGUgPSAnJztcbiAgICAgICAgdmFyIGhlaWdodFN0eWxlID0gJyc7XG4gICAgICAgIHZhciB3aWR0aFN0eWxlID0gJyc7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9zaWRlYmFyczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBzaWRlYmFyID0gX2FbX2ldO1xuICAgICAgICAgICAgLy8gU2xpZGUgbW9kZTogd2UgbmVlZCB0byB0cmFuc2xhdGUgdGhlIGVudGlyZSBjb250YWluZXJcbiAgICAgICAgICAgIGlmIChzaWRlYmFyLl9pc01vZGVTbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyLm9wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtRGlyID0gc2lkZWJhci5faXNMZWZ0T3JSaWdodCA/ICdYJyA6ICdZJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybUFtdCA9IFwiXCIgKyAoc2lkZWJhci5faXNMZWZ0T3JUb3AgPyAnJyA6ICctJykgKyAoc2lkZWJhci5faXNMZWZ0T3JSaWdodCA/IHNpZGViYXIuX3dpZHRoIDogc2lkZWJhci5faGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUgPSBcInRyYW5zbGF0ZVwiICsgdHJhbnNmb3JtRGlyICsgXCIoXCIgKyB0cmFuc2Zvcm1BbXQgKyBcInB4KVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHNwYWNlIGZvciB0aGUgc2lkZWJhclxuICAgICAgICAgICAgaWYgKChzaWRlYmFyLl9pc01vZGVQdXNoICYmIHNpZGViYXIub3BlbmVkKSB8fCBzaWRlYmFyLmRvY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0FtdCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHNpZGViYXIuX2lzTW9kZVNsaWRlICYmIHNpZGViYXIub3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyLl9pc0xlZnRPclJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFN0eWxlID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0U3R5bGUgPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyLl9pc0RvY2tlZCB8fCAoc2lkZWJhci5faXNNb2RlT3ZlciAmJiBzaWRlYmFyLmRvY2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQW10ID0gc2lkZWJhci5fZG9ja2VkU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdBbXQgPSBzaWRlYmFyLl9pc0xlZnRPclJpZ2h0ID8gc2lkZWJhci5fd2lkdGggOiBzaWRlYmFyLl9oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzaWRlYmFyLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQsIHBhZGRpbmdBbXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gTWF0aC5tYXgocmlnaHQsIHBhZGRpbmdBbXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBNYXRoLm1heCh0b3AsIHBhZGRpbmdBbXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSBNYXRoLm1heChib3R0b20sIHBhZGRpbmdBbXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWRkaW5nOiB0b3AgKyBcInB4IFwiICsgcmlnaHQgKyBcInB4IFwiICsgYm90dG9tICsgXCJweCBcIiArIGxlZnQgKyBcInB4XCIsXG4gICAgICAgICAgICB3ZWJraXRUcmFuc2Zvcm06IHRyYW5zZm9ybVN0eWxlLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1TdHlsZSxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0U3R5bGUsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhTdHlsZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICpcbiAgICAgKiBDbG9zZXMgc2lkZWJhcnMgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZCwgaWYgdGhleSBoYXZlIHRoZVxuICAgICAqIGBjbG9zZU9uQ2xpY2tCYWNrZHJvcGAgb3B0aW9uIHNldC5cbiAgICAgKi9cbiAgICBTaWRlYmFyQ29udGFpbmVyLnByb3RvdHlwZS5fb25CYWNrZHJvcENsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBiYWNrZHJvcENsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX3NpZGViYXJzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHNpZGViYXIgPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAoc2lkZWJhci5vcGVuZWQgJiYgc2lkZWJhci5zaG93QmFja2Ryb3AgJiYgc2lkZWJhci5jbG9zZU9uQ2xpY2tCYWNrZHJvcCkge1xuICAgICAgICAgICAgICAgIHNpZGViYXIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBiYWNrZHJvcENsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiYWNrZHJvcENsaWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25CYWNrZHJvcENsaWNrZWQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIGZyb20gYSBzaWRlYmFyIGV2ZW50cyB0byByZWFjdCBwcm9wZXJseS5cbiAgICAgKi9cbiAgICBTaWRlYmFyQ29udGFpbmVyLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpZGViYXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc2lkZWJhci5vbk9wZW5TdGFydC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX29uVG9nZ2xlKCk7IH0pO1xuICAgICAgICBzaWRlYmFyLm9uT3BlbmVkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fbWFya0ZvckNoZWNrKCk7IH0pO1xuICAgICAgICBzaWRlYmFyLm9uQ2xvc2VTdGFydC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX29uVG9nZ2xlKCk7IH0pO1xuICAgICAgICBzaWRlYmFyLm9uQ2xvc2VkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fbWFya0ZvckNoZWNrKCk7IH0pO1xuICAgICAgICBzaWRlYmFyLm9uTW9kZUNoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX21hcmtGb3JDaGVjaygpOyB9KTtcbiAgICAgICAgc2lkZWJhci5vblBvc2l0aW9uQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fbWFya0ZvckNoZWNrKCk7IH0pO1xuICAgICAgICBzaWRlYmFyLl9vblJlcmVuZGVyLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fbWFya0ZvckNoZWNrKCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmVzIGZyb20gYWxsIHNpZGViYXJzLlxuICAgICAqL1xuICAgIFNpZGViYXJDb250YWluZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX3NpZGViYXJzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHNpZGViYXIgPSBfYVtfaV07XG4gICAgICAgICAgICBzaWRlYmFyLm9uT3BlblN0YXJ0LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBzaWRlYmFyLm9uT3BlbmVkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBzaWRlYmFyLm9uQ2xvc2VTdGFydC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgc2lkZWJhci5vbkNsb3NlZC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgc2lkZWJhci5vbk1vZGVDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHNpZGViYXIub25Qb3NpdGlvbkNoYW5nZS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgc2lkZWJhci5fb25SZXJlbmRlci51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB3ZSBzaG91bGQgc2hvdyB0aGUgYmFja2Ryb3Agd2hlbiBhIHNpZGViYXIgaXMgdG9nZ2xlZC5cbiAgICAgKi9cbiAgICBTaWRlYmFyQ29udGFpbmVyLnByb3RvdHlwZS5fb25Ub2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLl9zaWRlYmFycy5sZW5ndGggPiAwICYmIHRoaXMuYWxsb3dTaWRlYmFyQmFja2Ryb3BDb250cm9sKSB7XG4gICAgICAgICAgICAvLyBTaG93IGJhY2tkcm9wIGlmIGEgc2luZ2xlIG9wZW4gc2lkZWJhciBoYXMgaXQgc2V0XG4gICAgICAgICAgICB2YXIgaGFzT3BlbiA9IHRoaXMuX3NpZGViYXJzLnNvbWUoZnVuY3Rpb24gKHNpZGViYXIpIHsgcmV0dXJuIHNpZGViYXIub3BlbmVkICYmIHNpZGViYXIuc2hvd0JhY2tkcm9wOyB9KTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gaGFzT3BlbjtcbiAgICAgICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wQ2hhbmdlLmVtaXQoaGFzT3Blbik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgY2hhbmdlIGRldGVjdGlvbiB0byByZWNvbXB1dGUgc3R5bGVzLlxuICAgICAqL1xuICAgIFNpZGViYXJDb250YWluZXIucHJvdG90eXBlLl9tYXJrRm9yQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3JlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgU2lkZWJhckNvbnRhaW5lci5wcm90b3R5cGUsIFwiYW5pbWF0ZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgU2lkZWJhckNvbnRhaW5lci5wcm90b3R5cGUsIFwiYWxsb3dTaWRlYmFyQmFja2Ryb3BDb250cm9sXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBTaWRlYmFyQ29udGFpbmVyLnByb3RvdHlwZSwgXCJzaG93QmFja2Ryb3BcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLk91dHB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxuICAgIF0sIFNpZGViYXJDb250YWluZXIucHJvdG90eXBlLCBcInNob3dCYWNrZHJvcENoYW5nZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgU2lkZWJhckNvbnRhaW5lci5wcm90b3R5cGUsIFwib25CYWNrZHJvcENsaWNrZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLklucHV0KCksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgU2lkZWJhckNvbnRhaW5lci5wcm90b3R5cGUsIFwiY29udGVudENsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIFNpZGViYXJDb250YWluZXIucHJvdG90eXBlLCBcImJhY2tkcm9wQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBTaWRlYmFyQ29udGFpbmVyID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICduZy1zaWRlYmFyLWNvbnRhaW5lcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPGRpdiAqbmdJZj1cXFwic2hvd0JhY2tkcm9wXFxcIlxcbiAgICAgIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJuZy1zaWRlYmFyX19iYWNrZHJvcFxcXCJcXG4gICAgICBbbmdDbGFzc109XFxcImJhY2tkcm9wQ2xhc3NcXFwiXFxuICAgICAgKGNsaWNrKT1cXFwiX29uQmFja2Ryb3BDbGlja2VkKClcXFwiPjwvZGl2PlxcblxcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XFxcIm5nLXNpZGViYXIsW25nLXNpZGViYXJdXFxcIj48L25nLWNvbnRlbnQ+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5nLXNpZGViYXJfX2NvbnRlbnRcXFwiXFxuICAgICAgW2NsYXNzLm5nLXNpZGViYXJfX2NvbnRlbnQtLWFuaW1hdGVdPVxcXCJhbmltYXRlXFxcIlxcbiAgICAgIFtuZ0NsYXNzXT1cXFwiY29udGVudENsYXNzXFxcIlxcbiAgICAgIFtuZ1N0eWxlXT1cXFwiX2dldENvbnRlbnRTdHlsZSgpXFxcIj5cXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XFxcIltuZy1zaWRlYmFyLWNvbnRlbnRdXFxcIj48L25nLWNvbnRlbnQ+XFxuICAgIDwvZGl2PlxcbiAgXCIsXG4gICAgICAgICAgICBzdHlsZXM6IFtcIlxcbiAgICA6aG9zdCB7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLm5nLXNpZGViYXJfX2JhY2tkcm9wIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgICAgb3BhY2l0eTogMC43NTtcXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5uZy1zaWRlYmFyX19jb250ZW50IHtcXG4gICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgfVxcblxcbiAgICAubmctc2lkZWJhcl9fY29udGVudC0tYW5pbWF0ZSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpLCBwYWRkaW5nIDAuM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSksIHBhZGRpbmcgMC4zcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKTtcXG4gICAgfVxcbiAgXCJdLFxuICAgICAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBjb3JlXzEuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG4gICAgICAgIH0pLFxuICAgICAgICBfX3BhcmFtKDEsIGNvcmVfMS5JbmplY3QoY29yZV8xLlBMQVRGT1JNX0lEKSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbY29yZV8xLkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgT2JqZWN0XSlcbiAgICBdLCBTaWRlYmFyQ29udGFpbmVyKTtcbiAgICByZXR1cm4gU2lkZWJhckNvbnRhaW5lcjtcbn0oKSk7XG5leHBvcnRzLlNpZGViYXJDb250YWluZXIgPSBTaWRlYmFyQ29udGFpbmVyO1xuIl19