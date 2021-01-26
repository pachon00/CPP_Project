import { ComponentRef, Injector, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Overlay } from '../overlay/overlay';
import { ToastRef } from './toast-injector';
import { ToastContainerDirective } from './toast.directive';
import { GlobalConfig, IndividualConfig, ToastToken } from './toastr-config';
import * as ɵngcc0 from '@angular/core';
export interface ActiveToast<C> {
    /** Your Toast ID. Use this to close it individually */
    toastId: number;
    /** the message of your toast. Stored to prevent duplicates */
    message: string;
    /** a reference to the component see portal.ts */
    portal: ComponentRef<C>;
    /** a reference to your toast */
    toastRef: ToastRef<C>;
    /** triggered when toast is active */
    onShown: Observable<any>;
    /** triggered when toast is destroyed */
    onHidden: Observable<any>;
    /** triggered on toast click */
    onTap: Observable<any>;
    /** available for your use in custom toast */
    onAction: Observable<any>;
}
export declare class ToastrService {
    private overlay;
    private _injector;
    private sanitizer;
    private ngZone;
    toastrConfig: GlobalConfig;
    currentlyActive: number;
    toasts: ActiveToast<any>[];
    overlayContainer: ToastContainerDirective;
    previousToastMessage: string | undefined;
    private index;
    constructor(token: ToastToken, overlay: Overlay, _injector: Injector, sanitizer: DomSanitizer, ngZone: NgZone);
    /** show toast */
    show(message?: string, title?: string, override?: Partial<IndividualConfig>, type?: string): ActiveToast<any>;
    /** show successful toast */
    success(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;
    /** show error toast */
    error(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;
    /** show info toast */
    info(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;
    /** show warning toast */
    warning(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast<any>;
    /**
     * Remove all or a single toast by id
     */
    clear(toastId?: number): void;
    /**
     * Remove and destroy a single toast by id
     */
    remove(toastId: number): boolean;
    /**
     * Determines if toast message is already shown
     */
    findDuplicate(message: string, resetOnDuplicate: boolean, countDuplicates: boolean): ActiveToast<any>;
    /** create a clone of global config and apply individual settings */
    private applyConfig;
    /**
     * Find toast object by id
     */
    private _findToast;
    /**
     * Determines the need to run inside angular's zone then builds the toast
     */
    private _preBuildNotification;
    /**
     * Creates and attaches toast data to component
     * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
     */
    private _buildNotification;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastrService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ToastrService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidG9hc3RyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXknO1xuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LWluamVjdG9yJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnLCBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFRva2VuIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlVG9hc3Q8Qz4ge1xuICAgIC8qKiBZb3VyIFRvYXN0IElELiBVc2UgdGhpcyB0byBjbG9zZSBpdCBpbmRpdmlkdWFsbHkgKi9cbiAgICB0b2FzdElkOiBudW1iZXI7XG4gICAgLyoqIHRoZSBtZXNzYWdlIG9mIHlvdXIgdG9hc3QuIFN0b3JlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZXMgKi9cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgLyoqIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgc2VlIHBvcnRhbC50cyAqL1xuICAgIHBvcnRhbDogQ29tcG9uZW50UmVmPEM+O1xuICAgIC8qKiBhIHJlZmVyZW5jZSB0byB5b3VyIHRvYXN0ICovXG4gICAgdG9hc3RSZWY6IFRvYXN0UmVmPEM+O1xuICAgIC8qKiB0cmlnZ2VyZWQgd2hlbiB0b2FzdCBpcyBhY3RpdmUgKi9cbiAgICBvblNob3duOiBPYnNlcnZhYmxlPGFueT47XG4gICAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGRlc3Ryb3llZCAqL1xuICAgIG9uSGlkZGVuOiBPYnNlcnZhYmxlPGFueT47XG4gICAgLyoqIHRyaWdnZXJlZCBvbiB0b2FzdCBjbGljayAqL1xuICAgIG9uVGFwOiBPYnNlcnZhYmxlPGFueT47XG4gICAgLyoqIGF2YWlsYWJsZSBmb3IgeW91ciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXG4gICAgb25BY3Rpb246IE9ic2VydmFibGU8YW55Pjtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRvYXN0clNlcnZpY2Uge1xuICAgIHByaXZhdGUgb3ZlcmxheTtcbiAgICBwcml2YXRlIF9pbmplY3RvcjtcbiAgICBwcml2YXRlIHNhbml0aXplcjtcbiAgICBwcml2YXRlIG5nWm9uZTtcbiAgICB0b2FzdHJDb25maWc6IEdsb2JhbENvbmZpZztcbiAgICBjdXJyZW50bHlBY3RpdmU6IG51bWJlcjtcbiAgICB0b2FzdHM6IEFjdGl2ZVRvYXN0PGFueT5bXTtcbiAgICBvdmVybGF5Q29udGFpbmVyOiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZTtcbiAgICBwcmV2aW91c1RvYXN0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgaW5kZXg7XG4gICAgY29uc3RydWN0b3IodG9rZW46IFRvYXN0VG9rZW4sIG92ZXJsYXk6IE92ZXJsYXksIF9pbmplY3RvcjogSW5qZWN0b3IsIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBuZ1pvbmU6IE5nWm9uZSk7XG4gICAgLyoqIHNob3cgdG9hc3QgKi9cbiAgICBzaG93KG1lc3NhZ2U/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4sIHR5cGU/OiBzdHJpbmcpOiBBY3RpdmVUb2FzdDxhbnk+O1xuICAgIC8qKiBzaG93IHN1Y2Nlc3NmdWwgdG9hc3QgKi9cbiAgICBzdWNjZXNzKG1lc3NhZ2U/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4pOiBBY3RpdmVUb2FzdDxhbnk+O1xuICAgIC8qKiBzaG93IGVycm9yIHRvYXN0ICovXG4gICAgZXJyb3IobWVzc2FnZT86IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPik6IEFjdGl2ZVRvYXN0PGFueT47XG4gICAgLyoqIHNob3cgaW5mbyB0b2FzdCAqL1xuICAgIGluZm8obWVzc2FnZT86IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPik6IEFjdGl2ZVRvYXN0PGFueT47XG4gICAgLyoqIHNob3cgd2FybmluZyB0b2FzdCAqL1xuICAgIHdhcm5pbmcobWVzc2FnZT86IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPik6IEFjdGl2ZVRvYXN0PGFueT47XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBvciBhIHNpbmdsZSB0b2FzdCBieSBpZFxuICAgICAqL1xuICAgIGNsZWFyKHRvYXN0SWQ/OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbmQgZGVzdHJveSBhIHNpbmdsZSB0b2FzdCBieSBpZFxuICAgICAqL1xuICAgIHJlbW92ZSh0b2FzdElkOiBudW1iZXIpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdG9hc3QgbWVzc2FnZSBpcyBhbHJlYWR5IHNob3duXG4gICAgICovXG4gICAgZmluZER1cGxpY2F0ZShtZXNzYWdlOiBzdHJpbmcsIHJlc2V0T25EdXBsaWNhdGU6IGJvb2xlYW4sIGNvdW50RHVwbGljYXRlczogYm9vbGVhbik6IEFjdGl2ZVRvYXN0PGFueT47XG4gICAgLyoqIGNyZWF0ZSBhIGNsb25lIG9mIGdsb2JhbCBjb25maWcgYW5kIGFwcGx5IGluZGl2aWR1YWwgc2V0dGluZ3MgKi9cbiAgICBwcml2YXRlIGFwcGx5Q29uZmlnO1xuICAgIC8qKlxuICAgICAqIEZpbmQgdG9hc3Qgb2JqZWN0IGJ5IGlkXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZmluZFRvYXN0O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIG5lZWQgdG8gcnVuIGluc2lkZSBhbmd1bGFyJ3Mgem9uZSB0aGVuIGJ1aWxkcyB0aGUgdG9hc3RcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wcmVCdWlsZE5vdGlmaWNhdGlvbjtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCBhdHRhY2hlcyB0b2FzdCBkYXRhIHRvIGNvbXBvbmVudFxuICAgICAqIHJldHVybnMgdGhlIGFjdGl2ZSB0b2FzdCwgb3IgaW4gY2FzZSBwcmV2ZW50RHVwbGljYXRlcyBpcyBlbmFibGVkIHRoZSBvcmlnaW5hbC9ub24tZHVwbGljYXRlIGFjdGl2ZSB0b2FzdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9idWlsZE5vdGlmaWNhdGlvbjtcbn1cbiJdfQ==