import { EventEmitter, TemplateRef } from '@angular/core';
import { WeekViewAllDayEvent, WeekViewTimeEvent, WeekViewHourColumn } from 'calendar-utils';
import { PlacementArray } from 'positioning';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarWeekViewEventComponent {
    locale: string;
    weekEvent: WeekViewAllDayEvent | WeekViewTimeEvent;
    tooltipPlacement: PlacementArray;
    tooltipAppendToBody: boolean;
    tooltipDisabled: boolean;
    tooltipDelay: number | null;
    customTemplate: TemplateRef<any>;
    eventTitleTemplate: TemplateRef<any>;
    eventActionsTemplate: TemplateRef<any>;
    tooltipTemplate: TemplateRef<any>;
    column: WeekViewHourColumn;
    daysInWeek: number;
    eventClicked: EventEmitter<{
        sourceEvent: MouseEvent | KeyboardEvent;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarWeekViewEventComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarWeekViewEventComponent, "mwl-calendar-week-view-event", never, {
    "locale": "locale";
    "weekEvent": "weekEvent";
    "tooltipPlacement": "tooltipPlacement";
    "tooltipAppendToBody": "tooltipAppendToBody";
    "tooltipDisabled": "tooltipDisabled";
    "tooltipDelay": "tooltipDelay";
    "customTemplate": "customTemplate";
    "eventTitleTemplate": "eventTitleTemplate";
    "eventActionsTemplate": "eventActionsTemplate";
    "tooltipTemplate": "tooltipTemplate";
    "column": "column";
    "daysInWeek": "daysInWeek";
}, {
    "eventClicked": "eventClicked";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWV2ZW50LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci13ZWVrLXZpZXctZXZlbnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla1ZpZXdBbGxEYXlFdmVudCwgV2Vla1ZpZXdUaW1lRXZlbnQsIFdlZWtWaWV3SG91ckNvbHVtbiB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJXZWVrVmlld0V2ZW50Q29tcG9uZW50IHtcbiAgICBsb2NhbGU6IHN0cmluZztcbiAgICB3ZWVrRXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQgfCBXZWVrVmlld1RpbWVFdmVudDtcbiAgICB0b29sdGlwUGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheTtcbiAgICB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICAgIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcbiAgICB0b29sdGlwRGVsYXk6IG51bWJlciB8IG51bGw7XG4gICAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGV2ZW50QWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBjb2x1bW46IFdlZWtWaWV3SG91ckNvbHVtbjtcbiAgICBkYXlzSW5XZWVrOiBudW1iZXI7XG4gICAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gICAgfT47XG59XG4iXX0=