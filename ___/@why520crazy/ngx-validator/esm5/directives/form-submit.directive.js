/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
import { NgxFormValidatorDirective } from './form-validator.directive';
var NgxFormSubmitDirective = /** @class */ (function () {
    function NgxFormSubmitDirective(validatorDirective) {
        this.validatorDirective = validatorDirective;
        this.ngxFormSubmit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxFormSubmitDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.validatorDirective.onSubmitSuccess = function ($event) {
            _this.ngxFormSubmit.emit($event);
        };
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxFormSubmitDirective.prototype.onSubmit = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.validatorDirective.submit($event);
    };
    NgxFormSubmitDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxFormSubmit],[ngx-form-submit]'
                },] }
    ];
    /** @nocollapse */
    NgxFormSubmitDirective.ctorParameters = function () { return [
        { type: NgxFormValidatorDirective }
    ]; };
    NgxFormSubmitDirective.propDecorators = {
        ngxFormSubmit: [{ type: Output }],
        onSubmit: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NgxFormSubmitDirective;
}());
export { NgxFormSubmitDirective };
if (false) {
    /** @type {?} */
    NgxFormSubmitDirective.prototype.ngxFormSubmit;
    /** @type {?} */
    NgxFormSubmitDirective.prototype.validatorDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zdWJtaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2Zvcm0tc3VibWl0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQXVCLFlBQVksRUFBWSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdkU7SUFPSSxnQ0FDWSxrQkFBNkM7UUFBN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEyQjtRQUgvQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLN0MsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsR0FBRyxVQUFDLE1BQVc7WUFDbEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFHRCx5Q0FBUTs7OztJQURSLFVBQ1MsTUFBVztRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQXJCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1DQUFtQztpQkFDaEQ7Ozs7Z0JBSlEseUJBQXlCOzs7Z0NBTzdCLE1BQU07MkJBYU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFJckMsNkJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQW5CWSxzQkFBc0I7OztJQUUvQiwrQ0FBNkM7O0lBR3pDLG9EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neEZvcm1TdWJtaXRdLFtuZ3gtZm9ybS1zdWJtaXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBPdXRwdXQoKSBuZ3hGb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdmFsaWRhdG9yRGlyZWN0aXZlOiBOZ3hGb3JtVmFsaWRhdG9yRGlyZWN0aXZlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yRGlyZWN0aXZlLm9uU3VibWl0U3VjY2VzcyA9ICgkZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ3hGb3JtU3VibWl0LmVtaXQoJGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25TdWJtaXQoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JEaXJlY3RpdmUuc3VibWl0KCRldmVudCk7XG4gICAgfVxufVxuIl19