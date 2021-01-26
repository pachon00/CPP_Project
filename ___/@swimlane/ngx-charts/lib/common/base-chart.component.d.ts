import { ElementRef, NgZone, ChangeDetectorRef, EventEmitter, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { VisibilityObserver } from '../utils/visibility-observer';
import * as ɵngcc0 from '@angular/core';
export declare class BaseChartComponent implements OnChanges, AfterViewInit, OnDestroy {
    protected chartElement: ElementRef;
    protected zone: NgZone;
    protected cd: ChangeDetectorRef;
    results: any;
    view: [number, number];
    scheme: any;
    schemeType: string;
    customColors: any;
    animations: boolean;
    select: EventEmitter<any>;
    width: number;
    height: number;
    resizeSubscription: any;
    visibilityObserver: VisibilityObserver;
    constructor(chartElement: ElementRef, zone: NgZone, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getContainerDims(): any;
    /**
     * Converts all date objects that appear as name
     * into formatted date strings
     */
    formatDates(): void;
    protected unbindEvents(): void;
    private bindWindowResizeEvent;
    /**
     * Clones the data into a new object
     *
     * @memberOf BaseChart
     */
    private cloneData;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseChartComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BaseChartComponent, "base-chart", never, {
    "scheme": "scheme";
    "schemeType": "schemeType";
    "animations": "animations";
    "results": "results";
    "view": "view";
    "customColors": "customColors";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYmFzZS1jaGFydC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpc2liaWxpdHlPYnNlcnZlciB9IGZyb20gJy4uL3V0aWxzL3Zpc2liaWxpdHktb2JzZXJ2ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmFzZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZTtcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmO1xuICAgIHJlc3VsdHM6IGFueTtcbiAgICB2aWV3OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNjaGVtZTogYW55O1xuICAgIHNjaGVtZVR5cGU6IHN0cmluZztcbiAgICBjdXN0b21Db2xvcnM6IGFueTtcbiAgICBhbmltYXRpb25zOiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICByZXNpemVTdWJzY3JpcHRpb246IGFueTtcbiAgICB2aXNpYmlsaXR5T2JzZXJ2ZXI6IFZpc2liaWxpdHlPYnNlcnZlcjtcbiAgICBjb25zdHJ1Y3RvcihjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWYsIHpvbmU6IE5nWm9uZSwgY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGdldENvbnRhaW5lckRpbXMoKTogYW55O1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFsbCBkYXRlIG9iamVjdHMgdGhhdCBhcHBlYXIgYXMgbmFtZVxuICAgICAqIGludG8gZm9ybWF0dGVkIGRhdGUgc3RyaW5nc1xuICAgICAqL1xuICAgIGZvcm1hdERhdGVzKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHVuYmluZEV2ZW50cygpOiB2b2lkO1xuICAgIHByaXZhdGUgYmluZFdpbmRvd1Jlc2l6ZUV2ZW50O1xuICAgIC8qKlxuICAgICAqIENsb25lcyB0aGUgZGF0YSBpbnRvIGEgbmV3IG9iamVjdFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEJhc2VDaGFydFxuICAgICAqL1xuICAgIHByaXZhdGUgY2xvbmVEYXRhO1xufVxuIl19