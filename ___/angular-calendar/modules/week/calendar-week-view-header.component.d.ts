import { EventEmitter, TemplateRef } from '@angular/core';
import { CalendarEvent, WeekDay } from 'calendar-utils';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarWeekViewHeaderComponent {
    days: WeekDay[];
    locale: string;
    customTemplate: TemplateRef<any>;
    dayHeaderClicked: EventEmitter<{
        day: WeekDay;
        sourceEvent: MouseEvent;
    }>;
    eventDropped: EventEmitter<{
        event: CalendarEvent<any>;
        newStart: Date;
    }>;
    dragEnter: EventEmitter<{
        date: Date;
    }>;
    trackByWeekDayHeaderDate: (index: number, day: WeekDay) => string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarWeekViewHeaderComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarWeekViewHeaderComponent, "mwl-calendar-week-view-header", never, {
    "days": "days";
    "locale": "locale";
    "customTemplate": "customTemplate";
}, {
    "dayHeaderClicked": "dayHeaderClicked";
    "eventDropped": "eventDropped";
    "dragEnter": "dragEnter";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCwgV2Vla0RheSB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyV2Vla1ZpZXdIZWFkZXJDb21wb25lbnQge1xuICAgIGRheXM6IFdlZWtEYXlbXTtcbiAgICBsb2NhbGU6IHN0cmluZztcbiAgICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBkYXlIZWFkZXJDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBkYXk6IFdlZWtEYXk7XG4gICAgICAgIHNvdXJjZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAgIH0+O1xuICAgIGV2ZW50RHJvcHBlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ8YW55PjtcbiAgICAgICAgbmV3U3RhcnQ6IERhdGU7XG4gICAgfT47XG4gICAgZHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBkYXRlOiBEYXRlO1xuICAgIH0+O1xuICAgIHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZTogKGluZGV4OiBudW1iZXIsIGRheTogV2Vla0RheSkgPT4gc3RyaW5nO1xufVxuIl19