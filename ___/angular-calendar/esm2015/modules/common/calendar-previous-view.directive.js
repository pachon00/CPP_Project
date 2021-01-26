import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { CalendarView } from './calendar-view.enum';
import { addDaysWithExclusions } from './util';
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
let CalendarPreviousViewDirective = class CalendarPreviousViewDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        const subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    }
};
CalendarPreviousViewDirective.ctorParameters = () => [
    { type: DateAdapter }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CalendarPreviousViewDirective.prototype, "view", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Date)
], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
tslib_1.__decorate([
    HostListener('click'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CalendarPreviousViewDirective.prototype, "onClick", null);
CalendarPreviousViewDirective = tslib_1.__decorate([
    Directive({
        selector: '[mwlCalendarPreviousView]'
    }),
    tslib_1.__metadata("design:paramtypes", [DateAdapter])
], CalendarPreviousViewDirective);
export { CalendarPreviousViewDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcHJldmlvdXMtdmlldy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24vY2FsZW5kYXItcHJldmlvdXMtdmlldy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRS9DOzs7Ozs7Ozs7OztHQVdHO0FBSUgsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUEwQnhDLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBZjVDOztXQUVHO1FBQ00sZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFPcEM7O1dBRUc7UUFDTyxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFaEQ7O09BRUc7SUFFSCxPQUFPO1FBQ0wsTUFBTSxLQUFLLEdBQVE7WUFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTztZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO1lBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVM7U0FDbEMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFYixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDdEIscUJBQXFCLENBQ25CLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQ2IsQ0FBQyxDQUFDLEVBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FDRixDQUFDO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixxQkFBcUIsQ0FDbkIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFFBQVEsRUFDYixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ2hCLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbkNrQyxXQUFXOztBQXRCbkM7SUFBUixLQUFLLEVBQUU7OzJEQUErQztBQUs5QztJQUFSLEtBQUssRUFBRTtzQ0FBVyxJQUFJOytEQUFDO0FBS2Y7SUFBUixLQUFLLEVBQUU7O2tFQUE0QjtBQUszQjtJQUFSLEtBQUssRUFBRTs7aUVBQW9CO0FBS2xCO0lBQVQsTUFBTSxFQUFFO3NDQUFpQixZQUFZO3FFQUE0QjtBQVFsRTtJQURDLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7NERBNkJyQjtBQTVEVSw2QkFBNkI7SUFIekMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtLQUN0QyxDQUFDOzZDQTJCaUMsV0FBVztHQTFCakMsNkJBQTZCLENBNkR6QztTQTdEWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcgfSBmcm9tICcuL2NhbGVuZGFyLXZpZXcuZW51bSc7XG5pbXBvcnQgeyBhZGREYXlzV2l0aEV4Y2x1c2lvbnMgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmlldyBkYXRlIHRvIHRoZSBwcmV2aW91cyB2aWV3LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8YnV0dG9uXG4gKiAgbXdsQ2FsZW5kYXJQcmV2aW91c1ZpZXdcbiAqICBbKHZpZXdEYXRlKV09XCJ2aWV3RGF0ZVwiXG4gKiAgW3ZpZXddPVwidmlld1wiPlxuICogIFByZXZpb3VzXG4gKiA8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ2FsZW5kYXJQcmV2aW91c1ZpZXddJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKSB2aWV3OiBDYWxlbmRhclZpZXcgfCAnbW9udGgnIHwgJ3dlZWsnIHwgJ2RheSc7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXcgZGF0ZVxuICAgKi9cbiAgQElucHV0KCkgdmlld0RhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIERheXMgdG8gc2tpcCB3aGVuIGdvaW5nIGJhY2sgYnkgMSBkYXlcbiAgICovXG4gIEBJbnB1dCgpIGV4Y2x1ZGVEYXlzOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGRheXMgaW4gYSB3ZWVrLiBJZiBzZXQgd2lsbCBzdWJ0cmFjdCB0aGlzIGFtb3VudCBvZiBkYXlzIGluc3RlYWQgb2YgMSB3ZWVrXG4gICAqL1xuICBASW5wdXQoKSBkYXlzSW5XZWVrOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3IGRhdGUgaXMgY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBjb25zdCBzdWJGbjogYW55ID0ge1xuICAgICAgZGF5OiB0aGlzLmRhdGVBZGFwdGVyLnN1YkRheXMsXG4gICAgICB3ZWVrOiB0aGlzLmRhdGVBZGFwdGVyLnN1YldlZWtzLFxuICAgICAgbW9udGg6IHRoaXMuZGF0ZUFkYXB0ZXIuc3ViTW9udGhzXG4gICAgfVt0aGlzLnZpZXddO1xuXG4gICAgaWYgKHRoaXMudmlldyA9PT0gQ2FsZW5kYXJWaWV3LkRheSkge1xuICAgICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KFxuICAgICAgICBhZGREYXlzV2l0aEV4Y2x1c2lvbnMoXG4gICAgICAgICAgdGhpcy5kYXRlQWRhcHRlcixcbiAgICAgICAgICB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgIC0xLFxuICAgICAgICAgIHRoaXMuZXhjbHVkZURheXNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmlldyA9PT0gQ2FsZW5kYXJWaWV3LldlZWsgJiYgdGhpcy5kYXlzSW5XZWVrKSB7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoXG4gICAgICAgIGFkZERheXNXaXRoRXhjbHVzaW9ucyhcbiAgICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgICAgIHRoaXMudmlld0RhdGUsXG4gICAgICAgICAgLXRoaXMuZGF5c0luV2VlayxcbiAgICAgICAgICB0aGlzLmV4Y2x1ZGVEYXlzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChzdWJGbih0aGlzLnZpZXdEYXRlLCAxKSk7XG4gICAgfVxuICB9XG59XG4iXX0=