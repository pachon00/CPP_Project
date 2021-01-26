import { NgbDateStruct } from './ngb-date-struct';
import * as ɵngcc0 from '@angular/core';
export declare function NGB_DATEPICKER_18N_FACTORY(locale: any): NgbDatepickerI18nDefault;
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 */
export declare abstract class NgbDatepickerI18n {
    /**
     * Returns the short weekday name to display in the heading of the month view.
     *
     * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
     */
    abstract getWeekdayShortName(weekday: number): string;
    /**
     * Returns the short month name to display in the date picker navigation.
     *
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     */
    abstract getMonthShortName(month: number, year?: number): string;
    /**
     * Returns the full month name to display in the date picker navigation.
     *
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     */
    abstract getMonthFullName(month: number, year?: number): string;
    /**
     * Returns the value of the `aria-label` attribute for a specific date.
     *
     * @since 2.0.0
     */
    abstract getDayAriaLabel(date: NgbDateStruct): string;
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * @since 3.0.0
     */
    getDayNumerals(date: NgbDateStruct): string;
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * @since 3.0.0
     */
    getWeekNumerals(weekNumber: number): string;
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * @since 3.0.0
     */
    getYearNumerals(year: number): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerI18n>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDatepickerI18n>;
}
export declare class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
    private _locale;
    private _weekdaysShort;
    private _monthsShort;
    private _monthsFull;
    constructor(_locale: string);
    getWeekdayShortName(weekday: number): string;
    getMonthShortName(month: number): string;
    getMonthFullName(month: number): string;
    getDayAriaLabel(date: NgbDateStruct): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDatepickerI18nDefault>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDatepickerI18nDefault>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLmQudHMiLCJzb3VyY2VzIjpbImRhdGVwaWNrZXItaTE4bi5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQTs7Ozs7Ozs7Ozs7OztBQVdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCB9IGZyb20gJy4vbmdiLWRhdGUtc3RydWN0JztcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSXzE4Tl9GQUNUT1JZKGxvY2FsZTogYW55KTogTmdiRGF0ZXBpY2tlckkxOG5EZWZhdWx0O1xuLyoqXG4gKiBBIHNlcnZpY2Ugc3VwcGx5aW5nIGkxOG4gZGF0YSB0byB0aGUgZGF0ZXBpY2tlciBjb21wb25lbnQuXG4gKlxuICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBzZXJ2aWNlIHVzZXMgdGhlIEFuZ3VsYXIgbG9jYWxlIGFuZCByZWdpc3RlcmVkIGxvY2FsZSBkYXRhIGZvclxuICogd2Vla2RheXMgYW5kIG1vbnRoIG5hbWVzIChhcyBleHBsYWluZWQgaW4gdGhlIEFuZ3VsYXIgaTE4biBndWlkZSkuXG4gKlxuICogSXQgYWxzbyBwcm92aWRlcyBhIHdheSB0byBpMThuIGRhdGEgdGhhdCBkZXBlbmRzIG9uIGNhbGVuZGFyIGNhbGN1bGF0aW9ucywgbGlrZSBhcmlhIGxhYmVscywgZGF5LCB3ZWVrIGFuZCB5ZWFyXG4gKiBudW1lcmFscy4gRm9yIG90aGVyIHN0YXRpYyBsYWJlbHMgdGhlIGRhdGVwaWNrZXIgdXNlcyB0aGUgZGVmYXVsdCBBbmd1bGFyIGkxOG4uXG4gKlxuICogU2VlIHRoZSBbaTE4biBkZW1vXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9leGFtcGxlcyNpMThuKSBhbmRcbiAqIFtIZWJyZXcgY2FsZW5kYXIgZGVtb10oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvY2FsZW5kYXJzI2hlYnJldykgb24gaG93IHRvIGV4dGVuZCB0aGlzIGNsYXNzIGFuZCBkZWZpbmVcbiAqIGEgY3VzdG9tIHByb3ZpZGVyIGZvciBpMThuLlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBOZ2JEYXRlcGlja2VySTE4biB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2hvcnQgd2Vla2RheSBuYW1lIHRvIGRpc3BsYXkgaW4gdGhlIGhlYWRpbmcgb2YgdGhlIG1vbnRoIHZpZXcuXG4gICAgICpcbiAgICAgKiBXaXRoIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnd2Vla2RheScgaXMgMT1Nb24gLi4uIDc9U3VuLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldFdlZWtkYXlTaG9ydE5hbWUod2Vla2RheTogbnVtYmVyKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNob3J0IG1vbnRoIG5hbWUgdG8gZGlzcGxheSBpbiB0aGUgZGF0ZSBwaWNrZXIgbmF2aWdhdGlvbi5cbiAgICAgKlxuICAgICAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICdtb250aCcgaXMgMT1KYW4gLi4uIDEyPURlYy5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBnZXRNb250aFNob3J0TmFtZShtb250aDogbnVtYmVyLCB5ZWFyPzogbnVtYmVyKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZ1bGwgbW9udGggbmFtZSB0byBkaXNwbGF5IGluIHRoZSBkYXRlIHBpY2tlciBuYXZpZ2F0aW9uLlxuICAgICAqXG4gICAgICogV2l0aCBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldE1vbnRoRnVsbE5hbWUobW9udGg6IG51bWJlciwgeWVhcj86IG51bWJlcik6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBmb3IgYSBzcGVjaWZpYyBkYXRlLlxuICAgICAqXG4gICAgICogQHNpbmNlIDIuMC4wXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0RGF5QXJpYUxhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiBhIGRheSB0aGF0IGlzIHJlbmRlcmVkIGluIGEgZGF5IGNlbGwuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMy4wLjBcbiAgICAgKi9cbiAgICBnZXREYXlOdW1lcmFscyhkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgYSB3ZWVrIG51bWJlciByZW5kZXJlZCBieSBkYXRlcGlja2VyLlxuICAgICAqXG4gICAgICogQHNpbmNlIDMuMC4wXG4gICAgICovXG4gICAgZ2V0V2Vla051bWVyYWxzKHdlZWtOdW1iZXI6IG51bWJlcik6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIGEgeWVhciB0aGF0IGlzIHJlbmRlcmVkIGluIHRoZSBkYXRlcGlja2VyIHllYXIgc2VsZWN0IGJveC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAzLjAuMFxuICAgICAqL1xuICAgIGdldFllYXJOdW1lcmFscyh5ZWFyOiBudW1iZXIpOiBzdHJpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JEYXRlcGlja2VySTE4bkRlZmF1bHQgZXh0ZW5kcyBOZ2JEYXRlcGlja2VySTE4biB7XG4gICAgcHJpdmF0ZSBfbG9jYWxlO1xuICAgIHByaXZhdGUgX3dlZWtkYXlzU2hvcnQ7XG4gICAgcHJpdmF0ZSBfbW9udGhzU2hvcnQ7XG4gICAgcHJpdmF0ZSBfbW9udGhzRnVsbDtcbiAgICBjb25zdHJ1Y3RvcihfbG9jYWxlOiBzdHJpbmcpO1xuICAgIGdldFdlZWtkYXlTaG9ydE5hbWUod2Vla2RheTogbnVtYmVyKTogc3RyaW5nO1xuICAgIGdldE1vbnRoU2hvcnROYW1lKG1vbnRoOiBudW1iZXIpOiBzdHJpbmc7XG4gICAgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nO1xuICAgIGdldERheUFyaWFMYWJlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nO1xufVxuIl19