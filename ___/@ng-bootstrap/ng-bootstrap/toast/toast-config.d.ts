/**
 * Interface used to type all toast config options. See `NgbToastConfig`.
 *
 * @since 5.0.0
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbToastOptions {
    /**
     * Specify if the toast component should emit the `hide()` output
     * after a certain `delay` in ms.
     */
    autohide?: boolean;
    /**
     * Delay in ms after which the `hide()` output should be emitted.
     */
    delay?: number;
    /**
     * Type of aria-live attribute to be used.
     *
     * Could be one of these 2 values (as string):
     * - `polite` (default)
     * - `alert`
     */
    ariaLive?: 'polite' | 'alert';
}
/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * @since 5.0.0
 */
export declare class NgbToastConfig implements NgbToastOptions {
    autohide: boolean;
    delay: number;
    ariaLive: 'polite' | 'alert';
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbToastConfig>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbToastConfig>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbInRvYXN0LWNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVyZmFjZSB1c2VkIHRvIHR5cGUgYWxsIHRvYXN0IGNvbmZpZyBvcHRpb25zLiBTZWUgYE5nYlRvYXN0Q29uZmlnYC5cbiAqXG4gKiBAc2luY2UgNS4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JUb2FzdE9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgaWYgdGhlIHRvYXN0IGNvbXBvbmVudCBzaG91bGQgZW1pdCB0aGUgYGhpZGUoKWAgb3V0cHV0XG4gICAgICogYWZ0ZXIgYSBjZXJ0YWluIGBkZWxheWAgaW4gbXMuXG4gICAgICovXG4gICAgYXV0b2hpZGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIERlbGF5IGluIG1zIGFmdGVyIHdoaWNoIHRoZSBgaGlkZSgpYCBvdXRwdXQgc2hvdWxkIGJlIGVtaXR0ZWQuXG4gICAgICovXG4gICAgZGVsYXk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVHlwZSBvZiBhcmlhLWxpdmUgYXR0cmlidXRlIHRvIGJlIHVzZWQuXG4gICAgICpcbiAgICAgKiBDb3VsZCBiZSBvbmUgb2YgdGhlc2UgMiB2YWx1ZXMgKGFzIHN0cmluZyk6XG4gICAgICogLSBgcG9saXRlYCAoZGVmYXVsdClcbiAgICAgKiAtIGBhbGVydGBcbiAgICAgKi9cbiAgICBhcmlhTGl2ZT86ICdwb2xpdGUnIHwgJ2FsZXJ0Jztcbn1cbi8qKlxuICogQ29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgTmdiVG9hc3QgY29tcG9uZW50LiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LFxuICogYW5kIGN1c3RvbWl6ZSB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGUgdG9hc3RzIHVzZWQgaW4gdGhlXG4gKiBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAc2luY2UgNS4wLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiVG9hc3RDb25maWcgaW1wbGVtZW50cyBOZ2JUb2FzdE9wdGlvbnMge1xuICAgIGF1dG9oaWRlOiBib29sZWFuO1xuICAgIGRlbGF5OiBudW1iZXI7XG4gICAgYXJpYUxpdmU6ICdwb2xpdGUnIHwgJ2FsZXJ0Jztcbn1cbiJdfQ==