/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
/** Handle that can be used to drag and CdkDrag instance. */
import * as ɵngcc0 from '@angular/core';
export declare class CdkDragHandle implements OnDestroy {
    element: ElementRef<HTMLElement>;
    /** Closest parent draggable instance. */
    _parentDrag: {} | undefined;
    /** Emits when the state of the handle has changed. */
    _stateChanges: Subject<CdkDragHandle>;
    /** Whether starting to drag through this handle is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    constructor(element: ElementRef<HTMLElement>, parentDrag?: any);
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDragHandle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDragHandle, "[cdkDragHandle]", never, {
    "disabled": "cdkDragHandleDisabled";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1oYW5kbGUuZC50cyIsInNvdXJjZXMiOlsiZHJhZy1oYW5kbGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbi8qKiBIYW5kbGUgdGhhdCBjYW4gYmUgdXNlZCB0byBkcmFnIGFuZCBDZGtEcmFnIGluc3RhbmNlLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrRHJhZ0hhbmRsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgLyoqIENsb3Nlc3QgcGFyZW50IGRyYWdnYWJsZSBpbnN0YW5jZS4gKi9cbiAgICBfcGFyZW50RHJhZzoge30gfCB1bmRlZmluZWQ7XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBoYW5kbGUgaGFzIGNoYW5nZWQuICovXG4gICAgX3N0YXRlQ2hhbmdlczogU3ViamVjdDxDZGtEcmFnSGFuZGxlPjtcbiAgICAvKiogV2hldGhlciBzdGFydGluZyB0byBkcmFnIHRocm91Z2ggdGhpcyBoYW5kbGUgaXMgZGlzYWJsZWQuICovXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcGFyZW50RHJhZz86IGFueSk7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==