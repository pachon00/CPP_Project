/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef } from '@angular/core';
/** Context provided to the tree node component. */
import * as ɵngcc0 from '@angular/core';
export declare class CdkTreeNodeOutletContext<T> {
    /** Data for the node. */
    $implicit: T;
    /** Depth of the node. */
    level: number;
    /** Index location of the node. */
    index?: number;
    /** Length of the number of total dataNodes. */
    count?: number;
    constructor(data: T);
}
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */
export declare class CdkTreeNodeDef<T> {
    template: TemplateRef<any>;
    /**
     * Function that should return true if this node template should be used for the provided node
     * data and index. If left undefined, this node will be considered the default node template to
     * use when no other when functions return true for the data.
     * For every node, there must be at least one when function that passes or an undefined to
     * default.
     */
    when: (index: number, nodeData: T) => boolean;
    /** @docs-private */
    constructor(template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNodeDef<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNodeDef<any>, "[cdkTreeNodeDef]", never, {
    "when": "cdkTreeNodeDefWhen";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5kLnRzIiwic291cmNlcyI6WyJub2RlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKiBDb250ZXh0IHByb3ZpZGVkIHRvIHRoZSB0cmVlIG5vZGUgY29tcG9uZW50LiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVHJlZU5vZGVPdXRsZXRDb250ZXh0PFQ+IHtcbiAgICAvKiogRGF0YSBmb3IgdGhlIG5vZGUuICovXG4gICAgJGltcGxpY2l0OiBUO1xuICAgIC8qKiBEZXB0aCBvZiB0aGUgbm9kZS4gKi9cbiAgICBsZXZlbDogbnVtYmVyO1xuICAgIC8qKiBJbmRleCBsb2NhdGlvbiBvZiB0aGUgbm9kZS4gKi9cbiAgICBpbmRleD86IG51bWJlcjtcbiAgICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgZGF0YU5vZGVzLiAqL1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKGRhdGE6IFQpO1xufVxuLyoqXG4gKiBEYXRhIG5vZGUgZGVmaW5pdGlvbiBmb3IgdGhlIENka1RyZWUuXG4gKiBDYXB0dXJlcyB0aGUgbm9kZSdzIHRlbXBsYXRlIGFuZCBhIHdoZW4gcHJlZGljYXRlIHRoYXQgZGVzY3JpYmVzIHdoZW4gdGhpcyBub2RlIHNob3VsZCBiZSB1c2VkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtUcmVlTm9kZURlZjxUPiB7XG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhpcyBub2RlIHRlbXBsYXRlIHNob3VsZCBiZSB1c2VkIGZvciB0aGUgcHJvdmlkZWQgbm9kZVxuICAgICAqIGRhdGEgYW5kIGluZGV4LiBJZiBsZWZ0IHVuZGVmaW5lZCwgdGhpcyBub2RlIHdpbGwgYmUgY29uc2lkZXJlZCB0aGUgZGVmYXVsdCBub2RlIHRlbXBsYXRlIHRvXG4gICAgICogdXNlIHdoZW4gbm8gb3RoZXIgd2hlbiBmdW5jdGlvbnMgcmV0dXJuIHRydWUgZm9yIHRoZSBkYXRhLlxuICAgICAqIEZvciBldmVyeSBub2RlLCB0aGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSB3aGVuIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIG9yIGFuIHVuZGVmaW5lZCB0b1xuICAgICAqIGRlZmF1bHQuXG4gICAgICovXG4gICAgd2hlbjogKGluZGV4OiBudW1iZXIsIG5vZGVEYXRhOiBUKSA9PiBib29sZWFuO1xuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pO1xufVxuIl19