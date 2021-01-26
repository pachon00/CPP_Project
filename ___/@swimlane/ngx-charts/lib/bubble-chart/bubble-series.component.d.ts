import { SimpleChanges, EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BubbleSeriesComponent implements OnChanges {
    data: any;
    xScale: any;
    yScale: any;
    rScale: any;
    xScaleType: any;
    yScaleType: any;
    colors: any;
    visibleValue: any;
    activeEntries: any[];
    xAxisLabel: string;
    yAxisLabel: string;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    areaPath: any;
    circles: any[];
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getCircles(): any[];
    getTooltipText(circle: any): string;
    onClick(data: any): void;
    isActive(entry: any): boolean;
    isVisible(circle: any): boolean;
    activateCircle(circle: any): void;
    deactivateCircle(circle: any): void;
    trackBy(index: any, circle: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BubbleSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BubbleSeriesComponent, "g[ngx-charts-bubble-series]", never, {
    "tooltipDisabled": "tooltipDisabled";
    "data": "data";
    "xScale": "xScale";
    "yScale": "yScale";
    "rScale": "rScale";
    "xScaleType": "xScaleType";
    "yScaleType": "yScaleType";
    "colors": "colors";
    "visibleValue": "visibleValue";
    "activeEntries": "activeEntries";
    "xAxisLabel": "xAxisLabel";
    "yAxisLabel": "yAxisLabel";
    "tooltipTemplate": "tooltipTemplate";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLXNlcmllcy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYnViYmxlLXNlcmllcy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQnViYmxlU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBkYXRhOiBhbnk7XG4gICAgeFNjYWxlOiBhbnk7XG4gICAgeVNjYWxlOiBhbnk7XG4gICAgclNjYWxlOiBhbnk7XG4gICAgeFNjYWxlVHlwZTogYW55O1xuICAgIHlTY2FsZVR5cGU6IGFueTtcbiAgICBjb2xvcnM6IGFueTtcbiAgICB2aXNpYmxlVmFsdWU6IGFueTtcbiAgICBhY3RpdmVFbnRyaWVzOiBhbnlbXTtcbiAgICB4QXhpc0xhYmVsOiBzdHJpbmc7XG4gICAgeUF4aXNMYWJlbDogc3RyaW5nO1xuICAgIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcbiAgICB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYXJlYVBhdGg6IGFueTtcbiAgICBjaXJjbGVzOiBhbnlbXTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBnZXRDaXJjbGVzKCk6IGFueVtdO1xuICAgIGdldFRvb2x0aXBUZXh0KGNpcmNsZTogYW55KTogc3RyaW5nO1xuICAgIG9uQ2xpY2soZGF0YTogYW55KTogdm9pZDtcbiAgICBpc0FjdGl2ZShlbnRyeTogYW55KTogYm9vbGVhbjtcbiAgICBpc1Zpc2libGUoY2lyY2xlOiBhbnkpOiBib29sZWFuO1xuICAgIGFjdGl2YXRlQ2lyY2xlKGNpcmNsZTogYW55KTogdm9pZDtcbiAgICBkZWFjdGl2YXRlQ2lyY2xlKGNpcmNsZTogYW55KTogdm9pZDtcbiAgICB0cmFja0J5KGluZGV4OiBhbnksIGNpcmNsZTogYW55KTogc3RyaW5nO1xufVxuIl19