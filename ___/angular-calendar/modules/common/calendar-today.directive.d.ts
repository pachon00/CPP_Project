import { EventEmitter } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class CalendarTodayDirective {
    private dateAdapter;
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * Called when the view date is changed
     */
    viewDateChange: EventEmitter<Date>;
    constructor(dateAdapter: DateAdapter);
    /**
     * @hidden
     */
    onClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarTodayDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CalendarTodayDirective, "[mwlCalendarToday]", never, {
    "viewDate": "viewDate";
}, {
    "viewDateChange": "viewDateChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdG9kYXkuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLXRvZGF5LmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG4vKipcbiAqIENoYW5nZSB0aGUgdmlldyBkYXRlIHRvIHRoZSBjdXJyZW50IGRheS4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPGJ1dHRvblxuICogIG13bENhbGVuZGFyVG9kYXlcbiAqICBbKHZpZXdEYXRlKV09XCJ2aWV3RGF0ZVwiPlxuICogIFRvZGF5XG4gKiA8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYWxlbmRhclRvZGF5RGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIGRhdGVBZGFwdGVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHZpZXcgZGF0ZVxuICAgICAqL1xuICAgIHZpZXdEYXRlOiBEYXRlO1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3IGRhdGUgaXMgY2hhbmdlZFxuICAgICAqL1xuICAgIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT47XG4gICAgY29uc3RydWN0b3IoZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgb25DbGljaygpOiB2b2lkO1xufVxuIl19