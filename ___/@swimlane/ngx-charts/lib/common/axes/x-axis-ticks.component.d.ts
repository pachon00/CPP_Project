import { EventEmitter, OnChanges, ElementRef, SimpleChanges, AfterViewInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class XAxisTicksComponent implements OnChanges, AfterViewInit {
    scale: any;
    orient: any;
    tickArguments: number[];
    tickValues: any[];
    tickStroke: string;
    trimTicks: boolean;
    maxTickLength: number;
    tickFormatting: any;
    showGridLines: boolean;
    gridLineHeight: any;
    width: any;
    rotateTicks: boolean;
    dimensionsChanged: EventEmitter<any>;
    verticalSpacing: number;
    rotateLabels: boolean;
    innerTickSize: number;
    outerTickSize: number;
    tickPadding: number;
    textAnchor: string;
    maxTicksLength: number;
    maxAllowedLength: number;
    adjustedScale: any;
    textTransform: any;
    ticks: any;
    tickFormat: (o: any) => any;
    height: number;
    ticksElement: ElementRef;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    updateDims(): void;
    update(): void;
    getRotationAngle(ticks: any): number;
    getTicks(): any;
    getMaxTicks(tickWidth: number): number;
    tickTransform(tick: any): string;
    gridLineTransform(): string;
    tickTrim(label: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<XAxisTicksComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<XAxisTicksComponent, "g[ngx-charts-x-axis-ticks]", never, {
    "tickArguments": "tickArguments";
    "tickStroke": "tickStroke";
    "trimTicks": "trimTicks";
    "maxTickLength": "maxTickLength";
    "showGridLines": "showGridLines";
    "rotateTicks": "rotateTicks";
    "scale": "scale";
    "orient": "orient";
    "tickValues": "tickValues";
    "tickFormatting": "tickFormatting";
    "gridLineHeight": "gridLineHeight";
    "width": "width";
}, {
    "dimensionsChanged": "dimensionsChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLXRpY2tzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ4LWF4aXMtdGlja3MuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgWEF4aXNUaWNrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgc2NhbGU6IGFueTtcbiAgICBvcmllbnQ6IGFueTtcbiAgICB0aWNrQXJndW1lbnRzOiBudW1iZXJbXTtcbiAgICB0aWNrVmFsdWVzOiBhbnlbXTtcbiAgICB0aWNrU3Ryb2tlOiBzdHJpbmc7XG4gICAgdHJpbVRpY2tzOiBib29sZWFuO1xuICAgIG1heFRpY2tMZW5ndGg6IG51bWJlcjtcbiAgICB0aWNrRm9ybWF0dGluZzogYW55O1xuICAgIHNob3dHcmlkTGluZXM6IGJvb2xlYW47XG4gICAgZ3JpZExpbmVIZWlnaHQ6IGFueTtcbiAgICB3aWR0aDogYW55O1xuICAgIHJvdGF0ZVRpY2tzOiBib29sZWFuO1xuICAgIGRpbWVuc2lvbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB2ZXJ0aWNhbFNwYWNpbmc6IG51bWJlcjtcbiAgICByb3RhdGVMYWJlbHM6IGJvb2xlYW47XG4gICAgaW5uZXJUaWNrU2l6ZTogbnVtYmVyO1xuICAgIG91dGVyVGlja1NpemU6IG51bWJlcjtcbiAgICB0aWNrUGFkZGluZzogbnVtYmVyO1xuICAgIHRleHRBbmNob3I6IHN0cmluZztcbiAgICBtYXhUaWNrc0xlbmd0aDogbnVtYmVyO1xuICAgIG1heEFsbG93ZWRMZW5ndGg6IG51bWJlcjtcbiAgICBhZGp1c3RlZFNjYWxlOiBhbnk7XG4gICAgdGV4dFRyYW5zZm9ybTogYW55O1xuICAgIHRpY2tzOiBhbnk7XG4gICAgdGlja0Zvcm1hdDogKG86IGFueSkgPT4gYW55O1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHRpY2tzRWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICB1cGRhdGVEaW1zKCk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0Um90YXRpb25BbmdsZSh0aWNrczogYW55KTogbnVtYmVyO1xuICAgIGdldFRpY2tzKCk6IGFueTtcbiAgICBnZXRNYXhUaWNrcyh0aWNrV2lkdGg6IG51bWJlcik6IG51bWJlcjtcbiAgICB0aWNrVHJhbnNmb3JtKHRpY2s6IGFueSk6IHN0cmluZztcbiAgICBncmlkTGluZVRyYW5zZm9ybSgpOiBzdHJpbmc7XG4gICAgdGlja1RyaW0obGFiZWw6IHN0cmluZyk6IHN0cmluZztcbn1cbiJdfQ==