import { InjectionToken } from '@angular/core';
import { CalendarDateFormatterInterface, DateFormatterParams } from './calendar-date-formatter.interface';
import { DateAdapter } from '../../date-adapters/date-adapter';
import * as ɵngcc0 from '@angular/core';
export declare const MOMENT: InjectionToken<string>;
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
export declare class CalendarMomentDateFormatter implements CalendarDateFormatterInterface {
    protected moment: any;
    protected dateAdapter: DateAdapter;
    /**
     * @hidden
     */
    constructor(moment: any, dateAdapter: DateAdapter);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarMomentDateFormatter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CalendarMomentDateFormatter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9tZW50LWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLW1vbWVudC1kYXRlLWZvcm1hdHRlci5wcm92aWRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlckludGVyZmFjZSwgRGF0ZUZvcm1hdHRlclBhcmFtcyB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgTU9NRU5UOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+O1xuLyoqXG4gKiBUaGlzIHdpbGwgdXNlIDxhIGhyZWY9XCJodHRwOi8vbW9tZW50anMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPm1vbWVudDwvYT4gdG8gZG8gYWxsIGRhdGUgZm9ybWF0dGluZy4gVG8gdXNlIHRoaXMgY2xhc3M6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLCBDYWxlbmRhck1vbWVudERhdGVGb3JtYXR0ZXIsIE1PTUVOVCB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuICogaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuICpcbiAqIC8vIGluIHlvdXIgY29tcG9uZW50XG4gKiBwcm92aWRlOiBbe1xuICogICBwcm92aWRlOiBNT01FTlQsIHVzZVZhbHVlOiBtb21lbnRcbiAqIH0sIHtcbiAqICAgcHJvdmlkZTogQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLCB1c2VDbGFzczogQ2FsZW5kYXJNb21lbnREYXRlRm9ybWF0dGVyXG4gKiB9XVxuICpcbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYWxlbmRhck1vbWVudERhdGVGb3JtYXR0ZXIgaW1wbGVtZW50cyBDYWxlbmRhckRhdGVGb3JtYXR0ZXJJbnRlcmZhY2Uge1xuICAgIHByb3RlY3RlZCBtb21lbnQ6IGFueTtcbiAgICBwcm90ZWN0ZWQgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihtb21lbnQ6IGFueSwgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKTtcbiAgICAvKipcbiAgICAgKiBUaGUgbW9udGggdmlldyBoZWFkZXIgd2VlayBkYXkgbGFiZWxzXG4gICAgICovXG4gICAgbW9udGhWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG1vbnRoIHZpZXcgY2VsbCBkYXkgbnVtYmVyXG4gICAgICovXG4gICAgbW9udGhWaWV3RGF5TnVtYmVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG1vbnRoIHZpZXcgdGl0bGVcbiAgICAgKi9cbiAgICBtb250aFZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB3ZWVrIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgICAqL1xuICAgIHdlZWtWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHdlZWsgdmlldyBzdWIgaGVhZGVyIGRheSBhbmQgbW9udGggbGFiZWxzXG4gICAgICovXG4gICAgd2Vla1ZpZXdDb2x1bW5TdWJIZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgd2VlayB2aWV3IHRpdGxlXG4gICAgICovXG4gICAgd2Vla1ZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSwgd2Vla1N0YXJ0c09uLCBleGNsdWRlRGF5cywgZGF5c0luV2VlayB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIHdlZWsgdmlld1xuICAgICAqL1xuICAgIHdlZWtWaWV3SG91cih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIGRheSB2aWV3XG4gICAgICovXG4gICAgZGF5Vmlld0hvdXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZGF5IHZpZXcgdGl0bGVcbiAgICAgKi9cbiAgICBkYXlWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZztcbn1cbiJdfQ==