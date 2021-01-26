/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgForm, FormGroupDirective } from '@angular/forms';
import { NgxValidatorLoader } from './validator-loader.service';
import { transformMessage } from './message-transformers';
export class NgxFormValidatorService {
    /**
     * @param {?} thyFormValidateLoader
     */
    constructor(thyFormValidateLoader) {
        this.thyFormValidateLoader = thyFormValidateLoader;
        this._controls = [];
        // public errors: string[];
        // 记录所有元素的验证信息
        this.validations = {};
    }
    /**
     * @return {?}
     */
    _getValidationFeedbackStrategy() {
        /** @type {?} */
        const strategy = (this._config && this._config.validationFeedbackStrategy) ||
            this.thyFormValidateLoader.validationFeedbackStrategy;
        if (!strategy) {
            throw new Error(`validation display strategy is null`);
        }
        return strategy;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    _getElement(name) {
        /** @type {?} */
        const element = this._formElement[name];
        if (element) {
            return element;
        }
        else {
            return this._formElement.querySelector(`[name='${name}']`);
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    _clearElementError(name) {
        if (this.validations[name] && this.validations[name].hasError) {
            this.validations[name].hasError = false;
            this.validations[name].errorMessages = [];
            this._getValidationFeedbackStrategy().removeError(this._getElement(name));
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    _tryGetValidation(name) {
        if (!this.validations[name]) {
            this._initializeFormControlValidation(name, this._getControlByName(name));
        }
        return this.validations[name];
    }
    /**
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    _initializeFormControlValidation(name, control) {
        this.validations[name] = {
            hasError: false,
            errorMessages: []
        };
        control.valueChanges.subscribe(() => {
            this._clearElementError(name);
        });
    }
    /**
     * @param {?} name
     * @return {?}
     */
    _restFormControlValidation(name) {
        /** @type {?} */
        const validation = this.validations[name];
        if (validation) {
            validation.hasError = false;
            validation.errorMessages = [];
        }
    }
    /**
     * @param {?} name
     * @param {?} validationErrorName
     * @param {?=} validationErrorValues
     * @return {?}
     */
    _getValidationMessage(name, validationErrorName, validationErrorValues) {
        /** @type {?} */
        let message = '';
        if (this._config &&
            this._config.validationMessages &&
            this._config.validationMessages[name] &&
            this._config.validationMessages[name][validationErrorName]) {
            message = this._config.validationMessages[name][validationErrorName];
        }
        else {
            message = this.thyFormValidateLoader.getErrorMessage(name, validationErrorName, validationErrorValues);
        }
        return transformMessage(validationErrorName, message, validationErrorValues);
    }
    /**
     * @param {?} name
     * @param {?} validationErrors
     * @return {?}
     */
    _getValidationMessages(name, validationErrors) {
        /** @type {?} */
        const messages = [];
        for (const validationError in validationErrors) {
            if (validationErrors.hasOwnProperty(validationError)) {
                messages.push(this._getValidationMessage(name, validationError, validationErrors[validationError]));
            }
        }
        return messages;
    }
    /**
     * @param {?} name
     * @param {?} errorMessages
     * @return {?}
     */
    _setControlValidationError(name, errorMessages) {
        /** @type {?} */
        const validation = this._tryGetValidation(name);
        validation.errorMessages = errorMessages;
        validation.hasError = true;
        this._getValidationFeedbackStrategy().showError(this._getElement(name), errorMessages);
    }
    /**
     * @return {?}
     */
    get validatorConfig() {
        return this._config;
    }
    /**
     * @param {?} ngForm
     * @param {?} formElement
     * @return {?}
     */
    initialize(ngForm, formElement) {
        this._ngForm = ngForm;
        this._formElement = formElement;
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    initializeFormControlsValidation(controls) {
        if ((this._config && this._config.validateOn === 'blur') || this.thyFormValidateLoader.validateOn === 'blur') {
            (controls || []).forEach((control) => {
                if (!this._controls.find(item => item.name === control.name)) {
                    this._initializeFormControlValidation(control.name, control);
                    /** @type {?} */
                    const element = this._getElement(control.name);
                    if (element) {
                        element.onblur = (event) => {
                            this.validateControl(control.name);
                        };
                    }
                }
            });
            this._controls = controls;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setValidatorConfig(config) {
        this._config = config;
    }
    /**
     * @return {?}
     */
    _getControls() {
        if (this._ngForm instanceof NgForm) {
            return ((/** @type {?} */ (this._ngForm))).controls;
        }
        else if (this._ngForm instanceof FormGroupDirective) {
            /** @type {?} */
            const controls = {};
            ((/** @type {?} */ (this._ngForm))).directives.forEach(directive => {
                controls[directive.name] = directive;
            });
            return controls;
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    _getControlByName(name) {
        /** @type {?} */
        const controls = this._getControls();
        return controls[name];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    validateControl(name) {
        this._clearElementError(name);
        /** @type {?} */
        const control = this._getControlByName(name);
        if (control && control.invalid) {
            /** @type {?} */
            const errorMessages = this._getValidationMessages(name, control.errors);
            this._setControlValidationError(name, errorMessages);
        }
    }
    /**
     * @return {?}
     */
    validateControls() {
        // 主要是 无法检测到 ngForm 的 controls 的变化，或者是我没有找到
        // 验证的时候循环 ngForm 的 controls 验证
        // 发现没有 validation 初始化一个，已经存在不会重新初始化，保存缓存数据
        /** @type {?} */
        const controls = this._getControls();
        for (const name in controls) {
            if (controls.hasOwnProperty(name)) {
                this._tryGetValidation(name);
                this.validateControl(name);
            }
        }
        // 移除已经不存在的 validation
        /** @type {?} */
        const names = Object.keys(this.validations);
        names.forEach(name => {
            if (!controls[name]) {
                delete this.validations[name];
            }
        });
    }
    /**
     * @param {?=} $event
     * @return {?}
     */
    validate($event) {
        this._ngForm.onSubmit($event);
        this.validateControls();
        return this._ngForm.valid;
    }
    /**
     * @return {?}
     */
    reset() {
        this._ngForm.reset();
        for (const name in this.validations) {
            if (this.validations.hasOwnProperty(name)) {
                this._restFormControlValidation(name);
                this._clearElementError(name);
            }
        }
    }
    /**
     * @param {?} name
     * @param {?} message
     * @return {?}
     */
    markControlAsError(name, message) {
        this._clearElementError(name);
        this._setControlValidationError(name, [message]);
    }
}
NgxFormValidatorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxFormValidatorService.ctorParameters = () => [
    { type: NgxValidatorLoader }
];
if (false) {
    /** @type {?} */
    NgxFormValidatorService.prototype._ngForm;
    /** @type {?} */
    NgxFormValidatorService.prototype._formElement;
    /** @type {?} */
    NgxFormValidatorService.prototype._config;
    /** @type {?} */
    NgxFormValidatorService.prototype._controls;
    /** @type {?} */
    NgxFormValidatorService.prototype.validations;
    /** @type {?} */
    NgxFormValidatorService.prototype.thyFormValidateLoader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci8iLCJzb3VyY2VzIjpbInZhbGlkYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDSCxNQUFNLEVBR04sa0JBQWtCLEVBR3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJMUQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQTBHaEMsWUFBb0IscUJBQXlDO1FBQXpDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBb0I7UUFuR3JELGNBQVMsR0FBZ0IsRUFBRSxDQUFDOzs7UUFLN0IsZ0JBQVcsR0FHYixFQUFFLENBQUM7SUEyRndELENBQUM7Ozs7SUF6RnpELDhCQUE4Qjs7Y0FDNUIsUUFBUSxHQUNWLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDO1lBQ3pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQywwQkFBMEI7UUFDekQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sV0FBVyxDQUFDLElBQVk7O2NBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUN2QyxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDO1NBQ2xCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMs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akMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7U0FDSjtJQUNMLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFDLElBQVksRUFBRSxPQUFlO1FBQzVDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUF4TUosVUFBVTs7OztZQUxGLGtCQUFrQjs7OztJQU92QiwwQ0FBNkM7O0lBRTdDLCtDQUFrQzs7SUFFbEMsMENBQW9DOztJQUVwQyw0Q0FBb0M7O0lBS3BDLDhDQUdROztJQTJGSSx3REFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5nRm9ybSxcbiAgICBBYnN0cmFjdENvbnRyb2wsXG4gICAgVmFsaWRhdGlvbkVycm9ycyxcbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgRm9ybUNvbnRyb2xOYW1lLFxuICAgIE5nQ29udHJvbFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JMb2FkZXIgfSBmcm9tICcuL3ZhbGlkYXRvci1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JDb25maWcsIERpY3Rpb25hcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5jbGFzcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLXRyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbmdGb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9jb25maWc6IE5neFZhbGlkYXRvckNvbmZpZztcblxuICAgIHByaXZhdGUgX2NvbnRyb2xzOiBOZ0NvbnRyb2xbXSA9IFtdO1xuXG4gICAgLy8gcHVibGljIGVycm9yczogc3RyaW5nW107XG5cbiAgICAvLyDorrDlvZXmiYDmnInlhYPntKDnmoTpqozor4Hkv6Hmga9cbiAgICBwdWJsaWMgdmFsaWRhdGlvbnM6IERpY3Rpb25hcnk8e1xuICAgICAgICBoYXNFcnJvcj86IGJvb2xlYW47XG4gICAgICAgIGVycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICB9PiA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKSB7XG4gICAgICAgIGNvbnN0IHN0cmF0ZWd5ID1cbiAgICAgICAgICAgICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KSB8fFxuICAgICAgICAgICAgdGhpcy50aHlGb3JtVmFsaWRhdGVMb2FkZXIudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgICAgIGlmICghc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdmFsaWRhdGlvbiBkaXNwbGF5IHN0cmF0ZWd5IGlzIG51bGxgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0RWxlbWVudChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50W25hbWVdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9JyR7bmFtZX0nXWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJFbGVtZW50RXJyb3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25zW25hbWVdICYmIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKS5yZW1vdmVFcnJvcih0aGlzLl9nZXRFbGVtZW50KG5hbWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90cnlHZXRWYWxpZGF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZSwgdGhpcy5fZ2V0Q29udHJvbEJ5TmFtZShuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnNbbmFtZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUZvcm1Db250cm9sVmFsaWRhdGlvbihuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nQ29udHJvbCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25zW25hbWVdID0ge1xuICAgICAgICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN0Rm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24uaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2UobmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlcz86IGFueSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLl9jb25maWcgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV0gJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1bdmFsaWRhdGlvbkVycm9yTmFtZV1cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVt2YWxpZGF0aW9uRXJyb3JOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci5nZXRFcnJvck1lc3NhZ2UobmFtZSwgdmFsaWRhdGlvbkVycm9yTmFtZSwgdmFsaWRhdGlvbkVycm9yVmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1NZXNzYWdlKHZhbGlkYXRpb25FcnJvck5hbWUsIG1lc3NhZ2UsIHZhbGlkYXRpb25FcnJvclZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKG5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yczogVmFsaWRhdGlvbkVycm9ycykge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb25FcnJvciBpbiB2YWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0aW9uRXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZShuYW1lLCB2YWxpZGF0aW9uRXJyb3IsIHZhbGlkYXRpb25FcnJvcnNbdmFsaWRhdGlvbkVycm9yXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWU6IHN0cmluZywgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXMuX3RyeUdldFZhbGlkYXRpb24obmFtZSk7XG4gICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlcyA9IGVycm9yTWVzc2FnZXM7XG4gICAgICAgIHZhbGlkYXRpb24uaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLl9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpLnNob3dFcnJvcih0aGlzLl9nZXRFbGVtZW50KG5hbWUpLCBlcnJvck1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdG9yQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGh5Rm9ybVZhbGlkYXRlTG9hZGVyOiBOZ3hWYWxpZGF0b3JMb2FkZXIpIHt9XG5cbiAgICBpbml0aWFsaXplKG5nRm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlLCBmb3JtRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fbmdGb3JtID0gbmdGb3JtO1xuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIH1cblxuICAgIGluaXRpYWxpemVGb3JtQ29udHJvbHNWYWxpZGF0aW9uKGNvbnRyb2xzOiBOZ0NvbnRyb2xbXSkge1xuICAgICAgICBpZiAoKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcudmFsaWRhdGVPbiA9PT0gJ2JsdXInKSB8fCB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci52YWxpZGF0ZU9uID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIChjb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogTmdDb250cm9sKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jb250cm9scy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBjb250cm9sLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24oY29udHJvbC5uYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KGNvbnRyb2wubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uYmx1ciA9IChldmVudDogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sKGNvbnRyb2wubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VmFsaWRhdG9yQ29uZmlnKGNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDb250cm9scygpIHtcbiAgICAgICAgaWYgKHRoaXMuX25nRm9ybSBpbnN0YW5jZW9mIE5nRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9uZ0Zvcm0gYXMgTmdGb3JtKS5jb250cm9scztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ0Zvcm0gaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgICAgICAgICAodGhpcy5fbmdGb3JtIGFzIEZvcm1Hcm91cERpcmVjdGl2ZSkuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbHNbZGlyZWN0aXZlLm5hbWVdID0gZGlyZWN0aXZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDb250cm9sQnlOYW1lKG5hbWU6IHN0cmluZyk6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzW25hbWVdO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSB0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZXMobmFtZSwgY29udHJvbC5lcnJvcnMpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Q29udHJvbFZhbGlkYXRpb25FcnJvcihuYW1lLCBlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIC8vIOS4u+imgeaYryDml6Dms5Xmo4DmtYvliLAgbmdGb3JtIOeahCBjb250cm9scyDnmoTlj5jljJbvvIzmiJbogIXmmK/miJHmsqHmnInmib7liLBcbiAgICAgICAgLy8g6aqM6K+B55qE5pe25YCZ5b6q546vIG5nRm9ybSDnmoQgY29udHJvbHMg6aqM6K+BXG4gICAgICAgIC8vIOWPkeeOsOayoeaciSB2YWxpZGF0aW9uIOWIneWni+WMluS4gOS4qu+8jOW3sue7j+WtmOWcqOS4jeS8mumHjeaWsOWIneWni+WMlu+8jOS/neWtmOe8k+WtmOaVsOaNrlxuICAgICAgICBjb25zdCBjb250cm9scyA9IHRoaXMuX2dldENvbnRyb2xzKCk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBjb250cm9scykge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5R2V0VmFsaWRhdGlvbihuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDnp7vpmaTlt7Lnu4/kuI3lrZjlnKjnmoQgdmFsaWRhdGlvblxuICAgICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbnMpO1xuICAgICAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgkZXZlbnQ/OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLl9uZ0Zvcm0ub25TdWJtaXQoJGV2ZW50KTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZ0Zvcm0udmFsaWQ7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX25nRm9ybS5yZXNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy52YWxpZGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXN0Rm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0NvbnRyb2xBc0Vycm9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWUsIFttZXNzYWdlXSk7XG4gICAgfVxufVxuIl19