/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ElementRef, AfterViewInit, DoCheck, OnDestroy, NgZone } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
/** Directive to automatically resize a textarea to fit its content. */
import * as ɵngcc0 from '@angular/core';
export declare class CdkTextareaAutosize implements AfterViewInit, DoCheck, OnDestroy {
    private _elementRef;
    private _platform;
    private _ngZone;
    /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
    private _previousValue?;
    private _initialHeight;
    private readonly _destroyed;
    private _minRows;
    private _maxRows;
    private _enabled;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */
    private _previousMinRows;
    private _textareaElement;
    /** Minimum amount of rows in the textarea. */
    get minRows(): number;
    set minRows(value: number);
    /** Maximum amount of rows in the textarea. */
    get maxRows(): number;
    set maxRows(value: number);
    /** Whether autosizing is enabled or not */
    get enabled(): boolean;
    set enabled(value: boolean);
    /** Cached height of a textarea with a single row. */
    private _cachedLineHeight;
    constructor(_elementRef: ElementRef<HTMLElement>, _platform: Platform, _ngZone: NgZone);
    /** Sets the minimum height of the textarea as determined by minRows. */
    _setMinHeight(): void;
    /** Sets the maximum height of the textarea as determined by maxRows. */
    _setMaxHeight(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    private _cacheTextareaLineHeight;
    ngDoCheck(): void;
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    resizeToFitContent(force?: boolean): void;
    /**
     * Resets the textarea to its original size
     */
    reset(): void;
    _noopInputHandler(): void;
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */
    private _scrollToCaretPosition;
    static ngAcceptInputType_minRows: NumberInput;
    static ngAcceptInputType_maxRows: NumberInput;
    static ngAcceptInputType_enabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTextareaAutosize>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTextareaAutosize, "textarea[cdkTextareaAutosize]", ["cdkTextareaAutosize"], {
    "minRows": "cdkAutosizeMinRows";
    "maxRows": "cdkAutosizeMaxRows";
    "enabled": "cdkTextareaAutosize";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuZC50cyIsInNvdXJjZXMiOlsiYXV0b3NpemUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG4vKiogRGlyZWN0aXZlIHRvIGF1dG9tYXRpY2FsbHkgcmVzaXplIGEgdGV4dGFyZWEgdG8gZml0IGl0cyBjb250ZW50LiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVGV4dGFyZWFBdXRvc2l6ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgLyoqIEtlZXAgdHJhY2sgb2YgdGhlIHByZXZpb3VzIHRleHRhcmVhIHZhbHVlIHRvIGF2b2lkIHJlc2l6aW5nIHdoZW4gdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLiAqL1xuICAgIHByaXZhdGUgX3ByZXZpb3VzVmFsdWU/O1xuICAgIHByaXZhdGUgX2luaXRpYWxIZWlnaHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkO1xuICAgIHByaXZhdGUgX21pblJvd3M7XG4gICAgcHJpdmF0ZSBfbWF4Um93cztcbiAgICBwcml2YXRlIF9lbmFibGVkO1xuICAgIC8qKlxuICAgICAqIFZhbHVlIG9mIG1pblJvd3MgYXMgb2YgbGFzdCByZXNpemUuIElmIHRoZSBtaW5Sb3dzIGhhcyBkZWNyZWFzZWQsIHRoZVxuICAgICAqIGhlaWdodCBvZiB0aGUgdGV4dGFyZWEgbmVlZHMgdG8gYmUgcmVjb21wdXRlZCB0byByZWZsZWN0IHRoZSBuZXcgbWluaW11bS4gVGhlIG1heEhlaWdodFxuICAgICAqIGRvZXMgbm90IGhhdmUgdGhlIHNhbWUgcHJvYmxlbSBiZWNhdXNlIGl0IGRvZXMgbm90IGFmZmVjdCB0aGUgdGV4dGFyZWEncyBzY3JvbGxIZWlnaHQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNNaW5Sb3dzO1xuICAgIHByaXZhdGUgX3RleHRhcmVhRWxlbWVudDtcbiAgICAvKiogTWluaW11bSBhbW91bnQgb2Ygcm93cyBpbiB0aGUgdGV4dGFyZWEuICovXG4gICAgZ2V0IG1pblJvd3MoKTogbnVtYmVyO1xuICAgIHNldCBtaW5Sb3dzKHZhbHVlOiBudW1iZXIpO1xuICAgIC8qKiBNYXhpbXVtIGFtb3VudCBvZiByb3dzIGluIHRoZSB0ZXh0YXJlYS4gKi9cbiAgICBnZXQgbWF4Um93cygpOiBudW1iZXI7XG4gICAgc2V0IG1heFJvd3ModmFsdWU6IG51bWJlcik7XG4gICAgLyoqIFdoZXRoZXIgYXV0b3NpemluZyBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGdldCBlbmFibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pO1xuICAgIC8qKiBDYWNoZWQgaGVpZ2h0IG9mIGEgdGV4dGFyZWEgd2l0aCBhIHNpbmdsZSByb3cuICovXG4gICAgcHJpdmF0ZSBfY2FjaGVkTGluZUhlaWdodDtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9wbGF0Zm9ybTogUGxhdGZvcm0sIF9uZ1pvbmU6IE5nWm9uZSk7XG4gICAgLyoqIFNldHMgdGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYSBhcyBkZXRlcm1pbmVkIGJ5IG1pblJvd3MuICovXG4gICAgX3NldE1pbkhlaWdodCgpOiB2b2lkO1xuICAgIC8qKiBTZXRzIHRoZSBtYXhpbXVtIGhlaWdodCBvZiB0aGUgdGV4dGFyZWEgYXMgZGV0ZXJtaW5lZCBieSBtYXhSb3dzLiAqL1xuICAgIF9zZXRNYXhIZWlnaHQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBoZWlnaHQgb2YgYSBzaW5nbGUtcm93IHRleHRhcmVhIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGNhY2hlZC5cbiAgICAgKlxuICAgICAqIFdlIG5lZWQgdG8ga25vdyBob3cgbGFyZ2UgYSBzaW5nbGUgXCJyb3dcIiBvZiBhIHRleHRhcmVhIGlzIGluIG9yZGVyIHRvIGFwcGx5IG1pblJvd3MgYW5kXG4gICAgICogbWF4Um93cy4gRm9yIHRoZSBpbml0aWFsIHZlcnNpb24sIHdlIHdpbGwgYXNzdW1lIHRoYXQgdGhlIGhlaWdodCBvZiBhIHNpbmdsZSBsaW5lIGluIHRoZVxuICAgICAqIHRleHRhcmVhIGRvZXMgbm90IGV2ZXIgY2hhbmdlLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2NhY2hlVGV4dGFyZWFMaW5lSGVpZ2h0O1xuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlc2l6ZSB0aGUgdGV4dGFyZWEgdG8gZml0IGl0cyBjb250ZW50LlxuICAgICAqIEBwYXJhbSBmb3JjZSBXaGV0aGVyIHRvIGZvcmNlIGEgaGVpZ2h0IHJlY2FsY3VsYXRpb24uIEJ5IGRlZmF1bHQgdGhlIGhlaWdodCB3aWxsIGJlXG4gICAgICogICAgcmVjYWxjdWxhdGVkIG9ubHkgaWYgdGhlIHZhbHVlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgY2FsbC5cbiAgICAgKi9cbiAgICByZXNpemVUb0ZpdENvbnRlbnQoZm9yY2U/OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRleHRhcmVhIHRvIGl0cyBvcmlnaW5hbCBzaXplXG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZDtcbiAgICBfbm9vcElucHV0SGFuZGxlcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgYSB0ZXh0YXJlYSB0byB0aGUgY2FyZXQgcG9zaXRpb24uIE9uIEZpcmVmb3ggcmVzaXppbmcgdGhlIHRleHRhcmVhIHdpbGxcbiAgICAgKiBwcmV2ZW50IGl0IGZyb20gc2Nyb2xsaW5nIHRvIHRoZSBjYXJldCBwb3NpdGlvbi4gV2UgbmVlZCB0byByZS1zZXQgdGhlIHNlbGVjdGlvblxuICAgICAqIGluIG9yZGVyIGZvciBpdCB0byBzY3JvbGwgdG8gdGhlIHByb3BlciBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zY3JvbGxUb0NhcmV0UG9zaXRpb247XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21pblJvd3M6IE51bWJlcklucHV0O1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tYXhSb3dzOiBOdW1iZXJJbnB1dDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19