import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './datepicker';
import * as ɵngcc2 from './datepicker-month-view';
import * as ɵngcc3 from './datepicker-navigation';
import * as ɵngcc4 from './datepicker-navigation-select';
import * as ɵngcc5 from './datepicker-day-view';
import * as ɵngcc6 from './datepicker-input';
import * as ɵngcc7 from '@angular/common';
import * as ɵngcc8 from '@angular/forms';
export { NgbDatepicker, NgbDatepickerNavigateEvent, NgbDatepickerState } from './datepicker';
export { NgbInputDatepicker } from './datepicker-input';
export { NgbCalendar, NgbPeriod, NgbCalendarGregorian } from './ngb-calendar';
export { NgbCalendarIslamicCivil } from './hijri/ngb-calendar-islamic-civil';
export { NgbCalendarIslamicUmalqura } from './hijri/ngb-calendar-islamic-umalqura';
export { NgbCalendarPersian } from './jalali/ngb-calendar-persian';
export { NgbCalendarHebrew } from './hebrew/ngb-calendar-hebrew';
export { NgbDatepickerI18nHebrew } from './hebrew/datepicker-i18n-hebrew';
export { NgbDatepickerMonthView } from './datepicker-month-view';
export { NgbDatepickerDayView } from './datepicker-day-view';
export { NgbDatepickerNavigation } from './datepicker-navigation';
export { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
export { NgbDatepickerConfig } from './datepicker-config';
export { NgbInputDatepickerConfig } from './datepicker-input-config';
export { NgbDatepickerI18n } from './datepicker-i18n';
export { NgbDateStruct } from './ngb-date-struct';
export { NgbDate } from './ngb-date';
export { NgbDateAdapter } from './adapters/ngb-date-adapter';
export { NgbDateNativeAdapter } from './adapters/ngb-date-native-adapter';
export { NgbDateNativeUTCAdapter } from './adapters/ngb-date-native-utc-adapter';
export { NgbDateParserFormatter } from './ngb-date-parser-formatter';
export { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
export declare class NgbDatepickerModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<NgbDatepickerModule, [typeof ɵngcc1.NgbDatepicker, typeof ɵngcc2.NgbDatepickerMonthView, typeof ɵngcc3.NgbDatepickerNavigation, typeof ɵngcc4.NgbDatepickerNavigationSelect, typeof ɵngcc5.NgbDatepickerDayView, typeof ɵngcc6.NgbInputDatepicker], [typeof ɵngcc7.CommonModule, typeof ɵngcc8.FormsModule], [typeof ɵngcc1.NgbDatepicker, typeof ɵngcc6.NgbInputDatepicker]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<NgbDatepickerModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IE5nYkRhdGVwaWNrZXIsIE5nYkRhdGVwaWNrZXJOYXZpZ2F0ZUV2ZW50LCBOZ2JEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2RhdGVwaWNrZXInO1xuZXhwb3J0IHsgTmdiSW5wdXREYXRlcGlja2VyIH0gZnJvbSAnLi9kYXRlcGlja2VyLWlucHV0JztcbmV4cG9ydCB7IE5nYkNhbGVuZGFyLCBOZ2JQZXJpb2QsIE5nYkNhbGVuZGFyR3JlZ29yaWFuIH0gZnJvbSAnLi9uZ2ItY2FsZW5kYXInO1xuZXhwb3J0IHsgTmdiQ2FsZW5kYXJJc2xhbWljQ2l2aWwgfSBmcm9tICcuL2hpanJpL25nYi1jYWxlbmRhci1pc2xhbWljLWNpdmlsJztcbmV4cG9ydCB7IE5nYkNhbGVuZGFySXNsYW1pY1VtYWxxdXJhIH0gZnJvbSAnLi9oaWpyaS9uZ2ItY2FsZW5kYXItaXNsYW1pYy11bWFscXVyYSc7XG5leHBvcnQgeyBOZ2JDYWxlbmRhclBlcnNpYW4gfSBmcm9tICcuL2phbGFsaS9uZ2ItY2FsZW5kYXItcGVyc2lhbic7XG5leHBvcnQgeyBOZ2JDYWxlbmRhckhlYnJldyB9IGZyb20gJy4vaGVicmV3L25nYi1jYWxlbmRhci1oZWJyZXcnO1xuZXhwb3J0IHsgTmdiRGF0ZXBpY2tlckkxOG5IZWJyZXcgfSBmcm9tICcuL2hlYnJldy9kYXRlcGlja2VyLWkxOG4taGVicmV3JztcbmV4cG9ydCB7IE5nYkRhdGVwaWNrZXJNb250aFZpZXcgfSBmcm9tICcuL2RhdGVwaWNrZXItbW9udGgtdmlldyc7XG5leHBvcnQgeyBOZ2JEYXRlcGlja2VyRGF5VmlldyB9IGZyb20gJy4vZGF0ZXBpY2tlci1kYXktdmlldyc7XG5leHBvcnQgeyBOZ2JEYXRlcGlja2VyTmF2aWdhdGlvbiB9IGZyb20gJy4vZGF0ZXBpY2tlci1uYXZpZ2F0aW9uJztcbmV4cG9ydCB7IE5nYkRhdGVwaWNrZXJOYXZpZ2F0aW9uU2VsZWN0IH0gZnJvbSAnLi9kYXRlcGlja2VyLW5hdmlnYXRpb24tc2VsZWN0JztcbmV4cG9ydCB7IE5nYkRhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXItY29uZmlnJztcbmV4cG9ydCB7IE5nYklucHV0RGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnB1dC1jb25maWcnO1xuZXhwb3J0IHsgTmdiRGF0ZXBpY2tlckkxOG4gfSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5leHBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuZXhwb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4vbmdiLWRhdGUnO1xuZXhwb3J0IHsgTmdiRGF0ZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXJzL25nYi1kYXRlLWFkYXB0ZXInO1xuZXhwb3J0IHsgTmdiRGF0ZU5hdGl2ZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXJzL25nYi1kYXRlLW5hdGl2ZS1hZGFwdGVyJztcbmV4cG9ydCB7IE5nYkRhdGVOYXRpdmVVVENBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVycy9uZ2ItZGF0ZS1uYXRpdmUtdXRjLWFkYXB0ZXInO1xuZXhwb3J0IHsgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB9IGZyb20gJy4vbmdiLWRhdGUtcGFyc2VyLWZvcm1hdHRlcic7XG5leHBvcnQgeyBOZ2JEYXRlcGlja2VyS2V5Ym9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlcGlja2VyLWtleWJvYXJkLXNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRGF0ZXBpY2tlck1vZHVsZSB7XG59XG4iXX0=