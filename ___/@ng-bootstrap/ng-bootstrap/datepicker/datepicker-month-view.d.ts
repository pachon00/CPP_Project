import { TemplateRef, EventEmitter } from '@angular/core';
import { MonthViewModel, DayViewModel } from './datepicker-view-model';
import { NgbDate } from './ngb-date';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { DayTemplateContext } from './datepicker-day-template-context';
import * as ɵngcc0 from '@angular/core';
export declare class NgbDatepickerMonthView {
    i18n: NgbDatepickerI18n;
    dayTemplate: TemplateRef<DayTemplateContext>;
    month: MonthViewModel;
    showWeekdays: any;
    showWeekNumbers: any;
    select: EventEmitter<NgbDate>;
    constructor(i18n: NgbDatepickerI18n);
    doSelect(day: DayViewModel): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerMonthView>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbDatepickerMonthView, "ngb-datepicker-month-view", never, {
    "dayTemplate": "dayTemplate";
    "month": "month";
    "showWeekdays": "showWeekdays";
    "showWeekNumbers": "showWeekNumbers";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1tb250aC12aWV3LmQudHMiLCJzb3VyY2VzIjpbImRhdGVwaWNrZXItbW9udGgtdmlldy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb250aFZpZXdNb2RlbCwgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4vbmdiLWRhdGUnO1xuaW1wb3J0IHsgTmdiRGF0ZXBpY2tlckkxOG4gfSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5pbXBvcnQgeyBEYXlUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2RhdGVwaWNrZXItZGF5LXRlbXBsYXRlLWNvbnRleHQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRGF0ZXBpY2tlck1vbnRoVmlldyB7XG4gICAgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG47XG4gICAgZGF5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPERheVRlbXBsYXRlQ29udGV4dD47XG4gICAgbW9udGg6IE1vbnRoVmlld01vZGVsO1xuICAgIHNob3dXZWVrZGF5czogYW55O1xuICAgIHNob3dXZWVrTnVtYmVyczogYW55O1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPE5nYkRhdGU+O1xuICAgIGNvbnN0cnVjdG9yKGkxOG46IE5nYkRhdGVwaWNrZXJJMThuKTtcbiAgICBkb1NlbGVjdChkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQ7XG59XG4iXX0=