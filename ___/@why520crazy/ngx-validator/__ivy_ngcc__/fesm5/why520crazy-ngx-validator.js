import { InjectionToken, Inject, Injectable, Optional, Directive, forwardRef, Input, NgZone, Renderer2, ElementRef, ContentChildren, Output, HostListener, EventEmitter, NgModule, defineInjectable, inject } from '@angular/core';
import { NgForm, FormGroupDirective, ControlContainer, NgControl, NG_VALIDATORS, Validators, NG_ASYNC_VALIDATORS, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { __spread } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
var NGX_VALIDATOR_CONFIG = new InjectionToken('NGX_VALIDATION_CONFIG');
/** @type {?} */
var DEFAULT_GLOBAL_VALIDATION_MESSAGES = {
    required: '该选项不能为空',
    maxlength: '该选项输入值长度不能大于{requiredLength}',
    minlength: '该选项输入值长度不能小于{requiredLength}',
    ngxUniqueCheck: '输入值已经存在，请重新输入',
    email: '输入邮件的格式不正确',
    repeat: '两次输入不一致',
    pattern: '该选项输入格式不正确',
    number: '必须输入数字',
    url: '输入URL格式不正确',
    max: '该选项输入值不能大于{max}',
    min: '该选项输入值不能小于{min}'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NoopValidationFeedbackStrategy = /** @class */ (function () {
    function NoopValidationFeedbackStrategy() {
    }
    /** Does nothing, as this validation message display strategy is a no-op. */
    /**
     * Does nothing, as this validation message display strategy is a no-op.
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    NoopValidationFeedbackStrategy.prototype.showError = /**
     * Does nothing, as this validation message display strategy is a no-op.
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    function (element, errorMessages) { };
    /**
     * @param {?} element
     * @return {?}
     */
    NoopValidationFeedbackStrategy.prototype.removeError = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { };
    return NoopValidationFeedbackStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var INVALID_CLASS = 'is-invalid';
/** @type {?} */
var INVALID_FEEDBACK_CLASS = 'invalid-feedback';
var BootstrapValidationFeedbackStrategy = /** @class */ (function () {
    function BootstrapValidationFeedbackStrategy() {
    }
    /**
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    BootstrapValidationFeedbackStrategy.prototype.showError = /**
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    function (element, errorMessages) {
        if (element) {
            element.classList.add(INVALID_CLASS);
        }
        if (element && element.parentElement) {
            /** @type {?} */
            var documentFrag = document.createDocumentFragment();
            /** @type {?} */
            var divNode = document.createElement('DIV');
            /** @type {?} */
            var textNode = document.createTextNode(errorMessages[0]);
            divNode.appendChild(textNode);
            divNode.setAttribute('class', INVALID_FEEDBACK_CLASS);
            documentFrag.appendChild(divNode);
            element.parentElement.append(documentFrag);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BootstrapValidationFeedbackStrategy.prototype.removeError = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element) {
            element.classList.remove(INVALID_CLASS);
        }
        if (element && element.parentElement) {
            /** @type {?} */
            var invalidFeedback = element.parentElement.querySelector("." + INVALID_FEEDBACK_CLASS);
            if (invalidFeedback) {
                element.parentElement.removeChild(invalidFeedback);
            }
        }
    };
    return BootstrapValidationFeedbackStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ValidationFeedbackStrategyBuilder = /** @class */ (function () {
    function ValidationFeedbackStrategyBuilder() {
    }
    /**
     * @return {?}
     */
    ValidationFeedbackStrategyBuilder.noop = /**
     * @return {?}
     */
    function () {
        return new NoopValidationFeedbackStrategy();
    };
    /**
     * @return {?}
     */
    ValidationFeedbackStrategyBuilder.bootstrap = /**
     * @return {?}
     */
    function () {
        return new BootstrapValidationFeedbackStrategy();
    };
    return ValidationFeedbackStrategyBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultValidatorConfig = {
    validationFeedbackStrategy: ValidationFeedbackStrategyBuilder.bootstrap(),
    validationMessages: {}
};
var NgxValidatorLoader = /** @class */ (function () {
    function NgxValidatorLoader(config) {
        this.config = Object.assign({}, defaultValidatorConfig, config);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    NgxValidatorLoader.prototype.getDefaultValidationMessage = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.config.globalValidationMessages && this.config.globalValidationMessages[key]) {
            return this.config.globalValidationMessages[key];
        }
        else {
            return DEFAULT_GLOBAL_VALIDATION_MESSAGES[key];
        }
    };
    Object.defineProperty(NgxValidatorLoader.prototype, "validationMessages", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.validationMessages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxValidatorLoader.prototype, "validationFeedbackStrategy", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.config.validationFeedbackStrategy) {
                this.config.validationFeedbackStrategy = ValidationFeedbackStrategyBuilder.bootstrap();
            }
            return this.config.validationFeedbackStrategy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxValidatorLoader.prototype, "validateOn", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.config.validateOn) {
                this.config.validateOn = 'submit';
            }
            return this.config.validateOn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * get validation error messages
     * @param name formControl name, e.g. username or email
     * @param key validator name, e.g. required or pattern
     */
    /**
     * get validation error messages
     * @param {?} name formControl name, e.g. username or email
     * @param {?} key validator name, e.g. required or pattern
     * @param {?=} validationErrorValues
     * @return {?}
     */
    NgxValidatorLoader.prototype.getErrorMessage = /**
     * get validation error messages
     * @param {?} name formControl name, e.g. username or email
     * @param {?} key validator name, e.g. required or pattern
     * @param {?=} validationErrorValues
     * @return {?}
     */
    function (name, key, validationErrorValues) {
        /** @type {?} */
        var message = '';
        if (this.validationMessages[name] && this.validationMessages[name][key]) {
            message = this.validationMessages[name][key];
        }
        else {
            message = this.getDefaultValidationMessage(key);
        }
        return message;
    };
    // getErrorMessages(name: string, validationErrors: ValidationErrors) {
    //     const messages = [];
    //     for (const validationError in validationErrors) {
    //         if (validationErrors.hasOwnProperty(validationError)) {
    //             messages.push(this.getErrorMessage(name, validationError, validationErrors[validationError]));
    //         }
    //     }
    //     return messages;
    // }
    // getErrorMessages(name: string, validationErrors: ValidationErrors) {
    //     const messages = [];
    //     for (const validationError in validationErrors) {
    //         if (validationErrors.hasOwnProperty(validationError)) {
    //             messages.push(this.getErrorMessage(name, validationError, validationErrors[validationError]));
    //         }
    //     }
    //     return messages;
    // }
    /**
     * @param {?} messages
     * @return {?}
     */
    NgxValidatorLoader.prototype.addValidationMessages = 
    // getErrorMessages(name: string, validationErrors: ValidationErrors) {
    //     const messages = [];
    //     for (const validationError in validationErrors) {
    //         if (validationErrors.hasOwnProperty(validationError)) {
    //             messages.push(this.getErrorMessage(name, validationError, validationErrors[validationError]));
    //         }
    //     }
    //     return messages;
    // }
    /**
     * @param {?} messages
     * @return {?}
     */
    function (messages) {
        Object.assign(this.config.validationMessages, messages);
    };
    /**
     * @param {?} validationMessages
     * @return {?}
     */
    NgxValidatorLoader.prototype.setGlobalValidationMessages = /**
     * @param {?} validationMessages
     * @return {?}
     */
    function (validationMessages) {
        this.config.globalValidationMessages = validationMessages;
    };
    /** @nocollapse */
    NgxValidatorLoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_VALIDATOR_CONFIG,] }] }
    ]; };
    /** @nocollapse */ NgxValidatorLoader.ngInjectableDef = defineInjectable({ factory: function NgxValidatorLoader_Factory() { return new NgxValidatorLoader(inject(NGX_VALIDATOR_CONFIG, 8)); }, token: NgxValidatorLoader, providedIn: "root" });
NgxValidatorLoader.ɵfac = function NgxValidatorLoader_Factory(t) { return new (t || NgxValidatorLoader)(ɵngcc0.ɵɵinject(NGX_VALIDATOR_CONFIG, 8)); };
NgxValidatorLoader.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxValidatorLoader, factory: function (t) { return NgxValidatorLoader.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxValidatorLoader, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NGX_VALIDATOR_CONFIG]
            }] }]; }, null); })();
    return NgxValidatorLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} message
 * @param {?} validationErrorValues
 * @return {?}
 */
function maxOrMinLengthTransformer(message, validationErrorValues) {
    return message.replace("{requiredLength}", validationErrorValues.requiredLength.toString());
}
/**
 * @param {?} message
 * @param {?} validationErrorValues
 * @return {?}
 */
function maxTransformer(message, validationErrorValues) {
    return message.replace("{max}", validationErrorValues.max.toString());
}
/**
 * @param {?} message
 * @param {?} validationErrorValues
 * @return {?}
 */
function minxTransformer(message, validationErrorValues) {
    return message.replace("{min}", validationErrorValues.min.toString());
}
/** @type {?} */
var transformerMap = {
    minlength: maxOrMinLengthTransformer,
    maxlength: maxOrMinLengthTransformer,
    max: maxTransformer,
    min: minxTransformer
};
/**
 * @param {?} validatorName
 * @param {?} message
 * @param {?} validationErrorValues
 * @return {?}
 */
function transformMessage(validatorName, message, validationErrorValues) {
    if (transformerMap[validatorName] && validationErrorValues) {
        return transformerMap[validatorName](message, validationErrorValues);
    }
    return message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
    /** @nocollapse */
    NgxFormValidatorService.ctorParameters = function () { return [
        { type: NgxValidatorLoader }
    ]; };
NgxFormValidatorService.ɵfac = function NgxFormValidatorService_Factory(t) { return new (t || NgxFormValidatorService)(ɵngcc0.ɵɵinject(NgxValidatorLoader)); };
NgxFormValidatorService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxFormValidatorService, factory: function (t) { return NgxFormValidatorService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxFormValidatorService, [{
        type: Injectable
    }], function () { return [{ type: NgxValidatorLoader }]; }, null); })();
    return NgxFormValidatorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var KEY_CODES_ENTER = 13;
/** @enum {string} */
var NgxEnterKeyMode = {
    submit: 'submit',
    alwaysSubmit: 'alwaysSubmit',
    forbidSubmit: 'forbidSubmit',
};
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
NgxFormValidatorDirective.ɵfac = function NgxFormValidatorDirective_Factory(t) { return new (t || NgxFormValidatorDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxFormValidatorService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ControlContainer)); };
NgxFormValidatorDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgxFormValidatorDirective, selectors: [["form", "ngxFormValidator", ""], ["form", "ngx-form-validator", ""]], contentQueries: function NgxFormValidatorDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgControl, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.controls = _t);
    } }, inputs: { ngxFormValidatorConfig: "ngxFormValidatorConfig", ngxFormValidator: "ngxFormValidator", enterKeyMode: "enterKeyMode" }, exportAs: ["ngxFormValidator"], features: [ɵngcc0.ɵɵProvidersFeature([NgxFormValidatorService])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxFormValidatorDirective, [{
        type: Directive,
        args: [{
                selector: 'form[ngxFormValidator],form[ngx-form-validator]',
                providers: [NgxFormValidatorService],
                exportAs: 'ngxFormValidator'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: NgxFormValidatorService }, { type: ɵngcc1.ControlContainer }]; }, { ngxFormValidatorConfig: [{
            type: Input
        }], ngxFormValidator: [{
            type: Input
        }], controls: [{
            type: ContentChildren,
            args: [NgControl, {
                    descendants: true
                }]
        }], enterKeyMode: [{
            type: Input
        }] }); })();
    return NgxFormValidatorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
    /** @nocollapse */
    NgxFormSubmitDirective.ctorParameters = function () { return [
        { type: NgxFormValidatorDirective }
    ]; };
    NgxFormSubmitDirective.propDecorators = {
        ngxFormSubmit: [{ type: Output }],
        onSubmit: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
NgxFormSubmitDirective.ɵfac = function NgxFormSubmitDirective_Factory(t) { return new (t || NgxFormSubmitDirective)(ɵngcc0.ɵɵdirectiveInject(NgxFormValidatorDirective)); };
NgxFormSubmitDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgxFormSubmitDirective, selectors: [["", "ngxFormSubmit", ""], ["", "ngx-form-submit", ""]], hostBindings: function NgxFormSubmitDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgxFormSubmitDirective_click_HostBindingHandler($event) { return ctx.onSubmit($event); });
    } }, outputs: { ngxFormSubmit: "ngxFormSubmit" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxFormSubmitDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxFormSubmit],[ngx-form-submit]'
            }]
    }], function () { return [{ type: NgxFormValidatorDirective }]; }, { ngxFormSubmit: [{
            type: Output
        }], onSubmit: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
    return NgxFormSubmitDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NgxValidators = /** @class */ (function () {
    function NgxValidators() {
    }
    /**
     * @param {?} uniqueCheckFn
     * @return {?}
     */
    NgxValidators.uniqueCheckValidator = /**
     * @param {?} uniqueCheckFn
     * @return {?}
     */
    function (uniqueCheckFn) {
        /** @type {?} */
        var result = function (control) {
            if (control.value) {
                return uniqueCheckFn(control.value).pipe(map(function (isUnique) {
                    return isUnique ? { ngxUniqueCheck: { value: true } } : null;
                }));
            }
            else {
                return of(null);
            }
        };
        return result;
    };
    return NgxValidators;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
    /** @nocollapse */
    MinValidatorDirective.ctorParameters = function () { return []; };
    MinValidatorDirective.propDecorators = {
        ngxMin: [{ type: Input }]
    };
MinValidatorDirective.ɵfac = function MinValidatorDirective_Factory(t) { return new (t || MinValidatorDirective)(); };
MinValidatorDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MinValidatorDirective, selectors: [["", "ngxMin", "", "formControlName", ""], ["", "ngxMin", "", "formControl", ""], ["", "ngxMin", "", "ngModel", ""], [""]], inputs: { ngxMin: "ngxMin" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(function () { return MinValidatorDirective; }),
                multi: true
            }
        ])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxMin][formControlName],[ngxMin][formControl],[ngxMin][ngModel],',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(function () { return MinValidatorDirective; }),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { ngxMin: [{
            type: Input
        }] }); })();
    return MinValidatorDirective;
}());
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
    /** @nocollapse */
    MaxValidatorDirective.ctorParameters = function () { return []; };
    MaxValidatorDirective.propDecorators = {
        ngxMax: [{ type: Input }]
    };
MaxValidatorDirective.ɵfac = function MaxValidatorDirective_Factory(t) { return new (t || MaxValidatorDirective)(); };
MaxValidatorDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxValidatorDirective, selectors: [["", "ngxMax", "", "formControlName", ""], ["", "ngxMax", "", "formControl", ""], ["", "ngxMax", "", "ngModel", ""]], inputs: { ngxMax: "ngxMax" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(function () { return MaxValidatorDirective; }),
                multi: true
            }
        ])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxMax][formControlName],[ngxMax][formControl],[ngxMax][ngModel]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(function () { return MaxValidatorDirective; }),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { ngxMax: [{
            type: Input
        }] }); })();
    return MaxValidatorDirective;
}());
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
    /** @nocollapse */
    NgxUniqueCheckDirective.ctorParameters = function () { return []; };
    NgxUniqueCheckDirective.propDecorators = {
        ngxUniqueCheck: [{ type: Input }]
    };
NgxUniqueCheckDirective.ɵfac = function NgxUniqueCheckDirective_Factory(t) { return new (t || NgxUniqueCheckDirective)(); };
NgxUniqueCheckDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgxUniqueCheckDirective, selectors: [["", "ngxUniqueCheck", "", "formControlName", ""], ["", "ngxUniqueCheck", "", "formControl", ""], ["", "ngxUniqueCheck", "", "ngModel", ""]], inputs: { ngxUniqueCheck: "ngxUniqueCheck" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_ASYNC_VALIDATORS,
                useExisting: NgxUniqueCheckDirective,
                multi: true
            }
        ])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxUniqueCheckDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxUniqueCheck][formControlName],[ngxUniqueCheck][formControl],[ngxUniqueCheck][ngModel]',
                providers: [
                    {
                        provide: NG_ASYNC_VALIDATORS,
                        useExisting: NgxUniqueCheckDirective,
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { ngxUniqueCheck: [{
            type: Input
        }] }); })();
    return NgxUniqueCheckDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
NgxValidatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxValidatorModule });
NgxValidatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxValidatorModule_Factory(t) { return new (t || NgxValidatorModule)(); }, imports: [[FormsModule],
        FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxValidatorModule, { declarations: function () { return [NgxFormValidatorDirective,
        NgxFormSubmitDirective,
        NgxUniqueCheckDirective,
        MaxValidatorDirective,
        MinValidatorDirective]; }, imports: function () { return [FormsModule]; }, exports: function () { return [NgxFormValidatorDirective,
        NgxFormSubmitDirective,
        NgxUniqueCheckDirective,
        MaxValidatorDirective,
        MinValidatorDirective,
        FormsModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxValidatorModule, [{
        type: NgModule,
        args: [{
                declarations: declarations,
                imports: [FormsModule],
                exports: __spread(declarations, [FormsModule])
            }]
    }], function () { return []; }, null); })();
    return NgxValidatorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NgxValidators, NgxValidatorModule, NgxValidatorLoader, NGX_VALIDATOR_CONFIG, DEFAULT_GLOBAL_VALIDATION_MESSAGES, NgxEnterKeyMode, NgxFormValidatorDirective, NgxFormSubmitDirective, ValidationFeedbackStrategyBuilder, NoopValidationFeedbackStrategy, BootstrapValidationFeedbackStrategy, MaxValidatorDirective as ɵc, MinValidatorDirective as ɵb, NgxUniqueCheckDirective as ɵd, NgxFormValidatorService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2h5NTIwY3Jhenktbmd4LXZhbGlkYXRvci5qcyIsInNvdXJjZXMiOlsibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3ZhbGlkYXRvci5jbGFzcy50cyIsIm5nOi9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9zdHJhdGVnaWVzL25vb3AtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneS50cyIsIm5nOi9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9zdHJhdGVnaWVzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5LnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3N0cmF0ZWdpZXMvaW5kZXgudHMiLCJuZzovQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL21lc3NhZ2UtdHJhbnNmb3JtZXJzLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3ZhbGlkYXRvci5zZXJ2aWNlLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3ZhbGlkYXRvcnMudHMiLCJuZzovQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvZGlyZWN0aXZlcy92YWxpZGF0b3JzLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQW9CQSxJQUFhLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUEyQix1QkFBdUIsQ0FBQzs7QUFFekcsSUFBYSxr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QUFNLFlBQVksR0FBRSxXQUFXLEVBQUMsa0JBQzFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0lBWVQseUJBQUM7Q0FqQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VD4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgTmd4VmFsaWRhdGlvbk1lc3NhZ2VzID0gRGljdGlvbmFyeTxEaWN0aW9uYXJ5PHN0cmluZz4+O1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIE5neFZhbGlkYXRlT24gPSAnc3VibWl0JyB8ICdibHVyJztcblxuZXhwb3J0IGludGVyZmFjZSBOZ3hWYWxpZGF0b3JDb25maWcge1xuICAgIHZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5PzogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzPzogTmd4VmFsaWRhdGlvbk1lc3NhZ2VzO1xuICAgIHZhbGlkYXRlT24/OiBOZ3hWYWxpZGF0ZU9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcgZXh0ZW5kcyBOZ3hWYWxpZGF0b3JDb25maWcge1xuICAgIGdsb2JhbFZhbGlkYXRpb25NZXNzYWdlcz86IERpY3Rpb25hcnk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNvbnN0IE5HWF9WQUxJREFUT1JfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE5neFZhbGlkYXRvckdsb2JhbENvbmZpZz4oJ05HWF9WQUxJREFUSU9OX0NPTkZJRycpO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9HTE9CQUxfVkFMSURBVElPTl9NRVNTQUdFUyA9IHtcbiAgICByZXF1aXJlZDogJ8Oowq/CpcOpwoDCicOpwqHCucOkwrjCjcOowoPCvcOkwrjCusOnwqnCuicsXG4gICAgbWF4bGVuZ3RoOiAnw6jCr8Klw6nCgMKJw6nCocK5w6jCvsKTw6XChcKlw6XCgMK8w6nClcK/w6XCusKmw6TCuMKNw6jCg8K9w6XCpMKnw6TCusKOe3JlcXVpcmVkTGVuZ3RofScsXG4gICAgbWlubGVuZ3RoOiAnw6jCr8Klw6nCgMKJw6nCocK5w6jCvsKTw6XChcKlw6XCgMK8w6nClcK/w6XCusKmw6TCuMKNw6jCg8K9w6XCsMKPw6TCusKOe3JlcXVpcmVkTGVuZ3RofScsXG4gICAgbmd4VW5pcXVlQ2hlY2s6ICfDqMK+wpPDpcKFwqXDpcKAwrzDpcK3wrLDp8K7wo/DpcKtwpjDpcKcwqjDr8K8wozDqMKvwrfDqcKHwo3DpsKWwrDDqMK+wpPDpcKFwqUnLFxuICAgIGVtYWlsOiAnw6jCvsKTw6XChcKlw6nCgsKuw6TCu8K2w6fCmsKEw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuJyxcbiAgICByZXBlYXQ6ICfDpMK4wqTDpsKswqHDqMK+wpPDpcKFwqXDpMK4wo3DpMK4woDDqMKHwrQnLFxuICAgIHBhdHRlcm46ICfDqMKvwqXDqcKAwonDqcKhwrnDqMK+wpPDpcKFwqXDpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq4nLFxuICAgIG51bWJlcjogJ8Olwr/ChcOpwqHCu8Oowr7Ck8OlwoXCpcOmwpXCsMOlwq3ClycsXG4gICAgdXJsOiAnw6jCvsKTw6XChcKlVVJMw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuJyxcbiAgICBtYXg6ICfDqMKvwqXDqcKAwonDqcKhwrnDqMK+wpPDpcKFwqXDpcKAwrzDpMK4wo3DqMKDwr3DpcKkwqfDpMK6wo57bWF4fScsXG4gICAgbWluOiAnw6jCr8Klw6nCgMKJw6nCocK5w6jCvsKTw6XChcKlw6XCgMK8w6TCuMKNw6jCg8K9w6XCsMKPw6TCusKOe21pbn0nXG59O1xuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3ZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgTm9vcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IGltcGxlbWVudHMgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgIC8qKiBEb2VzIG5vdGhpbmcsIGFzIHRoaXMgdmFsaWRhdGlvbiBtZXNzYWdlIGRpc3BsYXkgc3RyYXRlZ3kgaXMgYSBuby1vcC4gKi9cbiAgICBzaG93RXJyb3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdKTogdm9pZCB7fVxuXG4gICAgcmVtb3ZlRXJyb3IoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHt9XG59XG4iLCJpbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneSc7XG5cbmNvbnN0IElOVkFMSURfQ0xBU1MgPSAnaXMtaW52YWxpZCc7XG5jb25zdCBJTlZBTElEX0ZFRURCQUNLX0NMQVNTID0gJ2ludmFsaWQtZmVlZGJhY2snO1xuXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgaW1wbGVtZW50cyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2hvd0Vycm9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKElOVkFMSURfQ0xBU1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudEZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICBjb25zdCBkaXZOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVycm9yTWVzc2FnZXNbMF0pO1xuICAgICAgICAgICAgZGl2Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICBkaXZOb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBJTlZBTElEX0ZFRURCQUNLX0NMQVNTKTtcbiAgICAgICAgICAgIGRvY3VtZW50RnJhZy5hcHBlbmRDaGlsZChkaXZOb2RlKTtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmQoZG9jdW1lbnRGcmFnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUVycm9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoSU5WQUxJRF9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2sgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7SU5WQUxJRF9GRUVEQkFDS19DTEFTU31gKTtcbiAgICAgICAgICAgIGlmIChpbnZhbGlkRmVlZGJhY2spIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaW52YWxpZEZlZWRiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5vb3BWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vbm9vcC12YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcbmltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi9ib290c3RyYXAtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneSc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneSc7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneUJ1aWxkZXIge1xuICAgIHN0YXRpYyBub29wKCk6IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYm9vdHN0cmFwKCk6IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3ksIE5vb3BWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSwgQm9vdHN0cmFwVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfTtcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnLFxuICAgIE5neFZhbGlkYXRpb25NZXNzYWdlcyxcbiAgICBEaWN0aW9uYXJ5LFxuICAgIE5HWF9WQUxJREFUT1JfQ09ORklHLFxuICAgIERFRkFVTFRfR0xPQkFMX1ZBTElEQVRJT05fTUVTU0FHRVNcbn0gZnJvbSAnLi92YWxpZGF0b3IuY2xhc3MnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5LCBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneUJ1aWxkZXIgfSBmcm9tICcuL3N0cmF0ZWdpZXMnO1xuXG5jb25zdCBkZWZhdWx0VmFsaWRhdG9yQ29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcgPSB7XG4gICAgdmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k6IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlci5ib290c3RyYXAoKSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHt9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRvckxvYWRlciB7XG4gICAgcHJpdmF0ZSBjb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZztcblxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5nbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXMgJiYgdGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5nbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBERUZBVUxUX0dMT0JBTF9WQUxJREFUSU9OX01FU1NBR0VTW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdGlvbk1lc3NhZ2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzO1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpOiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5ID0gVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyLmJvb3RzdHJhcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdGVPbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcudmFsaWRhdGVPbikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcudmFsaWRhdGVPbiA9ICdzdWJtaXQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy52YWxpZGF0ZU9uO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KE5HWF9WQUxJREFUT1JfQ09ORklHKVxuICAgICAgICBjb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZ1xuICAgICkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRWYWxpZGF0b3JDb25maWcsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgKiBAcGFyYW0gbmFtZSBmb3JtQ29udHJvbCBuYW1lLCBlLmcuIHVzZXJuYW1lIG9yIGVtYWlsXG4gICAgICogQHBhcmFtIGtleSB2YWxpZGF0b3IgbmFtZSwgZS5nLiByZXF1aXJlZCBvciBwYXR0ZXJuXG4gICAgICovXG4gICAgZ2V0RXJyb3JNZXNzYWdlKG5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlcz86IGFueSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV0gJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1ba2V5XSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5nZXREZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2Uoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvLyBnZXRFcnJvck1lc3NhZ2VzKG5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yczogVmFsaWRhdGlvbkVycm9ycykge1xuICAgIC8vICAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgIC8vICAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb25FcnJvciBpbiB2YWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgLy8gICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0aW9uRXJyb3IpKSB7XG4gICAgLy8gICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLmdldEVycm9yTWVzc2FnZShuYW1lLCB2YWxpZGF0aW9uRXJyb3IsIHZhbGlkYXRpb25FcnJvcnNbdmFsaWRhdGlvbkVycm9yXSkpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBtZXNzYWdlcztcbiAgICAvLyB9XG5cbiAgICBhZGRWYWxpZGF0aW9uTWVzc2FnZXMobWVzc2FnZXM6IE5neFZhbGlkYXRpb25NZXNzYWdlcykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlcywgbWVzc2FnZXMpO1xuICAgIH1cblxuICAgIHNldEdsb2JhbFZhbGlkYXRpb25NZXNzYWdlcyh2YWxpZGF0aW9uTWVzc2FnZXM6IERpY3Rpb25hcnk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLmNvbmZpZy5nbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXMgPSB2YWxpZGF0aW9uTWVzc2FnZXM7XG4gICAgfVxufVxuIiwiZnVuY3Rpb24gbWF4T3JNaW5MZW5ndGhUcmFuc2Zvcm1lcihtZXNzYWdlOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlczogeyByZXF1aXJlZExlbmd0aDogbnVtYmVyIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoYHtyZXF1aXJlZExlbmd0aH1gLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMucmVxdWlyZWRMZW5ndGgudG9TdHJpbmcoKSk7XG59XG5cbmZ1bmN0aW9uIG1heFRyYW5zZm9ybWVyKG1lc3NhZ2U6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzOiB7IG1heDogbnVtYmVyOyBhY3R1YWw6IG51bWJlciB9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKGB7bWF4fWAsIHZhbGlkYXRpb25FcnJvclZhbHVlcy5tYXgudG9TdHJpbmcoKSk7XG59XG5cbmZ1bmN0aW9uIG1pbnhUcmFuc2Zvcm1lcihtZXNzYWdlOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlczogeyBtaW46IG51bWJlcjsgYWN0dWFsOiBudW1iZXIgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZShge21pbn1gLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMubWluLnRvU3RyaW5nKCkpO1xufVxuXG5jb25zdCB0cmFuc2Zvcm1lck1hcCA9IHtcbiAgICBtaW5sZW5ndGg6IG1heE9yTWluTGVuZ3RoVHJhbnNmb3JtZXIsXG4gICAgbWF4bGVuZ3RoOiBtYXhPck1pbkxlbmd0aFRyYW5zZm9ybWVyLFxuICAgIG1heDogbWF4VHJhbnNmb3JtZXIsXG4gICAgbWluOiBtaW54VHJhbnNmb3JtZXJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NZXNzYWdlKHZhbGlkYXRvck5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM6IGFueSkge1xuICAgIGlmICh0cmFuc2Zvcm1lck1hcFt2YWxpZGF0b3JOYW1lXSAmJiB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyTWFwW3ZhbGlkYXRvck5hbWVdKG1lc3NhZ2UsIHZhbGlkYXRpb25FcnJvclZhbHVlcyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBOZ0Zvcm0sXG4gICAgQWJzdHJhY3RDb250cm9sLFxuICAgIFZhbGlkYXRpb25FcnJvcnMsXG4gICAgRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIEZvcm1Db250cm9sTmFtZSxcbiAgICBOZ0NvbnRyb2xcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9yTG9hZGVyIH0gZnJvbSAnLi92YWxpZGF0b3ItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9yQ29uZmlnLCBEaWN0aW9uYXJ5IH0gZnJvbSAnLi92YWxpZGF0b3IuY2xhc3MnO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2Uge1xuICAgIHByaXZhdGUgX25nRm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlO1xuXG4gICAgcHJpdmF0ZSBfZm9ybUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWc7XG5cbiAgICBwcml2YXRlIF9jb250cm9sczogTmdDb250cm9sW10gPSBbXTtcblxuICAgIC8vIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xuXG4gICAgLy8gw6jCrsKww6XCvcKVw6bCicKAw6bCnMKJw6XChcKDw6fCtMKgw6fCmsKEw6nCqsKMw6jCr8KBw6TCv8Khw6bCgcKvXG4gICAgcHVibGljIHZhbGlkYXRpb25zOiBEaWN0aW9uYXJ5PHtcbiAgICAgICAgaGFzRXJyb3I/OiBib29sZWFuO1xuICAgICAgICBlcnJvck1lc3NhZ2VzPzogc3RyaW5nW107XG4gICAgfT4gPSB7fTtcblxuICAgIHByaXZhdGUgX2dldFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCkge1xuICAgICAgICBjb25zdCBzdHJhdGVneSA9XG4gICAgICAgICAgICAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSkgfHxcbiAgICAgICAgICAgIHRoaXMudGh5Rm9ybVZhbGlkYXRlTG9hZGVyLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5O1xuICAgICAgICBpZiAoIXN0cmF0ZWd5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHZhbGlkYXRpb24gZGlzcGxheSBzdHJhdGVneSBpcyBudWxsYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmF0ZWd5O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEVsZW1lbnQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudFtuYW1lXTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPScke25hbWV9J11gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NsZWFyRWxlbWVudEVycm9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uc1tuYW1lXSAmJiB0aGlzLnZhbGlkYXRpb25zW25hbWVdLmhhc0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25zW25hbWVdLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25zW25hbWVdLmVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2dldFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCkucmVtb3ZlRXJyb3IodGhpcy5fZ2V0RWxlbWVudChuYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdHJ5R2V0VmFsaWRhdGlvbihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRpb25zW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplRm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWUsIHRoaXMuX2dldENvbnRyb2xCeU5hbWUobmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBGb3JtQ29udHJvbE5hbWUgfCBOZ0NvbnRyb2wpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGhhc0Vycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhckVsZW1lbnRFcnJvcihuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVzdEZvcm1Db250cm9sVmFsaWRhdGlvbihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGlvbnNbbmFtZV07XG4gICAgICAgIGlmICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YWxpZGF0aW9uLmVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFZhbGlkYXRpb25NZXNzYWdlKG5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yTmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM/OiBhbnkpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnICYmXG4gICAgICAgICAgICB0aGlzLl9jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzICYmXG4gICAgICAgICAgICB0aGlzLl9jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdICYmXG4gICAgICAgICAgICB0aGlzLl9jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdW3ZhbGlkYXRpb25FcnJvck5hbWVdXG4gICAgICAgICkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1bdmFsaWRhdGlvbkVycm9yTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy50aHlGb3JtVmFsaWRhdGVMb2FkZXIuZ2V0RXJyb3JNZXNzYWdlKG5hbWUsIHZhbGlkYXRpb25FcnJvck5hbWUsIHZhbGlkYXRpb25FcnJvclZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtTWVzc2FnZSh2YWxpZGF0aW9uRXJyb3JOYW1lLCBtZXNzYWdlLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFZhbGlkYXRpb25NZXNzYWdlcyhuYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCB2YWxpZGF0aW9uRXJyb3IgaW4gdmFsaWRhdGlvbkVycm9ycykge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25FcnJvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdGlvbkVycm9yKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5fZ2V0VmFsaWRhdGlvbk1lc3NhZ2UobmFtZSwgdmFsaWRhdGlvbkVycm9yLCB2YWxpZGF0aW9uRXJyb3JzW3ZhbGlkYXRpb25FcnJvcl0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0Q29udHJvbFZhbGlkYXRpb25FcnJvcihuYW1lOiBzdHJpbmcsIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLl90cnlHZXRWYWxpZGF0aW9uKG5hbWUpO1xuICAgICAgICB2YWxpZGF0aW9uLmVycm9yTWVzc2FnZXMgPSBlcnJvck1lc3NhZ2VzO1xuICAgICAgICB2YWxpZGF0aW9uLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKS5zaG93RXJyb3IodGhpcy5fZ2V0RWxlbWVudChuYW1lKSwgZXJyb3JNZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRvckNvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoeUZvcm1WYWxpZGF0ZUxvYWRlcjogTmd4VmFsaWRhdG9yTG9hZGVyKSB7fVxuXG4gICAgaW5pdGlhbGl6ZShuZ0Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZSwgZm9ybUVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX25nRm9ybSA9IG5nRm9ybTtcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplRm9ybUNvbnRyb2xzVmFsaWRhdGlvbihjb250cm9sczogTmdDb250cm9sW10pIHtcbiAgICAgICAgaWYgKCh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLnZhbGlkYXRlT24gPT09ICdibHVyJykgfHwgdGhpcy50aHlGb3JtVmFsaWRhdGVMb2FkZXIudmFsaWRhdGVPbiA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAoY29udHJvbHMgfHwgW10pLmZvckVhY2goKGNvbnRyb2w6IE5nQ29udHJvbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY29udHJvbHMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gY29udHJvbC5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplRm9ybUNvbnRyb2xWYWxpZGF0aW9uKGNvbnRyb2wubmFtZSwgY29udHJvbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudChjb250cm9sLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbmJsdXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbChjb250cm9sLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY29udHJvbHMgPSBjb250cm9scztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFZhbGlkYXRvckNvbmZpZyhjb25maWc6IE5neFZhbGlkYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0Q29udHJvbHMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9uZ0Zvcm0gaW5zdGFuY2VvZiBOZ0Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fbmdGb3JtIGFzIE5nRm9ybSkuY29udHJvbHM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbmdGb3JtIGluc3RhbmNlb2YgRm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IHt9O1xuICAgICAgICAgICAgKHRoaXMuX25nRm9ybSBhcyBGb3JtR3JvdXBEaXJlY3RpdmUpLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzW2RpcmVjdGl2ZS5uYW1lXSA9IGRpcmVjdGl2ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0Q29udHJvbEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBBYnN0cmFjdENvbnRyb2wgfCBGb3JtQ29udHJvbE5hbWUge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IHRoaXMuX2dldENvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiBjb250cm9sc1tuYW1lXTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUNvbnRyb2wobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZ2V0Q29udHJvbEJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gdGhpcy5fZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKG5hbWUsIGNvbnRyb2wuZXJyb3JzKTtcbiAgICAgICAgICAgIHRoaXMuX3NldENvbnRyb2xWYWxpZGF0aW9uRXJyb3IobmFtZSwgZXJyb3JNZXNzYWdlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUNvbnRyb2xzKCkge1xuICAgICAgICAvLyDDpMK4wrvDqMKmwoHDpsKYwq8gw6bCl8Kgw6bCs8KVw6bCo8KAw6bCtcKLw6XCiMKwIG5nRm9ybSDDp8KawoQgY29udHJvbHMgw6fCmsKEw6XCj8KYw6XCjMKWw6/CvMKMw6bCiMKWw6jCgMKFw6bCmMKvw6bCiMKRw6bCssKhw6bCnMKJw6bCicK+w6XCiMKwXG4gICAgICAgIC8vIMOpwqrCjMOowq/CgcOnwprChMOmwpfCtsOlwoDCmcOlwr7CqsOnwo7CryBuZ0Zvcm0gw6fCmsKEIGNvbnRyb2xzIMOpwqrCjMOowq/CgVxuICAgICAgICAvLyDDpcKPwpHDp8KOwrDDpsKywqHDpsKcwokgdmFsaWRhdGlvbiDDpcKIwp3DpcKnwovDpcKMwpbDpMK4woDDpMK4wqrDr8K8wozDpcK3wrLDp8K7wo/DpcKtwpjDpcKcwqjDpMK4wo3DpMK8wprDqcKHwo3DpsKWwrDDpcKIwp3DpcKnwovDpcKMwpbDr8K8wozDpMK/wp3DpcKtwpjDp8K8wpPDpcKtwpjDpsKVwrDDpsKNwq5cbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB0aGlzLl9nZXRDb250cm9scygpO1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gY29udHJvbHMpIHtcbiAgICAgICAgICAgIGlmIChjb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyeUdldFZhbGlkYXRpb24obmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gw6fCp8K7w6nCmcKkw6XCt8Kyw6fCu8KPw6TCuMKNw6XCrcKYw6XCnMKow6fCmsKEIHZhbGlkYXRpb25cbiAgICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnZhbGlkYXRpb25zKTtcbiAgICAgICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIGlmICghY29udHJvbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy52YWxpZGF0aW9uc1tuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoJGV2ZW50PzogRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5fbmdGb3JtLm9uU3VibWl0KCRldmVudCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGVDb250cm9scygpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbmdGb3JtLnZhbGlkO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9uZ0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMudmFsaWRhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzdEZvcm1Db250cm9sVmFsaWRhdGlvbihuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckVsZW1lbnRFcnJvcihuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtDb250cm9sQXNFcnJvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jbGVhckVsZW1lbnRFcnJvcihuYW1lKTtcbiAgICAgICAgdGhpcy5fc2V0Q29udHJvbFZhbGlkYXRpb25FcnJvcihuYW1lLCBbbWVzc2FnZV0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIE9uSW5pdCxcbiAgICBOZ1pvbmUsXG4gICAgUmVuZGVyZXIyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vdmFsaWRhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdGb3JtLCBDb250cm9sQ29udGFpbmVyLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JDb25maWcgfSBmcm9tICcuLi92YWxpZGF0b3IuY2xhc3MnO1xuXG5jb25zdCBLRVlfQ09ERVNfRU5URVIgPSAxMztcblxuLy8gMS4gc3VibWl0IMOmwozCiSBFbnRlciDDqcKUwq7DpsKPwpDDpMK6wqQsIFRleHRhcmUgw6nCmcKkw6XCpMKWw6/CvMKMw6nCnMKAw6jCpsKBw6bCjMKJIEN0cmwgfCBDb21tYW5kICsgRW50ZXIgw6bCj8KQw6TCusKkXG4vLyAyLiBhbHdheXNTdWJtaXQgw6TCuMKNw6fCrsKhw6bCmMKvw6XCk8Kqw6TCuMKqw6XChcKDw6fCtMKgIMOmwozCiSBFbnRlciDDqcKUwq7DqcKDwr3DpsKPwpDDpMK6wqRcbi8vIDMuIGZvcmJpZFN1Ym1pdCBcYkVudGVyIMOpwpTCrsOnwqbCgcOmwq3CosOmwo/CkMOkwrrCpFxuLy8gw6nCu8KYw6jCrsKkIHN1Ym1pdFxuZXhwb3J0IGVudW0gTmd4RW50ZXJLZXlNb2RlIHtcbiAgICBzdWJtaXQgPSAnc3VibWl0JyxcbiAgICBhbHdheXNTdWJtaXQgPSAnYWx3YXlzU3VibWl0JyxcbiAgICBmb3JiaWRTdWJtaXQgPSAnZm9yYmlkU3VibWl0J1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Zvcm1bbmd4Rm9ybVZhbGlkYXRvcl0sZm9ybVtuZ3gtZm9ybS12YWxpZGF0b3JdJyxcbiAgICBwcm92aWRlcnM6IFtOZ3hGb3JtVmFsaWRhdG9yU2VydmljZV0sXG4gICAgZXhwb3J0QXM6ICduZ3hGb3JtVmFsaWRhdG9yJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oTmdDb250cm9sLCB7XG4gICAgICAgIGRlc2NlbmRhbnRzOiB0cnVlXG4gICAgfSlcbiAgICBwdWJsaWMgY29udHJvbHM6IFF1ZXJ5TGlzdDxOZ0NvbnRyb2w+O1xuXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZTogKCkgPT4gdm9pZDtcblxuICAgIG9uU3VibWl0U3VjY2VzczogKCRldmVudDogYW55KSA9PiB2b2lkO1xuXG4gICAgQElucHV0KCkgZW50ZXJLZXlNb2RlOiBOZ3hFbnRlcktleU1vZGU7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ3hGb3JtVmFsaWRhdG9yQ29uZmlnKGNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLnNldFZhbGlkYXRvckNvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5neEZvcm1WYWxpZGF0b3IoY29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iuc2V0VmFsaWRhdG9yQ29uZmlnKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgX3ZhbGlkYXRvcjogTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbmdGb3JtOiBDb250cm9sQ29udGFpbmVyXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWRvd24uYmluZCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3IuaW5pdGlhbGl6ZSh0aGlzLm5nRm9ybSBhcyBOZ0Zvcm0sIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmluaXRpYWxpemVGb3JtQ29udHJvbHNWYWxpZGF0aW9uKHRoaXMuY29udHJvbHMudG9BcnJheSgpKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5jaGFuZ2VzLnN1YnNjcmliZShjb250cm9scyA9PiB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5pbml0aWFsaXplRm9ybUNvbnRyb2xzVmFsaWRhdGlvbih0aGlzLmNvbnRyb2xzLnRvQXJyYXkoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1Ym1pdCgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvci52YWxpZGF0ZSgkZXZlbnQpICYmIHRoaXMub25TdWJtaXRTdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0U3VjY2VzcygkZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0UnVuSW5ab25lKCRldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0KCRldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uS2V5ZG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudElucHV0ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qga2V5ID0gJGV2ZW50LndoaWNoIHx8ICRldmVudC5rZXlDb2RlO1xuICAgICAgICBpZiAoa2V5ID09PSBLRVlfQ09ERVNfRU5URVIgJiYgY3VycmVudElucHV0LnRhZ05hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbnRlcktleU1vZGUgfHwgdGhpcy5lbnRlcktleU1vZGUgPT09IE5neEVudGVyS2V5TW9kZS5zdWJtaXQpIHtcbiAgICAgICAgICAgICAgICAvLyBURVhUQVJFQSBDdHJsICsgRW50ZXIgw6bCiMKWw6jCgMKFIENvbW1hbmQgKyBFbnRlciDDqcKYwrvDpsKtwqJcYsOpwrvCmMOowq7CpMOowqHCjMOkwrjCusOlwrnCtsOmwo/CkMOkwrrCpFxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5wdXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LmN0cmxLZXkgfHwgJGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRSdW5JblpvbmUoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIMOkwrjCjcOmwpjCryBURVhUQVJFQSBFbnRlciDDqcKYwrvDpsKtwqJcYsOpwrvCmMOowq7CpMOowqHCjMOkwrjCusOlwrnCtsOmwo/CkMOkwrrCpFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRSdW5JblpvbmUoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW50ZXJLZXlNb2RlID09PSBOZ3hFbnRlcktleU1vZGUuYWx3YXlzU3VibWl0KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRSdW5JblpvbmUoJGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE91dHB1dCwgT25Jbml0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBPcHRpb25hbCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hGb3JtVmFsaWRhdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hGb3JtU3VibWl0XSxbbmd4LWZvcm0tc3VibWl0XSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVN1Ym1pdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAT3V0cHV0KCkgbmd4Rm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHZhbGlkYXRvckRpcmVjdGl2ZTogTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbGlkYXRvckRpcmVjdGl2ZS5vblN1Ym1pdFN1Y2Nlc3MgPSAoJGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmd4Rm9ybVN1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIG9uU3VibWl0KCRldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yRGlyZWN0aXZlLnN1Ym1pdCgkZXZlbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBOZ3hWYWxpZGF0b3JzIHtcbiAgICBzdGF0aWMgdW5pcXVlQ2hlY2tWYWxpZGF0b3IodW5pcXVlQ2hlY2tGbjogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbj4pIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKFxuICAgICAgICAgICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sXG4gICAgICAgICk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHwgT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gPT4ge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5pcXVlQ2hlY2tGbihjb250cm9sLnZhbHVlKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAoaXNVbmlxdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVW5pcXVlID8geyBuZ3hVbmlxdWVDaGVjazogeyB2YWx1ZTogdHJ1ZSB9IH0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSwgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgTkdfVkFMSURBVE9SUyxcbiAgICBWYWxpZGF0b3IsXG4gICAgQWJzdHJhY3RDb250cm9sLFxuICAgIFZhbGlkYXRvcnMsXG4gICAgVmFsaWRhdG9yRm4sXG4gICAgTkdfQVNZTkNfVkFMSURBVE9SUyxcbiAgICBBc3luY1ZhbGlkYXRvcixcbiAgICBWYWxpZGF0aW9uRXJyb3JzXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JzIH0gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOlxuICAgICAgICAnW25neE1pbl1bZm9ybUNvbnRyb2xOYW1lXSxbbmd4TWluXVtmb3JtQ29udHJvbF0sW25neE1pbl1bbmdNb2RlbF0sJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1pblZhbGlkYXRvckRpcmVjdGl2ZSksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNaW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgbmd4TWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1pbihwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjb250cm9sKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOlxuICAgICAgICAnW25neE1heF1bZm9ybUNvbnRyb2xOYW1lXSxbbmd4TWF4XVtmb3JtQ29udHJvbF0sW25neE1heF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF4VmFsaWRhdG9yRGlyZWN0aXZlKSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1heFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuXG4gICAgQElucHV0KCkgcHVibGljIHNldCBuZ3hNYXgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWF4KHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGNvbnRyb2wpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4VW5pcXVlQ2hlY2tdW2Zvcm1Db250cm9sTmFtZV0sW25neFVuaXF1ZUNoZWNrXVtmb3JtQ29udHJvbF0sW25neFVuaXF1ZUNoZWNrXVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX0FTWU5DX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFzeW5jVmFsaWRhdG9yIHtcbiAgICBASW5wdXQoKSBuZ3hVbmlxdWVDaGVjazogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbiB8IG51bGw+ID0gKHZhbHVlOiBhbnkpID0+IG9mKG51bGwpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycz4ge1xuICAgICAgICByZXR1cm4gTmd4VmFsaWRhdG9ycy51bmlxdWVDaGVja1ZhbGlkYXRvcih0aGlzLm5neFVuaXF1ZUNoZWNrKShjb250cm9sKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hGb3JtVmFsaWRhdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm0tc3VibWl0LmRpcmVjdGl2ZSc7XG5cbi8vIGltcG9ydCB7IE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm0tdW5pcXVlLWNoZWNrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXhWYWxpZGF0b3JEaXJlY3RpdmUsIE1pblZhbGlkYXRvckRpcmVjdGl2ZSwgTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5cbmltcG9ydCB7IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZywgTkdYX1ZBTElEQVRPUl9DT05GSUcgfSBmcm9tICcuL3ZhbGlkYXRvci5jbGFzcyc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgICBOZ3hGb3JtVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIE5neEZvcm1TdWJtaXREaXJlY3RpdmUsXG4gICAgTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUsXG4gICAgTWF4VmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIE1pblZhbGlkYXRvckRpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcbiAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFsuLi5kZWNsYXJhdGlvbnMsIEZvcm1zTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hWYWxpZGF0b3JNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTmd4VmFsaWRhdG9yTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBOR1hfVkFMSURBVE9SX0NPTkZJRyxcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=