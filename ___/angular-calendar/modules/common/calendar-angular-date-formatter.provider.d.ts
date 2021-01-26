import { CalendarDateFormatterInterface, DateFormatterParams } from './calendar-date-formatter.interface';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CalendarAngularDateFormatter implements CalendarDateFormatterInterface {
    protected dateAdapter: DateAdapter;
    constructor(dateAdapter: DateAdapter);
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }: DateFormatterParams): string;
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }: DateFormatterParams): string;
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }: DateFormatterParams): string;
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }: DateFormatterParams): string;
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale }: DateFormatterParams): string;
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek }: DateFormatterParams): string;
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }: DateFormatterParams): string;
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }: DateFormatterParams): string;
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }: DateFormatterParams): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarAngularDateFormatter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CalendarAngularDateFormatter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYW5ndWxhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlci5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci1hbmd1bGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlckludGVyZmFjZSwgRGF0ZUZvcm1hdHRlclBhcmFtcyB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuLyoqXG4gKiBUaGlzIHdpbGwgdXNlIHRoZSBhbmd1bGFyIGRhdGUgcGlwZSB0byBkbyBhbGwgZGF0ZSBmb3JtYXR0aW5nLiBJdCBpcyB0aGUgZGVmYXVsdCBkYXRlIGZvcm1hdHRlciB1c2VkIGJ5IHRoZSBjYWxlbmRhci5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJBbmd1bGFyRGF0ZUZvcm1hdHRlciBpbXBsZW1lbnRzIENhbGVuZGFyRGF0ZUZvcm1hdHRlckludGVyZmFjZSB7XG4gICAgcHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpO1xuICAgIC8qKlxuICAgICAqIFRoZSBtb250aCB2aWV3IGhlYWRlciB3ZWVrIGRheSBsYWJlbHNcbiAgICAgKi9cbiAgICBtb250aFZpZXdDb2x1bW5IZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbW9udGggdmlldyBjZWxsIGRheSBudW1iZXJcbiAgICAgKi9cbiAgICBtb250aFZpZXdEYXlOdW1iZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbW9udGggdmlldyB0aXRsZVxuICAgICAqL1xuICAgIG1vbnRoVmlld1RpdGxlKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHdlZWsgdmlldyBoZWFkZXIgd2VlayBkYXkgbGFiZWxzXG4gICAgICovXG4gICAgd2Vla1ZpZXdDb2x1bW5IZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgd2VlayB2aWV3IHN1YiBoZWFkZXIgZGF5IGFuZCBtb250aCBsYWJlbHNcbiAgICAgKi9cbiAgICB3ZWVrVmlld0NvbHVtblN1YkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB3ZWVrIHZpZXcgdGl0bGVcbiAgICAgKi9cbiAgICB3ZWVrVmlld1RpdGxlKHsgZGF0ZSwgbG9jYWxlLCB3ZWVrU3RhcnRzT24sIGV4Y2x1ZGVEYXlzLCBkYXlzSW5XZWVrIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgZm9ybWF0dGluZyBkb3duIHRoZSBsZWZ0IGhhbmQgc2lkZSBvZiB0aGUgd2VlayB2aWV3XG4gICAgICovXG4gICAgd2Vla1ZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgZm9ybWF0dGluZyBkb3duIHRoZSBsZWZ0IGhhbmQgc2lkZSBvZiB0aGUgZGF5IHZpZXdcbiAgICAgKi9cbiAgICBkYXlWaWV3SG91cih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXkgdmlldyB0aXRsZVxuICAgICAqL1xuICAgIGRheVZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xufVxuIl19