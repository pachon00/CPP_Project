import { EventEmitter, ChangeDetectorRef, OnChanges, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { WeekDay, CalendarEvent, WeekViewAllDayEvent, WeekView, WeekViewHourColumn, WeekViewTimeEvent, WeekViewHourSegment, WeekViewHour, WeekViewAllDayEventRow } from 'calendar-utils';
import { ResizeEvent } from 'angular-resizable-element';
import { CalendarEventTimesChangedEvent } from '../common/calendar-event-times-changed-event.interface';
import { CalendarUtils } from '../common/calendar-utils.provider';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { DragEndEvent, DropEvent, DragMoveEvent, ValidateDrag } from 'angular-draggable-droppable';
import { PlacementArray } from 'positioning';
import * as ɵngcc0 from '@angular/core';
export interface WeekViewAllDayEventResize {
    originalOffset: number;
    originalSpan: number;
    edge: string;
}
export interface CalendarWeekViewBeforeRenderEvent extends WeekView {
    header: WeekDay[];
}
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
export declare class CalendarWeekViewComponent implements OnChanges, OnInit, OnDestroy {
    protected cdr: ChangeDetectorRef;
    protected utils: CalendarUtils;
    protected dateAdapter: DateAdapter;
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
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     */
    excludeDays: number[];
    /**
     * An observable that when emitted on will re-render the current view
     */
    refresh: Subject<any>;
    /**
     * The locale used to format dates
     */
    locale: string;
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
     * The start number of the week.
     * This is ignored when the `daysInWeek` input is also set as the `viewDate` will be used as the start of the week instead.
     * Note, you should also pass this to the calendar title pipe so it shows the same days: {{ viewDate | calendarDate:(view + 'ViewTitle'):locale:weekStartsOn }}
     */
    weekStartsOn: number;
    /**
     * A custom template to use to replace the header
     */
    headerTemplate: TemplateRef<any>;
    /**
     * A custom template to use for week view events
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
     * The precision to display events.
     * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
     */
    precision: 'days' | 'minutes';
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that indicate which days are weekends
     */
    weekendDays: number[];
    /**
     * Whether to snap events to a grid when dragging
     */
    snapDraggedEvents: boolean;
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
     * A custom template to use to replace the hour segment
     */
    hourSegmentTemplate: TemplateRef<any>;
    /**
     * The grid size to snap resizing and dragging of hourly events to
     */
    eventSnapSize: number;
    /**
     * A custom template to use for the all day events label text
     */
    allDayEventsLabelTemplate: TemplateRef<any>;
    /**
     * The number of days in a week. Can be used to create a shorter or longer week view.
     * The first day of the week will always be the `viewDate` and `weekStartsOn` if set will be ignored
     */
    daysInWeek: number;
    /**
     * A custom template to use for the current time marker
     */
    currentTimeMarkerTemplate: TemplateRef<any>;
    /**
     * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
     */
    dayHeaderClicked: EventEmitter<{
        day: WeekDay;
        sourceEvent: MouseEvent;
    }>;
    /**
     * Called when the event title is clicked
     */
    eventClicked: EventEmitter<{
        event: CalendarEvent<any>;
        sourceEvent: MouseEvent | KeyboardEvent;
    }>;
    /**
     * Called when an event is resized or dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarEventTimesChangedEvent<any>>;
    /**
     * An output that will be called before the view is rendered for the current week.
     * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
     */
    beforeViewRender: EventEmitter<CalendarWeekViewBeforeRenderEvent>;
    /**
     * Called when an hour segment is clicked
     */
    hourSegmentClicked: EventEmitter<{
        date: Date;
        sourceEvent: MouseEvent;
    }>;
    /**
     * @hidden
     */
    days: WeekDay[];
    /**
     * @hidden
     */
    view: WeekView;
    /**
     * @hidden
     */
    refreshSubscription: Subscription;
    /**
     * @hidden
     */
    allDayEventResizes: Map<WeekViewAllDayEvent, WeekViewAllDayEventResize>;
    /**
     * @hidden
     */
    timeEventResizes: Map<CalendarEvent, ResizeEvent>;
    /**
     * @hidden
     */
    eventDragEnterByType: {
        allDay: number;
        time: number;
    };
    /**
     * @hidden
     */
    dragActive: boolean;
    /**
     * @hidden
     */
    dragAlreadyMoved: boolean;
    /**
     * @hidden
     */
    validateDrag: ValidateDrag;
    /**
     * @hidden
     */
    validateResize: (args: any) => boolean;
    /**
     * @hidden
     */
    dayColumnWidth: number;
    /**
     * @hidden
     */
    calendarId: symbol;
    /**
     * @hidden
     */
    trackByWeekDayHeaderDate: (index: number, day: WeekDay) => string;
    /**
     * @hidden
     */
    trackByHourSegment: (index: number, segment: WeekViewHourSegment) => string;
    /**
     * @hidden
     */
    trackByHour: (index: number, hour: WeekViewHour) => string;
    /**
     * @hidden
     */
    trackByWeekAllDayEvent: (index: number, weekEvent: WeekViewAllDayEvent) => string | number | CalendarEvent<any>;
    /**
     * @hidden
     */
    trackByWeekTimeEvent: (index: number, weekEvent: WeekViewTimeEvent) => string | number | CalendarEvent<any>;
    /**
     * @hidden
     */
    private lastDragEnterDate;
    /**
     * @hidden
     */
    trackByHourColumn: (index: number, column: WeekViewHourColumn) => string | WeekViewHourColumn;
    /**
     * @hidden
     */
    trackById: (index: number, row: WeekViewAllDayEventRow) => string;
    /**
     * @hidden
     */
    constructor(cdr: ChangeDetectorRef, utils: CalendarUtils, locale: string, dateAdapter: DateAdapter);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: any): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    protected resizeStarted(eventsContainer: HTMLElement, minWidth?: number): void;
    /**
     * @hidden
     */
    timeEventResizeStarted(eventsContainer: HTMLElement, timeEvent: WeekViewTimeEvent, resizeEvent: ResizeEvent): void;
    /**
     * @hidden
     */
    timeEventResizing(timeEvent: WeekViewTimeEvent, resizeEvent: ResizeEvent): void;
    /**
     * @hidden
     */
    timeEventResizeEnded(timeEvent: WeekViewTimeEvent): void;
    /**
     * @hidden
     */
    allDayEventResizeStarted(allDayEventsContainer: HTMLElement, allDayEvent: WeekViewAllDayEvent, resizeEvent: ResizeEvent): void;
    /**
     * @hidden
     */
    allDayEventResizing(allDayEvent: WeekViewAllDayEvent, resizeEvent: ResizeEvent, dayWidth: number): void;
    /**
     * @hidden
     */
    allDayEventResizeEnded(allDayEvent: WeekViewAllDayEvent): void;
    /**
     * @hidden
     */
    getDayColumnWidth(eventRowContainer: HTMLElement): number;
    /**
     * @hidden
     */
    dateDragEnter(date: Date): void;
    /**
     * @hidden
     */
    eventDropped(dropEvent: DropEvent<{
        event?: CalendarEvent;
        calendarId?: symbol;
    }>, date: Date, allDay: boolean): void;
    /**
     * @hidden
     */
    dragEnter(type: 'allDay' | 'time'): void;
    /**
     * @hidden
     */
    dragLeave(type: 'allDay' | 'time'): void;
    /**
     * @hidden
     */
    dragStarted(eventsContainer: HTMLElement, event: HTMLElement, dayEvent?: WeekViewTimeEvent): void;
    /**
     * @hidden
     */
    dragMove(dayEvent: WeekViewTimeEvent, dragEvent: DragMoveEvent): void;
    /**
     * @hidden
     */
    allDayEventDragMove(): void;
    /**
     * @hidden
     */
    dragEnded(weekEvent: WeekViewAllDayEvent | WeekViewTimeEvent, dragEndEvent: DragEndEvent, dayWidth: number, useY?: boolean): void;
    protected refreshHeader(): void;
    protected refreshBody(): void;
    protected refreshAll(): void;
    protected emitBeforeViewRender(): void;
    protected getWeekView(events: CalendarEvent[]): WeekView;
    protected getDragMovedEventTimes(weekEvent: WeekViewAllDayEvent | WeekViewTimeEvent, dragEndEvent: DragEndEvent | DragMoveEvent, dayWidth: number, useY: boolean): {
        start: Date;
        end: Date;
    };
    protected restoreOriginalEvents(tempEvents: CalendarEvent[], adjustedEvents: Map<CalendarEvent, CalendarEvent>): void;
    protected getTimeEventResizedDates(calendarEvent: CalendarEvent, resizeEvent: ResizeEvent): {
        start: Date;
        end: Date;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarWeekViewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarWeekViewComponent, "mwl-calendar-week-view", never, {
    "events": "events";
    "excludeDays": "excludeDays";
    "tooltipPlacement": "tooltipPlacement";
    "tooltipAppendToBody": "tooltipAppendToBody";
    "tooltipDelay": "tooltipDelay";
    "precision": "precision";
    "snapDraggedEvents": "snapDraggedEvents";
    "hourSegments": "hourSegments";
    "hourSegmentHeight": "hourSegmentHeight";
    "dayStartHour": "dayStartHour";
    "dayStartMinute": "dayStartMinute";
    "dayEndHour": "dayEndHour";
    "dayEndMinute": "dayEndMinute";
    "locale": "locale";
    "viewDate": "viewDate";
    "refresh": "refresh";
    "tooltipTemplate": "tooltipTemplate";
    "weekStartsOn": "weekStartsOn";
    "headerTemplate": "headerTemplate";
    "eventTemplate": "eventTemplate";
    "eventTitleTemplate": "eventTitleTemplate";
    "eventActionsTemplate": "eventActionsTemplate";
    "weekendDays": "weekendDays";
    "hourSegmentTemplate": "hourSegmentTemplate";
    "eventSnapSize": "eventSnapSize";
    "allDayEventsLabelTemplate": "allDayEventsLabelTemplate";
    "daysInWeek": "daysInWeek";
    "currentTimeMarkerTemplate": "currentTimeMarkerTemplate";
}, {
    "dayHeaderClicked": "dayHeaderClicked";
    "eventClicked": "eventClicked";
    "eventTimesChanged": "eventTimesChanged";
    "beforeViewRender": "beforeViewRender";
    "hourSegmentClicked": "hourSegmentClicked";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci13ZWVrLXZpZXcuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMlZBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2Vla0RheSwgQ2FsZW5kYXJFdmVudCwgV2Vla1ZpZXdBbGxEYXlFdmVudCwgV2Vla1ZpZXcsIFdlZWtWaWV3SG91ckNvbHVtbiwgV2Vla1ZpZXdUaW1lRXZlbnQsIFdlZWtWaWV3SG91clNlZ21lbnQsIFdlZWtWaWV3SG91ciwgV2Vla1ZpZXdBbGxEYXlFdmVudFJvdyB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IFJlc2l6ZUV2ZW50IH0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IERyYWdFbmRFdmVudCwgRHJvcEV2ZW50LCBEcmFnTW92ZUV2ZW50LCBWYWxpZGF0ZURyYWcgfSBmcm9tICdhbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUnO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXkgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5leHBvcnQgaW50ZXJmYWNlIFdlZWtWaWV3QWxsRGF5RXZlbnRSZXNpemUge1xuICAgIG9yaWdpbmFsT2Zmc2V0OiBudW1iZXI7XG4gICAgb3JpZ2luYWxTcGFuOiBudW1iZXI7XG4gICAgZWRnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQgZXh0ZW5kcyBXZWVrVmlldyB7XG4gICAgaGVhZGVyOiBXZWVrRGF5W107XG59XG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiB3ZWVrLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIDxtd2wtY2FsZW5kYXItd2Vlay12aWV3XG4gKiAgW3ZpZXdEYXRlXT1cInZpZXdEYXRlXCJcbiAqICBbZXZlbnRzXT1cImV2ZW50c1wiPlxuICogPC9td2wtY2FsZW5kYXItd2Vlay12aWV3PlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwcm90ZWN0ZWQgdXRpbHM6IENhbGVuZGFyVXRpbHM7XG4gICAgcHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICAgKi9cbiAgICB2aWV3RGF0ZTogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAgICogVGhlIHNjaGVtYSBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2NhbGVuZGFyLXV0aWxzL2Jsb2IvYzUxNjg5OTg1ZjU5YTI3MTk0MGUzMGJjNGUyYzRlMWZlZTNmY2I1Yy9zcmMvY2FsZW5kYXJVdGlscy50cyNMNDktTDYzXG4gICAgICovXG4gICAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IHdpbGwgYmUgaGlkZGVuIG9uIHRoZSB2aWV3XG4gICAgICovXG4gICAgZXhjbHVkZURheXM6IG51bWJlcltdO1xuICAgIC8qKlxuICAgICAqIEFuIG9ic2VydmFibGUgdGhhdCB3aGVuIGVtaXR0ZWQgb24gd2lsbCByZS1yZW5kZXIgdGhlIGN1cnJlbnQgdmlld1xuICAgICAqL1xuICAgIHJlZnJlc2g6IFN1YmplY3Q8YW55PjtcbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHVzZWQgdG8gZm9ybWF0IGRhdGVzXG4gICAgICovXG4gICAgbG9jYWxlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgZXZlbnQgdG9vbHRpcFxuICAgICAqL1xuICAgIHRvb2x0aXBQbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5O1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGV2ZW50IHRvb2x0aXBzXG4gICAgICovXG4gICAgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYXBwZW5kIHRvb2x0aXBzIHRvIHRoZSBib2R5IG9yIG5leHQgdG8gdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgICAqL1xuICAgIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGRpc3BsYXllZC4gSWYgbm90IHByb3ZpZGVkIHRoZSB0b29sdGlwXG4gICAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW1tZWRpYXRlbHkuXG4gICAgICovXG4gICAgdG9vbHRpcERlbGF5OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydCBudW1iZXIgb2YgdGhlIHdlZWsuXG4gICAgICogVGhpcyBpcyBpZ25vcmVkIHdoZW4gdGhlIGBkYXlzSW5XZWVrYCBpbnB1dCBpcyBhbHNvIHNldCBhcyB0aGUgYHZpZXdEYXRlYCB3aWxsIGJlIHVzZWQgYXMgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGluc3RlYWQuXG4gICAgICogTm90ZSwgeW91IHNob3VsZCBhbHNvIHBhc3MgdGhpcyB0byB0aGUgY2FsZW5kYXIgdGl0bGUgcGlwZSBzbyBpdCBzaG93cyB0aGUgc2FtZSBkYXlzOiB7eyB2aWV3RGF0ZSB8IGNhbGVuZGFyRGF0ZToodmlldyArICdWaWV3VGl0bGUnKTpsb2NhbGU6d2Vla1N0YXJ0c09uIH19XG4gICAgICovXG4gICAgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhlYWRlclxuICAgICAqL1xuICAgIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3Igd2VlayB2aWV3IGV2ZW50c1xuICAgICAqL1xuICAgIGV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBldmVudCB0aXRsZXNcbiAgICAgKi9cbiAgICBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBldmVudCBhY3Rpb25zXG4gICAgICovXG4gICAgZXZlbnRBY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogVGhlIHByZWNpc2lvbiB0byBkaXNwbGF5IGV2ZW50cy5cbiAgICAgKiBgZGF5c2Agd2lsbCByb3VuZCBldmVudCBzdGFydCBhbmQgZW5kIGRhdGVzIHRvIHRoZSBuZWFyZXN0IGRheSBhbmQgYG1pbnV0ZXNgIHdpbGwgbm90IGRvIHRoaXMgcm91bmRpbmdcbiAgICAgKi9cbiAgICBwcmVjaXNpb246ICdkYXlzJyB8ICdtaW51dGVzJztcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBkYXkgaW5kZXhlcyAoMCA9IHN1bmRheSwgMSA9IG1vbmRheSBldGMpIHRoYXQgaW5kaWNhdGUgd2hpY2ggZGF5cyBhcmUgd2Vla2VuZHNcbiAgICAgKi9cbiAgICB3ZWVrZW5kRGF5czogbnVtYmVyW107XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBzbmFwIGV2ZW50cyB0byBhIGdyaWQgd2hlbiBkcmFnZ2luZ1xuICAgICAqL1xuICAgIHNuYXBEcmFnZ2VkRXZlbnRzOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2Ygc2VnbWVudHMgaW4gYW4gaG91ci4gTXVzdCBiZSA8PSA2XG4gICAgICovXG4gICAgaG91clNlZ21lbnRzOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBpbiBwaXhlbHMgb2YgZWFjaCBob3VyIHNlZ21lbnRcbiAgICAgKi9cbiAgICBob3VyU2VnbWVudEhlaWdodDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXkgc3RhcnQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICAgKi9cbiAgICBkYXlTdGFydEhvdXI6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF5IHN0YXJ0IG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgICAqL1xuICAgIGRheVN0YXJ0TWludXRlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGRheSBlbmQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICAgKi9cbiAgICBkYXlFbmRIb3VyOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGRheSBlbmQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAgICovXG4gICAgZGF5RW5kTWludXRlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhvdXIgc2VnbWVudFxuICAgICAqL1xuICAgIGhvdXJTZWdtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogVGhlIGdyaWQgc2l6ZSB0byBzbmFwIHJlc2l6aW5nIGFuZCBkcmFnZ2luZyBvZiBob3VybHkgZXZlbnRzIHRvXG4gICAgICovXG4gICAgZXZlbnRTbmFwU2l6ZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGFsbCBkYXkgZXZlbnRzIGxhYmVsIHRleHRcbiAgICAgKi9cbiAgICBhbGxEYXlFdmVudHNMYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHdlZWsuIENhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIHNob3J0ZXIgb3IgbG9uZ2VyIHdlZWsgdmlldy5cbiAgICAgKiBUaGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrIHdpbGwgYWx3YXlzIGJlIHRoZSBgdmlld0RhdGVgIGFuZCBgd2Vla1N0YXJ0c09uYCBpZiBzZXQgd2lsbCBiZSBpZ25vcmVkXG4gICAgICovXG4gICAgZGF5c0luV2VlazogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGN1cnJlbnQgdGltZSBtYXJrZXJcbiAgICAgKi9cbiAgICBjdXJyZW50VGltZU1hcmtlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGEgaGVhZGVyIHdlZWsgZGF5IGlzIGNsaWNrZWQuIEFkZGluZyBhIGBjc3NDbGFzc2AgcHJvcGVydHkgb24gYCRldmVudC5kYXlgIHdpbGwgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGhlYWRlciBlbGVtZW50XG4gICAgICovXG4gICAgZGF5SGVhZGVyQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgZGF5OiBXZWVrRGF5O1xuICAgICAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgICB9PjtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgICAqL1xuICAgIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ8YW55PjtcbiAgICAgICAgc291cmNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgICAqL1xuICAgIGV2ZW50VGltZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PGFueT4+O1xuICAgIC8qKlxuICAgICAqIEFuIG91dHB1dCB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyByZW5kZXJlZCBmb3IgdGhlIGN1cnJlbnQgd2Vlay5cbiAgICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIGEgZGF5IGluIHRoZSBoZWFkZXIgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgY2VsbCBlbGVtZW50IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVZpZXdSZW5kZXI6IEV2ZW50RW1pdHRlcjxDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIGhvdXIgc2VnbWVudCBpcyBjbGlja2VkXG4gICAgICovXG4gICAgaG91clNlZ21lbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBkYXRlOiBEYXRlO1xuICAgICAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgICB9PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZGF5czogV2Vla0RheVtdO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB2aWV3OiBXZWVrVmlldztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBhbGxEYXlFdmVudFJlc2l6ZXM6IE1hcDxXZWVrVmlld0FsbERheUV2ZW50LCBXZWVrVmlld0FsbERheUV2ZW50UmVzaXplPjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdGltZUV2ZW50UmVzaXplczogTWFwPENhbGVuZGFyRXZlbnQsIFJlc2l6ZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZXZlbnREcmFnRW50ZXJCeVR5cGU6IHtcbiAgICAgICAgYWxsRGF5OiBudW1iZXI7XG4gICAgICAgIHRpbWU6IG51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBkcmFnQWN0aXZlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBkcmFnQWxyZWFkeU1vdmVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB2YWxpZGF0ZURyYWc6IFZhbGlkYXRlRHJhZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdmFsaWRhdGVSZXNpemU6IChhcmdzOiBhbnkpID0+IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGRheUNvbHVtbldpZHRoOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGNhbGVuZGFySWQ6IHN5bWJvbDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlOiAoaW5kZXg6IG51bWJlciwgZGF5OiBXZWVrRGF5KSA9PiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHRyYWNrQnlIb3VyU2VnbWVudDogKGluZGV4OiBudW1iZXIsIHNlZ21lbnQ6IFdlZWtWaWV3SG91clNlZ21lbnQpID0+IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdHJhY2tCeUhvdXI6IChpbmRleDogbnVtYmVyLCBob3VyOiBXZWVrVmlld0hvdXIpID0+IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdHJhY2tCeVdlZWtBbGxEYXlFdmVudDogKGluZGV4OiBudW1iZXIsIHdlZWtFdmVudDogV2Vla1ZpZXdBbGxEYXlFdmVudCkgPT4gc3RyaW5nIHwgbnVtYmVyIHwgQ2FsZW5kYXJFdmVudDxhbnk+O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB0cmFja0J5V2Vla1RpbWVFdmVudDogKGluZGV4OiBudW1iZXIsIHdlZWtFdmVudDogV2Vla1ZpZXdUaW1lRXZlbnQpID0+IHN0cmluZyB8IG51bWJlciB8IENhbGVuZGFyRXZlbnQ8YW55PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsYXN0RHJhZ0VudGVyRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdHJhY2tCeUhvdXJDb2x1bW46IChpbmRleDogbnVtYmVyLCBjb2x1bW46IFdlZWtWaWV3SG91ckNvbHVtbikgPT4gc3RyaW5nIHwgV2Vla1ZpZXdIb3VyQ29sdW1uO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB0cmFja0J5SWQ6IChpbmRleDogbnVtYmVyLCByb3c6IFdlZWtWaWV3QWxsRGF5RXZlbnRSb3cpID0+IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgdXRpbHM6IENhbGVuZGFyVXRpbHMsIGxvY2FsZTogc3RyaW5nLCBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCByZXNpemVTdGFydGVkKGV2ZW50c0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1pbldpZHRoPzogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdGltZUV2ZW50UmVzaXplU3RhcnRlZChldmVudHNDb250YWluZXI6IEhUTUxFbGVtZW50LCB0aW1lRXZlbnQ6IFdlZWtWaWV3VGltZUV2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB0aW1lRXZlbnRSZXNpemluZyh0aW1lRXZlbnQ6IFdlZWtWaWV3VGltZUV2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB0aW1lRXZlbnRSZXNpemVFbmRlZCh0aW1lRXZlbnQ6IFdlZWtWaWV3VGltZUV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgYWxsRGF5RXZlbnRSZXNpemVTdGFydGVkKGFsbERheUV2ZW50c0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGFsbERheUV2ZW50OiBXZWVrVmlld0FsbERheUV2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBhbGxEYXlFdmVudFJlc2l6aW5nKGFsbERheUV2ZW50OiBXZWVrVmlld0FsbERheUV2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQsIGRheVdpZHRoOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBhbGxEYXlFdmVudFJlc2l6ZUVuZGVkKGFsbERheUV2ZW50OiBXZWVrVmlld0FsbERheUV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZ2V0RGF5Q29sdW1uV2lkdGgoZXZlbnRSb3dDb250YWluZXI6IEhUTUxFbGVtZW50KTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBkYXRlRHJhZ0VudGVyKGRhdGU6IERhdGUpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBldmVudERyb3BwZWQoZHJvcEV2ZW50OiBEcm9wRXZlbnQ8e1xuICAgICAgICBldmVudD86IENhbGVuZGFyRXZlbnQ7XG4gICAgICAgIGNhbGVuZGFySWQ/OiBzeW1ib2w7XG4gICAgfT4sIGRhdGU6IERhdGUsIGFsbERheTogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGRyYWdFbnRlcih0eXBlOiAnYWxsRGF5JyB8ICd0aW1lJyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGRyYWdMZWF2ZSh0eXBlOiAnYWxsRGF5JyB8ICd0aW1lJyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGRyYWdTdGFydGVkKGV2ZW50c0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGV2ZW50OiBIVE1MRWxlbWVudCwgZGF5RXZlbnQ/OiBXZWVrVmlld1RpbWVFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGRyYWdNb3ZlKGRheUV2ZW50OiBXZWVrVmlld1RpbWVFdmVudCwgZHJhZ0V2ZW50OiBEcmFnTW92ZUV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgYWxsRGF5RXZlbnREcmFnTW92ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBkcmFnRW5kZWQod2Vla0V2ZW50OiBXZWVrVmlld0FsbERheUV2ZW50IHwgV2Vla1ZpZXdUaW1lRXZlbnQsIGRyYWdFbmRFdmVudDogRHJhZ0VuZEV2ZW50LCBkYXlXaWR0aDogbnVtYmVyLCB1c2VZPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHJlZnJlc2hIZWFkZXIoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaEJvZHkoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaEFsbCgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBlbWl0QmVmb3JlVmlld1JlbmRlcigpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXRXZWVrVmlldyhldmVudHM6IENhbGVuZGFyRXZlbnRbXSk6IFdlZWtWaWV3O1xuICAgIHByb3RlY3RlZCBnZXREcmFnTW92ZWRFdmVudFRpbWVzKHdlZWtFdmVudDogV2Vla1ZpZXdBbGxEYXlFdmVudCB8IFdlZWtWaWV3VGltZUV2ZW50LCBkcmFnRW5kRXZlbnQ6IERyYWdFbmRFdmVudCB8IERyYWdNb3ZlRXZlbnQsIGRheVdpZHRoOiBudW1iZXIsIHVzZVk6IGJvb2xlYW4pOiB7XG4gICAgICAgIHN0YXJ0OiBEYXRlO1xuICAgICAgICBlbmQ6IERhdGU7XG4gICAgfTtcbiAgICBwcm90ZWN0ZWQgcmVzdG9yZU9yaWdpbmFsRXZlbnRzKHRlbXBFdmVudHM6IENhbGVuZGFyRXZlbnRbXSwgYWRqdXN0ZWRFdmVudHM6IE1hcDxDYWxlbmRhckV2ZW50LCBDYWxlbmRhckV2ZW50Pik6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldFRpbWVFdmVudFJlc2l6ZWREYXRlcyhjYWxlbmRhckV2ZW50OiBDYWxlbmRhckV2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpOiB7XG4gICAgICAgIHN0YXJ0OiBEYXRlO1xuICAgICAgICBlbmQ6IERhdGU7XG4gICAgfTtcbn1cbiJdfQ==