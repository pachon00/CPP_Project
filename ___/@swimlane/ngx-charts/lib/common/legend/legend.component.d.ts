import { EventEmitter, SimpleChanges, OnChanges, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class LegendComponent implements OnChanges {
    private cd;
    data: any;
    title: any;
    colors: any;
    height: any;
    width: any;
    activeEntries: any;
    horizontal: boolean;
    labelClick: EventEmitter<any>;
    labelActivate: EventEmitter<any>;
    labelDeactivate: EventEmitter<any>;
    legendEntries: any[];
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getLegendEntries(): any[];
    isActive(entry: any): boolean;
    activate(item: any): void;
    deactivate(item: any): void;
    trackBy(index: any, item: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LegendComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LegendComponent, "ngx-charts-legend", never, {
    "horizontal": "horizontal";
    "data": "data";
    "title": "title";
    "colors": "colors";
    "height": "height";
    "width": "width";
    "activeEntries": "activeEntries";
}, {
    "labelClick": "labelClick";
    "labelActivate": "labelActivate";
    "labelDeactivate": "labelDeactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJsZWdlbmQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgY2Q7XG4gICAgZGF0YTogYW55O1xuICAgIHRpdGxlOiBhbnk7XG4gICAgY29sb3JzOiBhbnk7XG4gICAgaGVpZ2h0OiBhbnk7XG4gICAgd2lkdGg6IGFueTtcbiAgICBhY3RpdmVFbnRyaWVzOiBhbnk7XG4gICAgaG9yaXpvbnRhbDogYm9vbGVhbjtcbiAgICBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBsYWJlbEFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBsYWJlbERlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGxlZ2VuZEVudHJpZXM6IGFueVtdO1xuICAgIGNvbnN0cnVjdG9yKGNkOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0TGVnZW5kRW50cmllcygpOiBhbnlbXTtcbiAgICBpc0FjdGl2ZShlbnRyeTogYW55KTogYm9vbGVhbjtcbiAgICBhY3RpdmF0ZShpdGVtOiBhbnkpOiB2b2lkO1xuICAgIGRlYWN0aXZhdGUoaXRlbTogYW55KTogdm9pZDtcbiAgICB0cmFja0J5KGluZGV4OiBhbnksIGl0ZW06IGFueSk6IHN0cmluZztcbn1cbiJdfQ==