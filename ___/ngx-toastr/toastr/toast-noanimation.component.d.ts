import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ApplicationRef, OnDestroy } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { GlobalConfig, IndividualConfig, ToastPackage } from './toastr-config';
import { ToastrService } from './toastr.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class ToastNoAnimation implements OnDestroy {
    protected toastrService: ToastrService;
    toastPackage: ToastPackage;
    protected appRef: ApplicationRef;
    message?: string | SafeHtml | null;
    title?: string;
    options: IndividualConfig;
    duplicatesCount: number;
    originalTimeout: number;
    /** width of progress bar */
    width: number;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    /** hides component when waiting to be displayed */
    readonly displayStyle: string;
    /** controls animation */
    state: string;
    private timeout;
    private intervalId;
    private hideTime;
    private sub;
    private sub1;
    private sub2;
    private sub3;
    constructor(toastrService: ToastrService, toastPackage: ToastPackage, appRef: ApplicationRef);
    ngOnDestroy(): void;
    /**
     * activates toast and sets timeout
     */
    activateToast(): void;
    /**
     * updates progress bar width
     */
    updateProgress(): void;
    resetTimeout(): void;
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove(): void;
    tapToast(): void;
    stickAround(): void;
    delayedHideToast(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastNoAnimation>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ToastNoAnimation, "[toast-component]", never, {}, {}, never>;
}
export declare const DefaultNoAnimationsGlobalConfig: GlobalConfig;
export declare class ToastNoAnimationModule {
    static forRoot(config?: Partial<GlobalConfig>): (ModuleWithProviders)&{ngModule:ToastNoAnimationModule};
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ToastNoAnimationModule, [typeof ToastNoAnimation], [typeof ɵngcc1.CommonModule], [typeof ToastNoAnimation]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ToastNoAnimationModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtbm9hbmltYXRpb24uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRvYXN0LW5vYW5pbWF0aW9uLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBOzs7b0RBR29ELHVEQUFtQjs7O0FBQ3ZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdHIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUb2FzdE5vQW5pbWF0aW9uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZTtcbiAgICB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZTtcbiAgICBwcm90ZWN0ZWQgYXBwUmVmOiBBcHBsaWNhdGlvblJlZjtcbiAgICBtZXNzYWdlPzogc3RyaW5nIHwgU2FmZUh0bWwgfCBudWxsO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIG9wdGlvbnM6IEluZGl2aWR1YWxDb25maWc7XG4gICAgZHVwbGljYXRlc0NvdW50OiBudW1iZXI7XG4gICAgb3JpZ2luYWxUaW1lb3V0OiBudW1iZXI7XG4gICAgLyoqIHdpZHRoIG9mIHByb2dyZXNzIGJhciAqL1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgLyoqIGEgY29tYmluYXRpb24gb2YgdG9hc3QgdHlwZSBhbmQgb3B0aW9ucy50b2FzdENsYXNzICovXG4gICAgdG9hc3RDbGFzc2VzOiBzdHJpbmc7XG4gICAgLyoqIGhpZGVzIGNvbXBvbmVudCB3aGVuIHdhaXRpbmcgdG8gYmUgZGlzcGxheWVkICovXG4gICAgcmVhZG9ubHkgZGlzcGxheVN0eWxlOiBzdHJpbmc7XG4gICAgLyoqIGNvbnRyb2xzIGFuaW1hdGlvbiAqL1xuICAgIHN0YXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0aW1lb3V0O1xuICAgIHByaXZhdGUgaW50ZXJ2YWxJZDtcbiAgICBwcml2YXRlIGhpZGVUaW1lO1xuICAgIHByaXZhdGUgc3ViO1xuICAgIHByaXZhdGUgc3ViMTtcbiAgICBwcml2YXRlIHN1YjI7XG4gICAgcHJpdmF0ZSBzdWIzO1xuICAgIGNvbnN0cnVjdG9yKHRvYXN0clNlcnZpY2U6IFRvYXN0clNlcnZpY2UsIHRvYXN0UGFja2FnZTogVG9hc3RQYWNrYWdlLCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIGFjdGl2YXRlcyB0b2FzdCBhbmQgc2V0cyB0aW1lb3V0XG4gICAgICovXG4gICAgYWN0aXZhdGVUb2FzdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIHVwZGF0ZXMgcHJvZ3Jlc3MgYmFyIHdpZHRoXG4gICAgICovXG4gICAgdXBkYXRlUHJvZ3Jlc3MoKTogdm9pZDtcbiAgICByZXNldFRpbWVvdXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiB0ZWxscyB0b2FzdHJTZXJ2aWNlIHRvIHJlbW92ZSB0aGlzIHRvYXN0IGFmdGVyIGFuaW1hdGlvbiB0aW1lXG4gICAgICovXG4gICAgcmVtb3ZlKCk6IHZvaWQ7XG4gICAgdGFwVG9hc3QoKTogdm9pZDtcbiAgICBzdGlja0Fyb3VuZCgpOiB2b2lkO1xuICAgIGRlbGF5ZWRIaWRlVG9hc3QoKTogdm9pZDtcbn1cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IERlZmF1bHROb0FuaW1hdGlvbnNHbG9iYWxDb25maWc6IEdsb2JhbENvbmZpZztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRvYXN0Tm9BbmltYXRpb25Nb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFBhcnRpYWw8R2xvYmFsQ29uZmlnPik6IE1vZHVsZVdpdGhQcm92aWRlcnM7XG59XG4iXX0=