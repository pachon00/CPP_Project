import { EventEmitter, ElementRef, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class Timeline implements OnChanges {
    private cd;
    view: any;
    state: any;
    results: any;
    scheme: any;
    customColors: any;
    legend: any;
    miniChart: any;
    autoScale: any;
    scaleType: any;
    height: number;
    select: EventEmitter<any>;
    onDomainChange: EventEmitter<any>;
    element: HTMLElement;
    dims: any;
    xDomain: any[];
    xScale: any;
    brush: any;
    transform: string;
    initialized: boolean;
    filterId: any;
    filter: any;
    constructor(element: ElementRef, cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getXDomain(): any[];
    getXScale(): any;
    addBrush(): void;
    updateBrush(): void;
    getDims(): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Timeline>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Timeline, "g[ngx-charts-timeline]", never, {
    "height": "height";
    "view": "view";
    "state": "state";
    "results": "results";
    "scheme": "scheme";
    "customColors": "customColors";
    "legend": "legend";
    "miniChart": "miniChart";
    "autoScale": "autoScale";
    "scaleType": "scaleType";
}, {
    "select": "select";
    "onDomainChange": "onDomainChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGltZWxpbmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgY2Q7XG4gICAgdmlldzogYW55O1xuICAgIHN0YXRlOiBhbnk7XG4gICAgcmVzdWx0czogYW55O1xuICAgIHNjaGVtZTogYW55O1xuICAgIGN1c3RvbUNvbG9yczogYW55O1xuICAgIGxlZ2VuZDogYW55O1xuICAgIG1pbmlDaGFydDogYW55O1xuICAgIGF1dG9TY2FsZTogYW55O1xuICAgIHNjYWxlVHlwZTogYW55O1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb25Eb21haW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGRpbXM6IGFueTtcbiAgICB4RG9tYWluOiBhbnlbXTtcbiAgICB4U2NhbGU6IGFueTtcbiAgICBicnVzaDogYW55O1xuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuICAgIGZpbHRlcklkOiBhbnk7XG4gICAgZmlsdGVyOiBhbnk7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBnZXRYRG9tYWluKCk6IGFueVtdO1xuICAgIGdldFhTY2FsZSgpOiBhbnk7XG4gICAgYWRkQnJ1c2goKTogdm9pZDtcbiAgICB1cGRhdGVCcnVzaCgpOiB2b2lkO1xuICAgIGdldERpbXMoKTogYW55O1xufVxuIl19