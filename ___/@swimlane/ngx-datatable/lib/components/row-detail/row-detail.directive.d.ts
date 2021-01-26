import { EventEmitter, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DatatableRowDetailDirective {
    /**
     * The detail row height is required especially
     * when virtual scroll is enabled.
     */
    rowHeight: number | ((row?: any, index?: number) => number);
    _templateInput: TemplateRef<any>;
    _templateQuery: TemplateRef<any>;
    readonly template: TemplateRef<any>;
    /**
     * Row detail row visbility was toggled.
     */
    toggle: EventEmitter<any>;
    /**
     * Toggle the expansion of the row
     */
    toggleExpandRow(row: any): void;
    /**
     * API method to expand all the rows.
     */
    expandAllRows(): void;
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatatableRowDetailDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DatatableRowDetailDirective, "ngx-datatable-row-detail", never, {
    "rowHeight": "rowHeight";
    "_templateInput": "template";
}, {
    "toggle": "toggle";
}, ["_templateQuery"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRldGFpbC5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsicm93LWRldGFpbC5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRhdGFibGVSb3dEZXRhaWxEaXJlY3RpdmUge1xuICAgIC8qKlxuICAgICAqIFRoZSBkZXRhaWwgcm93IGhlaWdodCBpcyByZXF1aXJlZCBlc3BlY2lhbGx5XG4gICAgICogd2hlbiB2aXJ0dWFsIHNjcm9sbCBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIHJvd0hlaWdodDogbnVtYmVyIHwgKChyb3c/OiBhbnksIGluZGV4PzogbnVtYmVyKSA9PiBudW1iZXIpO1xuICAgIF90ZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIF90ZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFJvdyBkZXRhaWwgcm93IHZpc2JpbGl0eSB3YXMgdG9nZ2xlZC5cbiAgICAgKi9cbiAgICB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgZXhwYW5zaW9uIG9mIHRoZSByb3dcbiAgICAgKi9cbiAgICB0b2dnbGVFeHBhbmRSb3cocm93OiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEFQSSBtZXRob2QgdG8gZXhwYW5kIGFsbCB0aGUgcm93cy5cbiAgICAgKi9cbiAgICBleHBhbmRBbGxSb3dzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQVBJIG1ldGhvZCB0byBjb2xsYXBzZSBhbGwgdGhlIHJvd3MuXG4gICAgICovXG4gICAgY29sbGFwc2VBbGxSb3dzKCk6IHZvaWQ7XG59XG4iXX0=