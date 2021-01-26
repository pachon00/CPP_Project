import { OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ChartComponent implements OnChanges {
    view: any;
    showLegend: boolean;
    legendOptions: any;
    data: any;
    legendData: any;
    legendType: any;
    colors: any;
    activeEntries: any[];
    animations: boolean;
    legendLabelClick: EventEmitter<any>;
    legendLabelActivate: EventEmitter<any>;
    legendLabelDeactivate: EventEmitter<any>;
    chartWidth: any;
    title: any;
    legendWidth: any;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getLegendType(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ChartComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ChartComponent, "ngx-charts-chart", never, {
    "showLegend": "showLegend";
    "animations": "animations";
    "legendType": "legendType";
    "view": "view";
    "legendOptions": "legendOptions";
    "data": "data";
    "legendData": "legendData";
    "colors": "colors";
    "activeEntries": "activeEntries";
}, {
    "legendLabelClick": "legendLabelClick";
    "legendLabelActivate": "legendLabelActivate";
    "legendLabelDeactivate": "legendLabelDeactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoYXJ0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgdmlldzogYW55O1xuICAgIHNob3dMZWdlbmQ6IGJvb2xlYW47XG4gICAgbGVnZW5kT3B0aW9uczogYW55O1xuICAgIGRhdGE6IGFueTtcbiAgICBsZWdlbmREYXRhOiBhbnk7XG4gICAgbGVnZW5kVHlwZTogYW55O1xuICAgIGNvbG9yczogYW55O1xuICAgIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICAgIGFuaW1hdGlvbnM6IGJvb2xlYW47XG4gICAgbGVnZW5kTGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgbGVnZW5kTGFiZWxBY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgbGVnZW5kTGFiZWxEZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBjaGFydFdpZHRoOiBhbnk7XG4gICAgdGl0bGU6IGFueTtcbiAgICBsZWdlbmRXaWR0aDogYW55O1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGdldExlZ2VuZFR5cGUoKTogc3RyaW5nO1xufVxuIl19