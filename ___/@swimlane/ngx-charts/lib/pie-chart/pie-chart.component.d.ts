import { EventEmitter, TemplateRef } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { DataItem } from '../models/chart-data.model';
import * as ɵngcc0 from '@angular/core';
export declare class PieChartComponent extends BaseChartComponent {
    labels: boolean;
    legend: boolean;
    legendTitle: string;
    legendPosition: string;
    explodeSlices: boolean;
    doughnut: boolean;
    arcWidth: number;
    gradient: boolean;
    activeEntries: any[];
    tooltipDisabled: boolean;
    labelFormatting: any;
    trimLabels: boolean;
    maxLabelLength: number;
    tooltipText: any;
    dblclick: EventEmitter<any>;
    margins: number[];
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    translation: string;
    outerRadius: number;
    innerRadius: number;
    data: any;
    colors: ColorHelper;
    domain: any;
    dims: any;
    legendOptions: any;
    update(): void;
    getDomain(): any[];
    onClick(data: DataItem): void;
    setColors(): void;
    getLegendOptions(): {
        scaleType: string;
        domain: any;
        colors: ColorHelper;
        title: string;
        position: string;
    };
    onActivate(item: any, fromLegend?: boolean): void;
    onDeactivate(item: any, fromLegend?: boolean): void;
    private hasNoOptionalMarginsSet;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PieChartComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PieChartComponent, "ngx-charts-pie-chart", never, {
    "labels": "labels";
    "legend": "legend";
    "legendTitle": "legendTitle";
    "legendPosition": "legendPosition";
    "explodeSlices": "explodeSlices";
    "doughnut": "doughnut";
    "arcWidth": "arcWidth";
    "activeEntries": "activeEntries";
    "tooltipDisabled": "tooltipDisabled";
    "trimLabels": "trimLabels";
    "maxLabelLength": "maxLabelLength";
    "margins": "margins";
    "gradient": "gradient";
    "labelFormatting": "labelFormatting";
    "tooltipText": "tooltipText";
}, {
    "dblclick": "dblclick";
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, ["tooltipTemplate"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwaWUtY2hhcnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2hhcnQtZGF0YS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQaWVDaGFydENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gICAgbGFiZWxzOiBib29sZWFuO1xuICAgIGxlZ2VuZDogYm9vbGVhbjtcbiAgICBsZWdlbmRUaXRsZTogc3RyaW5nO1xuICAgIGxlZ2VuZFBvc2l0aW9uOiBzdHJpbmc7XG4gICAgZXhwbG9kZVNsaWNlczogYm9vbGVhbjtcbiAgICBkb3VnaG51dDogYm9vbGVhbjtcbiAgICBhcmNXaWR0aDogbnVtYmVyO1xuICAgIGdyYWRpZW50OiBib29sZWFuO1xuICAgIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICAgIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcbiAgICBsYWJlbEZvcm1hdHRpbmc6IGFueTtcbiAgICB0cmltTGFiZWxzOiBib29sZWFuO1xuICAgIG1heExhYmVsTGVuZ3RoOiBudW1iZXI7XG4gICAgdG9vbHRpcFRleHQ6IGFueTtcbiAgICBkYmxjbGljazogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgbWFyZ2luczogbnVtYmVyW107XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHRyYW5zbGF0aW9uOiBzdHJpbmc7XG4gICAgb3V0ZXJSYWRpdXM6IG51bWJlcjtcbiAgICBpbm5lclJhZGl1czogbnVtYmVyO1xuICAgIGRhdGE6IGFueTtcbiAgICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICAgIGRvbWFpbjogYW55O1xuICAgIGRpbXM6IGFueTtcbiAgICBsZWdlbmRPcHRpb25zOiBhbnk7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0RG9tYWluKCk6IGFueVtdO1xuICAgIG9uQ2xpY2soZGF0YTogRGF0YUl0ZW0pOiB2b2lkO1xuICAgIHNldENvbG9ycygpOiB2b2lkO1xuICAgIGdldExlZ2VuZE9wdGlvbnMoKToge1xuICAgICAgICBzY2FsZVR5cGU6IHN0cmluZztcbiAgICAgICAgZG9tYWluOiBhbnk7XG4gICAgICAgIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgfTtcbiAgICBvbkFjdGl2YXRlKGl0ZW06IGFueSwgZnJvbUxlZ2VuZD86IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uRGVhY3RpdmF0ZShpdGVtOiBhbnksIGZyb21MZWdlbmQ/OiBib29sZWFuKTogdm9pZDtcbiAgICBwcml2YXRlIGhhc05vT3B0aW9uYWxNYXJnaW5zU2V0O1xufVxuIl19