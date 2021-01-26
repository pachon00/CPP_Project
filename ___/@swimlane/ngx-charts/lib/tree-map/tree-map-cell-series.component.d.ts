import { OnChanges, SimpleChanges, EventEmitter, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TreeMapCellSeriesComponent implements OnChanges {
    data: any;
    dims: any;
    colors: any;
    valueFormatting: any;
    labelFormatting: any;
    gradient: boolean;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    animations: boolean;
    select: EventEmitter<any>;
    cells: any[];
    ngOnChanges(changes: SimpleChanges): void;
    getCells(): any[];
    getTooltipText({ label, value }: {
        label: any;
        value: any;
    }): string;
    onClick(data: any): void;
    trackBy(index: any, item: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TreeMapCellSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TreeMapCellSeriesComponent, "g[ngx-charts-tree-map-cell-series]", never, {
    "gradient": "gradient";
    "tooltipDisabled": "tooltipDisabled";
    "animations": "animations";
    "data": "data";
    "dims": "dims";
    "colors": "colors";
    "valueFormatting": "valueFormatting";
    "labelFormatting": "labelFormatting";
    "tooltipTemplate": "tooltipTemplate";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAtY2VsbC1zZXJpZXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRyZWUtbWFwLWNlbGwtc2VyaWVzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUcmVlTWFwQ2VsbFNlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgZGF0YTogYW55O1xuICAgIGRpbXM6IGFueTtcbiAgICBjb2xvcnM6IGFueTtcbiAgICB2YWx1ZUZvcm1hdHRpbmc6IGFueTtcbiAgICBsYWJlbEZvcm1hdHRpbmc6IGFueTtcbiAgICBncmFkaWVudDogYm9vbGVhbjtcbiAgICB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGFuaW1hdGlvbnM6IGJvb2xlYW47XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjZWxsczogYW55W107XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgZ2V0Q2VsbHMoKTogYW55W107XG4gICAgZ2V0VG9vbHRpcFRleHQoeyBsYWJlbCwgdmFsdWUgfToge1xuICAgICAgICBsYWJlbDogYW55O1xuICAgICAgICB2YWx1ZTogYW55O1xuICAgIH0pOiBzdHJpbmc7XG4gICAgb25DbGljayhkYXRhOiBhbnkpOiB2b2lkO1xuICAgIHRyYWNrQnkoaW5kZXg6IGFueSwgaXRlbTogYW55KTogc3RyaW5nO1xufVxuIl19