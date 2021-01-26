/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { NumberInput } from '@angular/cdk/coercion';
import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { CdkTree, CdkTreeNode } from './tree';
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkTreeNodePadding<T> implements OnDestroy {
    private _treeNode;
    private _tree;
    private _renderer;
    private _element;
    private _dir;
    /** Current padding value applied to the element. Used to avoid unnecessarily hitting the DOM. */
    private _currentPadding;
    /** Subject that emits when the component has been destroyed. */
    private _destroyed;
    /** CSS units used for the indentation value. */
    indentUnits: string;
    /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
    get level(): number;
    set level(value: number);
    _level: number;
    /**
     * The indent for each level. Can be a number or a CSS string.
     * Default number 40px from material design menu sub-menu spec.
     */
    get indent(): number | string;
    set indent(indent: number | string);
    _indent: number;
    constructor(_treeNode: CdkTreeNode<T>, _tree: CdkTree<T>, _renderer: Renderer2, _element: ElementRef<HTMLElement>, _dir: Directionality);
    ngOnDestroy(): void;
    /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
    _paddingIndent(): string | null;
    _setPadding(forceChange?: boolean): void;
    static ngAcceptInputType_level: NumberInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNodePadding<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNodePadding<any>, "[cdkTreeNodePadding]", never, {
    "level": "cdkTreeNodePadding";
    "indent": "cdkTreeNodePaddingIndent";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5kLnRzIiwic291cmNlcyI6WyJwYWRkaW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBOdW1iZXJJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrVHJlZSwgQ2RrVHJlZU5vZGUgfSBmcm9tICcuL3RyZWUnO1xuLyoqXG4gKiBJbmRlbnQgZm9yIHRoZSBjaGlsZHJlbiB0cmVlIGRhdGFOb2Rlcy5cbiAqIFRoaXMgZGlyZWN0aXZlIHdpbGwgYWRkIGxlZnQtcGFkZGluZyB0byB0aGUgbm9kZSB0byBzaG93IGhpZXJhcmNoeS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVHJlZU5vZGVQYWRkaW5nPFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF90cmVlTm9kZTtcbiAgICBwcml2YXRlIF90cmVlO1xuICAgIHByaXZhdGUgX3JlbmRlcmVyO1xuICAgIHByaXZhdGUgX2VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfZGlyO1xuICAgIC8qKiBDdXJyZW50IHBhZGRpbmcgdmFsdWUgYXBwbGllZCB0byB0aGUgZWxlbWVudC4gVXNlZCB0byBhdm9pZCB1bm5lY2Vzc2FyaWx5IGhpdHRpbmcgdGhlIERPTS4gKi9cbiAgICBwcml2YXRlIF9jdXJyZW50UGFkZGluZztcbiAgICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkO1xuICAgIC8qKiBDU1MgdW5pdHMgdXNlZCBmb3IgdGhlIGluZGVudGF0aW9uIHZhbHVlLiAqL1xuICAgIGluZGVudFVuaXRzOiBzdHJpbmc7XG4gICAgLyoqIFRoZSBsZXZlbCBvZiBkZXB0aCBvZiB0aGUgdHJlZSBub2RlLiBUaGUgcGFkZGluZyB3aWxsIGJlIGBsZXZlbCAqIGluZGVudGAgcGl4ZWxzLiAqL1xuICAgIGdldCBsZXZlbCgpOiBudW1iZXI7XG4gICAgc2V0IGxldmVsKHZhbHVlOiBudW1iZXIpO1xuICAgIF9sZXZlbDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBpbmRlbnQgZm9yIGVhY2ggbGV2ZWwuIENhbiBiZSBhIG51bWJlciBvciBhIENTUyBzdHJpbmcuXG4gICAgICogRGVmYXVsdCBudW1iZXIgNDBweCBmcm9tIG1hdGVyaWFsIGRlc2lnbiBtZW51IHN1Yi1tZW51IHNwZWMuXG4gICAgICovXG4gICAgZ2V0IGluZGVudCgpOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgc2V0IGluZGVudChpbmRlbnQ6IG51bWJlciB8IHN0cmluZyk7XG4gICAgX2luZGVudDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKF90cmVlTm9kZTogQ2RrVHJlZU5vZGU8VD4sIF90cmVlOiBDZGtUcmVlPFQ+LCBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgX2VsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBfZGlyOiBEaXJlY3Rpb25hbGl0eSk7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKiogVGhlIHBhZGRpbmcgaW5kZW50IHZhbHVlIGZvciB0aGUgdHJlZSBub2RlLiBSZXR1cm5zIGEgc3RyaW5nIHdpdGggcHggbnVtYmVycyBpZiBub3QgbnVsbC4gKi9cbiAgICBfcGFkZGluZ0luZGVudCgpOiBzdHJpbmcgfCBudWxsO1xuICAgIF9zZXRQYWRkaW5nKGZvcmNlQ2hhbmdlPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xldmVsOiBOdW1iZXJJbnB1dDtcbn1cbiJdfQ==