import * as tslib_1 from "tslib";
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import { CalendarDateFormatter } from './calendar-date-formatter.provider';
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDatePipe.prototype.transform = function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
        if (locale === void 0) { locale = this.locale; }
        if (weekStartsOn === void 0) { weekStartsOn = 0; }
        if (excludeDays === void 0) { excludeDays = []; }
        if (typeof this.dateFormatter[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
            throw new Error(method + " is not a valid date formatter. Can only be one of " + allowedMethods.join(', '));
        }
        return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
        });
    };
    CalendarDatePipe.ctorParameters = function () { return [
        { type: CalendarDateFormatter },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    CalendarDatePipe = tslib_1.__decorate([
        Pipe({
            name: 'calendarDate'
        }),
        tslib_1.__param(1, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [CalendarDateFormatter, String])
    ], CalendarDatePipe);
    return CalendarDatePipe;
}());
export { CalendarDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUzRTs7Ozs7O0dBTUc7QUFJSDtJQUNFLDBCQUNVLGFBQW9DLEVBQ2pCLE1BQWM7UUFEakMsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDeEMsQ0FBQztJQUVKLG9DQUFTLEdBQVQsVUFDRSxJQUFVLEVBQ1YsTUFBYyxFQUNkLE1BQTRCLEVBQzVCLFlBQXdCLEVBQ3hCLFdBQTBCLEVBQzFCLFVBQW1CO1FBSG5CLHVCQUFBLEVBQUEsU0FBaUIsSUFBSSxDQUFDLE1BQU07UUFDNUIsNkJBQUEsRUFBQSxnQkFBd0I7UUFDeEIsNEJBQUEsRUFBQSxnQkFBMEI7UUFHMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ3JELElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDL0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FDdkQsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLEtBQUssYUFBYSxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FDVixNQUFNLDJEQUFzRCxjQUFjLENBQUMsSUFBSSxDQUNoRixJQUFJLENBQ0gsQ0FDSixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsSUFBSSxNQUFBO1lBQ0osTUFBTSxRQUFBO1lBQ04sWUFBWSxjQUFBO1lBQ1osV0FBVyxhQUFBO1lBQ1gsVUFBVSxZQUFBO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBN0J3QixxQkFBcUI7NkNBQzNDLE1BQU0sU0FBQyxTQUFTOztJQUhSLGdCQUFnQjtRQUg1QixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsY0FBYztTQUNyQixDQUFDO1FBSUcsbUJBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2lEQURLLHFCQUFxQjtPQUZuQyxnQkFBZ0IsQ0FnQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQWhDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBMT0NBTEVfSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5cbi8qKlxuICogVGhpcyBwaXBlIGlzIHByaW1hcmlseSBmb3IgcmVuZGVyaW5nIHRoZSBjdXJyZW50IHZpZXcgdGl0bGUuIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyB3aGVyZSBgdmlld0RhdGVgIGlzIGEgYERhdGVgIGFuZCB2aWV3IGlzIGAnbW9udGgnIHwgJ3dlZWsnIHwgJ2RheSdgXG4gKiB7eyB2aWV3RGF0ZSB8IGNhbGVuZGFyRGF0ZToodmlldyArICdWaWV3VGl0bGUnKTonZW4nIH19XG4gKiBgYGBcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnY2FsZW5kYXJEYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0ZUZvcm1hdHRlcjogQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nXG4gICkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZTogRGF0ZSxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLFxuICAgIHdlZWtTdGFydHNPbjogbnVtYmVyID0gMCxcbiAgICBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXSxcbiAgICBkYXlzSW5XZWVrPzogbnVtYmVyXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmRhdGVGb3JtYXR0ZXJbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGFsbG93ZWRNZXRob2RzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoXG4gICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihDYWxlbmRhckRhdGVGb3JtYXR0ZXIucHJvdG90eXBlKVxuICAgICAgKS5maWx0ZXIoaU1ldGhvZCA9PiBpTWV0aG9kICE9PSAnY29uc3RydWN0b3InKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7bWV0aG9kfSBpcyBub3QgYSB2YWxpZCBkYXRlIGZvcm1hdHRlci4gQ2FuIG9ubHkgYmUgb25lIG9mICR7YWxsb3dlZE1ldGhvZHMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlclttZXRob2RdKHtcbiAgICAgIGRhdGUsXG4gICAgICBsb2NhbGUsXG4gICAgICB3ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlRGF5cyxcbiAgICAgIGRheXNJbldlZWtcbiAgICB9KTtcbiAgfVxufVxuIl19