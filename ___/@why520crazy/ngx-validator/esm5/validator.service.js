/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgForm, FormGroupDirective } from '@angular/forms';
import { NgxValidatorLoader } from './validator-loader.service';
import { transformMessage } from './message-transformers';
var NgxFormValidatorService = /** @class */ (function () {
    function NgxFormValidatorService(thyFormValidateLoader) {
        this.thyFormValidateLoader = thyFormValidateLoader;
        this._controls = [];
        // public errors: string[];
        // 记录所有元素的验证信息
        this.validations = {};
    }
    /**
     * @return {?}
     */
    NgxFormValidatorService.prototype._getValidationFeedbackStrategy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var strategy = (this._config && this._config.validationFeedbackStrategy) ||
            this.thyFormValidateLoader.validationFeedbackStrategy;
        if (!strategy) {
            throw new Error("validation display strategy is null");
        }
        return strategy;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxFormValidatorService.prototype._getElement = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var element = this._formElement[name];
        if (element) {
            return element;
        }
        else {
            return this._formElement.querySelector("[name='" + name + "']");
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxFormValidatorService.prototype._clearElementError = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.validations[name] && this.validations[name].hasError) {
            this.validations[name].hasError = false;
            this.validations[name].errorMessages = [];
            this._getValidationFeedbackStrategy().removeError(this._getElement(name));
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxFormValidatorService.prototype._tryGetValidation = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.validations[name]) {
            this._initializeFormControlValidation(name, this._getControlByName(name));
        }
        return this.validations[name];
    };
    /**
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    NgxFormValidatorService.prototype._initializeFormControlValidation = /**
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    function (name, control) {
        var _this = this;
        this.validations[name] = {
            hasError: false,
            errorMessages: []
        };
        control.valueChanges.subscribe(function () {
            _this._clearElementError(name);
        });
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxFormValidatorService.prototype._restFormControlValidation = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var validation = this.validations[name];
        if (validation) {
            validation.hasError = false;
            validation.errorMessages = [];
        }
    };
    /**
     * @param {?} name
     * @param {?} validationErrorName
     * @param {?=} validationErrorValues
     * @return {?}
     */
    NgxFormValidatorService.prototype._getValidationMessage = /**
     * @param {?} name
     * @param {?} validationErrorName
     * @param {?=} validationErrorValues
     * @return {?}
     */
    function (name, validationErrorName, validationErrorValues) {
        /** @type {?} */
        var message = '';
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
    };
    /**
     * @param {?} name
     * @param {?} validationErrors
     * @return {?}
     */
    NgxFormValidatorService.prototype._getValidationMessages = /**
     * @param {?} name
     * @param {?} validationErrors
     * @return {?}
     */
    function (name, validationErrors) {
        /** @type {?} */
        var messages = [];
        for (var validationError in validationErrors) {
            if (validationErrors.hasOwnProperty(validationError)) {
                messages.push(this._getValidationMessage(name, validationError, validationErrors[validationError]));
            }
        }
        return messages;
    };
    /**
     * @param {?} name
     * @param {?} errorMessages
     * @return {?}
     */
    NgxFormValidatorService.prototype._setControlValidationError = /**
     * @param {?} name
     * @param {?} errorMessages
     * @return {?}
     */
    function (name, errorMessages) {
        /** @type {?} */
        var validation = this._tryGetValidation(name);
        validation.errorMessages = errorMessages;
        validation.hasError = true;
        this._getValidationFeedbackStrategy().showError(this._getElement(name), errorMessages);
    };
    Object.defineProperty(NgxFormValidatorService.prototype, "validatorConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} ngForm
     * @param {?} formElement
     * @return {?}
     */
    NgxFormValidatorService.prototype.initialize = /**
     * @param {?} ngForm
     * @param {?} formElement
     * @return {?}
     */
    function (ngForm, formElement) {
        this._ngForm = ngForm;
        this._formElement = formElement;
    };
    /**
     * @param {?} controls
     * @return {?}
     */
    NgxFormValidatorService.prototype.initializeFormControlsValidation = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        var _this = this;
        if ((this._config && this._config.validateOn === 'blur') || this.thyFormValidateLoader.validateOn === 'blur') {
            (controls || []).forEach(function (control) {
                if (!_this._controls.find(function (item) { return item.name === control.name; })) {
                    _this._initializeFormControlValidation(control.name, control);
                    /** @type {?} */
                    var element = _this._getElement(control.name);
                    if (element) {
                        element.onblur = function (event) {
                            _this.validateControl(control.name);
                        };
                    }
                }
            });
            this._controls = controls;
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NgxFormValidatorService.prototype.setValidatorConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config = config;
    };
    /**
     * @return {?}
     */
    NgxFormValidatorService.prototype._getControls = /**
     * @return {?}
     */
    function () {
        if (this._ngForm instanceof NgForm) {
            return ((/** @type {?} */ (this._ngForm))).controls;
        }
        else if (this._ngForm instanceof FormGroupDirective) {
            /** @type {?} */
            var controls_1 = {};
            ((/** @type {?} */ (this._ngForm))).directives.forEach(function (directive) {
                controls_1[directive.name] = directive;
            });
            return controls_1;
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxFormValidatorService.prototype._getControlByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var controls = this._getControls();
        return controls[name];
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxFormValidatorService.prototype.validateControl = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this._clearElementError(name);
        /** @type {?} */
        var control = this._getControlByName(name);
        if (control && control.invalid) {
            /** @type {?} */
            var errorMessages = this._getValidationMessages(name, control.errors);
            this._setControlValidationError(name, errorMessages);
        }
    };
    /**
     * @return {?}
     */
    NgxFormValidatorService.prototype.validateControls = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 主要是 无法检测到 ngForm 的 controls 的变化，或者是我没有找到
        // 验证的时候循环 ngForm 的 controls 验证
        // 发现没有 validation 初始化一个，已经存在不会重新初始化，保存缓存数据
        /** @type {?} */
        var controls = this._getControls();
        for (var name_1 in controls) {
            if (controls.hasOwnProperty(name_1)) {
                this._tryGetValidation(name_1);
                this.validateControl(name_1);
            }
        }
        // 移除已经不存在的 validation
        /** @type {?} */
        var names = Object.keys(this.validations);
        names.forEach(function (name) {
            if (!controls[name]) {
                delete _this.validations[name];
            }
        });
    };
    /**
     * @param {?=} $event
     * @return {?}
     */
    NgxFormValidatorService.prototype.validate = /**
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        this._ngForm.onSubmit($event);
        this.validateControls();
        return this._ngForm.valid;
    };
    /**
     * @return {?}
     */
    NgxFormValidatorService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this._ngForm.reset();
        for (var name_2 in this.validations) {
            if (this.validations.hasOwnProperty(name_2)) {
                this._restFormControlValidation(name_2);
                this._clearElementError(name_2);
            }
        }
    };
    /**
     * @param {?} name
     * @param {?} message
     * @return {?}
     */
    NgxFormValidatorService.prototype.markControlAsError = /**
     * @param {?} name
     * @param {?} message
     * @return {?}
     */
    function (name, message) {
        this._clearElementError(name);
        this._setControlValidationError(name, [message]);
    };
    NgxFormValidatorService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxFormValidatorService.ctorParameters = function () { return [
        { type: NgxValidatorLoader }
    ]; };
    return NgxFormValidatorService;
}());
export { NgxFormValidatorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci8iLCJzb3VyY2VzIjpbInZhbGlkYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDSCxNQUFNLEVBR04sa0JBQWtCLEVBR3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHMUQ7SUEyR0ksaUNBQW9CLHFCQUF5QztRQUF6QywwQkFBcUIsR0FBckIscUJBQXFCLENBQW9CO1FBbkdyRCxjQUFTLEdBQWdCLEVBQUUsQ0FBQzs7O1FBSzdCLGdCQUFXLEdBR2IsRUFBRSxDQUFDO0lBMkZ3RCxDQUFDOzs7O0lBekZ6RCxnRUFBOEI7OztJQUF0Qzs7WUFDVSxRQUFRLEdBQ1YsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUM7WUFDekQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLDBCQUEwQjtRQUN6RCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyw2Q0FBVzs7OztJQUFuQixVQUFvQixJQUFZOztZQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLE9BQU8sQ0FBQztTQUNsQjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFVLElBQUksT0FBSSxDQUFDLENB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QWdCLEVBQUUsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCx1Q0FBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLEtBQUssSUFBTSxNQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQUksQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBSSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFJLENBQUMsQ0FBQzthQUNqQztTQUNKO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsb0RBQWtCOzs7OztJQUFsQixVQUFtQixJQUFZLEVBQUUsT0FBZTtRQUM1QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBeE1KLFVBQVU7Ozs7Z0JBTEYsa0JBQWtCOztJQThNM0IsOEJBQUM7Q0FBQSxBQXpNRCxJQXlNQztTQXhNWSx1QkFBdUI7OztJQUNoQywwQ0FBNkM7O0lBRTdDLCtDQUFrQzs7SUFFbEMsMENBQW9DOztJQUVwQyw0Q0FBb0M7O0lBS3BDLDhDQUdROztJQTJGSSx3REFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5nRm9ybSxcbiAgICBBYnN0cmFjdENvbnRyb2wsXG4gICAgVmFsaWRhdGlvbkVycm9ycyxcbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgRm9ybUNvbnRyb2xOYW1lLFxuICAgIE5nQ29udHJvbFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JMb2FkZXIgfSBmcm9tICcuL3ZhbGlkYXRvci1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JDb25maWcsIERpY3Rpb25hcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5jbGFzcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLXRyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbmdGb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9jb25maWc6IE5neFZhbGlkYXRvckNvbmZpZztcblxuICAgIHByaXZhdGUgX2NvbnRyb2xzOiBOZ0NvbnRyb2xbXSA9IFtdO1xuXG4gICAgLy8gcHVibGljIGVycm9yczogc3RyaW5nW107XG5cbiAgICAvLyDorrDlvZXmiYDmnInlhYPntKDnmoTpqozor4Hkv6Hmga9cbiAgICBwdWJsaWMgdmFsaWRhdGlvbnM6IERpY3Rpb25hcnk8e1xuICAgICAgICBoYXNFcnJvcj86IGJvb2xlYW47XG4gICAgICAgIGVycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICB9PiA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKSB7XG4gICAgICAgIGNvbnN0IHN0cmF0ZWd5ID1cbiAgICAgICAgICAgICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KSB8fFxuICAgICAgICAgICAgdGhpcy50aHlGb3JtVmFsaWRhdGVMb2FkZXIudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgICAgIGlmICghc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdmFsaWRhdGlvbiBkaXNwbGF5IHN0cmF0ZWd5IGlzIG51bGxgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0RWxlbWVudChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50W25hbWVdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9JyR7bmFtZX0nXWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJFbGVtZW50RXJyb3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25zW25hbWVdICYmIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKS5yZW1vdmVFcnJvcih0aGlzLl9nZXRFbGVtZW50KG5hbWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90cnlHZXRWYWxpZGF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZSwgdGhpcy5fZ2V0Q29udHJvbEJ5TmFtZShuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnNbbmFtZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUZvcm1Db250cm9sVmFsaWRhdGlvbihuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nQ29udHJvbCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25zW25hbWVdID0ge1xuICAgICAgICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN0Rm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24uaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2UobmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlcz86IGFueSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLl9jb25maWcgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV0gJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1bdmFsaWRhdGlvbkVycm9yTmFtZV1cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVt2YWxpZGF0aW9uRXJyb3JOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci5nZXRFcnJvck1lc3NhZ2UobmFtZSwgdmFsaWRhdGlvbkVycm9yTmFtZSwgdmFsaWRhdGlvbkVycm9yVmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1NZXNzYWdlKHZhbGlkYXRpb25FcnJvck5hbWUsIG1lc3NhZ2UsIHZhbGlkYXRpb25FcnJvclZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKG5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yczogVmFsaWRhdGlvbkVycm9ycykge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb25FcnJvciBpbiB2YWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0aW9uRXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZShuYW1lLCB2YWxpZGF0aW9uRXJyb3IsIHZhbGlkYXRpb25FcnJvcnNbdmFsaWRhdGlvbkVycm9yXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWU6IHN0cmluZywgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXMuX3RyeUdldFZhbGlkYXRpb24obmFtZSk7XG4gICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlcyA9IGVycm9yTWVzc2FnZXM7XG4gICAgICAgIHZhbGlkYXRpb24uaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLl9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpLnNob3dFcnJvcih0aGlzLl9nZXRFbGVtZW50KG5hbWUpLCBlcnJvck1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdG9yQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGh5Rm9ybVZhbGlkYXRlTG9hZGVyOiBOZ3hWYWxpZGF0b3JMb2FkZXIpIHt9XG5cbiAgICBpbml0aWFsaXplKG5nRm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlLCBmb3JtRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fbmdGb3JtID0gbmdGb3JtO1xuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIH1cblxuICAgIGluaXRpYWxpemVGb3JtQ29udHJvbHNWYWxpZGF0aW9uKGNvbnRyb2xzOiBOZ0NvbnRyb2xbXSkge1xuICAgICAgICBpZiAoKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcudmFsaWRhdGVPbiA9PT0gJ2JsdXInKSB8fCB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci52YWxpZGF0ZU9uID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIChjb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogTmdDb250cm9sKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jb250cm9scy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBjb250cm9sLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24oY29udHJvbC5uYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KGNvbnRyb2wubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uYmx1ciA9IChldmVudDogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sKGNvbnRyb2wubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VmFsaWRhdG9yQ29uZmlnKGNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDb250cm9scygpIHtcbiAgICAgICAgaWYgKHRoaXMuX25nRm9ybSBpbnN0YW5jZW9mIE5nRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9uZ0Zvcm0gYXMgTmdGb3JtKS5jb250cm9scztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ0Zvcm0gaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgICAgICAgICAodGhpcy5fbmdGb3JtIGFzIEZvcm1Hcm91cERpcmVjdGl2ZSkuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbHNbZGlyZWN0aXZlLm5hbWVdID0gZGlyZWN0aXZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDb250cm9sQnlOYW1lKG5hbWU6IHN0cmluZyk6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzW25hbWVdO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSB0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZXMobmFtZSwgY29udHJvbC5lcnJvcnMpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Q29udHJvbFZhbGlkYXRpb25FcnJvcihuYW1lLCBlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIC8vIOS4u+imgeaYryDml6Dms5Xmo4DmtYvliLAgbmdGb3JtIOeahCBjb250cm9scyDnmoTlj5jljJbvvIzmiJbogIXmmK/miJHmsqHmnInmib7liLBcbiAgICAgICAgLy8g6aqM6K+B55qE5pe25YCZ5b6q546vIG5nRm9ybSDnmoQgY29udHJvbHMg6aqM6K+BXG4gICAgICAgIC8vIOWPkeeOsOayoeaciSB2YWxpZGF0aW9uIOWIneWni+WMluS4gOS4qu+8jOW3sue7j+WtmOWcqOS4jeS8mumHjeaWsOWIneWni+WMlu+8jOS/neWtmOe8k+WtmOaVsOaNrlxuICAgICAgICBjb25zdCBjb250cm9scyA9IHRoaXMuX2dldENvbnRyb2xzKCk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBjb250cm9scykge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5R2V0VmFsaWRhdGlvbihuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDnp7vpmaTlt7Lnu4/kuI3lrZjlnKjnmoQgdmFsaWRhdGlvblxuICAgICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbnMpO1xuICAgICAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgkZXZlbnQ/OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLl9uZ0Zvcm0ub25TdWJtaXQoJGV2ZW50KTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZ0Zvcm0udmFsaWQ7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX25nRm9ybS5yZXNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy52YWxpZGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXN0Rm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0NvbnRyb2xBc0Vycm9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWUsIFttZXNzYWdlXSk7XG4gICAgfVxufVxuIl19