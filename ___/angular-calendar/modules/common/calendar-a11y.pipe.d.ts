import { PipeTransform } from '@angular/core';
import { CalendarA11y } from './calendar-a11y.provider';
import { A11yParams } from './calendar-a11y.interface';
/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class CalendarA11yPipe implements PipeTransform {
    private calendarA11y;
    private locale;
    constructor(calendarA11y: CalendarA11y, locale: string);
    transform(a11yParams: A11yParams, method: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarA11yPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CalendarA11yPipe, "calendarA11y">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYTExeS5waXBlLmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLWExMXkucGlwZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckExMXkgfSBmcm9tICcuL2NhbGVuZGFyLWExMXkucHJvdmlkZXInO1xuaW1wb3J0IHsgQTExeVBhcmFtcyB9IGZyb20gJy4vY2FsZW5kYXItYTExeS5pbnRlcmZhY2UnO1xuLyoqXG4gKiBUaGlzIHBpcGUgaXMgcHJpbWFyaWx5IGZvciByZW5kZXJpbmcgYXJpYSBsYWJlbHMuIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyB3aGVyZSBgbXlFdmVudGAgaXMgYSBgQ2FsZW5kYXJFdmVudGAgYW5kIG15TG9jYWxlIGlzIGEgbG9jYWxlIGlkZW50aWZpZXJcbiAqIHt7IHsgZXZlbnQ6IG15RXZlbnQsIGxvY2FsZTogbXlMb2NhbGUgfSB8IGNhbGVuZGFyQTExeTogJ2V2ZW50RGVzY3JpcHRpb24nIH19XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJBMTF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgY2FsZW5kYXJBMTF5O1xuICAgIHByaXZhdGUgbG9jYWxlO1xuICAgIGNvbnN0cnVjdG9yKGNhbGVuZGFyQTExeTogQ2FsZW5kYXJBMTF5LCBsb2NhbGU6IHN0cmluZyk7XG4gICAgdHJhbnNmb3JtKGExMXlQYXJhbXM6IEExMXlQYXJhbXMsIG1ldGhvZDogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19