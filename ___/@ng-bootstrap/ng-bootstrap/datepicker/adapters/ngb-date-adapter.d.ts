import { NgbDateStruct } from '../ngb-date-struct';
import * as ɵngcc0 from '@angular/core';
export declare function NGB_DATEPICKER_DATE_ADAPTER_FACTORY(): NgbDateStructAdapter;
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 */
export declare abstract class NgbDateAdapter<D> {
    /**
     * Converts a user-model date of type `D` to an `NgbDateStruct` for internal use.
     */
    abstract fromModel(value: D): NgbDateStruct;
    /**
     * Converts an internal `NgbDateStruct` date to a user-model date of type `D`.
     */
    abstract toModel(date: NgbDateStruct): D;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateAdapter<any>>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateAdapter<any>>;
}
export declare class NgbDateStructAdapter extends NgbDateAdapter<NgbDateStruct> {
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    fromModel(date: NgbDateStruct): NgbDateStruct;
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    toModel(date: NgbDateStruct): NgbDateStruct;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbDateStructAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbDateStructAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJuZ2ItZGF0ZS1hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi4vbmdiLWRhdGUtc3RydWN0JztcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSX0RBVEVfQURBUFRFUl9GQUNUT1JZKCk6IE5nYkRhdGVTdHJ1Y3RBZGFwdGVyO1xuLyoqXG4gKiBBbiBhYnN0cmFjdCBzZXJ2aWNlIHRoYXQgZG9lcyB0aGUgY29udmVyc2lvbiBiZXR3ZWVuIHRoZSBpbnRlcm5hbCBkYXRlcGlja2VyIGBOZ2JEYXRlU3RydWN0YCBtb2RlbCBhbmRcbiAqIGFueSBwcm92aWRlZCB1c2VyIGRhdGUgbW9kZWwgYERgLCBleC4gYSBzdHJpbmcsIGEgbmF0aXZlIGRhdGUsIGV0Yy5cbiAqXG4gKiBUaGUgYWRhcHRlciBpcyB1c2VkICoqb25seSoqIGZvciBjb252ZXJzaW9uIHdoZW4gYmluZGluZyBkYXRlcGlja2VyIHRvIGEgZm9ybSBjb250cm9sLFxuICogZXguIGBbKG5nTW9kZWwpXT1cInVzZXJEYXRlTW9kZWxcImAuIEhlcmUgYHVzZXJEYXRlTW9kZWxgIGNhbiBiZSBvZiBhbnkgdHlwZS5cbiAqXG4gKiBUaGUgZGVmYXVsdCBkYXRlcGlja2VyIGltcGxlbWVudGF0aW9uIGFzc3VtZXMgd2UgdXNlIGBOZ2JEYXRlU3RydWN0YCBhcyBhIHVzZXIgbW9kZWwuXG4gKlxuICogU2VlIHRoZSBbZGF0ZSBmb3JtYXQgb3ZlcnZpZXddKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL292ZXJ2aWV3I2RhdGUtbW9kZWwpIGZvciBtb3JlIGRldGFpbHNcbiAqIGFuZCB0aGUgW2N1c3RvbSBhZGFwdGVyIGRlbW9dKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2V4YW1wbGVzI2FkYXB0ZXIpIGZvciBhbiBleGFtcGxlLlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBOZ2JEYXRlQWRhcHRlcjxEPiB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSB1c2VyLW1vZGVsIGRhdGUgb2YgdHlwZSBgRGAgdG8gYW4gYE5nYkRhdGVTdHJ1Y3RgIGZvciBpbnRlcm5hbCB1c2UuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZnJvbU1vZGVsKHZhbHVlOiBEKTogTmdiRGF0ZVN0cnVjdDtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhbiBpbnRlcm5hbCBgTmdiRGF0ZVN0cnVjdGAgZGF0ZSB0byBhIHVzZXItbW9kZWwgZGF0ZSBvZiB0eXBlIGBEYC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCB0b01vZGVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBEO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiRGF0ZVN0cnVjdEFkYXB0ZXIgZXh0ZW5kcyBOZ2JEYXRlQWRhcHRlcjxOZ2JEYXRlU3RydWN0PiB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBOZ2JEYXRlU3RydWN0IHZhbHVlIGludG8gTmdiRGF0ZVN0cnVjdCB2YWx1ZVxuICAgICAqL1xuICAgIGZyb21Nb2RlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogTmdiRGF0ZVN0cnVjdDtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIE5nYkRhdGVTdHJ1Y3QgdmFsdWUgaW50byBOZ2JEYXRlU3RydWN0IHZhbHVlXG4gICAgICovXG4gICAgdG9Nb2RlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogTmdiRGF0ZVN0cnVjdDtcbn1cbiJdfQ==