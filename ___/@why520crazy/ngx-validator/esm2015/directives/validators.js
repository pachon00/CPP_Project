/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validators, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { of } from 'rxjs';
import { NgxValidators } from '../validators';
export class MinValidatorDirective {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngxMin(value) {
        this.validator = Validators.min(parseFloat(value));
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.validator(control);
    }
}
MinValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMin][formControlName],[ngxMin][formControl],[ngxMin][ngModel],',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => MinValidatorDirective),
                        multi: true
                    }
                ]
            },] }
];
/** @nocollapse */
MinValidatorDirective.ctorParameters = () => [];
MinValidatorDirective.propDecorators = {
    ngxMin: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MinValidatorDirective.prototype.validator;
}
export class MaxValidatorDirective {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngxMax(value) {
        this.validator = Validators.max(parseFloat(value));
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.validator(control);
    }
}
MaxValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMax][formControlName],[ngxMax][formControl],[ngxMax][ngModel]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => MaxValidatorDirective),
                        multi: true
                    }
                ]
            },] }
];
/** @nocollapse */
MaxValidatorDirective.ctorParameters = () => [];
MaxValidatorDirective.propDecorators = {
    ngxMax: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MaxValidatorDirective.prototype.validator;
}
export class NgxUniqueCheckDirective {
    constructor() {
        this.ngxUniqueCheck = (value) => of(null);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return NgxValidators.uniqueCheckValidator(this.ngxUniqueCheck)(control);
    }
}
NgxUniqueCheckDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxUniqueCheck][formControlName],[ngxUniqueCheck][formControl],[ngxUniqueCheck][ngModel]',
                providers: [
                    {
                        provide: NG_ASYNC_VALIDATORS,
                        useExisting: NgxUniqueCheckDirective,
                        multi: true
                    }
                ]
            },] }
];
/** @nocollapse */
NgxUniqueCheckDirective.ctorParameters = () => [];
NgxUniqueCheckDirective.propDecorators = {
    ngxUniqueCheck: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxUniqueCheckDirective.prototype.ngxUniqueCheck;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBcUMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFDSCxhQUFhLEVBR2IsVUFBVSxFQUVWLG1CQUFtQixFQUd0QixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWE5QyxNQUFNLE9BQU8scUJBQXFCO0lBTzlCLGdCQUFlLENBQUM7Ozs7O0lBSmhCLElBQW9CLE1BQU0sQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUlELFFBQVEsQ0FBQyxPQUF3QjtRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBdEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQ0osb0VBQW9FO2dCQUN4RSxTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3BELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7Ozs7O3FCQUlJLEtBQUs7Ozs7SUFGTiwwQ0FBK0I7O0FBd0JuQyxNQUFNLE9BQU8scUJBQXFCO0lBTzlCLGdCQUFlLENBQUM7Ozs7O0lBSmhCLElBQW9CLE1BQU0sQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUlELFFBQVEsQ0FBQyxPQUF3QjtRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBdEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQ0osbUVBQW1FO2dCQUN2RSxTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3BELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7Ozs7O3FCQUlJLEtBQUs7Ozs7SUFGTiwwQ0FBK0I7O0FBdUJuQyxNQUFNLE9BQU8sdUJBQXVCO0lBR2hDO1FBRlMsbUJBQWMsR0FBK0MsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRixDQUFDOzs7OztJQUVoQixRQUFRLENBQUMsT0FBd0I7UUFDN0IsT0FBTyxhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQWpCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDJGQUEyRjtnQkFDckcsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxtQkFBbUI7d0JBQzVCLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7Ozs7OzZCQUVJLEtBQUs7Ozs7SUFBTixpREFBK0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSwgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgTkdfVkFMSURBVE9SUyxcbiAgICBWYWxpZGF0b3IsXG4gICAgQWJzdHJhY3RDb250cm9sLFxuICAgIFZhbGlkYXRvcnMsXG4gICAgVmFsaWRhdG9yRm4sXG4gICAgTkdfQVNZTkNfVkFMSURBVE9SUyxcbiAgICBBc3luY1ZhbGlkYXRvcixcbiAgICBWYWxpZGF0aW9uRXJyb3JzXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JzIH0gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOlxuICAgICAgICAnW25neE1pbl1bZm9ybUNvbnRyb2xOYW1lXSxbbmd4TWluXVtmb3JtQ29udHJvbF0sW25neE1pbl1bbmdNb2RlbF0sJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1pblZhbGlkYXRvckRpcmVjdGl2ZSksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNaW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgbmd4TWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1pbihwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjb250cm9sKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOlxuICAgICAgICAnW25neE1heF1bZm9ybUNvbnRyb2xOYW1lXSxbbmd4TWF4XVtmb3JtQ29udHJvbF0sW25neE1heF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF4VmFsaWRhdG9yRGlyZWN0aXZlKSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1heFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuXG4gICAgQElucHV0KCkgcHVibGljIHNldCBuZ3hNYXgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWF4KHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGNvbnRyb2wpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4VW5pcXVlQ2hlY2tdW2Zvcm1Db250cm9sTmFtZV0sW25neFVuaXF1ZUNoZWNrXVtmb3JtQ29udHJvbF0sW25neFVuaXF1ZUNoZWNrXVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX0FTWU5DX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFzeW5jVmFsaWRhdG9yIHtcbiAgICBASW5wdXQoKSBuZ3hVbmlxdWVDaGVjazogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbiB8IG51bGw+ID0gKHZhbHVlOiBhbnkpID0+IG9mKG51bGwpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycz4ge1xuICAgICAgICByZXR1cm4gTmd4VmFsaWRhdG9ycy51bmlxdWVDaGVja1ZhbGlkYXRvcih0aGlzLm5neFVuaXF1ZUNoZWNrKShjb250cm9sKTtcbiAgICB9XG59XG4iXX0=