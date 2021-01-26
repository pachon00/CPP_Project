import { NgbDateStruct } from './ngb-date-struct';
import * as ɵngcc0 from '@angular/core';
export declare function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY(): NgbDateISOParserFormatter;
/**
 * An abstract service for parsing and formatting dates for the
 * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
 * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
 * input element.
 *
 * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
 * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
 * in the input.
 *
 * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
 * to use an alternative string format or a custom parsing logic.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 */
export declare abstract class NgbDateParserFormatter {
    /**
     * Parses the given `string` to an `NgbDateStruct`.
     *
     * Implementations should try their best to provide a result, even
     * partial. They must return `null` if the value can't be parsed.
     */
    abstract parse(value: string): NgbDateStruct;
    /**
     * Formats the given `NgbDateStruct` to a `string`.
     *
     * Implementations should return an empty string if the given date is `null`,
     * and try their best to provide a partial result if the given date is incomplete or invalid.
     */
    abstract format(date: NgbDateStruct): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateParserFormatter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateParserFormatter>;
}
export declare class NgbDateISOParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct;
    format(date: NgbDateStruct): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateISOParserFormatter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateISOParserFormatter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtcGFyc2VyLWZvcm1hdHRlci5kLnRzIiwic291cmNlcyI6WyJuZ2ItZGF0ZS1wYXJzZXItZm9ybWF0dGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTs7Ozs7O0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTkdCX0RBVEVQSUNLRVJfUEFSU0VSX0ZPUk1BVFRFUl9GQUNUT1JZKCk6IE5nYkRhdGVJU09QYXJzZXJGb3JtYXR0ZXI7XG4vKipcbiAqIEFuIGFic3RyYWN0IHNlcnZpY2UgZm9yIHBhcnNpbmcgYW5kIGZvcm1hdHRpbmcgZGF0ZXMgZm9yIHRoZVxuICogW2BOZ2JJbnB1dERhdGVwaWNrZXJgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiSW5wdXREYXRlcGlja2VyKSBkaXJlY3RpdmUuXG4gKiBDb252ZXJ0cyBiZXR3ZWVuIHRoZSBpbnRlcm5hbCBgTmdiRGF0ZVN0cnVjdGAgbW9kZWwgcHJlc2VudGF0aW9uIGFuZCBhIGBzdHJpbmdgIHRoYXQgaXMgZGlzcGxheWVkIGluIHRoZVxuICogaW5wdXQgZWxlbWVudC5cbiAqXG4gKiBXaGVuIHVzZXIgdHlwZXMgc29tZXRoaW5nIGluIHRoZSBpbnB1dCB0aGlzIHNlcnZpY2UgYXR0ZW1wdHMgdG8gcGFyc2UgaXQgaW50byBhIGBOZ2JEYXRlU3RydWN0YCBvYmplY3QuXG4gKiBBbmQgdmljZSB2ZXJzYSwgd2hlbiB1c2VycyBzZWxlY3RzIGEgZGF0ZSBpbiB0aGUgY2FsZW5kYXIgd2l0aCB0aGUgbW91c2UsIGl0IG11c3QgYmUgZGlzcGxheWVkIGFzIGEgYHN0cmluZ2BcbiAqIGluIHRoZSBpbnB1dC5cbiAqXG4gKiBEZWZhdWx0IGltcGxlbWVudGF0aW9uIHVzZXMgdGhlIElTTyA4NjAxIGZvcm1hdCwgYnV0IHlvdSBjYW4gcHJvdmlkZSBhbm90aGVyIGltcGxlbWVudGF0aW9uIHZpYSBESVxuICogdG8gdXNlIGFuIGFsdGVybmF0aXZlIHN0cmluZyBmb3JtYXQgb3IgYSBjdXN0b20gcGFyc2luZyBsb2dpYy5cbiAqXG4gKiBTZWUgdGhlIFtkYXRlIGZvcm1hdCBvdmVydmlld10oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvb3ZlcnZpZXcjZGF0ZS1tb2RlbCkgZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB7XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBnaXZlbiBgc3RyaW5nYCB0byBhbiBgTmdiRGF0ZVN0cnVjdGAuXG4gICAgICpcbiAgICAgKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIHRyeSB0aGVpciBiZXN0IHRvIHByb3ZpZGUgYSByZXN1bHQsIGV2ZW5cbiAgICAgKiBwYXJ0aWFsLiBUaGV5IG11c3QgcmV0dXJuIGBudWxsYCBpZiB0aGUgdmFsdWUgY2FuJ3QgYmUgcGFyc2VkLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHBhcnNlKHZhbHVlOiBzdHJpbmcpOiBOZ2JEYXRlU3RydWN0O1xuICAgIC8qKlxuICAgICAqIEZvcm1hdHMgdGhlIGdpdmVuIGBOZ2JEYXRlU3RydWN0YCB0byBhIGBzdHJpbmdgLlxuICAgICAqXG4gICAgICogSW1wbGVtZW50YXRpb25zIHNob3VsZCByZXR1cm4gYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBnaXZlbiBkYXRlIGlzIGBudWxsYCxcbiAgICAgKiBhbmQgdHJ5IHRoZWlyIGJlc3QgdG8gcHJvdmlkZSBhIHBhcnRpYWwgcmVzdWx0IGlmIHRoZSBnaXZlbiBkYXRlIGlzIGluY29tcGxldGUgb3IgaW52YWxpZC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBmb3JtYXQoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZztcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkRhdGVJU09QYXJzZXJGb3JtYXR0ZXIgZXh0ZW5kcyBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyIHtcbiAgICBwYXJzZSh2YWx1ZTogc3RyaW5nKTogTmdiRGF0ZVN0cnVjdDtcbiAgICBmb3JtYXQoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZztcbn1cbiJdfQ==