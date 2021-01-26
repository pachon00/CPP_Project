/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef } from '@angular/core';
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkDragPreview<T = any> {
    templateRef: TemplateRef<T>;
    /** Context data to be added to the preview template instance. */
    data: T;
    constructor(templateRef: TemplateRef<T>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDragPreview<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDragPreview<any>, "ng-template[cdkDragPreview]", never, {
    "data": "data";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1wcmV2aWV3LmQudHMiLCJzb3VyY2VzIjpbImRyYWctcHJldmlldy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7OztBQUtBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIGEgdGVtcGxhdGUgZm9yIHRoZSBwcmV2aWV3XG4gKiBvZiBhIENka0RyYWcgd2hlbiBpdCBpcyBiZWluZyBkcmFnZ2VkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtEcmFnUHJldmlldzxUID0gYW55PiB7XG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+O1xuICAgIC8qKiBDb250ZXh0IGRhdGEgdG8gYmUgYWRkZWQgdG8gdGhlIHByZXZpZXcgdGVtcGxhdGUgaW5zdGFuY2UuICovXG4gICAgZGF0YTogVDtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VD4pO1xufVxuIl19