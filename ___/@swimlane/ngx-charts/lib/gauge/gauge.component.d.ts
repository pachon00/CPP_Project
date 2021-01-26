import { ElementRef, AfterViewInit, EventEmitter, TemplateRef } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class GaugeComponent extends BaseChartComponent implements AfterViewInit {
    legend: boolean;
    legendTitle: string;
    legendPosition: string;
    min: number;
    max: number;
    textValue: string;
    units: string;
    bigSegments: number;
    smallSegments: number;
    results: any[];
    showAxis: boolean;
    startAngle: number;
    angleSpan: number;
    activeEntries: any[];
    axisTickFormatting: any;
    tooltipDisabled: boolean;
    valueFormatting: (value: any) => string;
    showText: boolean;
    margin: any[];
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    textEl: ElementRef;
    dims: ViewDimensions;
    domain: any[];
    valueDomain: any;
    valueScale: any;
    colors: ColorHelper;
    transform: string;
    outerRadius: number;
    textRadius: number;
    resizeScale: number;
    rotation: string;
    textTransform: string;
    cornerRadius: number;
    arcs: any[];
    displayValue: string;
    legendOptions: any;
    ngAfterViewInit(): void;
    update(): void;
    getArcs(): any[];
    getDomain(): any[];
    getValueDomain(): any[];
    getValueScale(): any;
    getDisplayValue(): string;
    scaleText(repeat?: boolean): void;
    onClick(data: any): void;
    getLegendOptions(): any;
    setColors(): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
    isActive(entry: any): boolean;
    trackBy(index: any, item: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GaugeComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GaugeComponent, "ngx-charts-gauge", never, {
    "legend": "legend";
    "legendTitle": "legendTitle";
    "legendPosition": "legendPosition";
    "min": "min";
    "max": "max";
    "bigSegments": "bigSegments";
    "smallSegments": "smallSegments";
    "showAxis": "showAxis";
    "startAngle": "startAngle";
    "angleSpan": "angleSpan";
    "activeEntries": "activeEntries";
    "tooltipDisabled": "tooltipDisabled";
    "showText": "showText";
    "margin": "margin";
    "textValue": "textValue";
    "units": "units";
    "results": "results";
    "axisTickFormatting": "axisTickFormatting";
    "valueFormatting": "valueFormatting";
}, {
    "activate": "activate";
    "deactivate": "deactivate";
}, ["tooltipTemplate"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdhdWdlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdhdWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgbGVnZW5kOiBib29sZWFuO1xuICAgIGxlZ2VuZFRpdGxlOiBzdHJpbmc7XG4gICAgbGVnZW5kUG9zaXRpb246IHN0cmluZztcbiAgICBtaW46IG51bWJlcjtcbiAgICBtYXg6IG51bWJlcjtcbiAgICB0ZXh0VmFsdWU6IHN0cmluZztcbiAgICB1bml0czogc3RyaW5nO1xuICAgIGJpZ1NlZ21lbnRzOiBudW1iZXI7XG4gICAgc21hbGxTZWdtZW50czogbnVtYmVyO1xuICAgIHJlc3VsdHM6IGFueVtdO1xuICAgIHNob3dBeGlzOiBib29sZWFuO1xuICAgIHN0YXJ0QW5nbGU6IG51bWJlcjtcbiAgICBhbmdsZVNwYW46IG51bWJlcjtcbiAgICBhY3RpdmVFbnRyaWVzOiBhbnlbXTtcbiAgICBheGlzVGlja0Zvcm1hdHRpbmc6IGFueTtcbiAgICB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgdmFsdWVGb3JtYXR0aW5nOiAodmFsdWU6IGFueSkgPT4gc3RyaW5nO1xuICAgIHNob3dUZXh0OiBib29sZWFuO1xuICAgIG1hcmdpbjogYW55W107XG4gICAgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICB0ZXh0RWw6IEVsZW1lbnRSZWY7XG4gICAgZGltczogVmlld0RpbWVuc2lvbnM7XG4gICAgZG9tYWluOiBhbnlbXTtcbiAgICB2YWx1ZURvbWFpbjogYW55O1xuICAgIHZhbHVlU2NhbGU6IGFueTtcbiAgICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xuICAgIG91dGVyUmFkaXVzOiBudW1iZXI7XG4gICAgdGV4dFJhZGl1czogbnVtYmVyO1xuICAgIHJlc2l6ZVNjYWxlOiBudW1iZXI7XG4gICAgcm90YXRpb246IHN0cmluZztcbiAgICB0ZXh0VHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgY29ybmVyUmFkaXVzOiBudW1iZXI7XG4gICAgYXJjczogYW55W107XG4gICAgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG4gICAgbGVnZW5kT3B0aW9uczogYW55O1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGdldEFyY3MoKTogYW55W107XG4gICAgZ2V0RG9tYWluKCk6IGFueVtdO1xuICAgIGdldFZhbHVlRG9tYWluKCk6IGFueVtdO1xuICAgIGdldFZhbHVlU2NhbGUoKTogYW55O1xuICAgIGdldERpc3BsYXlWYWx1ZSgpOiBzdHJpbmc7XG4gICAgc2NhbGVUZXh0KHJlcGVhdD86IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uQ2xpY2soZGF0YTogYW55KTogdm9pZDtcbiAgICBnZXRMZWdlbmRPcHRpb25zKCk6IGFueTtcbiAgICBzZXRDb2xvcnMoKTogdm9pZDtcbiAgICBvbkFjdGl2YXRlKGl0ZW06IGFueSk6IHZvaWQ7XG4gICAgb25EZWFjdGl2YXRlKGl0ZW06IGFueSk6IHZvaWQ7XG4gICAgaXNBY3RpdmUoZW50cnk6IGFueSk6IGJvb2xlYW47XG4gICAgdHJhY2tCeShpbmRleDogYW55LCBpdGVtOiBhbnkpOiBzdHJpbmc7XG59XG4iXX0=