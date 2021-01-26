/**
 * @license Angular v9.0.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { CompilerFactory } from '@angular/core';
import { CompilerOptions } from '@angular/core';
import { Injector } from '@angular/core';
import { PlatformRef } from '@angular/core';
import { StaticProvider } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { ɵTestingCompiler } from '@angular/core/testing';
import { ɵTestingCompilerFactory } from '@angular/core/testing';

/**
 * NgModule for testing.
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser/testing';
export declare class BrowserDynamicTestingModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<BrowserDynamicTestingModule, never, never, [typeof ɵngcc1.BrowserTestingModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<BrowserDynamicTestingModule>;
}

/**
 * @publicApi
 */
export declare const platformBrowserDynamicTesting: (extraProviders?: StaticProvider[] | undefined) => PlatformRef;

export declare const ɵangular_packages_platform_browser_dynamic_testing_testing_a: StaticProvider[];

export declare class ɵangular_packages_platform_browser_dynamic_testing_testing_b implements ɵTestingCompilerFactory {
    private _injector;
    private _compilerFactory;
    constructor(_injector: Injector, _compilerFactory: CompilerFactory);
    createTestingCompiler(options: CompilerOptions[]): ɵTestingCompiler;
}

/**
 * A DOM based implementation of the TestComponentRenderer.
 */
export declare class ɵDOMTestComponentRenderer extends TestComponentRenderer {
    private _doc;
    constructor(_doc: any);
    insertRootElement(rootElId: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵDOMTestComponentRenderer>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵDOMTestComponentRenderer>;
}

/**
 * Platform for dynamic tests
 *
 * @publicApi
 */
export declare const ɵplatformCoreDynamicTesting: (extraProviders?: any[]) => PlatformRef;

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5kLnRzIiwic291cmNlcyI6WyJ0ZXN0aW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHY5LjAuMFxuICogKGMpIDIwMTAtMjAyMCBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG5pbXBvcnQgeyBDb21waWxlckZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcGlsZXJPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlc3RDb21wb25lbnRSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcbmltcG9ydCB7IMm1VGVzdGluZ0NvbXBpbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuaW1wb3J0IHsgybVUZXN0aW5nQ29tcGlsZXJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbi8qKlxyXG4gKiBOZ01vZHVsZSBmb3IgdGVzdGluZy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IHBsYXRmb3JtQnJvd3NlckR5bmFtaWNUZXN0aW5nOiAoZXh0cmFQcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdIHwgdW5kZWZpbmVkKSA9PiBQbGF0Zm9ybVJlZjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1YW5ndWxhcl9wYWNrYWdlc19wbGF0Zm9ybV9icm93c2VyX2R5bmFtaWNfdGVzdGluZ190ZXN0aW5nX2E6IFN0YXRpY1Byb3ZpZGVyW107XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfcGxhdGZvcm1fYnJvd3Nlcl9keW5hbWljX3Rlc3RpbmdfdGVzdGluZ19iIGltcGxlbWVudHMgybVUZXN0aW5nQ29tcGlsZXJGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgX2luamVjdG9yO1xyXG4gICAgcHJpdmF0ZSBfY29tcGlsZXJGYWN0b3J5O1xyXG4gICAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvciwgX2NvbXBpbGVyRmFjdG9yeTogQ29tcGlsZXJGYWN0b3J5KTtcclxuICAgIGNyZWF0ZVRlc3RpbmdDb21waWxlcihvcHRpb25zOiBDb21waWxlck9wdGlvbnNbXSk6IMm1VGVzdGluZ0NvbXBpbGVyO1xyXG59XHJcblxyXG4vKipcclxuICogQSBET00gYmFzZWQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFRlc3RDb21wb25lbnRSZW5kZXJlci5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1RE9NVGVzdENvbXBvbmVudFJlbmRlcmVyIGV4dGVuZHMgVGVzdENvbXBvbmVudFJlbmRlcmVyIHtcclxuICAgIHByaXZhdGUgX2RvYztcclxuICAgIGNvbnN0cnVjdG9yKF9kb2M6IGFueSk7XHJcbiAgICBpbnNlcnRSb290RWxlbWVudChyb290RWxJZDogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBsYXRmb3JtIGZvciBkeW5hbWljIHRlc3RzXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1cGxhdGZvcm1Db3JlRHluYW1pY1Rlc3Rpbmc6IChleHRyYVByb3ZpZGVycz86IGFueVtdKSA9PiBQbGF0Zm9ybVJlZjtcclxuXHJcbmV4cG9ydCB7IH1cclxuIl19