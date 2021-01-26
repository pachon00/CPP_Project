/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare const TOUCH_BUFFER_MS = 650;
export declare type FocusOrigin = 'touch' | 'mouse' | 'keyboard' | 'program' | null;
/**
 * Corresponds to the options that can be passed to the native `focus` event.
 * via https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
 */
export interface FocusOptions {
    /** Whether the browser should scroll to the element when it is focused. */
    preventScroll?: boolean;
}
/** Monitors mouse and keyboard events to determine the cause of focus events. */
export declare class FocusMonitor implements OnDestroy {
    private _ngZone;
    private _platform;
    /** The focus origin that the next focus event is a result of. */
    private _origin;
    /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
    private _lastFocusOrigin;
    /** Whether the window has just been focused. */
    private _windowFocused;
    /** The target of the last touch event. */
    private _lastTouchTarget;
    /** The timeout id of the touch timeout, used to cancel timeout later. */
    private _touchTimeoutId;
    /** The timeout id of the window focus timeout. */
    private _windowFocusTimeoutId;
    /** The timeout id of the origin clearing timeout. */
    private _originTimeoutId;
    /** Map of elements being monitored to their info. */
    private _elementInfo;
    /** The number of elements currently being monitored. */
    private _monitoredElementCount;
    /**
     * Event listener for `keydown` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _documentKeydownListener;
    /**
     * Event listener for `mousedown` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _documentMousedownListener;
    /**
     * Event listener for `touchstart` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _documentTouchstartListener;
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    private _windowFocusListener;
    constructor(_ngZone: NgZone, _platform: Platform);
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param element The element to monitor
     * @param checkChildren Whether to count the element as focused when its children are focused.
     * @returns An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    monitor(element: HTMLElement, checkChildren?: boolean): Observable<FocusOrigin>;
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param element The element to monitor
     * @param checkChildren Whether to count the element as focused when its children are focused.
     * @returns An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    monitor(element: ElementRef<HTMLElement>, checkChildren?: boolean): Observable<FocusOrigin>;
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    stopMonitoring(element: HTMLElement): void;
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    stopMonitoring(element: ElementRef<HTMLElement>): void;
    /**
     * Focuses the element via the specified focus origin.
     * @param element Element to focus.
     * @param origin Focus origin.
     * @param options Options that can be used to configure the focus behavior.
     */
    focusVia(element: HTMLElement, origin: FocusOrigin, options?: FocusOptions): void;
    /**
     * Focuses the element via the specified focus origin.
     * @param element Element to focus.
     * @param origin Focus origin.
     * @param options Options that can be used to configure the focus behavior.
     */
    focusVia(element: ElementRef<HTMLElement>, origin: FocusOrigin, options?: FocusOptions): void;
    ngOnDestroy(): void;
    private _toggleClass;
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    private _setClasses;
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param origin The origin to set.
     */
    private _setOriginForCurrentEventQueue;
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param event The focus event to check.
     * @returns Whether the event was caused by a touch.
     */
    private _wasCausedByTouch;
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    private _onFocus;
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    _onBlur(event: FocusEvent, element: HTMLElement): void;
    private _emitOrigin;
    private _incrementMonitoredElementCount;
    private _decrementMonitoredElementCount;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusMonitor>;
}
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
export declare class CdkMonitorFocus implements OnDestroy {
    private _elementRef;
    private _focusMonitor;
    private _monitorSubscription;
    cdkFocusChange: EventEmitter<FocusOrigin>;
    constructor(_elementRef: ElementRef<HTMLElement>, _focusMonitor: FocusMonitor);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkMonitorFocus>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkMonitorFocus, "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", never, {}, {
    "cdkFocusChange": "cdkFocusChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci5kLnRzIiwic291cmNlcyI6WyJmb2N1cy1tb25pdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFRPVUNIX0JVRkZFUl9NUyA9IDY1MDtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgRm9jdXNPcmlnaW4gPSAndG91Y2gnIHwgJ21vdXNlJyB8ICdrZXlib2FyZCcgfCAncHJvZ3JhbScgfCBudWxsO1xuLyoqXG4gKiBDb3JyZXNwb25kcyB0byB0aGUgb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIG5hdGl2ZSBgZm9jdXNgIGV2ZW50LlxuICogdmlhIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9mb2N1c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzT3B0aW9ucyB7XG4gICAgLyoqIFdoZXRoZXIgdGhlIGJyb3dzZXIgc2hvdWxkIHNjcm9sbCB0byB0aGUgZWxlbWVudCB3aGVuIGl0IGlzIGZvY3VzZWQuICovXG4gICAgcHJldmVudFNjcm9sbD86IGJvb2xlYW47XG59XG4vKiogTW9uaXRvcnMgbW91c2UgYW5kIGtleWJvYXJkIGV2ZW50cyB0byBkZXRlcm1pbmUgdGhlIGNhdXNlIG9mIGZvY3VzIGV2ZW50cy4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvY3VzTW9uaXRvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX3BsYXRmb3JtO1xuICAgIC8qKiBUaGUgZm9jdXMgb3JpZ2luIHRoYXQgdGhlIG5leHQgZm9jdXMgZXZlbnQgaXMgYSByZXN1bHQgb2YuICovXG4gICAgcHJpdmF0ZSBfb3JpZ2luO1xuICAgIC8qKiBUaGUgRm9jdXNPcmlnaW4gb2YgdGhlIGxhc3QgZm9jdXMgZXZlbnQgdHJhY2tlZCBieSB0aGUgRm9jdXNNb25pdG9yLiAqL1xuICAgIHByaXZhdGUgX2xhc3RGb2N1c09yaWdpbjtcbiAgICAvKiogV2hldGhlciB0aGUgd2luZG93IGhhcyBqdXN0IGJlZW4gZm9jdXNlZC4gKi9cbiAgICBwcml2YXRlIF93aW5kb3dGb2N1c2VkO1xuICAgIC8qKiBUaGUgdGFyZ2V0IG9mIHRoZSBsYXN0IHRvdWNoIGV2ZW50LiAqL1xuICAgIHByaXZhdGUgX2xhc3RUb3VjaFRhcmdldDtcbiAgICAvKiogVGhlIHRpbWVvdXQgaWQgb2YgdGhlIHRvdWNoIHRpbWVvdXQsIHVzZWQgdG8gY2FuY2VsIHRpbWVvdXQgbGF0ZXIuICovXG4gICAgcHJpdmF0ZSBfdG91Y2hUaW1lb3V0SWQ7XG4gICAgLyoqIFRoZSB0aW1lb3V0IGlkIG9mIHRoZSB3aW5kb3cgZm9jdXMgdGltZW91dC4gKi9cbiAgICBwcml2YXRlIF93aW5kb3dGb2N1c1RpbWVvdXRJZDtcbiAgICAvKiogVGhlIHRpbWVvdXQgaWQgb2YgdGhlIG9yaWdpbiBjbGVhcmluZyB0aW1lb3V0LiAqL1xuICAgIHByaXZhdGUgX29yaWdpblRpbWVvdXRJZDtcbiAgICAvKiogTWFwIG9mIGVsZW1lbnRzIGJlaW5nIG1vbml0b3JlZCB0byB0aGVpciBpbmZvLiAqL1xuICAgIHByaXZhdGUgX2VsZW1lbnRJbmZvO1xuICAgIC8qKiBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGN1cnJlbnRseSBiZWluZyBtb25pdG9yZWQuICovXG4gICAgcHJpdmF0ZSBfbW9uaXRvcmVkRWxlbWVudENvdW50O1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGxpc3RlbmVyIGZvciBga2V5ZG93bmAgZXZlbnRzIG9uIHRoZSBkb2N1bWVudC5cbiAgICAgKiBOZWVkcyB0byBiZSBhbiBhcnJvdyBmdW5jdGlvbiBpbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgY29udGV4dCB3aGVuIGl0IGdldHMgYm91bmQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRLZXlkb3duTGlzdGVuZXI7XG4gICAgLyoqXG4gICAgICogRXZlbnQgbGlzdGVuZXIgZm9yIGBtb3VzZWRvd25gIGV2ZW50cyBvbiB0aGUgZG9jdW1lbnQuXG4gICAgICogTmVlZHMgdG8gYmUgYW4gYXJyb3cgZnVuY3Rpb24gaW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIGNvbnRleHQgd2hlbiBpdCBnZXRzIGJvdW5kLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2RvY3VtZW50TW91c2Vkb3duTGlzdGVuZXI7XG4gICAgLyoqXG4gICAgICogRXZlbnQgbGlzdGVuZXIgZm9yIGB0b3VjaHN0YXJ0YCBldmVudHMgb24gdGhlIGRvY3VtZW50LlxuICAgICAqIE5lZWRzIHRvIGJlIGFuIGFycm93IGZ1bmN0aW9uIGluIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBjb250ZXh0IHdoZW4gaXQgZ2V0cyBib3VuZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9kb2N1bWVudFRvdWNoc3RhcnRMaXN0ZW5lcjtcbiAgICAvKipcbiAgICAgKiBFdmVudCBsaXN0ZW5lciBmb3IgYGZvY3VzYCBldmVudHMgb24gdGhlIHdpbmRvdy5cbiAgICAgKiBOZWVkcyB0byBiZSBhbiBhcnJvdyBmdW5jdGlvbiBpbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgY29udGV4dCB3aGVuIGl0IGdldHMgYm91bmQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfd2luZG93Rm9jdXNMaXN0ZW5lcjtcbiAgICBjb25zdHJ1Y3Rvcihfbmdab25lOiBOZ1pvbmUsIF9wbGF0Zm9ybTogUGxhdGZvcm0pO1xuICAgIC8qKlxuICAgICAqIE1vbml0b3JzIGZvY3VzIG9uIGFuIGVsZW1lbnQgYW5kIGFwcGxpZXMgYXBwcm9wcmlhdGUgQ1NTIGNsYXNzZXMuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gbW9uaXRvclxuICAgICAqIEBwYXJhbSBjaGVja0NoaWxkcmVuIFdoZXRoZXIgdG8gY291bnQgdGhlIGVsZW1lbnQgYXMgZm9jdXNlZCB3aGVuIGl0cyBjaGlsZHJlbiBhcmUgZm9jdXNlZC5cbiAgICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiB0aGUgZm9jdXMgc3RhdGUgb2YgdGhlIGVsZW1lbnQgY2hhbmdlcy5cbiAgICAgKiAgICAgV2hlbiB0aGUgZWxlbWVudCBpcyBibHVycmVkLCBudWxsIHdpbGwgYmUgZW1pdHRlZC5cbiAgICAgKi9cbiAgICBtb25pdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjaGVja0NoaWxkcmVuPzogYm9vbGVhbik6IE9ic2VydmFibGU8Rm9jdXNPcmlnaW4+O1xuICAgIC8qKlxuICAgICAqIE1vbml0b3JzIGZvY3VzIG9uIGFuIGVsZW1lbnQgYW5kIGFwcGxpZXMgYXBwcm9wcmlhdGUgQ1NTIGNsYXNzZXMuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gbW9uaXRvclxuICAgICAqIEBwYXJhbSBjaGVja0NoaWxkcmVuIFdoZXRoZXIgdG8gY291bnQgdGhlIGVsZW1lbnQgYXMgZm9jdXNlZCB3aGVuIGl0cyBjaGlsZHJlbiBhcmUgZm9jdXNlZC5cbiAgICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiB0aGUgZm9jdXMgc3RhdGUgb2YgdGhlIGVsZW1lbnQgY2hhbmdlcy5cbiAgICAgKiAgICAgV2hlbiB0aGUgZWxlbWVudCBpcyBibHVycmVkLCBudWxsIHdpbGwgYmUgZW1pdHRlZC5cbiAgICAgKi9cbiAgICBtb25pdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBjaGVja0NoaWxkcmVuPzogYm9vbGVhbik6IE9ic2VydmFibGU8Rm9jdXNPcmlnaW4+O1xuICAgIC8qKlxuICAgICAqIFN0b3BzIG1vbml0b3JpbmcgYW4gZWxlbWVudCBhbmQgcmVtb3ZlcyBhbGwgZm9jdXMgY2xhc3Nlcy5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBzdG9wIG1vbml0b3JpbmcuXG4gICAgICovXG4gICAgc3RvcE1vbml0b3JpbmcoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN0b3BzIG1vbml0b3JpbmcgYW4gZWxlbWVudCBhbmQgcmVtb3ZlcyBhbGwgZm9jdXMgY2xhc3Nlcy5cbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBzdG9wIG1vbml0b3JpbmcuXG4gICAgICovXG4gICAgc3RvcE1vbml0b3JpbmcoZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgdGhlIGVsZW1lbnQgdmlhIHRoZSBzcGVjaWZpZWQgZm9jdXMgb3JpZ2luLlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gZm9jdXMuXG4gICAgICogQHBhcmFtIG9yaWdpbiBGb2N1cyBvcmlnaW4uXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZm9jdXMgYmVoYXZpb3IuXG4gICAgICovXG4gICAgZm9jdXNWaWEoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9yaWdpbjogRm9jdXNPcmlnaW4sIG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgdGhlIGVsZW1lbnQgdmlhIHRoZSBzcGVjaWZpZWQgZm9jdXMgb3JpZ2luLlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gZm9jdXMuXG4gICAgICogQHBhcmFtIG9yaWdpbiBGb2N1cyBvcmlnaW4uXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZm9jdXMgYmVoYXZpb3IuXG4gICAgICovXG4gICAgZm9jdXNWaWEoZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIG9yaWdpbjogRm9jdXNPcmlnaW4sIG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfdG9nZ2xlQ2xhc3M7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZm9jdXMgY2xhc3NlcyBvbiB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgZ2l2ZW4gZm9jdXMgb3JpZ2luLlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHVwZGF0ZSB0aGUgY2xhc3NlcyBvbi5cbiAgICAgKiBAcGFyYW0gb3JpZ2luIFRoZSBmb2N1cyBvcmlnaW4uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2V0Q2xhc3NlcztcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBvcmlnaW4gYW5kIHNjaGVkdWxlcyBhbiBhc3luYyBmdW5jdGlvbiB0byBjbGVhciBpdCBhdCB0aGUgZW5kIG9mIHRoZSBldmVudCBxdWV1ZS5cbiAgICAgKiBAcGFyYW0gb3JpZ2luIFRoZSBvcmlnaW4gdG8gc2V0LlxuICAgICAqL1xuICAgIHByaXZhdGUgX3NldE9yaWdpbkZvckN1cnJlbnRFdmVudFF1ZXVlO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBmb2N1cyBldmVudCB3YXMgY2F1c2VkIGJ5IGEgdG91Y2hzdGFydCBldmVudC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIGZvY3VzIGV2ZW50IHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGV2ZW50IHdhcyBjYXVzZWQgYnkgYSB0b3VjaC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF93YXNDYXVzZWRCeVRvdWNoO1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgZm9jdXMgZXZlbnRzIG9uIGEgcmVnaXN0ZXJlZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBldmVudCBUaGUgZm9jdXMgZXZlbnQuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIG1vbml0b3JlZCBlbGVtZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgX29uRm9jdXM7XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBibHVyIGV2ZW50cyBvbiBhIHJlZ2lzdGVyZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIGJsdXIgZXZlbnQuXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIG1vbml0b3JlZCBlbGVtZW50LlxuICAgICAqL1xuICAgIF9vbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcbiAgICBwcml2YXRlIF9lbWl0T3JpZ2luO1xuICAgIHByaXZhdGUgX2luY3JlbWVudE1vbml0b3JlZEVsZW1lbnRDb3VudDtcbiAgICBwcml2YXRlIF9kZWNyZW1lbnRNb25pdG9yZWRFbGVtZW50Q291bnQ7XG59XG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGRldGVybWluZXMgaG93IGEgcGFydGljdWxhciBlbGVtZW50IHdhcyBmb2N1c2VkICh2aWEga2V5Ym9hcmQsIG1vdXNlLCB0b3VjaCwgb3JcbiAqIHByb2dyYW1tYXRpY2FsbHkpIGFuZCBhZGRzIGNvcnJlc3BvbmRpbmcgY2xhc3NlcyB0byB0aGUgZWxlbWVudC5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIHZhcmlhbnRzIG9mIHRoaXMgZGlyZWN0aXZlOlxuICogMSkgY2RrTW9uaXRvckVsZW1lbnRGb2N1czogZG9lcyBub3QgY29uc2lkZXIgYW4gZWxlbWVudCB0byBiZSBmb2N1c2VkIGlmIG9uZSBvZiBpdHMgY2hpbGRyZW4gaXNcbiAqICAgIGZvY3VzZWQuXG4gKiAyKSBjZGtNb25pdG9yU3VidHJlZUZvY3VzOiBjb25zaWRlcnMgYW4gZWxlbWVudCBmb2N1c2VkIGlmIGl0IG9yIGFueSBvZiBpdHMgY2hpbGRyZW4gYXJlIGZvY3VzZWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka01vbml0b3JGb2N1cyBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9mb2N1c01vbml0b3I7XG4gICAgcHJpdmF0ZSBfbW9uaXRvclN1YnNjcmlwdGlvbjtcbiAgICBjZGtGb2N1c0NoYW5nZTogRXZlbnRFbWl0dGVyPEZvY3VzT3JpZ2luPjtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9mb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcik7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==