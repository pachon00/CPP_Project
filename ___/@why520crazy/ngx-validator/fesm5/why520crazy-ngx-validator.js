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
    NgxValidatorLoader.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxValidatorLoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_VALIDATOR_CONFIG,] }] }
    ]; };
    /** @nocollapse */ NgxValidatorLoader.ngInjectableDef = defineInjectable({ factory: function NgxValidatorLoader_Factory() { return new NgxValidatorLoader(inject(NGX_VALIDATOR_CONFIG, 8)); }, token: NgxValidatorLoader, providedIn: "root" });
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
    NgxFormValidatorService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxFormValidatorService.ctorParameters = function () { return [
        { type: NgxValidatorLoader }
    ]; };
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
    NgxValidatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: declarations,
                    imports: [FormsModule],
                    exports: __spread(declarations, [FormsModule])
                },] }
    ];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2h5NTIwY3Jhenktbmd4LXZhbGlkYXRvci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9yLmNsYXNzLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9zdHJhdGVnaWVzL25vb3AtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneS50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3Ivc3RyYXRlZ2llcy9ib290c3RyYXAtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneS50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3Ivc3RyYXRlZ2llcy9pbmRleC50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9tZXNzYWdlLXRyYW5zZm9ybWVycy50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9yLnNlcnZpY2UudHMiLCJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9kaXJlY3RpdmVzL2Zvcm0tc3VibWl0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9ycy50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvZGlyZWN0aXZlcy92YWxpZGF0b3JzLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWN0aW9uYXJ5PFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIE5neFZhbGlkYXRpb25NZXNzYWdlcyA9IERpY3Rpb25hcnk8RGljdGlvbmFyeTxzdHJpbmc+PjtcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZ3hWYWxpZGF0ZU9uID0gJ3N1Ym1pdCcgfCAnYmx1cic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4VmFsaWRhdG9yQ29uZmlnIHtcbiAgICB2YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneT86IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5O1xuICAgIHZhbGlkYXRpb25NZXNzYWdlcz86IE5neFZhbGlkYXRpb25NZXNzYWdlcztcbiAgICB2YWxpZGF0ZU9uPzogTmd4VmFsaWRhdGVPbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnIGV4dGVuZHMgTmd4VmFsaWRhdG9yQ29uZmlnIHtcbiAgICBnbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXM/OiBEaWN0aW9uYXJ5PHN0cmluZz47XG59XG5cbmV4cG9ydCBjb25zdCBOR1hfVkFMSURBVE9SX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWc+KCdOR1hfVkFMSURBVElPTl9DT05GSUcnKTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0xPQkFMX1ZBTElEQVRJT05fTUVTU0FHRVMgPSB7XG4gICAgcmVxdWlyZWQ6ICfDqMKvwqXDqcKAwonDqcKhwrnDpMK4wo3DqMKDwr3DpMK4wrrDp8KpwronLFxuICAgIG1heGxlbmd0aDogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOlwoDCvMOpwpXCv8OlwrrCpsOkwrjCjcOowoPCvcOlwqTCp8OkwrrCjntyZXF1aXJlZExlbmd0aH0nLFxuICAgIG1pbmxlbmd0aDogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOlwoDCvMOpwpXCv8OlwrrCpsOkwrjCjcOowoPCvcOlwrDCj8OkwrrCjntyZXF1aXJlZExlbmd0aH0nLFxuICAgIG5neFVuaXF1ZUNoZWNrOiAnw6jCvsKTw6XChcKlw6XCgMK8w6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6/CvMKMw6jCr8K3w6nCh8KNw6bClsKww6jCvsKTw6XChcKlJyxcbiAgICBlbWFpbDogJ8Oowr7Ck8OlwoXCpcOpwoLCrsOkwrvCtsOnwprChMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCricsXG4gICAgcmVwZWF0OiAnw6TCuMKkw6bCrMKhw6jCvsKTw6XChcKlw6TCuMKNw6TCuMKAw6jCh8K0JyxcbiAgICBwYXR0ZXJuOiAnw6jCr8Klw6nCgMKJw6nCocK5w6jCvsKTw6XChcKlw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuJyxcbiAgICBudW1iZXI6ICfDpcK/woXDqcKhwrvDqMK+wpPDpcKFwqXDpsKVwrDDpcKtwpcnLFxuICAgIHVybDogJ8Oowr7Ck8OlwoXCpVVSTMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCricsXG4gICAgbWF4OiAnw6jCr8Klw6nCgMKJw6nCocK5w6jCvsKTw6XChcKlw6XCgMK8w6TCuMKNw6jCg8K9w6XCpMKnw6TCusKOe21heH0nLFxuICAgIG1pbjogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOlwoDCvMOkwrjCjcOowoPCvcOlwrDCj8OkwrrCjnttaW59J1xufTtcbiIsImltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi92YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIE5vb3BWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSBpbXBsZW1lbnRzIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICAvKiogRG9lcyBub3RoaW5nLCBhcyB0aGlzIHZhbGlkYXRpb24gbWVzc2FnZSBkaXNwbGF5IHN0cmF0ZWd5IGlzIGEgbm8tb3AuICovXG4gICAgc2hvd0Vycm9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSk6IHZvaWQge31cblxuICAgIHJlbW92ZUVycm9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7fVxufVxuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3ZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuXG5jb25zdCBJTlZBTElEX0NMQVNTID0gJ2lzLWludmFsaWQnO1xuY29uc3QgSU5WQUxJRF9GRUVEQkFDS19DTEFTUyA9ICdpbnZhbGlkLWZlZWRiYWNrJztcblxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IGltcGxlbWVudHMgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHNob3dFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChJTlZBTElEX0NMQVNTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgZGl2Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlcnJvck1lc3NhZ2VzWzBdKTtcbiAgICAgICAgICAgIGRpdk5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICAgICAgZGl2Tm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgSU5WQUxJRF9GRUVEQkFDS19DTEFTUyk7XG4gICAgICAgICAgICBkb2N1bWVudEZyYWcuYXBwZW5kQ2hpbGQoZGl2Tm9kZSk7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kKGRvY3VtZW50RnJhZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKElOVkFMSURfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke0lOVkFMSURfRkVFREJBQ0tfQ0xBU1N9YCk7XG4gICAgICAgICAgICBpZiAoaW52YWxpZEZlZWRiYWNrKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGludmFsaWRGZWVkYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL25vb3AtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneSc7XG5pbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vYm9vdHN0cmFwLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3ZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyIHtcbiAgICBzdGF0aWMgbm9vcCgpOiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9vcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGJvb3RzdHJhcCgpOiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5LCBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3ksIEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH07XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyxcbiAgICBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMsXG4gICAgRGljdGlvbmFyeSxcbiAgICBOR1hfVkFMSURBVE9SX0NPTkZJRyxcbiAgICBERUZBVUxUX0dMT0JBTF9WQUxJREFUSU9OX01FU1NBR0VTXG59IGZyb20gJy4vdmFsaWRhdG9yLmNsYXNzJztcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSwgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyIH0gZnJvbSAnLi9zdHJhdGVnaWVzJztcblxuY29uc3QgZGVmYXVsdFZhbGlkYXRvckNvbmZpZzogTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnID0ge1xuICAgIHZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5OiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneUJ1aWxkZXIuYm9vdHN0cmFwKCksXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fVxufTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hWYWxpZGF0b3JMb2FkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWc7XG5cbiAgICBwcml2YXRlIGdldERlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZShrZXk6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzICYmIHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gREVGQVVMVF9HTE9CQUxfVkFMSURBVElPTl9NRVNTQUdFU1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlcztcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSA9IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlci5ib290c3RyYXAoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRlT24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnZhbGlkYXRlT24pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnZhbGlkYXRlT24gPSAnc3VibWl0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudmFsaWRhdGVPbjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQE9wdGlvbmFsKClcbiAgICAgICAgQEluamVjdChOR1hfVkFMSURBVE9SX0NPTkZJRylcbiAgICAgICAgY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWdcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0VmFsaWRhdG9yQ29uZmlnLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAgICogQHBhcmFtIG5hbWUgZm9ybUNvbnRyb2wgbmFtZSwgZS5nLiB1c2VybmFtZSBvciBlbWFpbFxuICAgICAqIEBwYXJhbSBrZXkgdmFsaWRhdG9yIG5hbWUsIGUuZy4gcmVxdWlyZWQgb3IgcGF0dGVyblxuICAgICAqL1xuICAgIGdldEVycm9yTWVzc2FnZShuYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM/OiBhbnkpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdW2tleV0pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0RXJyb3JNZXNzYWdlcyhuYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAvLyAgICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgICAvLyAgICAgZm9yIChjb25zdCB2YWxpZGF0aW9uRXJyb3IgaW4gdmFsaWRhdGlvbkVycm9ycykge1xuICAgIC8vICAgICAgICAgaWYgKHZhbGlkYXRpb25FcnJvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdGlvbkVycm9yKSkge1xuICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5nZXRFcnJvck1lc3NhZ2UobmFtZSwgdmFsaWRhdGlvbkVycm9yLCB2YWxpZGF0aW9uRXJyb3JzW3ZhbGlkYXRpb25FcnJvcl0pKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgLy8gfVxuXG4gICAgYWRkVmFsaWRhdGlvbk1lc3NhZ2VzKG1lc3NhZ2VzOiBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMsIG1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXModmFsaWRhdGlvbk1lc3NhZ2VzOiBEaWN0aW9uYXJ5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzID0gdmFsaWRhdGlvbk1lc3NhZ2VzO1xuICAgIH1cbn1cbiIsImZ1bmN0aW9uIG1heE9yTWluTGVuZ3RoVHJhbnNmb3JtZXIobWVzc2FnZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM6IHsgcmVxdWlyZWRMZW5ndGg6IG51bWJlciB9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKGB7cmVxdWlyZWRMZW5ndGh9YCwgdmFsaWRhdGlvbkVycm9yVmFsdWVzLnJlcXVpcmVkTGVuZ3RoLnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiBtYXhUcmFuc2Zvcm1lcihtZXNzYWdlOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlczogeyBtYXg6IG51bWJlcjsgYWN0dWFsOiBudW1iZXIgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZShge21heH1gLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMubWF4LnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiBtaW54VHJhbnNmb3JtZXIobWVzc2FnZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM6IHsgbWluOiBudW1iZXI7IGFjdHVhbDogbnVtYmVyIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoYHttaW59YCwgdmFsaWRhdGlvbkVycm9yVmFsdWVzLm1pbi50b1N0cmluZygpKTtcbn1cblxuY29uc3QgdHJhbnNmb3JtZXJNYXAgPSB7XG4gICAgbWlubGVuZ3RoOiBtYXhPck1pbkxlbmd0aFRyYW5zZm9ybWVyLFxuICAgIG1heGxlbmd0aDogbWF4T3JNaW5MZW5ndGhUcmFuc2Zvcm1lcixcbiAgICBtYXg6IG1heFRyYW5zZm9ybWVyLFxuICAgIG1pbjogbWlueFRyYW5zZm9ybWVyXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVzc2FnZSh2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzOiBhbnkpIHtcbiAgICBpZiAodHJhbnNmb3JtZXJNYXBbdmFsaWRhdG9yTmFtZV0gJiYgdmFsaWRhdGlvbkVycm9yVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1lck1hcFt2YWxpZGF0b3JOYW1lXShtZXNzYWdlLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgTmdGb3JtLFxuICAgIEFic3RyYWN0Q29udHJvbCxcbiAgICBWYWxpZGF0aW9uRXJyb3JzLFxuICAgIEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgICBGb3JtQ29udHJvbE5hbWUsXG4gICAgTmdDb250cm9sXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neFZhbGlkYXRvckxvYWRlciB9IGZyb20gJy4vdmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5neFZhbGlkYXRvckNvbmZpZywgRGljdGlvbmFyeSB9IGZyb20gJy4vdmFsaWRhdG9yLmNsYXNzJztcbmltcG9ydCB7IHRyYW5zZm9ybU1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UtdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neEZvcm1WYWxpZGF0b3JTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9uZ0Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICAgIHByaXZhdGUgX2Zvcm1FbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgX2NvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnO1xuXG4gICAgcHJpdmF0ZSBfY29udHJvbHM6IE5nQ29udHJvbFtdID0gW107XG5cbiAgICAvLyBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXTtcblxuICAgIC8vIMOowq7CsMOlwr3ClcOmwonCgMOmwpzCicOlwoXCg8OnwrTCoMOnwprChMOpwqrCjMOowq/CgcOkwr/CocOmwoHCr1xuICAgIHB1YmxpYyB2YWxpZGF0aW9uczogRGljdGlvbmFyeTx7XG4gICAgICAgIGhhc0Vycm9yPzogYm9vbGVhbjtcbiAgICAgICAgZXJyb3JNZXNzYWdlcz86IHN0cmluZ1tdO1xuICAgIH0+ID0ge307XG5cbiAgICBwcml2YXRlIF9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpIHtcbiAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPVxuICAgICAgICAgICAgKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kpIHx8XG4gICAgICAgICAgICB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTtcbiAgICAgICAgaWYgKCFzdHJhdGVneSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB2YWxpZGF0aW9uIGRpc3BsYXkgc3RyYXRlZ3kgaXMgbnVsbGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJhdGVneTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRFbGVtZW50KG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnRbbmFtZV07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT0nJHtuYW1lfSddYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9jbGVhckVsZW1lbnRFcnJvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbnNbbmFtZV0gJiYgdGhpcy52YWxpZGF0aW9uc1tuYW1lXS5oYXNFcnJvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uc1tuYW1lXS5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uc1tuYW1lXS5lcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgICAgICB0aGlzLl9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpLnJlbW92ZUVycm9yKHRoaXMuX2dldEVsZW1lbnQobmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RyeUdldFZhbGlkYXRpb24obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0aW9uc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZUZvcm1Db250cm9sVmFsaWRhdGlvbihuYW1lLCB0aGlzLl9nZXRDb250cm9sQnlOYW1lKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uc1tuYW1lXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0aWFsaXplRm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHwgTmdDb250cm9sKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0gPSB7XG4gICAgICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc3RGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuICAgICAgICBpZiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgdmFsaWRhdGlvbi5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdmFsaWRhdGlvbi5lcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRWYWxpZGF0aW9uTWVzc2FnZShuYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvck5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzPzogYW55KSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZyAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlcyAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXSAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVt2YWxpZGF0aW9uRXJyb3JOYW1lXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLl9jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdW3ZhbGlkYXRpb25FcnJvck5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMudGh5Rm9ybVZhbGlkYXRlTG9hZGVyLmdldEVycm9yTWVzc2FnZShuYW1lLCB2YWxpZGF0aW9uRXJyb3JOYW1lLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybU1lc3NhZ2UodmFsaWRhdGlvbkVycm9yTmFtZSwgbWVzc2FnZSwgdmFsaWRhdGlvbkVycm9yVmFsdWVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRWYWxpZGF0aW9uTWVzc2FnZXMobmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgdmFsaWRhdGlvbkVycm9yIGluIHZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmhhc093blByb3BlcnR5KHZhbGlkYXRpb25FcnJvcikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHRoaXMuX2dldFZhbGlkYXRpb25NZXNzYWdlKG5hbWUsIHZhbGlkYXRpb25FcnJvciwgdmFsaWRhdGlvbkVycm9yc1t2YWxpZGF0aW9uRXJyb3JdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldENvbnRyb2xWYWxpZGF0aW9uRXJyb3IobmFtZTogc3RyaW5nLCBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy5fdHJ5R2V0VmFsaWRhdGlvbihuYW1lKTtcbiAgICAgICAgdmFsaWRhdGlvbi5lcnJvck1lc3NhZ2VzID0gZXJyb3JNZXNzYWdlcztcbiAgICAgICAgdmFsaWRhdGlvbi5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2dldFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCkuc2hvd0Vycm9yKHRoaXMuX2dldEVsZW1lbnQobmFtZSksIGVycm9yTWVzc2FnZXMpO1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0b3JDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aHlGb3JtVmFsaWRhdGVMb2FkZXI6IE5neFZhbGlkYXRvckxvYWRlcikge31cblxuICAgIGluaXRpYWxpemUobmdGb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUsIGZvcm1FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9uZ0Zvcm0gPSBuZ0Zvcm07XG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24oY29udHJvbHM6IE5nQ29udHJvbFtdKSB7XG4gICAgICAgIGlmICgodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy52YWxpZGF0ZU9uID09PSAnYmx1cicpIHx8IHRoaXMudGh5Rm9ybVZhbGlkYXRlTG9hZGVyLnZhbGlkYXRlT24gPT09ICdibHVyJykge1xuICAgICAgICAgICAgKGNvbnRyb2xzIHx8IFtdKS5mb3JFYWNoKChjb250cm9sOiBOZ0NvbnRyb2wpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NvbnRyb2xzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGNvbnRyb2wubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZUZvcm1Db250cm9sVmFsaWRhdGlvbihjb250cm9sLm5hbWUsIGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoY29udHJvbC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25ibHVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2woY29udHJvbC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xzID0gY29udHJvbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRWYWxpZGF0b3JDb25maWcoY29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldENvbnRyb2xzKCkge1xuICAgICAgICBpZiAodGhpcy5fbmdGb3JtIGluc3RhbmNlb2YgTmdGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX25nRm9ybSBhcyBOZ0Zvcm0pLmNvbnRyb2xzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX25nRm9ybSBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgICh0aGlzLl9uZ0Zvcm0gYXMgRm9ybUdyb3VwRGlyZWN0aXZlKS5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sc1tkaXJlY3RpdmUubmFtZV0gPSBkaXJlY3RpdmU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9scztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldENvbnRyb2xCeU5hbWUobmFtZTogc3RyaW5nKTogQWJzdHJhY3RDb250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB0aGlzLl9nZXRDb250cm9scygpO1xuICAgICAgICByZXR1cm4gY29udHJvbHNbbmFtZV07XG4gICAgfVxuXG4gICAgdmFsaWRhdGVDb250cm9sKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jbGVhckVsZW1lbnRFcnJvcihuYW1lKTtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2xCeU5hbWUobmFtZSk7XG4gICAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHRoaXMuX2dldFZhbGlkYXRpb25NZXNzYWdlcyhuYW1lLCBjb250cm9sLmVycm9ycyk7XG4gICAgICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWUsIGVycm9yTWVzc2FnZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVDb250cm9scygpIHtcbiAgICAgICAgLy8gw6TCuMK7w6jCpsKBw6bCmMKvIMOmwpfCoMOmwrPClcOmwqPCgMOmwrXCi8OlwojCsCBuZ0Zvcm0gw6fCmsKEIGNvbnRyb2xzIMOnwprChMOlwo/CmMOlwozClsOvwrzCjMOmwojClsOowoDChcOmwpjCr8OmwojCkcOmwrLCocOmwpzCicOmwonCvsOlwojCsFxuICAgICAgICAvLyDDqcKqwozDqMKvwoHDp8KawoTDpsKXwrbDpcKAwpnDpcK+wqrDp8KOwq8gbmdGb3JtIMOnwprChCBjb250cm9scyDDqcKqwozDqMKvwoFcbiAgICAgICAgLy8gw6XCj8KRw6fCjsKww6bCssKhw6bCnMKJIHZhbGlkYXRpb24gw6XCiMKdw6XCp8KLw6XCjMKWw6TCuMKAw6TCuMKqw6/CvMKMw6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6TCuMKNw6TCvMKaw6nCh8KNw6bClsKww6XCiMKdw6XCp8KLw6XCjMKWw6/CvMKMw6TCv8Kdw6XCrcKYw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNvbnRyb2xzKSB7XG4gICAgICAgICAgICBpZiAoY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlHZXRWYWxpZGF0aW9uKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIMOnwqfCu8OpwpnCpMOlwrfCssOnwrvCj8OkwrjCjcOlwq3CmMOlwpzCqMOnwprChCB2YWxpZGF0aW9uXG4gICAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy52YWxpZGF0aW9ucyk7XG4gICAgICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbnRyb2xzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMudmFsaWRhdGlvbnNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCRldmVudD86IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuX25nRm9ybS5vblN1Ym1pdCgkZXZlbnQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nRm9ybS52YWxpZDtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5fbmdGb3JtLnJlc2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLnZhbGlkYXRpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3RGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrQ29udHJvbEFzRXJyb3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgIHRoaXMuX3NldENvbnRyb2xWYWxpZGF0aW9uRXJyb3IobmFtZSwgW21lc3NhZ2VdKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBPbkluaXQsXG4gICAgTmdab25lLFxuICAgIFJlbmRlcmVyMixcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uRGVzdHJveSxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uL3ZhbGlkYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IE5nRm9ybSwgQ29udHJvbENvbnRhaW5lciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9yQ29uZmlnIH0gZnJvbSAnLi4vdmFsaWRhdG9yLmNsYXNzJztcblxuY29uc3QgS0VZX0NPREVTX0VOVEVSID0gMTM7XG5cbi8vIDEuIHN1Ym1pdCDDpsKMwokgRW50ZXIgw6nClMKuw6bCj8KQw6TCusKkLCBUZXh0YXJlIMOpwpnCpMOlwqTClsOvwrzCjMOpwpzCgMOowqbCgcOmwozCiSBDdHJsIHwgQ29tbWFuZCArIEVudGVyIMOmwo/CkMOkwrrCpFxuLy8gMi4gYWx3YXlzU3VibWl0IMOkwrjCjcOnwq7CocOmwpjCr8OlwpPCqsOkwrjCqsOlwoXCg8OnwrTCoCDDpsKMwokgRW50ZXIgw6nClMKuw6nCg8K9w6bCj8KQw6TCusKkXG4vLyAzLiBmb3JiaWRTdWJtaXQgXGJFbnRlciDDqcKUwq7Dp8KmwoHDpsKtwqLDpsKPwpDDpMK6wqRcbi8vIMOpwrvCmMOowq7CpCBzdWJtaXRcbmV4cG9ydCBlbnVtIE5neEVudGVyS2V5TW9kZSB7XG4gICAgc3VibWl0ID0gJ3N1Ym1pdCcsXG4gICAgYWx3YXlzU3VibWl0ID0gJ2Fsd2F5c1N1Ym1pdCcsXG4gICAgZm9yYmlkU3VibWl0ID0gJ2ZvcmJpZFN1Ym1pdCdcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdmb3JtW25neEZvcm1WYWxpZGF0b3JdLGZvcm1bbmd4LWZvcm0tdmFsaWRhdG9yXScsXG4gICAgcHJvdmlkZXJzOiBbTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2VdLFxuICAgIGV4cG9ydEFzOiAnbmd4Rm9ybVZhbGlkYXRvcidcbn0pXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBAQ29udGVudENoaWxkcmVuKE5nQ29udHJvbCwge1xuICAgICAgICBkZXNjZW5kYW50czogdHJ1ZVxuICAgIH0pXG4gICAgcHVibGljIGNvbnRyb2xzOiBRdWVyeUxpc3Q8TmdDb250cm9sPjtcblxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWQ7XG5cbiAgICBvblN1Ym1pdFN1Y2Nlc3M6ICgkZXZlbnQ6IGFueSkgPT4gdm9pZDtcblxuICAgIEBJbnB1dCgpIGVudGVyS2V5TW9kZTogTmd4RW50ZXJLZXlNb2RlO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmd4Rm9ybVZhbGlkYXRvckNvbmZpZyhjb25maWc6IE5neFZhbGlkYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5zZXRWYWxpZGF0b3JDb25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ3hGb3JtVmFsaWRhdG9yKGNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLnNldFZhbGlkYXRvckNvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF92YWxpZGF0b3I6IE5neEZvcm1WYWxpZGF0b3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5nRm9ybTogQ29udHJvbENvbnRhaW5lclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmluaXRpYWxpemUodGhpcy5uZ0Zvcm0gYXMgTmdGb3JtLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5pbml0aWFsaXplRm9ybUNvbnRyb2xzVmFsaWRhdGlvbih0aGlzLmNvbnRyb2xzLnRvQXJyYXkoKSk7XG4gICAgICAgIHRoaXMuY29udHJvbHMuY2hhbmdlcy5zdWJzY3JpYmUoY29udHJvbHMgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24odGhpcy5jb250cm9scy50b0FycmF5KCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoJGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IudmFsaWRhdGUoJGV2ZW50KSAmJiB0aGlzLm9uU3VibWl0U3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdFN1Y2Nlc3MoJGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCgkZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbktleWRvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbnB1dCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGtleSA9ICRldmVudC53aGljaCB8fCAkZXZlbnQua2V5Q29kZTtcbiAgICAgICAgaWYgKGtleSA9PT0gS0VZX0NPREVTX0VOVEVSICYmIGN1cnJlbnRJbnB1dC50YWdOYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZW50ZXJLZXlNb2RlIHx8IHRoaXMuZW50ZXJLZXlNb2RlID09PSBOZ3hFbnRlcktleU1vZGUuc3VibWl0KSB7XG4gICAgICAgICAgICAgICAgLy8gVEVYVEFSRUEgQ3RybCArIEVudGVyIMOmwojClsOowoDChSBDb21tYW5kICsgRW50ZXIgw6nCmMK7w6bCrcKiXGLDqcK7wpjDqMKuwqTDqMKhwozDpMK4wrrDpcK5wrbDpsKPwpDDpMK6wqRcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudElucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC5jdHJsS2V5IHx8ICRldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDDpMK4wo3DpsKYwq8gVEVYVEFSRUEgRW50ZXIgw6nCmMK7w6bCrcKiXGLDqcK7wpjDqMKuwqTDqMKhwozDpMK4wrrDpcK5wrbDpsKPwpDDpMK6wqRcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVudGVyS2V5TW9kZSA9PT0gTmd4RW50ZXJLZXlNb2RlLmFsd2F5c1N1Ym1pdCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPdXRwdXQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgT3B0aW9uYWwsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4Rm9ybVN1Ym1pdF0sW25neC1mb3JtLXN1Ym1pdF0nXG59KVxuZXhwb3J0IGNsYXNzIE5neEZvcm1TdWJtaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIG5neEZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB2YWxpZGF0b3JEaXJlY3RpdmU6IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JEaXJlY3RpdmUub25TdWJtaXRTdWNjZXNzID0gKCRldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5neEZvcm1TdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvblN1Ym1pdCgkZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvckRpcmVjdGl2ZS5zdWJtaXQoJGV2ZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdG9ycyB7XG4gICAgc3RhdGljIHVuaXF1ZUNoZWNrVmFsaWRhdG9yKHVuaXF1ZUNoZWNrRm46ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChcbiAgICAgICAgICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbFxuICAgICAgICApOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0+IHtcbiAgICAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZUNoZWNrRm4oY29udHJvbC52YWx1ZSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKGlzVW5pcXVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1VuaXF1ZSA/IHsgbmd4VW5pcXVlQ2hlY2s6IHsgdmFsdWU6IHRydWUgfSB9IDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUsIEluamVjdGFibGUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5HX1ZBTElEQVRPUlMsXG4gICAgVmFsaWRhdG9yLFxuICAgIEFic3RyYWN0Q29udHJvbCxcbiAgICBWYWxpZGF0b3JzLFxuICAgIFZhbGlkYXRvckZuLFxuICAgIE5HX0FTWU5DX1ZBTElEQVRPUlMsXG4gICAgQXN5bmNWYWxpZGF0b3IsXG4gICAgVmFsaWRhdGlvbkVycm9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9ycyB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjpcbiAgICAgICAgJ1tuZ3hNaW5dW2Zvcm1Db250cm9sTmFtZV0sW25neE1pbl1bZm9ybUNvbnRyb2xdLFtuZ3hNaW5dW25nTW9kZWxdLCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5WYWxpZGF0b3JEaXJlY3RpdmUpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWluVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgc2V0IG5neE1pbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5taW4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoY29udHJvbCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjpcbiAgICAgICAgJ1tuZ3hNYXhdW2Zvcm1Db250cm9sTmFtZV0sW25neE1heF1bZm9ybUNvbnRyb2xdLFtuZ3hNYXhdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1heFZhbGlkYXRvckRpcmVjdGl2ZSksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXhWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgbmd4TWF4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1heChwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjb250cm9sKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neFVuaXF1ZUNoZWNrXVtmb3JtQ29udHJvbE5hbWVdLFtuZ3hVbmlxdWVDaGVja11bZm9ybUNvbnRyb2xdLFtuZ3hVbmlxdWVDaGVja11bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19BU1lOQ19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBBc3luY1ZhbGlkYXRvciB7XG4gICAgQElucHV0KCkgbmd4VW5pcXVlQ2hlY2s6ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBudWxsPiA9ICh2YWx1ZTogYW55KSA9PiBvZihudWxsKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycz4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnM+IHtcbiAgICAgICAgcmV0dXJuIE5neFZhbGlkYXRvcnMudW5pcXVlQ2hlY2tWYWxpZGF0b3IodGhpcy5uZ3hVbmlxdWVDaGVjaykoY29udHJvbCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4Rm9ybVN1Ym1pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXN1Ym1pdC5kaXJlY3RpdmUnO1xuXG4vLyBpbXBvcnQgeyBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXVuaXF1ZS1jaGVjay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF4VmFsaWRhdG9yRGlyZWN0aXZlLCBNaW5WYWxpZGF0b3JEaXJlY3RpdmUsIE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcsIE5HWF9WQUxJREFUT1JfQ09ORklHIH0gZnJvbSAnLi92YWxpZGF0b3IuY2xhc3MnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gICAgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlLFxuICAgIE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlLFxuICAgIE1heFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBNaW5WYWxpZGF0b3JEaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbLi4uZGVjbGFyYXRpb25zLCBGb3Jtc01vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdG9yTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neFZhbGlkYXRvck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogTkdYX1ZBTElEQVRPUl9DT05GSUcsXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQW9CQSxJQUFhLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUEyQix1QkFBdUIsQ0FBQzs7QUFFekcsSUFBYSxrQ0FBa0MsR0FBRztJQUM5QyxRQUFRLEVBQUUsU0FBUztJQUNuQixTQUFTLEVBQUUsOEJBQThCO0lBQ3pDLFNBQVMsRUFBRSw4QkFBOEI7SUFDekMsY0FBYyxFQUFFLGVBQWU7SUFDL0IsS0FBSyxFQUFFLFlBQVk7SUFDbkIsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLFlBQVk7SUFDckIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLFlBQVk7SUFDakIsR0FBRyxFQUFFLGlCQUFpQjtJQUN0QixHQUFHLEVBQUUsaUJBQWlCO0NBQ3pCOzs7Ozs7QUNoQ0Q7SUFBQTtLQUtDOzs7Ozs7OztJQUhHLGtEQUFTOzs7Ozs7SUFBVCxVQUFVLE9BQW9CLEVBQUUsYUFBdUIsS0FBVTs7Ozs7SUFFakUsb0RBQVc7Ozs7SUFBWCxVQUFZLE9BQW9CLEtBQVU7SUFDOUMscUNBQUM7Q0FBQTs7Ozs7OztJQ0xLLGFBQWEsR0FBRyxZQUFZOztJQUM1QixzQkFBc0IsR0FBRyxrQkFBa0I7QUFFakQ7SUFDSTtLQUFnQjs7Ozs7O0lBRWhCLHVEQUFTOzs7OztJQUFULFVBQVUsT0FBb0IsRUFBRSxhQUF1QjtRQUNuRCxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTs7Z0JBQzVCLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUU7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