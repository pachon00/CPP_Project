import { CalendarDateFormatterInterface, DateFormatterParams } from './calendar-date-formatter.interface';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CalendarNativeDateFormatter implements CalendarDateFormatterInterface {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarNativeDateFormatter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CalendarNativeDateFormatter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbmF0aXZlLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLW5hdGl2ZS1kYXRlLWZvcm1hdHRlci5wcm92aWRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlckludGVyZmFjZSwgRGF0ZUZvcm1hdHRlclBhcmFtcyB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuLyoqXG4gKiBUaGlzIHdpbGwgdXNlIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SW50bDwvYT4gQVBJIHRvIGRvIGFsbCBkYXRlIGZvcm1hdHRpbmcuXG4gKlxuICogWW91IHdpbGwgbmVlZCB0byBpbmNsdWRlIGEgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5ZWFybnNoYXcvSW50bC5qcy9cIj5wb2x5ZmlsbDwvYT4gZm9yIG9sZGVyIGJyb3dzZXJzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYWxlbmRhck5hdGl2ZURhdGVGb3JtYXR0ZXIgaW1wbGVtZW50cyBDYWxlbmRhckRhdGVGb3JtYXR0ZXJJbnRlcmZhY2Uge1xuICAgIHByb3RlY3RlZCBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKTtcbiAgICAvKipcbiAgICAgKiBUaGUgbW9udGggdmlldyBoZWFkZXIgd2VlayBkYXkgbGFiZWxzXG4gICAgICovXG4gICAgbW9udGhWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG1vbnRoIHZpZXcgY2VsbCBkYXkgbnVtYmVyXG4gICAgICovXG4gICAgbW9udGhWaWV3RGF5TnVtYmVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG1vbnRoIHZpZXcgdGl0bGVcbiAgICAgKi9cbiAgICBtb250aFZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB3ZWVrIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgICAqL1xuICAgIHdlZWtWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHdlZWsgdmlldyBzdWIgaGVhZGVyIGRheSBhbmQgbW9udGggbGFiZWxzXG4gICAgICovXG4gICAgd2Vla1ZpZXdDb2x1bW5TdWJIZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgd2VlayB2aWV3IHRpdGxlXG4gICAgICovXG4gICAgd2Vla1ZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSwgd2Vla1N0YXJ0c09uLCBleGNsdWRlRGF5cywgZGF5c0luV2VlayB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIHdlZWsgdmlld1xuICAgICAqL1xuICAgIHdlZWtWaWV3SG91cih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIGRheSB2aWV3XG4gICAgICovXG4gICAgZGF5Vmlld0hvdXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZGF5IHZpZXcgdGl0bGVcbiAgICAgKi9cbiAgICBkYXlWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbn1cbiJdfQ==