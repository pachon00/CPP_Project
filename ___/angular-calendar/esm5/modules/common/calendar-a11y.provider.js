import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { formatDate, I18nPluralPipe } from '@angular/common';
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
var CalendarA11y = /** @class */ (function () {
    function CalendarA11y(i18nPlural) {
        this.i18nPlural = i18nPlural;
    }
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */
    CalendarA11y.prototype.monthCell = function (_a) {
        var day = _a.day, locale = _a.locale;
        if (day.badgeTotal > 0) {
            return "\n        " + formatDate(day.date, 'EEEE MMMM d', locale) + ",\n        " + this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events'
            }) + ",\n         click to expand\n      ";
        }
        else {
            return "" + formatDate(day.date, 'EEEE MMMM d', locale);
        }
    };
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */
    CalendarA11y.prototype.openDayEventsLandmark = function (_a) {
        var date = _a.date, locale = _a.locale;
        return "\n      Beginning of expanded view for " + formatDate(date, 'EEEE MMMM dd', locale) + "\n    ";
    };
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */
    CalendarA11y.prototype.openDayEventsAlert = function (_a) {
        var date = _a.date, locale = _a.locale;
        return formatDate(date, 'EEEE MMMM dd', locale) + " expanded";
    };
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */
    CalendarA11y.prototype.eventDescription = function (_a) {
        var event = _a.event, locale = _a.locale;
        if (event.allDay === true) {
            return this.allDayEventDescription({ event: event, locale: locale });
        }
        var aria = "\n      " + formatDate(event.start, 'EEEE MMMM dd', locale) + ",\n      " + event.title + ", from " + formatDate(event.start, 'hh:mm a', locale) + "\n    ";
        if (event.end) {
            return aria + (" to " + formatDate(event.end, 'hh:mm a', locale));
        }
        return aria;
    };
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */
    CalendarA11y.prototype.allDayEventDescription = function (_a) {
        var event = _a.event, locale = _a.locale;
        var aria = "\n      " + event.title + ", event spans multiple days:\n      start time " + formatDate(event.start, 'MMMM dd hh:mm a', locale) + "\n    ";
        if (event.end) {
            return (aria + (", stop time " + formatDate(event.end, 'MMMM d hh:mm a', locale)));
        }
        return aria + ", no stop time";
    };
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */
    CalendarA11y.prototype.actionButtonLabel = function (_a) {
        var action = _a.action;
        return action.a11yLabel;
    };
    /**
     * @returns {number} Tab index to be given to month cells
     */
    CalendarA11y.prototype.monthCellTabIndex = function () {
        return 0;
    };
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */
    CalendarA11y.prototype.hideMonthCellEvents = function () {
        return true;
    };
    /**
     * @returns true if event titles should be aria-hidden (global)
     */
    CalendarA11y.prototype.hideEventTitle = function () {
        return true;
    };
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */
    CalendarA11y.prototype.hideWeekHourSegment = function () {
        return true;
    };
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */
    CalendarA11y.prototype.hideDayHourSegment = function () {
        return true;
    };
    CalendarA11y.ctorParameters = function () { return [
        { type: I18nPluralPipe }
    ]; };
    CalendarA11y = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [I18nPluralPipe])
    ], CalendarA11y);
    return CalendarA11y;
}());
export { CalendarA11y };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYTExeS5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY2FsZW5kYXIvIiwic291cmNlcyI6WyJtb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1hMTF5LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDRztBQUVIO0lBQ0Usc0JBQXNCLFVBQTBCO1FBQTFCLGVBQVUsR0FBVixVQUFVLENBQWdCO0lBQUcsQ0FBQztJQUVwRDs7O09BR0c7SUFDSSxnQ0FBUyxHQUFoQixVQUFpQixFQUEyQjtZQUF6QixZQUFHLEVBQUUsa0JBQU07UUFDNUIsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLGVBQ0gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxtQkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtnQkFDMUMsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsVUFBVTthQUNsQixDQUFDLHdDQUVILENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxLQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUcsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSw0Q0FBcUIsR0FBNUIsVUFBNkIsRUFBNEI7WUFBMUIsY0FBSSxFQUFFLGtCQUFNO1FBQ3pDLE9BQU8sNENBQzRCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxXQUMxRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNJLHlDQUFrQixHQUF6QixVQUEwQixFQUE0QjtZQUExQixjQUFJLEVBQUUsa0JBQU07UUFDdEMsT0FBVSxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsY0FBVyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7SUFDSSx1Q0FBZ0IsR0FBdkIsVUFBd0IsRUFBNkI7WUFBM0IsZ0JBQUssRUFBRSxrQkFBTTtRQUNyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBTSxJQUFJLEdBQUcsYUFDVCxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLGlCQUMvQyxLQUFLLENBQUMsS0FBSyxlQUFVLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FDbEUsQ0FBQztRQUNGLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxJQUFHLFNBQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBRyxDQUFBLENBQUM7U0FDakU7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksNkNBQXNCLEdBQTdCLFVBQThCLEVBQTZCO1lBQTNCLGdCQUFLLEVBQUUsa0JBQU07UUFDM0MsSUFBTSxJQUFJLEdBQUcsYUFDVCxLQUFLLENBQUMsS0FBSyx1REFDQSxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsV0FDaEUsQ0FBQztRQUNGLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FDTCxJQUFJLElBQUcsaUJBQWUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxDQUFHLENBQUEsQ0FDeEUsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHdDQUFpQixHQUF4QixVQUF5QixFQUFzQjtZQUFwQixrQkFBTTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksd0NBQWlCLEdBQXhCO1FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7SUFDSSwwQ0FBbUIsR0FBMUI7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNJLHFDQUFjLEdBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSSwwQ0FBbUIsR0FBMUI7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNJLHlDQUFrQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBdEhpQyxjQUFjOztJQURyQyxZQUFZO1FBRHhCLFVBQVUsRUFBRTtpREFFdUIsY0FBYztPQURyQyxZQUFZLENBd0h4QjtJQUFELG1CQUFDO0NBQUEsQUF4SEQsSUF3SEM7U0F4SFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdERhdGUsIEkxOG5QbHVyYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEExMXlQYXJhbXMgfSBmcm9tICcuL2NhbGVuZGFyLWExMXkuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBhZGRpbmcgYWNjZXNzaWJpbGl0eSB0byB0aGUgY2FsZW5kYXIuXG4gKiBZb3UgbWF5IG92ZXJyaWRlIGFueSBvZiBpdHMgbWV0aG9kcyB2aWEgYW5ndWxhcnMgREkgdG8gc3VpdCB5b3VyIHJlcXVpcmVtZW50cy5cbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEExMXlQYXJhbXMsIENhbGVuZGFyQTExeSB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuICogaW1wb3J0IHsgZm9ybWF0RGF0ZSwgSTE4blBsdXJhbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuICogaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIC8vIGFkZGluZyB5b3VyIG93biBhMTF5IHBhcmFtc1xuICogZXhwb3J0IGludGVyZmFjZSBDdXN0b21BMTF5UGFyYW1zIGV4dGVuZHMgQTExeVBhcmFtcyB7XG4gKiAgIGlzRHJTdWVzcz86IGJvb2xlYW47XG4gKiB9XG4gKlxuICogQEluamVjdGFibGUoKVxuICogZXhwb3J0IGNsYXNzIEN1c3RvbUNhbGVuZGFyQTExeSBleHRlbmRzIENhbGVuZGFyQTExeSB7XG4gKiAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuUGx1cmFsOiBJMThuUGx1cmFsUGlwZSkge1xuICogICAgIHN1cGVyKGkxOG5QbHVyYWwpO1xuICogICB9XG4gKlxuICogICAvLyBvdmVycmlkaW5nIGEgZnVuY3Rpb25cbiAqICAgcHVibGljIG9wZW5EYXlFdmVudHNMYW5kbWFyayh7IGRhdGUsIGxvY2FsZSwgaXNEclN1ZXNzIH06IEN1c3RvbUExMXlQYXJhbXMpOiBzdHJpbmcge1xuICogICAgIGlmIChpc0RyU3Vlc3MpIHtcbiAqICAgICAgIHJldHVybiBgXG4gKiAgICAgICAgICR7Zm9ybWF0RGF0ZShkYXRlLCAnRUVFRSBNTU1NIGQnLCBsb2NhbGUpfVxuICogICAgICAgICAgVG9kYXkgeW91IGFyZSB5b3UhIFRoYXQgaXMgdHJ1ZXIgdGhhbiB0cnVlISBUaGVyZSBpcyBubyBvbmUgYWxpdmVcbiAqICAgICAgICAgIHdobyBpcyB5b3UtZXIgdGhhbiB5b3UhXG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgfVxuICogfVxuICpcbiAqIC8vIGluIHlvdXIgY29tcG9uZW50IHRoYXQgdXNlcyB0aGUgY2FsZW5kYXJcbiAqIHByb3ZpZGVyczogW3tcbiAqICBwcm92aWRlOiBDYWxlbmRhckExMXksXG4gKiAgdXNlQ2xhc3M6IEN1c3RvbUNhbGVuZGFyQTExeVxuICogfV1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJBMTF5IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG5QbHVyYWw6IEkxOG5QbHVyYWxQaXBlKSB7fVxuXG4gIC8qKlxuICAgKiBBcmlhIGxhYmVsIGZvciB0aGUgYmFkZ2VzL2RhdGUgb2YgYSBjZWxsXG4gICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOSAxIGV2ZW50IGNsaWNrIHRvIGV4cGFuZGBcbiAgICovXG4gIHB1YmxpYyBtb250aENlbGwoeyBkYXksIGxvY2FsZSB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBpZiAoZGF5LmJhZGdlVG90YWwgPiAwKSB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICAke2Zvcm1hdERhdGUoZGF5LmRhdGUsICdFRUVFIE1NTU0gZCcsIGxvY2FsZSl9LFxuICAgICAgICAke3RoaXMuaTE4blBsdXJhbC50cmFuc2Zvcm0oZGF5LmJhZGdlVG90YWwsIHtcbiAgICAgICAgICAnPTAnOiAnTm8gZXZlbnRzJyxcbiAgICAgICAgICAnPTEnOiAnT25lIGV2ZW50JyxcbiAgICAgICAgICBvdGhlcjogJyMgZXZlbnRzJ1xuICAgICAgICB9KX0sXG4gICAgICAgICBjbGljayB0byBleHBhbmRcbiAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHtmb3JtYXREYXRlKGRheS5kYXRlLCAnRUVFRSBNTU1NIGQnLCBsb2NhbGUpfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFyaWEgbGFiZWwgZm9yIHRoZSBvcGVuIGRheSBldmVudHMgc3RhcnQgbGFuZG1hcmtcbiAgICogQGV4YW1wbGU6IGBTYXR1cmRheSBPY3RvYmVyIDE5IGV4cGFuZGVkIHZpZXdgXG4gICAqL1xuICBwdWJsaWMgb3BlbkRheUV2ZW50c0xhbmRtYXJrKHsgZGF0ZSwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICBCZWdpbm5pbmcgb2YgZXhwYW5kZWQgdmlldyBmb3IgJHtmb3JtYXREYXRlKGRhdGUsICdFRUVFIE1NTU0gZGQnLCBsb2NhbGUpfVxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogQXJpYSBsYWJlbCBmb3IgYWxlcnQgdGhhdCBhIGRheSBpbiB0aGUgbW9udGggdmlldyB3YXMgZXhwYW5kZWRcbiAgICogQGV4YW1wbGU6IGBTYXR1cmRheSBPY3RvYmVyIDE5IGV4cGFuZGVkYFxuICAgKi9cbiAgcHVibGljIG9wZW5EYXlFdmVudHNBbGVydCh7IGRhdGUsIGxvY2FsZSB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7Zm9ybWF0RGF0ZShkYXRlLCAnRUVFRSBNTU1NIGRkJywgbG9jYWxlKX0gZXhwYW5kZWRgO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aXZlIGFyaWEgbGFiZWwgZm9yIGFuIGV2ZW50XG4gICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOXRoLCBTY290dCdzIFBpenphIFBhcnR5LCBmcm9tIDExOjAwYW0gdG8gNTowMHBtYFxuICAgKi9cbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24oeyBldmVudCwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGlmIChldmVudC5hbGxEYXkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbERheUV2ZW50RGVzY3JpcHRpb24oeyBldmVudCwgbG9jYWxlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFyaWEgPSBgXG4gICAgICAke2Zvcm1hdERhdGUoZXZlbnQuc3RhcnQsICdFRUVFIE1NTU0gZGQnLCBsb2NhbGUpfSxcbiAgICAgICR7ZXZlbnQudGl0bGV9LCBmcm9tICR7Zm9ybWF0RGF0ZShldmVudC5zdGFydCwgJ2hoOm1tIGEnLCBsb2NhbGUpfVxuICAgIGA7XG4gICAgaWYgKGV2ZW50LmVuZCkge1xuICAgICAgcmV0dXJuIGFyaWEgKyBgIHRvICR7Zm9ybWF0RGF0ZShldmVudC5lbmQsICdoaDptbSBhJywgbG9jYWxlKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYXJpYTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGl2ZSBhcmlhIGxhYmVsIGZvciBhbiBhbGwgZGF5IGV2ZW50XG4gICAqIEBleGFtcGxlOlxuICAgKiBgU2NvdHQncyBQYXJ0eSwgZXZlbnQgc3BhbnMgbXVsdGlwbGUgZGF5czogc3RhcnQgdGltZSBPY3RvYmVyIDE5IDU6MDBwbSwgbm8gc3RvcCB0aW1lYFxuICAgKi9cbiAgcHVibGljIGFsbERheUV2ZW50RGVzY3JpcHRpb24oeyBldmVudCwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGFyaWEgPSBgXG4gICAgICAke2V2ZW50LnRpdGxlfSwgZXZlbnQgc3BhbnMgbXVsdGlwbGUgZGF5czpcbiAgICAgIHN0YXJ0IHRpbWUgJHtmb3JtYXREYXRlKGV2ZW50LnN0YXJ0LCAnTU1NTSBkZCBoaDptbSBhJywgbG9jYWxlKX1cbiAgICBgO1xuICAgIGlmIChldmVudC5lbmQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFyaWEgKyBgLCBzdG9wIHRpbWUgJHtmb3JtYXREYXRlKGV2ZW50LmVuZCwgJ01NTU0gZCBoaDptbSBhJywgbG9jYWxlKX1gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYXJpYSArIGAsIG5vIHN0b3AgdGltZWA7XG4gIH1cblxuICAvKipcbiAgICogQXJpYSBsYWJlbCBmb3IgdGhlIGNhbGVuZGFyIGV2ZW50IGFjdGlvbnMgaWNvbnNcbiAgICogQHJldHVybnMgJ0VkaXQnIGZvciBmYS1wZW5jaWwgaWNvbnMsIGFuZCAnRGVsZXRlJyBmb3IgZmEtdGltZXMgaWNvbnNcbiAgICovXG4gIHB1YmxpYyBhY3Rpb25CdXR0b25MYWJlbCh7IGFjdGlvbiB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYWN0aW9uLmExMXlMYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUYWIgaW5kZXggdG8gYmUgZ2l2ZW4gdG8gbW9udGggY2VsbHNcbiAgICovXG4gIHB1YmxpYyBtb250aENlbGxUYWJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGV2ZW50cyBpbnNpZGUgdGhlIG1vbnRoIGNlbGwgc2hvdWxkIGJlIGFyaWEtaGlkZGVuXG4gICAqL1xuICBwdWJsaWMgaGlkZU1vbnRoQ2VsbEV2ZW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGV2ZW50IHRpdGxlcyBzaG91bGQgYmUgYXJpYS1oaWRkZW4gKGdsb2JhbClcbiAgICovXG4gIHB1YmxpYyBoaWRlRXZlbnRUaXRsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGhvdXIgc2VnbWVudHMgaW4gdGhlIHdlZWsgdmlldyBzaG91bGQgYmUgYXJpYS1oaWRkZW5cbiAgICovXG4gIHB1YmxpYyBoaWRlV2Vla0hvdXJTZWdtZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaG91ciBzZWdtZW50cyBpbiB0aGUgZGF5IHZpZXcgc2hvdWxkIGJlIGFyaWEtaGlkZGVuXG4gICAqL1xuICBwdWJsaWMgaGlkZURheUhvdXJTZWdtZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=