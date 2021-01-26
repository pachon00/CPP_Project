/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxFormValidatorDirective } from './directives/form-validator.directive';
import { NgxFormSubmitDirective } from './directives/form-submit.directive';
// import { NgxUniqueCheckDirective } from './directives/form-unique-check.directive';
import { MaxValidatorDirective, MinValidatorDirective, NgxUniqueCheckDirective } from './directives/validators';
import { NGX_VALIDATOR_CONFIG } from './validator.class';
/** @type {?} */
var declarations = [
    NgxFormValidatorDirective,
    NgxFormSubmitDirective,
    NgxUniqueCheckDirective,
    MaxValidatorDirective,
    MinValidatorDirective
];
var NgxValidatorModule = /** @class */ (function () {
    function NgxValidatorModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgxValidatorModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgxValidatorModule,
            providers: [
                {
                    provide: NGX_VALIDATOR_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    NgxValidatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: declarations,
                    imports: [FormsModule],
                    exports: tslib_1.__spread(declarations, [FormsModule])
                },] }
    ];
    return NgxValidatorModule;
}());
export { NgxValidatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJtb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhILE9BQU8sRUFBNEIsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFN0UsWUFBWSxHQUFHO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQkFBcUI7Q0FDeEI7QUFFRDtJQUFBO0lBaUJBLENBQUM7Ozs7O0lBWFUsMEJBQU87Ozs7SUFBZCxVQUFlLE1BQWdDO1FBQzNDLE9BQU87WUFDSCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixRQUFRLEVBQUUsTUFBTTtpQkFDbkI7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDOztnQkFoQkosUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ3RCLE9BQU8sbUJBQU0sWUFBWSxHQUFFLFdBQVcsRUFBQztpQkFDMUM7O0lBYUQseUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neEZvcm1TdWJtaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlJztcblxuLy8gaW1wb3J0IHsgTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS11bmlxdWUtY2hlY2suZGlyZWN0aXZlJztcbmltcG9ydCB7IE1heFZhbGlkYXRvckRpcmVjdGl2ZSwgTWluVmFsaWRhdG9yRGlyZWN0aXZlLCBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcblxuaW1wb3J0IHsgTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnLCBOR1hfVkFMSURBVE9SX0NPTkZJRyB9IGZyb20gJy4vdmFsaWRhdG9yLmNsYXNzJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICAgIE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgTmd4Rm9ybVN1Ym1pdERpcmVjdGl2ZSxcbiAgICBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSxcbiAgICBNYXhWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgTWluVmFsaWRhdG9yRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZV0sXG4gICAgZXhwb3J0czogWy4uLmRlY2xhcmF0aW9ucywgRm9ybXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRvck1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hWYWxpZGF0b3JNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IE5HWF9WQUxJREFUT1JfQ09ORklHLFxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==