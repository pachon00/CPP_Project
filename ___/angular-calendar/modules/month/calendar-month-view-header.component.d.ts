import { TemplateRef, EventEmitter } from '@angular/core';
import { WeekDay } from 'calendar-utils';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarMonthViewHeaderComponent {
    days: WeekDay[];
    locale: string;
    customTemplate: TemplateRef<any>;
    columnHeaderClicked: EventEmitter<{
        isoDayNumber: number;
        sourceEvent: MouseEvent;
    }>;
    trackByWeekDayHeaderDate: (index: number, day: WeekDay) => string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarMonthViewHeaderComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarMonthViewHeaderComponent, "mwl-calendar-month-view-header", never, {
    "days": "days";
    "locale": "locale";
    "customTemplate": "customTemplate";
}, {
    "columnHeaderClicked": "columnHeaderClicked";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtdmlldy1oZWFkZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLW1vbnRoLXZpZXctaGVhZGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlZWtEYXkgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYWxlbmRhck1vbnRoVmlld0hlYWRlckNvbXBvbmVudCB7XG4gICAgZGF5czogV2Vla0RheVtdO1xuICAgIGxvY2FsZTogc3RyaW5nO1xuICAgIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGNvbHVtbkhlYWRlckNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIGlzb0RheU51bWJlcjogbnVtYmVyO1xuICAgICAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgICB9PjtcbiAgICB0cmFja0J5V2Vla0RheUhlYWRlckRhdGU6IChpbmRleDogbnVtYmVyLCBkYXk6IFdlZWtEYXkpID0+IHN0cmluZztcbn1cbiJdfQ==