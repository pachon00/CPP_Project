import { SimpleChanges, EventEmitter, OnChanges, OnInit, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class HeatCellSeriesComponent implements OnChanges, OnInit {
    data: any;
    colors: any;
    xScale: any;
    yScale: any;
    gradient: boolean;
    tooltipDisabled: boolean;
    tooltipText: any;
    tooltipTemplate: TemplateRef<any>;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    cells: any[];
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getCells(): any[];
    getTooltipText({ label, data, series }: {
        label: any;
        data: any;
        series: any;
    }): string;
    trackBy(index: any, item: any): string;
    onClick(data: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HeatCellSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<HeatCellSeriesComponent, "g[ngx-charts-heat-map-cell-series]", never, {
    "tooltipDisabled": "tooltipDisabled";
    "animations": "animations";
    "tooltipText": "tooltipText";
    "data": "data";
    "colors": "colors";
    "xScale": "xScale";
    "yScale": "yScale";
    "gradient": "gradient";
    "tooltipTemplate": "tooltipTemplate";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdC1tYXAtY2VsbC1zZXJpZXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImhlYXQtbWFwLWNlbGwtc2VyaWVzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIZWF0Q2VsbFNlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgICBkYXRhOiBhbnk7XG4gICAgY29sb3JzOiBhbnk7XG4gICAgeFNjYWxlOiBhbnk7XG4gICAgeVNjYWxlOiBhbnk7XG4gICAgZ3JhZGllbnQ6IGJvb2xlYW47XG4gICAgdG9vbHRpcERpc2FibGVkOiBib29sZWFuO1xuICAgIHRvb2x0aXBUZXh0OiBhbnk7XG4gICAgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGFuaW1hdGlvbnM6IGJvb2xlYW47XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgY2VsbHM6IGFueVtdO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0Q2VsbHMoKTogYW55W107XG4gICAgZ2V0VG9vbHRpcFRleHQoeyBsYWJlbCwgZGF0YSwgc2VyaWVzIH06IHtcbiAgICAgICAgbGFiZWw6IGFueTtcbiAgICAgICAgZGF0YTogYW55O1xuICAgICAgICBzZXJpZXM6IGFueTtcbiAgICB9KTogc3RyaW5nO1xuICAgIHRyYWNrQnkoaW5kZXg6IGFueSwgaXRlbTogYW55KTogc3RyaW5nO1xuICAgIG9uQ2xpY2soZGF0YTogYW55KTogdm9pZDtcbn1cbiJdfQ==