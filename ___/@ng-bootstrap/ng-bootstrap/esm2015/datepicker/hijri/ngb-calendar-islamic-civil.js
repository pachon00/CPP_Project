/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgbCalendarHijri } from './ngb-calendar-hijri';
import { NgbDate } from '../ngb-date';
import { Injectable } from '@angular/core';
/**
 * Checks if islamic year is a leap year
 * @param {?} hYear
 * @return {?}
 */
function isIslamicLeapYear(hYear) {
    return (14 + 11 * hYear) % 30 < 11;
}
/**
 * Checks if gregorian years is a leap year
 * @param {?} gDate
 * @return {?}
 */
function isGregorianLeapYear(gDate) {
    /** @type {?} */
    const year = gDate.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * Returns the start of Hijri Month.
 * `hMonth` is 0 for Muharram, 1 for Safar, etc.
 * `hYear` is any Hijri hYear.
 * @param {?} hYear
 * @param {?} hMonth
 * @return {?}
 */
function getIslamicMonthStart(hYear, hMonth) {
    return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
}
/**
 * Returns the start of Hijri year.
 * `year` is any Hijri year.
 * @param {?} year
 * @return {?}
 */
function getIslamicYearStart(year) {
    return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 * @type {?}
 */
const GREGORIAN_EPOCH = 1721425.5;
/** @type {?} */
const ISLAMIC_EPOCH = 1948439.5;
export class NgbCalendarIslamicCivil extends NgbCalendarHijri {
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gDate` is a JS Date to be converted to Hijri.
     * @param {?} gDate
     * @return {?}
     */
    fromGregorian(gDate) {
        /** @type {?} */
        const gYear = gDate.getFullYear();
        /** @type {?} */
        const gMonth = gDate.getMonth();
        /** @type {?} */
        const gDay = gDate.getDate();
        /** @type {?} */
        let julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gDate) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        /** @type {?} */
        const days = julianDay - ISLAMIC_EPOCH;
        /** @type {?} */
        const hYear = Math.floor((30 * days + 10646) / 10631.0);
        /** @type {?} */
        let hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        /** @type {?} */
        const hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
        return new NgbDate(hYear, hMonth + 1, hDay);
    }
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hDate` is an islamic(civil) date to be converted to Gregorian.
     * @param {?} hDate
     * @return {?}
     */
    toGregorian(hDate) {
        /** @type {?} */
        const hYear = hDate.year;
        /** @type {?} */
        const hMonth = hDate.month - 1;
        /** @type {?} */
        const hDay = hDate.day;
        /** @type {?} */
        const julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        /** @type {?} */
        const wjd = Math.floor(julianDay - 0.5) + 0.5;
        /** @type {?} */
        const depoch = wjd - GREGORIAN_EPOCH;
        /** @type {?} */
        const quadricent = Math.floor(depoch / 146097);
        /** @type {?} */
        const dqc = mod(depoch, 146097);
        /** @type {?} */
        const cent = Math.floor(dqc / 36524);
        /** @type {?} */
        const dcent = mod(dqc, 36524);
        /** @type {?} */
        const quad = Math.floor(dcent / 1461);
        /** @type {?} */
        const dquad = mod(dcent, 1461);
        /** @type {?} */
        const yindex = Math.floor(dquad / 365);
        /** @type {?} */
        let year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        /** @type {?} */
        const gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        /** @type {?} */
        const yearday = wjd - gYearStart;
        /** @type {?} */
        const tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
        /** @type {?} */
        const leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
        /** @type {?} */
        const month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        /** @type {?} */
        const tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        /** @type {?} */
        const day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    }
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    getDaysPerMonth(month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        /** @type {?} */
        let length = 29 + month % 2;
        if (month === 12 && isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    }
}
NgbCalendarIslamicCivil.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWNhbGVuZGFyLWlzbGFtaWMtY2l2aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIvaGlqcmkvbmdiLWNhbGVuZGFyLWlzbGFtaWMtY2l2aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBS3pDLFNBQVMsaUJBQWlCLENBQUMsS0FBYTtJQUN0QyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLENBQUM7Ozs7OztBQUtELFNBQVMsbUJBQW1CLENBQUMsS0FBVzs7VUFDaEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUU7SUFDaEMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNoRSxDQUFDOzs7Ozs7Ozs7QUFPRCxTQUFTLG9CQUFvQixDQUFDLEtBQWEsRUFBRSxNQUFjO0lBQ3pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzVGLENBQUM7Ozs7Ozs7QUFNRCxTQUFTLG1CQUFtQixDQUFDLElBQVk7SUFDdkMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFD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QyxHQUFHLEVBQUUsQ0FBQyxHQUFHLGFBQWEsR0FBRyxDQUFDOztjQUV6RyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRzs7Y0FBRSxNQUFNLEdBQUcsR0FBRyxHQUFHLGVBQWU7O2NBQ3ZFLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O2NBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDOztjQUFFLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7O2NBQ25HLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzs7Y0FBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztjQUFFLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzs7Y0FDbEYsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs7WUFDbEMsSUFBSSxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE1BQU07UUFDNUQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxFQUFFLENBQUM7U0FDUjs7Y0FFSyxVQUFVLEdBQUcsZUFBZSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzdHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDOztjQUUxQixPQUFPLEdBQUcsR0FBRyxHQUFHLFVBQVU7O2NBRTFCLEdBQUcsR0FBRyxlQUFlLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O2NBRTdHLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztjQUUzRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7O2NBQzFELElBQUksR0FBRyxlQUFlLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQ04sQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RyxDQUFDLENBQUM7O2NBRUosR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUUxQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7OztJQU9ELGVBQWUsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUN6QyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDM0IsTUFBTSxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQztRQUMzQixJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0MsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQTlFRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ2JDYWxlbmRhckhpanJpfSBmcm9tICcuL25nYi1jYWxlbmRhci1oaWpyaSc7XG5pbXBvcnQge05nYkRhdGV9IGZyb20gJy4uL25nYi1kYXRlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGlzbGFtaWMgeWVhciBpcyBhIGxlYXAgeWVhclxuICovXG5mdW5jdGlvbiBpc0lzbGFtaWNMZWFwWWVhcihoWWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoMTQgKyAxMSAqIGhZZWFyKSAlIDMwIDwgMTE7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGdyZWdvcmlhbiB5ZWFycyBpcyBhIGxlYXAgeWVhclxuICovXG5mdW5jdGlvbiBpc0dyZWdvcmlhbkxlYXBZZWFyKGdEYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHllYXIgPSBnRGF0ZS5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIEhpanJpIE1vbnRoLlxuICogYGhNb250aGAgaXMgMCBmb3IgTXVoYXJyYW0sIDEgZm9yIFNhZmFyLCBldGMuXG4gKiBgaFllYXJgIGlzIGFueSBIaWpyaSBoWWVhci5cbiAqL1xuZnVuY3Rpb24gZ2V0SXNsYW1pY01vbnRoU3RhcnQoaFllYXI6IG51bWJlciwgaE1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5jZWlsKDI5LjUgKiBoTW9udGgpICsgKGhZZWFyIC0gMSkgKiAzNTQgKyBNYXRoLmZsb29yKCgzICsgMTEgKiBoWWVhcikgLyAzMC4wKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdGFydCBvZiBIaWpyaSB5ZWFyLlxuICogYHllYXJgIGlzIGFueSBIaWpyaSB5ZWFyLlxuICovXG5mdW5jdGlvbiBnZXRJc2xhbWljWWVhclN0YXJ0KHllYXI6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoeWVhciAtIDEpICogMzU0ICsgTWF0aC5mbG9vcigoMyArIDExICogeWVhcikgLyAzMC4wKTtcbn1cblxuZnVuY3Rpb24gbW9kKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGEgLSBiICogTWF0aC5mbG9vcihhIC8gYik7XG59XG5cbi8qKlxuICogVGhlIGNpdmlsIGNhbGVuZGFyIGlzIG9uZSB0eXBlIG9mIEhpanJpIGNhbGVuZGFycyB1c2VkIGluIGlzbGFtaWMgY291bnRyaWVzLlxuICogVXNlcyBhIGZpeGVkIGN5Y2xlIG9mIGFsdGVybmF0aW5nIDI5LSBhbmQgMzAtZGF5IG1vbnRocyxcbiAqIHdpdGggYSBsZWFwIGRheSBhZGRlZCB0byB0aGUgbGFzdCBtb250aCBvZiAxMSBvdXQgb2YgZXZlcnkgMzAgeWVhcnMuXG4gKiBodHRwOi8vY2xkci51bmljb2RlLm9yZy9kZXZlbG9wbWVudC9kZXZlbG9wbWVudC1wcm9jZXNzL2Rlc2lnbi1wcm9wb3NhbHMvaXNsYW1pYy1jYWxlbmRhci10eXBlc1xuICogQWxsIHRoZSBjYWxjdWxhdGlvbnMgaGVyZSBhcmUgYmFzZWQgb24gdGhlIGVxdWF0aW9ucyBmcm9tIFwiQ2FsZW5kcmljYWwgQ2FsY3VsYXRpb25zXCIgQnkgRWR3YXJkIE0uIFJlaW5nb2xkLCBOYWNodW1cbiAqIERlcnNob3dpdHouXG4gKi9cblxuY29uc3QgR1JFR09SSUFOX0VQT0NIID0gMTcyMTQyNS41O1xuY29uc3QgSVNMQU1JQ19FUE9DSCA9IDE5NDg0MzkuNTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkNhbGVuZGFySXNsYW1pY0NpdmlsIGV4dGVuZHMgTmdiQ2FsZW5kYXJIaWpyaSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcXVpdmFsZW50IGlzbGFtaWMoY2l2aWwpIGRhdGUgdmFsdWUgZm9yIGEgZ2l2ZSBpbnB1dCBHcmVnb3JpYW4gZGF0ZS5cbiAgICogYGdEYXRlYCBpcyBhIEpTIERhdGUgdG8gYmUgY29udmVydGVkIHRvIEhpanJpLlxuICAgKi9cbiAgZnJvbUdyZWdvcmlhbihnRGF0ZTogRGF0ZSk6IE5nYkRhdGUge1xuICAgIGNvbnN0IGdZZWFyID0gZ0RhdGUuZ2V0RnVsbFllYXIoKSwgZ01vbnRoID0gZ0RhdGUuZ2V0TW9udGgoKSwgZ0RheSA9IGdEYXRlLmdldERhdGUoKTtcblxuICAgIGxldCBqdWxpYW5EYXkgPSBHUkVHT1JJQU5fRVBPQ0ggLSAxICsgMzY1ICogKGdZZWFyIC0gMSkgKyBNYXRoLmZsb29yKChnWWVhciAtIDEpIC8gNCkgK1xuICAgICAgICAtTWF0aC5mbG9vcigoZ1llYXIgLSAxKSAvIDEwMCkgKyBNYXRoLmZsb29yKChnWWVhciAtIDEpIC8gNDAwKSArXG4gICAgICAgIE1hdGguZmxvb3IoXG4gICAgICAgICAgICAoMzY3ICogKGdNb250aCArIDEpIC0gMzYyKSAvIDEyICsgKGdNb250aCArIDEgPD0gMiA/IDAgOiBpc0dyZWdvcmlhbkxlYXBZZWFyKGdEYXRlKSA/IC0xIDogLTIpICsgZ0RheSk7XG4gICAganVsaWFuRGF5ID0gTWF0aC5mbG9vcihqdWxpYW5EYXkpICsgMC41O1xuXG4gICAgY29uc3QgZGF5cyA9IGp1bGlhbkRheSAtIElTTEFNSUNfRVBPQ0g7XG4gICAgY29uc3QgaFllYXIgPSBNYXRoLmZsb29yKCgzMCAqIGRheXMgKyAxMDY0NikgLyAxMDYzMS4wKTtcbiAgICBsZXQgaE1vbnRoID0gTWF0aC5jZWlsKChkYXlzIC0gMjkgLSBnZXRJc2xhbWljWWVhclN0YXJ0KGhZZWFyKSkgLyAyOS41KTtcbiAgICBoTW9udGggPSBNYXRoLm1pbihoTW9udGgsIDExKTtcbiAgICBjb25zdCBoRGF5ID0gTWF0aC5jZWlsKGRheXMgLSBnZXRJc2xhbWljTW9udGhTdGFydChoWWVhciwgaE1vbnRoKSkgKyAxO1xuICAgIHJldHVybiBuZXcgTmdiRGF0ZShoWWVhciwgaE1vbnRoICsgMSwgaERheSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXF1aXZhbGVudCBKUyBkYXRlIHZhbHVlIGZvciBhIGdpdmUgaW5wdXQgaXNsYW1pYyhjaXZpbCkgZGF0ZS5cbiAgICogYGhEYXRlYCBpcyBhbiBpc2xhbWljKGNpdmlsKSBkYXRlIHRvIGJlIGNvbnZlcnRlZCB0byBHcmVnb3JpYW4uXG4gICAqL1xuICB0b0dyZWdvcmlhbihoRGF0ZTogTmdiRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IGhZZWFyID0gaERhdGUueWVhcjtcbiAgICBjb25zdCBoTW9udGggPSBoRGF0ZS5tb250aCAtIDE7XG4gICAgY29uc3QgaERheSA9IGhEYXRlLmRheTtcbiAgICBjb25zdCBqdWxpYW5EYXkgPVxuICAgICAgICBoRGF5ICsgTWF0aC5jZWlsKDI5LjUgKiBoTW9udGgpICsgKGhZZWFyIC0gMSkgKiAzNTQgKyBNYXRoLmZsb29yKCgzICsgMTEgKiBoWWVhcikgLyAzMCkgKyBJU0xBTUlDX0VQT0NIIC0gMTtcblxuICAgIGNvbnN0IHdqZCA9IE1hdGguZmxvb3IoanVsaWFuRGF5IC0gMC41KSArIDAuNSwgZGVwb2NoID0gd2pkIC0gR1JFR09SSUFOX0VQT0NILFxuICAgICAgICAgIHF1YWRyaWNlbnQgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDE0NjA5NyksIGRxYyA9IG1vZChkZXBvY2gsIDE0NjA5NyksIGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KSxcbiAgICAgICAgICBkY2VudCA9IG1vZChkcWMsIDM2NTI0KSwgcXVhZCA9IE1hdGguZmxvb3IoZGNlbnQgLyAxNDYxKSwgZHF1YWQgPSBtb2QoZGNlbnQsIDE0NjEpLFxuICAgICAgICAgIHlpbmRleCA9IE1hdGguZmxvb3IoZHF1YWQgLyAzNjUpO1xuICAgIGxldCB5ZWFyID0gcXVhZHJpY2VudCAqIDQwMCArIGNlbnQgKiAxMDAgKyBxdWFkICogNCArIHlpbmRleDtcbiAgICBpZiAoIShjZW50ID09PSA0IHx8IHlpbmRleCA9PT0gNCkpIHtcbiAgICAgIHllYXIrKztcbiAgICB9XG5cbiAgICBjb25zdCBnWWVhclN0YXJ0ID0gR1JFR09SSUFOX0VQT0NIICsgMzY1ICogKHllYXIgLSAxKSArIE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpIC0gTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gMTAwKSArXG4gICAgICAgIE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQwMCk7XG5cbiAgICBjb25zdCB5ZWFyZGF5ID0gd2pkIC0gZ1llYXJTdGFydDtcblxuICAgIGNvbnN0IHRqZCA9IEdSRUdPUklBTl9FUE9DSCAtIDEgKyAzNjUgKiAoeWVhciAtIDEpICsgTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNCkgLSBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcigoeWVhciAtIDEpIC8gNDAwKSArIE1hdGguZmxvb3IoNzM5IC8gMTIgKyAoaXNHcmVnb3JpYW5MZWFwWWVhcihuZXcgRGF0ZSh5ZWFyLCAzLCAxKSkgPyAtMSA6IC0yKSArIDEpO1xuXG4gICAgY29uc3QgbGVhcGFkaiA9IHdqZCA8IHRqZCA/IDAgOiBpc0dyZWdvcmlhbkxlYXBZZWFyKG5ldyBEYXRlKHllYXIsIDMsIDEpKSA/IDEgOiAyO1xuXG4gICAgY29uc3QgbW9udGggPSBNYXRoLmZsb29yKCgoeWVhcmRheSArIGxlYXBhZGopICogMTIgKyAzNzMpIC8gMzY3KTtcbiAgICBjb25zdCB0amQyID0gR1JFR09SSUFOX0VQT0NIIC0gMSArIDM2NSAqICh5ZWFyIC0gMSkgKyBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0KSAtIE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDEwMCkgK1xuICAgICAgICBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0MDApICtcbiAgICAgICAgTWF0aC5mbG9vcihcbiAgICAgICAgICAgICgzNjcgKiBtb250aCAtIDM2MikgLyAxMiArIChtb250aCA8PSAyID8gMCA6IGlzR3JlZ29yaWFuTGVhcFllYXIobmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAxKSkgPyAtMSA6IC0yKSArXG4gICAgICAgICAgICAxKTtcblxuICAgIGNvbnN0IGRheSA9IHdqZCAtIHRqZDIgKyAxO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHNwZWNpZmljIEhpanJpIG1vbnRoLlxuICAgKiBgbW9udGhgIGlzIDEgZm9yIE11aGFycmFtLCAyIGZvciBTYWZhciwgZXRjLlxuICAgKiBgeWVhcmAgaXMgYW55IEhpanJpIHllYXIuXG4gICAqL1xuICBnZXREYXlzUGVyTW9udGgobW9udGg6IG51bWJlciwgeWVhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICB5ZWFyID0geWVhciArIE1hdGguZmxvb3IobW9udGggLyAxMyk7XG4gICAgbW9udGggPSAoKG1vbnRoIC0gMSkgJSAxMikgKyAxO1xuICAgIGxldCBsZW5ndGggPSAyOSArIG1vbnRoICUgMjtcbiAgICBpZiAobW9udGggPT09IDEyICYmIGlzSXNsYW1pY0xlYXBZZWFyKHllYXIpKSB7XG4gICAgICBsZW5ndGgrKztcbiAgICB9XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxufVxuIl19