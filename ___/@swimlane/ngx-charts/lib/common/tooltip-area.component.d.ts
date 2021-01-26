import { EventEmitter, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipArea {
    anchorOpacity: number;
    anchorPos: number;
    anchorValues: any[];
    lastAnchorPos: number;
    dims: any;
    xSet: any;
    xScale: any;
    yScale: any;
    results: any;
    colors: any;
    showPercentage: boolean;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    hover: EventEmitter<any>;
    tooltipAnchor: any;
    getValues(xVal: any): any[];
    mouseMove(event: any): void;
    findClosestPointIndex(xPos: any): number;
    showTooltip(): void;
    hideTooltip(): void;
    getToolTipText(tooltipItem: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipArea>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipArea, "g[ngx-charts-tooltip-area]", never, {
    "showPercentage": "showPercentage";
    "tooltipDisabled": "tooltipDisabled";
    "dims": "dims";
    "xSet": "xSet";
    "xScale": "xScale";
    "yScale": "yScale";
    "results": "results";
    "colors": "colors";
    "tooltipTemplate": "tooltipTemplate";
}, {
    "hover": "hover";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1hcmVhLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ0b29sdGlwLWFyZWEuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRvb2x0aXBBcmVhIHtcbiAgICBhbmNob3JPcGFjaXR5OiBudW1iZXI7XG4gICAgYW5jaG9yUG9zOiBudW1iZXI7XG4gICAgYW5jaG9yVmFsdWVzOiBhbnlbXTtcbiAgICBsYXN0QW5jaG9yUG9zOiBudW1iZXI7XG4gICAgZGltczogYW55O1xuICAgIHhTZXQ6IGFueTtcbiAgICB4U2NhbGU6IGFueTtcbiAgICB5U2NhbGU6IGFueTtcbiAgICByZXN1bHRzOiBhbnk7XG4gICAgY29sb3JzOiBhbnk7XG4gICAgc2hvd1BlcmNlbnRhZ2U6IGJvb2xlYW47XG4gICAgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBob3ZlcjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgdG9vbHRpcEFuY2hvcjogYW55O1xuICAgIGdldFZhbHVlcyh4VmFsOiBhbnkpOiBhbnlbXTtcbiAgICBtb3VzZU1vdmUoZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgZmluZENsb3Nlc3RQb2ludEluZGV4KHhQb3M6IGFueSk6IG51bWJlcjtcbiAgICBzaG93VG9vbHRpcCgpOiB2b2lkO1xuICAgIGhpZGVUb29sdGlwKCk6IHZvaWQ7XG4gICAgZ2V0VG9vbFRpcFRleHQodG9vbHRpcEl0ZW06IGFueSk6IHN0cmluZztcbn1cbiJdfQ==