import { EventEmitter, TemplateRef } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { DataItem } from '../models/chart-data.model';
import * as ɵngcc0 from '@angular/core';
export declare class AdvancedPieChartComponent extends BaseChartComponent {
    gradient: boolean;
    activeEntries: any[];
    tooltipDisabled: boolean;
    tooltipText: any;
    label: string;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    data: any;
    dims: ViewDimensions;
    domain: any[];
    outerRadius: number;
    innerRadius: number;
    transform: string;
    colors: ColorHelper;
    legendWidth: number;
    margin: number[];
    valueFormatting: (value: number) => any;
    nameFormatting: (value: string) => any;
    percentageFormatting: (value: number) => any;
    update(): void;
    getDomain(): any[];
    onClick(data: DataItem): void;
    setColors(): void;
    onActivate(item: any, fromLegend?: boolean): void;
    onDeactivate(item: any, fromLegend?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AdvancedPieChartComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AdvancedPieChartComponent, "ngx-charts-advanced-pie-chart", never, {
    "activeEntries": "activeEntries";
    "tooltipDisabled": "tooltipDisabled";
    "label": "label";
    "gradient": "gradient";
    "tooltipText": "tooltipText";
    "valueFormatting": "valueFormatting";
    "nameFormatting": "nameFormatting";
    "percentageFormatting": "percentageFormatting";
}, {
    "activate": "activate";
    "deactivate": "deactivate";
}, ["tooltipTemplate"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcGllLWNoYXJ0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZHZhbmNlZC1waWUtY2hhcnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFkdmFuY2VkUGllQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICAgIGdyYWRpZW50OiBib29sZWFuO1xuICAgIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICAgIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcbiAgICB0b29sdGlwVGV4dDogYW55O1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBkYXRhOiBhbnk7XG4gICAgZGltczogVmlld0RpbWVuc2lvbnM7XG4gICAgZG9tYWluOiBhbnlbXTtcbiAgICBvdXRlclJhZGl1czogbnVtYmVyO1xuICAgIGlubmVyUmFkaXVzOiBudW1iZXI7XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgICBsZWdlbmRXaWR0aDogbnVtYmVyO1xuICAgIG1hcmdpbjogbnVtYmVyW107XG4gICAgdmFsdWVGb3JtYXR0aW5nOiAodmFsdWU6IG51bWJlcikgPT4gYW55O1xuICAgIG5hbWVGb3JtYXR0aW5nOiAodmFsdWU6IHN0cmluZykgPT4gYW55O1xuICAgIHBlcmNlbnRhZ2VGb3JtYXR0aW5nOiAodmFsdWU6IG51bWJlcikgPT4gYW55O1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGdldERvbWFpbigpOiBhbnlbXTtcbiAgICBvbkNsaWNrKGRhdGE6IERhdGFJdGVtKTogdm9pZDtcbiAgICBzZXRDb2xvcnMoKTogdm9pZDtcbiAgICBvbkFjdGl2YXRlKGl0ZW06IGFueSwgZnJvbUxlZ2VuZD86IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uRGVhY3RpdmF0ZShpdGVtOiBhbnksIGZyb21MZWdlbmQ/OiBib29sZWFuKTogdm9pZDtcbn1cbiJdfQ==