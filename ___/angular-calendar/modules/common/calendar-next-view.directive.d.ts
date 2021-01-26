import { EventEmitter } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { CalendarView } from './calendar-view.enum';
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class CalendarNextViewDirective {
    private dateAdapter;
    /**
     * The current view
     */
    view: CalendarView | 'month' | 'week' | 'day';
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * Days to skip when going forward by 1 day
     */
    excludeDays: number[];
    /**
     * The number of days in a week. If set will add this amount of days instead of 1 week
     */
    daysInWeek: number;
    /**
     * Called when the view date is changed
     */
    viewDateChange: EventEmitter<Date>;
    constructor(dateAdapter: DateAdapter);
    /**
     * @hidden
     */
    onClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarNextViewDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CalendarNextViewDirective, "[mwlCalendarNextView]", never, {
    "excludeDays": "excludeDays";
    "view": "view";
    "viewDate": "viewDate";
    "daysInWeek": "daysInWeek";
}, {
    "viewDateChange": "viewDateChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbmV4dC12aWV3LmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci1uZXh0LXZpZXcuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IENhbGVuZGFyVmlldyB9IGZyb20gJy4vY2FsZW5kYXItdmlldy5lbnVtJztcbi8qKlxuICogQ2hhbmdlIHRoZSB2aWV3IGRhdGUgdG8gdGhlIG5leHQgdmlldy4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPGJ1dHRvblxuICogIG13bENhbGVuZGFyTmV4dFZpZXdcbiAqICBbKHZpZXdEYXRlKV09XCJ2aWV3RGF0ZVwiXG4gKiAgW3ZpZXddPVwidmlld1wiPlxuICogIE5leHRcbiAqIDwvYnV0dG9uPlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyTmV4dFZpZXdEaXJlY3RpdmUge1xuICAgIHByaXZhdGUgZGF0ZUFkYXB0ZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgdmlld1xuICAgICAqL1xuICAgIHZpZXc6IENhbGVuZGFyVmlldyB8ICdtb250aCcgfCAnd2VlaycgfCAnZGF5JztcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICAgKi9cbiAgICB2aWV3RGF0ZTogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBEYXlzIHRvIHNraXAgd2hlbiBnb2luZyBmb3J3YXJkIGJ5IDEgZGF5XG4gICAgICovXG4gICAgZXhjbHVkZURheXM6IG51bWJlcltdO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHdlZWsuIElmIHNldCB3aWxsIGFkZCB0aGlzIGFtb3VudCBvZiBkYXlzIGluc3RlYWQgb2YgMSB3ZWVrXG4gICAgICovXG4gICAgZGF5c0luV2VlazogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3IGRhdGUgaXMgY2hhbmdlZFxuICAgICAqL1xuICAgIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT47XG4gICAgY29uc3RydWN0b3IoZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgb25DbGljaygpOiB2b2lkO1xufVxuIl19