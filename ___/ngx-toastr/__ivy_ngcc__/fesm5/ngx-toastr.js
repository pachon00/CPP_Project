import { __decorate, __metadata, __extends, __param, __values, __assign } from 'tslib';
import { Directive, ElementRef, NgModule, InjectionToken, defineInjectable, inject, Injectable, Inject, ComponentFactoryResolver, ApplicationRef, SecurityContext, INJECTOR, NgZone, Injector, HostBinding, HostListener, Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT, CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@angular/common';

var _c0 = ["toast-component", ""];
function Toast_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r223 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function Toast_button_0_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r223); var ctx_r222 = ɵngcc0.ɵɵnextContext(); return ctx_r222.remove(); });
    ɵngcc0.ɵɵelementStart(1, "span", 6);
    ɵngcc0.ɵɵtext(2, "\u00D7");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function Toast_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r224 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("[", ctx_r224.duplicatesCount + 1, "]");
} }
function Toast_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, Toast_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r218 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r218.options.titleClass);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r218.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r218.title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r218.duplicatesCount);
} }
function Toast_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    var ctx_r219 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r219.options.messageClass);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r219.message, ɵngcc0.ɵɵsanitizeHtml);
} }
function Toast_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r220 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r220.options.messageClass);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r220.message);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r220.message, " ");
} }
function Toast_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r221 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r221.width + "%");
} }
function ToastNoAnimation_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r231 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function ToastNoAnimation_button_0_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r231); var ctx_r230 = ɵngcc0.ɵɵnextContext(); return ctx_r230.remove(); });
    ɵngcc0.ɵɵelementStart(1, "span", 6);
    ɵngcc0.ɵɵtext(2, "\u00D7");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function ToastNoAnimation_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r232 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("[", ctx_r232.duplicatesCount + 1, "]");
} }
function ToastNoAnimation_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, ToastNoAnimation_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r226 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r226.options.titleClass);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r226.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r226.title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r226.duplicatesCount);
} }
function ToastNoAnimation_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    var ctx_r227 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r227.options.messageClass);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r227.message, ɵngcc0.ɵɵsanitizeHtml);
} }
function ToastNoAnimation_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r228 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r228.options.messageClass);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r228.message);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r228.message, " ");
} }
function ToastNoAnimation_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r229 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r229.width + "%");
} }
var ToastContainerDirective = /** @class */ (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective = __decorate([ __metadata("design:paramtypes", [ElementRef])
    ], ToastContainerDirective);
ToastContainerDirective.ɵfac = function ToastContainerDirective_Factory(t) { return new (t || ToastContainerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ToastContainerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ToastContainerDirective, selectors: [["", "toastContainer", ""]], exportAs: ["toastContainer"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastContainerDirective, [{
        type: Directive,
        args: [{
                selector: '[toastContainer]',
                exportAs: 'toastContainer'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
    return ToastContainerDirective;
}());
var ToastContainerModule = /** @class */ (function () {
    function ToastContainerModule() {
    }
ToastContainerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastContainerModule });
ToastContainerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastContainerModule_Factory(t) { return new (t || ToastContainerModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastContainerModule, { declarations: [ToastContainerDirective], exports: [ToastContainerDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastContainerModule, [{
        type: NgModule,
        args: [{
                declarations: [ToastContainerDirective],
                exports: [ToastContainerDirective]
            }]
    }], function () { return []; }, null); })();
    return ToastContainerModule;
}());

/**
 * Everything a toast needs to launch
 */
var ToastPackage = /** @class */ (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        var _this = this;
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
        this.toastRef.afterClosed().subscribe(function () {
            _this._onAction.complete();
            _this._onTap.complete();
        });
    }
    /** Fired on click */
    ToastPackage.prototype.triggerTap = function () {
        this._onTap.next();
        if (this.config.tapToDismiss) {
            this._onTap.complete();
        }
    };
    ToastPackage.prototype.onTap = function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    ToastPackage.prototype.triggerAction = function (action) {
        this._onAction.next(action);
    };
    ToastPackage.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
var DefaultNoComponentGlobalConfig = {
    maxOpened: 0,
    autoDismiss: false,
    newestOnTop: true,
    preventDuplicates: false,
    countDuplicates: false,
    resetTimeoutOnDuplicate: false,
    iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
    },
    // Individual
    closeButton: false,
    disableTimeOut: false,
    timeOut: 5000,
    extendedTimeOut: 1000,
    enableHtml: false,
    progressBar: false,
    toastClass: 'ngx-toastr',
    positionClass: 'toast-top-right',
    titleClass: 'toast-title',
    messageClass: 'toast-message',
    easing: 'ease-in',
    easeTime: 300,
    tapToDismiss: true,
    onActivateTick: false,
    progressAnimation: 'decreasing',
};
var TOAST_CONFIG = new InjectionToken('ToastConfig');

/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = /** @class */ (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    ComponentPortal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host) {
            this._attachedHost = undefined;
            return host.detach();
        }
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 */
var BasePortalHost = /** @class */ (function () {
    function BasePortalHost() {
    }
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost();
        }
        this._attachedPortal = undefined;
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = undefined;
        }
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = /** @class */ (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(BasePortalHost));

/** Container inside which all toasts will render. */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(_document) {
        this._document = _document;
    }
    OverlayContainer.prototype.ngOnDestroy = function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        var container = this._document.createElement('div');
        container.classList.add('overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.ngInjectableDef = defineInjectable({ factory: function OverlayContainer_Factory() { return new OverlayContainer(inject(DOCUMENT)); }, token: OverlayContainer, providedIn: "root" });
    OverlayContainer = __decorate([ __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], OverlayContainer);
OverlayContainer.ɵfac = function OverlayContainer_Factory(t) { return new (t || OverlayContainer)(ɵngcc0.ɵɵinject(DOCUMENT)); };
OverlayContainer.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: OverlayContainer, factory: function (t) { return OverlayContainer.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayContainer, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return OverlayContainer;
}());

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        if (newestOnTop === void 0) { newestOnTop = true; }
        return this._portalHost.attach(portal, newestOnTop);
    };
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());

/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._document = _document;
        // Namespace panes by overlay container
        this._paneElements = new Map();
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (positionClass === void 0) { positionClass = ''; }
        if (!this._paneElements.get(overlayContainer)) {
            this._paneElements.set(overlayContainer, {});
        }
        if (!this._paneElements.get(overlayContainer)[positionClass]) {
            this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements.get(overlayContainer)[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var pane = this._document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        pane.classList.add('toast-container');
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    Overlay.prototype._createOverlayRef = function (pane) {
        return new OverlayRef(this._createPortalHost(pane));
    };
    Overlay.ngInjectableDef = defineInjectable({ factory: function Overlay_Factory() { return new Overlay(inject(OverlayContainer), inject(ComponentFactoryResolver), inject(ApplicationRef), inject(DOCUMENT)); }, token: Overlay, providedIn: "root" });
    Overlay = __decorate([ __param(3, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [OverlayContainer,
            ComponentFactoryResolver,
            ApplicationRef, Object])
    ], Overlay);
Overlay.ɵfac = function Overlay_Factory(t) { return new (t || Overlay)(ɵngcc0.ɵɵinject(OverlayContainer), ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(DOCUMENT)); };
Overlay.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: Overlay, factory: function (t) { return Overlay.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Overlay, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: OverlayContainer }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ApplicationRef }, { type: Object, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return Overlay;
}());

/**
 * Reference to a toast opened via the Toastr service.
 */
var ToastRef = /** @class */ (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Count of duplicates of this toast */
        this.duplicatesCount = 0;
        /** Subject for notifying the user that the toast has finished closing. */
        this._afterClosed = new Subject();
        /** triggered when toast is activated */
        this._activate = new Subject();
        /** notifies the toast that it should close before the timeout */
        this._manualClose = new Subject();
        /** notifies the toast that it should reset the timeouts */
        this._resetTimeout = new Subject();
        /** notifies the toast that it should count a duplicate toast */
        this._countDuplicate = new Subject();
    }
    ToastRef.prototype.manualClose = function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    ToastRef.prototype.manualClosed = function () {
        return this._manualClose.asObservable();
    };
    ToastRef.prototype.timeoutReset = function () {
        return this._resetTimeout.asObservable();
    };
    ToastRef.prototype.countDuplicate = function () {
        return this._countDuplicate.asObservable();
    };
    /**
     * Close the toast.
     */
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._manualClose.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
        this._resetTimeout.complete();
        this._countDuplicate.complete();
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    ToastRef.prototype.isInactive = function () {
        return this._activate.isStopped;
    };
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the toast has started opening. */
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    /** Reset the toast timouts and count duplicates */
    ToastRef.prototype.onDuplicate = function (resetTimeout, countDuplicate) {
        if (resetTimeout) {
            this._resetTimeout.next();
        }
        if (countDuplicate) {
            this._countDuplicate.next(++this.duplicatesCount);
        }
    };
    return ToastRef;
}());
/** Custom injector type specifically for instantiating components with a toast. */
var ToastInjector = /** @class */ (function () {
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    ToastInjector.prototype.get = function (token, notFoundValue, flags) {
        if (token === ToastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue, flags);
    };
    return ToastInjector;
}());

var ToastrService = /** @class */ (function () {
    function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.currentlyActive = 0;
        this.toasts = [];
        this.index = 0;
        this.toastrConfig = __assign({}, token.default, token.config);
        if (token.config.iconClasses) {
            this.toastrConfig.iconClasses = __assign({}, token.default.iconClasses, token.config.iconClasses);
        }
    }
    /** show toast */
    ToastrService.prototype.show = function (message, title, override, type) {
        if (override === void 0) { override = {}; }
        if (type === void 0) { type = ''; }
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show successful toast */
    ToastrService.prototype.success = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.success || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show error toast */
    ToastrService.prototype.error = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.error || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show info toast */
    ToastrService.prototype.info = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.info || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show warning toast */
    ToastrService.prototype.warning = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.warning || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     */
    ToastrService.prototype.clear = function (toastId) {
        var e_1, _a;
        try {
            // Call every toastRef manualClose function
            for (var _b = __values(this.toasts), _c = _b.next(); !_c.done; _c = _b.next()) {
                var toast = _c.value;
                if (toastId !== undefined) {
                    if (toast.toastId === toastId) {
                        toast.toastRef.manualClose();
                        return;
                    }
                }
                else {
                    toast.toastRef.manualClose();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Remove and destroy a single toast by id
     */
    ToastrService.prototype.remove = function (toastId) {
        var found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive < this.toastrConfig.maxOpened &&
            this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     */
    ToastrService.prototype.findDuplicate = function (message, resetOnDuplicate, countDuplicates) {
        for (var i = 0; i < this.toasts.length; i++) {
            var toast = this.toasts[i];
            if (toast.message === message) {
                toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
                return toast;
            }
        }
        return null;
    };
    /** create a clone of global config and apply individual settings */
    ToastrService.prototype.applyConfig = function (override) {
        if (override === void 0) { override = {}; }
        return __assign({}, this.toastrConfig, override);
    };
    /**
     * Find toast object by id
     */
    ToastrService.prototype._findToast = function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Determines the need to run inside angular's zone then builds the toast
     */
    ToastrService.prototype._preBuildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (config.onActivateTick) {
            return this.ngZone.run(function () {
                return _this._buildNotification(toastType, message, title, config);
            });
        }
        return this._buildNotification(toastType, message, title, config);
    };
    /**
     * Creates and attaches toast data to component
     * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
     */
    ToastrService.prototype._buildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (!config.toastComponent) {
            throw new Error('toastComponent required');
        }
        // max opened and auto dismiss = true
        // if timeout = 0 resetting it would result in setting this.hideTime = Date.now(). Hence, we only want to reset timeout if there is
        // a timeout at all
        var duplicate = this.findDuplicate(message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);
        if (message && this.toastrConfig.preventDuplicates && duplicate !== null) {
            return duplicate;
        }
        this.previousToastMessage = message;
        var keepInactive = false;
        if (this.toastrConfig.maxOpened &&
            this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[0].toastId);
            }
        }
        var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        var sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        var toastRef = new ToastRef(overlayRef);
        var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        var toastInjector = new ToastInjector(toastPackage, this._injector);
        var component = new ComponentPortal(config.toastComponent, toastInjector);
        var portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        toastRef.componentInstance = portal._component;
        var ins = {
            toastId: this.index,
            message: message || '',
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
            portal: portal
        };
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastrService.ngInjectableDef = defineInjectable({ factory: function ToastrService_Factory() { return new ToastrService(inject(TOAST_CONFIG), inject(Overlay), inject(INJECTOR), inject(DomSanitizer), inject(NgZone)); }, token: ToastrService, providedIn: "root" });
    ToastrService = __decorate([ __param(0, Inject(TOAST_CONFIG)),
        __metadata("design:paramtypes", [Object, Overlay,
            Injector,
            DomSanitizer,
            NgZone])
    ], ToastrService);
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(ɵngcc0.ɵɵinject(TOAST_CONFIG), ɵngcc0.ɵɵinject(Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
ToastrService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ToastrService, factory: function (t) { return ToastrService.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastrService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [TOAST_CONFIG]
            }] }, { type: Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.NgZone }]; }, null); })();
    return ToastrService;
}());

var Toast = /** @class */ (function () {
    function Toast(toastrService, toastPackage, ngZone) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.ngZone = ngZone;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = {
            value: 'inactive',
            params: {
                easeTime: this.toastPackage.config.easeTime,
                easing: 'ease-in'
            }
        };
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this.duplicatesCount = count;
        });
    }
    Object.defineProperty(Toast.prototype, "displayStyle", {
        /** hides component when waiting to be displayed */
        get: function () {
            if (this.state.value === 'inactive') {
                return 'none';
            }
        },
        enumerable: true,
        configurable: true
    });
    Toast.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = __assign({}, this.state, { value: 'active' });
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.outsideTimeout(function () { return _this.remove(); }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.outsideInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
    };
    /**
     * updates progress bar width
     */
    Toast.prototype.updateProgress = function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    Toast.prototype.resetTimeout = function () {
        var _this = this;
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state = __assign({}, this.state, { value: 'active' });
        this.outsideTimeout(function () { return _this.remove(); }, this.originalTimeout);
        this.options.timeOut = this.originalTimeout;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = __assign({}, this.state, { value: 'removed' });
        this.outsideTimeout(function () { return _this.toastrService.remove(_this.toastPackage.toastId); }, +this.toastPackage.config.easeTime);
    };
    Toast.prototype.tapToast = function () {
        if (this.state.value === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    Toast.prototype.stickAround = function () {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.disableTimeOut ||
            this.options.extendedTimeOut === 0 ||
            this.state.value === 'removed') {
            return;
        }
        this.outsideTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    Toast.prototype.outsideTimeout = function (func, timeout) {
        var _this = this;
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () {
                return (_this.timeout = setTimeout(function () { return _this.runInsideAngular(func); }, timeout));
            });
        }
        else {
            this.timeout = setTimeout(function () { return func(); }, timeout);
        }
    };
    Toast.prototype.outsideInterval = function (func, timeout) {
        var _this = this;
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () {
                return (_this.intervalId = setInterval(function () { return _this.runInsideAngular(func); }, timeout));
            });
        }
        else {
            this.intervalId = setInterval(function () { return func(); }, timeout);
        }
    };
    Toast.prototype.runInsideAngular = function (func) {
        if (this.ngZone) {
            this.ngZone.run(function () { return func(); });
        }
        else {
            func();
        }
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], Toast.prototype, "toastClasses", void 0);
    __decorate([
        HostBinding('@flyInOut'),
        __metadata("design:type", Object)
    ], Toast.prototype, "state", void 0);
    __decorate([
        HostBinding('style.display'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Toast.prototype, "displayStyle", null);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Toast.prototype, "tapToast", null);
    __decorate([
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Toast.prototype, "stickAround", null);
    __decorate([
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Toast.prototype, "delayedHideToast", null);
    Toast = __decorate([ __metadata("design:paramtypes", [ToastrService,
            ToastPackage,
            NgZone])
    ], Toast);
Toast.ɵfac = function Toast_Factory(t) { return new (t || Toast)(ɵngcc0.ɵɵdirectiveInject(ToastrService), ɵngcc0.ɵɵdirectiveInject(ToastPackage), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
Toast.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Toast, selectors: [["", "toast-component", ""]], hostVars: 5, hostBindings: function Toast_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function Toast_click_HostBindingHandler($event) { return ctx.tapToast(); })("mouseenter", function Toast_mouseenter_HostBindingHandler($event) { return ctx.stickAround(); })("mouseleave", function Toast_mouseleave_HostBindingHandler($event) { return ctx.delayedHideToast(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵupdateSyntheticHostBinding("@flyInOut", ctx.state);
        ɵngcc0.ɵɵclassMap(ctx.toastClasses);
        ɵngcc0.ɵɵstyleProp("display", ctx.displayStyle);
    } }, attrs: _c0, decls: 5, vars: 5, consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alertdialog", "aria-live", "polite", 3, "innerHTML"], ["role", "alertdialog", "aria-live", "polite"], [1, "toast-progress"]], template: function Toast_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Toast_button_0_Template, 3, 0, "button", 0);
        ɵngcc0.ɵɵtemplate(1, Toast_div_1_Template, 3, 5, "div", 1);
        ɵngcc0.ɵɵtemplate(2, Toast_div_2_Template, 1, 3, "div", 2);
        ɵngcc0.ɵɵtemplate(3, Toast_div_3_Template, 2, 4, "div", 3);
        ɵngcc0.ɵɵtemplate(4, Toast_div_4_Template, 2, 2, "div", 4);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.closeButton);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message && ctx.options.enableHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message && !ctx.options.enableHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.progressBar);
    } }, directives: [ɵngcc2.NgIf], encapsulation: 2, data: { animation: [
            trigger('flyInOut', [
                state('inactive', style({ opacity: 0 })),
                state('active', style({ opacity: 1 })),
                state('removed', style({ opacity: 0 })),
                transition('inactive => active', animate('{{ easeTime }}ms {{ easing }}')),
                transition('active => removed', animate('{{ easeTime }}ms {{ easing }}'))
            ])
        ] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Toast, [{
        type: Component,
        args: [{
                selector: '[toast-component]',
                template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                animations: [
                    trigger('flyInOut', [
                        state('inactive', style({ opacity: 0 })),
                        state('active', style({ opacity: 1 })),
                        state('removed', style({ opacity: 0 })),
                        transition('inactive => active', animate('{{ easeTime }}ms {{ easing }}')),
                        transition('active => removed', animate('{{ easeTime }}ms {{ easing }}'))
                    ])
                ],
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ToastrService }, { type: ToastPackage }, { type: ɵngcc0.NgZone }]; }, { toastClasses: [{
            type: HostBinding,
            args: ['class']
        }], state: [{
            type: HostBinding,
            args: ['@flyInOut']
        }], displayStyle: [{
            type: HostBinding,
            args: ['style.display']
        }], tapToast: [{
            type: HostListener,
            args: ['click']
        }], stickAround: [{
            type: HostListener,
            args: ['mouseenter']
        }], delayedHideToast: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
    return Toast;
}());

var DefaultGlobalConfig = __assign({}, DefaultNoComponentGlobalConfig, { toastComponent: Toast });
var ToastrModule = /** @class */ (function () {
    function ToastrModule() {
    }
    ToastrModule_1 = ToastrModule;
    ToastrModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastrModule_1,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultGlobalConfig,
                        config: config,
                    },
                },
            ],
        };
    };
    var ToastrModule_1;
ToastrModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastrModule });
ToastrModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastrModule_Factory(t) { return new (t || ToastrModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastrModule, { declarations: function () { return [Toast]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Toast]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastrModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [Toast],
                exports: [Toast],
                entryComponents: [Toast]
            }]
    }], function () { return []; }, null); })();
    return ToastrModule;
}());
var ToastrComponentlessModule = /** @class */ (function () {
    function ToastrComponentlessModule() {
    }
    ToastrComponentlessModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastrModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoComponentGlobalConfig,
                        config: config,
                    },
                },
            ],
        };
    };
ToastrComponentlessModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastrComponentlessModule });
ToastrComponentlessModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastrComponentlessModule_Factory(t) { return new (t || ToastrComponentlessModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastrComponentlessModule, { imports: function () { return [CommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastrComponentlessModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule]
            }]
    }], function () { return []; }, null); })();
    return ToastrComponentlessModule;
}());

var ToastNoAnimation = /** @class */ (function () {
    function ToastNoAnimation(toastrService, toastPackage, appRef) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this.duplicatesCount = count;
        });
    }
    Object.defineProperty(ToastNoAnimation.prototype, "displayStyle", {
        /** hides component when waiting to be displayed */
        get: function () {
            if (this.state === 'inactive') {
                return 'none';
            }
        },
        enumerable: true,
        configurable: true
    });
    ToastNoAnimation.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    ToastNoAnimation.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     */
    ToastNoAnimation.prototype.updateProgress = function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    ToastNoAnimation.prototype.resetTimeout = function () {
        var _this = this;
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state = 'active';
        this.options.timeOut = this.originalTimeout;
        this.timeout = setTimeout(function () { return _this.remove(); }, this.originalTimeout);
        this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    ToastNoAnimation.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () {
            return _this.toastrService.remove(_this.toastPackage.toastId);
        });
    };
    ToastNoAnimation.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    ToastNoAnimation.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    ToastNoAnimation.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.disableTimeOut ||
            this.options.extendedTimeOut === 0 ||
            this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ToastNoAnimation.prototype, "toastClasses", void 0);
    __decorate([
        HostBinding('style.display'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ToastNoAnimation.prototype, "displayStyle", null);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToastNoAnimation.prototype, "tapToast", null);
    __decorate([
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToastNoAnimation.prototype, "stickAround", null);
    __decorate([
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToastNoAnimation.prototype, "delayedHideToast", null);
    ToastNoAnimation = __decorate([ __metadata("design:paramtypes", [ToastrService,
            ToastPackage,
            ApplicationRef])
    ], ToastNoAnimation);
ToastNoAnimation.ɵfac = function ToastNoAnimation_Factory(t) { return new (t || ToastNoAnimation)(ɵngcc0.ɵɵdirectiveInject(ToastrService), ɵngcc0.ɵɵdirectiveInject(ToastPackage), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ApplicationRef)); };
ToastNoAnimation.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastNoAnimation, selectors: [["", "toast-component", ""]], hostVars: 4, hostBindings: function ToastNoAnimation_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ToastNoAnimation_click_HostBindingHandler($event) { return ctx.tapToast(); })("mouseenter", function ToastNoAnimation_mouseenter_HostBindingHandler($event) { return ctx.stickAround(); })("mouseleave", function ToastNoAnimation_mouseleave_HostBindingHandler($event) { return ctx.delayedHideToast(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.toastClasses);
        ɵngcc0.ɵɵstyleProp("display", ctx.displayStyle);
    } }, attrs: _c0, decls: 5, vars: 5, consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]], template: function ToastNoAnimation_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ToastNoAnimation_button_0_Template, 3, 0, "button", 0);
        ɵngcc0.ɵɵtemplate(1, ToastNoAnimation_div_1_Template, 3, 5, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ToastNoAnimation_div_2_Template, 1, 3, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ToastNoAnimation_div_3_Template, 2, 4, "div", 3);
        ɵngcc0.ɵɵtemplate(4, ToastNoAnimation_div_4_Template, 2, 2, "div", 4);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.closeButton);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message && ctx.options.enableHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message && !ctx.options.enableHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.progressBar);
    } }, directives: [ɵngcc2.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastNoAnimation, [{
        type: Component,
        args: [{
                selector: '[toast-component]',
                template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
            }]
    }], function () { return [{ type: ToastrService }, { type: ToastPackage }, { type: ɵngcc0.ApplicationRef }]; }, { toastClasses: [{
            type: HostBinding,
            args: ['class']
        }], displayStyle: [{
            type: HostBinding,
            args: ['style.display']
        }], tapToast: [{
            type: HostListener,
            args: ['click']
        }], stickAround: [{
            type: HostListener,
            args: ['mouseenter']
        }], delayedHideToast: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
    return ToastNoAnimation;
}());
var DefaultNoAnimationsGlobalConfig = __assign({}, DefaultNoComponentGlobalConfig, { toastComponent: ToastNoAnimation });
var ToastNoAnimationModule = /** @class */ (function () {
    function ToastNoAnimationModule() {
    }
    ToastNoAnimationModule_1 = ToastNoAnimationModule;
    ToastNoAnimationModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastNoAnimationModule_1,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoAnimationsGlobalConfig,
                        config: config,
                    },
                },
            ],
        };
    };
    var ToastNoAnimationModule_1;
ToastNoAnimationModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastNoAnimationModule });
ToastNoAnimationModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastNoAnimationModule_Factory(t) { return new (t || ToastNoAnimationModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastNoAnimationModule, { declarations: function () { return [ToastNoAnimation]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ToastNoAnimation]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastNoAnimationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [ToastNoAnimation],
                exports: [ToastNoAnimation],
                entryComponents: [ToastNoAnimation]
            }]
    }], function () { return []; }, null); })();
    return ToastNoAnimationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { BasePortalHost, ComponentPortal, DefaultGlobalConfig, DefaultNoAnimationsGlobalConfig, DefaultNoComponentGlobalConfig, Overlay, OverlayContainer, OverlayRef, TOAST_CONFIG, Toast, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastNoAnimation, ToastNoAnimationModule, ToastPackage, ToastRef, ToastrComponentlessModule, ToastrModule, ToastrService };

//# sourceMappingURL=ngx-toastr.js.map