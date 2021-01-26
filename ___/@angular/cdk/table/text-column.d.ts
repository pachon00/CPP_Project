/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, OnDestroy, OnInit } from '@angular/core';
import { CdkCellDef, CdkColumnDef, CdkHeaderCellDef } from './cell';
import { CdkTable } from './table';
/** Configurable options for `CdkTextColumn`. */
import * as ɵngcc0 from '@angular/core';
export interface TextColumnOptions<T> {
    /**
     * Default function that provides the header text based on the column name if a header
     * text is not provided.
     */
    defaultHeaderTextTransform?: (name: string) => string;
    /** Default data accessor to use if one is not provided. */
    defaultDataAccessor?: (data: T, name: string) => string;
}
/** Injection token that can be used to specify the text column options. */
export declare const TEXT_COLUMN_OPTIONS: InjectionToken<TextColumnOptions<any>>;
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
export declare class CdkTextColumn<T> implements OnDestroy, OnInit {
    private _table;
    private _options;
    /** Column name that should be used to reference this column. */
    get name(): string;
    set name(name: string);
    _name: string;
    /**
     * Text label that should be used for the column header. If this property is not
     * set, the header text will default to the column name with its first letter capitalized.
     */
    headerText: string;
    /**
     * Accessor function to retrieve the data rendered for each cell. If this
     * property is not set, the data cells will render the value found in the data's property matching
     * the column's name. For example, if the column is named `id`, then the rendered value will be
     * value defined by the data's `id` property.
     */
    dataAccessor: (data: T, name: string) => string;
    /** Alignment of the cell values. */
    justify: 'start' | 'end';
    /** @docs-private */
    columnDef: CdkColumnDef;
    /**
     * The column cell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * @docs-private
     */
    cell: CdkCellDef;
    /**
     * The column headerCell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * @docs-private
     */
    headerCell: CdkHeaderCellDef;
    constructor(_table: CdkTable<T>, _options: TextColumnOptions<T>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    _createDefaultHeaderText(): string;
    /** Synchronizes the column definition name with the text column name. */
    private _syncColumnDefName;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTextColumn<any>>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkTextColumn<any>, "cdk-text-column", never, {
    "justify": "justify";
    "name": "name";
    "headerText": "headerText";
    "dataAccessor": "dataAccessor";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2x1bW4uZC50cyIsInNvdXJjZXMiOlsidGV4dC1jb2x1bW4uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrQ2VsbERlZiwgQ2RrQ29sdW1uRGVmLCBDZGtIZWFkZXJDZWxsRGVmIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IENka1RhYmxlIH0gZnJvbSAnLi90YWJsZSc7XG4vKiogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIGBDZGtUZXh0Q29sdW1uYC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dENvbHVtbk9wdGlvbnM8VD4ge1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyB0aGUgaGVhZGVyIHRleHQgYmFzZWQgb24gdGhlIGNvbHVtbiBuYW1lIGlmIGEgaGVhZGVyXG4gICAgICogdGV4dCBpcyBub3QgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZGVmYXVsdEhlYWRlclRleHRUcmFuc2Zvcm0/OiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG4gICAgLyoqIERlZmF1bHQgZGF0YSBhY2Nlc3NvciB0byB1c2UgaWYgb25lIGlzIG5vdCBwcm92aWRlZC4gKi9cbiAgICBkZWZhdWx0RGF0YUFjY2Vzc29yPzogKGRhdGE6IFQsIG5hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xufVxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlIHRleHQgY29sdW1uIG9wdGlvbnMuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBURVhUX0NPTFVNTl9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxUZXh0Q29sdW1uT3B0aW9uczxhbnk+Pjtcbi8qKlxuICogQ29sdW1uIHRoYXQgc2ltcGx5IHNob3dzIHRleHQgY29udGVudCBmb3IgdGhlIGhlYWRlciBhbmQgcm93IGNlbGxzLiBBc3N1bWVzIHRoYXQgdGhlIHRhYmxlXG4gKiBpcyB1c2luZyB0aGUgbmF0aXZlIHRhYmxlIGltcGxlbWVudGF0aW9uIChgPHRhYmxlPmApLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoZSBuYW1lIG9mIHRoaXMgY29sdW1uIHdpbGwgYmUgdGhlIGhlYWRlciB0ZXh0IGFuZCBkYXRhIHByb3BlcnR5IGFjY2Vzc29yLlxuICogVGhlIGhlYWRlciB0ZXh0IGNhbiBiZSBvdmVycmlkZGVuIHdpdGggdGhlIGBoZWFkZXJUZXh0YCBpbnB1dC4gQ2VsbCB2YWx1ZXMgY2FuIGJlIG92ZXJyaWRkZW4gd2l0aFxuICogdGhlIGBkYXRhQWNjZXNzb3JgIGlucHV0LiBDaGFuZ2UgdGhlIHRleHQganVzdGlmaWNhdGlvbiB0byB0aGUgc3RhcnQgb3IgZW5kIHVzaW5nIHRoZSBganVzdGlmeWBcbiAqIGlucHV0LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtUZXh0Q29sdW1uPFQ+IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAgIHByaXZhdGUgX3RhYmxlO1xuICAgIHByaXZhdGUgX29wdGlvbnM7XG4gICAgLyoqIENvbHVtbiBuYW1lIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcmVmZXJlbmNlIHRoaXMgY29sdW1uLiAqL1xuICAgIGdldCBuYW1lKCk6IHN0cmluZztcbiAgICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpO1xuICAgIF9uYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGV4dCBsYWJlbCB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgY29sdW1uIGhlYWRlci4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBub3RcbiAgICAgKiBzZXQsIHRoZSBoZWFkZXIgdGV4dCB3aWxsIGRlZmF1bHQgdG8gdGhlIGNvbHVtbiBuYW1lIHdpdGggaXRzIGZpcnN0IGxldHRlciBjYXBpdGFsaXplZC5cbiAgICAgKi9cbiAgICBoZWFkZXJUZXh0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQWNjZXNzb3IgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGRhdGEgcmVuZGVyZWQgZm9yIGVhY2ggY2VsbC4gSWYgdGhpc1xuICAgICAqIHByb3BlcnR5IGlzIG5vdCBzZXQsIHRoZSBkYXRhIGNlbGxzIHdpbGwgcmVuZGVyIHRoZSB2YWx1ZSBmb3VuZCBpbiB0aGUgZGF0YSdzIHByb3BlcnR5IG1hdGNoaW5nXG4gICAgICogdGhlIGNvbHVtbidzIG5hbWUuIEZvciBleGFtcGxlLCBpZiB0aGUgY29sdW1uIGlzIG5hbWVkIGBpZGAsIHRoZW4gdGhlIHJlbmRlcmVkIHZhbHVlIHdpbGwgYmVcbiAgICAgKiB2YWx1ZSBkZWZpbmVkIGJ5IHRoZSBkYXRhJ3MgYGlkYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBkYXRhQWNjZXNzb3I6IChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IHN0cmluZztcbiAgICAvKiogQWxpZ25tZW50IG9mIHRoZSBjZWxsIHZhbHVlcy4gKi9cbiAgICBqdXN0aWZ5OiAnc3RhcnQnIHwgJ2VuZCc7XG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBjb2x1bW5EZWY6IENka0NvbHVtbkRlZjtcbiAgICAvKipcbiAgICAgKiBUaGUgY29sdW1uIGNlbGwgaXMgcHJvdmlkZWQgdG8gdGhlIGNvbHVtbiBkdXJpbmcgYG5nT25Jbml0YCB3aXRoIGEgc3RhdGljIHF1ZXJ5LlxuICAgICAqIE5vcm1hbGx5LCB0aGlzIHdpbGwgYmUgcmV0cmlldmVkIGJ5IHRoZSBjb2x1bW4gdXNpbmcgYENvbnRlbnRDaGlsZGAsIGJ1dCB0aGF0IGFzc3VtZXMgdGhlXG4gICAgICogY29sdW1uIGRlZmluaXRpb24gd2FzIHByb3ZpZGVkIGluIHRoZSBzYW1lIHZpZXcgYXMgdGhlIHRhYmxlLCB3aGljaCBpcyBub3QgdGhlIGNhc2Ugd2l0aCB0aGlzXG4gICAgICogY29tcG9uZW50LlxuICAgICAqIEBkb2NzLXByaXZhdGVcbiAgICAgKi9cbiAgICBjZWxsOiBDZGtDZWxsRGVmO1xuICAgIC8qKlxuICAgICAqIFRoZSBjb2x1bW4gaGVhZGVyQ2VsbCBpcyBwcm92aWRlZCB0byB0aGUgY29sdW1uIGR1cmluZyBgbmdPbkluaXRgIHdpdGggYSBzdGF0aWMgcXVlcnkuXG4gICAgICogTm9ybWFsbHksIHRoaXMgd2lsbCBiZSByZXRyaWV2ZWQgYnkgdGhlIGNvbHVtbiB1c2luZyBgQ29udGVudENoaWxkYCwgYnV0IHRoYXQgYXNzdW1lcyB0aGVcbiAgICAgKiBjb2x1bW4gZGVmaW5pdGlvbiB3YXMgcHJvdmlkZWQgaW4gdGhlIHNhbWUgdmlldyBhcyB0aGUgdGFibGUsIHdoaWNoIGlzIG5vdCB0aGUgY2FzZSB3aXRoIHRoaXNcbiAgICAgKiBjb21wb25lbnQuXG4gICAgICogQGRvY3MtcHJpdmF0ZVxuICAgICAqL1xuICAgIGhlYWRlckNlbGw6IENka0hlYWRlckNlbGxEZWY7XG4gICAgY29uc3RydWN0b3IoX3RhYmxlOiBDZGtUYWJsZTxUPiwgX29wdGlvbnM6IFRleHRDb2x1bW5PcHRpb25zPFQ+KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGRlZmF1bHQgaGVhZGVyIHRleHQuIFVzZSB0aGUgb3B0aW9ucycgaGVhZGVyIHRleHQgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gaWYgb25lXG4gICAgICogaGFzIGJlZW4gcHJvdmlkZWQuIE90aGVyd2lzZSBzaW1wbHkgY2FwaXRhbGl6ZSB0aGUgY29sdW1uIG5hbWUuXG4gICAgICovXG4gICAgX2NyZWF0ZURlZmF1bHRIZWFkZXJUZXh0KCk6IHN0cmluZztcbiAgICAvKiogU3luY2hyb25pemVzIHRoZSBjb2x1bW4gZGVmaW5pdGlvbiBuYW1lIHdpdGggdGhlIHRleHQgY29sdW1uIG5hbWUuICovXG4gICAgcHJpdmF0ZSBfc3luY0NvbHVtbkRlZk5hbWU7XG59XG4iXX0=