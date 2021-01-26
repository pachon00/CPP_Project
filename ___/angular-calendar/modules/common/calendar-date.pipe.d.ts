import { PipeTransform } from '@angular/core';
import { CalendarDateFormatter } from './calendar-date-formatter.provider';
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class CalendarDatePipe implements PipeTransform {
    private dateFormatter;
    private locale;
    constructor(dateFormatter: CalendarDateFormatter, locale: string);
    transform(date: Date, method: string, locale?: string, weekStartsOn?: number, excludeDays?: number[], daysInWeek?: number): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarDatePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CalendarDatePipe, "calendarDate">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF0ZS5waXBlLmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLWRhdGUucGlwZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuLyoqXG4gKiBUaGlzIHBpcGUgaXMgcHJpbWFyaWx5IGZvciByZW5kZXJpbmcgdGhlIGN1cnJlbnQgdmlldyB0aXRsZS4gRXhhbXBsZSB1c2FnZTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIC8vIHdoZXJlIGB2aWV3RGF0ZWAgaXMgYSBgRGF0ZWAgYW5kIHZpZXcgaXMgYCdtb250aCcgfCAnd2VlaycgfCAnZGF5J2BcbiAqIHt7IHZpZXdEYXRlIHwgY2FsZW5kYXJEYXRlOih2aWV3ICsgJ1ZpZXdUaXRsZScpOidlbicgfX1cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYWxlbmRhckRhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgcHJpdmF0ZSBkYXRlRm9ybWF0dGVyO1xuICAgIHByaXZhdGUgbG9jYWxlO1xuICAgIGNvbnN0cnVjdG9yKGRhdGVGb3JtYXR0ZXI6IENhbGVuZGFyRGF0ZUZvcm1hdHRlciwgbG9jYWxlOiBzdHJpbmcpO1xuICAgIHRyYW5zZm9ybShkYXRlOiBEYXRlLCBtZXRob2Q6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nLCB3ZWVrU3RhcnRzT24/OiBudW1iZXIsIGV4Y2x1ZGVEYXlzPzogbnVtYmVyW10sIGRheXNJbldlZWs/OiBudW1iZXIpOiBzdHJpbmc7XG59XG4iXX0=