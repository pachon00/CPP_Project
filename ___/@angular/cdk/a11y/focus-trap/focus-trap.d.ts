/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentInit, ElementRef, NgZone, OnDestroy, DoCheck } from '@angular/core';
import { InteractivityChecker } from '../interactivity-checker/interactivity-checker';
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
import * as ɵngcc0 from '@angular/core';
export declare class FocusTrap {
    private _element;
    private _checker;
    private _ngZone;
    private _document;
    private _startAnchor;
    private _endAnchor;
    private _hasAttached;
    protected startAnchorListener: () => boolean;
    protected endAnchorListener: () => boolean;
    /** Whether the focus trap is active. */
    get enabled(): boolean;
    set enabled(value: boolean);
    private _enabled;
    constructor(_element: HTMLElement, _checker: InteractivityChecker, _ngZone: NgZone, _document: Document, deferAnchors?: boolean);
    /** Destroys the focus trap by cleaning up the anchors. */
    destroy(): void;
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    attachAnchors(): boolean;
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusInitialElementWhenReady(): Promise<boolean>;
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusFirstTabbableElementWhenReady(): Promise<boolean>;
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusLastTabbableElementWhenReady(): Promise<boolean>;
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    private _getRegionBoundary;
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    focusInitialElement(): boolean;
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    focusFirstTabbableElement(): boolean;
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    focusLastTabbableElement(): boolean;
    /**
     * Checks whether the focus trap has successfuly been attached.
     */
    hasAttached(): boolean;
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    private _getFirstTabbableElement;
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    private _getLastTabbableElement;
    /** Creates an anchor element. */
    private _createAnchor;
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    private _toggleAnchorTabIndex;
    /** Executes a function when the zone is stable. */
    private _executeOnStable;
}
/** Factory that allows easy instantiation of focus traps. */
export declare class FocusTrapFactory {
    private _checker;
    private _ngZone;
    private _document;
    constructor(_checker: InteractivityChecker, _ngZone: NgZone, _document: any);
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    create(element: HTMLElement, deferCaptureElements?: boolean): FocusTrap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusTrapFactory>;
}
/** Directive for trapping focus within a region. */
export declare class CdkTrapFocus implements OnDestroy, AfterContentInit, DoCheck {
    private _elementRef;
    private _focusTrapFactory;
    private _document;
    /** Underlying FocusTrap instance. */
    focusTrap: FocusTrap;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */
    private _previouslyFocusedElement;
    /** Whether the focus trap is active. */
    get enabled(): boolean;
    set enabled(value: boolean);
    /**
     * Whether the directive should automatially move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     */
    get autoCapture(): boolean;
    set autoCapture(value: boolean);
    private _autoCapture;
    constructor(_elementRef: ElementRef<HTMLElement>, _focusTrapFactory: FocusTrapFactory, _document: any);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    static ngAcceptInputType_enabled: BooleanInput;
    static ngAcceptInputType_autoCapture: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTrapFocus>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTrapFocus, "[cdkTrapFocus]", ["cdkTrapFocus"], {
    "enabled": "cdkTrapFocus";
    "autoCapture": "cdkTrapFocusAutoCapture";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5kLnRzIiwic291cmNlcyI6WyJmb2N1cy10cmFwLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25EZXN0cm95LCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnRlcmFjdGl2aXR5Q2hlY2tlciB9IGZyb20gJy4uL2ludGVyYWN0aXZpdHktY2hlY2tlci9pbnRlcmFjdGl2aXR5LWNoZWNrZXInO1xuLyoqXG4gKiBDbGFzcyB0aGF0IGFsbG93cyBmb3IgdHJhcHBpbmcgZm9jdXMgd2l0aGluIGEgRE9NIGVsZW1lbnQuXG4gKlxuICogVGhpcyBjbGFzcyBjdXJyZW50bHkgdXNlcyBhIHJlbGF0aXZlbHkgc2ltcGxlIGFwcHJvYWNoIHRvIGZvY3VzIHRyYXBwaW5nLlxuICogSXQgYXNzdW1lcyB0aGF0IHRoZSB0YWIgb3JkZXIgaXMgdGhlIHNhbWUgYXMgRE9NIG9yZGVyLCB3aGljaCBpcyBub3QgbmVjZXNzYXJpbHkgdHJ1ZS5cbiAqIFRoaW5ncyBsaWtlIGB0YWJJbmRleCA+IDBgLCBmbGV4IGBvcmRlcmAsIGFuZCBzaGFkb3cgcm9vdHMgY2FuIGNhdXNlIHRvIHR3byB0byBtaXNhbGlnbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRm9jdXNUcmFwIHtcbiAgICBwcml2YXRlIF9lbGVtZW50O1xuICAgIHByaXZhdGUgX2NoZWNrZXI7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIHByaXZhdGUgX3N0YXJ0QW5jaG9yO1xuICAgIHByaXZhdGUgX2VuZEFuY2hvcjtcbiAgICBwcml2YXRlIF9oYXNBdHRhY2hlZDtcbiAgICBwcm90ZWN0ZWQgc3RhcnRBbmNob3JMaXN0ZW5lcjogKCkgPT4gYm9vbGVhbjtcbiAgICBwcm90ZWN0ZWQgZW5kQW5jaG9yTGlzdGVuZXI6ICgpID0+IGJvb2xlYW47XG4gICAgLyoqIFdoZXRoZXIgdGhlIGZvY3VzIHRyYXAgaXMgYWN0aXZlLiAqL1xuICAgIGdldCBlbmFibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pO1xuICAgIHByaXZhdGUgX2VuYWJsZWQ7XG4gICAgY29uc3RydWN0b3IoX2VsZW1lbnQ6IEhUTUxFbGVtZW50LCBfY2hlY2tlcjogSW50ZXJhY3Rpdml0eUNoZWNrZXIsIF9uZ1pvbmU6IE5nWm9uZSwgX2RvY3VtZW50OiBEb2N1bWVudCwgZGVmZXJBbmNob3JzPzogYm9vbGVhbik7XG4gICAgLyoqIERlc3Ryb3lzIHRoZSBmb2N1cyB0cmFwIGJ5IGNsZWFuaW5nIHVwIHRoZSBhbmNob3JzLiAqL1xuICAgIGRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoZSBhbmNob3JzIGludG8gdGhlIERPTS4gVGhpcyBpcyB1c3VhbGx5IGRvbmUgYXV0b21hdGljYWxseVxuICAgICAqIGluIHRoZSBjb25zdHJ1Y3RvciwgYnV0IGNhbiBiZSBkZWZlcnJlZCBmb3IgY2FzZXMgbGlrZSBkaXJlY3RpdmVzIHdpdGggYCpuZ0lmYC5cbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBmb2N1cyB0cmFwIG1hbmFnZWQgdG8gYXR0YWNoIHN1Y2Nlc3NmdWx5LiBUaGlzIG1heSBub3QgYmUgdGhlIGNhc2VcbiAgICAgKiBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXNuJ3QgY3VycmVudGx5IGluIHRoZSBET00uXG4gICAgICovXG4gICAgYXR0YWNoQW5jaG9ycygpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdhaXRzIGZvciB0aGUgem9uZSB0byBzdGFiaWxpemUsIHRoZW4gZWl0aGVyIGZvY3VzZXMgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCB0aGVcbiAgICAgKiB1c2VyIHNwZWNpZmllZCwgb3IgdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiwgZGVwZW5kaW5nXG4gICAgICogb24gd2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAgICovXG4gICAgZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFdhaXRzIGZvciB0aGUgem9uZSB0byBzdGFiaWxpemUsIHRoZW4gZm9jdXNlc1xuICAgICAqIHRoZSBmaXJzdCB0YWJiYWJsZSBlbGVtZW50IHdpdGhpbiB0aGUgZm9jdXMgdHJhcCByZWdpb24uXG4gICAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiwgZGVwZW5kaW5nXG4gICAgICogb24gd2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAgICovXG4gICAgZm9jdXNGaXJzdFRhYmJhYmxlRWxlbWVudFdoZW5SZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFdhaXRzIGZvciB0aGUgem9uZSB0byBzdGFiaWxpemUsIHRoZW4gZm9jdXNlc1xuICAgICAqIHRoZSBsYXN0IHRhYmJhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSBmb2N1cyB0cmFwIHJlZ2lvbi5cbiAgICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuLCBkZXBlbmRpbmdcbiAgICAgKiBvbiB3aGV0aGVyIGZvY3VzIHdhcyBtb3ZlZCBzdWNjZXNzZnVseS5cbiAgICAgKi9cbiAgICBmb2N1c0xhc3RUYWJiYWJsZUVsZW1lbnRXaGVuUmVhZHkoKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNwZWNpZmllZCBib3VuZGFyeSBlbGVtZW50IG9mIHRoZSB0cmFwcGVkIHJlZ2lvbi5cbiAgICAgKiBAcGFyYW0gYm91bmQgVGhlIGJvdW5kYXJ5IHRvIGdldCAoc3RhcnQgb3IgZW5kIG9mIHRyYXBwZWQgcmVnaW9uKS5cbiAgICAgKiBAcmV0dXJucyBUaGUgYm91bmRhcnkgZWxlbWVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9nZXRSZWdpb25Cb3VuZGFyeTtcbiAgICAvKipcbiAgICAgKiBGb2N1c2VzIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIGZvY3VzZWQgd2hlbiB0aGUgZm9jdXMgdHJhcCBpcyBpbml0aWFsaXplZC5cbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIGZvY3VzIHdhcyBtb3ZlZCBzdWNjZXNzZnVseS5cbiAgICAgKi9cbiAgICBmb2N1c0luaXRpYWxFbGVtZW50KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudCB3aXRoaW4gdGhlIGZvY3VzIHRyYXAgcmVnaW9uLlxuICAgICAqIEByZXR1cm5zIFdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgICAqL1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZUVsZW1lbnQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBGb2N1c2VzIHRoZSBsYXN0IHRhYmJhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSBmb2N1cyB0cmFwIHJlZ2lvbi5cbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIGZvY3VzIHdhcyBtb3ZlZCBzdWNjZXNzZnVseS5cbiAgICAgKi9cbiAgICBmb2N1c0xhc3RUYWJiYWJsZUVsZW1lbnQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZm9jdXMgdHJhcCBoYXMgc3VjY2Vzc2Z1bHkgYmVlbiBhdHRhY2hlZC5cbiAgICAgKi9cbiAgICBoYXNBdHRhY2hlZCgpOiBib29sZWFuO1xuICAgIC8qKiBHZXQgdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQgZnJvbSBhIERPTSBzdWJ0cmVlIChpbmNsdXNpdmUpLiAqL1xuICAgIHByaXZhdGUgX2dldEZpcnN0VGFiYmFibGVFbGVtZW50O1xuICAgIC8qKiBHZXQgdGhlIGxhc3QgdGFiYmFibGUgZWxlbWVudCBmcm9tIGEgRE9NIHN1YnRyZWUgKGluY2x1c2l2ZSkuICovXG4gICAgcHJpdmF0ZSBfZ2V0TGFzdFRhYmJhYmxlRWxlbWVudDtcbiAgICAvKiogQ3JlYXRlcyBhbiBhbmNob3IgZWxlbWVudC4gKi9cbiAgICBwcml2YXRlIF9jcmVhdGVBbmNob3I7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgYHRhYmluZGV4YCBvZiBhbiBhbmNob3IsIGJhc2VkIG9uIHRoZSBlbmFibGVkIHN0YXRlIG9mIHRoZSBmb2N1cyB0cmFwLlxuICAgICAqIEBwYXJhbSBpc0VuYWJsZWQgV2hldGhlciB0aGUgZm9jdXMgdHJhcCBpcyBlbmFibGVkLlxuICAgICAqIEBwYXJhbSBhbmNob3IgQW5jaG9yIG9uIHdoaWNoIHRvIHRvZ2dsZSB0aGUgdGFiaW5kZXguXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdG9nZ2xlQW5jaG9yVGFiSW5kZXg7XG4gICAgLyoqIEV4ZWN1dGVzIGEgZnVuY3Rpb24gd2hlbiB0aGUgem9uZSBpcyBzdGFibGUuICovXG4gICAgcHJpdmF0ZSBfZXhlY3V0ZU9uU3RhYmxlO1xufVxuLyoqIEZhY3RvcnkgdGhhdCBhbGxvd3MgZWFzeSBpbnN0YW50aWF0aW9uIG9mIGZvY3VzIHRyYXBzLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRm9jdXNUcmFwRmFjdG9yeSB7XG4gICAgcHJpdmF0ZSBfY2hlY2tlcjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgY29uc3RydWN0b3IoX2NoZWNrZXI6IEludGVyYWN0aXZpdHlDaGVja2VyLCBfbmdab25lOiBOZ1pvbmUsIF9kb2N1bWVudDogYW55KTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZm9jdXMtdHJhcHBlZCByZWdpb24gYXJvdW5kIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGFyb3VuZCB3aGljaCBmb2N1cyB3aWxsIGJlIHRyYXBwZWQuXG4gICAgICogQHBhcmFtIGRlZmVyQ2FwdHVyZUVsZW1lbnRzIERlZmVycyB0aGUgY3JlYXRpb24gb2YgZm9jdXMtY2FwdHVyaW5nIGVsZW1lbnRzIHRvIGJlIGRvbmVcbiAgICAgKiAgICAgbWFudWFsbHkgYnkgdGhlIHVzZXIuXG4gICAgICogQHJldHVybnMgVGhlIGNyZWF0ZWQgZm9jdXMgdHJhcCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjcmVhdGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRlZmVyQ2FwdHVyZUVsZW1lbnRzPzogYm9vbGVhbik6IEZvY3VzVHJhcDtcbn1cbi8qKiBEaXJlY3RpdmUgZm9yIHRyYXBwaW5nIGZvY3VzIHdpdGhpbiBhIHJlZ2lvbi4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1RyYXBGb2N1cyBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgRG9DaGVjayB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9mb2N1c1RyYXBGYWN0b3J5O1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIC8qKiBVbmRlcmx5aW5nIEZvY3VzVHJhcCBpbnN0YW5jZS4gKi9cbiAgICBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcbiAgICAvKiogUHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgdG8gcmVzdG9yZSBmb2N1cyB0byB1cG9uIGRlc3Ryb3kgd2hlbiB1c2luZyBhdXRvQ2FwdHVyZS4gKi9cbiAgICBwcml2YXRlIF9wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ7XG4gICAgLyoqIFdoZXRoZXIgdGhlIGZvY3VzIHRyYXAgaXMgYWN0aXZlLiAqL1xuICAgIGdldCBlbmFibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGRpcmVjdGl2ZSBzaG91bGQgYXV0b21hdGlhbGx5IG1vdmUgZm9jdXMgaW50byB0aGUgdHJhcHBlZCByZWdpb24gdXBvblxuICAgICAqIGluaXRpYWxpemF0aW9uIGFuZCByZXR1cm4gZm9jdXMgdG8gdGhlIHByZXZpb3VzIGFjdGl2ZUVsZW1lbnQgdXBvbiBkZXN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgYXV0b0NhcHR1cmUoKTogYm9vbGVhbjtcbiAgICBzZXQgYXV0b0NhcHR1cmUodmFsdWU6IGJvb2xlYW4pO1xuICAgIHByaXZhdGUgX2F1dG9DYXB0dXJlO1xuICAgIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgX2ZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksIF9kb2N1bWVudDogYW55KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVkOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9DYXB0dXJlOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=