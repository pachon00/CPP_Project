/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, NgZone, Renderer2, ElementRef, Input, ContentChildren, QueryList } from '@angular/core';
import { NgxFormValidatorService } from '../validator.service';
import { ControlContainer, NgControl } from '@angular/forms';
/** @type {?} */
const KEY_CODES_ENTER = 13;
/** @enum {string} */
const NgxEnterKeyMode = {
    submit: 'submit',
    alwaysSubmit: 'alwaysSubmit',
    forbidSubmit: 'forbidSubmit',
};
export { NgxEnterKeyMode };
export class NgxFormValidatorDirective {
    /**
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} _validator
     * @param {?} ngForm
     */
    constructor(ngZone, renderer, elementRef, _validator, ngForm) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._validator = _validator;
        this.ngForm = ngForm;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set ngxFormValidatorConfig(config) {
        this.validator.setValidatorConfig(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set ngxFormValidator(config) {
        this.validator.setValidatorConfig(config);
    }
    /**
     * @return {?}
     */
    get validator() {
        return this._validator;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            this.unsubscribe = this.renderer.listen(this.elementRef.nativeElement, 'keydown', this.onKeydown.bind(this));
        });
        this.validator.initialize((/** @type {?} */ (this.ngForm)), this.elementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.validator.initializeFormControlsValidation(this.controls.toArray());
        this.controls.changes.subscribe(controls => {
            this.validator.initializeFormControlsValidation(this.controls.toArray());
        });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    submit($event) {
        if (this.validator.validate($event) && this.onSubmitSuccess) {
            this.onSubmitSuccess($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    submitRunInZone($event) {
        this.ngZone.run(() => {
            this.submit($event);
        });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeydown($event) {
        /** @type {?} */
        const currentInput = document.activeElement;
        /** @type {?} */
        const key = $event.which || $event.keyCode;
        if (key === KEY_CODES_ENTER && currentInput.tagName) {
            if (!this.enterKeyMode || this.enterKeyMode === NgxEnterKeyMode.submit) {
                // TEXTAREA Ctrl + Enter 或者 Command + Enter 阻止默认行为并提交
                if (currentInput.tagName === 'TEXTAREA') {
                    if ($event.ctrlKey || $event.metaKey) {
                        $event.preventDefault();
                        this.submitRunInZone($event);
                    }
                }
                else {
                    // 不是 TEXTAREA Enter 阻止默认行为并提交
                    $event.preventDefault();
                    this.submitRunInZone($event);
                }
            }
            else if (this.enterKeyMode === NgxEnterKeyMode.alwaysSubmit) {
                $event.preventDefault();
                this.submitRunInZone($event);
            }
            else {
                // do nothing
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}
NgxFormValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'form[ngxFormValidator],form[ngx-form-validator]',
                providers: [NgxFormValidatorService],
                exportAs: 'ngxFormValidator'
            },] }
];
/** @nocollapse */
NgxFormValidatorDirective.ctorParameters = () => [
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgxFormValidatorService },
    { type: ControlContainer }
];
NgxFormValidatorDirective.propDecorators = {
    controls: [{ type: ContentChildren, args: [NgControl, {
                    descendants: true
                },] }],
    enterKeyMode: [{ type: Input }],
    ngxFormValidatorConfig: [{ type: Input }],
    ngxFormValidator: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxFormValidatorDirective.prototype.controls;
    /** @type {?} */
    NgxFormValidatorDirective.prototype.unsubscribe;
    /** @type {?} */
    NgxFormValidatorDirective.prototype.onSubmitSuccess;
    /** @type {?} */
    NgxFormValidatorDirective.prototype.enterKeyMode;
    /** @type {?} */
    NgxFormValidatorDirective.prototype.ngZone;
    /** @type {?} */
    NgxFormValidatorDirective.prototype.renderer;
    /** @type {?} */
    NgxFormValidatorDirective.prototype.elementRef;
    /** @type {?} */
    NgxFormValidatorDirective.prototype._validator;
    /** @type {?} */
    NgxFormValidatorDirective.prototype.ngForm;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2Zvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsZUFBZSxFQUVmLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQVUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRy9ELGVBQWUsR0FBRyxFQUFFOzs7SUFPdEIsUUFBUyxRQUFRO0lBQ2pCLGNBQWUsY0FBYztJQUM3QixjQUFlLGNBQWM7OztBQVFqQyxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7OztJQTBCbEMsWUFDWSxNQUFjLEVBQ2QsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsVUFBbUMsRUFDbkMsTUFBd0I7UUFKeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUNqQyxDQUFDOzs7OztJQXBCSixJQUNJLHNCQUFzQixDQUFDLE1BQTBCO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxJQUNJLGdCQUFnQixDQUFDLE1BQTBCO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOzs7O0lBVUQsUUFBUTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixTQUFTLEVBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzVCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6RCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBYTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQXFCOztjQUNyQixZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWE7O2NBQ3JDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPO1FBQzFDLElBQUksR0FBRyxLQUFLLGVBQWUsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDcEUsc0RBQXNEO2dCQUN0RCxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO29CQUNyQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTt3QkFDbEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNoQztpQkFDSjtxQkFBTTtvQkFDSCwrQkFBK0I7b0JBQy9CLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssZUFBZSxDQUFDLFlBQVksRUFBRTtnQkFDM0QsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNILGFBQWE7YUFDaEI7U0FDSjtJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7OztZQW5HSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlEQUFpRDtnQkFDM0QsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUE3QkcsTUFBTTtZQUNOLFNBQVM7WUFDVCxVQUFVO1lBT0wsdUJBQXVCO1lBQ2YsZ0JBQWdCOzs7dUJBcUI1QixlQUFlLFNBQUMsU0FBUyxFQUFFO29CQUN4QixXQUFXLEVBQUUsSUFBSTtpQkFDcEI7MkJBT0EsS0FBSztxQ0FFTCxLQUFLOytCQUtMLEtBQUs7Ozs7SUFoQk4sNkNBR3NDOztJQUV0QyxnREFBZ0M7O0lBRWhDLG9EQUF1Qzs7SUFFdkMsaURBQXVDOztJQWlCbkMsMkNBQXNCOztJQUN0Qiw2Q0FBMkI7O0lBQzNCLCtDQUE4Qjs7SUFDOUIsK0NBQTJDOztJQUMzQywyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBPbkluaXQsXG4gICAgTmdab25lLFxuICAgIFJlbmRlcmVyMixcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uRGVzdHJveSxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uL3ZhbGlkYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IE5nRm9ybSwgQ29udHJvbENvbnRhaW5lciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9yQ29uZmlnIH0gZnJvbSAnLi4vdmFsaWRhdG9yLmNsYXNzJztcblxuY29uc3QgS0VZX0NPREVTX0VOVEVSID0gMTM7XG5cbi8vIDEuIHN1Ym1pdCDmjIkgRW50ZXIg6ZSu5o+Q5LqkLCBUZXh0YXJlIOmZpOWklu+8jOmcgOimgeaMiSBDdHJsIHwgQ29tbWFuZCArIEVudGVyIOaPkOS6pFxuLy8gMi4gYWx3YXlzU3VibWl0IOS4jeeuoeaYr+WTquS4quWFg+e0oCDmjIkgRW50ZXIg6ZSu6YO95o+Q5LqkXG4vLyAzLiBmb3JiaWRTdWJtaXQgXGJFbnRlciDplK7npoHmraLmj5DkuqRcbi8vIOm7mOiupCBzdWJtaXRcbmV4cG9ydCBlbnVtIE5neEVudGVyS2V5TW9kZSB7XG4gICAgc3VibWl0ID0gJ3N1Ym1pdCcsXG4gICAgYWx3YXlzU3VibWl0ID0gJ2Fsd2F5c1N1Ym1pdCcsXG4gICAgZm9yYmlkU3VibWl0ID0gJ2ZvcmJpZFN1Ym1pdCdcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdmb3JtW25neEZvcm1WYWxpZGF0b3JdLGZvcm1bbmd4LWZvcm0tdmFsaWRhdG9yXScsXG4gICAgcHJvdmlkZXJzOiBbTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2VdLFxuICAgIGV4cG9ydEFzOiAnbmd4Rm9ybVZhbGlkYXRvcidcbn0pXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBAQ29udGVudENoaWxkcmVuKE5nQ29udHJvbCwge1xuICAgICAgICBkZXNjZW5kYW50czogdHJ1ZVxuICAgIH0pXG4gICAgcHVibGljIGNvbnRyb2xzOiBRdWVyeUxpc3Q8TmdDb250cm9sPjtcblxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWQ7XG5cbiAgICBvblN1Ym1pdFN1Y2Nlc3M6ICgkZXZlbnQ6IGFueSkgPT4gdm9pZDtcblxuICAgIEBJbnB1dCgpIGVudGVyS2V5TW9kZTogTmd4RW50ZXJLZXlNb2RlO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmd4Rm9ybVZhbGlkYXRvckNvbmZpZyhjb25maWc6IE5neFZhbGlkYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5zZXRWYWxpZGF0b3JDb25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ3hGb3JtVmFsaWRhdG9yKGNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLnNldFZhbGlkYXRvckNvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF92YWxpZGF0b3I6IE5neEZvcm1WYWxpZGF0b3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5nRm9ybTogQ29udHJvbENvbnRhaW5lclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmluaXRpYWxpemUodGhpcy5uZ0Zvcm0gYXMgTmdGb3JtLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5pbml0aWFsaXplRm9ybUNvbnRyb2xzVmFsaWRhdGlvbih0aGlzLmNvbnRyb2xzLnRvQXJyYXkoKSk7XG4gICAgICAgIHRoaXMuY29udHJvbHMuY2hhbmdlcy5zdWJzY3JpYmUoY29udHJvbHMgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24odGhpcy5jb250cm9scy50b0FycmF5KCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoJGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IudmFsaWRhdGUoJGV2ZW50KSAmJiB0aGlzLm9uU3VibWl0U3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdFN1Y2Nlc3MoJGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCgkZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbktleWRvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbnB1dCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGtleSA9ICRldmVudC53aGljaCB8fCAkZXZlbnQua2V5Q29kZTtcbiAgICAgICAgaWYgKGtleSA9PT0gS0VZX0NPREVTX0VOVEVSICYmIGN1cnJlbnRJbnB1dC50YWdOYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZW50ZXJLZXlNb2RlIHx8IHRoaXMuZW50ZXJLZXlNb2RlID09PSBOZ3hFbnRlcktleU1vZGUuc3VibWl0KSB7XG4gICAgICAgICAgICAgICAgLy8gVEVYVEFSRUEgQ3RybCArIEVudGVyIOaIluiAhSBDb21tYW5kICsgRW50ZXIg6Zi75q2iXGLpu5jorqTooYzkuLrlubbmj5DkuqRcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudElucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC5jdHJsS2V5IHx8ICRldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDkuI3mmK8gVEVYVEFSRUEgRW50ZXIg6Zi75q2iXGLpu5jorqTooYzkuLrlubbmj5DkuqRcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVudGVyS2V5TW9kZSA9PT0gTmd4RW50ZXJLZXlNb2RlLmFsd2F5c1N1Ym1pdCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19