import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDateStruct } from './ngb-date-struct';
import { DatepickerViewModel } from './datepicker-view-model';
import { Observable } from 'rxjs';
import { NgbDatepickerI18n } from './datepicker-i18n';
import * as ɵngcc0 from '@angular/core';
export interface DatepickerServiceInputs extends Partial<Pick<DatepickerViewModel, 'dayTemplateData' | 'displayMonths' | 'disabled' | 'firstDayOfWeek' | 'focusVisible' | 'markDisabled' | 'maxDate' | 'minDate' | 'navigation' | 'outsideDays'>> {
}
export declare class NgbDatepickerService {
    private _calendar;
    private _i18n;
    private _VALIDATORS;
    private _model$;
    private _dateSelect$;
    private _state;
    readonly model$: Observable<DatepickerViewModel>;
    readonly dateSelect$: Observable<NgbDate>;
    set(options: DatepickerServiceInputs): void;
    constructor(_calendar: NgbCalendar, _i18n: NgbDatepickerI18n);
    focus(date: NgbDate): void;
    focusSelect(): void;
    open(date: NgbDate): void;
    select(date: NgbDate, options?: {
        emitEvent?: boolean;
    }): void;
    toValidDate(date: NgbDateStruct, defaultValue?: NgbDate): NgbDate;
    private _nextState;
    private _patchContexts;
    private _updateState;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDatepickerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImRhdGVwaWNrZXItc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JDYWxlbmRhciB9IGZyb20gJy4vbmdiLWNhbGVuZGFyJztcbmltcG9ydCB7IE5nYkRhdGUgfSBmcm9tICcuL25nYi1kYXRlJztcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyVmlld01vZGVsIH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdiRGF0ZXBpY2tlckkxOG4gfSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJTZXJ2aWNlSW5wdXRzIGV4dGVuZHMgUGFydGlhbDxQaWNrPERhdGVwaWNrZXJWaWV3TW9kZWwsICdkYXlUZW1wbGF0ZURhdGEnIHwgJ2Rpc3BsYXlNb250aHMnIHwgJ2Rpc2FibGVkJyB8ICdmaXJzdERheU9mV2VlaycgfCAnZm9jdXNWaXNpYmxlJyB8ICdtYXJrRGlzYWJsZWQnIHwgJ21heERhdGUnIHwgJ21pbkRhdGUnIHwgJ25hdmlnYXRpb24nIHwgJ291dHNpZGVEYXlzJz4+IHtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRhdGVwaWNrZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9jYWxlbmRhcjtcbiAgICBwcml2YXRlIF9pMThuO1xuICAgIHByaXZhdGUgX1ZBTElEQVRPUlM7XG4gICAgcHJpdmF0ZSBfbW9kZWwkO1xuICAgIHByaXZhdGUgX2RhdGVTZWxlY3QkO1xuICAgIHByaXZhdGUgX3N0YXRlO1xuICAgIHJlYWRvbmx5IG1vZGVsJDogT2JzZXJ2YWJsZTxEYXRlcGlja2VyVmlld01vZGVsPjtcbiAgICByZWFkb25seSBkYXRlU2VsZWN0JDogT2JzZXJ2YWJsZTxOZ2JEYXRlPjtcbiAgICBzZXQob3B0aW9uczogRGF0ZXBpY2tlclNlcnZpY2VJbnB1dHMpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKF9jYWxlbmRhcjogTmdiQ2FsZW5kYXIsIF9pMThuOiBOZ2JEYXRlcGlja2VySTE4bik7XG4gICAgZm9jdXMoZGF0ZTogTmdiRGF0ZSk6IHZvaWQ7XG4gICAgZm9jdXNTZWxlY3QoKTogdm9pZDtcbiAgICBvcGVuKGRhdGU6IE5nYkRhdGUpOiB2b2lkO1xuICAgIHNlbGVjdChkYXRlOiBOZ2JEYXRlLCBvcHRpb25zPzoge1xuICAgICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0pOiB2b2lkO1xuICAgIHRvVmFsaWREYXRlKGRhdGU6IE5nYkRhdGVTdHJ1Y3QsIGRlZmF1bHRWYWx1ZT86IE5nYkRhdGUpOiBOZ2JEYXRlO1xuICAgIHByaXZhdGUgX25leHRTdGF0ZTtcbiAgICBwcml2YXRlIF9wYXRjaENvbnRleHRzO1xuICAgIHByaXZhdGUgX3VwZGF0ZVN0YXRlO1xufVxuIl19