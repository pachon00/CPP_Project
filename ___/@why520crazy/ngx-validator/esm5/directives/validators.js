/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validators, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { of } from 'rxjs';
import { NgxValidators } from '../validators';
var MinValidatorDirective = /** @class */ (function () {
    function MinValidatorDirective() {
    }
    Object.defineProperty(MinValidatorDirective.prototype, "ngxMin", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.validator = Validators.min(parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} control
     * @return {?}
     */
    MinValidatorDirective.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return this.validator(control);
    };
    MinValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxMin][formControlName],[ngxMin][formControl],[ngxMin][ngModel],',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(function () { return MinValidatorDirective; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    MinValidatorDirective.ctorParameters = function () { return []; };
    MinValidatorDirective.propDecorators = {
        ngxMin: [{ type: Input }]
    };
    return MinValidatorDirective;
}());
export { MinValidatorDirective };
if (false) {
    /** @type {?} */
    MinValidatorDirective.prototype.validator;
}
var MaxValidatorDirective = /** @class */ (function () {
    function MaxValidatorDirective() {
    }
    Object.defineProperty(MaxValidatorDirective.prototype, "ngxMax", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.validator = Validators.max(parseFloat(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} control
     * @return {?}
     */
    MaxValidatorDirective.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return this.validator(control);
    };
    MaxValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxMax][formControlName],[ngxMax][formControl],[ngxMax][ngModel]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(function () { return MaxValidatorDirective; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    MaxValidatorDirective.ctorParameters = function () { return []; };
    MaxValidatorDirective.propDecorators = {
        ngxMax: [{ type: Input }]
    };
    return MaxValidatorDirective;
}());
export { MaxValidatorDirective };
if (false) {
    /** @type {?} */
    MaxValidatorDirective.prototype.validator;
}
var NgxUniqueCheckDirective = /** @class */ (function () {
    function NgxUniqueCheckDirective() {
        this.ngxUniqueCheck = function (value) { return of(null); };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    NgxUniqueCheckDirective.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return NgxValidators.uniqueCheckValidator(this.ngxUniqueCheck)(control);
    };
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
    NgxUniqueCheckDirective.ctorParameters = function () { return []; };
    NgxUniqueCheckDirective.propDecorators = {
        ngxUniqueCheck: [{ type: Input }]
    };
    return NgxUniqueCheckDirective;
}());
export { NgxUniqueCheckDirective };
if (false) {
    /** @type {?} */
    NgxUniqueCheckDirective.prototype.ngxUniqueCheck;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBcUMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFDSCxhQUFhLEVBR2IsVUFBVSxFQUVWLG1CQUFtQixFQUd0QixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QztJQWtCSTtJQUFlLENBQUM7SUFKaEIsc0JBQW9CLHlDQUFNOzs7OztRQUExQixVQUEyQixLQUFhO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTs7Ozs7SUFJRCx3Q0FBUTs7OztJQUFSLFVBQVMsT0FBd0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQXRCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUNKLG9FQUFvRTtvQkFDeEUsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsQ0FBQzs0QkFDcEQsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQ0o7aUJBQ0o7Ozs7O3lCQUlJLEtBQUs7O0lBU1YsNEJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQVpZLHFCQUFxQjs7O0lBQzlCLDBDQUErQjs7QUFhbkM7SUFrQkk7SUFBZSxDQUFDO0lBSmhCLHNCQUFvQix5Q0FBTTs7Ozs7UUFBMUIsVUFBMkIsS0FBYTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7Ozs7O0lBSUQsd0NBQVE7Ozs7SUFBUixVQUFTLE9BQXdCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkF0QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFDSixtRUFBbUU7b0JBQ3ZFLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO2lCQUNKOzs7Ozt5QkFJSSxLQUFLOztJQVNWLDRCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FaWSxxQkFBcUI7OztJQUM5QiwwQ0FBK0I7O0FBYW5DO0lBYUk7UUFGUyxtQkFBYyxHQUErQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBUixDQUFRLENBQUM7SUFFaEYsQ0FBQzs7Ozs7SUFFaEIsMENBQVE7Ozs7SUFBUixVQUFTLE9BQXdCO1FBQzdCLE9BQU8sYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkFqQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwyRkFBMkY7b0JBQ3JHLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsbUJBQW1COzRCQUM1QixXQUFXLEVBQUUsdUJBQXVCOzRCQUNwQyxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFDSjtpQkFDSjs7Ozs7aUNBRUksS0FBSzs7SUFPViw4QkFBQztDQUFBLEFBbEJELElBa0JDO1NBUlksdUJBQXVCOzs7SUFDaEMsaURBQStGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUsIEluamVjdGFibGUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5HX1ZBTElEQVRPUlMsXG4gICAgVmFsaWRhdG9yLFxuICAgIEFic3RyYWN0Q29udHJvbCxcbiAgICBWYWxpZGF0b3JzLFxuICAgIFZhbGlkYXRvckZuLFxuICAgIE5HX0FTWU5DX1ZBTElEQVRPUlMsXG4gICAgQXN5bmNWYWxpZGF0b3IsXG4gICAgVmFsaWRhdGlvbkVycm9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9ycyB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjpcbiAgICAgICAgJ1tuZ3hNaW5dW2Zvcm1Db250cm9sTmFtZV0sW25neE1pbl1bZm9ybUNvbnRyb2xdLFtuZ3hNaW5dW25nTW9kZWxdLCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5WYWxpZGF0b3JEaXJlY3RpdmUpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWluVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgc2V0IG5neE1pbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5taW4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoY29udHJvbCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjpcbiAgICAgICAgJ1tuZ3hNYXhdW2Zvcm1Db250cm9sTmFtZV0sW25neE1heF1bZm9ybUNvbnRyb2xdLFtuZ3hNYXhdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1heFZhbGlkYXRvckRpcmVjdGl2ZSksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXhWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgbmd4TWF4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1heChwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjb250cm9sKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neFVuaXF1ZUNoZWNrXVtmb3JtQ29udHJvbE5hbWVdLFtuZ3hVbmlxdWVDaGVja11bZm9ybUNvbnRyb2xdLFtuZ3hVbmlxdWVDaGVja11bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19BU1lOQ19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBBc3luY1ZhbGlkYXRvciB7XG4gICAgQElucHV0KCkgbmd4VW5pcXVlQ2hlY2s6ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBudWxsPiA9ICh2YWx1ZTogYW55KSA9PiBvZihudWxsKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycz4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnM+IHtcbiAgICAgICAgcmV0dXJuIE5neFZhbGlkYXRvcnMudW5pcXVlQ2hlY2tWYWxpZGF0b3IodGhpcy5uZ3hVbmlxdWVDaGVjaykoY29udHJvbCk7XG4gICAgfVxufVxuIl19