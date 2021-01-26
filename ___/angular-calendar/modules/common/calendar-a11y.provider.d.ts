import { I18nPluralPipe } from '@angular/common';
import { A11yParams } from './calendar-a11y.interface';
/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class CalendarA11y {
    protected i18nPlural: I18nPluralPipe;
    constructor(i18nPlural: I18nPluralPipe);
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */
    monthCell({ day, locale }: A11yParams): string;
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */
    openDayEventsLandmark({ date, locale }: A11yParams): string;
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */
    openDayEventsAlert({ date, locale }: A11yParams): string;
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */
    eventDescription({ event, locale }: A11yParams): string;
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */
    allDayEventDescription({ event, locale }: A11yParams): string;
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */
    actionButtonLabel({ action }: A11yParams): string;
    /**
     * @returns {number} Tab index to be given to month cells
     */
    monthCellTabIndex(): number;
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */
    hideMonthCellEvents(): boolean;
    /**
     * @returns true if event titles should be aria-hidden (global)
     */
    hideEventTitle(): boolean;
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */
    hideWeekHourSegment(): boolean;
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */
    hideDayHourSegment(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarA11y>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CalendarA11y>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYTExeS5wcm92aWRlci5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci1hMTF5LnByb3ZpZGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSTE4blBsdXJhbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQTExeVBhcmFtcyB9IGZyb20gJy4vY2FsZW5kYXItYTExeS5pbnRlcmZhY2UnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBhZGRpbmcgYWNjZXNzaWJpbGl0eSB0byB0aGUgY2FsZW5kYXIuXG4gKiBZb3UgbWF5IG92ZXJyaWRlIGFueSBvZiBpdHMgbWV0aG9kcyB2aWEgYW5ndWxhcnMgREkgdG8gc3VpdCB5b3VyIHJlcXVpcmVtZW50cy5cbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEExMXlQYXJhbXMsIENhbGVuZGFyQTExeSB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuICogaW1wb3J0IHsgZm9ybWF0RGF0ZSwgSTE4blBsdXJhbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuICogaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIC8vIGFkZGluZyB5b3VyIG93biBhMTF5IHBhcmFtc1xuICogZXhwb3J0IGludGVyZmFjZSBDdXN0b21BMTF5UGFyYW1zIGV4dGVuZHMgQTExeVBhcmFtcyB7XG4gKiAgIGlzRHJTdWVzcz86IGJvb2xlYW47XG4gKiB9XG4gKlxuICogQEluamVjdGFibGUoKVxuICogZXhwb3J0IGNsYXNzIEN1c3RvbUNhbGVuZGFyQTExeSBleHRlbmRzIENhbGVuZGFyQTExeSB7XG4gKiAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuUGx1cmFsOiBJMThuUGx1cmFsUGlwZSkge1xuICogICAgIHN1cGVyKGkxOG5QbHVyYWwpO1xuICogICB9XG4gKlxuICogICAvLyBvdmVycmlkaW5nIGEgZnVuY3Rpb25cbiAqICAgcHVibGljIG9wZW5EYXlFdmVudHNMYW5kbWFyayh7IGRhdGUsIGxvY2FsZSwgaXNEclN1ZXNzIH06IEN1c3RvbUExMXlQYXJhbXMpOiBzdHJpbmcge1xuICogICAgIGlmIChpc0RyU3Vlc3MpIHtcbiAqICAgICAgIHJldHVybiBgXG4gKiAgICAgICAgICR7Zm9ybWF0RGF0ZShkYXRlLCAnRUVFRSBNTU1NIGQnLCBsb2NhbGUpfVxuICogICAgICAgICAgVG9kYXkgeW91IGFyZSB5b3UhIFRoYXQgaXMgdHJ1ZXIgdGhhbiB0cnVlISBUaGVyZSBpcyBubyBvbmUgYWxpdmVcbiAqICAgICAgICAgIHdobyBpcyB5b3UtZXIgdGhhbiB5b3UhXG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgfVxuICogfVxuICpcbiAqIC8vIGluIHlvdXIgY29tcG9uZW50IHRoYXQgdXNlcyB0aGUgY2FsZW5kYXJcbiAqIHByb3ZpZGVyczogW3tcbiAqICBwcm92aWRlOiBDYWxlbmRhckExMXksXG4gKiAgdXNlQ2xhc3M6IEN1c3RvbUNhbGVuZGFyQTExeVxuICogfV1cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYWxlbmRhckExMXkge1xuICAgIHByb3RlY3RlZCBpMThuUGx1cmFsOiBJMThuUGx1cmFsUGlwZTtcbiAgICBjb25zdHJ1Y3RvcihpMThuUGx1cmFsOiBJMThuUGx1cmFsUGlwZSk7XG4gICAgLyoqXG4gICAgICogQXJpYSBsYWJlbCBmb3IgdGhlIGJhZGdlcy9kYXRlIG9mIGEgY2VsbFxuICAgICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOSAxIGV2ZW50IGNsaWNrIHRvIGV4cGFuZGBcbiAgICAgKi9cbiAgICBtb250aENlbGwoeyBkYXksIGxvY2FsZSB9OiBBMTF5UGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFyaWEgbGFiZWwgZm9yIHRoZSBvcGVuIGRheSBldmVudHMgc3RhcnQgbGFuZG1hcmtcbiAgICAgKiBAZXhhbXBsZTogYFNhdHVyZGF5IE9jdG9iZXIgMTkgZXhwYW5kZWQgdmlld2BcbiAgICAgKi9cbiAgICBvcGVuRGF5RXZlbnRzTGFuZG1hcmsoeyBkYXRlLCBsb2NhbGUgfTogQTExeVBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBcmlhIGxhYmVsIGZvciBhbGVydCB0aGF0IGEgZGF5IGluIHRoZSBtb250aCB2aWV3IHdhcyBleHBhbmRlZFxuICAgICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOSBleHBhbmRlZGBcbiAgICAgKi9cbiAgICBvcGVuRGF5RXZlbnRzQWxlcnQoeyBkYXRlLCBsb2NhbGUgfTogQTExeVBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGl2ZSBhcmlhIGxhYmVsIGZvciBhbiBldmVudFxuICAgICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOXRoLCBTY290dCdzIFBpenphIFBhcnR5LCBmcm9tIDExOjAwYW0gdG8gNTowMHBtYFxuICAgICAqL1xuICAgIGV2ZW50RGVzY3JpcHRpb24oeyBldmVudCwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpdmUgYXJpYSBsYWJlbCBmb3IgYW4gYWxsIGRheSBldmVudFxuICAgICAqIEBleGFtcGxlOlxuICAgICAqIGBTY290dCdzIFBhcnR5LCBldmVudCBzcGFucyBtdWx0aXBsZSBkYXlzOiBzdGFydCB0aW1lIE9jdG9iZXIgMTkgNTowMHBtLCBubyBzdG9wIHRpbWVgXG4gICAgICovXG4gICAgYWxsRGF5RXZlbnREZXNjcmlwdGlvbih7IGV2ZW50LCBsb2NhbGUgfTogQTExeVBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBcmlhIGxhYmVsIGZvciB0aGUgY2FsZW5kYXIgZXZlbnQgYWN0aW9ucyBpY29uc1xuICAgICAqIEByZXR1cm5zICdFZGl0JyBmb3IgZmEtcGVuY2lsIGljb25zLCBhbmQgJ0RlbGV0ZScgZm9yIGZhLXRpbWVzIGljb25zXG4gICAgICovXG4gICAgYWN0aW9uQnV0dG9uTGFiZWwoeyBhY3Rpb24gfTogQTExeVBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUYWIgaW5kZXggdG8gYmUgZ2l2ZW4gdG8gbW9udGggY2VsbHNcbiAgICAgKi9cbiAgICBtb250aENlbGxUYWJJbmRleCgpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZXZlbnRzIGluc2lkZSB0aGUgbW9udGggY2VsbCBzaG91bGQgYmUgYXJpYS1oaWRkZW5cbiAgICAgKi9cbiAgICBoaWRlTW9udGhDZWxsRXZlbnRzKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBldmVudCB0aXRsZXMgc2hvdWxkIGJlIGFyaWEtaGlkZGVuIChnbG9iYWwpXG4gICAgICovXG4gICAgaGlkZUV2ZW50VGl0bGUoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGhvdXIgc2VnbWVudHMgaW4gdGhlIHdlZWsgdmlldyBzaG91bGQgYmUgYXJpYS1oaWRkZW5cbiAgICAgKi9cbiAgICBoaWRlV2Vla0hvdXJTZWdtZW50KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBob3VyIHNlZ21lbnRzIGluIHRoZSBkYXkgdmlldyBzaG91bGQgYmUgYXJpYS1oaWRkZW5cbiAgICAgKi9cbiAgICBoaWRlRGF5SG91clNlZ21lbnQoKTogYm9vbGVhbjtcbn1cbiJdfQ==