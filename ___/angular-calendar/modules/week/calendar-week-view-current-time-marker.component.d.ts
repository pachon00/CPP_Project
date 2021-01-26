import { OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DateAdapter } from '../../date-adapters/date-adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarWeekViewCurrentTimeMarkerComponent implements OnChanges {
    private dateAdapter;
    columnDate: Date;
    dayStartHour: number;
    dayStartMinute: number;
    dayEndHour: number;
    dayEndMinute: number;
    hourSegments: number;
    hourSegmentHeight: number;
    customTemplate: TemplateRef<any>;
    private columnDate$;
    marker$: Observable<{
        isVisible: boolean;
        top: number;
    }>;
    constructor(dateAdapter: DateAdapter);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarWeekViewCurrentTimeMarkerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarWeekViewCurrentTimeMarkerComponent, "mwl-calendar-week-view-current-time-marker", never, {
    "columnDate": "columnDate";
    "dayStartHour": "dayStartHour";
    "dayStartMinute": "dayStartMinute";
    "dayEndHour": "dayEndHour";
    "dayEndMinute": "dayEndMinute";
    "hourSegments": "hourSegments";
    "hourSegmentHeight": "hourSegmentHeight";
    "customTemplate": "customTemplate";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWN1cnJlbnQtdGltZS1tYXJrZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLXdlZWstdmlldy1jdXJyZW50LXRpbWUtbWFya2VyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyV2Vla1ZpZXdDdXJyZW50VGltZU1hcmtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBkYXRlQWRhcHRlcjtcbiAgICBjb2x1bW5EYXRlOiBEYXRlO1xuICAgIGRheVN0YXJ0SG91cjogbnVtYmVyO1xuICAgIGRheVN0YXJ0TWludXRlOiBudW1iZXI7XG4gICAgZGF5RW5kSG91cjogbnVtYmVyO1xuICAgIGRheUVuZE1pbnV0ZTogbnVtYmVyO1xuICAgIGhvdXJTZWdtZW50czogbnVtYmVyO1xuICAgIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXI7XG4gICAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgcHJpdmF0ZSBjb2x1bW5EYXRlJDtcbiAgICBtYXJrZXIkOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgaXNWaXNpYmxlOiBib29sZWFuO1xuICAgICAgICB0b3A6IG51bWJlcjtcbiAgICB9PjtcbiAgICBjb25zdHJ1Y3RvcihkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xufVxuIl19