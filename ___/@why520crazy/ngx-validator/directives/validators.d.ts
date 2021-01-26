import { Validator, AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class MinValidatorDirective implements Validator {
    private validator;
    ngxMin: string;
    constructor();
    validate(control: AbstractControl): ValidationErrors;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MinValidatorDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MinValidatorDirective, "[ngxMin][formControlName],[ngxMin][formControl],[ngxMin][ngModel],", never, {
    "ngxMin": "ngxMin";
}, {}, never>;
}
export declare class MaxValidatorDirective implements Validator {
    private validator;
    ngxMax: string;
    constructor();
    validate(control: AbstractControl): ValidationErrors;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MaxValidatorDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MaxValidatorDirective, "[ngxMax][formControlName],[ngxMax][formControl],[ngxMax][ngModel]", never, {
    "ngxMax": "ngxMax";
}, {}, never>;
}
export declare class NgxUniqueCheckDirective implements AsyncValidator {
    ngxUniqueCheck: (value: any) => Observable<boolean | null>;
    constructor();
    validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxUniqueCheckDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgxUniqueCheckDirective, "[ngxUniqueCheck][formControlName],[ngxUniqueCheck][formControl],[ngxUniqueCheck][ngModel]", never, {
    "ngxUniqueCheck": "ngxUniqueCheck";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5kLnRzIiwic291cmNlcyI6WyJ2YWxpZGF0b3JzLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7QUFLQTs7Ozs7Ozs7OztBQU1BOzs7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvciwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1pblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I7XG4gICAgbmd4TWluOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKTtcbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWF4VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBwcml2YXRlIHZhbGlkYXRvcjtcbiAgICBuZ3hNYXg6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcigpO1xuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnM7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFzeW5jVmFsaWRhdG9yIHtcbiAgICBuZ3hVbmlxdWVDaGVjazogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbiB8IG51bGw+O1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycz47XG59XG4iXX0=