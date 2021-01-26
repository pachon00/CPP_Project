import { Injector } from '@angular/core';
/**
 * Options available when opening new modal windows with `NgbModal.open()` method.
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbModalOptions {
    /**
     * `aria-labelledby` attribute value to set on the modal window.
     *
     * @since 2.2.0
     */
    ariaLabelledBy?: string;
    /**
     * If `true`, the backdrop element will be created for a given modal.
     *
     * Alternatively, specify `'static'` for a backdrop which doesn't close the modal on click.
     *
     * Default value is `true`.
     */
    backdrop?: boolean | 'static';
    /**
     * Callback right before the modal will be dismissed.
     *
     * If this function returns:
     * * `false`
     * * a promise resolved with `false`
     * * a promise that is rejected
     *
     * then the modal won't be dismissed.
     */
    beforeDismiss?: () => boolean | Promise<boolean>;
    /**
     * If `true`, the modal will be centered vertically.
     *
     * Default value is `false`.
     *
     * @since 1.1.0
     */
    centered?: boolean;
    /**
     * A selector specifying the element all new modal windows should be appended to.
     *
     * If not specified, will be `body`.
     */
    container?: string;
    /**
     * The `Injector` to use for modal content.
     */
    injector?: Injector;
    /**
     * If `true`, the modal will be closed when `Escape` key is pressed
     *
     * Default value is `true`.
     */
    keyboard?: boolean;
    /**
     * Scrollable modal content (false by default).
     *
     * @since 5.0.0
     */
    scrollable?: boolean;
    /**
     * Size of a new modal window.
     */
    size?: 'sm' | 'lg' | 'xl' | string;
    /**
     * A custom class to append to the modal window.
     */
    windowClass?: string;
    /**
     * A custom class to append to the modal backdrop.
     *
     * @since 1.1.0
     */
    backdropClass?: string;
}
/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
*
* @since 3.1.0
*/
export declare class NgbModalConfig implements Required<NgbModalOptions> {
    ariaLabelledBy: string;
    backdrop: boolean | 'static';
    beforeDismiss: () => boolean | Promise<boolean>;
    centered: boolean;
    container: string;
    injector: Injector;
    keyboard: boolean;
    scrollable: boolean;
    size: 'sm' | 'lg' | 'xl' | string;
    windowClass: string;
    backdropClass: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbModalConfig>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbModalConfig>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbIm1vZGFsLWNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBPcHRpb25zIGF2YWlsYWJsZSB3aGVuIG9wZW5pbmcgbmV3IG1vZGFsIHdpbmRvd3Mgd2l0aCBgTmdiTW9kYWwub3BlbigpYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiTW9kYWxPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBtb2RhbCB3aW5kb3cuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMi4yLjBcbiAgICAgKi9cbiAgICBhcmlhTGFiZWxsZWRCeT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBlbGVtZW50IHdpbGwgYmUgY3JlYXRlZCBmb3IgYSBnaXZlbiBtb2RhbC5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHksIHNwZWNpZnkgYCdzdGF0aWMnYCBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICAgKlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgLlxuICAgICAqL1xuICAgIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHJpZ2h0IGJlZm9yZSB0aGUgbW9kYWwgd2lsbCBiZSBkaXNtaXNzZWQuXG4gICAgICpcbiAgICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnM6XG4gICAgICogKiBgZmFsc2VgXG4gICAgICogKiBhIHByb21pc2UgcmVzb2x2ZWQgd2l0aCBgZmFsc2VgXG4gICAgICogKiBhIHByb21pc2UgdGhhdCBpcyByZWplY3RlZFxuICAgICAqXG4gICAgICogdGhlbiB0aGUgbW9kYWwgd29uJ3QgYmUgZGlzbWlzc2VkLlxuICAgICAqL1xuICAgIGJlZm9yZURpc21pc3M/OiAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHkuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBjZW50ZXJlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IGFsbCBuZXcgbW9kYWwgd2luZG93cyBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICpcbiAgICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB3aWxsIGJlIGBib2R5YC5cbiAgICAgKi9cbiAgICBjb250YWluZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGBJbmplY3RvcmAgdG8gdXNlIGZvciBtb2RhbCBjb250ZW50LlxuICAgICAqL1xuICAgIGluamVjdG9yPzogSW5qZWN0b3I7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBiZSBjbG9zZWQgd2hlbiBgRXNjYXBlYCBrZXkgaXMgcHJlc3NlZFxuICAgICAqXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAgICovXG4gICAga2V5Ym9hcmQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNjcm9sbGFibGUgbW9kYWwgY29udGVudCAoZmFsc2UgYnkgZGVmYXVsdCkuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNS4wLjBcbiAgICAgKi9cbiAgICBzY3JvbGxhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTaXplIG9mIGEgbmV3IG1vZGFsIHdpbmRvdy5cbiAgICAgKi9cbiAgICBzaXplPzogJ3NtJyB8ICdsZycgfCAneGwnIHwgc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGFwcGVuZCB0byB0aGUgbW9kYWwgd2luZG93LlxuICAgICAqL1xuICAgIHdpbmRvd0NsYXNzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGFwcGVuZCB0byB0aGUgbW9kYWwgYmFja2Ryb3AuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBiYWNrZHJvcENsYXNzPzogc3RyaW5nO1xufVxuLyoqXG4gKiBBIGNvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIFtgTmdiTW9kYWxgXSgjL2NvbXBvbmVudHMvbW9kYWwvYXBpI05nYk1vZGFsKSBzZXJ2aWNlLlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpblxuICogb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIG1vZGFscyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbipcbiogQHNpbmNlIDMuMS4wXG4qL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiTW9kYWxDb25maWcgaW1wbGVtZW50cyBSZXF1aXJlZDxOZ2JNb2RhbE9wdGlvbnM+IHtcbiAgICBhcmlhTGFiZWxsZWRCeTogc3RyaW5nO1xuICAgIGJhY2tkcm9wOiBib29sZWFuIHwgJ3N0YXRpYyc7XG4gICAgYmVmb3JlRGlzbWlzczogKCkgPT4gYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj47XG4gICAgY2VudGVyZWQ6IGJvb2xlYW47XG4gICAgY29udGFpbmVyOiBzdHJpbmc7XG4gICAgaW5qZWN0b3I6IEluamVjdG9yO1xuICAgIGtleWJvYXJkOiBib29sZWFuO1xuICAgIHNjcm9sbGFibGU6IGJvb2xlYW47XG4gICAgc2l6ZTogJ3NtJyB8ICdsZycgfCAneGwnIHwgc3RyaW5nO1xuICAgIHdpbmRvd0NsYXNzOiBzdHJpbmc7XG4gICAgYmFja2Ryb3BDbGFzczogc3RyaW5nO1xufVxuIl19