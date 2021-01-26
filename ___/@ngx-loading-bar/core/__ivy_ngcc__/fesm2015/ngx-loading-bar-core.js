import { Injectable, PLATFORM_ID, Inject, NgModule, Component, Input, ViewEncapsulation, defineInjectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isPlatformBrowser, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function LoadingBarComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("color", ctx_r3.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r3.diameter)("height", ctx_r3.diameter);
} }
function LoadingBarComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵelement(2, "div", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const progress_r2 = ɵngcc0.ɵɵnextContext().ngIf;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("color", ctx_r4.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("background", ctx_r4.color, ɵngcc0.ɵɵdefaultStyleSanitizer)("height", ctx_r4.height)("width", progress_r2 + "%");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("height", ctx_r4.height);
} }
function LoadingBarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LoadingBarComponent_ng_container_0_div_1_Template, 2, 6, "div", 1);
    ɵngcc0.ɵɵtemplate(2, LoadingBarComponent_ng_container_0_div_2_Template, 3, 10, "div", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.includeSpinner);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.includeBar);
} }
class LoadingBarService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.progress$ = (/** @type {?} */ ((new Subject()).pipe(debounceTime(0))));
        this._pendingRequests = 0;
        this._value = 0;
    }
    /**
     * @param {?=} initialValue
     * @return {?}
     */
    start(initialValue = 2) {
        ++this._pendingRequests;
        if (this._value === 0 || this._pendingRequests === 1) {
            // Inserts the loading bar element into the dom, and sets it to 2%
            this.set(this._pendingRequests === 1 && this._value > 0 ? this._value : initialValue);
        }
    }
    /**
     * @return {?}
     */
    stop() {
        this.complete();
        while (this._pendingRequests > 0) {
            this.complete();
        }
    }
    /**
     * @return {?}
     */
    complete() {
        if (this._pendingRequests === 0 && this._value === 0) {
            return;
        }
        if (this._pendingRequests > 0) {
            --this._pendingRequests;
        }
        if (this._pendingRequests === 0 || (this._pendingRequests === 0 && this._value > 0)) {
            if (this._value !== 100) {
                this.set(100);
            }
            // Attempt to aggregate any start/complete calls within 500ms:
            setTimeout(() => this.set(0), 500);
        }
    }
    /**
     * Set the loading bar's width to a certain percent.
     *
     * @param {?} n any value between 0 and 100
     * @return {?}
     */
    set(n) {
        if (!isPlatformBrowser(this.platformId)) {
            this._pendingRequests = 0;
            return;
        }
        if (n === 0 && this._pendingRequests > 0) {
            n = 2;
        }
        this._value = n;
        this.progress$.next(n);
        if (this._pendingRequests === 0) {
            return;
        }
        // increment loadingbar to give the illusion that there is always
        // progress but make sure to cancel the previous timeouts so we don't
        // have multiple incs running at the same time.
        clearTimeout(this._incTimeout);
        if (this._value > 0 && this._value < 100) {
            this._incTimeout = setTimeout(() => this.increment(), 250);
        }
    }
    /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     * @param {?=} rnd
     * @return {?}
     */
    increment(rnd = 0) {
        if (rnd > 0) {
            this.set(this._value + rnd);
        }
        /** @type {?} */
        const stat = this._value;
        if (stat >= 0 && stat < 25) {
            // Start out between 3 - 6% increments
            rnd = (Math.random() * (5 - 3 + 1) + 3);
        }
        else if (stat >= 25 && stat < 65) {
            // increment between 0 - 3%
            rnd = (Math.random() * 3);
        }
        else if (stat >= 65 && stat < 90) {
            // increment between 0 - 2%
            rnd = (Math.random() * 2);
        }
        else if (stat >= 90 && stat < 99) {
            // finally, increment it .5 %
            rnd = 0.5;
        }
        else {
            // after 99%, don't increment:
            rnd = 0;
        }
        this.set(this._value + rnd);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress$.complete();
    }
}
LoadingBarService.ɵfac = function LoadingBarService_Factory(t) { return new (t || LoadingBarService)(ɵngcc0.ɵɵinject(PLATFORM_ID)); };
LoadingBarService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LoadingBarService, factory: LoadingBarService.ɵfac, providedIn: 'root' });
/** @nocollapse */
LoadingBarService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ LoadingBarService.ngInjectableDef = defineInjectable({ factory: function LoadingBarService_Factory() { return new LoadingBarService(inject(PLATFORM_ID)); }, token: LoadingBarService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LoadingBarService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingBarComponent {
    /**
     * @param {?} loader
     */
    constructor(loader) {
        this.loader = loader;
        this.includeSpinner = true;
        this.includeBar = true;
        this.fixed = true;
        this.value = null;
    }
}
LoadingBarComponent.ɵfac = function LoadingBarComponent_Factory(t) { return new (t || LoadingBarComponent)(ɵngcc0.ɵɵdirectiveInject(LoadingBarService)); };
LoadingBarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LoadingBarComponent, selectors: [["ngx-loading-bar"]], hostVars: 2, hostBindings: function LoadingBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("loading-bar-fixed", ctx.fixed);
    } }, inputs: { includeSpinner: "includeSpinner", includeBar: "includeBar", fixed: "fixed", value: "value", color: "color", height: "height", diameter: "diameter" }, decls: 2, vars: 3, consts: [[4, "ngIf"], ["id", "loading-bar-spinner", 3, "color", 4, "ngIf"], ["id", "loading-bar", 3, "color", 4, "ngIf"], ["id", "loading-bar-spinner"], [1, "spinner-icon"], ["id", "loading-bar"], [1, "bar"], [1, "peg"]], template: function LoadingBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, LoadingBarComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        ɵngcc0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.value !== null ? ctx.value : ɵngcc0.ɵɵpipeBind1(1, 1, ctx.loader.progress$));
    } }, directives: [ɵngcc1.NgIf], pipes: [ɵngcc1.AsyncPipe], styles: ["[_nghost-%COMP%]{position:relative;display:block}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:fixed}.loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   .loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{right:10px;left:unset}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:none;transition:350ms linear;color:#29d}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{right:0;left:unset}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{display:block;position:absolute;z-index:10002;top:5px;left:0}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"] });
/** @nocollapse */
LoadingBarComponent.ctorParameters = () => [
    { type: LoadingBarService }
];
LoadingBarComponent.propDecorators = {
    includeSpinner: [{ type: Input }],
    includeBar: [{ type: Input }],
    fixed: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: Input }],
    diameter: [{ type: Input }],
    value: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LoadingBarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-loading-bar',
                template: `
    <ng-container *ngIf="(value !== null ? value : loader.progress$|async) as progress">
      <div id="loading-bar-spinner" *ngIf="includeSpinner" [style.color]="color">
        <div [style.width]="diameter" [style.height]="diameter" class="spinner-icon"></div>
      </div>
      <div id="loading-bar" *ngIf="includeBar" [style.color]="color">
        <div class="bar" [style.background]="color" [style.height]="height" [style.width]="progress + '%'">
          <div class="peg" [style.height]="height"></div>
        </div>
      </div>
    </ng-container>
  `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.Emulated,
                host: {
                    '[class.loading-bar-fixed]': 'fixed'
                },
                styles: [":host{position:relative;display:block}:host.loading-bar-fixed>div .bar{position:fixed}:host.loading-bar-fixed>div#loading-bar-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host.loading-bar-fixed>div#loading-bar-spinner{right:10px;left:unset}:host.loading-bar-fixed>div .peg{display:block}:host>div{pointer-events:none;transition:350ms linear;color:#29d}:host>div .bar{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host>div .bar{right:0;left:unset}:host>div .peg{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}:host>div#loading-bar-spinner{display:block;position:absolute;z-index:10002;top:5px;left:0}:host>div#loading-bar-spinner .spinner-icon{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }]
    }], function () { return [{ type: LoadingBarService }]; }, { includeSpinner: [{
            type: Input
        }], includeBar: [{
            type: Input
        }], fixed: [{
            type: Input
        }], value: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], diameter: [{
            type: Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingBarModule {
}
LoadingBarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LoadingBarModule });
LoadingBarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LoadingBarModule_Factory(t) { return new (t || LoadingBarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LoadingBarModule, { declarations: function () { return [LoadingBarComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [LoadingBarComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LoadingBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [LoadingBarComponent],
                exports: [LoadingBarComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LoadingBarModule, LoadingBarComponent, LoadingBarService };

//# sourceMappingURL=ngx-loading-bar-core.js.map