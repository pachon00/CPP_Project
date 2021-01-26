import { GetMonthViewArgs, MonthView, GetWeekViewHeaderArgs, WeekDay, GetWeekViewArgs, WeekView } from 'calendar-utils';
import { DateAdapter } from '../../date-adapters/date-adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarUtils {
    protected dateAdapter: DateAdapter;
    constructor(dateAdapter: DateAdapter);
    getMonthView(args: GetMonthViewArgs): MonthView;
    getWeekViewHeader(args: GetWeekViewHeaderArgs): WeekDay[];
    getWeekView(args: GetWeekViewArgs): WeekView;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarUtils>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CalendarUtils>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdXRpbHMucHJvdmlkZXIuZC50cyIsInNvdXJjZXMiOlsiY2FsZW5kYXItdXRpbHMucHJvdmlkZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRNb250aFZpZXdBcmdzLCBNb250aFZpZXcsIEdldFdlZWtWaWV3SGVhZGVyQXJncywgV2Vla0RheSwgR2V0V2Vla1ZpZXdBcmdzLCBXZWVrVmlldyB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJVdGlscyB7XG4gICAgcHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpO1xuICAgIGdldE1vbnRoVmlldyhhcmdzOiBHZXRNb250aFZpZXdBcmdzKTogTW9udGhWaWV3O1xuICAgIGdldFdlZWtWaWV3SGVhZGVyKGFyZ3M6IEdldFdlZWtWaWV3SGVhZGVyQXJncyk6IFdlZWtEYXlbXTtcbiAgICBnZXRXZWVrVmlldyhhcmdzOiBHZXRXZWVrVmlld0FyZ3MpOiBXZWVrVmlldztcbn1cbiJdfQ==