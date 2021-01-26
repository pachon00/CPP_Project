/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxFormValidatorDirective } from './directives/form-validator.directive';
import { NgxFormSubmitDirective } from './directives/form-submit.directive';
// import { NgxUniqueCheckDirective } from './directives/form-unique-check.directive';
import { MaxValidatorDirective, MinValidatorDirective, NgxUniqueCheckDirective } from './directives/validators';
import { NGX_VALIDATOR_CONFIG } from './validator.class';
/** @type {?} */
const declarations = [
    NgxFormValidatorDirective,
    NgxFormSubmitDirective,
    NgxUniqueCheckDirective,
    MaxValidatorDirective,
    MinValidatorDirective
];
export class NgxValidatorModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgxValidatorModule,
            providers: [
                {
                    provide: NGX_VALIDATOR_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
NgxValidatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations,
                imports: [FormsModule],
                exports: [...declarations, FormsModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJtb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFHNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEgsT0FBTyxFQUE0QixvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztNQUU3RSxZQUFZLEdBQUc7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtDQUN4QjtBQU9ELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBZ0M7UUFDM0MsT0FBTztZQUNILFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7OztZQWhCSixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDdEIsT0FBTyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsV0FBVyxDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4Rm9ybVN1Ym1pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXN1Ym1pdC5kaXJlY3RpdmUnO1xuXG4vLyBpbXBvcnQgeyBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXVuaXF1ZS1jaGVjay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF4VmFsaWRhdG9yRGlyZWN0aXZlLCBNaW5WYWxpZGF0b3JEaXJlY3RpdmUsIE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcsIE5HWF9WQUxJREFUT1JfQ09ORklHIH0gZnJvbSAnLi92YWxpZGF0b3IuY2xhc3MnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gICAgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlLFxuICAgIE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlLFxuICAgIE1heFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBNaW5WYWxpZGF0b3JEaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbLi4uZGVjbGFyYXRpb25zLCBGb3Jtc01vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdG9yTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neFZhbGlkYXRvck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogTkdYX1ZBTElEQVRPUl9DT05GSUcsXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19