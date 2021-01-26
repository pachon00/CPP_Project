/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { ElementRef, TemplateRef } from '@angular/core';
import { CanStick, CanStickCtor } from './can-stick';
/** Base interface for a cell definition. Captures a column's cell template definition. */
import * as ɵngcc0 from '@angular/core';
export interface CellDef {
    template: TemplateRef<any>;
}
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export declare class CdkCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCellDef>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCellDef, "[cdkCellDef]", never, {}, {}, never>;
}
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export declare class CdkHeaderCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderCellDef>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkHeaderCellDef, "[cdkHeaderCellDef]", never, {}, {}, never>;
}
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export declare class CdkFooterCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterCellDef>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFooterCellDef, "[cdkFooterCellDef]", never, {}, {}, never>;
}
/** @docs-private */
declare class CdkColumnDefBase {
}
declare const _CdkColumnDefBase: CanStickCtor & typeof CdkColumnDefBase;
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
export declare class CdkColumnDef extends _CdkColumnDefBase implements CanStick {
    /** Unique name for this column. */
    get name(): string;
    set name(name: string);
    _name: string;
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd(): boolean;
    set stickyEnd(v: boolean);
    _stickyEnd: boolean;
    /** @docs-private */
    cell: CdkCellDef;
    /** @docs-private */
    headerCell: CdkHeaderCellDef;
    /** @docs-private */
    footerCell: CdkFooterCellDef;
    /**
     * Transformed version of the column name that can be used as part of a CSS classname. Excludes
     * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
     * do not match are replaced by the '-' character.
     */
    cssClassFriendlyName: string;
    static ngAcceptInputType_sticky: BooleanInput;
    static ngAcceptInputType_stickyEnd: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkColumnDef>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkColumnDef, "[cdkColumnDef]", never, {
    "sticky": "sticky";
    "name": "cdkColumnDef";
    "stickyEnd": "stickyEnd";
}, {}, ["cell", "headerCell", "footerCell"]>;
}
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
export declare class BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
}
/** Header cell template container that adds the right classes and role. */
export declare class CdkHeaderCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderCell>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkHeaderCell, "cdk-header-cell, th[cdk-header-cell]", never, {}, {}, never>;
}
/** Footer cell template container that adds the right classes and role. */
export declare class CdkFooterCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterCell>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFooterCell, "cdk-footer-cell, td[cdk-footer-cell]", never, {}, {}, never>;
}
/** Cell template container that adds the right classes and role. */
export declare class CdkCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCell>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCell, "cdk-cell, td[cdk-cell]", never, {}, {}, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5kLnRzIiwic291cmNlcyI6WyJjZWxsLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTs7Ozs7Ozs7OztBQVFBOzs7Ozs7QUFJQTs7Ozs7O0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuU3RpY2ssIENhblN0aWNrQ3RvciB9IGZyb20gJy4vY2FuLXN0aWNrJztcbi8qKiBCYXNlIGludGVyZmFjZSBmb3IgYSBjZWxsIGRlZmluaXRpb24uIENhcHR1cmVzIGEgY29sdW1uJ3MgY2VsbCB0ZW1wbGF0ZSBkZWZpbml0aW9uLiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZWxsRGVmIHtcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbi8qKlxuICogQ2VsbCBkZWZpbml0aW9uIGZvciBhIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGRhdGEgcm93IGNlbGwgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0NlbGxEZWYgaW1wbGVtZW50cyBDZWxsRGVmIHtcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBjb25zdHJ1Y3RvcigvKiogQGRvY3MtcHJpdmF0ZSAqLyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pik7XG59XG4vKipcbiAqIEhlYWRlciBjZWxsIGRlZmluaXRpb24gZm9yIGEgQ0RLIHRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgaGVhZGVyIGNlbGwgYW5kIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtIZWFkZXJDZWxsRGVmIGltcGxlbWVudHMgQ2VsbERlZiB7XG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgY29uc3RydWN0b3IoLyoqIEBkb2NzLXByaXZhdGUgKi8gdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pO1xufVxuLyoqXG4gKiBGb290ZXIgY2VsbCBkZWZpbml0aW9uIGZvciBhIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGZvb3RlciBjZWxsIGFuZCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrRm9vdGVyQ2VsbERlZiBpbXBsZW1lbnRzIENlbGxEZWYge1xuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGNvbnN0cnVjdG9yKC8qKiBAZG9jcy1wcml2YXRlICovIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KTtcbn1cbi8qKiBAZG9jcy1wcml2YXRlICovXG5kZWNsYXJlIGNsYXNzIENka0NvbHVtbkRlZkJhc2Uge1xufVxuZGVjbGFyZSBjb25zdCBfQ2RrQ29sdW1uRGVmQmFzZTogQ2FuU3RpY2tDdG9yICYgdHlwZW9mIENka0NvbHVtbkRlZkJhc2U7XG4vKipcbiAqIENvbHVtbiBkZWZpbml0aW9uIGZvciB0aGUgQ0RLIHRhYmxlLlxuICogRGVmaW5lcyBhIHNldCBvZiBjZWxscyBhdmFpbGFibGUgZm9yIGEgdGFibGUgY29sdW1uLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtDb2x1bW5EZWYgZXh0ZW5kcyBfQ2RrQ29sdW1uRGVmQmFzZSBpbXBsZW1lbnRzIENhblN0aWNrIHtcbiAgICAvKiogVW5pcXVlIG5hbWUgZm9yIHRoaXMgY29sdW1uLiAqL1xuICAgIGdldCBuYW1lKCk6IHN0cmluZztcbiAgICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpO1xuICAgIF9uYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGlzIGNvbHVtbiBzaG91bGQgYmUgc3RpY2t5IHBvc2l0aW9uZWQgb24gdGhlIGVuZCBvZiB0aGUgcm93LiBTaG91bGQgbWFrZSBzdXJlXG4gICAgICogdGhhdCBpdCBtaW1pY3MgdGhlIGBDYW5TdGlja2AgbWl4aW4gc3VjaCB0aGF0IGBfaGFzU3RpY2t5Q2hhbmdlZGAgaXMgc2V0IHRvIHRydWUgaWYgdGhlIHZhbHVlXG4gICAgICogaGFzIGJlZW4gY2hhbmdlZC5cbiAgICAgKi9cbiAgICBnZXQgc3RpY2t5RW5kKCk6IGJvb2xlYW47XG4gICAgc2V0IHN0aWNreUVuZCh2OiBib29sZWFuKTtcbiAgICBfc3RpY2t5RW5kOiBib29sZWFuO1xuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgY2VsbDogQ2RrQ2VsbERlZjtcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIGhlYWRlckNlbGw6IENka0hlYWRlckNlbGxEZWY7XG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBmb290ZXJDZWxsOiBDZGtGb290ZXJDZWxsRGVmO1xuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybWVkIHZlcnNpb24gb2YgdGhlIGNvbHVtbiBuYW1lIHRoYXQgY2FuIGJlIHVzZWQgYXMgcGFydCBvZiBhIENTUyBjbGFzc25hbWUuIEV4Y2x1ZGVzXG4gICAgICogYWxsIG5vbi1hbHBoYW51bWVyaWMgY2hhcmFjdGVycyBhbmQgdGhlIHNwZWNpYWwgY2hhcmFjdGVycyAnLScgYW5kICdfJy4gQW55IGNoYXJhY3RlcnMgdGhhdFxuICAgICAqIGRvIG5vdCBtYXRjaCBhcmUgcmVwbGFjZWQgYnkgdGhlICctJyBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgY3NzQ2xhc3NGcmllbmRseU5hbWU6IHN0cmluZztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5OiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreUVuZDogQm9vbGVhbklucHV0O1xufVxuLyoqIEJhc2UgY2xhc3MgZm9yIHRoZSBjZWxscy4gQWRkcyBhIENTUyBjbGFzc25hbWUgdGhhdCBpZGVudGlmaWVzIHRoZSBjb2x1bW4gaXQgcmVuZGVycyBpbi4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJhc2VDZGtDZWxsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZik7XG59XG4vKiogSGVhZGVyIGNlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0hlYWRlckNlbGwgZXh0ZW5kcyBCYXNlQ2RrQ2VsbCB7XG4gICAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpO1xufVxuLyoqIEZvb3RlciBjZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtGb290ZXJDZWxsIGV4dGVuZHMgQmFzZUNka0NlbGwge1xuICAgIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcbn1cbi8qKiBDZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtDZWxsIGV4dGVuZHMgQmFzZUNka0NlbGwge1xuICAgIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcbn1cbmV4cG9ydCB7fTtcbiJdfQ==