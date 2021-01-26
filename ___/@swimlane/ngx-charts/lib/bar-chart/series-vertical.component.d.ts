import { EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { DataItem } from '../models/chart-data.model';
import * as ɵngcc0 from '@angular/core';
export declare enum D0Types {
    positive = "positive",
    negative = "negative"
}
export declare class SeriesVerticalComponent implements OnChanges {
    dims: any;
    type: string;
    series: any;
    xScale: any;
    yScale: any;
    colors: any;
    gradient: boolean;
    activeEntries: any[];
    seriesName: string;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    roundEdges: boolean;
    animations: boolean;
    showDataLabel: boolean;
    dataLabelFormatting: any;
    noBarWhenZero: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    dataLabelHeightChanged: EventEmitter<any>;
    tooltipPlacement: string;
    tooltipType: string;
    bars: any;
    x: any;
    y: any;
    barsForDataLabels: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
        total: number;
        series: string;
    }>;
    ngOnChanges(changes: any): void;
    update(): void;
    updateDataLabels(): void;
    updateTooltipSettings(): void;
    isActive(entry: any): boolean;
    onClick(data: DataItem): void;
    getLabel(dataItem: any): string;
    trackBy(index: any, bar: any): string;
    trackDataLabelBy(index: any, barLabel: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesVerticalComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SeriesVerticalComponent, "g[ngx-charts-series-vertical]", never, {
    "type": "type";
    "tooltipDisabled": "tooltipDisabled";
    "animations": "animations";
    "showDataLabel": "showDataLabel";
    "noBarWhenZero": "noBarWhenZero";
    "dims": "dims";
    "series": "series";
    "xScale": "xScale";
    "yScale": "yScale";
    "colors": "colors";
    "gradient": "gradient";
    "activeEntries": "activeEntries";
    "seriesName": "seriesName";
    "tooltipTemplate": "tooltipTemplate";
    "roundEdges": "roundEdges";
    "dataLabelFormatting": "dataLabelFormatting";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
    "dataLabelHeightChanged": "dataLabelHeightChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXZlcnRpY2FsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzZXJpZXMtdmVydGljYWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2hhcnQtZGF0YS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBlbnVtIEQwVHlwZXMge1xuICAgIHBvc2l0aXZlID0gXCJwb3NpdGl2ZVwiLFxuICAgIG5lZ2F0aXZlID0gXCJuZWdhdGl2ZVwiXG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZXJpZXNWZXJ0aWNhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgZGltczogYW55O1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBzZXJpZXM6IGFueTtcbiAgICB4U2NhbGU6IGFueTtcbiAgICB5U2NhbGU6IGFueTtcbiAgICBjb2xvcnM6IGFueTtcbiAgICBncmFkaWVudDogYm9vbGVhbjtcbiAgICBhY3RpdmVFbnRyaWVzOiBhbnlbXTtcbiAgICBzZXJpZXNOYW1lOiBzdHJpbmc7XG4gICAgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICByb3VuZEVkZ2VzOiBib29sZWFuO1xuICAgIGFuaW1hdGlvbnM6IGJvb2xlYW47XG4gICAgc2hvd0RhdGFMYWJlbDogYm9vbGVhbjtcbiAgICBkYXRhTGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gICAgbm9CYXJXaGVuWmVybzogYm9vbGVhbjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBkYXRhTGFiZWxIZWlnaHRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB0b29sdGlwUGxhY2VtZW50OiBzdHJpbmc7XG4gICAgdG9vbHRpcFR5cGU6IHN0cmluZztcbiAgICBiYXJzOiBhbnk7XG4gICAgeDogYW55O1xuICAgIHk6IGFueTtcbiAgICBiYXJzRm9yRGF0YUxhYmVsczogQXJyYXk8e1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgICAgIHRvdGFsOiBudW1iZXI7XG4gICAgICAgIHNlcmllczogc3RyaW5nO1xuICAgIH0+O1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgdXBkYXRlRGF0YUxhYmVscygpOiB2b2lkO1xuICAgIHVwZGF0ZVRvb2x0aXBTZXR0aW5ncygpOiB2b2lkO1xuICAgIGlzQWN0aXZlKGVudHJ5OiBhbnkpOiBib29sZWFuO1xuICAgIG9uQ2xpY2soZGF0YTogRGF0YUl0ZW0pOiB2b2lkO1xuICAgIGdldExhYmVsKGRhdGFJdGVtOiBhbnkpOiBzdHJpbmc7XG4gICAgdHJhY2tCeShpbmRleDogYW55LCBiYXI6IGFueSk6IHN0cmluZztcbiAgICB0cmFja0RhdGFMYWJlbEJ5KGluZGV4OiBhbnksIGJhckxhYmVsOiBhbnkpOiBzdHJpbmc7XG59XG4iXX0=