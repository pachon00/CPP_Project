import { NgZone, OnDestroy } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IndividualConfig, ToastPackage } from './toastr-config';
import { ToastrService } from './toastr.service';
import * as ɵngcc0 from '@angular/core';
export declare class Toast implements OnDestroy {
    protected toastrService: ToastrService;
    toastPackage: ToastPackage;
    protected ngZone?: NgZone;
    message?: string | SafeHtml | null;
    title?: string;
    options: IndividualConfig;
    duplicatesCount: number;
    originalTimeout: number;
    /** width of progress bar */
    width: number;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    /** controls animation */
    state: {
        value: string;
        params: {
            easeTime: string | number;
            easing: string;
        };
    };
    /** hides component when waiting to be displayed */
    readonly displayStyle: string;
    private timeout;
    private intervalId;
    private hideTime;
    private sub;
    private sub1;
    private sub2;
    private sub3;
    constructor(toastrService: ToastrService, toastPackage: ToastPackage, ngZone?: NgZone);
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
    outsideTimeout(func: Function, timeout: number): void;
    outsideInterval(func: Function, timeout: number): void;
    private runInsideAngular;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Toast>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Toast, "[toast-component]", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRvYXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSW5kaXZpZHVhbENvbmZpZywgVG9hc3RQYWNrYWdlIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRvYXN0IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZTtcbiAgICB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZTtcbiAgICBwcm90ZWN0ZWQgbmdab25lPzogTmdab25lO1xuICAgIG1lc3NhZ2U/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGw7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgb3B0aW9uczogSW5kaXZpZHVhbENvbmZpZztcbiAgICBkdXBsaWNhdGVzQ291bnQ6IG51bWJlcjtcbiAgICBvcmlnaW5hbFRpbWVvdXQ6IG51bWJlcjtcbiAgICAvKiogd2lkdGggb2YgcHJvZ3Jlc3MgYmFyICovXG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cbiAgICB0b2FzdENsYXNzZXM6IHN0cmluZztcbiAgICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXG4gICAgc3RhdGU6IHtcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBlYXNlVGltZTogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgICAgICAgZWFzaW5nOiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKiogaGlkZXMgY29tcG9uZW50IHdoZW4gd2FpdGluZyB0byBiZSBkaXNwbGF5ZWQgKi9cbiAgICByZWFkb25seSBkaXNwbGF5U3R5bGU6IHN0cmluZztcbiAgICBwcml2YXRlIHRpbWVvdXQ7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbElkO1xuICAgIHByaXZhdGUgaGlkZVRpbWU7XG4gICAgcHJpdmF0ZSBzdWI7XG4gICAgcHJpdmF0ZSBzdWIxO1xuICAgIHByaXZhdGUgc3ViMjtcbiAgICBwcml2YXRlIHN1YjM7XG4gICAgY29uc3RydWN0b3IodG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSwgdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2UsIG5nWm9uZT86IE5nWm9uZSk7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBhY3RpdmF0ZXMgdG9hc3QgYW5kIHNldHMgdGltZW91dFxuICAgICAqL1xuICAgIGFjdGl2YXRlVG9hc3QoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiB1cGRhdGVzIHByb2dyZXNzIGJhciB3aWR0aFxuICAgICAqL1xuICAgIHVwZGF0ZVByb2dyZXNzKCk6IHZvaWQ7XG4gICAgcmVzZXRUaW1lb3V0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogdGVsbHMgdG9hc3RyU2VydmljZSB0byByZW1vdmUgdGhpcyB0b2FzdCBhZnRlciBhbmltYXRpb24gdGltZVxuICAgICAqL1xuICAgIHJlbW92ZSgpOiB2b2lkO1xuICAgIHRhcFRvYXN0KCk6IHZvaWQ7XG4gICAgc3RpY2tBcm91bmQoKTogdm9pZDtcbiAgICBkZWxheWVkSGlkZVRvYXN0KCk6IHZvaWQ7XG4gICAgb3V0c2lkZVRpbWVvdXQoZnVuYzogRnVuY3Rpb24sIHRpbWVvdXQ6IG51bWJlcik6IHZvaWQ7XG4gICAgb3V0c2lkZUludGVydmFsKGZ1bmM6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIpOiB2b2lkO1xuICAgIHByaXZhdGUgcnVuSW5zaWRlQW5ndWxhcjtcbn1cbiJdfQ==