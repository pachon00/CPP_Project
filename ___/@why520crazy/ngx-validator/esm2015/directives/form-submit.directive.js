/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
import { NgxFormValidatorDirective } from './form-validator.directive';
export class NgxFormSubmitDirective {
    /**
     * @param {?} validatorDirective
     */
    constructor(validatorDirective) {
        this.validatorDirective = validatorDirective;
        this.ngxFormSubmit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validatorDirective.onSubmitSuccess = ($event) => {
            this.ngxFormSubmit.emit($event);
        };
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onSubmit($event) {
        this.validatorDirective.submit($event);
    }
}
NgxFormSubmitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxFormSubmit],[ngx-form-submit]'
            },] }
];
/** @nocollapse */
NgxFormSubmitDirective.ctorParameters = () => [
    { type: NgxFormValidatorDirective }
];
NgxFormSubmitDirective.propDecorators = {
    ngxFormSubmit: [{ type: Output }],
    onSubmit: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NgxFormSubmitDirective.prototype.ngxFormSubmit;
    /** @type {?} */
    NgxFormSubmitDirective.prototype.validatorDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zdWJtaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2Zvcm0tc3VibWl0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQXVCLFlBQVksRUFBWSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLdkUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUkvQixZQUNZLGtCQUE2QztRQUE3Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJCO1FBSC9DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUs3QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUdELFFBQVEsQ0FBQyxNQUFXO1FBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBckJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUNBQW1DO2FBQ2hEOzs7O1lBSlEseUJBQXlCOzs7NEJBTzdCLE1BQU07dUJBYU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWJqQywrQ0FBNkM7O0lBR3pDLG9EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neEZvcm1TdWJtaXRdLFtuZ3gtZm9ybS1zdWJtaXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBPdXRwdXQoKSBuZ3hGb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdmFsaWRhdG9yRGlyZWN0aXZlOiBOZ3hGb3JtVmFsaWRhdG9yRGlyZWN0aXZlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yRGlyZWN0aXZlLm9uU3VibWl0U3VjY2VzcyA9ICgkZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ3hGb3JtU3VibWl0LmVtaXQoJGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25TdWJtaXQoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JEaXJlY3RpdmUuc3VibWl0KCRldmVudCk7XG4gICAgfVxufVxuIl19