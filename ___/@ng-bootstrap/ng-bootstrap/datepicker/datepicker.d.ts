import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDatepickerService } from './datepicker-service';
import { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
import { DatepickerViewModel, NavigationEvent } from './datepicker-view-model';
import { DayTemplateContext } from './datepicker-day-template-context';
import { NgbDatepickerConfig } from './datepicker-config';
import { NgbDateAdapter } from './adapters/ngb-date-adapter';
import { NgbDateStruct } from './ngb-date-struct';
import { NgbDatepickerI18n } from './datepicker-i18n';
/**
 * An event emitted right before the navigation happens and the month displayed by the datepicker changes.
 */
import * as ɵngcc0 from '@angular/core';
export interface NgbDatepickerNavigateEvent {
    /**
     * The currently displayed month.
     */
    current: {
        year: number;
        month: number;
    };
    /**
     * The month we're navigating to.
     */
    next: {
        year: number;
        month: number;
    };
    /**
     * Calling this function will prevent navigation from happening.
     *
     * @since 4.1.0
     */
    preventDefault: () => void;
}
/**
 * An interface that represents the readonly public state of the datepicker.
 *
 * Accessible via the `datepicker.state` getter
 *
 * @since 5.2.0
 */
export interface NgbDatepickerState {
    /**
     * The earliest date that can be displayed or selected
     */
    readonly minDate: NgbDate;
    /**
     * The latest date that can be displayed or selected
     */
    readonly maxDate: NgbDate;
    /**
     * The first visible date of currently displayed months
     */
    readonly firstDate: NgbDate;
    /**
     * The last visible date of currently displayed months
     */
    readonly lastDate: NgbDate;
    /**
     * The date currently focused by the datepicker
     */
    readonly focusedDate: NgbDate;
}
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
export declare class NgbDatepicker implements OnDestroy, OnChanges, OnInit, AfterViewInit, ControlValueAccessor {
    private _service;
    private _calendar;
    i18n: NgbDatepickerI18n;
    private _keyboardService;
    private _elementRef;
    private _ngbDateAdapter;
    private _ngZone;
    model: DatepickerViewModel;
    private _monthsEl;
    private _controlValue;
    private _destroyed$;
    private _publicState;
    /**
     * The reference to a custom template for the day.
     *
     * Allows to completely override the way a day 'cell' in the calendar is displayed.
     *
     * See [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext) for the data you get inside.
     */
    dayTemplate: TemplateRef<DayTemplateContext>;
    /**
     * The callback to pass any arbitrary data to the template cell via the
     * [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext)'s `data` parameter.
     *
     * `current` is the month that is currently displayed by the datepicker.
     *
     * @since 3.3.0
     */
    dayTemplateData: (date: NgbDate, current: {
        year: number;
        month: number;
    }) => any;
    /**
     * The number of months to display.
     */
    displayMonths: number;
    /**
     * The first day of the week.
     *
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
     */
    firstDayOfWeek: number;
    /**
     * The reference to the custom template for the datepicker footer.
     *
     * @since 3.3.0
     */
    footerTemplate: TemplateRef<any>;
    /**
     * The callback to mark some dates as disabled.
     *
     * It is called for each new date when navigating to a different month.
     *
     * `current` is the month that is currently displayed by the datepicker.
     */
    markDisabled: (date: NgbDate, current: {
        year: number;
        month: number;
    }) => boolean;
    /**
     * The latest date that can be displayed or selected.
     *
     * If not provided, 'year' select box will display 10 years after the current month.
     */
    maxDate: NgbDateStruct;
    /**
     * The earliest date that can be displayed or selected.
     *
     * If not provided, 'year' select box will display 10 years before the current month.
     */
    minDate: NgbDateStruct;
    /**
     * Navigation type.
     *
     * * `"select"` - select boxes for month and navigation arrows
     * * `"arrows"` - only navigation arrows
     * * `"none"` - no navigation visible at all
     */
    navigation: 'select' | 'arrows' | 'none';
    /**
     * The way of displaying days that don't belong to the current month.
     *
     * * `"visible"` - days are visible
     * * `"hidden"` - days are hidden, white space preserved
     * * `"collapsed"` - days are collapsed, so the datepicker height might change between months
     *
     * For the 2+ months view, days in between months are never shown.
     */
    outsideDays: 'visible' | 'collapsed' | 'hidden';
    /**
     * If `true`, weekdays will be displayed.
     */
    showWeekdays: boolean;
    /**
     * If `true`, week numbers will be displayed.
     */
    showWeekNumbers: boolean;
    /**
     * The date to open calendar with.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date is provided, calendar will open with current month.
     *
     * You could use `navigateTo(date)` method as an alternative.
     */
    startDate: {
        year: number;
        month: number;
        day?: number;
    };
    /**
     * An event emitted right before the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     */
    navigate: EventEmitter<NgbDatepickerNavigateEvent>;
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * @since 5.2.0
     */
    dateSelect: EventEmitter<NgbDate>;
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * Please use 'dateSelect' output instead, this will be deprecated in version 6.0 due to collision with native
     * 'select' event.
     */
    select: EventEmitter<NgbDate>;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_service: NgbDatepickerService, _calendar: NgbCalendar, i18n: NgbDatepickerI18n, config: NgbDatepickerConfig, _keyboardService: NgbDatepickerKeyboardService, cd: ChangeDetectorRef, _elementRef: ElementRef<HTMLElement>, _ngbDateAdapter: NgbDateAdapter<any>, _ngZone: NgZone);
    /**
     *  Returns the readonly public state of the datepicker
     *
     * @since 5.2.0
     */
    readonly state: NgbDatepickerState;
    /**
     *  Focuses on given date.
     */
    focusDate(date: NgbDateStruct): void;
    /**
     *  Selects focused date.
     */
    focusSelect(): void;
    focus(): void;
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    navigateTo(date?: {
        year: number;
        month: number;
        day?: number;
    }): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onDateSelect(date: NgbDate): void;
    onKeyDown(event: KeyboardEvent): void;
    onNavigateDateSelect(date: NgbDate): void;
    onNavigateEvent(event: NavigationEvent): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(disabled: boolean): void;
    writeValue(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepicker>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbDatepicker, "ngb-datepicker", ["ngbDatepicker"], {
    "dayTemplate": "dayTemplate";
    "dayTemplateData": "dayTemplateData";
    "displayMonths": "displayMonths";
    "firstDayOfWeek": "firstDayOfWeek";
    "footerTemplate": "footerTemplate";
    "markDisabled": "markDisabled";
    "maxDate": "maxDate";
    "minDate": "minDate";
    "navigation": "navigation";
    "outsideDays": "outsideDays";
    "showWeekdays": "showWeekdays";
    "showWeekNumbers": "showWeekNumbers";
    "startDate": "startDate";
}, {
    "navigate": "navigate";
    "dateSelect": "dateSelect";
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kLnRzIiwic291cmNlcyI6WyJkYXRlcGlja2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiQ2FsZW5kYXIgfSBmcm9tICcuL25nYi1jYWxlbmRhcic7XG5pbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyU2VydmljZSB9IGZyb20gJy4vZGF0ZXBpY2tlci1zZXJ2aWNlJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJLZXlib2FyZFNlcnZpY2UgfSBmcm9tICcuL2RhdGVwaWNrZXIta2V5Ym9hcmQtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlcGlja2VyVmlld01vZGVsLCBOYXZpZ2F0aW9uRXZlbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBEYXlUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2RhdGVwaWNrZXItZGF5LXRlbXBsYXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgTmdiRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci1jb25maWcnO1xuaW1wb3J0IHsgTmdiRGF0ZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXJzL25nYi1kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCB9IGZyb20gJy4vbmdiLWRhdGUtc3RydWN0JztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJJMThuIH0gZnJvbSAnLi9kYXRlcGlja2VyLWkxOG4nO1xuLyoqXG4gKiBBbiBldmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSB0aGUgbmF2aWdhdGlvbiBoYXBwZW5zIGFuZCB0aGUgbW9udGggZGlzcGxheWVkIGJ5IHRoZSBkYXRlcGlja2VyIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG1vbnRoLlxuICAgICAqL1xuICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICBtb250aDogbnVtYmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIG1vbnRoIHdlJ3JlIG5hdmlnYXRpbmcgdG8uXG4gICAgICovXG4gICAgbmV4dDoge1xuICAgICAgICB5ZWFyOiBudW1iZXI7XG4gICAgICAgIG1vbnRoOiBudW1iZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBwcmV2ZW50IG5hdmlnYXRpb24gZnJvbSBoYXBwZW5pbmcuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNC4xLjBcbiAgICAgKi9cbiAgICBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDtcbn1cbi8qKlxuICogQW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVhZG9ubHkgcHVibGljIHN0YXRlIG9mIHRoZSBkYXRlcGlja2VyLlxuICpcbiAqIEFjY2Vzc2libGUgdmlhIHRoZSBgZGF0ZXBpY2tlci5zdGF0ZWAgZ2V0dGVyXG4gKlxuICogQHNpbmNlIDUuMi4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiRGF0ZXBpY2tlclN0YXRlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZWFybGllc3QgZGF0ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgb3Igc2VsZWN0ZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBtaW5EYXRlOiBOZ2JEYXRlO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgb3Igc2VsZWN0ZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhEYXRlOiBOZ2JEYXRlO1xuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCB2aXNpYmxlIGRhdGUgb2YgY3VycmVudGx5IGRpc3BsYXllZCBtb250aHNcbiAgICAgKi9cbiAgICByZWFkb25seSBmaXJzdERhdGU6IE5nYkRhdGU7XG4gICAgLyoqXG4gICAgICogVGhlIGxhc3QgdmlzaWJsZSBkYXRlIG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9udGhzXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGFzdERhdGU6IE5nYkRhdGU7XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGUgY3VycmVudGx5IGZvY3VzZWQgYnkgdGhlIGRhdGVwaWNrZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBmb2N1c2VkRGF0ZTogTmdiRGF0ZTtcbn1cbi8qKlxuICogQSBoaWdobHkgY29uZmlndXJhYmxlIGNvbXBvbmVudCB0aGF0IGhlbHBzIHlvdSB3aXRoIHNlbGVjdGluZyBjYWxlbmRhciBkYXRlcy5cbiAqXG4gKiBgTmdiRGF0ZXBpY2tlcmAgaXMgbWVhbnQgdG8gYmUgZGlzcGxheWVkIGlubGluZSBvbiBhIHBhZ2Ugb3IgcHV0IGluc2lkZSBhIHBvcHVwLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEYXRlcGlja2VyIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIHByaXZhdGUgX3NlcnZpY2U7XG4gICAgcHJpdmF0ZSBfY2FsZW5kYXI7XG4gICAgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG47XG4gICAgcHJpdmF0ZSBfa2V5Ym9hcmRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBfbmdiRGF0ZUFkYXB0ZXI7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIG1vZGVsOiBEYXRlcGlja2VyVmlld01vZGVsO1xuICAgIHByaXZhdGUgX21vbnRoc0VsO1xuICAgIHByaXZhdGUgX2NvbnRyb2xWYWx1ZTtcbiAgICBwcml2YXRlIF9kZXN0cm95ZWQkO1xuICAgIHByaXZhdGUgX3B1YmxpY1N0YXRlO1xuICAgIC8qKlxuICAgICAqIFRoZSByZWZlcmVuY2UgdG8gYSBjdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBkYXkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgdG8gY29tcGxldGVseSBvdmVycmlkZSB0aGUgd2F5IGEgZGF5ICdjZWxsJyBpbiB0aGUgY2FsZW5kYXIgaXMgZGlzcGxheWVkLlxuICAgICAqXG4gICAgICogU2VlIFtgRGF5VGVtcGxhdGVDb250ZXh0YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI0RheVRlbXBsYXRlQ29udGV4dCkgZm9yIHRoZSBkYXRhIHlvdSBnZXQgaW5zaWRlLlxuICAgICAqL1xuICAgIGRheVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxEYXlUZW1wbGF0ZUNvbnRleHQ+O1xuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayB0byBwYXNzIGFueSBhcmJpdHJhcnkgZGF0YSB0byB0aGUgdGVtcGxhdGUgY2VsbCB2aWEgdGhlXG4gICAgICogW2BEYXlUZW1wbGF0ZUNvbnRleHRgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjRGF5VGVtcGxhdGVDb250ZXh0KSdzIGBkYXRhYCBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBgY3VycmVudGAgaXMgdGhlIG1vbnRoIHRoYXQgaXMgY3VycmVudGx5IGRpc3BsYXllZCBieSB0aGUgZGF0ZXBpY2tlci5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAzLjMuMFxuICAgICAqL1xuICAgIGRheVRlbXBsYXRlRGF0YTogKGRhdGU6IE5nYkRhdGUsIGN1cnJlbnQ6IHtcbiAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICBtb250aDogbnVtYmVyO1xuICAgIH0pID0+IGFueTtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIG1vbnRocyB0byBkaXNwbGF5LlxuICAgICAqL1xuICAgIGRpc3BsYXlNb250aHM6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAqXG4gICAgICogV2l0aCBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ3dlZWtkYXknIGlzIDE9TW9uIC4uLiA3PVN1bi5cbiAgICAgKi9cbiAgICBmaXJzdERheU9mV2VlazogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSByZWZlcmVuY2UgdG8gdGhlIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGRhdGVwaWNrZXIgZm9vdGVyLlxuICAgICAqXG4gICAgICogQHNpbmNlIDMuMy4wXG4gICAgICovXG4gICAgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHRvIG1hcmsgc29tZSBkYXRlcyBhcyBkaXNhYmxlZC5cbiAgICAgKlxuICAgICAqIEl0IGlzIGNhbGxlZCBmb3IgZWFjaCBuZXcgZGF0ZSB3aGVuIG5hdmlnYXRpbmcgdG8gYSBkaWZmZXJlbnQgbW9udGguXG4gICAgICpcbiAgICAgKiBgY3VycmVudGAgaXMgdGhlIG1vbnRoIHRoYXQgaXMgY3VycmVudGx5IGRpc3BsYXllZCBieSB0aGUgZGF0ZXBpY2tlci5cbiAgICAgKi9cbiAgICBtYXJrRGlzYWJsZWQ6IChkYXRlOiBOZ2JEYXRlLCBjdXJyZW50OiB7XG4gICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICB9KSA9PiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgb3Igc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsICd5ZWFyJyBzZWxlY3QgYm94IHdpbGwgZGlzcGxheSAxMCB5ZWFycyBhZnRlciB0aGUgY3VycmVudCBtb250aC5cbiAgICAgKi9cbiAgICBtYXhEYXRlOiBOZ2JEYXRlU3RydWN0O1xuICAgIC8qKlxuICAgICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBvciBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgJ3llYXInIHNlbGVjdCBib3ggd2lsbCBkaXNwbGF5IDEwIHllYXJzIGJlZm9yZSB0aGUgY3VycmVudCBtb250aC5cbiAgICAgKi9cbiAgICBtaW5EYXRlOiBOZ2JEYXRlU3RydWN0O1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gdHlwZS5cbiAgICAgKlxuICAgICAqICogYFwic2VsZWN0XCJgIC0gc2VsZWN0IGJveGVzIGZvciBtb250aCBhbmQgbmF2aWdhdGlvbiBhcnJvd3NcbiAgICAgKiAqIGBcImFycm93c1wiYCAtIG9ubHkgbmF2aWdhdGlvbiBhcnJvd3NcbiAgICAgKiAqIGBcIm5vbmVcImAgLSBubyBuYXZpZ2F0aW9uIHZpc2libGUgYXQgYWxsXG4gICAgICovXG4gICAgbmF2aWdhdGlvbjogJ3NlbGVjdCcgfCAnYXJyb3dzJyB8ICdub25lJztcbiAgICAvKipcbiAgICAgKiBUaGUgd2F5IG9mIGRpc3BsYXlpbmcgZGF5cyB0aGF0IGRvbid0IGJlbG9uZyB0byB0aGUgY3VycmVudCBtb250aC5cbiAgICAgKlxuICAgICAqICogYFwidmlzaWJsZVwiYCAtIGRheXMgYXJlIHZpc2libGVcbiAgICAgKiAqIGBcImhpZGRlblwiYCAtIGRheXMgYXJlIGhpZGRlbiwgd2hpdGUgc3BhY2UgcHJlc2VydmVkXG4gICAgICogKiBgXCJjb2xsYXBzZWRcImAgLSBkYXlzIGFyZSBjb2xsYXBzZWQsIHNvIHRoZSBkYXRlcGlja2VyIGhlaWdodCBtaWdodCBjaGFuZ2UgYmV0d2VlbiBtb250aHNcbiAgICAgKlxuICAgICAqIEZvciB0aGUgMisgbW9udGhzIHZpZXcsIGRheXMgaW4gYmV0d2VlbiBtb250aHMgYXJlIG5ldmVyIHNob3duLlxuICAgICAqL1xuICAgIG91dHNpZGVEYXlzOiAndmlzaWJsZScgfCAnY29sbGFwc2VkJyB8ICdoaWRkZW4nO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgd2Vla2RheXMgd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAgICovXG4gICAgc2hvd1dlZWtkYXlzOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgd2VlayBudW1iZXJzIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICAqL1xuICAgIHNob3dXZWVrTnVtYmVyczogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSB0byBvcGVuIGNhbGVuZGFyIHdpdGguXG4gICAgICpcbiAgICAgKiBXaXRoIHRoZSBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuICAgICAqIElmIG5vdGhpbmcgb3IgaW52YWxpZCBkYXRlIGlzIHByb3ZpZGVkLCBjYWxlbmRhciB3aWxsIG9wZW4gd2l0aCBjdXJyZW50IG1vbnRoLlxuICAgICAqXG4gICAgICogWW91IGNvdWxkIHVzZSBgbmF2aWdhdGVUbyhkYXRlKWAgbWV0aG9kIGFzIGFuIGFsdGVybmF0aXZlLlxuICAgICAqL1xuICAgIHN0YXJ0RGF0ZToge1xuICAgICAgICB5ZWFyOiBudW1iZXI7XG4gICAgICAgIG1vbnRoOiBudW1iZXI7XG4gICAgICAgIGRheT86IG51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRoZSBuYXZpZ2F0aW9uIGhhcHBlbnMgYW5kIGRpc3BsYXllZCBtb250aCBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogU2VlIFtgTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnRgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQpIGZvciB0aGUgcGF5bG9hZCBpbmZvLlxuICAgICAqL1xuICAgIG5hdmlnYXRlOiBFdmVudEVtaXR0ZXI8TmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIHNlbGVjdHMgYSBkYXRlIHVzaW5nIGtleWJvYXJkIG9yIG1vdXNlLlxuICAgICAqXG4gICAgICogVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50IGlzIGN1cnJlbnRseSBzZWxlY3RlZCBgTmdiRGF0ZWAuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNS4yLjBcbiAgICAgKi9cbiAgICBkYXRlU2VsZWN0OiBFdmVudEVtaXR0ZXI8TmdiRGF0ZT47XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgc2VsZWN0cyBhIGRhdGUgdXNpbmcga2V5Ym9hcmQgb3IgbW91c2UuXG4gICAgICpcbiAgICAgKiBUaGUgcGF5bG9hZCBvZiB0aGUgZXZlbnQgaXMgY3VycmVudGx5IHNlbGVjdGVkIGBOZ2JEYXRlYC5cbiAgICAgKlxuICAgICAqIFBsZWFzZSB1c2UgJ2RhdGVTZWxlY3QnIG91dHB1dCBpbnN0ZWFkLCB0aGlzIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiB2ZXJzaW9uIDYuMCBkdWUgdG8gY29sbGlzaW9uIHdpdGggbmF0aXZlXG4gICAgICogJ3NlbGVjdCcgZXZlbnQuXG4gICAgICovXG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8TmdiRGF0ZT47XG4gICAgb25DaGFuZ2U6IChfOiBhbnkpID0+IHZvaWQ7XG4gICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKF9zZXJ2aWNlOiBOZ2JEYXRlcGlja2VyU2VydmljZSwgX2NhbGVuZGFyOiBOZ2JDYWxlbmRhciwgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG4sIGNvbmZpZzogTmdiRGF0ZXBpY2tlckNvbmZpZywgX2tleWJvYXJkU2VydmljZTogTmdiRGF0ZXBpY2tlcktleWJvYXJkU2VydmljZSwgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9uZ2JEYXRlQWRhcHRlcjogTmdiRGF0ZUFkYXB0ZXI8YW55PiwgX25nWm9uZTogTmdab25lKTtcbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgcmVhZG9ubHkgcHVibGljIHN0YXRlIG9mIHRoZSBkYXRlcGlja2VyXG4gICAgICpcbiAgICAgKiBAc2luY2UgNS4yLjBcbiAgICAgKi9cbiAgICByZWFkb25seSBzdGF0ZTogTmdiRGF0ZXBpY2tlclN0YXRlO1xuICAgIC8qKlxuICAgICAqICBGb2N1c2VzIG9uIGdpdmVuIGRhdGUuXG4gICAgICovXG4gICAgZm9jdXNEYXRlKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqICBTZWxlY3RzIGZvY3VzZWQgZGF0ZS5cbiAgICAgKi9cbiAgICBmb2N1c1NlbGVjdCgpOiB2b2lkO1xuICAgIGZvY3VzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIHRoZSBwcm92aWRlZCBkYXRlLlxuICAgICAqXG4gICAgICogV2l0aCB0aGUgZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICdtb250aCcgaXMgMT1KYW4gLi4uIDEyPURlYy5cbiAgICAgKiBJZiBub3RoaW5nIG9yIGludmFsaWQgZGF0ZSBwcm92aWRlZCBjYWxlbmRhciB3aWxsIG9wZW4gY3VycmVudCBtb250aC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGUgYFtzdGFydERhdGVdYCBpbnB1dCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAgICAgKi9cbiAgICBuYXZpZ2F0ZVRvKGRhdGU/OiB7XG4gICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICAgICAgZGF5PzogbnVtYmVyO1xuICAgIH0pOiB2b2lkO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBvbkRhdGVTZWxlY3QoZGF0ZTogTmdiRGF0ZSk6IHZvaWQ7XG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBvbk5hdmlnYXRlRGF0ZVNlbGVjdChkYXRlOiBOZ2JEYXRlKTogdm9pZDtcbiAgICBvbk5hdmlnYXRlRXZlbnQoZXZlbnQ6IE5hdmlnYXRpb25FdmVudCk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQ7XG4gICAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZDtcbn1cbiJdfQ==