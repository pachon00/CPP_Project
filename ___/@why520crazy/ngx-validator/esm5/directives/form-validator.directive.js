/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, NgZone, Renderer2, ElementRef, Input, ContentChildren, QueryList } from '@angular/core';
import { NgxFormValidatorService } from '../validator.service';
import { ControlContainer, NgControl } from '@angular/forms';
/** @type {?} */
var KEY_CODES_ENTER = 13;
/** @enum {string} */
var NgxEnterKeyMode = {
    submit: 'submit',
    alwaysSubmit: 'alwaysSubmit',
    forbidSubmit: 'forbidSubmit',
};
export { NgxEnterKeyMode };
var NgxFormValidatorDirective = /** @class */ (function () {
    function NgxFormValidatorDirective(ngZone, renderer, elementRef, _validator, ngForm) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._validator = _validator;
        this.ngForm = ngForm;
    }
    Object.defineProperty(NgxFormValidatorDirective.prototype, "ngxFormValidatorConfig", {
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this.validator.setValidatorConfig(config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxFormValidatorDirective.prototype, "ngxFormValidator", {
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this.validator.setValidatorConfig(config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxFormValidatorDirective.prototype, "validator", {
        get: /**
         * @return {?}
         */
        function () {
            return this._validator;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxFormValidatorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.unsubscribe = _this.renderer.listen(_this.elementRef.nativeElement, 'keydown', _this.onKeydown.bind(_this));
        });
        this.validator.initialize((/** @type {?} */ (this.ngForm)), this.elementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    NgxFormValidatorDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.validator.initializeFormControlsValidation(this.controls.toArray());
        this.controls.changes.subscribe(function (controls) {
            _this.validator.initializeFormControlsValidation(_this.controls.toArray());
        });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxFormValidatorDirective.prototype.submit = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.validator.validate($event) && this.onSubmitSuccess) {
            this.onSubmitSuccess($event);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxFormValidatorDirective.prototype.submitRunInZone = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this.ngZone.run(function () {
            _this.submit($event);
        });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxFormValidatorDirective.prototype.onKeydown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var currentInput = document.activeElement;
        /** @type {?} */
        var key = $event.which || $event.keyCode;
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
    };
    /**
     * @return {?}
     */
    NgxFormValidatorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    };
    NgxFormValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'form[ngxFormValidator],form[ngx-form-validator]',
                    providers: [NgxFormValidatorService],
                    exportAs: 'ngxFormValidator'
                },] }
    ];
    /** @nocollapse */
    NgxFormValidatorDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgxFormValidatorService },
        { type: ControlContainer }
    ]; };
    NgxFormValidatorDirective.propDecorators = {
        controls: [{ type: ContentChildren, args: [NgControl, {
                        descendants: true
                    },] }],
        enterKeyMode: [{ type: Input }],
        ngxFormValidatorConfig: [{ type: Input }],
        ngxFormValidator: [{ type: Input }]
    };
    return NgxFormValidatorDirective;
}());
export { NgxFormValidatorDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2Zvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsZUFBZSxFQUVmLFNBQVMsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQVUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRy9ELGVBQWUsR0FBRyxFQUFFOzs7SUFPdEIsUUFBUyxRQUFRO0lBQ2pCLGNBQWUsY0FBYztJQUM3QixjQUFlLGNBQWM7OztBQUdqQztJQStCSSxtQ0FDWSxNQUFjLEVBQ2QsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsVUFBbUMsRUFDbkMsTUFBd0I7UUFKeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUNqQyxDQUFDO0lBcEJKLHNCQUNJLDZEQUFzQjs7Ozs7UUFEMUIsVUFDMkIsTUFBMEI7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHVEQUFnQjs7Ozs7UUFEcEIsVUFDcUIsTUFBMEI7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdE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U0FDdEI7SUFDTCxDQUFDOztnQkFuR0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpREFBaUQ7b0JBQzNELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNwQyxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkE3QkcsTUFBTTtnQkFDTixTQUFTO2dCQUNULFVBQVU7Z0JBT0wsdUJBQXVCO2dCQUNmLGdCQUFnQjs7OzJCQXFCNUIsZUFBZSxTQUFDLFNBQVMsRUFBRTt3QkFDeEIsV0FBVyxFQUFFLElBQUk7cUJBQ3BCOytCQU9BLEtBQUs7eUNBRUwsS0FBSzttQ0FLTCxLQUFLOztJQThFVixnQ0FBQztDQUFBLEFBcEdELElBb0dDO1NBL0ZZLHlCQUF5Qjs7O0lBQ2xDLDZDQUdzQzs7SUFFdEMsZ0RBQWdDOztJQUVoQyxvREFBdUM7O0lBRXZDLGlEQUF1Qzs7SUFpQm5DLDJDQUFzQjs7SUFDdEIsNkNBQTJCOztJQUMzQiwrQ0FBOEI7O0lBQzlCLCtDQUEyQzs7SUFDM0MsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgT25Jbml0LFxuICAgIE5nWm9uZSxcbiAgICBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuLi92YWxpZGF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBOZ0Zvcm0sIENvbnRyb2xDb250YWluZXIsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neFZhbGlkYXRvckNvbmZpZyB9IGZyb20gJy4uL3ZhbGlkYXRvci5jbGFzcyc7XG5cbmNvbnN0IEtFWV9DT0RFU19FTlRFUiA9IDEzO1xuXG4vLyAxLiBzdWJtaXQg5oyJIEVudGVyIOmUruaPkOS6pCwgVGV4dGFyZSDpmaTlpJbvvIzpnIDopoHmjIkgQ3RybCB8IENvbW1hbmQgKyBFbnRlciDmj5DkuqRcbi8vIDIuIGFsd2F5c1N1Ym1pdCDkuI3nrqHmmK/lk6rkuKrlhYPntKAg5oyJIEVudGVyIOmUrumDveaPkOS6pFxuLy8gMy4gZm9yYmlkU3VibWl0IFxiRW50ZXIg6ZSu56aB5q2i5o+Q5LqkXG4vLyDpu5jorqQgc3VibWl0XG5leHBvcnQgZW51bSBOZ3hFbnRlcktleU1vZGUge1xuICAgIHN1Ym1pdCA9ICdzdWJtaXQnLFxuICAgIGFsd2F5c1N1Ym1pdCA9ICdhbHdheXNTdWJtaXQnLFxuICAgIGZvcmJpZFN1Ym1pdCA9ICdmb3JiaWRTdWJtaXQnXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZm9ybVtuZ3hGb3JtVmFsaWRhdG9yXSxmb3JtW25neC1mb3JtLXZhbGlkYXRvcl0nLFxuICAgIHByb3ZpZGVyczogW05neEZvcm1WYWxpZGF0b3JTZXJ2aWNlXSxcbiAgICBleHBvcnRBczogJ25neEZvcm1WYWxpZGF0b3InXG59KVxuZXhwb3J0IGNsYXNzIE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ0NvbnRyb2wsIHtcbiAgICAgICAgZGVzY2VuZGFudHM6IHRydWVcbiAgICB9KVxuICAgIHB1YmxpYyBjb250cm9sczogUXVlcnlMaXN0PE5nQ29udHJvbD47XG5cbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkO1xuXG4gICAgb25TdWJtaXRTdWNjZXNzOiAoJGV2ZW50OiBhbnkpID0+IHZvaWQ7XG5cbiAgICBASW5wdXQoKSBlbnRlcktleU1vZGU6IE5neEVudGVyS2V5TW9kZTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5neEZvcm1WYWxpZGF0b3JDb25maWcoY29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iuc2V0VmFsaWRhdG9yQ29uZmlnKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmd4Rm9ybVZhbGlkYXRvcihjb25maWc6IE5neFZhbGlkYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5zZXRWYWxpZGF0b3JDb25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBuZ0Zvcm06IENvbnRyb2xDb250YWluZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbGlkYXRvci5pbml0aWFsaXplKHRoaXMubmdGb3JtIGFzIE5nRm9ybSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24odGhpcy5jb250cm9scy50b0FycmF5KCkpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzLmNoYW5nZXMuc3Vic2NyaWJlKGNvbnRyb2xzID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmluaXRpYWxpemVGb3JtQ29udHJvbHNWYWxpZGF0aW9uKHRoaXMuY29udHJvbHMudG9BcnJheSgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0KCRldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKCRldmVudCkgJiYgdGhpcy5vblN1Ym1pdFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXRTdWNjZXNzKCRldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRSdW5JblpvbmUoJGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXQoJGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25LZXlkb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5wdXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBrZXkgPSAkZXZlbnQud2hpY2ggfHwgJGV2ZW50LmtleUNvZGU7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWV9DT0RFU19FTlRFUiAmJiBjdXJyZW50SW5wdXQudGFnTmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVudGVyS2V5TW9kZSB8fCB0aGlzLmVudGVyS2V5TW9kZSA9PT0gTmd4RW50ZXJLZXlNb2RlLnN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIC8vIFRFWFRBUkVBIEN0cmwgKyBFbnRlciDmiJbogIUgQ29tbWFuZCArIEVudGVyIOmYu+atolxi6buY6K6k6KGM5Li65bm25o+Q5LqkXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnB1dC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQuY3RybEtleSB8fCAkZXZlbnQubWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5LiN5pivIFRFWFRBUkVBIEVudGVyIOmYu+atolxi6buY6K6k6KGM5Li65bm25o+Q5LqkXG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbnRlcktleU1vZGUgPT09IE5neEVudGVyS2V5TW9kZS5hbHdheXNTdWJtaXQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==