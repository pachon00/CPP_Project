(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@why520crazy/ngx-validator', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.why520crazy = global.why520crazy || {}, global.why520crazy['ngx-validator'] = {}),global.ng.core,global.ng.forms,global.rxjs,global.rxjs.operators));
}(this, (function (exports,i0,forms,rxjs,operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGX_VALIDATOR_CONFIG = new i0.InjectionToken('NGX_VALIDATION_CONFIG');
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
             */ function () {
                return this.config.validationMessages;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxValidatorLoader.prototype, "validationFeedbackStrategy", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxValidatorLoader.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [NGX_VALIDATOR_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ NgxValidatorLoader.ngInjectableDef = i0.defineInjectable({ factory: function NgxValidatorLoader_Factory() { return new NgxValidatorLoader(i0.inject(NGX_VALIDATOR_CONFIG, 8)); }, token: NgxValidatorLoader, providedIn: "root" });
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
             */ function () {
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
                if (this._ngForm instanceof forms.NgForm) {
                    return (( /** @type {?} */(this._ngForm))).controls;
                }
                else if (this._ngForm instanceof forms.FormGroupDirective) {
                    /** @type {?} */
                    var controls_1 = {};
                    (( /** @type {?} */(this._ngForm))).directives.forEach(function (directive) {
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
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        NgxFormValidatorService.ctorParameters = function () {
            return [
                { type: NgxValidatorLoader }
            ];
        };
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
             */ function (config) {
                this.validator.setValidatorConfig(config);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxFormValidatorDirective.prototype, "ngxFormValidator", {
            set: /**
             * @param {?} config
             * @return {?}
             */ function (config) {
                this.validator.setValidatorConfig(config);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxFormValidatorDirective.prototype, "validator", {
            get: /**
             * @return {?}
             */ function () {
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
                this.validator.initialize(( /** @type {?} */(this.ngForm)), this.elementRef.nativeElement);
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
            { type: i0.Directive, args: [{
                        selector: 'form[ngxFormValidator],form[ngx-form-validator]',
                        providers: [NgxFormValidatorService],
                        exportAs: 'ngxFormValidator'
                    },] }
        ];
        /** @nocollapse */
        NgxFormValidatorDirective.ctorParameters = function () {
            return [
                { type: i0.NgZone },
                { type: i0.Renderer2 },
                { type: i0.ElementRef },
                { type: NgxFormValidatorService },
                { type: forms.ControlContainer }
            ];
        };
        NgxFormValidatorDirective.propDecorators = {
            controls: [{ type: i0.ContentChildren, args: [forms.NgControl, {
                            descendants: true
                        },] }],
            enterKeyMode: [{ type: i0.Input }],
            ngxFormValidatorConfig: [{ type: i0.Input }],
            ngxFormValidator: [{ type: i0.Input }]
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
            this.ngxFormSubmit = new i0.EventEmitter();
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
            { type: i0.Directive, args: [{
                        selector: '[ngxFormSubmit],[ngx-form-submit]'
                    },] }
        ];
        /** @nocollapse */
        NgxFormSubmitDirective.ctorParameters = function () {
            return [
                { type: NgxFormValidatorDirective }
            ];
        };
        NgxFormSubmitDirective.propDecorators = {
            ngxFormSubmit: [{ type: i0.Output }],
            onSubmit: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
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
                        return uniqueCheckFn(control.value).pipe(operators.map(function (isUnique) {
                            return isUnique ? { ngxUniqueCheck: { value: true } } : null;
                        }));
                    }
                    else {
                        return rxjs.of(null);
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
             */ function (value) {
                this.validator = forms.Validators.min(parseFloat(value));
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
            { type: i0.Directive, args: [{
                        selector: '[ngxMin][formControlName],[ngxMin][formControl],[ngxMin][ngModel],',
                        providers: [
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: i0.forwardRef(function () { return MinValidatorDirective; }),
                                multi: true
                            }
                        ]
                    },] }
        ];
        /** @nocollapse */
        MinValidatorDirective.ctorParameters = function () { return []; };
        MinValidatorDirective.propDecorators = {
            ngxMin: [{ type: i0.Input }]
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
             */ function (value) {
                this.validator = forms.Validators.max(parseFloat(value));
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
            { type: i0.Directive, args: [{
                        selector: '[ngxMax][formControlName],[ngxMax][formControl],[ngxMax][ngModel]',
                        providers: [
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: i0.forwardRef(function () { return MaxValidatorDirective; }),
                                multi: true
                            }
                        ]
                    },] }
        ];
        /** @nocollapse */
        MaxValidatorDirective.ctorParameters = function () { return []; };
        MaxValidatorDirective.propDecorators = {
            ngxMax: [{ type: i0.Input }]
        };
        return MaxValidatorDirective;
    }());
    var NgxUniqueCheckDirective = /** @class */ (function () {
        function NgxUniqueCheckDirective() {
            this.ngxUniqueCheck = function (value) { return rxjs.of(null); };
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
            { type: i0.Directive, args: [{
                        selector: '[ngxUniqueCheck][formControlName],[ngxUniqueCheck][formControl],[ngxUniqueCheck][ngModel]',
                        providers: [
                            {
                                provide: forms.NG_ASYNC_VALIDATORS,
                                useExisting: NgxUniqueCheckDirective,
                                multi: true
                            }
                        ]
                    },] }
        ];
        /** @nocollapse */
        NgxUniqueCheckDirective.ctorParameters = function () { return []; };
        NgxUniqueCheckDirective.propDecorators = {
            ngxUniqueCheck: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
                        declarations: declarations,
                        imports: [forms.FormsModule],
                        exports: __spread(declarations, [forms.FormsModule])
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

    exports.NgxValidators = NgxValidators;
    exports.NgxValidatorModule = NgxValidatorModule;
    exports.NgxValidatorLoader = NgxValidatorLoader;
    exports.NGX_VALIDATOR_CONFIG = NGX_VALIDATOR_CONFIG;
    exports.DEFAULT_GLOBAL_VALIDATION_MESSAGES = DEFAULT_GLOBAL_VALIDATION_MESSAGES;
    exports.NgxEnterKeyMode = NgxEnterKeyMode;
    exports.NgxFormValidatorDirective = NgxFormValidatorDirective;
    exports.NgxFormSubmitDirective = NgxFormSubmitDirective;
    exports.ValidationFeedbackStrategyBuilder = ValidationFeedbackStrategyBuilder;
    exports.NoopValidationFeedbackStrategy = NoopValidationFeedbackStrategy;
    exports.BootstrapValidationFeedbackStrategy = BootstrapValidationFeedbackStrategy;
    exports.ɵc = MaxValidatorDirective;
    exports.ɵb = MinValidatorDirective;
    exports.ɵd = NgxUniqueCheckDirective;
    exports.ɵa = NgxFormValidatorService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2h5NTIwY3Jhenktbmd4LXZhbGlkYXRvci51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci92YWxpZGF0b3IuY2xhc3MudHMiLCJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3N0cmF0ZWdpZXMvbm9vcC12YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5LnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9zdHJhdGVnaWVzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5LnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9zdHJhdGVnaWVzL2luZGV4LnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci92YWxpZGF0b3ItbG9hZGVyLnNlcnZpY2UudHMiLCJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL21lc3NhZ2UtdHJhbnNmb3JtZXJzLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci92YWxpZGF0b3Iuc2VydmljZS50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvZGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci92YWxpZGF0b3JzLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMudHMiLCJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL21vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGljdGlvbmFyeTxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMgPSBEaWN0aW9uYXJ5PERpY3Rpb25hcnk8c3RyaW5nPj47XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgTmd4VmFsaWRhdGVPbiA9ICdzdWJtaXQnIHwgJ2JsdXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neFZhbGlkYXRvckNvbmZpZyB7XG4gICAgdmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k/OiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM/OiBOZ3hWYWxpZGF0aW9uTWVzc2FnZXM7XG4gICAgdmFsaWRhdGVPbj86IE5neFZhbGlkYXRlT247XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyBleHRlbmRzIE5neFZhbGlkYXRvckNvbmZpZyB7XG4gICAgZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzPzogRGljdGlvbmFyeTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgTkdYX1ZBTElEQVRPUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Tmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnPignTkdYX1ZBTElEQVRJT05fQ09ORklHJyk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0dMT0JBTF9WQUxJREFUSU9OX01FU1NBR0VTID0ge1xuICAgIHJlcXVpcmVkOiAnw6jCr8Klw6nCgMKJw6nCocK5w6TCuMKNw6jCg8K9w6TCuMK6w6fCqcK6JyxcbiAgICBtYXhsZW5ndGg6ICfDqMKvwqXDqcKAwonDqcKhwrnDqMK+wpPDpcKFwqXDpcKAwrzDqcKVwr/DpcK6wqbDpMK4wo3DqMKDwr3DpcKkwqfDpMK6wo57cmVxdWlyZWRMZW5ndGh9JyxcbiAgICBtaW5sZW5ndGg6ICfDqMKvwqXDqcKAwonDqcKhwrnDqMK+wpPDpcKFwqXDpcKAwrzDqcKVwr/DpcK6wqbDpMK4wo3DqMKDwr3DpcKwwo/DpMK6wo57cmVxdWlyZWRMZW5ndGh9JyxcbiAgICBuZ3hVbmlxdWVDaGVjazogJ8Oowr7Ck8OlwoXCpcOlwoDCvMOlwrfCssOnwrvCj8Olwq3CmMOlwpzCqMOvwrzCjMOowq/Ct8OpwofCjcOmwpbCsMOowr7Ck8OlwoXCpScsXG4gICAgZW1haWw6ICfDqMK+wpPDpcKFwqXDqcKCwq7DpMK7wrbDp8KawoTDpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq4nLFxuICAgIHJlcGVhdDogJ8OkwrjCpMOmwqzCocOowr7Ck8OlwoXCpcOkwrjCjcOkwrjCgMOowofCtCcsXG4gICAgcGF0dGVybjogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCricsXG4gICAgbnVtYmVyOiAnw6XCv8KFw6nCocK7w6jCvsKTw6XChcKlw6bClcKww6XCrcKXJyxcbiAgICB1cmw6ICfDqMK+wpPDpcKFwqVVUkzDpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq4nLFxuICAgIG1heDogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOlwoDCvMOkwrjCjcOowoPCvcOlwqTCp8OkwrrCjnttYXh9JyxcbiAgICBtaW46ICfDqMKvwqXDqcKAwonDqcKhwrnDqMK+wpPDpcKFwqXDpcKAwrzDpMK4wo3DqMKDwr3DpcKwwo/DpMK6wo57bWlufSdcbn07XG4iLCJpbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneSc7XG5cbmV4cG9ydCBjbGFzcyBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgaW1wbGVtZW50cyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgLyoqIERvZXMgbm90aGluZywgYXMgdGhpcyB2YWxpZGF0aW9uIG1lc3NhZ2UgZGlzcGxheSBzdHJhdGVneSBpcyBhIG5vLW9wLiAqL1xuICAgIHNob3dFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pOiB2b2lkIHt9XG5cbiAgICByZW1vdmVFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge31cbn1cbiIsImltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi92YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcblxuY29uc3QgSU5WQUxJRF9DTEFTUyA9ICdpcy1pbnZhbGlkJztcbmNvbnN0IElOVkFMSURfRkVFREJBQ0tfQ0xBU1MgPSAnaW52YWxpZC1mZWVkYmFjayc7XG5cbmV4cG9ydCBjbGFzcyBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSBpbXBsZW1lbnRzIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzaG93RXJyb3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoSU5WQUxJRF9DTEFTUyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50RnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZXJyb3JNZXNzYWdlc1swXSk7XG4gICAgICAgICAgICBkaXZOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgICAgIGRpdk5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIElOVkFMSURfRkVFREJBQ0tfQ0xBU1MpO1xuICAgICAgICAgICAgZG9jdW1lbnRGcmFnLmFwcGVuZENoaWxkKGRpdk5vZGUpO1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZChkb2N1bWVudEZyYWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRXJyb3IoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShJTlZBTElEX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtJTlZBTElEX0ZFRURCQUNLX0NMQVNTfWApO1xuICAgICAgICAgICAgaWYgKGludmFsaWRGZWVkYmFjaykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbnZhbGlkRmVlZGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTm9vcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi9ub29wLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL2Jvb3RzdHJhcC12YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcbmltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi92YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlciB7XG4gICAgc3RhdGljIG5vb3AoKTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gbmV3IE5vb3BWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBib290c3RyYXAoKTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gbmV3IEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSwgTm9vcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5LCBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9O1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcsXG4gICAgTmd4VmFsaWRhdGlvbk1lc3NhZ2VzLFxuICAgIERpY3Rpb25hcnksXG4gICAgTkdYX1ZBTElEQVRPUl9DT05GSUcsXG4gICAgREVGQVVMVF9HTE9CQUxfVkFMSURBVElPTl9NRVNTQUdFU1xufSBmcm9tICcuL3ZhbGlkYXRvci5jbGFzcyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3ksIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlciB9IGZyb20gJy4vc3RyYXRlZ2llcyc7XG5cbmNvbnN0IGRlZmF1bHRWYWxpZGF0b3JDb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyA9IHtcbiAgICB2YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyLmJvb3RzdHJhcCgpLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge31cbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdG9yTG9hZGVyIHtcbiAgICBwcml2YXRlIGNvbmZpZzogTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnO1xuXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2Uoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlcyAmJiB0aGlzLmNvbmZpZy5nbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIERFRkFVTFRfR0xPQkFMX1ZBTElEQVRJT05fTUVTU0FHRVNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWxpZGF0aW9uTWVzc2FnZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXM7XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCk6IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSkge1xuICAgICAgICAgICAgdGhpcy5jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgPSBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneUJ1aWxkZXIuYm9vdHN0cmFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5O1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0ZU9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy52YWxpZGF0ZU9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy52YWxpZGF0ZU9uID0gJ3N1Ym1pdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnZhbGlkYXRlT247XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBPcHRpb25hbCgpXG4gICAgICAgIEBJbmplY3QoTkdYX1ZBTElEQVRPUl9DT05GSUcpXG4gICAgICAgIGNvbmZpZzogTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnXG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFZhbGlkYXRvckNvbmZpZywgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgICAqIEBwYXJhbSBuYW1lIGZvcm1Db250cm9sIG5hbWUsIGUuZy4gdXNlcm5hbWUgb3IgZW1haWxcbiAgICAgKiBAcGFyYW0ga2V5IHZhbGlkYXRvciBuYW1lLCBlLmcuIHJlcXVpcmVkIG9yIHBhdHRlcm5cbiAgICAgKi9cbiAgICBnZXRFcnJvck1lc3NhZ2UobmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzPzogYW55KSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXSAmJiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVtrZXldKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1ba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldERlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIC8vIGdldEVycm9yTWVzc2FnZXMobmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgLy8gICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgLy8gICAgIGZvciAoY29uc3QgdmFsaWRhdGlvbkVycm9yIGluIHZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAvLyAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmhhc093blByb3BlcnR5KHZhbGlkYXRpb25FcnJvcikpIHtcbiAgICAvLyAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHRoaXMuZ2V0RXJyb3JNZXNzYWdlKG5hbWUsIHZhbGlkYXRpb25FcnJvciwgdmFsaWRhdGlvbkVycm9yc1t2YWxpZGF0aW9uRXJyb3JdKSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIC8vIH1cblxuICAgIGFkZFZhbGlkYXRpb25NZXNzYWdlcyhtZXNzYWdlczogTmd4VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzLCBtZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgc2V0R2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzKHZhbGlkYXRpb25NZXNzYWdlczogRGljdGlvbmFyeTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlcyA9IHZhbGlkYXRpb25NZXNzYWdlcztcbiAgICB9XG59XG4iLCJmdW5jdGlvbiBtYXhPck1pbkxlbmd0aFRyYW5zZm9ybWVyKG1lc3NhZ2U6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzOiB7IHJlcXVpcmVkTGVuZ3RoOiBudW1iZXIgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZShge3JlcXVpcmVkTGVuZ3RofWAsIHZhbGlkYXRpb25FcnJvclZhbHVlcy5yZXF1aXJlZExlbmd0aC50b1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gbWF4VHJhbnNmb3JtZXIobWVzc2FnZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM6IHsgbWF4OiBudW1iZXI7IGFjdHVhbDogbnVtYmVyIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoYHttYXh9YCwgdmFsaWRhdGlvbkVycm9yVmFsdWVzLm1heC50b1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gbWlueFRyYW5zZm9ybWVyKG1lc3NhZ2U6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzOiB7IG1pbjogbnVtYmVyOyBhY3R1YWw6IG51bWJlciB9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKGB7bWlufWAsIHZhbGlkYXRpb25FcnJvclZhbHVlcy5taW4udG9TdHJpbmcoKSk7XG59XG5cbmNvbnN0IHRyYW5zZm9ybWVyTWFwID0ge1xuICAgIG1pbmxlbmd0aDogbWF4T3JNaW5MZW5ndGhUcmFuc2Zvcm1lcixcbiAgICBtYXhsZW5ndGg6IG1heE9yTWluTGVuZ3RoVHJhbnNmb3JtZXIsXG4gICAgbWF4OiBtYXhUcmFuc2Zvcm1lcixcbiAgICBtaW46IG1pbnhUcmFuc2Zvcm1lclxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1lc3NhZ2UodmFsaWRhdG9yTmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlczogYW55KSB7XG4gICAgaWYgKHRyYW5zZm9ybWVyTWFwW3ZhbGlkYXRvck5hbWVdICYmIHZhbGlkYXRpb25FcnJvclZhbHVlcykge1xuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZXJNYXBbdmFsaWRhdG9yTmFtZV0obWVzc2FnZSwgdmFsaWRhdGlvbkVycm9yVmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5nRm9ybSxcbiAgICBBYnN0cmFjdENvbnRyb2wsXG4gICAgVmFsaWRhdGlvbkVycm9ycyxcbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgRm9ybUNvbnRyb2xOYW1lLFxuICAgIE5nQ29udHJvbFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JMb2FkZXIgfSBmcm9tICcuL3ZhbGlkYXRvci1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JDb25maWcsIERpY3Rpb25hcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5jbGFzcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLXRyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbmdGb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9jb25maWc6IE5neFZhbGlkYXRvckNvbmZpZztcblxuICAgIHByaXZhdGUgX2NvbnRyb2xzOiBOZ0NvbnRyb2xbXSA9IFtdO1xuXG4gICAgLy8gcHVibGljIGVycm9yczogc3RyaW5nW107XG5cbiAgICAvLyDDqMKuwrDDpcK9wpXDpsKJwoDDpsKcwonDpcKFwoPDp8K0wqDDp8KawoTDqcKqwozDqMKvwoHDpMK/wqHDpsKBwq9cbiAgICBwdWJsaWMgdmFsaWRhdGlvbnM6IERpY3Rpb25hcnk8e1xuICAgICAgICBoYXNFcnJvcj86IGJvb2xlYW47XG4gICAgICAgIGVycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICB9PiA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKSB7XG4gICAgICAgIGNvbnN0IHN0cmF0ZWd5ID1cbiAgICAgICAgICAgICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KSB8fFxuICAgICAgICAgICAgdGhpcy50aHlGb3JtVmFsaWRhdGVMb2FkZXIudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgICAgIGlmICghc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdmFsaWRhdGlvbiBkaXNwbGF5IHN0cmF0ZWd5IGlzIG51bGxgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0RWxlbWVudChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50W25hbWVdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9JyR7bmFtZX0nXWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJFbGVtZW50RXJyb3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25zW25hbWVdICYmIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKS5yZW1vdmVFcnJvcih0aGlzLl9nZXRFbGVtZW50KG5hbWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90cnlHZXRWYWxpZGF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZSwgdGhpcy5fZ2V0Q29udHJvbEJ5TmFtZShuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnNbbmFtZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUZvcm1Db250cm9sVmFsaWRhdGlvbihuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nQ29udHJvbCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25zW25hbWVdID0ge1xuICAgICAgICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN0Rm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24uaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2UobmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlcz86IGFueSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLl9jb25maWcgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV0gJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1bdmFsaWRhdGlvbkVycm9yTmFtZV1cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVt2YWxpZGF0aW9uRXJyb3JOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci5nZXRFcnJvck1lc3NhZ2UobmFtZSwgdmFsaWRhdGlvbkVycm9yTmFtZSwgdmFsaWRhdGlvbkVycm9yVmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1NZXNzYWdlKHZhbGlkYXRpb25FcnJvck5hbWUsIG1lc3NhZ2UsIHZhbGlkYXRpb25FcnJvclZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKG5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yczogVmFsaWRhdGlvbkVycm9ycykge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb25FcnJvciBpbiB2YWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0aW9uRXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZShuYW1lLCB2YWxpZGF0aW9uRXJyb3IsIHZhbGlkYXRpb25FcnJvcnNbdmFsaWRhdGlvbkVycm9yXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWU6IHN0cmluZywgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXMuX3RyeUdldFZhbGlkYXRpb24obmFtZSk7XG4gICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlcyA9IGVycm9yTWVzc2FnZXM7XG4gICAgICAgIHZhbGlkYXRpb24uaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLl9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpLnNob3dFcnJvcih0aGlzLl9nZXRFbGVtZW50KG5hbWUpLCBlcnJvck1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdG9yQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGh5Rm9ybVZhbGlkYXRlTG9hZGVyOiBOZ3hWYWxpZGF0b3JMb2FkZXIpIHt9XG5cbiAgICBpbml0aWFsaXplKG5nRm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlLCBmb3JtRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fbmdGb3JtID0gbmdGb3JtO1xuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIH1cblxuICAgIGluaXRpYWxpemVGb3JtQ29udHJvbHNWYWxpZGF0aW9uKGNvbnRyb2xzOiBOZ0NvbnRyb2xbXSkge1xuICAgICAgICBpZiAoKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcudmFsaWRhdGVPbiA9PT0gJ2JsdXInKSB8fCB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci52YWxpZGF0ZU9uID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIChjb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogTmdDb250cm9sKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jb250cm9scy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBjb250cm9sLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24oY29udHJvbC5uYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KGNvbnRyb2wubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uYmx1ciA9IChldmVudDogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sKGNvbnRyb2wubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VmFsaWRhdG9yQ29uZmlnKGNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDb250cm9scygpIHtcbiAgICAgICAgaWYgKHRoaXMuX25nRm9ybSBpbnN0YW5jZW9mIE5nRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9uZ0Zvcm0gYXMgTmdGb3JtKS5jb250cm9scztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ0Zvcm0gaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgICAgICAgICAodGhpcy5fbmdGb3JtIGFzIEZvcm1Hcm91cERpcmVjdGl2ZSkuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbHNbZGlyZWN0aXZlLm5hbWVdID0gZGlyZWN0aXZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDb250cm9sQnlOYW1lKG5hbWU6IHN0cmluZyk6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzW25hbWVdO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSB0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZXMobmFtZSwgY29udHJvbC5lcnJvcnMpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Q29udHJvbFZhbGlkYXRpb25FcnJvcihuYW1lLCBlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIC8vIMOkwrjCu8OowqbCgcOmwpjCryDDpsKXwqDDpsKzwpXDpsKjwoDDpsK1wovDpcKIwrAgbmdGb3JtIMOnwprChCBjb250cm9scyDDp8KawoTDpcKPwpjDpcKMwpbDr8K8wozDpsKIwpbDqMKAwoXDpsKYwq/DpsKIwpHDpsKywqHDpsKcwonDpsKJwr7DpcKIwrBcbiAgICAgICAgLy8gw6nCqsKMw6jCr8KBw6fCmsKEw6bCl8K2w6XCgMKZw6XCvsKqw6fCjsKvIG5nRm9ybSDDp8KawoQgY29udHJvbHMgw6nCqsKMw6jCr8KBXG4gICAgICAgIC8vIMOlwo/CkcOnwo7CsMOmwrLCocOmwpzCiSB2YWxpZGF0aW9uIMOlwojCncOlwqfCi8OlwozClsOkwrjCgMOkwrjCqsOvwrzCjMOlwrfCssOnwrvCj8Olwq3CmMOlwpzCqMOkwrjCjcOkwrzCmsOpwofCjcOmwpbCsMOlwojCncOlwqfCi8OlwozClsOvwrzCjMOkwr/CncOlwq3CmMOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrlxuICAgICAgICBjb25zdCBjb250cm9scyA9IHRoaXMuX2dldENvbnRyb2xzKCk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBjb250cm9scykge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5R2V0VmFsaWRhdGlvbihuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDDp8KnwrvDqcKZwqTDpcK3wrLDp8K7wo/DpMK4wo3DpcKtwpjDpcKcwqjDp8KawoQgdmFsaWRhdGlvblxuICAgICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbnMpO1xuICAgICAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgkZXZlbnQ/OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLl9uZ0Zvcm0ub25TdWJtaXQoJGV2ZW50KTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZ0Zvcm0udmFsaWQ7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX25nRm9ybS5yZXNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy52YWxpZGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXN0Rm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0NvbnRyb2xBc0Vycm9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWUsIFttZXNzYWdlXSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgT25Jbml0LFxuICAgIE5nWm9uZSxcbiAgICBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuLi92YWxpZGF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBOZ0Zvcm0sIENvbnRyb2xDb250YWluZXIsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neFZhbGlkYXRvckNvbmZpZyB9IGZyb20gJy4uL3ZhbGlkYXRvci5jbGFzcyc7XG5cbmNvbnN0IEtFWV9DT0RFU19FTlRFUiA9IDEzO1xuXG4vLyAxLiBzdWJtaXQgw6bCjMKJIEVudGVyIMOpwpTCrsOmwo/CkMOkwrrCpCwgVGV4dGFyZSDDqcKZwqTDpcKkwpbDr8K8wozDqcKcwoDDqMKmwoHDpsKMwokgQ3RybCB8IENvbW1hbmQgKyBFbnRlciDDpsKPwpDDpMK6wqRcbi8vIDIuIGFsd2F5c1N1Ym1pdCDDpMK4wo3Dp8KuwqHDpsKYwq/DpcKTwqrDpMK4wqrDpcKFwoPDp8K0wqAgw6bCjMKJIEVudGVyIMOpwpTCrsOpwoPCvcOmwo/CkMOkwrrCpFxuLy8gMy4gZm9yYmlkU3VibWl0IFxiRW50ZXIgw6nClMKuw6fCpsKBw6bCrcKiw6bCj8KQw6TCusKkXG4vLyDDqcK7wpjDqMKuwqQgc3VibWl0XG5leHBvcnQgZW51bSBOZ3hFbnRlcktleU1vZGUge1xuICAgIHN1Ym1pdCA9ICdzdWJtaXQnLFxuICAgIGFsd2F5c1N1Ym1pdCA9ICdhbHdheXNTdWJtaXQnLFxuICAgIGZvcmJpZFN1Ym1pdCA9ICdmb3JiaWRTdWJtaXQnXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZm9ybVtuZ3hGb3JtVmFsaWRhdG9yXSxmb3JtW25neC1mb3JtLXZhbGlkYXRvcl0nLFxuICAgIHByb3ZpZGVyczogW05neEZvcm1WYWxpZGF0b3JTZXJ2aWNlXSxcbiAgICBleHBvcnRBczogJ25neEZvcm1WYWxpZGF0b3InXG59KVxuZXhwb3J0IGNsYXNzIE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ0NvbnRyb2wsIHtcbiAgICAgICAgZGVzY2VuZGFudHM6IHRydWVcbiAgICB9KVxuICAgIHB1YmxpYyBjb250cm9sczogUXVlcnlMaXN0PE5nQ29udHJvbD47XG5cbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkO1xuXG4gICAgb25TdWJtaXRTdWNjZXNzOiAoJGV2ZW50OiBhbnkpID0+IHZvaWQ7XG5cbiAgICBASW5wdXQoKSBlbnRlcktleU1vZGU6IE5neEVudGVyS2V5TW9kZTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5neEZvcm1WYWxpZGF0b3JDb25maWcoY29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iuc2V0VmFsaWRhdG9yQ29uZmlnKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmd4Rm9ybVZhbGlkYXRvcihjb25maWc6IE5neFZhbGlkYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5zZXRWYWxpZGF0b3JDb25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBuZ0Zvcm06IENvbnRyb2xDb250YWluZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbGlkYXRvci5pbml0aWFsaXplKHRoaXMubmdGb3JtIGFzIE5nRm9ybSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24odGhpcy5jb250cm9scy50b0FycmF5KCkpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzLmNoYW5nZXMuc3Vic2NyaWJlKGNvbnRyb2xzID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmluaXRpYWxpemVGb3JtQ29udHJvbHNWYWxpZGF0aW9uKHRoaXMuY29udHJvbHMudG9BcnJheSgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0KCRldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKCRldmVudCkgJiYgdGhpcy5vblN1Ym1pdFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXRTdWNjZXNzKCRldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRSdW5JblpvbmUoJGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXQoJGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25LZXlkb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5wdXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBrZXkgPSAkZXZlbnQud2hpY2ggfHwgJGV2ZW50LmtleUNvZGU7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWV9DT0RFU19FTlRFUiAmJiBjdXJyZW50SW5wdXQudGFnTmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVudGVyS2V5TW9kZSB8fCB0aGlzLmVudGVyS2V5TW9kZSA9PT0gTmd4RW50ZXJLZXlNb2RlLnN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIC8vIFRFWFRBUkVBIEN0cmwgKyBFbnRlciDDpsKIwpbDqMKAwoUgQ29tbWFuZCArIEVudGVyIMOpwpjCu8Omwq3Colxiw6nCu8KYw6jCrsKkw6jCocKMw6TCuMK6w6XCucK2w6bCj8KQw6TCusKkXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnB1dC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQuY3RybEtleSB8fCAkZXZlbnQubWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gw6TCuMKNw6bCmMKvIFRFWFRBUkVBIEVudGVyIMOpwpjCu8Omwq3Colxiw6nCu8KYw6jCrsKkw6jCocKMw6TCuMK6w6XCucK2w6bCj8KQw6TCusKkXG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbnRlcktleU1vZGUgPT09IE5neEVudGVyS2V5TW9kZS5hbHdheXNTdWJtaXQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neEZvcm1TdWJtaXRdLFtuZ3gtZm9ybS1zdWJtaXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBPdXRwdXQoKSBuZ3hGb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdmFsaWRhdG9yRGlyZWN0aXZlOiBOZ3hGb3JtVmFsaWRhdG9yRGlyZWN0aXZlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yRGlyZWN0aXZlLm9uU3VibWl0U3VjY2VzcyA9ICgkZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ3hGb3JtU3VibWl0LmVtaXQoJGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25TdWJtaXQoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JEaXJlY3RpdmUuc3VibWl0KCRldmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRvcnMge1xuICAgIHN0YXRpYyB1bmlxdWVDaGVja1ZhbGlkYXRvcih1bmlxdWVDaGVja0ZuOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoXG4gICAgICAgICAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2xcbiAgICAgICAgKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9PiB7XG4gICAgICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmlxdWVDaGVja0ZuKGNvbnRyb2wudmFsdWUpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIG1hcChpc1VuaXF1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNVbmlxdWUgPyB7IG5neFVuaXF1ZUNoZWNrOiB7IHZhbHVlOiB0cnVlIH0gfSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQXR0cmlidXRlLCBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBOR19WQUxJREFUT1JTLFxuICAgIFZhbGlkYXRvcixcbiAgICBBYnN0cmFjdENvbnRyb2wsXG4gICAgVmFsaWRhdG9ycyxcbiAgICBWYWxpZGF0b3JGbixcbiAgICBOR19BU1lOQ19WQUxJREFUT1JTLFxuICAgIEFzeW5jVmFsaWRhdG9yLFxuICAgIFZhbGlkYXRpb25FcnJvcnNcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFZhbGlkYXRvcnMgfSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6XG4gICAgICAgICdbbmd4TWluXVtmb3JtQ29udHJvbE5hbWVdLFtuZ3hNaW5dW2Zvcm1Db250cm9sXSxbbmd4TWluXVtuZ01vZGVsXSwnLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWluVmFsaWRhdG9yRGlyZWN0aXZlKSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1pblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuXG4gICAgQElucHV0KCkgcHVibGljIHNldCBuZ3hNaW4odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWluKHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGNvbnRyb2wpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6XG4gICAgICAgICdbbmd4TWF4XVtmb3JtQ29udHJvbE5hbWVdLFtuZ3hNYXhdW2Zvcm1Db250cm9sXSxbbmd4TWF4XVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXhWYWxpZGF0b3JEaXJlY3RpdmUpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF4VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgc2V0IG5neE1heCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5tYXgocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoY29udHJvbCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hVbmlxdWVDaGVja11bZm9ybUNvbnRyb2xOYW1lXSxbbmd4VW5pcXVlQ2hlY2tdW2Zvcm1Db250cm9sXSxbbmd4VW5pcXVlQ2hlY2tdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfQVNZTkNfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlIGltcGxlbWVudHMgQXN5bmNWYWxpZGF0b3Ige1xuICAgIEBJbnB1dCgpIG5neFVuaXF1ZUNoZWNrOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuIHwgbnVsbD4gPSAodmFsdWU6IGFueSkgPT4gb2YobnVsbCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnM+IHwgT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzPiB7XG4gICAgICAgIHJldHVybiBOZ3hWYWxpZGF0b3JzLnVuaXF1ZUNoZWNrVmFsaWRhdG9yKHRoaXMubmd4VW5pcXVlQ2hlY2spKGNvbnRyb2wpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neEZvcm1TdWJtaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlJztcblxuLy8gaW1wb3J0IHsgTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS11bmlxdWUtY2hlY2suZGlyZWN0aXZlJztcbmltcG9ydCB7IE1heFZhbGlkYXRvckRpcmVjdGl2ZSwgTWluVmFsaWRhdG9yRGlyZWN0aXZlLCBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcblxuaW1wb3J0IHsgTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnLCBOR1hfVkFMSURBVE9SX0NPTkZJRyB9IGZyb20gJy4vdmFsaWRhdG9yLmNsYXNzJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICAgIE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgTmd4Rm9ybVN1Ym1pdERpcmVjdGl2ZSxcbiAgICBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSxcbiAgICBNYXhWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgTWluVmFsaWRhdG9yRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZV0sXG4gICAgZXhwb3J0czogWy4uLmRlY2xhcmF0aW9ucywgRm9ybXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRvck1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hWYWxpZGF0b3JNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IE5HWF9WQUxJREFUT1JfQ09ORklHLFxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsIkluamVjdGFibGUiLCJPcHRpb25hbCIsIkluamVjdCIsIk5nRm9ybSIsIkZvcm1Hcm91cERpcmVjdGl2ZSIsIkRpcmVjdGl2ZSIsIk5nWm9uZSIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJDb250cm9sQ29udGFpbmVyIiwiQ29udGVudENoaWxkcmVuIiwiTmdDb250cm9sIiwiSW5wdXQiLCJFdmVudEVtaXR0ZXIiLCJPdXRwdXQiLCJIb3N0TGlzdGVuZXIiLCJtYXAiLCJvZiIsIlZhbGlkYXRvcnMiLCJOR19WQUxJREFUT1JTIiwiZm9yd2FyZFJlZiIsIk5HX0FTWU5DX1ZBTElEQVRPUlMiLCJOZ01vZHVsZSIsIkZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxhQXVHZ0IsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUk7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLEtBQUssRUFBRTtZQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUFFO2dCQUMvQjtZQUNKLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtvQkFDTztnQkFBRSxJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQUU7U0FDcEM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7QUFFRCxhQUFnQixRQUFRO1FBQ3BCLEtB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