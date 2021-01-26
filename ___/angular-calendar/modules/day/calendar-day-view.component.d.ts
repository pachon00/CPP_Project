import { EventEmitter, TemplateRef } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { Subject } from 'rxjs';
import { CalendarEventTimesChangedEvent } from '../common/calendar-event-times-changed-event.interface';
import { PlacementArray } from 'positioning';
import { CalendarWeekViewBeforeRenderEvent } from '../week/calendar-week.module';
import * as ɵngcc0 from '@angular/core';
export declare type CalendarDayViewBeforeRenderEvent = CalendarWeekViewBeforeRenderEvent;
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
export declare class CalendarDayViewComponent {
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * An array of events to display on view
     * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
     */
    events: CalendarEvent[];
    /**
     * The number of segments in an hour. Must be <= 6
     */
    hourSegments: number;
    /**
     * The height in pixels of each hour segment
     */
    hourSegmentHeight: number;
    /**
     * The day start hours in 24 hour time. Must be 0-23
     */
    dayStartHour: number;
    /**
     * The day start minutes. Must be 0-59
     */
    dayStartMinute: number;
    /**
     * The day end hours in 24 hour time. Must be 0-23
     */
    dayEndHour: number;
    /**
     * The day end minutes. Must be 0-59
     */
    dayEndMinute: number;
    /**
     * An observable that when emitted on will re-render the current view
     */
    refresh: Subject<any>;
    /**
     * The locale used to format dates
     */
    locale: string;
    /**
     * The grid size to snap resizing and dragging of events to
     */
    eventSnapSize: number;
    /**
     * The placement of the event tooltip
     */
    tooltipPlacement: PlacementArray;
    /**
     * A custom template to use for the event tooltips
     */
    tooltipTemplate: TemplateRef<any>;
    /**
     * Whether to append tooltips to the body or next to the trigger element
     */
    tooltipAppendToBody: boolean;
    /**
     * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
     * will be displayed immediately.
     */
    tooltipDelay: number | null;
    /**
     * A custom template to use to replace the hour segment
     */
    hourSegmentTemplate: TemplateRef<any>;
    /**
     * A custom template to use for day view events
     */
    eventTemplate: TemplateRef<any>;
    /**
     * A custom template to use for event titles
     */
    eventTitleTemplate: TemplateRef<any>;
    /**
     * A custom template to use for event actions
     */
    eventActionsTemplate: TemplateRef<any>;
    /**
     * Whether to snap events to a grid when dragging
     */
    snapDraggedEvents: boolean;
    /**
     * A custom template to use for the all day events label text
     */
    allDayEventsLabelTemplate: TemplateRef<any>;
    /**
     * A custom template to use for the current time marker
     */
    currentTimeMarkerTemplate: TemplateRef<any>;
    /**
     * Called when an event title is clicked
     */
    eventClicked: EventEmitter<{
        event: CalendarEvent<any>;
    }>;
    /**
     * Called when an hour segment is clicked
     */
    hourSegmentClicked: EventEmitter<{
        date: Date;
    }>;
    /**
     * Called when an event is resized or dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarEventTimesChangedEvent<any>>;
    /**
     * An output that will be called before the view is rendered for the current day.
     * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
     */
    beforeViewRender: EventEmitter<CalendarWeekViewBeforeRenderEvent>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarDayViewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarDayViewComponent, "mwl-calendar-day-view", never, {
    "events": "events";
    "hourSegments": "hourSegments";
    "hourSegmentHeight": "hourSegmentHeight";
    "dayStartHour": "dayStartHour";
    "dayStartMinute": "dayStartMinute";
    "dayEndHour": "dayEndHour";
    "dayEndMinute": "dayEndMinute";
    "tooltipPlacement": "tooltipPlacement";
    "tooltipAppendToBody": "tooltipAppendToBody";
    "tooltipDelay": "tooltipDelay";
    "snapDraggedEvents": "snapDraggedEvents";
    "viewDate": "viewDate";
    "refresh": "refresh";
    "locale": "locale";
    "eventSnapSize": "eventSnapSize";
    "tooltipTemplate": "tooltipTemplate";
    "hourSegmentTemplate": "hourSegmentTemplate";
    "eventTemplate": "eventTemplate";
    "eventTitleTemplate": "eventTitleTemplate";
    "eventActionsTemplate": "eventActionsTemplate";
    "allDayEventsLabelTemplate": "allDayEventsLabelTemplate";
    "currentTimeMarkerTemplate": "currentTimeMarkerTemplate";
}, {
    "eventClicked": "eventClicked";
    "hourSegmentClicked": "hourSegmentClicked";
    "eventTimesChanged": "eventTimesChanged";
    "beforeViewRender": "beforeViewRender";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5LXZpZXcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLWRheS12aWV3LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJIQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXkgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQgfSBmcm9tICcuLi93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlJztcbmV4cG9ydCBkZWNsYXJlIHR5cGUgQ2FsZW5kYXJEYXlWaWV3QmVmb3JlUmVuZGVyRXZlbnQgPSBDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQ7XG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiBkYXkuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPG13bC1jYWxlbmRhci1kYXktdmlld1xuICogIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gKiAgW2V2ZW50c109XCJldmVudHNcIj5cbiAqIDwvbXdsLWNhbGVuZGFyLWRheS12aWV3PlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyRGF5Vmlld0NvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAgICovXG4gICAgdmlld0RhdGU6IERhdGU7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgICAqL1xuICAgIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2Ygc2VnbWVudHMgaW4gYW4gaG91ci4gTXVzdCBiZSA8PSA2XG4gICAgICovXG4gICAgaG91clNlZ21lbnRzOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBpbiBwaXhlbHMgb2YgZWFjaCBob3VyIHNlZ21lbnRcbiAgICAgKi9cbiAgICBob3VyU2VnbWVudEhlaWdodDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXkgc3RhcnQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICAgKi9cbiAgICBkYXlTdGFydEhvdXI6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF5IHN0YXJ0IG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgICAqL1xuICAgIGRheVN0YXJ0TWludXRlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGRheSBlbmQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICAgKi9cbiAgICBkYXlFbmRIb3VyOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGRheSBlbmQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAgICovXG4gICAgZGF5RW5kTWludXRlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcmVmcmVzaDogU3ViamVjdDxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICAgKi9cbiAgICBsb2NhbGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZ3JpZCBzaXplIHRvIHNuYXAgcmVzaXppbmcgYW5kIGRyYWdnaW5nIG9mIGV2ZW50cyB0b1xuICAgICAqL1xuICAgIGV2ZW50U25hcFNpemU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAgICovXG4gICAgdG9vbHRpcFBsYWNlbWVudDogUGxhY2VtZW50QXJyYXk7XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZXZlbnQgdG9vbHRpcHNcbiAgICAgKi9cbiAgICB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBhcHBlbmQgdG9vbHRpcHMgdG8gdGhlIGJvZHkgb3IgbmV4dCB0byB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAgICovXG4gICAgdG9vbHRpcEFwcGVuZFRvQm9keTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSB0aGUgdG9vbHRpcCBzaG91bGQgYmUgZGlzcGxheWVkLiBJZiBub3QgcHJvdmlkZWQgdGhlIHRvb2x0aXBcbiAgICAgKiB3aWxsIGJlIGRpc3BsYXllZCBpbW1lZGlhdGVseS5cbiAgICAgKi9cbiAgICB0b29sdGlwRGVsYXk6IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhvdXIgc2VnbWVudFxuICAgICAqL1xuICAgIGhvdXJTZWdtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBkYXkgdmlldyBldmVudHNcbiAgICAgKi9cbiAgICBldmVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgdGl0bGVzXG4gICAgICovXG4gICAgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgYWN0aW9uc1xuICAgICAqL1xuICAgIGV2ZW50QWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gc25hcCBldmVudHMgdG8gYSBncmlkIHdoZW4gZHJhZ2dpbmdcbiAgICAgKi9cbiAgICBzbmFwRHJhZ2dlZEV2ZW50czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBhbGwgZGF5IGV2ZW50cyBsYWJlbCB0ZXh0XG4gICAgICovXG4gICAgYWxsRGF5RXZlbnRzTGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBjdXJyZW50IHRpbWUgbWFya2VyXG4gICAgICovXG4gICAgY3VycmVudFRpbWVNYXJrZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAgICovXG4gICAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBldmVudDogQ2FsZW5kYXJFdmVudDxhbnk+O1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIGhvdXIgc2VnbWVudCBpcyBjbGlja2VkXG4gICAgICovXG4gICAgaG91clNlZ21lbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBkYXRlOiBEYXRlO1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgICAqL1xuICAgIGV2ZW50VGltZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PGFueT4+O1xuICAgIC8qKlxuICAgICAqIEFuIG91dHB1dCB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyByZW5kZXJlZCBmb3IgdGhlIGN1cnJlbnQgZGF5LlxuICAgICAqIElmIHlvdSBhZGQgdGhlIGBjc3NDbGFzc2AgcHJvcGVydHkgdG8gYW4gaG91ciBncmlkIHNlZ21lbnQgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgaG91ciBzZWdtZW50IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVZpZXdSZW5kZXI6IEV2ZW50RW1pdHRlcjxDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQ+O1xufVxuIl19