/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkDropListGroup<T> implements OnDestroy {
    /** Drop lists registered inside the group. */
    readonly _items: Set<T>;
    /** Whether starting a dragging sequence from inside this group is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDropListGroup<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDropListGroup<any>, "[cdkDropListGroup]", ["cdkDropListGroup"], {
    "disabled": "cdkDropListGroupDisabled";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LWdyb3VwLmQudHMiLCJzb3VyY2VzIjpbImRyb3AtbGlzdC1ncm91cC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuLyoqXG4gKiBEZWNsYXJhdGl2ZWx5IGNvbm5lY3RzIHNpYmxpbmcgYGNka0Ryb3BMaXN0YCBpbnN0YW5jZXMgdG9nZXRoZXIuIEFsbCBvZiB0aGUgYGNka0Ryb3BMaXN0YFxuICogZWxlbWVudHMgdGhhdCBhcmUgcGxhY2VkIGluc2lkZSBhIGBjZGtEcm9wTGlzdEdyb3VwYCB3aWxsIGJlIGNvbm5lY3RlZCB0byBlYWNoIG90aGVyXG4gKiBhdXRvbWF0aWNhbGx5LiBDYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYGNka0Ryb3BMaXN0Q29ubmVjdGVkVG9gIGlucHV0XG4gKiBmcm9tIGBjZGtEcm9wTGlzdGAuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0Ryb3BMaXN0R3JvdXA8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIC8qKiBEcm9wIGxpc3RzIHJlZ2lzdGVyZWQgaW5zaWRlIHRoZSBncm91cC4gKi9cbiAgICByZWFkb25seSBfaXRlbXM6IFNldDxUPjtcbiAgICAvKiogV2hldGhlciBzdGFydGluZyBhIGRyYWdnaW5nIHNlcXVlbmNlIGZyb20gaW5zaWRlIHRoaXMgZ3JvdXAgaXMgZGlzYWJsZWQuICovXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19