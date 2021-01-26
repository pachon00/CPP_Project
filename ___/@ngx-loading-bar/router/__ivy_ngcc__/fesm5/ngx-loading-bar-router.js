import { NgModule } from '@angular/core';
import { RouterModule, Router, NavigationStart, NavigationError, NavigationEnd, NavigationCancel } from '@angular/router';
import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@ngx-loading-bar/core';
var LoadingBarRouterModule = /** @class */ (function () {
    function LoadingBarRouterModule(router, loadingBar) {
        var _this = this;
        router.events.subscribe(function (event) {
            /** @type {?} */
            var state = _this.getCurrentNavigationState(router);
            if (state && state.ignoreLoadingBar) {
                return;
            }
            if (event instanceof NavigationStart) {
                loadingBar.start();
            }
            if ((event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel)) {
                loadingBar.complete();
            }
        });
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    LoadingBarRouterModule.prototype.getCurrentNavigationState = /**
     * @private
     * @param {?} router
     * @return {?}
     */
    function (router) {
        // `getCurrentNavigation` only available in angular `7.2`
        /** @type {?} */
        var currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
        if (currentNavigation && currentNavigation.extras) {
            return currentNavigation.extras.state;
        }
        return {};
    };
    /** @nocollapse */
    LoadingBarRouterModule.ctorParameters = function () { return [
        { type: Router },
        { type: LoadingBarService }
    ]; };
LoadingBarRouterModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LoadingBarRouterModule });
LoadingBarRouterModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LoadingBarRouterModule_Factory(t) { return new (t || LoadingBarRouterModule)(ɵngcc0.ɵɵinject(ɵngcc1.Router), ɵngcc0.ɵɵinject(ɵngcc2.LoadingBarService)); }, imports: [[
            RouterModule,
            LoadingBarModule,
        ],
        RouterModule,
        LoadingBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LoadingBarRouterModule, { imports: function () { return [RouterModule,
        LoadingBarModule]; }, exports: function () { return [RouterModule,
        LoadingBarModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LoadingBarRouterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule,
                    LoadingBarModule,
                ],
                exports: [
                    RouterModule,
                    LoadingBarModule,
                ]
            }]
    }], function () { return [{ type: ɵngcc1.Router }, { type: ɵngcc2.LoadingBarService }]; }, null); })();
    return LoadingBarRouterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LoadingBarRouterModule };

//# sourceMappingURL=ngx-loading-bar-router.js.map