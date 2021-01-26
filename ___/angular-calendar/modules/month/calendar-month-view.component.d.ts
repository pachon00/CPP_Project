import { OnChanges, EventEmitter, ChangeDetectorRef, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { CalendarEvent, WeekDay, MonthView, MonthViewDay, ViewPeriod } from 'calendar-utils';
import { Subject, Subscription } from 'rxjs';
import { CalendarEventTimesChangedEvent } from '../common/calendar-event-times-changed-event.interface';
import { CalendarUtils } from '../common/calendar-utils.provider';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { PlacementArray } from 'positioning';
import * as ɵngcc0 from '@angular/core';
export interface CalendarMonthViewBeforeRenderEvent {
    header: WeekDay[];
    body: MonthViewDay[];
    period: ViewPeriod;
}
export interface CalendarMonthViewEventTimesChangedEvent<EventMetaType = any, DayMetaType = any> extends CalendarEventTimesChangedEvent<EventMetaType> {
    day: MonthViewDay<DayMetaType>;
}
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
export declare class CalendarMonthViewComponent implements OnChanges, OnInit, OnDestroy {
    protected cdr: ChangeDetectorRef;
    protected utils: CalendarUtils;
    protected dateAdapter: DateAdapter;
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * An array of events to display on view.
     * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
     */
    events: CalendarEvent[];
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     */
    excludeDays: number[];
    /**
     * Whether the events list for the day of the `viewDate` option is visible or not
     */
    activeDayIsOpen: boolean;
    /**
     * If set will be used to determine the day that should be open. If not set, the `viewDate` is used
     */
    activeDay: Date;
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
     * The start number of the week
     */
    weekStartsOn: number;
    /**
     * A custom template to use to replace the header
     */
    headerTemplate: TemplateRef<any>;
    /**
     * A custom template to use to replace the day cell
     */
    cellTemplate: TemplateRef<any>;
    /**
     * A custom template to use for the slide down box of events for the active day
     */
    openDayEventsTemplate: TemplateRef<any>;
    /**
     * A custom template to use for event titles
     */
    eventTitleTemplate: TemplateRef<any>;
    /**
     * A custom template to use for event actions
     */
    eventActionsTemplate: TemplateRef<any>;
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that indicate which days are weekends
     */
    weekendDays: number[];
    /**
     * An output that will be called before the view is rendered for the current month.
     * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
     */
    beforeViewRender: EventEmitter<CalendarMonthViewBeforeRenderEvent>;
    /**
     * Called when the day cell is clicked
     */
    dayClicked: EventEmitter<{
        day: MonthViewDay<any>;
        sourceEvent: MouseEvent | KeyboardEvent;
    }>;
    /**
     * Called when the event title is clicked
     */
    eventClicked: EventEmitter<{
        event: CalendarEvent<any>;
        sourceEvent: MouseEvent | KeyboardEvent;
    }>;
    /**
     * Called when a header week day is clicked. Returns ISO day number.
     */
    columnHeaderClicked: EventEmitter<{
        isoDayNumber: number;
        sourceEvent: MouseEvent | KeyboardEvent;
    }>;
    /**
     * Called when an event is dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarMonthViewEventTimesChangedEvent<any, any>>;
    /**
     * @hidden
     */
    columnHeaders: WeekDay[];
    /**
     * @hidden
     */
    view: MonthView;
    /**
     * @hidden
     */
    openRowIndex: number;
    /**
     * @hidden
     */
    openDay: MonthViewDay;
    /**
     * @hidden
     */
    refreshSubscription: Subscription;
    /**
     * @hidden
     */
    trackByRowOffset: (index: number, offset: number) => string;
    /**
     * @hidden
     */
    trackByDate: (index: number, day: MonthViewDay<any>) => string;
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
    /**
     * @hidden
     */
    toggleDayHighlight(event: CalendarEvent, isHighlighted: boolean): void;
    /**
     * @hidden
     */
    eventDropped(droppedOn: MonthViewDay, event: CalendarEvent, draggedFrom?: MonthViewDay): void;
    protected refreshHeader(): void;
    protected refreshBody(): void;
    protected checkActiveDayIsOpen(): void;
    protected refreshAll(): void;
    protected emitBeforeViewRender(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarMonthViewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarMonthViewComponent, "mwl-calendar-month-view", never, {
    "events": "events";
    "excludeDays": "excludeDays";
    "activeDayIsOpen": "activeDayIsOpen";
    "tooltipPlacement": "tooltipPlacement";
    "tooltipAppendToBody": "tooltipAppendToBody";
    "tooltipDelay": "tooltipDelay";
    "locale": "locale";
    "viewDate": "viewDate";
    "activeDay": "activeDay";
    "refresh": "refresh";
    "tooltipTemplate": "tooltipTemplate";
    "weekStartsOn": "weekStartsOn";
    "headerTemplate": "headerTemplate";
    "cellTemplate": "cellTemplate";
    "openDayEventsTemplate": "openDayEventsTemplate";
    "eventTitleTemplate": "eventTitleTemplate";
    "eventActionsTemplate": "eventActionsTemplate";
    "weekendDays": "weekendDays";
}, {
    "beforeViewRender": "beforeViewRender";
    "dayClicked": "dayClicked";
    "eventClicked": "eventClicked";
    "columnHeaderClicked": "columnHeaderClicked";
    "eventTimesChanged": "eventTimesChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUxBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBPbkluaXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQsIFdlZWtEYXksIE1vbnRoVmlldywgTW9udGhWaWV3RGF5LCBWaWV3UGVyaW9kIH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhck1vbnRoVmlld0JlZm9yZVJlbmRlckV2ZW50IHtcbiAgICBoZWFkZXI6IFdlZWtEYXlbXTtcbiAgICBib2R5OiBNb250aFZpZXdEYXlbXTtcbiAgICBwZXJpb2Q6IFZpZXdQZXJpb2Q7XG59XG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyTW9udGhWaWV3RXZlbnRUaW1lc0NoYW5nZWRFdmVudDxFdmVudE1ldGFUeXBlID0gYW55LCBEYXlNZXRhVHlwZSA9IGFueT4gZXh0ZW5kcyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQ8RXZlbnRNZXRhVHlwZT4ge1xuICAgIGRheTogTW9udGhWaWV3RGF5PERheU1ldGFUeXBlPjtcbn1cbi8qKlxuICogU2hvd3MgYWxsIGV2ZW50cyBvbiBhIGdpdmVuIG1vbnRoLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIDxtd2wtY2FsZW5kYXItbW9udGgtdmlld1xuICogIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gKiAgW2V2ZW50c109XCJldmVudHNcIj5cbiAqIDwvbXdsLWNhbGVuZGFyLW1vbnRoLXZpZXc+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJNb250aFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwcm90ZWN0ZWQgdXRpbHM6IENhbGVuZGFyVXRpbHM7XG4gICAgcHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICAgKi9cbiAgICB2aWV3RGF0ZTogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3LlxuICAgICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgICAqL1xuICAgIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCB3aWxsIGJlIGhpZGRlbiBvbiB0aGUgdmlld1xuICAgICAqL1xuICAgIGV4Y2x1ZGVEYXlzOiBudW1iZXJbXTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBldmVudHMgbGlzdCBmb3IgdGhlIGRheSBvZiB0aGUgYHZpZXdEYXRlYCBvcHRpb24gaXMgdmlzaWJsZSBvciBub3RcbiAgICAgKi9cbiAgICBhY3RpdmVEYXlJc09wZW46IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgc2V0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhlIGRheSB0aGF0IHNob3VsZCBiZSBvcGVuLiBJZiBub3Qgc2V0LCB0aGUgYHZpZXdEYXRlYCBpcyB1c2VkXG4gICAgICovXG4gICAgYWN0aXZlRGF5OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEFuIG9ic2VydmFibGUgdGhhdCB3aGVuIGVtaXR0ZWQgb24gd2lsbCByZS1yZW5kZXIgdGhlIGN1cnJlbnQgdmlld1xuICAgICAqL1xuICAgIHJlZnJlc2g6IFN1YmplY3Q8YW55PjtcbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHVzZWQgdG8gZm9ybWF0IGRhdGVzXG4gICAgICovXG4gICAgbG9jYWxlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgZXZlbnQgdG9vbHRpcFxuICAgICAqL1xuICAgIHRvb2x0aXBQbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5O1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGV2ZW50IHRvb2x0aXBzXG4gICAgICovXG4gICAgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYXBwZW5kIHRvb2x0aXBzIHRvIHRoZSBib2R5IG9yIG5leHQgdG8gdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgICAqL1xuICAgIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGRpc3BsYXllZC4gSWYgbm90IHByb3ZpZGVkIHRoZSB0b29sdGlwXG4gICAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW1tZWRpYXRlbHkuXG4gICAgICovXG4gICAgdG9vbHRpcERlbGF5OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydCBudW1iZXIgb2YgdGhlIHdlZWtcbiAgICAgKi9cbiAgICB3ZWVrU3RhcnRzT246IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaGVhZGVyXG4gICAgICovXG4gICAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGRheSBjZWxsXG4gICAgICovXG4gICAgY2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIHNsaWRlIGRvd24gYm94IG9mIGV2ZW50cyBmb3IgdGhlIGFjdGl2ZSBkYXlcbiAgICAgKi9cbiAgICBvcGVuRGF5RXZlbnRzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBldmVudCB0aXRsZXNcbiAgICAgKi9cbiAgICBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBldmVudCBhY3Rpb25zXG4gICAgICovXG4gICAgZXZlbnRBY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IGluZGljYXRlIHdoaWNoIGRheXMgYXJlIHdlZWtlbmRzXG4gICAgICovXG4gICAgd2Vla2VuZERheXM6IG51bWJlcltdO1xuICAgIC8qKlxuICAgICAqIEFuIG91dHB1dCB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyByZW5kZXJlZCBmb3IgdGhlIGN1cnJlbnQgbW9udGguXG4gICAgICogSWYgeW91IGFkZCB0aGUgYGNzc0NsYXNzYCBwcm9wZXJ0eSB0byBhIGRheSBpbiB0aGUgYm9keSBpdCB3aWxsIGFkZCB0aGF0IGNsYXNzIHRvIHRoZSBjZWxsIGVsZW1lbnQgaW4gdGhlIHRlbXBsYXRlXG4gICAgICovXG4gICAgYmVmb3JlVmlld1JlbmRlcjogRXZlbnRFbWl0dGVyPENhbGVuZGFyTW9udGhWaWV3QmVmb3JlUmVuZGVyRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBkYXkgY2VsbCBpcyBjbGlja2VkXG4gICAgICovXG4gICAgZGF5Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgZGF5OiBNb250aFZpZXdEYXk8YW55PjtcbiAgICAgICAgc291cmNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAgICovXG4gICAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBldmVudDogQ2FsZW5kYXJFdmVudDxhbnk+O1xuICAgICAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gICAgfT47XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBoZWFkZXIgd2VlayBkYXkgaXMgY2xpY2tlZC4gUmV0dXJucyBJU08gZGF5IG51bWJlci5cbiAgICAgKi9cbiAgICBjb2x1bW5IZWFkZXJDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBpc29EYXlOdW1iZXI6IG51bWJlcjtcbiAgICAgICAgc291cmNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIGRyYWdnZWQgYW5kIGRyb3BwZWRcbiAgICAgKi9cbiAgICBldmVudFRpbWVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPENhbGVuZGFyTW9udGhWaWV3RXZlbnRUaW1lc0NoYW5nZWRFdmVudDxhbnksIGFueT4+O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBjb2x1bW5IZWFkZXJzOiBXZWVrRGF5W107XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHZpZXc6IE1vbnRoVmlldztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgb3BlblJvd0luZGV4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG9wZW5EYXk6IE1vbnRoVmlld0RheTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB0cmFja0J5Um93T2Zmc2V0OiAoaW5kZXg6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpID0+IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdHJhY2tCeURhdGU6IChpbmRleDogbnVtYmVyLCBkYXk6IE1vbnRoVmlld0RheTxhbnk+KSA9PiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHV0aWxzOiBDYWxlbmRhclV0aWxzLCBsb2NhbGU6IHN0cmluZywgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdG9nZ2xlRGF5SGlnaGxpZ2h0KGV2ZW50OiBDYWxlbmRhckV2ZW50LCBpc0hpZ2hsaWdodGVkOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZXZlbnREcm9wcGVkKGRyb3BwZWRPbjogTW9udGhWaWV3RGF5LCBldmVudDogQ2FsZW5kYXJFdmVudCwgZHJhZ2dlZEZyb20/OiBNb250aFZpZXdEYXkpOiB2b2lkO1xuICAgIHByb3RlY3RlZCByZWZyZXNoSGVhZGVyKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHJlZnJlc2hCb2R5KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGNoZWNrQWN0aXZlRGF5SXNPcGVuKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHJlZnJlc2hBbGwoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTogdm9pZDtcbn1cbiJdfQ==