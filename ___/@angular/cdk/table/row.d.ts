/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { IterableChanges, IterableDiffer, IterableDiffers, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { CanStick, CanStickCtor } from './can-stick';
import { CdkCellDef, CdkColumnDef } from './cell';
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
import * as ɵngcc0 from '@angular/core';
export declare const CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
export declare abstract class BaseRowDef implements OnChanges {
    /** @docs-private */ template: TemplateRef<any>;
    protected _differs: IterableDiffers;
    /** The columns to be displayed on this row. */
    columns: Iterable<string>;
    /** Differ used to check if any changes were made to the columns. */
    protected _columnsDiffer: IterableDiffer<any>;
    constructor(
    /** @docs-private */ template: TemplateRef<any>, _differs: IterableDiffers);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    getColumnsDiff(): IterableChanges<any> | null;
    /** Gets this row def's relevant cell template from the provided column def. */
    extractCellTemplate(column: CdkColumnDef): TemplateRef<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseRowDef>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseRowDef, never, never, {}, {}, never>;
}
/** @docs-private */
declare class CdkHeaderRowDefBase extends BaseRowDef {
}
declare const _CdkHeaderRowDefBase: CanStickCtor & typeof CdkHeaderRowDefBase;
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export declare class CdkHeaderRowDef extends _CdkHeaderRowDefBase implements CanStick, OnChanges {
    constructor(template: TemplateRef<any>, _differs: IterableDiffers);
    ngOnChanges(changes: SimpleChanges): void;
    static ngAcceptInputType_sticky: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderRowDef>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkHeaderRowDef, "[cdkHeaderRowDef]", never, {
    "columns": "cdkHeaderRowDef";
    "sticky": "cdkHeaderRowDefSticky";
}, {}, never>;
}
/** @docs-private */
declare class CdkFooterRowDefBase extends BaseRowDef {
}
declare const _CdkFooterRowDefBase: CanStickCtor & typeof CdkFooterRowDefBase;
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export declare class CdkFooterRowDef extends _CdkFooterRowDefBase implements CanStick, OnChanges {
    constructor(template: TemplateRef<any>, _differs: IterableDiffers);
    ngOnChanges(changes: SimpleChanges): void;
    static ngAcceptInputType_sticky: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterRowDef>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFooterRowDef, "[cdkFooterRowDef]", never, {
    "columns": "cdkFooterRowDef";
    "sticky": "cdkFooterRowDefSticky";
}, {}, never>;
}
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export declare class CdkRowDef<T> extends BaseRowDef {
    /**
     * Function that should return true if this row template should be used for the provided index
     * and row data. If left undefined, this row will be considered the default row template to use
     * when no other when functions return true for the data.
     * For every row, there must be at least one when function that passes or an undefined to default.
     */
    when: (index: number, rowData: T) => boolean;
    constructor(template: TemplateRef<any>, _differs: IterableDiffers);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkRowDef<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkRowDef<any>, "[cdkRowDef]", never, {
    "columns": "cdkRowDefColumns";
    "when": "cdkRowDefWhen";
}, {}, never>;
}
/** Context provided to the row cells when `multiTemplateDataRows` is false */
export interface CdkCellOutletRowContext<T> {
    /** Data for the row that this cell is located within. */
    $implicit?: T;
    /** Index of the data object in the provided data array. */
    index?: number;
    /** Length of the number of total rows. */
    count?: number;
    /** True if this cell is contained in the first row. */
    first?: boolean;
    /** True if this cell is contained in the last row. */
    last?: boolean;
    /** True if this cell is contained in a row with an even-numbered index. */
    even?: boolean;
    /** True if this cell is contained in a row with an odd-numbered index. */
    odd?: boolean;
}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
 * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
 * `renderIndex`.
 */
export interface CdkCellOutletMultiRowContext<T> {
    /** Data for the row that this cell is located within. */
    $implicit?: T;
    /** Index of the data object in the provided data array. */
    dataIndex?: number;
    /** Index location of the rendered row that this cell is located within. */
    renderIndex?: number;
    /** Length of the number of total rows. */
    count?: number;
    /** True if this cell is contained in the first row. */
    first?: boolean;
    /** True if this cell is contained in the last row. */
    last?: boolean;
    /** True if this cell is contained in a row with an even-numbered index. */
    even?: boolean;
    /** True if this cell is contained in a row with an odd-numbered index. */
    odd?: boolean;
}
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
export declare class CdkCellOutlet implements OnDestroy {
    _viewContainer: ViewContainerRef;
    /** The ordered list of cells to render within this outlet's view container */
    cells: CdkCellDef[];
    /** The data context to be provided to each cell */
    context: any;
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    static mostRecentCellOutlet: CdkCellOutlet | null;
    constructor(_viewContainer: ViewContainerRef);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCellOutlet>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCellOutlet, "[cdkCellOutlet]", never, {}, {}, never>;
}
/** Header template container that contains the cell outlet. Adds the right class and role. */
export declare class CdkHeaderRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderRow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkHeaderRow, "cdk-header-row, tr[cdk-header-row]", never, {}, {}, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class CdkFooterRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterRow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkFooterRow, "cdk-footer-row, tr[cdk-footer-row]", never, {}, {}, never>;
}
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export declare class CdkRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkRow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkRow, "cdk-row, tr[cdk-row]", never, {}, {}, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmQudHMiLCJzb3VyY2VzIjpbInJvdy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REE7Ozs7O0FBR0E7Ozs7O0FBR0E7Ozs7O0FBR0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBJdGVyYWJsZUNoYW5nZXMsIEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZURpZmZlcnMsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuU3RpY2ssIENhblN0aWNrQ3RvciB9IGZyb20gJy4vY2FuLXN0aWNrJztcbmltcG9ydCB7IENka0NlbGxEZWYsIENka0NvbHVtbkRlZiB9IGZyb20gJy4vY2VsbCc7XG4vKipcbiAqIFRoZSByb3cgdGVtcGxhdGUgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGUgbWF0LXRhYmxlLiBTaG91bGQgbm90IGJlIHVzZWQgb3V0c2lkZSBvZiB0aGVcbiAqIG1hdGVyaWFsIGxpYnJhcnkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENES19ST1dfVEVNUExBVEUgPSBcIjxuZy1jb250YWluZXIgY2RrQ2VsbE91dGxldD48L25nLWNvbnRhaW5lcj5cIjtcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgdGhlIENka0hlYWRlclJvd0RlZiBhbmQgQ2RrUm93RGVmIHRoYXQgaGFuZGxlcyBjaGVja2luZyB0aGVpciBjb2x1bW5zIGlucHV0c1xuICogZm9yIGNoYW5nZXMgYW5kIG5vdGlmeWluZyB0aGUgdGFibGUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEJhc2VSb3dEZWYgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIC8qKiBAZG9jcy1wcml2YXRlICovIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHByb3RlY3RlZCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzO1xuICAgIC8qKiBUaGUgY29sdW1ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhpcyByb3cuICovXG4gICAgY29sdW1uczogSXRlcmFibGU8c3RyaW5nPjtcbiAgICAvKiogRGlmZmVyIHVzZWQgdG8gY2hlY2sgaWYgYW55IGNoYW5nZXMgd2VyZSBtYWRlIHRvIHRoZSBjb2x1bW5zLiAqL1xuICAgIHByb3RlY3RlZCBfY29sdW1uc0RpZmZlcjogSXRlcmFibGVEaWZmZXI8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqLyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyk7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBjdXJyZW50IGNvbHVtbnMgYW5kIHRoZSBjb2x1bW5zIGZyb20gdGhlIGxhc3QgZGlmZiwgb3IgbnVsbFxuICAgICAqIGlmIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2UuXG4gICAgICovXG4gICAgZ2V0Q29sdW1uc0RpZmYoKTogSXRlcmFibGVDaGFuZ2VzPGFueT4gfCBudWxsO1xuICAgIC8qKiBHZXRzIHRoaXMgcm93IGRlZidzIHJlbGV2YW50IGNlbGwgdGVtcGxhdGUgZnJvbSB0aGUgcHJvdmlkZWQgY29sdW1uIGRlZi4gKi9cbiAgICBleHRyYWN0Q2VsbFRlbXBsYXRlKGNvbHVtbjogQ2RrQ29sdW1uRGVmKTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbi8qKiBAZG9jcy1wcml2YXRlICovXG5kZWNsYXJlIGNsYXNzIENka0hlYWRlclJvd0RlZkJhc2UgZXh0ZW5kcyBCYXNlUm93RGVmIHtcbn1cbmRlY2xhcmUgY29uc3QgX0Nka0hlYWRlclJvd0RlZkJhc2U6IENhblN0aWNrQ3RvciAmIHR5cGVvZiBDZGtIZWFkZXJSb3dEZWZCYXNlO1xuLyoqXG4gKiBIZWFkZXIgcm93IGRlZmluaXRpb24gZm9yIHRoZSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgaGVhZGVyIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciBoZWFkZXIgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0hlYWRlclJvd0RlZiBleHRlbmRzIF9DZGtIZWFkZXJSb3dEZWZCYXNlIGltcGxlbWVudHMgQ2FuU3RpY2ssIE9uQ2hhbmdlcyB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGlja3k6IEJvb2xlYW5JbnB1dDtcbn1cbi8qKiBAZG9jcy1wcml2YXRlICovXG5kZWNsYXJlIGNsYXNzIENka0Zvb3RlclJvd0RlZkJhc2UgZXh0ZW5kcyBCYXNlUm93RGVmIHtcbn1cbmRlY2xhcmUgY29uc3QgX0Nka0Zvb3RlclJvd0RlZkJhc2U6IENhblN0aWNrQ3RvciAmIHR5cGVvZiBDZGtGb290ZXJSb3dEZWZCYXNlO1xuLyoqXG4gKiBGb290ZXIgcm93IGRlZmluaXRpb24gZm9yIHRoZSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgZm9vdGVyIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciBmb290ZXIgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0Zvb3RlclJvd0RlZiBleHRlbmRzIF9DZGtGb290ZXJSb3dEZWZCYXNlIGltcGxlbWVudHMgQ2FuU3RpY2ssIE9uQ2hhbmdlcyB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGlja3k6IEJvb2xlYW5JbnB1dDtcbn1cbi8qKlxuICogRGF0YSByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSBoZWFkZXIgcm93J3MgdGVtcGxhdGUgYW5kIG90aGVyIHJvdyBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGhlIGNvbHVtbnMgdG8gZGlzcGxheSBhbmRcbiAqIGEgd2hlbiBwcmVkaWNhdGUgdGhhdCBkZXNjcmliZXMgd2hlbiB0aGlzIHJvdyBzaG91bGQgYmUgdXNlZC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrUm93RGVmPFQ+IGV4dGVuZHMgQmFzZVJvd0RlZiB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhpcyByb3cgdGVtcGxhdGUgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBwcm92aWRlZCBpbmRleFxuICAgICAqIGFuZCByb3cgZGF0YS4gSWYgbGVmdCB1bmRlZmluZWQsIHRoaXMgcm93IHdpbGwgYmUgY29uc2lkZXJlZCB0aGUgZGVmYXVsdCByb3cgdGVtcGxhdGUgdG8gdXNlXG4gICAgICogd2hlbiBubyBvdGhlciB3aGVuIGZ1bmN0aW9ucyByZXR1cm4gdHJ1ZSBmb3IgdGhlIGRhdGEuXG4gICAgICogRm9yIGV2ZXJ5IHJvdywgdGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgd2hlbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyBvciBhbiB1bmRlZmluZWQgdG8gZGVmYXVsdC5cbiAgICAgKi9cbiAgICB3aGVuOiAoaW5kZXg6IG51bWJlciwgcm93RGF0YTogVCkgPT4gYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyk7XG59XG4vKiogQ29udGV4dCBwcm92aWRlZCB0byB0aGUgcm93IGNlbGxzIHdoZW4gYG11bHRpVGVtcGxhdGVEYXRhUm93c2AgaXMgZmFsc2UgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrQ2VsbE91dGxldFJvd0NvbnRleHQ8VD4ge1xuICAgIC8qKiBEYXRhIGZvciB0aGUgcm93IHRoYXQgdGhpcyBjZWxsIGlzIGxvY2F0ZWQgd2l0aGluLiAqL1xuICAgICRpbXBsaWNpdD86IFQ7XG4gICAgLyoqIEluZGV4IG9mIHRoZSBkYXRhIG9iamVjdCBpbiB0aGUgcHJvdmlkZWQgZGF0YSBhcnJheS4gKi9cbiAgICBpbmRleD86IG51bWJlcjtcbiAgICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgcm93cy4gKi9cbiAgICBjb3VudD86IG51bWJlcjtcbiAgICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIHRoZSBmaXJzdCByb3cuICovXG4gICAgZmlyc3Q/OiBib29sZWFuO1xuICAgIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gdGhlIGxhc3Qgcm93LiAqL1xuICAgIGxhc3Q/OiBib29sZWFuO1xuICAgIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gYSByb3cgd2l0aCBhbiBldmVuLW51bWJlcmVkIGluZGV4LiAqL1xuICAgIGV2ZW4/OiBib29sZWFuO1xuICAgIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gYSByb3cgd2l0aCBhbiBvZGQtbnVtYmVyZWQgaW5kZXguICovXG4gICAgb2RkPzogYm9vbGVhbjtcbn1cbi8qKlxuICogQ29udGV4dCBwcm92aWRlZCB0byB0aGUgcm93IGNlbGxzIHdoZW4gYG11bHRpVGVtcGxhdGVEYXRhUm93c2AgaXMgdHJ1ZS4gVGhpcyBjb250ZXh0IGlzIHRoZSBzYW1lXG4gKiBhcyBDZGtDZWxsT3V0bGV0Um93Q29udGV4dCBleGNlcHQgdGhhdCB0aGUgc2luZ2xlIGBpbmRleGAgdmFsdWUgaXMgcmVwbGFjZWQgYnkgYGRhdGFJbmRleGAgYW5kXG4gKiBgcmVuZGVySW5kZXhgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENka0NlbGxPdXRsZXRNdWx0aVJvd0NvbnRleHQ8VD4ge1xuICAgIC8qKiBEYXRhIGZvciB0aGUgcm93IHRoYXQgdGhpcyBjZWxsIGlzIGxvY2F0ZWQgd2l0aGluLiAqL1xuICAgICRpbXBsaWNpdD86IFQ7XG4gICAgLyoqIEluZGV4IG9mIHRoZSBkYXRhIG9iamVjdCBpbiB0aGUgcHJvdmlkZWQgZGF0YSBhcnJheS4gKi9cbiAgICBkYXRhSW5kZXg/OiBudW1iZXI7XG4gICAgLyoqIEluZGV4IGxvY2F0aW9uIG9mIHRoZSByZW5kZXJlZCByb3cgdGhhdCB0aGlzIGNlbGwgaXMgbG9jYXRlZCB3aXRoaW4uICovXG4gICAgcmVuZGVySW5kZXg/OiBudW1iZXI7XG4gICAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIHJvd3MuICovXG4gICAgY291bnQ/OiBudW1iZXI7XG4gICAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiB0aGUgZmlyc3Qgcm93LiAqL1xuICAgIGZpcnN0PzogYm9vbGVhbjtcbiAgICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIHRoZSBsYXN0IHJvdy4gKi9cbiAgICBsYXN0PzogYm9vbGVhbjtcbiAgICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIGEgcm93IHdpdGggYW4gZXZlbi1udW1iZXJlZCBpbmRleC4gKi9cbiAgICBldmVuPzogYm9vbGVhbjtcbiAgICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIGEgcm93IHdpdGggYW4gb2RkLW51bWJlcmVkIGluZGV4LiAqL1xuICAgIG9kZD86IGJvb2xlYW47XG59XG4vKipcbiAqIE91dGxldCBmb3IgcmVuZGVyaW5nIGNlbGxzIGluc2lkZSBvZiBhIHJvdyBvciBoZWFkZXIgcm93LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtDZWxsT3V0bGV0IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbiAgICAvKiogVGhlIG9yZGVyZWQgbGlzdCBvZiBjZWxscyB0byByZW5kZXIgd2l0aGluIHRoaXMgb3V0bGV0J3MgdmlldyBjb250YWluZXIgKi9cbiAgICBjZWxsczogQ2RrQ2VsbERlZltdO1xuICAgIC8qKiBUaGUgZGF0YSBjb250ZXh0IHRvIGJlIHByb3ZpZGVkIHRvIGVhY2ggY2VsbCAqL1xuICAgIGNvbnRleHQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBTdGF0aWMgcHJvcGVydHkgY29udGFpbmluZyB0aGUgbGF0ZXN0IGNvbnN0cnVjdGVkIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXG4gICAgICogVXNlZCBieSB0aGUgQ0RLIHRhYmxlIHdoZW4gZWFjaCBDZGtIZWFkZXJSb3cgYW5kIENka1JvdyBjb21wb25lbnQgaXMgY3JlYXRlZCB1c2luZ1xuICAgICAqIGNyZWF0ZUVtYmVkZGVkVmlldy4gQWZ0ZXIgb25lIG9mIHRoZXNlIGNvbXBvbmVudHMgYXJlIGNyZWF0ZWQsIHRoaXMgcHJvcGVydHkgd2lsbCBwcm92aWRlXG4gICAgICogYSBoYW5kbGUgdG8gcHJvdmlkZSB0aGF0IGNvbXBvbmVudCdzIGNlbGxzIGFuZCBjb250ZXh0LiBBZnRlciBpbml0LCB0aGUgQ2RrQ2VsbE91dGxldCB3aWxsXG4gICAgICogY29uc3RydWN0IHRoZSBjZWxscyB3aXRoIHRoZSBwcm92aWRlZCBjb250ZXh0LlxuICAgICAqL1xuICAgIHN0YXRpYyBtb3N0UmVjZW50Q2VsbE91dGxldDogQ2RrQ2VsbE91dGxldCB8IG51bGw7XG4gICAgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4vKiogSGVhZGVyIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBjZWxsIG91dGxldC4gQWRkcyB0aGUgcmlnaHQgY2xhc3MgYW5kIHJvbGUuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtIZWFkZXJSb3cge1xufVxuLyoqIEZvb3RlciB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrRm9vdGVyUm93IHtcbn1cbi8qKiBEYXRhIHJvdyB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrUm93IHtcbn1cbmV4cG9ydCB7fTtcbiJdfQ==