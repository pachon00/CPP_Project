import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class AreaSeriesComponent implements OnChanges {
    data: any;
    xScale: any;
    yScale: any;
    baseValue: any;
    colors: any;
    scaleType: any;
    stacked: boolean;
    normalized: boolean;
    gradient: any;
    curve: any;
    activeEntries: any[];
    animations: boolean;
    select: EventEmitter<any>;
    opacity: number;
    path: string;
    startingPath: string;
    hasGradient: boolean;
    gradientStops: any[];
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    updateGradient(): void;
    isActive(entry: any): boolean;
    isInactive(entry: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AreaSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AreaSeriesComponent, "g[ngx-charts-area-series]", never, {
    "baseValue": "baseValue";
    "stacked": "stacked";
    "normalized": "normalized";
    "animations": "animations";
    "data": "data";
    "xScale": "xScale";
    "yScale": "yScale";
    "colors": "colors";
    "scaleType": "scaleType";
    "gradient": "gradient";
    "curve": "curve";
    "activeEntries": "activeEntries";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1zZXJpZXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFyZWEtc2VyaWVzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBcmVhU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBkYXRhOiBhbnk7XG4gICAgeFNjYWxlOiBhbnk7XG4gICAgeVNjYWxlOiBhbnk7XG4gICAgYmFzZVZhbHVlOiBhbnk7XG4gICAgY29sb3JzOiBhbnk7XG4gICAgc2NhbGVUeXBlOiBhbnk7XG4gICAgc3RhY2tlZDogYm9vbGVhbjtcbiAgICBub3JtYWxpemVkOiBib29sZWFuO1xuICAgIGdyYWRpZW50OiBhbnk7XG4gICAgY3VydmU6IGFueTtcbiAgICBhY3RpdmVFbnRyaWVzOiBhbnlbXTtcbiAgICBhbmltYXRpb25zOiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgb3BhY2l0eTogbnVtYmVyO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBzdGFydGluZ1BhdGg6IHN0cmluZztcbiAgICBoYXNHcmFkaWVudDogYm9vbGVhbjtcbiAgICBncmFkaWVudFN0b3BzOiBhbnlbXTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICB1cGRhdGVHcmFkaWVudCgpOiB2b2lkO1xuICAgIGlzQWN0aXZlKGVudHJ5OiBhbnkpOiBib29sZWFuO1xuICAgIGlzSW5hY3RpdmUoZW50cnk6IGFueSk6IGJvb2xlYW47XG59XG4iXX0=