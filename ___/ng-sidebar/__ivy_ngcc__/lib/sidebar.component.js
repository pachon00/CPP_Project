"use strict";
var ɵngcc0 = require('@angular/core');
var ɵngcc1 = require('@angular/common');

var _c0 = ["sidebar"];
var _c1 = ["*"];
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
var sidebar_container_component_1 = require("./sidebar-container.component");
var utils_1 = require("./utils");
var Sidebar = /** @class */ (function () {
    function Sidebar(_container, _ref, platformId) {
        this._container = _container;
        this._ref = _ref;
        // `openedChange` allows for "2-way" data binding
        this.opened = false;
        this.openedChange = new core_1.EventEmitter();
        this.mode = 'over';
        this.dock = false;
        this.dockedSize = '0px';
        this.position = 'start';
        this.animate = true;
        this.autoCollapseOnInit = true;
        this.trapFocus = false;
        this.autoFocus = true;
        this.showBackdrop = false;
        this.closeOnClickBackdrop = false;
        this.closeOnClickOutside = false;
        this.keyClose = false;
        this.keyCode = 27; // Default to ESC key
        this.onOpenStart = new core_1.EventEmitter();
        this.onOpened = new core_1.EventEmitter();
        this.onCloseStart = new core_1.EventEmitter();
        this.onClosed = new core_1.EventEmitter();
        this.onTransitionEnd = new core_1.EventEmitter();
        this.onModeChange = new core_1.EventEmitter();
        this.onPositionChange = new core_1.EventEmitter();
        /** @internal */
        this._onRerender = new core_1.EventEmitter();
        this._focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]),' +
            'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
        this._tabIndexAttr = '__tabindex__';
        this._tabIndexIndicatorAttr = '__ngsidebar-tabindex__';
        this._clickEvent = 'click';
        this._onClickOutsideAttached = false;
        this._onKeyDownAttached = false;
        this._onResizeAttached = false;
        if (!this._container) {
            throw new Error('<ng-sidebar> must be inside a <ng-sidebar-container>. ' +
                'See https://github.com/arkon/ng-sidebar#usage for more info.');
        }
        this._isBrowser = common_1.isPlatformBrowser(platformId);
        // Handle taps in iOS
        if (this._isBrowser && utils_1.isIOS() && 'ontouchstart' in window) {
            this._clickEvent = 'touchstart';
        }
        this._normalizePosition();
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._onTransitionEnd = this._onTransitionEnd.bind(this);
        this._onFocusTrap = this._onFocusTrap.bind(this);
        this._onClickOutside = this._onClickOutside.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._collapse = this._collapse.bind(this);
    }
    Sidebar.prototype.ngOnInit = function () {
        if (!this._isBrowser) {
            return;
        }
        if (this.animate) {
            this._shouldAnimate = true;
            this.animate = false;
        }
        this._container._addSidebar(this);
        if (this.autoCollapseOnInit) {
            this._collapse();
        }
    };
    Sidebar.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this._isBrowser) {
            return;
        }
        if (changes['animate'] && this._shouldAnimate) {
            this._shouldAnimate = changes['animate'].currentValue;
        }
        if (changes['closeOnClickOutside']) {
            if (changes['closeOnClickOutside'].currentValue) {
                this._initCloseClickListener();
            }
            else {
                this._destroyCloseClickListener();
            }
        }
        if (changes['keyClose']) {
            if (changes['keyClose'].currentValue) {
                this._initCloseKeyDownListener();
            }
            else {
                this._destroyCloseKeyDownListener();
            }
        }
        if (changes['position']) {
            // Handle "start" and "end" aliases
            this._normalizePosition();
            // Emit change in timeout to allow for position change to be rendered first
            setTimeout(function () {
                _this.onPositionChange.emit(changes['position'].currentValue);
            });
        }
        if (changes['mode']) {
            setTimeout(function () {
                _this.onModeChange.emit(changes['mode'].currentValue);
            });
        }
        if (changes['dock']) {
            this.triggerRerender();
        }
        if (changes['autoCollapseHeight'] || changes['autoCollapseWidth']) {
            this._initCollapseListeners();
        }
        if (changes['opened']) {
            if (this._shouldAnimate) {
                this.animate = true;
                this._shouldAnimate = false;
            }
            if (changes['opened'].currentValue) {
                this.open();
            }
            else {
                this.close();
            }
        }
    };
    Sidebar.prototype.ngOnDestroy = function () {
        if (!this._isBrowser) {
            return;
        }
        this._destroyCloseListeners();
        this._destroyCollapseListeners();
        this._container._removeSidebar(this);
    };
    // Sidebar toggling
    // ==============================================================================================
    /**
     * Opens the sidebar and emits the appropriate events.
     */
    Sidebar.prototype.open = function () {
        var _this = this;
        if (!this._isBrowser) {
            return;
        }
        this.opened = true;
        this.openedChange.emit(true);
        this.onOpenStart.emit();
        this._ref.detectChanges();
        setTimeout(function () {
            if (_this.animate && !_this._isModeSlide) {
                _this._elSidebar.nativeElement.addEventListener('transitionend', _this._onTransitionEnd);
            }
            else {
                _this._setFocused();
                _this._initCloseListeners();
                if (_this.opened) {
                    _this.onOpened.emit();
                }
            }
        });
    };
    /**
     * Closes the sidebar and emits the appropriate events.
     */
    Sidebar.prototype.close = function () {
        var _this = this;
        if (!this._isBrowser) {
            return;
        }
        this.opened = false;
        this.openedChange.emit(false);
        this.onCloseStart.emit();
        this._ref.detectChanges();
        setTimeout(function () {
            if (_this.animate && !_this._isModeSlide) {
                _this._elSidebar.nativeElement.addEventListener('transitionend', _this._onTransitionEnd);
            }
            else {
                _this._setFocused();
                _this._destroyCloseListeners();
                if (!_this.opened) {
                    _this.onClosed.emit();
                }
            }
        });
    };
    /**
     * Manually trigger a re-render of the container. Useful if the sidebar contents might change.
     */
    Sidebar.prototype.triggerRerender = function () {
        var _this = this;
        if (!this._isBrowser) {
            return;
        }
        setTimeout(function () {
            _this._onRerender.emit();
        });
    };
    /**
     * @internal
     *
     * Computes the transform styles for the sidebar template.
     *
     * @return {CSSStyleDeclaration} The transform styles, with the WebKit-prefixed version as well.
     */
    Sidebar.prototype._getStyle = function () {
        var transformStyle = '';
        // Hides sidebar off screen when closed
        if (!this.opened) {
            var transformDir = 'translate' + (this._isLeftOrRight ? 'X' : 'Y');
            var translateAmt = (this._isLeftOrTop ? '-' : '') + "100%";
            transformStyle = transformDir + "(" + translateAmt + ")";
            // Docked mode: partially remains open
            // Note that using `calc(...)` within `transform(...)` doesn't work in IE
            if (this.dock && this._dockedSize > 0 && !(this._isModeSlide && this.opened)) {
                transformStyle += " " + transformDir + "(" + (this._isLeftOrTop ? '+' : '-') + this.dockedSize + ")";
            }
        }
        return {
            webkitTransform: transformStyle,
            transform: transformStyle
        };
    };
    /**
     * @internal
     *
     * Handles the `transitionend` event on the sidebar to emit the onOpened/onClosed events after the transform
     * transition is completed.
     */
    Sidebar.prototype._onTransitionEnd = function (e) {
        if (e.target === this._elSidebar.nativeElement && e.propertyName.endsWith('transform')) {
            this._setFocused();
            if (this.opened) {
                this._initCloseListeners();
                this.onOpened.emit();
            }
            else {
                this._destroyCloseListeners();
                this.onClosed.emit();
            }
            this.onTransitionEnd.emit();
            this._elSidebar.nativeElement.removeEventListener('transitionend', this._onTransitionEnd);
        }
    };
    Object.defineProperty(Sidebar.prototype, "_shouldTrapFocus", {
        // Focus on open/close
        // ==============================================================================================
        /**
         * Returns whether focus should be trapped within the sidebar.
         *
         * @return {boolean} Trap focus inside sidebar.
         */
        get: function () {
            return this.opened && this.trapFocus;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets focus to the first focusable element inside the sidebar.
     */
    Sidebar.prototype._focusFirstItem = function () {
        if (this._focusableElements && this._focusableElements.length > 0) {
            this._focusableElements[0].focus();
        }
    };
    /**
     * Loops focus back to the start of the sidebar if set to do so.
     */
    Sidebar.prototype._onFocusTrap = function (e) {
        if (this._shouldTrapFocus && !this._elSidebar.nativeElement.contains(e.target)) {
            this._focusFirstItem();
        }
    };
    /**
     * Handles the ability to focus sidebar elements when it's open/closed to ensure that the sidebar is inert when
     * appropriate.
     */
    Sidebar.prototype._setFocused = function () {
        this._focusableElements = Array.from(this._elSidebar.nativeElement.querySelectorAll(this._focusableElementsString));
        if (this.opened) {
            this._focusedBeforeOpen = document.activeElement;
            // Restore focusability, with previous tabindex attributes
            for (var _i = 0, _a = this._focusableElements; _i < _a.length; _i++) {
                var el = _a[_i];
                var prevTabIndex = el.getAttribute(this._tabIndexAttr);
                var wasTabIndexSet = el.getAttribute(this._tabIndexIndicatorAttr) !== null;
                if (prevTabIndex !== null) {
                    el.setAttribute('tabindex', prevTabIndex);
                    el.removeAttribute(this._tabIndexAttr);
                }
                else if (wasTabIndexSet) {
                    el.removeAttribute('tabindex');
                    el.removeAttribute(this._tabIndexIndicatorAttr);
                }
            }
            if (this.autoFocus) {
                this._focusFirstItem();
            }
            document.addEventListener('focus', this._onFocusTrap, true);
        }
        else {
            // Manually make all focusable elements unfocusable, saving existing tabindex attributes
            for (var _b = 0, _c = this._focusableElements; _b < _c.length; _b++) {
                var el = _c[_b];
                var existingTabIndex = el.getAttribute('tabindex');
                el.setAttribute('tabindex', '-1');
                el.setAttribute(this._tabIndexIndicatorAttr, '');
                if (existingTabIndex !== null) {
                    el.setAttribute(this._tabIndexAttr, existingTabIndex);
                }
            }
            document.removeEventListener('focus', this._onFocusTrap, true);
            // Set focus back to element before the sidebar was opened
            if (this._focusedBeforeOpen && this.autoFocus && this._isModeOver) {
                this._focusedBeforeOpen.focus();
                this._focusedBeforeOpen = null;
            }
        }
    };
    // Close event handlers
    // ==============================================================================================
    /**
     * Initializes event handlers for the closeOnClickOutside and keyClose options.
     */
    Sidebar.prototype._initCloseListeners = function () {
        this._initCloseClickListener();
        this._initCloseKeyDownListener();
    };
    Sidebar.prototype._initCloseClickListener = function () {
        var _this = this;
        // In a timeout so that things render first
        setTimeout(function () {
            if (_this.opened && _this.closeOnClickOutside && !_this._onClickOutsideAttached) {
                document.addEventListener(_this._clickEvent, _this._onClickOutside);
                _this._onClickOutsideAttached = true;
            }
        });
    };
    Sidebar.prototype._initCloseKeyDownListener = function () {
        var _this = this;
        // In a timeout so that things render first
        setTimeout(function () {
            if (_this.opened && _this.keyClose && !_this._onKeyDownAttached) {
                document.addEventListener('keydown', _this._onKeyDown);
                _this._onKeyDownAttached = true;
            }
        });
    };
    /**
     * Destroys all event handlers from _initCloseListeners.
     */
    Sidebar.prototype._destroyCloseListeners = function () {
        this._destroyCloseClickListener();
        this._destroyCloseKeyDownListener();
    };
    Sidebar.prototype._destroyCloseClickListener = function () {
        if (this._onClickOutsideAttached) {
            document.removeEventListener(this._clickEvent, this._onClickOutside);
            this._onClickOutsideAttached = false;
        }
    };
    Sidebar.prototype._destroyCloseKeyDownListener = function () {
        if (this._onKeyDownAttached) {
            document.removeEventListener('keydown', this._onKeyDown);
            this._onKeyDownAttached = false;
        }
    };
    /**
     * Handles `click` events on anything while the sidebar is open for the closeOnClickOutside option.
     * Programatically closes the sidebar if a click occurs outside the sidebar.
     *
     * @param e {MouseEvent} Mouse click event.
     */
    Sidebar.prototype._onClickOutside = function (e) {
        if (this._onClickOutsideAttached && this._elSidebar && !this._elSidebar.nativeElement.contains(e.target)) {
            this.close();
        }
    };
    /**
     * Handles the `keydown` event for the keyClose option.
     *
     * @param e {KeyboardEvent} Normalized keydown event.
     */
    Sidebar.prototype._onKeyDown = function (e) {
        e = e || window.event;
        if (e.keyCode === this.keyCode) {
            this.close();
        }
    };
    // Auto collapse handlers
    // ==============================================================================================
    Sidebar.prototype._initCollapseListeners = function () {
        var _this = this;
        if (this.autoCollapseHeight || this.autoCollapseWidth) {
            // In a timeout so that things render first
            setTimeout(function () {
                if (!_this._onResizeAttached) {
                    window.addEventListener('resize', _this._collapse);
                    _this._onResizeAttached = true;
                }
            });
        }
    };
    Sidebar.prototype._destroyCollapseListeners = function () {
        if (this._onResizeAttached) {
            window.removeEventListener('resize', this._collapse);
            this._onResizeAttached = false;
        }
    };
    Sidebar.prototype._collapse = function () {
        var winHeight = window.innerHeight;
        var winWidth = window.innerWidth;
        if (this.autoCollapseHeight) {
            if (winHeight <= this.autoCollapseHeight && this.opened) {
                this._wasCollapsed = true;
                this.close();
            }
            else if (winHeight > this.autoCollapseHeight && this._wasCollapsed) {
                this.open();
                this._wasCollapsed = false;
            }
        }
        if (this.autoCollapseWidth) {
            if (winWidth <= this.autoCollapseWidth && this.opened) {
                this._wasCollapsed = true;
                this.close();
            }
            else if (winWidth > this.autoCollapseWidth && this._wasCollapsed) {
                this.open();
                this._wasCollapsed = false;
            }
        }
    };
    Object.defineProperty(Sidebar.prototype, "_height", {
        // Helpers
        // ==============================================================================================
        /**
         * @internal
         *
         * Returns the rendered height of the sidebar (or the docked size).
         * This is used in the sidebar container.
         *
         * @return {number} Height of sidebar.
         */
        get: function () {
            if (this._elSidebar.nativeElement) {
                return this._isDocked ? this._dockedSize : this._elSidebar.nativeElement.offsetHeight;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_width", {
        /**
         * @internal
         *
         * Returns the rendered width of the sidebar (or the docked size).
         * This is used in the sidebar container.
         *
         * @return {number} Width of sidebar.
         */
        get: function () {
            if (this._elSidebar.nativeElement) {
                return this._isDocked ? this._dockedSize : this._elSidebar.nativeElement.offsetWidth;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_dockedSize", {
        /**
         * @internal
         *
         * Returns the docked size as a number.
         *
         * @return {number} Docked size.
         */
        get: function () {
            return parseFloat(this.dockedSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isModeOver", {
        /**
         * @internal
         *
         * Returns whether the sidebar is over mode.
         *
         * @return {boolean} Sidebar's mode is "over".
         */
        get: function () {
            return this.mode === 'over';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isModePush", {
        /**
         * @internal
         *
         * Returns whether the sidebar is push mode.
         *
         * @return {boolean} Sidebar's mode is "push".
         */
        get: function () {
            return this.mode === 'push';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isModeSlide", {
        /**
         * @internal
         *
         * Returns whether the sidebar is slide mode.
         *
         * @return {boolean} Sidebar's mode is "slide".
         */
        get: function () {
            return this.mode === 'slide';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isDocked", {
        /**
         * @internal
         *
         * Returns whether the sidebar is "docked" -- i.e. it is closed but in dock mode.
         *
         * @return {boolean} Sidebar is docked.
         */
        get: function () {
            return this.dock && this.dockedSize && !this.opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isLeftOrTop", {
        /**
         * @internal
         *
         * Returns whether the sidebar is positioned at the left or top.
         *
         * @return {boolean} Sidebar is positioned at the left or top.
         */
        get: function () {
            return this.position === 'left' || this.position === 'top';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isLeftOrRight", {
        /**
         * @internal
         *
         * Returns whether the sidebar is positioned at the left or right.
         *
         * @return {boolean} Sidebar is positioned at the left or right.
         */
        get: function () {
            return this.position === 'left' || this.position === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isInert", {
        /**
         * @internal
         *
         * Returns whether the sidebar is inert -- i.e. the contents cannot be focused.
         *
         * @return {boolean} Sidebar is inert.
         */
        get: function () {
            return !this.opened && !this.dock;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * "Normalizes" position. For example, "start" would be "left" if the page is LTR.
     */
    Sidebar.prototype._normalizePosition = function () {
        var ltr = utils_1.isLTR();
        if (this.position === 'start') {
            this.position = ltr ? 'left' : 'right';
        }
        else if (this.position === 'end') {
            this.position = ltr ? 'right' : 'left';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "opened", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "openedChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "mode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "dock", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "dockedSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "position", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "animate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Sidebar.prototype, "autoCollapseHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Sidebar.prototype, "autoCollapseWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "autoCollapseOnInit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "sidebarClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "ariaLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "trapFocus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "autoFocus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "showBackdrop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "closeOnClickBackdrop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "closeOnClickOutside", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "keyClose", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Sidebar.prototype, "keyCode", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onOpenStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onOpened", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onCloseStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onClosed", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onTransitionEnd", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onModeChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onPositionChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "_onRerender", void 0);
    __decorate([
        core_1.ViewChild('sidebar', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Sidebar.prototype, "_elSidebar", void 0);
    Sidebar = __decorate([ __param(0, core_1.Optional()),
        __param(2, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [sidebar_container_component_1.SidebarContainer,
            core_1.ChangeDetectorRef,
            Object])
    ], Sidebar);
Sidebar.ɵfac = function Sidebar_Factory(t) { return new (t || Sidebar)(ɵngcc0.ɵɵdirectiveInject(sidebar_container_component_1.SidebarContainer, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(core_1.PLATFORM_ID)); };
Sidebar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Sidebar, selectors: [["ng-sidebar"]], viewQuery: function Sidebar_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._elSidebar = _t.first);
    } }, inputs: { opened: "opened", mode: "mode", dock: "dock", dockedSize: "dockedSize", position: "position", animate: "animate", autoCollapseOnInit: "autoCollapseOnInit", trapFocus: "trapFocus", autoFocus: "autoFocus", showBackdrop: "showBackdrop", closeOnClickBackdrop: "closeOnClickBackdrop", closeOnClickOutside: "closeOnClickOutside", keyClose: "keyClose", keyCode: "keyCode", autoCollapseHeight: "autoCollapseHeight", autoCollapseWidth: "autoCollapseWidth", sidebarClass: "sidebarClass", ariaLabel: "ariaLabel" }, outputs: { openedChange: "openedChange", onOpenStart: "onOpenStart", onOpened: "onOpened", onCloseStart: "onCloseStart", onClosed: "onClosed", onTransitionEnd: "onTransitionEnd", onModeChange: "onModeChange", onPositionChange: "onPositionChange", _onRerender: "_onRerender" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 3, vars: 15, consts: [["role", "complementary", 3, "ngClass", "ngStyle"], ["sidebar", ""]], template: function Sidebar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "aside", 0, 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate3("ng-sidebar ng-sidebar--", ctx.opened ? "opened" : "closed", " ng-sidebar--", ctx.position, " ng-sidebar--", ctx.mode, "");
        ɵngcc0.ɵɵclassProp("ng-sidebar--docked", ctx._isDocked)("ng-sidebar--inert", ctx._isInert)("ng-sidebar--animate", ctx.animate);
        ɵngcc0.ɵɵproperty("ngClass", ctx.sidebarClass)("ngStyle", ctx._getStyle());
        ɵngcc0.ɵɵattribute("aria-hidden", !ctx.opened)("aria-label", ctx.ariaLabel);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".ng-sidebar[_ngcontent-%COMP%] {\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      pointer-events: auto;\n      position: absolute;\n      touch-action: auto;\n      will-change: initial;\n      z-index: 2;\n    }\n\n    .ng-sidebar--left[_ngcontent-%COMP%] {\n      bottom: 0;\n      left: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--right[_ngcontent-%COMP%] {\n      bottom: 0;\n      right: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--top[_ngcontent-%COMP%] {\n      left: 0;\n      right: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--bottom[_ngcontent-%COMP%] {\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n\n    .ng-sidebar--inert[_ngcontent-%COMP%] {\n      pointer-events: none;\n      touch-action: none;\n      will-change: transform;\n    }\n\n    .ng-sidebar--animate[_ngcontent-%COMP%] {\n      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);\n      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);\n    }"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Sidebar, [{
        type: core_1.Component,
        args: [{
                selector: 'ng-sidebar',
                template: "\n    <aside #sidebar\n      role=\"complementary\"\n      [attr.aria-hidden]=\"!opened\"\n      [attr.aria-label]=\"ariaLabel\"\n      class=\"ng-sidebar ng-sidebar--{{opened ? 'opened' : 'closed'}} ng-sidebar--{{position}} ng-sidebar--{{mode}}\"\n      [class.ng-sidebar--docked]=\"_isDocked\"\n      [class.ng-sidebar--inert]=\"_isInert\"\n      [class.ng-sidebar--animate]=\"animate\"\n      [ngClass]=\"sidebarClass\"\n      [ngStyle]=\"_getStyle()\">\n      <ng-content></ng-content>\n    </aside>\n  ",
                styles: ["\n    .ng-sidebar {\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      pointer-events: auto;\n      position: absolute;\n      touch-action: auto;\n      will-change: initial;\n      z-index: 2;\n    }\n\n    .ng-sidebar--left {\n      bottom: 0;\n      left: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--right {\n      bottom: 0;\n      right: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--top {\n      left: 0;\n      right: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--bottom {\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n\n    .ng-sidebar--inert {\n      pointer-events: none;\n      touch-action: none;\n      will-change: transform;\n    }\n\n    .ng-sidebar--animate {\n      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);\n      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);\n    }\n  "],
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: sidebar_container_component_1.SidebarContainer, decorators: [{
                type: core_1.Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: Object, decorators: [{
                type: core_1.Inject,
                args: [core_1.PLATFORM_ID]
            }] }]; }, { opened: [{
            type: core_1.Input
        }], openedChange: [{
            type: core_1.Output
        }], mode: [{
            type: core_1.Input
        }], dock: [{
            type: core_1.Input
        }], dockedSize: [{
            type: core_1.Input
        }], position: [{
            type: core_1.Input
        }], animate: [{
            type: core_1.Input
        }], autoCollapseOnInit: [{
            type: core_1.Input
        }], trapFocus: [{
            type: core_1.Input
        }], autoFocus: [{
            type: core_1.Input
        }], showBackdrop: [{
            type: core_1.Input
        }], closeOnClickBackdrop: [{
            type: core_1.Input
        }], closeOnClickOutside: [{
            type: core_1.Input
        }], keyClose: [{
            type: core_1.Input
        }], keyCode: [{
            type: core_1.Input
        }], onOpenStart: [{
            type: core_1.Output
        }], onOpened: [{
            type: core_1.Output
        }], onCloseStart: [{
            type: core_1.Output
        }], onClosed: [{
            type: core_1.Output
        }], onTransitionEnd: [{
            type: core_1.Output
        }], onModeChange: [{
            type: core_1.Output
        }], onPositionChange: [{
            type: core_1.Output
        }], _onRerender: [{
            type: core_1.Output
        }], autoCollapseHeight: [{
            type: core_1.Input
        }], autoCollapseWidth: [{
            type: core_1.Input
        }], sidebarClass: [{
            type: core_1.Input
        }], ariaLabel: [{
            type: core_1.Input
        }], _elSidebar: [{
            type: core_1.ViewChild,
            args: ['sidebar', { static: false }]
        }] }); })();
    return Sidebar;
}());
exports.Sidebar = Sidebar;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQW10QjBCLEFBT25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS1MiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19wYXJhbSA9ICh0aGlzICYmIHRoaXMuX19wYXJhbSkgfHwgZnVuY3Rpb24gKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG52YXIgc2lkZWJhcl9jb250YWluZXJfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9zaWRlYmFyLWNvbnRhaW5lci5jb21wb25lbnRcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIFNpZGViYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2lkZWJhcihfY29udGFpbmVyLCBfcmVmLCBwbGF0Zm9ybUlkKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IF9jb250YWluZXI7XG4gICAgICAgIHRoaXMuX3JlZiA9IF9yZWY7XG4gICAgICAgIC8vIGBvcGVuZWRDaGFuZ2VgIGFsbG93cyBmb3IgXCIyLXdheVwiIGRhdGEgYmluZGluZ1xuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wZW5lZENoYW5nZSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMubW9kZSA9ICdvdmVyJztcbiAgICAgICAgdGhpcy5kb2NrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG9ja2VkU2l6ZSA9ICcwcHgnO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ3N0YXJ0JztcbiAgICAgICAgdGhpcy5hbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRvQ29sbGFwc2VPbkluaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRyYXBGb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dG9Gb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VPbkNsaWNrQmFja2Ryb3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMua2V5Q2xvc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5rZXlDb2RlID0gMjc7IC8vIERlZmF1bHQgdG8gRVNDIGtleVxuICAgICAgICB0aGlzLm9uT3BlblN0YXJ0ID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vbk9wZW5lZCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25DbG9zZVN0YXJ0ID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlZCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vbk1vZGVDaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLm9uUG9zaXRpb25DaGFuZ2UgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuX29uUmVyZW5kZXIgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9ICdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksJyArXG4gICAgICAgICAgICAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsIFt0YWJpbmRleF0sIFtjb250ZW50ZWRpdGFibGVdJztcbiAgICAgICAgdGhpcy5fdGFiSW5kZXhBdHRyID0gJ19fdGFiaW5kZXhfXyc7XG4gICAgICAgIHRoaXMuX3RhYkluZGV4SW5kaWNhdG9yQXR0ciA9ICdfX25nc2lkZWJhci10YWJpbmRleF9fJztcbiAgICAgICAgdGhpcy5fY2xpY2tFdmVudCA9ICdjbGljayc7XG4gICAgICAgIHRoaXMuX29uQ2xpY2tPdXRzaWRlQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25LZXlEb3duQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25SZXNpemVBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc8bmctc2lkZWJhcj4gbXVzdCBiZSBpbnNpZGUgYSA8bmctc2lkZWJhci1jb250YWluZXI+LiAnICtcbiAgICAgICAgICAgICAgICAnU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hcmtvbi9uZy1zaWRlYmFyI3VzYWdlIGZvciBtb3JlIGluZm8uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNCcm93c2VyID0gY29tbW9uXzEuaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgICAgIC8vIEhhbmRsZSB0YXBzIGluIGlPU1xuICAgICAgICBpZiAodGhpcy5faXNCcm93c2VyICYmIHV0aWxzXzEuaXNJT1MoKSAmJiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrRXZlbnQgPSAndG91Y2hzdGFydCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbm9ybWFsaXplUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uVHJhbnNpdGlvbkVuZCA9IHRoaXMuX29uVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9vbkZvY3VzVHJhcCA9IHRoaXMuX29uRm9jdXNUcmFwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX29uQ2xpY2tPdXRzaWRlID0gdGhpcy5fb25DbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fb25LZXlEb3duID0gdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NvbGxhcHNlID0gdGhpcy5fY29sbGFwc2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgU2lkZWJhci5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2hvdWxkQW5pbWF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb250YWluZXIuX2FkZFNpZGViYXIodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmF1dG9Db2xsYXBzZU9uSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5fY29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2lkZWJhci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydhbmltYXRlJ10gJiYgdGhpcy5fc2hvdWxkQW5pbWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2hvdWxkQW5pbWF0ZSA9IGNoYW5nZXNbJ2FuaW1hdGUnXS5jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2Nsb3NlT25DbGlja091dHNpZGUnXSkge1xuICAgICAgICAgICAgaWYgKGNoYW5nZXNbJ2Nsb3NlT25DbGlja091dHNpZGUnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0Q2xvc2VDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95Q2xvc2VDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2tleUNsb3NlJ10pIHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzWydrZXlDbG9zZSddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRDbG9zZUtleURvd25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveUNsb3NlS2V5RG93bkxpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ3Bvc2l0aW9uJ10pIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBcInN0YXJ0XCIgYW5kIFwiZW5kXCIgYWxpYXNlc1xuICAgICAgICAgICAgdGhpcy5fbm9ybWFsaXplUG9zaXRpb24oKTtcbiAgICAgICAgICAgIC8vIEVtaXQgY2hhbmdlIGluIHRpbWVvdXQgdG8gYWxsb3cgZm9yIHBvc2l0aW9uIGNoYW5nZSB0byBiZSByZW5kZXJlZCBmaXJzdFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25Qb3NpdGlvbkNoYW5nZS5lbWl0KGNoYW5nZXNbJ3Bvc2l0aW9uJ10uY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydtb2RlJ10pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uTW9kZUNoYW5nZS5lbWl0KGNoYW5nZXNbJ21vZGUnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2RvY2snXSkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUmVyZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snYXV0b0NvbGxhcHNlSGVpZ2h0J10gfHwgY2hhbmdlc1snYXV0b0NvbGxhcHNlV2lkdGgnXSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdENvbGxhcHNlTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ29wZW5lZCddKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkQW5pbWF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvdWxkQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZXNbJ29wZW5lZCddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTaWRlYmFyLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kZXN0cm95Q2xvc2VMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveUNvbGxhcHNlTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5fcmVtb3ZlU2lkZWJhcih0aGlzKTtcbiAgICB9O1xuICAgIC8vIFNpZGViYXIgdG9nZ2xpbmdcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIHNpZGViYXIgYW5kIGVtaXRzIHRoZSBhcHByb3ByaWF0ZSBldmVudHMuXG4gICAgICovXG4gICAgU2lkZWJhci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMub3BlbmVkQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgICAgIHRoaXMub25PcGVuU3RhcnQuZW1pdCgpO1xuICAgICAgICB0aGlzLl9yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5hbmltYXRlICYmICFfdGhpcy5faXNNb2RlU2xpZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZWxTaWRlYmFyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF90aGlzLl9vblRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NldEZvY3VzZWQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5faW5pdENsb3NlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbk9wZW5lZC5lbWl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgc2lkZWJhciBhbmQgZW1pdHMgdGhlIGFwcHJvcHJpYXRlIGV2ZW50cy5cbiAgICAgKi9cbiAgICBTaWRlYmFyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wZW5lZENoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlU3RhcnQuZW1pdCgpO1xuICAgICAgICB0aGlzLl9yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5hbmltYXRlICYmICFfdGhpcy5faXNNb2RlU2xpZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZWxTaWRlYmFyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF90aGlzLl9vblRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NldEZvY3VzZWQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGVzdHJveUNsb3NlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub25DbG9zZWQuZW1pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYW51YWxseSB0cmlnZ2VyIGEgcmUtcmVuZGVyIG9mIHRoZSBjb250YWluZXIuIFVzZWZ1bCBpZiB0aGUgc2lkZWJhciBjb250ZW50cyBtaWdodCBjaGFuZ2UuXG4gICAgICovXG4gICAgU2lkZWJhci5wcm90b3R5cGUudHJpZ2dlclJlcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX29uUmVyZW5kZXIuZW1pdCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqXG4gICAgICogQ29tcHV0ZXMgdGhlIHRyYW5zZm9ybSBzdHlsZXMgZm9yIHRoZSBzaWRlYmFyIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gVGhlIHRyYW5zZm9ybSBzdHlsZXMsIHdpdGggdGhlIFdlYktpdC1wcmVmaXhlZCB2ZXJzaW9uIGFzIHdlbGwuXG4gICAgICovXG4gICAgU2lkZWJhci5wcm90b3R5cGUuX2dldFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtU3R5bGUgPSAnJztcbiAgICAgICAgLy8gSGlkZXMgc2lkZWJhciBvZmYgc2NyZWVuIHdoZW4gY2xvc2VkXG4gICAgICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1EaXIgPSAndHJhbnNsYXRlJyArICh0aGlzLl9pc0xlZnRPclJpZ2h0ID8gJ1gnIDogJ1knKTtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVBbXQgPSAodGhpcy5faXNMZWZ0T3JUb3AgPyAnLScgOiAnJykgKyBcIjEwMCVcIjtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlID0gdHJhbnNmb3JtRGlyICsgXCIoXCIgKyB0cmFuc2xhdGVBbXQgKyBcIilcIjtcbiAgICAgICAgICAgIC8vIERvY2tlZCBtb2RlOiBwYXJ0aWFsbHkgcmVtYWlucyBvcGVuXG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgdXNpbmcgYGNhbGMoLi4uKWAgd2l0aGluIGB0cmFuc2Zvcm0oLi4uKWAgZG9lc24ndCB3b3JrIGluIElFXG4gICAgICAgICAgICBpZiAodGhpcy5kb2NrICYmIHRoaXMuX2RvY2tlZFNpemUgPiAwICYmICEodGhpcy5faXNNb2RlU2xpZGUgJiYgdGhpcy5vcGVuZWQpKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUgKz0gXCIgXCIgKyB0cmFuc2Zvcm1EaXIgKyBcIihcIiArICh0aGlzLl9pc0xlZnRPclRvcCA/ICcrJyA6ICctJykgKyB0aGlzLmRvY2tlZFNpemUgKyBcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm1TdHlsZSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtU3R5bGVcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqXG4gICAgICogSGFuZGxlcyB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IG9uIHRoZSBzaWRlYmFyIHRvIGVtaXQgdGhlIG9uT3BlbmVkL29uQ2xvc2VkIGV2ZW50cyBhZnRlciB0aGUgdHJhbnNmb3JtXG4gICAgICogdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQuXG4gICAgICovXG4gICAgU2lkZWJhci5wcm90b3R5cGUuX29uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5fZWxTaWRlYmFyLm5hdGl2ZUVsZW1lbnQgJiYgZS5wcm9wZXJ0eU5hbWUuZW5kc1dpdGgoJ3RyYW5zZm9ybScpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1c2VkKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0Q2xvc2VMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3BlbmVkLmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lDbG9zZUxpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZWQuZW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmQuZW1pdCgpO1xuICAgICAgICAgICAgdGhpcy5fZWxTaWRlYmFyLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuX29uVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTaWRlYmFyLnByb3RvdHlwZSwgXCJfc2hvdWxkVHJhcEZvY3VzXCIsIHtcbiAgICAgICAgLy8gRm9jdXMgb24gb3Blbi9jbG9zZVxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHdoZXRoZXIgZm9jdXMgc2hvdWxkIGJlIHRyYXBwZWQgd2l0aGluIHRoZSBzaWRlYmFyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcmFwIGZvY3VzIGluc2lkZSBzaWRlYmFyLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuZWQgJiYgdGhpcy50cmFwRm9jdXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFNldHMgZm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluc2lkZSB0aGUgc2lkZWJhci5cbiAgICAgKi9cbiAgICBTaWRlYmFyLnByb3RvdHlwZS5fZm9jdXNGaXJzdEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9mb2N1c2FibGVFbGVtZW50cyAmJiB0aGlzLl9mb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMb29wcyBmb2N1cyBiYWNrIHRvIHRoZSBzdGFydCBvZiB0aGUgc2lkZWJhciBpZiBzZXQgdG8gZG8gc28uXG4gICAgICovXG4gICAgU2lkZWJhci5wcm90b3R5cGUuX29uRm9jdXNUcmFwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFRyYXBGb2N1cyAmJiAhdGhpcy5fZWxTaWRlYmFyLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0SXRlbSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBhYmlsaXR5IHRvIGZvY3VzIHNpZGViYXIgZWxlbWVudHMgd2hlbiBpdCdzIG9wZW4vY2xvc2VkIHRvIGVuc3VyZSB0aGF0IHRoZSBzaWRlYmFyIGlzIGluZXJ0IHdoZW5cbiAgICAgKiBhcHByb3ByaWF0ZS5cbiAgICAgKi9cbiAgICBTaWRlYmFyLnByb3RvdHlwZS5fc2V0Rm9jdXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMuX2VsU2lkZWJhci5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKTtcbiAgICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkQmVmb3JlT3BlbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIGZvY3VzYWJpbGl0eSwgd2l0aCBwcmV2aW91cyB0YWJpbmRleCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fZm9jdXNhYmxlRWxlbWVudHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2VGFiSW5kZXggPSBlbC5nZXRBdHRyaWJ1dGUodGhpcy5fdGFiSW5kZXhBdHRyKTtcbiAgICAgICAgICAgICAgICB2YXIgd2FzVGFiSW5kZXhTZXQgPSBlbC5nZXRBdHRyaWJ1dGUodGhpcy5fdGFiSW5kZXhJbmRpY2F0b3JBdHRyKSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAocHJldlRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBwcmV2VGFiSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fdGFiSW5kZXhBdHRyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod2FzVGFiSW5kZXhTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fdGFiSW5kZXhJbmRpY2F0b3JBdHRyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c0ZpcnN0SXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzVHJhcCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBNYW51YWxseSBtYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgdW5mb2N1c2FibGUsIHNhdmluZyBleGlzdGluZyB0YWJpbmRleCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIF9jID0gdGhpcy5fZm9jdXNhYmxlRWxlbWVudHM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gX2NbX2JdO1xuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1RhYkluZGV4ID0gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUodGhpcy5fdGFiSW5kZXhJbmRpY2F0b3JBdHRyLCAnJyk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKHRoaXMuX3RhYkluZGV4QXR0ciwgZXhpc3RpbmdUYWJJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzVHJhcCwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBTZXQgZm9jdXMgYmFjayB0byBlbGVtZW50IGJlZm9yZSB0aGUgc2lkZWJhciB3YXMgb3BlbmVkXG4gICAgICAgICAgICBpZiAodGhpcy5fZm9jdXNlZEJlZm9yZU9wZW4gJiYgdGhpcy5hdXRvRm9jdXMgJiYgdGhpcy5faXNNb2RlT3Zlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRCZWZvcmVPcGVuLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNlZEJlZm9yZU9wZW4gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBDbG9zZSBldmVudCBoYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNsb3NlT25DbGlja091dHNpZGUgYW5kIGtleUNsb3NlIG9wdGlvbnMuXG4gICAgICovXG4gICAgU2lkZWJhci5wcm90b3R5cGUuX2luaXRDbG9zZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5faW5pdENsb3NlQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLl9pbml0Q2xvc2VLZXlEb3duTGlzdGVuZXIoKTtcbiAgICB9O1xuICAgIFNpZGViYXIucHJvdG90eXBlLl9pbml0Q2xvc2VDbGlja0xpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBJbiBhIHRpbWVvdXQgc28gdGhhdCB0aGluZ3MgcmVuZGVyIGZpcnN0XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wZW5lZCAmJiBfdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlICYmICFfdGhpcy5fb25DbGlja091dHNpZGVBdHRhY2hlZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoX3RoaXMuX2NsaWNrRXZlbnQsIF90aGlzLl9vbkNsaWNrT3V0c2lkZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX29uQ2xpY2tPdXRzaWRlQXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNpZGViYXIucHJvdG90eXBlLl9pbml0Q2xvc2VLZXlEb3duTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIEluIGEgdGltZW91dCBzbyB0aGF0IHRoaW5ncyByZW5kZXIgZmlyc3RcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3BlbmVkICYmIF90aGlzLmtleUNsb3NlICYmICFfdGhpcy5fb25LZXlEb3duQXR0YWNoZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX3RoaXMuX29uS2V5RG93bik7XG4gICAgICAgICAgICAgICAgX3RoaXMuX29uS2V5RG93bkF0dGFjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBhbGwgZXZlbnQgaGFuZGxlcnMgZnJvbSBfaW5pdENsb3NlTGlzdGVuZXJzLlxuICAgICAqL1xuICAgIFNpZGViYXIucHJvdG90eXBlLl9kZXN0cm95Q2xvc2VMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lDbG9zZUNsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveUNsb3NlS2V5RG93bkxpc3RlbmVyKCk7XG4gICAgfTtcbiAgICBTaWRlYmFyLnByb3RvdHlwZS5fZGVzdHJveUNsb3NlQ2xpY2tMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX29uQ2xpY2tPdXRzaWRlQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fY2xpY2tFdmVudCwgdGhpcy5fb25DbGlja091dHNpZGUpO1xuICAgICAgICAgICAgdGhpcy5fb25DbGlja091dHNpZGVBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTaWRlYmFyLnByb3RvdHlwZS5fZGVzdHJveUNsb3NlS2V5RG93bkxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fb25LZXlEb3duQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xuICAgICAgICAgICAgdGhpcy5fb25LZXlEb3duQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBgY2xpY2tgIGV2ZW50cyBvbiBhbnl0aGluZyB3aGlsZSB0aGUgc2lkZWJhciBpcyBvcGVuIGZvciB0aGUgY2xvc2VPbkNsaWNrT3V0c2lkZSBvcHRpb24uXG4gICAgICogUHJvZ3JhbWF0aWNhbGx5IGNsb3NlcyB0aGUgc2lkZWJhciBpZiBhIGNsaWNrIG9jY3VycyBvdXRzaWRlIHRoZSBzaWRlYmFyLlxuICAgICAqXG4gICAgICogQHBhcmFtIGUge01vdXNlRXZlbnR9IE1vdXNlIGNsaWNrIGV2ZW50LlxuICAgICAqL1xuICAgIFNpZGViYXIucHJvdG90eXBlLl9vbkNsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0aGlzLl9vbkNsaWNrT3V0c2lkZUF0dGFjaGVkICYmIHRoaXMuX2VsU2lkZWJhciAmJiAhdGhpcy5fZWxTaWRlYmFyLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGBrZXlkb3duYCBldmVudCBmb3IgdGhlIGtleUNsb3NlIG9wdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIHtLZXlib2FyZEV2ZW50fSBOb3JtYWxpemVkIGtleWRvd24gZXZlbnQuXG4gICAgICovXG4gICAgU2lkZWJhci5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gdGhpcy5rZXlDb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEF1dG8gY29sbGFwc2UgaGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgU2lkZWJhci5wcm90b3R5cGUuX2luaXRDb2xsYXBzZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYXV0b0NvbGxhcHNlSGVpZ2h0IHx8IHRoaXMuYXV0b0NvbGxhcHNlV2lkdGgpIHtcbiAgICAgICAgICAgIC8vIEluIGEgdGltZW91dCBzbyB0aGF0IHRoaW5ncyByZW5kZXIgZmlyc3RcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX29uUmVzaXplQXR0YWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF90aGlzLl9jb2xsYXBzZSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vblJlc2l6ZUF0dGFjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2lkZWJhci5wcm90b3R5cGUuX2Rlc3Ryb3lDb2xsYXBzZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX29uUmVzaXplQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9jb2xsYXBzZSk7XG4gICAgICAgICAgICB0aGlzLl9vblJlc2l6ZUF0dGFjaGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNpZGViYXIucHJvdG90eXBlLl9jb2xsYXBzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIHdpbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGlmICh0aGlzLmF1dG9Db2xsYXBzZUhlaWdodCkge1xuICAgICAgICAgICAgaWYgKHdpbkhlaWdodCA8PSB0aGlzLmF1dG9Db2xsYXBzZUhlaWdodCAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhc0NvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAod2luSGVpZ2h0ID4gdGhpcy5hdXRvQ29sbGFwc2VIZWlnaHQgJiYgdGhpcy5fd2FzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0b0NvbGxhcHNlV2lkdGgpIHtcbiAgICAgICAgICAgIGlmICh3aW5XaWR0aCA8PSB0aGlzLmF1dG9Db2xsYXBzZVdpZHRoICYmIHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh3aW5XaWR0aCA+IHRoaXMuYXV0b0NvbGxhcHNlV2lkdGggJiYgdGhpcy5fd2FzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTaWRlYmFyLnByb3RvdHlwZSwgXCJfaGVpZ2h0XCIsIHtcbiAgICAgICAgLy8gSGVscGVyc1xuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJucyB0aGUgcmVuZGVyZWQgaGVpZ2h0IG9mIHRoZSBzaWRlYmFyIChvciB0aGUgZG9ja2VkIHNpemUpLlxuICAgICAgICAgKiBUaGlzIGlzIHVzZWQgaW4gdGhlIHNpZGViYXIgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhlaWdodCBvZiBzaWRlYmFyLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZWxTaWRlYmFyLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faXNEb2NrZWQgPyB0aGlzLl9kb2NrZWRTaXplIDogdGhpcy5fZWxTaWRlYmFyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTaWRlYmFyLnByb3RvdHlwZSwgXCJfd2lkdGhcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHJlbmRlcmVkIHdpZHRoIG9mIHRoZSBzaWRlYmFyIChvciB0aGUgZG9ja2VkIHNpemUpLlxuICAgICAgICAgKiBUaGlzIGlzIHVzZWQgaW4gdGhlIHNpZGViYXIgY29udGFpbmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFdpZHRoIG9mIHNpZGViYXIuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbFNpZGViYXIubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0RvY2tlZCA/IHRoaXMuX2RvY2tlZFNpemUgOiB0aGlzLl9lbFNpZGViYXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2lkZWJhci5wcm90b3R5cGUsIFwiX2RvY2tlZFNpemVcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRvY2tlZCBzaXplIGFzIGEgbnVtYmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IERvY2tlZCBzaXplLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmRvY2tlZFNpemUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2lkZWJhci5wcm90b3R5cGUsIFwiX2lzTW9kZU92ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgc2lkZWJhciBpcyBvdmVyIG1vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFNpZGViYXIncyBtb2RlIGlzIFwib3ZlclwiLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnb3Zlcic7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTaWRlYmFyLnByb3RvdHlwZSwgXCJfaXNNb2RlUHVzaFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzaWRlYmFyIGlzIHB1c2ggbW9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gU2lkZWJhcidzIG1vZGUgaXMgXCJwdXNoXCIuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdwdXNoJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNpZGViYXIucHJvdG90eXBlLCBcIl9pc01vZGVTbGlkZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzaWRlYmFyIGlzIHNsaWRlIG1vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFNpZGViYXIncyBtb2RlIGlzIFwic2xpZGVcIi5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3NsaWRlJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNpZGViYXIucHJvdG90eXBlLCBcIl9pc0RvY2tlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzaWRlYmFyIGlzIFwiZG9ja2VkXCIgLS0gaS5lLiBpdCBpcyBjbG9zZWQgYnV0IGluIGRvY2sgbW9kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gU2lkZWJhciBpcyBkb2NrZWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvY2sgJiYgdGhpcy5kb2NrZWRTaXplICYmICF0aGlzLm9wZW5lZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNpZGViYXIucHJvdG90eXBlLCBcIl9pc0xlZnRPclRvcFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzaWRlYmFyIGlzIHBvc2l0aW9uZWQgYXQgdGhlIGxlZnQgb3IgdG9wLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBTaWRlYmFyIGlzIHBvc2l0aW9uZWQgYXQgdGhlIGxlZnQgb3IgdG9wLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMucG9zaXRpb24gPT09ICd0b3AnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2lkZWJhci5wcm90b3R5cGUsIFwiX2lzTGVmdE9yUmlnaHRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgc2lkZWJhciBpcyBwb3NpdGlvbmVkIGF0IHRoZSBsZWZ0IG9yIHJpZ2h0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBTaWRlYmFyIGlzIHBvc2l0aW9uZWQgYXQgdGhlIGxlZnQgb3IgcmlnaHQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0JztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNpZGViYXIucHJvdG90eXBlLCBcIl9pc0luZXJ0XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHNpZGViYXIgaXMgaW5lcnQgLS0gaS5lLiB0aGUgY29udGVudHMgY2Fubm90IGJlIGZvY3VzZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFNpZGViYXIgaXMgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5vcGVuZWQgJiYgIXRoaXMuZG9jaztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogXCJOb3JtYWxpemVzXCIgcG9zaXRpb24uIEZvciBleGFtcGxlLCBcInN0YXJ0XCIgd291bGQgYmUgXCJsZWZ0XCIgaWYgdGhlIHBhZ2UgaXMgTFRSLlxuICAgICAqL1xuICAgIFNpZGViYXIucHJvdG90eXBlLl9ub3JtYWxpemVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGx0ciA9IHV0aWxzXzEuaXNMVFIoKTtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdzdGFydCcpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBsdHIgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24gPT09ICdlbmQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbHRyID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgfVxuICAgIH07XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJvcGVuZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLk91dHB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkV2ZW50RW1pdHRlcilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJvcGVuZWRDaGFuZ2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLklucHV0KCksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgU2lkZWJhci5wcm90b3R5cGUsIFwibW9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgU2lkZWJhci5wcm90b3R5cGUsIFwiZG9ja1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJkb2NrZWRTaXplXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIFNpZGViYXIucHJvdG90eXBlLCBcInBvc2l0aW9uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJhbmltYXRlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKVxuICAgIF0sIFNpZGViYXIucHJvdG90eXBlLCBcImF1dG9Db2xsYXBzZUhlaWdodFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJhdXRvQ29sbGFwc2VXaWR0aFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgU2lkZWJhci5wcm90b3R5cGUsIFwiYXV0b0NvbGxhcHNlT25Jbml0XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIFNpZGViYXIucHJvdG90eXBlLCBcInNpZGViYXJDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJhcmlhTGFiZWxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLklucHV0KCksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIFNpZGViYXIucHJvdG90eXBlLCBcInRyYXBGb2N1c1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgU2lkZWJhci5wcm90b3R5cGUsIFwiYXV0b0ZvY3VzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJzaG93QmFja2Ryb3BcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLklucHV0KCksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIFNpZGViYXIucHJvdG90eXBlLCBcImNsb3NlT25DbGlja0JhY2tkcm9wXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJjbG9zZU9uQ2xpY2tPdXRzaWRlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJrZXlDbG9zZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5wdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJrZXlDb2RlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG4gICAgXSwgU2lkZWJhci5wcm90b3R5cGUsIFwib25PcGVuU3RhcnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLk91dHB1dCgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgY29yZV8xLkV2ZW50RW1pdHRlcilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJvbk9wZW5lZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRXZlbnRFbWl0dGVyKVxuICAgIF0sIFNpZGViYXIucHJvdG90eXBlLCBcIm9uQ2xvc2VTdGFydFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRXZlbnRFbWl0dGVyKVxuICAgIF0sIFNpZGViYXIucHJvdG90eXBlLCBcIm9uQ2xvc2VkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG4gICAgXSwgU2lkZWJhci5wcm90b3R5cGUsIFwib25UcmFuc2l0aW9uRW5kXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG4gICAgXSwgU2lkZWJhci5wcm90b3R5cGUsIFwib25Nb2RlQ2hhbmdlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5PdXRwdXQoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIGNvcmVfMS5FdmVudEVtaXR0ZXIpXG4gICAgXSwgU2lkZWJhci5wcm90b3R5cGUsIFwib25Qb3NpdGlvbkNoYW5nZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuT3V0cHV0KCksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRXZlbnRFbWl0dGVyKVxuICAgIF0sIFNpZGViYXIucHJvdG90eXBlLCBcIl9vblJlcmVuZGVyXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5WaWV3Q2hpbGQoJ3NpZGViYXInLCB7IHN0YXRpYzogZmFsc2UgfSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBjb3JlXzEuRWxlbWVudFJlZilcbiAgICBdLCBTaWRlYmFyLnByb3RvdHlwZSwgXCJfZWxTaWRlYmFyXCIsIHZvaWQgMCk7XG4gICAgU2lkZWJhciA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbmctc2lkZWJhcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPGFzaWRlICNzaWRlYmFyXFxuICAgICAgcm9sZT1cXFwiY29tcGxlbWVudGFyeVxcXCJcXG4gICAgICBbYXR0ci5hcmlhLWhpZGRlbl09XFxcIiFvcGVuZWRcXFwiXFxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XFxcImFyaWFMYWJlbFxcXCJcXG4gICAgICBjbGFzcz1cXFwibmctc2lkZWJhciBuZy1zaWRlYmFyLS17e29wZW5lZCA/ICdvcGVuZWQnIDogJ2Nsb3NlZCd9fSBuZy1zaWRlYmFyLS17e3Bvc2l0aW9ufX0gbmctc2lkZWJhci0te3ttb2RlfX1cXFwiXFxuICAgICAgW2NsYXNzLm5nLXNpZGViYXItLWRvY2tlZF09XFxcIl9pc0RvY2tlZFxcXCJcXG4gICAgICBbY2xhc3Mubmctc2lkZWJhci0taW5lcnRdPVxcXCJfaXNJbmVydFxcXCJcXG4gICAgICBbY2xhc3Mubmctc2lkZWJhci0tYW5pbWF0ZV09XFxcImFuaW1hdGVcXFwiXFxuICAgICAgW25nQ2xhc3NdPVxcXCJzaWRlYmFyQ2xhc3NcXFwiXFxuICAgICAgW25nU3R5bGVdPVxcXCJfZ2V0U3R5bGUoKVxcXCI+XFxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcbiAgICA8L2FzaWRlPlxcbiAgXCIsXG4gICAgICAgICAgICBzdHlsZXM6IFtcIlxcbiAgICAubmctc2lkZWJhciB7XFxuICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3VjaC1hY3Rpb246IGF1dG87XFxuICAgICAgd2lsbC1jaGFuZ2U6IGluaXRpYWw7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcblxcbiAgICAubmctc2lkZWJhci0tbGVmdCB7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIC5uZy1zaWRlYmFyLS1yaWdodCB7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgfVxcblxcbiAgICAubmctc2lkZWJhci0tdG9wIHtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIHRvcDogMDtcXG4gICAgfVxcblxcbiAgICAubmctc2lkZWJhci0tYm90dG9tIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgfVxcblxcbiAgICAubmctc2lkZWJhci0taW5lcnQge1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgICB9XFxuXFxuICAgIC5uZy1zaWRlYmFyLS1hbmltYXRlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSk7XFxuICAgIH1cXG4gIFwiXSxcbiAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogY29yZV8xLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxuICAgICAgICB9KSxcbiAgICAgICAgX19wYXJhbSgwLCBjb3JlXzEuT3B0aW9uYWwoKSksXG4gICAgICAgIF9fcGFyYW0oMiwgY29yZV8xLkluamVjdChjb3JlXzEuUExBVEZPUk1fSUQpKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtzaWRlYmFyX2NvbnRhaW5lcl9jb21wb25lbnRfMS5TaWRlYmFyQ29udGFpbmVyLFxuICAgICAgICAgICAgY29yZV8xLkNoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgT2JqZWN0XSlcbiAgICBdLCBTaWRlYmFyKTtcbiAgICByZXR1cm4gU2lkZWJhcjtcbn0oKSk7XG5leHBvcnRzLlNpZGViYXIgPSBTaWRlYmFyO1xuIl19