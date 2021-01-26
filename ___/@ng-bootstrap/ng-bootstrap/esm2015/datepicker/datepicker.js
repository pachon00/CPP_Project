/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDatepickerService } from './datepicker-service';
import { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
import { NavigationEvent } from './datepicker-view-model';
import { NgbDatepickerConfig } from './datepicker-config';
import { NgbDateAdapter } from './adapters/ngb-date-adapter';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { isChangedDate, isChangedMonth } from './datepicker-tools';
import { hasClassName } from '../util/util';
/** @type {?} */
const NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NgbDatepicker)),
    multi: true
};
/**
 * An event emitted right before the navigation happens and the month displayed by the datepicker changes.
 * @record
 */
export function NgbDatepickerNavigateEvent() { }
if (false) {
    /**
     * The currently displayed month.
     * @type {?}
     */
    NgbDatepickerNavigateEvent.prototype.current;
    /**
     * The month we're navigating to.
     * @type {?}
     */
    NgbDatepickerNavigateEvent.prototype.next;
    /**
     * Calling this function will prevent navigation from happening.
     *
     * \@since 4.1.0
     * @type {?}
     */
    NgbDatepickerNavigateEvent.prototype.preventDefault;
}
/**
 * An interface that represents the readonly public state of the datepicker.
 *
 * Accessible via the `datepicker.state` getter
 *
 * \@since 5.2.0
 * @record
 */
export function NgbDatepickerState() { }
if (false) {
    /**
     * The earliest date that can be displayed or selected
     * @type {?}
     */
    NgbDatepickerState.prototype.minDate;
    /**
     * The latest date that can be displayed or selected
     * @type {?}
     */
    NgbDatepickerState.prototype.maxDate;
    /**
     * The first visible date of currently displayed months
     * @type {?}
     */
    NgbDatepickerState.prototype.firstDate;
    /**
     * The last visible date of currently displayed months
     * @type {?}
     */
    NgbDatepickerState.prototype.lastDate;
    /**
     * The date currently focused by the datepicker
     * @type {?}
     */
    NgbDatepickerState.prototype.focusedDate;
}
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
export class NgbDatepicker {
    /**
     * @param {?} _service
     * @param {?} _calendar
     * @param {?} i18n
     * @param {?} config
     * @param {?} _keyboardService
     * @param {?} cd
     * @param {?} _elementRef
     * @param {?} _ngbDateAdapter
     * @param {?} _ngZone
     */
    constructor(_service, _calendar, i18n, config, _keyboardService, cd, _elementRef, _ngbDateAdapter, _ngZone) {
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._keyboardService = _keyboardService;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._ngZone = _ngZone;
        this._destroyed$ = new Subject();
        this._publicState = (/** @type {?} */ ({}));
        /**
         * An event emitted right before the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new EventEmitter();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * \@since 5.2.0
         */
        this.dateSelect = new EventEmitter();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * Please use 'dateSelect' output instead, this will be deprecated in version 6.0 due to collision with native
         * 'select' event.
         */
        this.select = this.dateSelect;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
            'maxDate', 'navigation', 'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
            .forEach((/**
         * @param {?} input
         * @return {?}
         */
        input => this[input] = config[input]));
        _service.dateSelect$.pipe(takeUntil(this._destroyed$)).subscribe((/**
         * @param {?} date
         * @return {?}
         */
        date => { this.dateSelect.emit(date); }));
        _service.model$.pipe(takeUntil(this._destroyed$)).subscribe((/**
         * @param {?} model
         * @return {?}
         */
        model => {
            /** @type {?} */
            const newDate = model.firstDate;
            /** @type {?} */
            const oldDate = this.model ? this.model.firstDate : null;
            // update public state
            this._publicState = {
                maxDate: model.maxDate,
                minDate: model.minDate,
                firstDate: model.firstDate,
                lastDate: model.lastDate,
                focusedDate: model.focusDate
            };
            /** @type {?} */
            let navigationPrevented = false;
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month },
                    preventDefault: (/**
                     * @return {?}
                     */
                    () => navigationPrevented = true)
                });
                // can't prevent the very first navigation
                if (navigationPrevented && oldDate !== null) {
                    this._service.open(oldDate);
                    return;
                }
            }
            /** @type {?} */
            const newSelectedDate = model.selectedDate;
            /** @type {?} */
            const newFocusedDate = model.focusDate;
            /** @type {?} */
            const oldFocusedDate = this.model ? this.model.focusDate : null;
            this.model = model;
            // handling selection change
            if (isChangedDate(newSelectedDate, this._controlValue)) {
                this._controlValue = newSelectedDate;
                this.onTouched();
                this.onChange(this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // handling focus change
            if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                this.focus();
            }
            cd.markForCheck();
        }));
    }
    /**
     *  Returns the readonly public state of the datepicker
     *
     * \@since 5.2.0
     * @return {?}
     */
    get state() { return this._publicState; }
    /**
     *  Focuses on given date.
     * @param {?} date
     * @return {?}
     */
    focusDate(date) { this._service.focus(NgbDate.from(date)); }
    /**
     *  Selects focused date.
     * @return {?}
     */
    focusSelect() { this._service.focusSelect(); }
    /**
     * @return {?}
     */
    focus() {
        this._ngZone.onStable.asObservable().pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const elementToFocus = this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }));
    }
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     * @param {?=} date
     * @return {?}
     */
    navigateTo(date) {
        this._service.open(NgbDate.from(date ? date.day ? (/** @type {?} */ (date)) : Object.assign({}, date, { day: 1 }) : null));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const focusIns$ = fromEvent(this._monthsEl.nativeElement, 'focusin');
            /** @type {?} */
            const focusOuts$ = fromEvent(this._monthsEl.nativeElement, 'focusout');
            const { nativeElement } = this._elementRef;
            // we're changing 'focusVisible' only when entering or leaving months view
            // and ignoring all focus events where both 'target' and 'related' target are day cells
            merge(focusIns$, focusOuts$)
                .pipe(filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ target, relatedTarget }) => !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day') &&
                nativeElement.contains((/** @type {?} */ (target))) && nativeElement.contains((/** @type {?} */ (relatedTarget)))))), takeUntil(this._destroyed$))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ type }) => this._ngZone.run((/**
             * @return {?}
             */
            () => this._service.set({ focusVisible: type === 'focusin' })))));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { this._destroyed$.next(); }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.model === undefined) {
            /** @type {?} */
            const inputs = {};
            ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
                'outsideDays']
                .forEach((/**
             * @param {?} name
             * @return {?}
             */
            name => inputs[name] = this[name]));
            this._service.set(inputs);
            this.navigateTo(this.startDate);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const inputs = {};
        ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
            'outsideDays']
            .filter((/**
         * @param {?} name
         * @return {?}
         */
        name => name in changes))
            .forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => inputs[name] = this[name]));
        this._service.set(inputs);
        if ('startDate' in changes) {
            const { currentValue, previousValue } = changes.startDate;
            if (isChangedMonth(previousValue, currentValue)) {
                this.navigateTo(this.startDate);
            }
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) { this._keyboardService.processKey(event, this, this._calendar); }
    /**
     * @param {?} date
     * @return {?}
     */
    onNavigateDateSelect(date) { this._service.open(date); }
    /**
     * @param {?} event
     * @return {?}
     */
    onNavigateEvent(event) {
        switch (event) {
            case NavigationEvent.PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case NavigationEvent.NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) { this._service.set({ disabled }); }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
        this._service.select(this._controlValue);
    }
}
NgbDatepicker.decorators = [
    { type: Component, args: [{
                exportAs: 'ngbDatepicker',
                selector: 'ngb-datepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-template #dt let-date="date" let-currentMonth="currentMonth" let-selected="selected" let-disabled="disabled" let-focused="focused">
      <div ngbDatepickerDayView
        [date]="date"
        [currentMonth]="currentMonth"
        [selected]="selected"
        [disabled]="disabled"
        [focused]="focused">
      </div>
    </ng-template>

    <div class="ngb-dp-header">
      <ngb-datepicker-navigation *ngIf="navigation !== 'none'"
        [date]="model.firstDate"
        [months]="model.months"
        [disabled]="model.disabled"
        [showSelect]="model.navigation === 'select'"
        [prevDisabled]="model.prevDisabled"
        [nextDisabled]="model.nextDisabled"
        [selectBoxes]="model.selectBoxes"
        (navigate)="onNavigateEvent($event)"
        (select)="onNavigateDateSelect($event)">
      </ngb-datepicker-navigation>
    </div>

    <div #months class="ngb-dp-months" (keydown)="onKeyDown($event)">
      <ng-template ngFor let-month [ngForOf]="model.months" let-i="index">
        <div class="ngb-dp-month">
          <div *ngIf="navigation === 'none' || (displayMonths > 1 && navigation === 'select')"
                class="ngb-dp-month-name">
            {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}
          </div>
          <ngb-datepicker-month-view
            [month]="month"
            [dayTemplate]="dayTemplate || dt"
            [showWeekdays]="showWeekdays"
            [showWeekNumbers]="showWeekNumbers"
            (select)="onDateSelect($event)">
          </ngb-datepicker-month-view>
        </div>
      </ng-template>
    </div>

    <ng-template [ngTemplateOutlet]="footerTemplate"></ng-template>
  `,
                providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService],
                styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month-view{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"]
            }] }
];
/** @nocollapse */
NgbDatepicker.ctorParameters = () => [
    { type: NgbDatepickerService },
    { type: NgbCalendar },
    { type: NgbDatepickerI18n },
    { type: NgbDatepickerConfig },
    { type: NgbDatepickerKeyboardService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgbDateAdapter },
    { type: NgZone }
];
NgbDatepicker.propDecorators = {
    _monthsEl: [{ type: ViewChild, args: ['months', { static: true },] }],
    dayTemplate: [{ type: Input }],
    dayTemplateData: [{ type: Input }],
    displayMonths: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    footerTemplate: [{ type: Input }],
    markDisabled: [{ type: Input }],
    maxDate: [{ type: Input }],
    minDate: [{ type: Input }],
    navigation: [{ type: Input }],
    outsideDays: [{ type: Input }],
    showWeekdays: [{ type: Input }],
    showWeekNumbers: [{ type: Input }],
    startDate: [{ type: Input }],
    navigate: [{ type: Output }],
    dateSelect: [{ type: Output }],
    select: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgbDatepicker.prototype.model;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._monthsEl;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._controlValue;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._destroyed$;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._publicState;
    /**
     * The reference to a custom template for the day.
     *
     * Allows to completely override the way a day 'cell' in the calendar is displayed.
     *
     * See [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext) for the data you get inside.
     * @type {?}
     */
    NgbDatepicker.prototype.dayTemplate;
    /**
     * The callback to pass any arbitrary data to the template cell via the
     * [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext)'s `data` parameter.
     *
     * `current` is the month that is currently displayed by the datepicker.
     *
     * \@since 3.3.0
     * @type {?}
     */
    NgbDatepicker.prototype.dayTemplateData;
    /**
     * The number of months to display.
     * @type {?}
     */
    NgbDatepicker.prototype.displayMonths;
    /**
     * The first day of the week.
     *
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
     * @type {?}
     */
    NgbDatepicker.prototype.firstDayOfWeek;
    /**
     * The reference to the custom template for the datepicker footer.
     *
     * \@since 3.3.0
     * @type {?}
     */
    NgbDatepicker.prototype.footerTemplate;
    /**
     * The callback to mark some dates as disabled.
     *
     * It is called for each new date when navigating to a different month.
     *
     * `current` is the month that is currently displayed by the datepicker.
     * @type {?}
     */
    NgbDatepicker.prototype.markDisabled;
    /**
     * The latest date that can be displayed or selected.
     *
     * If not provided, 'year' select box will display 10 years after the current month.
     * @type {?}
     */
    NgbDatepicker.prototype.maxDate;
    /**
     * The earliest date that can be displayed or selected.
     *
     * If not provided, 'year' select box will display 10 years before the current month.
     * @type {?}
     */
    NgbDatepicker.prototype.minDate;
    /**
     * Navigation type.
     *
     * * `"select"` - select boxes for month and navigation arrows
     * * `"arrows"` - only navigation arrows
     * * `"none"` - no navigation visible at all
     * @type {?}
     */
    NgbDatepicker.prototype.navigation;
    /**
     * The way of displaying days that don't belong to the current month.
     *
     * * `"visible"` - days are visible
     * * `"hidden"` - days are hidden, white space preserved
     * * `"collapsed"` - days are collapsed, so the datepicker height might change between months
     *
     * For the 2+ months view, days in between months are never shown.
     * @type {?}
     */
    NgbDatepicker.prototype.outsideDays;
    /**
     * If `true`, weekdays will be displayed.
     * @type {?}
     */
    NgbDatepicker.prototype.showWeekdays;
    /**
     * If `true`, week numbers will be displayed.
     * @type {?}
     */
    NgbDatepicker.prototype.showWeekNumbers;
    /**
     * The date to open calendar with.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date is provided, calendar will open with current month.
     *
     * You could use `navigateTo(date)` method as an alternative.
     * @type {?}
     */
    NgbDatepicker.prototype.startDate;
    /**
     * An event emitted right before the navigation happens and displayed month changes.
     *
     * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
     * @type {?}
     */
    NgbDatepicker.prototype.navigate;
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * \@since 5.2.0
     * @type {?}
     */
    NgbDatepicker.prototype.dateSelect;
    /**
     * An event emitted when user selects a date using keyboard or mouse.
     *
     * The payload of the event is currently selected `NgbDate`.
     *
     * Please use 'dateSelect' output instead, this will be deprecated in version 6.0 due to collision with native
     * 'select' event.
     * @type {?}
     */
    NgbDatepicker.prototype.select;
    /** @type {?} */
    NgbDatepicker.prototype.onChange;
    /** @type {?} */
    NgbDatepicker.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._service;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._calendar;
    /** @type {?} */
    NgbDatepicker.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._keyboardService;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._ngbDateAdapter;
    /**
     * @type {?}
     * @private
     */
    NgbDatepicker.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUVOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQTBCLG9CQUFvQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDM0UsT0FBTyxFQUFzQixlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFFM0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUMs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QUs7NkJBT0wsS0FBSzsyQkFTTCxLQUFLO3NCQU9MLEtBQUs7c0JBT0wsS0FBSzt5QkFTTCxLQUFLOzBCQVdMLEtBQUs7MkJBS0wsS0FBSzs4QkFLTCxLQUFLO3dCQVVMLEtBQUs7dUJBT0wsTUFBTTt5QkFTTixNQUFNO3FCQVVOLE1BQU07Ozs7SUFwSVAsOEJBQTJCOzs7OztJQUUzQixrQ0FBZ0Y7Ozs7O0lBQ2hGLHNDQUErQjs7Ozs7SUFDL0Isb0NBQTBDOzs7OztJQUMxQyxxQ0FBbUQ7Ozs7Ozs7OztJQVNuRCxvQ0FBc0Q7Ozs7Ozs7Ozs7SUFVdEQsd0NBQXlGOzs7OztJQUt6RixzQ0FBK0I7Ozs7Ozs7SUFPL0IsdUNBQWdDOzs7Ozs7O0lBT2hDLHVDQUEwQzs7Ozs7Ozs7O0lBUzFDLHFDQUEwRjs7Ozs7OztJQU8xRixnQ0FBZ0M7Ozs7Ozs7SUFPaEMsZ0NBQWdDOzs7Ozs7Ozs7SUFTaEMsbUNBQWtEOzs7Ozs7Ozs7OztJQVdsRCxvQ0FBeUQ7Ozs7O0lBS3pELHFDQUErQjs7Ozs7SUFLL0Isd0NBQWtDOzs7Ozs7Ozs7O0lBVWxDLGtDQUFnRTs7Ozs7OztJQU9oRSxpQ0FBb0U7Ozs7Ozs7OztJQVNwRSxtQ0FBbUQ7Ozs7Ozs7Ozs7SUFVbkQsK0JBQW1DOztJQUVuQyxpQ0FBMEI7O0lBQzFCLGtDQUFxQjs7Ozs7SUFHakIsaUNBQXNDOzs7OztJQUFFLGtDQUE4Qjs7SUFBRSw2QkFBOEI7Ozs7O0lBQ3pFLHlDQUFzRDs7Ozs7SUFDbkYsb0NBQTRDOzs7OztJQUFFLHdDQUE0Qzs7Ozs7SUFDMUYsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyLCB0YWtlLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOZ2JDYWxlbmRhcn0gZnJvbSAnLi9uZ2ItY2FsZW5kYXInO1xuaW1wb3J0IHtOZ2JEYXRlfSBmcm9tICcuL25nYi1kYXRlJztcbmltcG9ydCB7RGF0ZXBpY2tlclNlcnZpY2VJbnB1dHMsIE5nYkRhdGVwaWNrZXJTZXJ2aWNlfSBmcm9tICcuL2RhdGVwaWNrZXItc2VydmljZSc7XG5pbXBvcnQge05nYkRhdGVwaWNrZXJLZXlib2FyZFNlcnZpY2V9IGZyb20gJy4vZGF0ZXBpY2tlci1rZXlib2FyZC1zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZXBpY2tlclZpZXdNb2RlbCwgTmF2aWdhdGlvbkV2ZW50fSBmcm9tICcuL2RhdGVwaWNrZXItdmlldy1tb2RlbCc7XG5pbXBvcnQge0RheVRlbXBsYXRlQ29udGV4dH0gZnJvbSAnLi9kYXRlcGlja2VyLWRheS10ZW1wbGF0ZS1jb250ZXh0JztcbmltcG9ydCB7TmdiRGF0ZXBpY2tlckNvbmZpZ30gZnJvbSAnLi9kYXRlcGlja2VyLWNvbmZpZyc7XG5pbXBvcnQge05nYkRhdGVBZGFwdGVyfSBmcm9tICcuL2FkYXB0ZXJzL25nYi1kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHtOZ2JEYXRlU3RydWN0fSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQge05nYkRhdGVwaWNrZXJJMThufSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5pbXBvcnQge2lzQ2hhbmdlZERhdGUsIGlzQ2hhbmdlZE1vbnRofSBmcm9tICcuL2RhdGVwaWNrZXItdG9vbHMnO1xuaW1wb3J0IHtoYXNDbGFzc05hbWV9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbmNvbnN0IE5HQl9EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdiRGF0ZXBpY2tlciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKipcbiAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRoZSBuYXZpZ2F0aW9uIGhhcHBlbnMgYW5kIHRoZSBtb250aCBkaXNwbGF5ZWQgYnkgdGhlIGRhdGVwaWNrZXIgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JEYXRlcGlja2VyTmF2aWdhdGVFdmVudCB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBtb250aC5cbiAgICovXG4gIGN1cnJlbnQ6IHt5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXJ9O1xuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggd2UncmUgbmF2aWdhdGluZyB0by5cbiAgICovXG4gIG5leHQ6IHt5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXJ9O1xuXG4gIC8qKlxuICAgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBwcmV2ZW50IG5hdmlnYXRpb24gZnJvbSBoYXBwZW5pbmcuXG4gICAqXG4gICAqIEBzaW5jZSA0LjEuMFxuICAgKi9cbiAgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVhZG9ubHkgcHVibGljIHN0YXRlIG9mIHRoZSBkYXRlcGlja2VyLlxuICpcbiAqIEFjY2Vzc2libGUgdmlhIHRoZSBgZGF0ZXBpY2tlci5zdGF0ZWAgZ2V0dGVyXG4gKlxuICogQHNpbmNlIDUuMi4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiRGF0ZXBpY2tlclN0YXRlIHtcbiAgLyoqXG4gICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBvciBzZWxlY3RlZFxuICAgKi9cbiAgcmVhZG9ubHkgbWluRGF0ZTogTmdiRGF0ZTtcblxuICAvKipcbiAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBvciBzZWxlY3RlZFxuICAgKi9cbiAgcmVhZG9ubHkgbWF4RGF0ZTogTmdiRGF0ZTtcblxuICAvKipcbiAgICogVGhlIGZpcnN0IHZpc2libGUgZGF0ZSBvZiBjdXJyZW50bHkgZGlzcGxheWVkIG1vbnRoc1xuICAgKi9cbiAgcmVhZG9ubHkgZmlyc3REYXRlOiBOZ2JEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFzdCB2aXNpYmxlIGRhdGUgb2YgY3VycmVudGx5IGRpc3BsYXllZCBtb250aHNcbiAgICovXG4gIHJlYWRvbmx5IGxhc3REYXRlOiBOZ2JEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBjdXJyZW50bHkgZm9jdXNlZCBieSB0aGUgZGF0ZXBpY2tlclxuICAgKi9cbiAgcmVhZG9ubHkgZm9jdXNlZERhdGU6IE5nYkRhdGU7XG59XG5cbi8qKlxuICogQSBoaWdobHkgY29uZmlndXJhYmxlIGNvbXBvbmVudCB0aGF0IGhlbHBzIHlvdSB3aXRoIHNlbGVjdGluZyBjYWxlbmRhciBkYXRlcy5cbiAqXG4gKiBgTmdiRGF0ZXBpY2tlcmAgaXMgbWVhbnQgdG8gYmUgZGlzcGxheWVkIGlubGluZSBvbiBhIHBhZ2Ugb3IgcHV0IGluc2lkZSBhIHBvcHVwLlxuICovXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ2JEYXRlcGlja2VyJyxcbiAgc2VsZWN0b3I6ICduZ2ItZGF0ZXBpY2tlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlcGlja2VyLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2R0IGxldC1kYXRlPVwiZGF0ZVwiIGxldC1jdXJyZW50TW9udGg9XCJjdXJyZW50TW9udGhcIiBsZXQtc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGxldC1kaXNhYmxlZD1cImRpc2FibGVkXCIgbGV0LWZvY3VzZWQ9XCJmb2N1c2VkXCI+XG4gICAgICA8ZGl2IG5nYkRhdGVwaWNrZXJEYXlWaWV3XG4gICAgICAgIFtkYXRlXT1cImRhdGVcIlxuICAgICAgICBbY3VycmVudE1vbnRoXT1cImN1cnJlbnRNb250aFwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtmb2N1c2VkXT1cImZvY3VzZWRcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwibmdiLWRwLWhlYWRlclwiPlxuICAgICAgPG5nYi1kYXRlcGlja2VyLW5hdmlnYXRpb24gKm5nSWY9XCJuYXZpZ2F0aW9uICE9PSAnbm9uZSdcIlxuICAgICAgICBbZGF0ZV09XCJtb2RlbC5maXJzdERhdGVcIlxuICAgICAgICBbbW9udGhzXT1cIm1vZGVsLm1vbnRoc1wiXG4gICAgICAgIFtkaXNhYmxlZF09XCJtb2RlbC5kaXNhYmxlZFwiXG4gICAgICAgIFtzaG93U2VsZWN0XT1cIm1vZGVsLm5hdmlnYXRpb24gPT09ICdzZWxlY3QnXCJcbiAgICAgICAgW3ByZXZEaXNhYmxlZF09XCJtb2RlbC5wcmV2RGlzYWJsZWRcIlxuICAgICAgICBbbmV4dERpc2FibGVkXT1cIm1vZGVsLm5leHREaXNhYmxlZFwiXG4gICAgICAgIFtzZWxlY3RCb3hlc109XCJtb2RlbC5zZWxlY3RCb3hlc1wiXG4gICAgICAgIChuYXZpZ2F0ZSk9XCJvbk5hdmlnYXRlRXZlbnQoJGV2ZW50KVwiXG4gICAgICAgIChzZWxlY3QpPVwib25OYXZpZ2F0ZURhdGVTZWxlY3QoJGV2ZW50KVwiPlxuICAgICAgPC9uZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAjbW9udGhzIGNsYXNzPVwibmdiLWRwLW1vbnRoc1wiIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW1vbnRoIFtuZ0Zvck9mXT1cIm1vZGVsLm1vbnRoc1wiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5nYi1kcC1tb250aFwiPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJuYXZpZ2F0aW9uID09PSAnbm9uZScgfHwgKGRpc3BsYXlNb250aHMgPiAxICYmIG5hdmlnYXRpb24gPT09ICdzZWxlY3QnKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuZ2ItZHAtbW9udGgtbmFtZVwiPlxuICAgICAgICAgICAge3sgaTE4bi5nZXRNb250aEZ1bGxOYW1lKG1vbnRoLm51bWJlciwgbW9udGgueWVhcikgfX0ge3sgaTE4bi5nZXRZZWFyTnVtZXJhbHMobW9udGgueWVhcikgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmdiLWRhdGVwaWNrZXItbW9udGgtdmlld1xuICAgICAgICAgICAgW21vbnRoXT1cIm1vbnRoXCJcbiAgICAgICAgICAgIFtkYXlUZW1wbGF0ZV09XCJkYXlUZW1wbGF0ZSB8fCBkdFwiXG4gICAgICAgICAgICBbc2hvd1dlZWtkYXlzXT1cInNob3dXZWVrZGF5c1wiXG4gICAgICAgICAgICBbc2hvd1dlZWtOdW1iZXJzXT1cInNob3dXZWVrTnVtYmVyc1wiXG4gICAgICAgICAgICAoc2VsZWN0KT1cIm9uRGF0ZVNlbGVjdCgkZXZlbnQpXCI+XG4gICAgICAgICAgPC9uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICBgLFxuICBwcm92aWRlcnM6IFtOR0JfREFURVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiwgTmdiRGF0ZXBpY2tlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVwaWNrZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3ksXG4gICAgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgbW9kZWw6IERhdGVwaWNrZXJWaWV3TW9kZWw7XG5cbiAgQFZpZXdDaGlsZCgnbW9udGhzJywge3N0YXRpYzogdHJ1ZX0pIHByaXZhdGUgX21vbnRoc0VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlOiBOZ2JEYXRlO1xuICBwcml2YXRlIF9kZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfcHVibGljU3RhdGU6IE5nYkRhdGVwaWNrZXJTdGF0ZSA9IDxhbnk+e307XG5cbiAgLyoqXG4gICAqIFRoZSByZWZlcmVuY2UgdG8gYSBjdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBkYXkuXG4gICAqXG4gICAqIEFsbG93cyB0byBjb21wbGV0ZWx5IG92ZXJyaWRlIHRoZSB3YXkgYSBkYXkgJ2NlbGwnIGluIHRoZSBjYWxlbmRhciBpcyBkaXNwbGF5ZWQuXG4gICAqXG4gICAqIFNlZSBbYERheVRlbXBsYXRlQ29udGV4dGBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNEYXlUZW1wbGF0ZUNvbnRleHQpIGZvciB0aGUgZGF0YSB5b3UgZ2V0IGluc2lkZS5cbiAgICovXG4gIEBJbnB1dCgpIGRheVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxEYXlUZW1wbGF0ZUNvbnRleHQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgdG8gcGFzcyBhbnkgYXJiaXRyYXJ5IGRhdGEgdG8gdGhlIHRlbXBsYXRlIGNlbGwgdmlhIHRoZVxuICAgKiBbYERheVRlbXBsYXRlQ29udGV4dGBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNEYXlUZW1wbGF0ZUNvbnRleHQpJ3MgYGRhdGFgIHBhcmFtZXRlci5cbiAgICpcbiAgICogYGN1cnJlbnRgIGlzIHRoZSBtb250aCB0aGF0IGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQgYnkgdGhlIGRhdGVwaWNrZXIuXG4gICAqXG4gICAqIEBzaW5jZSAzLjMuMFxuICAgKi9cbiAgQElucHV0KCkgZGF5VGVtcGxhdGVEYXRhOiAoZGF0ZTogTmdiRGF0ZSwgY3VycmVudDoge3llYXI6IG51bWJlciwgbW9udGg6IG51bWJlcn0pID0+IGFueTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtb250aHMgdG8gZGlzcGxheS5cbiAgICovXG4gIEBJbnB1dCgpIGRpc3BsYXlNb250aHM6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICpcbiAgICogV2l0aCBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ3dlZWtkYXknIGlzIDE9TW9uIC4uLiA3PVN1bi5cbiAgICovXG4gIEBJbnB1dCgpIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSByZWZlcmVuY2UgdG8gdGhlIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGRhdGVwaWNrZXIgZm9vdGVyLlxuICAgKlxuICAgKiBAc2luY2UgMy4zLjBcbiAgICovXG4gIEBJbnB1dCgpIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgdG8gbWFyayBzb21lIGRhdGVzIGFzIGRpc2FibGVkLlxuICAgKlxuICAgKiBJdCBpcyBjYWxsZWQgZm9yIGVhY2ggbmV3IGRhdGUgd2hlbiBuYXZpZ2F0aW5nIHRvIGEgZGlmZmVyZW50IG1vbnRoLlxuICAgKlxuICAgKiBgY3VycmVudGAgaXMgdGhlIG1vbnRoIHRoYXQgaXMgY3VycmVudGx5IGRpc3BsYXllZCBieSB0aGUgZGF0ZXBpY2tlci5cbiAgICovXG4gIEBJbnB1dCgpIG1hcmtEaXNhYmxlZDogKGRhdGU6IE5nYkRhdGUsIGN1cnJlbnQ6IHt5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXJ9KSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgbGF0ZXN0IGRhdGUgdGhhdCBjYW4gYmUgZGlzcGxheWVkIG9yIHNlbGVjdGVkLlxuICAgKlxuICAgKiBJZiBub3QgcHJvdmlkZWQsICd5ZWFyJyBzZWxlY3QgYm94IHdpbGwgZGlzcGxheSAxMCB5ZWFycyBhZnRlciB0aGUgY3VycmVudCBtb250aC5cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IE5nYkRhdGVTdHJ1Y3Q7XG5cbiAgLyoqXG4gICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBvciBzZWxlY3RlZC5cbiAgICpcbiAgICogSWYgbm90IHByb3ZpZGVkLCAneWVhcicgc2VsZWN0IGJveCB3aWxsIGRpc3BsYXkgMTAgeWVhcnMgYmVmb3JlIHRoZSBjdXJyZW50IG1vbnRoLlxuICAgKi9cbiAgQElucHV0KCkgbWluRGF0ZTogTmdiRGF0ZVN0cnVjdDtcblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB0eXBlLlxuICAgKlxuICAgKiAqIGBcInNlbGVjdFwiYCAtIHNlbGVjdCBib3hlcyBmb3IgbW9udGggYW5kIG5hdmlnYXRpb24gYXJyb3dzXG4gICAqICogYFwiYXJyb3dzXCJgIC0gb25seSBuYXZpZ2F0aW9uIGFycm93c1xuICAgKiAqIGBcIm5vbmVcImAgLSBubyBuYXZpZ2F0aW9uIHZpc2libGUgYXQgYWxsXG4gICAqL1xuICBASW5wdXQoKSBuYXZpZ2F0aW9uOiAnc2VsZWN0JyB8ICdhcnJvd3MnIHwgJ25vbmUnO1xuXG4gIC8qKlxuICAgKiBUaGUgd2F5IG9mIGRpc3BsYXlpbmcgZGF5cyB0aGF0IGRvbid0IGJlbG9uZyB0byB0aGUgY3VycmVudCBtb250aC5cbiAgICpcbiAgICogKiBgXCJ2aXNpYmxlXCJgIC0gZGF5cyBhcmUgdmlzaWJsZVxuICAgKiAqIGBcImhpZGRlblwiYCAtIGRheXMgYXJlIGhpZGRlbiwgd2hpdGUgc3BhY2UgcHJlc2VydmVkXG4gICAqICogYFwiY29sbGFwc2VkXCJgIC0gZGF5cyBhcmUgY29sbGFwc2VkLCBzbyB0aGUgZGF0ZXBpY2tlciBoZWlnaHQgbWlnaHQgY2hhbmdlIGJldHdlZW4gbW9udGhzXG4gICAqXG4gICAqIEZvciB0aGUgMisgbW9udGhzIHZpZXcsIGRheXMgaW4gYmV0d2VlbiBtb250aHMgYXJlIG5ldmVyIHNob3duLlxuICAgKi9cbiAgQElucHV0KCkgb3V0c2lkZURheXM6ICd2aXNpYmxlJyB8ICdjb2xsYXBzZWQnIHwgJ2hpZGRlbic7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2Vla2RheXMgd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBASW5wdXQoKSBzaG93V2Vla2RheXM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2VlayBudW1iZXJzIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgQElucHV0KCkgc2hvd1dlZWtOdW1iZXJzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB0byBvcGVuIGNhbGVuZGFyIHdpdGguXG4gICAqXG4gICAqIFdpdGggdGhlIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnbW9udGgnIGlzIDE9SmFuIC4uLiAxMj1EZWMuXG4gICAqIElmIG5vdGhpbmcgb3IgaW52YWxpZCBkYXRlIGlzIHByb3ZpZGVkLCBjYWxlbmRhciB3aWxsIG9wZW4gd2l0aCBjdXJyZW50IG1vbnRoLlxuICAgKlxuICAgKiBZb3UgY291bGQgdXNlIGBuYXZpZ2F0ZVRvKGRhdGUpYCBtZXRob2QgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gICAqL1xuICBASW5wdXQoKSBzdGFydERhdGU6IHt5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheT86IG51bWJlcn07XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYmVmb3JlIHRoZSBuYXZpZ2F0aW9uIGhhcHBlbnMgYW5kIGRpc3BsYXllZCBtb250aCBjaGFuZ2VzLlxuICAgKlxuICAgKiBTZWUgW2BOZ2JEYXRlcGlja2VyTmF2aWdhdGVFdmVudGBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNOZ2JEYXRlcGlja2VyTmF2aWdhdGVFdmVudCkgZm9yIHRoZSBwYXlsb2FkIGluZm8uXG4gICAqL1xuICBAT3V0cHV0KCkgbmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPE5nYkRhdGVwaWNrZXJOYXZpZ2F0ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdXNlciBzZWxlY3RzIGEgZGF0ZSB1c2luZyBrZXlib2FyZCBvciBtb3VzZS5cbiAgICpcbiAgICogVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50IGlzIGN1cnJlbnRseSBzZWxlY3RlZCBgTmdiRGF0ZWAuXG4gICAqXG4gICAqIEBzaW5jZSA1LjIuMFxuICAgKi9cbiAgQE91dHB1dCgpIGRhdGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5nYkRhdGU+KCk7XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIHNlbGVjdHMgYSBkYXRlIHVzaW5nIGtleWJvYXJkIG9yIG1vdXNlLlxuICAgKlxuICAgKiBUaGUgcGF5bG9hZCBvZiB0aGUgZXZlbnQgaXMgY3VycmVudGx5IHNlbGVjdGVkIGBOZ2JEYXRlYC5cbiAgICpcbiAgICogUGxlYXNlIHVzZSAnZGF0ZVNlbGVjdCcgb3V0cHV0IGluc3RlYWQsIHRoaXMgd2lsbCBiZSBkZXByZWNhdGVkIGluIHZlcnNpb24gNi4wIGR1ZSB0byBjb2xsaXNpb24gd2l0aCBuYXRpdmVcbiAgICogJ3NlbGVjdCcgZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gdGhpcy5kYXRlU2VsZWN0O1xuXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfc2VydmljZTogTmdiRGF0ZXBpY2tlclNlcnZpY2UsIHByaXZhdGUgX2NhbGVuZGFyOiBOZ2JDYWxlbmRhciwgcHVibGljIGkxOG46IE5nYkRhdGVwaWNrZXJJMThuLFxuICAgICAgY29uZmlnOiBOZ2JEYXRlcGlja2VyQ29uZmlnLCBwcml2YXRlIF9rZXlib2FyZFNlcnZpY2U6IE5nYkRhdGVwaWNrZXJLZXlib2FyZFNlcnZpY2UsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcml2YXRlIF9uZ2JEYXRlQWRhcHRlcjogTmdiRGF0ZUFkYXB0ZXI8YW55PixcbiAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XG4gICAgWydkYXlUZW1wbGF0ZScsICdkYXlUZW1wbGF0ZURhdGEnLCAnZGlzcGxheU1vbnRocycsICdmaXJzdERheU9mV2VlaycsICdmb290ZXJUZW1wbGF0ZScsICdtYXJrRGlzYWJsZWQnLCAnbWluRGF0ZScsXG4gICAgICdtYXhEYXRlJywgJ25hdmlnYXRpb24nLCAnb3V0c2lkZURheXMnLCAnc2hvd1dlZWtkYXlzJywgJ3Nob3dXZWVrTnVtYmVycycsICdzdGFydERhdGUnXVxuICAgICAgICAuZm9yRWFjaChpbnB1dCA9PiB0aGlzW2lucHV0XSA9IGNvbmZpZ1tpbnB1dF0pO1xuXG4gICAgX3NlcnZpY2UuZGF0ZVNlbGVjdCQucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkJCkpLnN1YnNjcmliZShkYXRlID0+IHsgdGhpcy5kYXRlU2VsZWN0LmVtaXQoZGF0ZSk7IH0pO1xuXG4gICAgX3NlcnZpY2UubW9kZWwkLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCQpKS5zdWJzY3JpYmUobW9kZWwgPT4ge1xuICAgICAgY29uc3QgbmV3RGF0ZSA9IG1vZGVsLmZpcnN0RGF0ZTtcbiAgICAgIGNvbnN0IG9sZERhdGUgPSB0aGlzLm1vZGVsID8gdGhpcy5tb2RlbC5maXJzdERhdGUgOiBudWxsO1xuXG4gICAgICAvLyB1cGRhdGUgcHVibGljIHN0YXRlXG4gICAgICB0aGlzLl9wdWJsaWNTdGF0ZSA9IHtcbiAgICAgICAgbWF4RGF0ZTogbW9kZWwubWF4RGF0ZSxcbiAgICAgICAgbWluRGF0ZTogbW9kZWwubWluRGF0ZSxcbiAgICAgICAgZmlyc3REYXRlOiBtb2RlbC5maXJzdERhdGUsXG4gICAgICAgIGxhc3REYXRlOiBtb2RlbC5sYXN0RGF0ZSxcbiAgICAgICAgZm9jdXNlZERhdGU6IG1vZGVsLmZvY3VzRGF0ZVxuICAgICAgfTtcblxuICAgICAgbGV0IG5hdmlnYXRpb25QcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgIC8vIGVtaXR0aW5nIG5hdmlnYXRpb24gZXZlbnQgaWYgdGhlIGZpcnN0IG1vbnRoIGNoYW5nZXNcbiAgICAgIGlmICghbmV3RGF0ZS5lcXVhbHMob2xkRGF0ZSkpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZS5lbWl0KHtcbiAgICAgICAgICBjdXJyZW50OiBvbGREYXRlID8ge3llYXI6IG9sZERhdGUueWVhciwgbW9udGg6IG9sZERhdGUubW9udGh9IDogbnVsbCxcbiAgICAgICAgICBuZXh0OiB7eWVhcjogbmV3RGF0ZS55ZWFyLCBtb250aDogbmV3RGF0ZS5tb250aH0sXG4gICAgICAgICAgcHJldmVudERlZmF1bHQ6ICgpID0+IG5hdmlnYXRpb25QcmV2ZW50ZWQgPSB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhbid0IHByZXZlbnQgdGhlIHZlcnkgZmlyc3QgbmF2aWdhdGlvblxuICAgICAgICBpZiAobmF2aWdhdGlvblByZXZlbnRlZCAmJiBvbGREYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fc2VydmljZS5vcGVuKG9sZERhdGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdTZWxlY3RlZERhdGUgPSBtb2RlbC5zZWxlY3RlZERhdGU7XG4gICAgICBjb25zdCBuZXdGb2N1c2VkRGF0ZSA9IG1vZGVsLmZvY3VzRGF0ZTtcbiAgICAgIGNvbnN0IG9sZEZvY3VzZWREYXRlID0gdGhpcy5tb2RlbCA/IHRoaXMubW9kZWwuZm9jdXNEYXRlIDogbnVsbDtcblxuICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuXG4gICAgICAvLyBoYW5kbGluZyBzZWxlY3Rpb24gY2hhbmdlXG4gICAgICBpZiAoaXNDaGFuZ2VkRGF0ZShuZXdTZWxlY3RlZERhdGUsIHRoaXMuX2NvbnRyb2xWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5fY29udHJvbFZhbHVlID0gbmV3U2VsZWN0ZWREYXRlO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX25nYkRhdGVBZGFwdGVyLnRvTW9kZWwobmV3U2VsZWN0ZWREYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGhhbmRsaW5nIGZvY3VzIGNoYW5nZVxuICAgICAgaWYgKGlzQ2hhbmdlZERhdGUobmV3Rm9jdXNlZERhdGUsIG9sZEZvY3VzZWREYXRlKSAmJiBvbGRGb2N1c2VkRGF0ZSAmJiBtb2RlbC5mb2N1c1Zpc2libGUpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBjZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyB0aGUgcmVhZG9ubHkgcHVibGljIHN0YXRlIG9mIHRoZSBkYXRlcGlja2VyXG4gICAqXG4gICAqIEBzaW5jZSA1LjIuMFxuICAgKi9cbiAgZ2V0IHN0YXRlKCk6IE5nYkRhdGVwaWNrZXJTdGF0ZSB7IHJldHVybiB0aGlzLl9wdWJsaWNTdGF0ZTsgfVxuXG4gIC8qKlxuICAgKiAgRm9jdXNlcyBvbiBnaXZlbiBkYXRlLlxuICAgKi9cbiAgZm9jdXNEYXRlKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiB2b2lkIHsgdGhpcy5fc2VydmljZS5mb2N1cyhOZ2JEYXRlLmZyb20oZGF0ZSkpOyB9XG5cbiAgLyoqXG4gICAqICBTZWxlY3RzIGZvY3VzZWQgZGF0ZS5cbiAgICovXG4gIGZvY3VzU2VsZWN0KCk6IHZvaWQgeyB0aGlzLl9zZXJ2aWNlLmZvY3VzU2VsZWN0KCk7IH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudFRvRm9jdXMgPVxuICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignZGl2Lm5nYi1kcC1kYXlbdGFiaW5kZXg9XCIwXCJdJyk7XG4gICAgICBpZiAoZWxlbWVudFRvRm9jdXMpIHtcbiAgICAgICAgZWxlbWVudFRvRm9jdXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHByb3ZpZGVkIGRhdGUuXG4gICAqXG4gICAqIFdpdGggdGhlIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnbW9udGgnIGlzIDE9SmFuIC4uLiAxMj1EZWMuXG4gICAqIElmIG5vdGhpbmcgb3IgaW52YWxpZCBkYXRlIHByb3ZpZGVkIGNhbGVuZGFyIHdpbGwgb3BlbiBjdXJyZW50IG1vbnRoLlxuICAgKlxuICAgKiBVc2UgdGhlIGBbc3RhcnREYXRlXWAgaW5wdXQgYXMgYW4gYWx0ZXJuYXRpdmUuXG4gICAqL1xuICBuYXZpZ2F0ZVRvKGRhdGU/OiB7eWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk/OiBudW1iZXJ9KSB7XG4gICAgdGhpcy5fc2VydmljZS5vcGVuKE5nYkRhdGUuZnJvbShkYXRlID8gZGF0ZS5kYXkgPyBkYXRlIGFzIE5nYkRhdGVTdHJ1Y3QgOiB7Li4uZGF0ZSwgZGF5OiAxfSA6IG51bGwpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3QgZm9jdXNJbnMkID0gZnJvbUV2ZW50PEZvY3VzRXZlbnQ+KHRoaXMuX21vbnRoc0VsLm5hdGl2ZUVsZW1lbnQsICdmb2N1c2luJyk7XG4gICAgICBjb25zdCBmb2N1c091dHMkID0gZnJvbUV2ZW50PEZvY3VzRXZlbnQ+KHRoaXMuX21vbnRoc0VsLm5hdGl2ZUVsZW1lbnQsICdmb2N1c291dCcpO1xuICAgICAgY29uc3Qge25hdGl2ZUVsZW1lbnR9ID0gdGhpcy5fZWxlbWVudFJlZjtcblxuICAgICAgLy8gd2UncmUgY2hhbmdpbmcgJ2ZvY3VzVmlzaWJsZScgb25seSB3aGVuIGVudGVyaW5nIG9yIGxlYXZpbmcgbW9udGhzIHZpZXdcbiAgICAgIC8vIGFuZCBpZ25vcmluZyBhbGwgZm9jdXMgZXZlbnRzIHdoZXJlIGJvdGggJ3RhcmdldCcgYW5kICdyZWxhdGVkJyB0YXJnZXQgYXJlIGRheSBjZWxsc1xuICAgICAgbWVyZ2UoZm9jdXNJbnMkLCBmb2N1c091dHMkKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAgICAgICAoe3RhcmdldCwgcmVsYXRlZFRhcmdldH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgIShoYXNDbGFzc05hbWUodGFyZ2V0LCAnbmdiLWRwLWRheScpICYmIGhhc0NsYXNzTmFtZShyZWxhdGVkVGFyZ2V0LCAnbmdiLWRwLWRheScpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCBhcyBOb2RlKSAmJiBuYXRpdmVFbGVtZW50LmNvbnRhaW5zKHJlbGF0ZWRUYXJnZXQgYXMgTm9kZSkpKSxcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHt0eXBlfSkgPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB0aGlzLl9zZXJ2aWNlLnNldCh7Zm9jdXNWaXNpYmxlOiB0eXBlID09PSAnZm9jdXNpbid9KSkpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7IHRoaXMuX2Rlc3Ryb3llZCQubmV4dCgpOyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubW9kZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5wdXRzOiBEYXRlcGlja2VyU2VydmljZUlucHV0cyA9IHt9O1xuICAgICAgWydkYXlUZW1wbGF0ZURhdGEnLCAnZGlzcGxheU1vbnRocycsICdtYXJrRGlzYWJsZWQnLCAnZmlyc3REYXlPZldlZWsnLCAnbmF2aWdhdGlvbicsICdtaW5EYXRlJywgJ21heERhdGUnLFxuICAgICAgICdvdXRzaWRlRGF5cyddXG4gICAgICAgICAgLmZvckVhY2gobmFtZSA9PiBpbnB1dHNbbmFtZV0gPSB0aGlzW25hbWVdKTtcbiAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0KGlucHV0cyk7XG5cbiAgICAgIHRoaXMubmF2aWdhdGVUbyh0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGlucHV0czogRGF0ZXBpY2tlclNlcnZpY2VJbnB1dHMgPSB7fTtcbiAgICBbJ2RheVRlbXBsYXRlRGF0YScsICdkaXNwbGF5TW9udGhzJywgJ21hcmtEaXNhYmxlZCcsICdmaXJzdERheU9mV2VlaycsICduYXZpZ2F0aW9uJywgJ21pbkRhdGUnLCAnbWF4RGF0ZScsXG4gICAgICdvdXRzaWRlRGF5cyddXG4gICAgICAgIC5maWx0ZXIobmFtZSA9PiBuYW1lIGluIGNoYW5nZXMpXG4gICAgICAgIC5mb3JFYWNoKG5hbWUgPT4gaW5wdXRzW25hbWVdID0gdGhpc1tuYW1lXSk7XG4gICAgdGhpcy5fc2VydmljZS5zZXQoaW5wdXRzKTtcblxuICAgIGlmICgnc3RhcnREYXRlJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCB7Y3VycmVudFZhbHVlLCBwcmV2aW91c1ZhbHVlfSA9IGNoYW5nZXMuc3RhcnREYXRlO1xuICAgICAgaWYgKGlzQ2hhbmdlZE1vbnRoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuc3RhcnREYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkRhdGVTZWxlY3QoZGF0ZTogTmdiRGF0ZSkge1xuICAgIHRoaXMuX3NlcnZpY2UuZm9jdXMoZGF0ZSk7XG4gICAgdGhpcy5fc2VydmljZS5zZWxlY3QoZGF0ZSwge2VtaXRFdmVudDogdHJ1ZX0pO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7IHRoaXMuX2tleWJvYXJkU2VydmljZS5wcm9jZXNzS2V5KGV2ZW50LCB0aGlzLCB0aGlzLl9jYWxlbmRhcik7IH1cblxuICBvbk5hdmlnYXRlRGF0ZVNlbGVjdChkYXRlOiBOZ2JEYXRlKSB7IHRoaXMuX3NlcnZpY2Uub3BlbihkYXRlKTsgfVxuXG4gIG9uTmF2aWdhdGVFdmVudChldmVudDogTmF2aWdhdGlvbkV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudCkge1xuICAgICAgY2FzZSBOYXZpZ2F0aW9uRXZlbnQuUFJFVjpcbiAgICAgICAgdGhpcy5fc2VydmljZS5vcGVuKHRoaXMuX2NhbGVuZGFyLmdldFByZXYodGhpcy5tb2RlbC5maXJzdERhdGUsICdtJywgMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTmF2aWdhdGlvbkV2ZW50Lk5FWFQ6XG4gICAgICAgIHRoaXMuX3NlcnZpY2Uub3Blbih0aGlzLl9jYWxlbmRhci5nZXROZXh0KHRoaXMubW9kZWwuZmlyc3REYXRlLCAnbScsIDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKSB7IHRoaXMuX3NlcnZpY2Uuc2V0KHtkaXNhYmxlZH0pOyB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZSA9IE5nYkRhdGUuZnJvbSh0aGlzLl9uZ2JEYXRlQWRhcHRlci5mcm9tTW9kZWwodmFsdWUpKTtcbiAgICB0aGlzLl9zZXJ2aWNlLnNlbGVjdCh0aGlzLl9jb250cm9sVmFsdWUpO1xuICB9XG59XG4iXX0=