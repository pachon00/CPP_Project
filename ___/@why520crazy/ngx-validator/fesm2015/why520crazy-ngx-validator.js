import { InjectionToken, Inject, Injectable, Optional, Directive, forwardRef, Input, NgModule, NgZone, Renderer2, ElementRef, ContentChildren, Output, HostListener, EventEmitter, defineInjectable, inject } from '@angular/core';
import { NgForm, FormGroupDirective, ControlContainer, NgControl, NG_VALIDATORS, Validators, NG_ASYNC_VALIDATORS, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const NGX_VALIDATOR_CONFIG = new InjectionToken('NGX_VALIDATION_CONFIG');
/** @type {?} */
const DEFAULT_GLOBAL_VALIDATION_MESSAGES = {
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
class NoopValidationFeedbackStrategy {
    /**
     * Does nothing, as this validation message display strategy is a no-op.
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    showError(element, errorMessages) { }
    /**
     * @param {?} element
     * @return {?}
     */
    removeError(element) { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const INVALID_CLASS = 'is-invalid';
/** @type {?} */
const INVALID_FEEDBACK_CLASS = 'invalid-feedback';
class BootstrapValidationFeedbackStrategy {
    constructor() { }
    /**
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    showError(element, errorMessages) {
        if (element) {
            element.classList.add(INVALID_CLASS);
        }
        if (element && element.parentElement) {
            /** @type {?} */
            const documentFrag = document.createDocumentFragment();
            /** @type {?} */
            const divNode = document.createElement('DIV');
            /** @type {?} */
            const textNode = document.createTextNode(errorMessages[0]);
            divNode.appendChild(textNode);
            divNode.setAttribute('class', INVALID_FEEDBACK_CLASS);
            documentFrag.appendChild(divNode);
            element.parentElement.append(documentFrag);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removeError(element) {
        if (element) {
            element.classList.remove(INVALID_CLASS);
        }
        if (element && element.parentElement) {
            /** @type {?} */
            const invalidFeedback = element.parentElement.querySelector(`.${INVALID_FEEDBACK_CLASS}`);
            if (invalidFeedback) {
                element.parentElement.removeChild(invalidFeedback);
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ValidationFeedbackStrategyBuilder {
    /**
     * @return {?}
     */
    static noop() {
        return new NoopValidationFeedbackStrategy();
    }
    /**
     * @return {?}
     */
    static bootstrap() {
        return new BootstrapValidationFeedbackStrategy();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultValidatorConfig = {
    validationFeedbackStrategy: ValidationFeedbackStrategyBuilder.bootstrap(),
    validationMessages: {}
};
class NgxValidatorLoader {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = Object.assign({}, defaultValidatorConfig, config);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getDefaultValidationMessage(key) {
        if (this.config.globalValidationMessages && this.config.globalValidationMessages[key]) {
            return this.config.globalValidationMessages[key];
        }
        else {
            return DEFAULT_GLOBAL_VALIDATION_MESSAGES[key];
        }
    }
    /**
     * @return {?}
     */
    get validationMessages() {
        return this.config.validationMessages;
    }
    /**
     * @return {?}
     */
    get validationFeedbackStrategy() {
        if (!this.config.validationFeedbackStrategy) {
            this.config.validationFeedbackStrategy = ValidationFeedbackStrategyBuilder.bootstrap();
        }
        return this.config.validationFeedbackStrategy;
    }
    /**
     * @return {?}
     */
    get validateOn() {
        if (!this.config.validateOn) {
            this.config.validateOn = 'submit';
        }
        return this.config.validateOn;
    }
    /**
     * get validation error messages
     * @param {?} name formControl name, e.g. username or email
     * @param {?} key validator name, e.g. required or pattern
     * @param {?=} validationErrorValues
     * @return {?}
     */
    getErrorMessage(name, key, validationErrorValues) {
        /** @type {?} */
        let message = '';
        if (this.validationMessages[name] && this.validationMessages[name][key]) {
            message = this.validationMessages[name][key];
        }
        else {
            message = this.getDefaultValidationMessage(key);
        }
        return message;
    }
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
    addValidationMessages(messages) {
        Object.assign(this.config.validationMessages, messages);
    }
    /**
     * @param {?} validationMessages
     * @return {?}
     */
    setGlobalValidationMessages(validationMessages) {
        this.config.globalValidationMessages = validationMessages;
    }
}
NgxValidatorLoader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxValidatorLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_VALIDATOR_CONFIG,] }] }
];
/** @nocollapse */ NgxValidatorLoader.ngInjectableDef = defineInjectable({ factory: function NgxValidatorLoader_Factory() { return new NgxValidatorLoader(inject(NGX_VALIDATOR_CONFIG, 8)); }, token: NgxValidatorLoader, providedIn: "root" });

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
    return message.replace(`{requiredLength}`, validationErrorValues.requiredLength.toString());
}
/**
 * @param {?} message
 * @param {?} validationErrorValues
 * @return {?}
 */
function maxTransformer(message, validationErrorValues) {
    return message.replace(`{max}`, validationErrorValues.max.toString());
}
/**
 * @param {?} message
 * @param {?} validationErrorValues
 * @return {?}
 */
function minxTransformer(message, validationErrorValues) {
    return message.replace(`{min}`, validationErrorValues.min.toString());
}
/** @type {?} */
const transformerMap = {
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
class NgxFormValidatorService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const KEY_CODES_ENTER = 13;
/** @enum {string} */
const NgxEnterKeyMode = {
    submit: 'submit',
    alwaysSubmit: 'alwaysSubmit',
    forbidSubmit: 'forbidSubmit',
};
class NgxFormValidatorDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class NgxFormSubmitDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class NgxValidators {
    /**
     * @param {?} uniqueCheckFn
     * @return {?}
     */
    static uniqueCheckValidator(uniqueCheckFn) {
        /** @type {?} */
        const result = (control) => {
            if (control.value) {
                return uniqueCheckFn(control.value).pipe(map(isUnique => {
                    return isUnique ? { ngxUniqueCheck: { value: true } } : null;
                }));
            }
            else {
                return of(null);
            }
        };
        return result;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MinValidatorDirective {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngxMin(value) {
        this.validator = Validators.min(parseFloat(value));
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.validator(control);
    }
}
MinValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMin][formControlName],[ngxMin][formControl],[ngxMin][ngModel],',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => MinValidatorDirective),
                        multi: true
                    }
                ]
            },] }
];
/** @nocollapse */
MinValidatorDirective.ctorParameters = () => [];
MinValidatorDirective.propDecorators = {
    ngxMin: [{ type: Input }]
};
class MaxValidatorDirective {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngxMax(value) {
        this.validator = Validators.max(parseFloat(value));
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.validator(control);
    }
}
MaxValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMax][formControlName],[ngxMax][formControl],[ngxMax][ngModel]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => MaxValidatorDirective),
                        multi: true
                    }
                ]
            },] }
];
/** @nocollapse */
MaxValidatorDirective.ctorParameters = () => [];
MaxValidatorDirective.propDecorators = {
    ngxMax: [{ type: Input }]
};
class NgxUniqueCheckDirective {
    constructor() {
        this.ngxUniqueCheck = (value) => of(null);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return NgxValidators.uniqueCheckValidator(this.ngxUniqueCheck)(control);
    }
}
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
NgxUniqueCheckDirective.ctorParameters = () => [];
NgxUniqueCheckDirective.propDecorators = {
    ngxUniqueCheck: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const declarations = [
    NgxFormValidatorDirective,
    NgxFormSubmitDirective,
    NgxUniqueCheckDirective,
    MaxValidatorDirective,
    MinValidatorDirective
];
class NgxValidatorModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NgxValidators, NgxValidatorModule, NgxValidatorLoader, NGX_VALIDATOR_CONFIG, DEFAULT_GLOBAL_VALIDATION_MESSAGES, NgxEnterKeyMode, NgxFormValidatorDirective, NgxFormSubmitDirective, ValidationFeedbackStrategyBuilder, NoopValidationFeedbackStrategy, BootstrapValidationFeedbackStrategy, MaxValidatorDirective as ɵc, MinValidatorDirective as ɵb, NgxUniqueCheckDirective as ɵd, NgxFormValidatorService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2h5NTIwY3Jhenktbmd4LXZhbGlkYXRvci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9yLmNsYXNzLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9zdHJhdGVnaWVzL25vb3AtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneS50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3Ivc3RyYXRlZ2llcy9ib290c3RyYXAtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneS50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3Ivc3RyYXRlZ2llcy9pbmRleC50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9tZXNzYWdlLXRyYW5zZm9ybWVycy50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9yLnNlcnZpY2UudHMiLCJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9kaXJlY3RpdmVzL2Zvcm0tc3VibWl0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9ycy50cyIsIm5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvZGlyZWN0aXZlcy92YWxpZGF0b3JzLnRzIiwibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWN0aW9uYXJ5PFQ+IHtcbiAgICBba2V5OiBzdHJpbmddOiBUO1xufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIE5neFZhbGlkYXRpb25NZXNzYWdlcyA9IERpY3Rpb25hcnk8RGljdGlvbmFyeTxzdHJpbmc+PjtcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZ3hWYWxpZGF0ZU9uID0gJ3N1Ym1pdCcgfCAnYmx1cic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4VmFsaWRhdG9yQ29uZmlnIHtcbiAgICB2YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneT86IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5O1xuICAgIHZhbGlkYXRpb25NZXNzYWdlcz86IE5neFZhbGlkYXRpb25NZXNzYWdlcztcbiAgICB2YWxpZGF0ZU9uPzogTmd4VmFsaWRhdGVPbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnIGV4dGVuZHMgTmd4VmFsaWRhdG9yQ29uZmlnIHtcbiAgICBnbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXM/OiBEaWN0aW9uYXJ5PHN0cmluZz47XG59XG5cbmV4cG9ydCBjb25zdCBOR1hfVkFMSURBVE9SX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWc+KCdOR1hfVkFMSURBVElPTl9DT05GSUcnKTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0xPQkFMX1ZBTElEQVRJT05fTUVTU0FHRVMgPSB7XG4gICAgcmVxdWlyZWQ6ICfDqMKvwqXDqcKAwonDqcKhwrnDpMK4wo3DqMKDwr3DpMK4wrrDp8KpwronLFxuICAgIG1heGxlbmd0aDogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOlwoDCvMOpwpXCv8OlwrrCpsOkwrjCjcOowoPCvcOlwqTCp8OkwrrCjntyZXF1aXJlZExlbmd0aH0nLFxuICAgIG1pbmxlbmd0aDogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOlwoDCvMOpwpXCv8OlwrrCpsOkwrjCjcOowoPCvcOlwrDCj8OkwrrCjntyZXF1aXJlZExlbmd0aH0nLFxuICAgIG5neFVuaXF1ZUNoZWNrOiAnw6jCvsKTw6XChcKlw6XCgMK8w6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6/CvMKMw6jCr8K3w6nCh8KNw6bClsKww6jCvsKTw6XChcKlJyxcbiAgICBlbWFpbDogJ8Oowr7Ck8OlwoXCpcOpwoLCrsOkwrvCtsOnwprChMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCricsXG4gICAgcmVwZWF0OiAnw6TCuMKkw6bCrMKhw6jCvsKTw6XChcKlw6TCuMKNw6TCuMKAw6jCh8K0JyxcbiAgICBwYXR0ZXJuOiAnw6jCr8Klw6nCgMKJw6nCocK5w6jCvsKTw6XChcKlw6bCoMK8w6XCvMKPw6TCuMKNw6bCrcKjw6fCocKuJyxcbiAgICBudW1iZXI6ICfDpcK/woXDqcKhwrvDqMK+wpPDpcKFwqXDpsKVwrDDpcKtwpcnLFxuICAgIHVybDogJ8Oowr7Ck8OlwoXCpVVSTMOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCricsXG4gICAgbWF4OiAnw6jCr8Klw6nCgMKJw6nCocK5w6jCvsKTw6XChcKlw6XCgMK8w6TCuMKNw6jCg8K9w6XCpMKnw6TCusKOe21heH0nLFxuICAgIG1pbjogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOlwoDCvMOkwrjCjcOowoPCvcOlwrDCj8OkwrrCjnttaW59J1xufTtcbiIsImltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi92YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIE5vb3BWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSBpbXBsZW1lbnRzIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICAvKiogRG9lcyBub3RoaW5nLCBhcyB0aGlzIHZhbGlkYXRpb24gbWVzc2FnZSBkaXNwbGF5IHN0cmF0ZWd5IGlzIGEgbm8tb3AuICovXG4gICAgc2hvd0Vycm9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSk6IHZvaWQge31cblxuICAgIHJlbW92ZUVycm9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7fVxufVxuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3ZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuXG5jb25zdCBJTlZBTElEX0NMQVNTID0gJ2lzLWludmFsaWQnO1xuY29uc3QgSU5WQUxJRF9GRUVEQkFDS19DTEFTUyA9ICdpbnZhbGlkLWZlZWRiYWNrJztcblxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IGltcGxlbWVudHMgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHNob3dFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChJTlZBTElEX0NMQVNTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgZGl2Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlcnJvck1lc3NhZ2VzWzBdKTtcbiAgICAgICAgICAgIGRpdk5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICAgICAgZGl2Tm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgSU5WQUxJRF9GRUVEQkFDS19DTEFTUyk7XG4gICAgICAgICAgICBkb2N1bWVudEZyYWcuYXBwZW5kQ2hpbGQoZGl2Tm9kZSk7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kKGRvY3VtZW50RnJhZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKElOVkFMSURfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke0lOVkFMSURfRkVFREJBQ0tfQ0xBU1N9YCk7XG4gICAgICAgICAgICBpZiAoaW52YWxpZEZlZWRiYWNrKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGludmFsaWRGZWVkYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL25vb3AtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneSc7XG5pbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vYm9vdHN0cmFwLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3ZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyIHtcbiAgICBzdGF0aWMgbm9vcCgpOiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9vcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGJvb3RzdHJhcCgpOiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5LCBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3ksIEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH07XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyxcbiAgICBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMsXG4gICAgRGljdGlvbmFyeSxcbiAgICBOR1hfVkFMSURBVE9SX0NPTkZJRyxcbiAgICBERUZBVUxUX0dMT0JBTF9WQUxJREFUSU9OX01FU1NBR0VTXG59IGZyb20gJy4vdmFsaWRhdG9yLmNsYXNzJztcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSwgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyIH0gZnJvbSAnLi9zdHJhdGVnaWVzJztcblxuY29uc3QgZGVmYXVsdFZhbGlkYXRvckNvbmZpZzogTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnID0ge1xuICAgIHZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5OiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneUJ1aWxkZXIuYm9vdHN0cmFwKCksXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fVxufTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hWYWxpZGF0b3JMb2FkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWc7XG5cbiAgICBwcml2YXRlIGdldERlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZShrZXk6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzICYmIHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gREVGQVVMVF9HTE9CQUxfVkFMSURBVElPTl9NRVNTQUdFU1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlcztcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSA9IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlci5ib290c3RyYXAoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRlT24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnZhbGlkYXRlT24pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnZhbGlkYXRlT24gPSAnc3VibWl0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudmFsaWRhdGVPbjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQE9wdGlvbmFsKClcbiAgICAgICAgQEluamVjdChOR1hfVkFMSURBVE9SX0NPTkZJRylcbiAgICAgICAgY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWdcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0VmFsaWRhdG9yQ29uZmlnLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAgICogQHBhcmFtIG5hbWUgZm9ybUNvbnRyb2wgbmFtZSwgZS5nLiB1c2VybmFtZSBvciBlbWFpbFxuICAgICAqIEBwYXJhbSBrZXkgdmFsaWRhdG9yIG5hbWUsIGUuZy4gcmVxdWlyZWQgb3IgcGF0dGVyblxuICAgICAqL1xuICAgIGdldEVycm9yTWVzc2FnZShuYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM/OiBhbnkpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdW2tleV0pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0RXJyb3JNZXNzYWdlcyhuYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAvLyAgICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgICAvLyAgICAgZm9yIChjb25zdCB2YWxpZGF0aW9uRXJyb3IgaW4gdmFsaWRhdGlvbkVycm9ycykge1xuICAgIC8vICAgICAgICAgaWYgKHZhbGlkYXRpb25FcnJvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdGlvbkVycm9yKSkge1xuICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5nZXRFcnJvck1lc3NhZ2UobmFtZSwgdmFsaWRhdGlvbkVycm9yLCB2YWxpZGF0aW9uRXJyb3JzW3ZhbGlkYXRpb25FcnJvcl0pKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgLy8gfVxuXG4gICAgYWRkVmFsaWRhdGlvbk1lc3NhZ2VzKG1lc3NhZ2VzOiBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMsIG1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXModmFsaWRhdGlvbk1lc3NhZ2VzOiBEaWN0aW9uYXJ5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzID0gdmFsaWRhdGlvbk1lc3NhZ2VzO1xuICAgIH1cbn1cbiIsImZ1bmN0aW9uIG1heE9yTWluTGVuZ3RoVHJhbnNmb3JtZXIobWVzc2FnZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM6IHsgcmVxdWlyZWRMZW5ndGg6IG51bWJlciB9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKGB7cmVxdWlyZWRMZW5ndGh9YCwgdmFsaWRhdGlvbkVycm9yVmFsdWVzLnJlcXVpcmVkTGVuZ3RoLnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiBtYXhUcmFuc2Zvcm1lcihtZXNzYWdlOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlczogeyBtYXg6IG51bWJlcjsgYWN0dWFsOiBudW1iZXIgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZShge21heH1gLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMubWF4LnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiBtaW54VHJhbnNmb3JtZXIobWVzc2FnZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM6IHsgbWluOiBudW1iZXI7IGFjdHVhbDogbnVtYmVyIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoYHttaW59YCwgdmFsaWRhdGlvbkVycm9yVmFsdWVzLm1pbi50b1N0cmluZygpKTtcbn1cblxuY29uc3QgdHJhbnNmb3JtZXJNYXAgPSB7XG4gICAgbWlubGVuZ3RoOiBtYXhPck1pbkxlbmd0aFRyYW5zZm9ybWVyLFxuICAgIG1heGxlbmd0aDogbWF4T3JNaW5MZW5ndGhUcmFuc2Zvcm1lcixcbiAgICBtYXg6IG1heFRyYW5zZm9ybWVyLFxuICAgIG1pbjogbWlueFRyYW5zZm9ybWVyXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVzc2FnZSh2YWxpZGF0b3JOYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzOiBhbnkpIHtcbiAgICBpZiAodHJhbnNmb3JtZXJNYXBbdmFsaWRhdG9yTmFtZV0gJiYgdmFsaWRhdGlvbkVycm9yVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1lck1hcFt2YWxpZGF0b3JOYW1lXShtZXNzYWdlLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgTmdGb3JtLFxuICAgIEFic3RyYWN0Q29udHJvbCxcbiAgICBWYWxpZGF0aW9uRXJyb3JzLFxuICAgIEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgICBGb3JtQ29udHJvbE5hbWUsXG4gICAgTmdDb250cm9sXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neFZhbGlkYXRvckxvYWRlciB9IGZyb20gJy4vdmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5neFZhbGlkYXRvckNvbmZpZywgRGljdGlvbmFyeSB9IGZyb20gJy4vdmFsaWRhdG9yLmNsYXNzJztcbmltcG9ydCB7IHRyYW5zZm9ybU1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UtdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neEZvcm1WYWxpZGF0b3JTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9uZ0Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZTtcblxuICAgIHByaXZhdGUgX2Zvcm1FbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgX2NvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnO1xuXG4gICAgcHJpdmF0ZSBfY29udHJvbHM6IE5nQ29udHJvbFtdID0gW107XG5cbiAgICAvLyBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXTtcblxuICAgIC8vIMOowq7CsMOlwr3ClcOmwonCgMOmwpzCicOlwoXCg8OnwrTCoMOnwprChMOpwqrCjMOowq/CgcOkwr/CocOmwoHCr1xuICAgIHB1YmxpYyB2YWxpZGF0aW9uczogRGljdGlvbmFyeTx7XG4gICAgICAgIGhhc0Vycm9yPzogYm9vbGVhbjtcbiAgICAgICAgZXJyb3JNZXNzYWdlcz86IHN0cmluZ1tdO1xuICAgIH0+ID0ge307XG5cbiAgICBwcml2YXRlIF9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpIHtcbiAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPVxuICAgICAgICAgICAgKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kpIHx8XG4gICAgICAgICAgICB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTtcbiAgICAgICAgaWYgKCFzdHJhdGVneSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB2YWxpZGF0aW9uIGRpc3BsYXkgc3RyYXRlZ3kgaXMgbnVsbGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJhdGVneTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRFbGVtZW50KG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnRbbmFtZV07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT0nJHtuYW1lfSddYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9jbGVhckVsZW1lbnRFcnJvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbnNbbmFtZV0gJiYgdGhpcy52YWxpZGF0aW9uc1tuYW1lXS5oYXNFcnJvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uc1tuYW1lXS5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uc1tuYW1lXS5lcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgICAgICB0aGlzLl9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpLnJlbW92ZUVycm9yKHRoaXMuX2dldEVsZW1lbnQobmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RyeUdldFZhbGlkYXRpb24obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0aW9uc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZUZvcm1Db250cm9sVmFsaWRhdGlvbihuYW1lLCB0aGlzLl9nZXRDb250cm9sQnlOYW1lKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uc1tuYW1lXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0aWFsaXplRm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHwgTmdDb250cm9sKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0gPSB7XG4gICAgICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc3RGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuICAgICAgICBpZiAodmFsaWRhdGlvbikge1xuICAgICAgICAgICAgdmFsaWRhdGlvbi5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdmFsaWRhdGlvbi5lcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRWYWxpZGF0aW9uTWVzc2FnZShuYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvck5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzPzogYW55KSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZyAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlcyAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXSAmJlxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVt2YWxpZGF0aW9uRXJyb3JOYW1lXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLl9jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdW3ZhbGlkYXRpb25FcnJvck5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMudGh5Rm9ybVZhbGlkYXRlTG9hZGVyLmdldEVycm9yTWVzc2FnZShuYW1lLCB2YWxpZGF0aW9uRXJyb3JOYW1lLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybU1lc3NhZ2UodmFsaWRhdGlvbkVycm9yTmFtZSwgbWVzc2FnZSwgdmFsaWRhdGlvbkVycm9yVmFsdWVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRWYWxpZGF0aW9uTWVzc2FnZXMobmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgdmFsaWRhdGlvbkVycm9yIGluIHZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmhhc093blByb3BlcnR5KHZhbGlkYXRpb25FcnJvcikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHRoaXMuX2dldFZhbGlkYXRpb25NZXNzYWdlKG5hbWUsIHZhbGlkYXRpb25FcnJvciwgdmFsaWRhdGlvbkVycm9yc1t2YWxpZGF0aW9uRXJyb3JdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldENvbnRyb2xWYWxpZGF0aW9uRXJyb3IobmFtZTogc3RyaW5nLCBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy5fdHJ5R2V0VmFsaWRhdGlvbihuYW1lKTtcbiAgICAgICAgdmFsaWRhdGlvbi5lcnJvck1lc3NhZ2VzID0gZXJyb3JNZXNzYWdlcztcbiAgICAgICAgdmFsaWRhdGlvbi5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2dldFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCkuc2hvd0Vycm9yKHRoaXMuX2dldEVsZW1lbnQobmFtZSksIGVycm9yTWVzc2FnZXMpO1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0b3JDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aHlGb3JtVmFsaWRhdGVMb2FkZXI6IE5neFZhbGlkYXRvckxvYWRlcikge31cblxuICAgIGluaXRpYWxpemUobmdGb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUsIGZvcm1FbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9uZ0Zvcm0gPSBuZ0Zvcm07XG4gICAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24oY29udHJvbHM6IE5nQ29udHJvbFtdKSB7XG4gICAgICAgIGlmICgodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy52YWxpZGF0ZU9uID09PSAnYmx1cicpIHx8IHRoaXMudGh5Rm9ybVZhbGlkYXRlTG9hZGVyLnZhbGlkYXRlT24gPT09ICdibHVyJykge1xuICAgICAgICAgICAgKGNvbnRyb2xzIHx8IFtdKS5mb3JFYWNoKChjb250cm9sOiBOZ0NvbnRyb2wpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NvbnRyb2xzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGNvbnRyb2wubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZUZvcm1Db250cm9sVmFsaWRhdGlvbihjb250cm9sLm5hbWUsIGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoY29udHJvbC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25ibHVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2woY29udHJvbC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xzID0gY29udHJvbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRWYWxpZGF0b3JDb25maWcoY29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldENvbnRyb2xzKCkge1xuICAgICAgICBpZiAodGhpcy5fbmdGb3JtIGluc3RhbmNlb2YgTmdGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX25nRm9ybSBhcyBOZ0Zvcm0pLmNvbnRyb2xzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX25nRm9ybSBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgICh0aGlzLl9uZ0Zvcm0gYXMgRm9ybUdyb3VwRGlyZWN0aXZlKS5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sc1tkaXJlY3RpdmUubmFtZV0gPSBkaXJlY3RpdmU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9scztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldENvbnRyb2xCeU5hbWUobmFtZTogc3RyaW5nKTogQWJzdHJhY3RDb250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHtcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB0aGlzLl9nZXRDb250cm9scygpO1xuICAgICAgICByZXR1cm4gY29udHJvbHNbbmFtZV07XG4gICAgfVxuXG4gICAgdmFsaWRhdGVDb250cm9sKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jbGVhckVsZW1lbnRFcnJvcihuYW1lKTtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2dldENvbnRyb2xCeU5hbWUobmFtZSk7XG4gICAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHRoaXMuX2dldFZhbGlkYXRpb25NZXNzYWdlcyhuYW1lLCBjb250cm9sLmVycm9ycyk7XG4gICAgICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWUsIGVycm9yTWVzc2FnZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVDb250cm9scygpIHtcbiAgICAgICAgLy8gw6TCuMK7w6jCpsKBw6bCmMKvIMOmwpfCoMOmwrPClcOmwqPCgMOmwrXCi8OlwojCsCBuZ0Zvcm0gw6fCmsKEIGNvbnRyb2xzIMOnwprChMOlwo/CmMOlwozClsOvwrzCjMOmwojClsOowoDChcOmwpjCr8OmwojCkcOmwrLCocOmwpzCicOmwonCvsOlwojCsFxuICAgICAgICAvLyDDqcKqwozDqMKvwoHDp8KawoTDpsKXwrbDpcKAwpnDpcK+wqrDp8KOwq8gbmdGb3JtIMOnwprChCBjb250cm9scyDDqcKqwozDqMKvwoFcbiAgICAgICAgLy8gw6XCj8KRw6fCjsKww6bCssKhw6bCnMKJIHZhbGlkYXRpb24gw6XCiMKdw6XCp8KLw6XCjMKWw6TCuMKAw6TCuMKqw6/CvMKMw6XCt8Kyw6fCu8KPw6XCrcKYw6XCnMKow6TCuMKNw6TCvMKaw6nCh8KNw6bClsKww6XCiMKdw6XCp8KLw6XCjMKWw6/CvMKMw6TCv8Kdw6XCrcKYw6fCvMKTw6XCrcKYw6bClcKww6bCjcKuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNvbnRyb2xzKSB7XG4gICAgICAgICAgICBpZiAoY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlHZXRWYWxpZGF0aW9uKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIMOnwqfCu8OpwpnCpMOlwrfCssOnwrvCj8OkwrjCjcOlwq3CmMOlwpzCqMOnwprChCB2YWxpZGF0aW9uXG4gICAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy52YWxpZGF0aW9ucyk7XG4gICAgICAgIG5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbnRyb2xzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMudmFsaWRhdGlvbnNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCRldmVudD86IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuX25nRm9ybS5vblN1Ym1pdCgkZXZlbnQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nRm9ybS52YWxpZDtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5fbmdGb3JtLnJlc2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLnZhbGlkYXRpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3RGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrQ29udHJvbEFzRXJyb3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgIHRoaXMuX3NldENvbnRyb2xWYWxpZGF0aW9uRXJyb3IobmFtZSwgW21lc3NhZ2VdKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBPbkluaXQsXG4gICAgTmdab25lLFxuICAgIFJlbmRlcmVyMixcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uRGVzdHJveSxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uL3ZhbGlkYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IE5nRm9ybSwgQ29udHJvbENvbnRhaW5lciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9yQ29uZmlnIH0gZnJvbSAnLi4vdmFsaWRhdG9yLmNsYXNzJztcblxuY29uc3QgS0VZX0NPREVTX0VOVEVSID0gMTM7XG5cbi8vIDEuIHN1Ym1pdCDDpsKMwokgRW50ZXIgw6nClMKuw6bCj8KQw6TCusKkLCBUZXh0YXJlIMOpwpnCpMOlwqTClsOvwrzCjMOpwpzCgMOowqbCgcOmwozCiSBDdHJsIHwgQ29tbWFuZCArIEVudGVyIMOmwo/CkMOkwrrCpFxuLy8gMi4gYWx3YXlzU3VibWl0IMOkwrjCjcOnwq7CocOmwpjCr8OlwpPCqsOkwrjCqsOlwoXCg8OnwrTCoCDDpsKMwokgRW50ZXIgw6nClMKuw6nCg8K9w6bCj8KQw6TCusKkXG4vLyAzLiBmb3JiaWRTdWJtaXQgXGJFbnRlciDDqcKUwq7Dp8KmwoHDpsKtwqLDpsKPwpDDpMK6wqRcbi8vIMOpwrvCmMOowq7CpCBzdWJtaXRcbmV4cG9ydCBlbnVtIE5neEVudGVyS2V5TW9kZSB7XG4gICAgc3VibWl0ID0gJ3N1Ym1pdCcsXG4gICAgYWx3YXlzU3VibWl0ID0gJ2Fsd2F5c1N1Ym1pdCcsXG4gICAgZm9yYmlkU3VibWl0ID0gJ2ZvcmJpZFN1Ym1pdCdcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdmb3JtW25neEZvcm1WYWxpZGF0b3JdLGZvcm1bbmd4LWZvcm0tdmFsaWRhdG9yXScsXG4gICAgcHJvdmlkZXJzOiBbTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2VdLFxuICAgIGV4cG9ydEFzOiAnbmd4Rm9ybVZhbGlkYXRvcidcbn0pXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBAQ29udGVudENoaWxkcmVuKE5nQ29udHJvbCwge1xuICAgICAgICBkZXNjZW5kYW50czogdHJ1ZVxuICAgIH0pXG4gICAgcHVibGljIGNvbnRyb2xzOiBRdWVyeUxpc3Q8TmdDb250cm9sPjtcblxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWQ7XG5cbiAgICBvblN1Ym1pdFN1Y2Nlc3M6ICgkZXZlbnQ6IGFueSkgPT4gdm9pZDtcblxuICAgIEBJbnB1dCgpIGVudGVyS2V5TW9kZTogTmd4RW50ZXJLZXlNb2RlO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmd4Rm9ybVZhbGlkYXRvckNvbmZpZyhjb25maWc6IE5neFZhbGlkYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5zZXRWYWxpZGF0b3JDb25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ3hGb3JtVmFsaWRhdG9yKGNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLnNldFZhbGlkYXRvckNvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIF92YWxpZGF0b3I6IE5neEZvcm1WYWxpZGF0b3JTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5nRm9ybTogQ29udHJvbENvbnRhaW5lclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgJ2tleWRvd24nLFxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmluaXRpYWxpemUodGhpcy5uZ0Zvcm0gYXMgTmdGb3JtLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5pbml0aWFsaXplRm9ybUNvbnRyb2xzVmFsaWRhdGlvbih0aGlzLmNvbnRyb2xzLnRvQXJyYXkoKSk7XG4gICAgICAgIHRoaXMuY29udHJvbHMuY2hhbmdlcy5zdWJzY3JpYmUoY29udHJvbHMgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24odGhpcy5jb250cm9scy50b0FycmF5KCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoJGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IudmFsaWRhdGUoJGV2ZW50KSAmJiB0aGlzLm9uU3VibWl0U3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdFN1Y2Nlc3MoJGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCgkZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbktleWRvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbnB1dCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGtleSA9ICRldmVudC53aGljaCB8fCAkZXZlbnQua2V5Q29kZTtcbiAgICAgICAgaWYgKGtleSA9PT0gS0VZX0NPREVTX0VOVEVSICYmIGN1cnJlbnRJbnB1dC50YWdOYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZW50ZXJLZXlNb2RlIHx8IHRoaXMuZW50ZXJLZXlNb2RlID09PSBOZ3hFbnRlcktleU1vZGUuc3VibWl0KSB7XG4gICAgICAgICAgICAgICAgLy8gVEVYVEFSRUEgQ3RybCArIEVudGVyIMOmwojClsOowoDChSBDb21tYW5kICsgRW50ZXIgw6nCmMK7w6bCrcKiXGLDqcK7wpjDqMKuwqTDqMKhwozDpMK4wrrDpcK5wrbDpsKPwpDDpMK6wqRcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudElucHV0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC5jdHJsS2V5IHx8ICRldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDDpMK4wo3DpsKYwq8gVEVYVEFSRUEgRW50ZXIgw6nCmMK7w6bCrcKiXGLDqcK7wpjDqMKuwqTDqMKhwozDpMK4wrrDpcK5wrbDpsKPwpDDpMK6wqRcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVudGVyS2V5TW9kZSA9PT0gTmd4RW50ZXJLZXlNb2RlLmFsd2F5c1N1Ym1pdCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0UnVuSW5ab25lKCRldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPdXRwdXQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgT3B0aW9uYWwsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4Rm9ybVN1Ym1pdF0sW25neC1mb3JtLXN1Ym1pdF0nXG59KVxuZXhwb3J0IGNsYXNzIE5neEZvcm1TdWJtaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQE91dHB1dCgpIG5neEZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB2YWxpZGF0b3JEaXJlY3RpdmU6IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JEaXJlY3RpdmUub25TdWJtaXRTdWNjZXNzID0gKCRldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5neEZvcm1TdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvblN1Ym1pdCgkZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvckRpcmVjdGl2ZS5zdWJtaXQoJGV2ZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdG9ycyB7XG4gICAgc3RhdGljIHVuaXF1ZUNoZWNrVmFsaWRhdG9yKHVuaXF1ZUNoZWNrRm46ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChcbiAgICAgICAgICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbFxuICAgICAgICApOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0+IHtcbiAgICAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZUNoZWNrRm4oY29udHJvbC52YWx1ZSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKGlzVW5pcXVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1VuaXF1ZSA/IHsgbmd4VW5pcXVlQ2hlY2s6IHsgdmFsdWU6IHRydWUgfSB9IDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUsIEluamVjdGFibGUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5HX1ZBTElEQVRPUlMsXG4gICAgVmFsaWRhdG9yLFxuICAgIEFic3RyYWN0Q29udHJvbCxcbiAgICBWYWxpZGF0b3JzLFxuICAgIFZhbGlkYXRvckZuLFxuICAgIE5HX0FTWU5DX1ZBTElEQVRPUlMsXG4gICAgQXN5bmNWYWxpZGF0b3IsXG4gICAgVmFsaWRhdGlvbkVycm9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9ycyB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjpcbiAgICAgICAgJ1tuZ3hNaW5dW2Zvcm1Db250cm9sTmFtZV0sW25neE1pbl1bZm9ybUNvbnRyb2xdLFtuZ3hNaW5dW25nTW9kZWxdLCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5WYWxpZGF0b3JEaXJlY3RpdmUpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWluVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgc2V0IG5neE1pbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5taW4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoY29udHJvbCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjpcbiAgICAgICAgJ1tuZ3hNYXhdW2Zvcm1Db250cm9sTmFtZV0sW25neE1heF1bZm9ybUNvbnRyb2xdLFtuZ3hNYXhdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1heFZhbGlkYXRvckRpcmVjdGl2ZSksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXhWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgbmd4TWF4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1heChwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjb250cm9sKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neFVuaXF1ZUNoZWNrXVtmb3JtQ29udHJvbE5hbWVdLFtuZ3hVbmlxdWVDaGVja11bZm9ybUNvbnRyb2xdLFtuZ3hVbmlxdWVDaGVja11bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19BU1lOQ19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBBc3luY1ZhbGlkYXRvciB7XG4gICAgQElucHV0KCkgbmd4VW5pcXVlQ2hlY2s6ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBudWxsPiA9ICh2YWx1ZTogYW55KSA9PiBvZihudWxsKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycz4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnM+IHtcbiAgICAgICAgcmV0dXJuIE5neFZhbGlkYXRvcnMudW5pcXVlQ2hlY2tWYWxpZGF0b3IodGhpcy5uZ3hVbmlxdWVDaGVjaykoY29udHJvbCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4Rm9ybVN1Ym1pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXN1Ym1pdC5kaXJlY3RpdmUnO1xuXG4vLyBpbXBvcnQgeyBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXVuaXF1ZS1jaGVjay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF4VmFsaWRhdG9yRGlyZWN0aXZlLCBNaW5WYWxpZGF0b3JEaXJlY3RpdmUsIE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcsIE5HWF9WQUxJREFUT1JfQ09ORklHIH0gZnJvbSAnLi92YWxpZGF0b3IuY2xhc3MnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gICAgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlLFxuICAgIE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlLFxuICAgIE1heFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBNaW5WYWxpZGF0b3JEaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbLi4uZGVjbGFyYXRpb25zLCBGb3Jtc01vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdG9yTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5neFZhbGlkYXRvck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogTkdYX1ZBTElEQVRPUl9DT05GSUcsXG4gICAgICAgICAgICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBb0JBLE1BQWEsb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBQTJCLHVCQUF1QixDQUFDOztBQUV6RyxNQUFhLGtDQUFrQyxHQUFHO0lBQzlDLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFNBQVMsRUFBRSw4QkFBOEI7SUFDekMsU0FBUyxFQUFFLDhCQUE4QjtJQUN6QyxjQUFjLEVBQUUsZUFBZTtJQUMvQixLQUFLLEVBQUUsWUFBWTtJQUNuQixNQUFNLEVBQUUsU0FBUztJQUNqQixPQUFPLEVBQUUsWUFBWTtJQUNyQixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsWUFBWTtJQUNqQixHQUFHLEVBQUUsaUJBQWlCO0lBQ3RCLEdBQUcsRUFBRSxpQkFBaUI7Q0FDekI7Ozs7OztBQ2hDRCxNQUFhLDhCQUE4Qjs7Ozs7OztJQUV2QyxTQUFTLENBQUMsT0FBb0IsRUFBRSxhQUF1QixLQUFVOzs7OztJQUVqRSxXQUFXLENBQUMsT0FBb0IsS0FBVTtDQUM3Qzs7Ozs7OztNQ0xLLGFBQWEsR0FBRyxZQUFZOztNQUM1QixzQkFBc0IsR0FBRyxrQkFBa0I7QUFFakQsTUFBYSxtQ0FBbUM7SUFDNUMsaUJBQWdCOzs7Ozs7SUFFaEIsU0FBUyxDQUFDLE9BQW9CLEVBQUUsYUFBdUI7UUFDbkQsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7O2tCQUM1QixZQUFZLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixFQUFFOztrQkFDaEQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDOztrQkFDdkMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUN0RCxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO0tBQ0o7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQW9CO1FBQzVCLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFOztrQkFDNUIsZUFBZSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQztZQUN6RixJQUFJLGVBQWUsRUFBRTtnQkFDakIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEQ7U0FDSjtLQUNKO0NBQ0o7Ozs7OztBQ25DRCxNQUlhLGlDQUFpQzs7OztJQUMxQyxPQUFPLElBQUk7UUFDUCxPQUFPLElBQUksOEJBQThCLEVBQUUsQ0FBQztLQUMvQzs7OztJQUVELE9BQU8sU0FBUztRQUNaLE9BQU8sSUFBSSxtQ0FBbUMsRUFBRSxDQUFDO0tBQ3BEO0NBQ0o7Ozs7OztBQ1pEO01BV00sc0JBQXNCLEdBQTZCO0lBQ3JELDBCQUEwQixFQUFFLGlDQUFpQyxDQUFDLFNBQVMsRUFBRTtJQUN6RSxrQkFBa0IsRUFBRSxFQUFFO0NBQ3pCO0FBS0QsTUFBYSxrQkFBa0I7Ozs7SUE2QjNCLFlBR0ksTUFBZ0M7UUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNuRTs7Ozs7SUFoQ08sMkJBQTJCLENBQUMsR0FBVztRQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNILE9BQU8sa0NBQWtDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7S0FDSjs7OztJQUVELElBQUksa0JBQWtCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztLQUN6Qzs7OztJQUVELElBQUksMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDBCQUEwQixFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsaUNBQWlDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDMUY7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7S0FDakQ7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUNqQzs7Ozs7Ozs7SUFlRCxlQUFlLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxxQkFBMkI7O1lBQzlELE9BQU8sR0FBRyxFQUFFO1FBQ2hCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyRSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxPQUFPLENBQUM7S0FDbEI7Ozs7Ozs7Ozs7Ozs7O0lBWUQscUJBQXFCLENBQUMsUUFBK0I7UUFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzNEOzs7OztJQUVELDJCQUEyQixDQUFDLGtCQUFzQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixHQUFHLGtCQUFrQixDQUFDO0tBQzdEOzs7WUF2RUosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7OzRDQStCUSxRQUFRLFlBQ1IsTUFBTSxTQUFDLG9CQUFvQjs7Ozs7Ozs7Ozs7OztBQ2xEcEMsU0FBUyx5QkFBeUIsQ0FBQyxPQUFlLEVBQUUscUJBQWlEO0lBQ2pHLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztDQUMvRjs7Ozs7O0FBRUQsU0FBUyxjQUFjLENBQUMsT0FBZSxFQUFFLHFCQUFzRDtJQUMzRixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0NBQ3pFOzs7Ozs7QUFFRCxTQUFTLGVBQWUsQ0FBQyxPQUFlLEVBQUUscUJBQXNEO0lBQzVGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUscUJBQXFCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Q0FDekU7O01BRUssY0FBYyxHQUFHO0lBQ25CLFNBQVMsRUFBRSx5QkFBeUI7SUFDcEMsU0FBUyxFQUFFLHlCQUF5QjtJQUNwQyxHQUFHLEVBQUUsY0FBYztJQUNuQixHQUFHLEVBQUUsZUFBZTtDQUN2Qjs7Ozs7OztBQUVELFNBQWdCLGdCQUFnQixDQUFDLGFBQXFCLEVBQUUsT0FBZSxFQUFFLHFCQUEwQjtJQUMvRixJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxxQkFBcUIsRUFBRTtRQUN4RCxPQUFPLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQztLQUN4RTtJQUNELE9BQU8sT0FBTyxDQUFDO0NBQ2xCOzs7Ozs7QUN4QkQsTUFlYSx1QkFBdUI7Ozs7SUEwR2hDLFlBQW9CLHFCQUF5QztRQUF6QywwQkFBcUIsR0FBckIscUJBQXFCLENBQW9CO1FBbkdyRCxjQUFTLEdBQWdCLEVBQUUsQ0FBQzs7O1FBSzdCLGdCQUFXLEdBR2IsRUFBRSxDQUFDO0tBMkZ5RDs7OztJQXpGekQsOEJBQThCOztjQUM1QixRQUFRLEdBQ1YsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCO1lBQ3hELElBQUksQ0FBQyxxQkFBcUIsQ0FBQywwQkFBMEI7UUFDekQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sUUFBUSxDQUFDO0tBQ25COzs7OztJQUVPLFdBQVcsQ0FBQyxJQUFZOztjQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLE9BQU8sQ0FBQztTQUNsQjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUM7U0FDOUQ7S0FDSjs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxJQUFZO1FBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDN0U7S0FDSjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFZO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDN0U7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakM7Ozs7OztJQUVPLGdDQUFnQyxDQUFDLElBQVksRUFBRSxPQUFzRDtRQUN6RyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3JCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsYUFBYSxFQUFFLEVBQUU7U0FDcEIsQ0FBQztRQUNGLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUM7S0FDTjs7Ozs7SUFFTywwQkFBMEIsQ0FBQyxJQUFZOztjQUNyQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxVQUFVLEVBQUU7WUFDWixVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUM1QixVQUFVLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUNqQztLQUNKOzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsSUFBWSxFQUFFLG1CQUEyQixFQUFFLHFCQUEyQjs7WUFDNUYsT0FBTyxHQUFHLEVBQUU7UUFDaEIsSUFDSSxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFDNUQ7WUFDRSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztTQUMxRztRQUVELE9BQU8sZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7S0FDaEY7Ozs7OztJQUVPLHNCQUFzQixDQUFDLElBQVksRUFBRSxnQkFBa0M7O2NBQ3JFLFFBQVEsR0FBRyxFQUFFO1FBQ25CLEtBQUssTUFBTSxlQUFlLElBQUksZ0JBQWdCLEVBQUU7WUFDNUMsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2xELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZHO1NBQ0o7UUFDRCxPQUFPLFFBQVEsQ0FBQztLQUNuQjs7Ozs7O0lBRU8sMEJBQTBCLENBQUMsSUFBWSxFQUFFLGFBQXVCOztjQUM5RCxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUMvQyxVQUFVLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUN6QyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUMxRjs7OztJQUVELElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUN2Qjs7Ozs7O0lBSUQsVUFBVSxDQUFDLE1BQW1DLEVBQUUsV0FBd0I7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7S0FDbkM7Ozs7O0lBRUQsZ0NBQWdDLENBQUMsUUFBcUI7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEtBQUssTUFBTSxFQUFFO1lBQzFHLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFrQjtnQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDMUQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7OzBCQUN2RCxPQUFPLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDM0QsSUFBSSxPQUFPLEVBQUU7d0JBQ1QsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQWlCOzRCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDdEMsQ0FBQztxQkFDTDtpQkFDSjthQUNKLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzdCO0tBQ0o7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBMEI7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7S0FDekI7Ozs7SUFFTyxZQUFZO1FBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxNQUFNLEVBQUU7WUFDaEMsT0FBTyxvQkFBQyxJQUFJLENBQUMsT0FBTyxJQUFZLFFBQVEsQ0FBQztTQUM1QzthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxrQkFBa0IsRUFBRTs7a0JBQzdDLFFBQVEsR0FBRyxFQUFFO1lBQ25CLG9CQUFDLElBQUksQ0FBQyxPQUFPLElBQXdCLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDN0QsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDeEMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxRQUFRLENBQUM7U0FDbkI7S0FDSjs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxJQUFZOztjQUM1QixRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNwQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7O2NBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7O2tCQUN0QixhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3ZFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDeEQ7S0FDSjs7OztJQUVELGdCQUFnQjs7Ozs7Y0FJTixRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNwQyxLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUN6QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtTQUNKOzs7Y0FFSyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztTQUNKLENBQUMsQ0FBQztLQUNOOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFjO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDN0I7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7U0FDSjtLQUNKOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsT0FBZTtRQUM1QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDcEQ7OztZQXhNSixVQUFVOzs7O1lBTEYsa0JBQWtCOzs7Ozs7O0FDVDNCO01BZ0JNLGVBQWUsR0FBRyxFQUFFOzs7SUFPdEIsUUFBUyxRQUFRO0lBQ2pCLGNBQWUsY0FBYztJQUM3QixjQUFlLGNBQWM7O01BUXBCLHlCQUF5Qjs7Ozs7Ozs7SUEwQmxDLFlBQ1ksTUFBYyxFQUNkLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLFVBQW1DLEVBQ25DLE1BQXdCO1FBSnhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7S0FDaEM7Ozs7O0lBcEJKLElBQ0ksc0JBQXNCLENBQUMsTUFBMEI7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3Qzs7Ozs7SUFFRCxJQUNJLGdCQUFnQixDQUFDLE1BQTBCO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0M7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDMUI7Ozs7SUFVRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsU0FBUyxFQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUM1QixDQUFDO1NBQ0wsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLG9CQUFDLElBQUksQ0FBQyxNQUFNLElBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUNuRjs7OztJQUVELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzVFLENBQUMsQ0FBQztLQUNOOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6RCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0tBQ0o7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWE7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztLQUNOOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFxQjs7Y0FDckIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhOztjQUNyQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTztRQUMxQyxJQUFJLEdBQUcsS0FBSyxlQUFlLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLGVBQWUsQ0FBQyxNQUFNLEVBQUU7O2dCQUVwRSxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO29CQUNyQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTt3QkFDbEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNoQztpQkFDSjtxQkFBTTs7b0JBRUgsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNoQzthQUNKO2lCQUFNLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxlQUFlLENBQUMsWUFBWSxFQUFFO2dCQUMzRCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEMsQUFFQTtTQUNKO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtLQUNKOzs7WUFuR0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpREFBaUQ7Z0JBQzNELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxRQUFRLEVBQUUsa0JBQWtCO2FBQy9COzs7O1lBN0JHLE1BQU07WUFDTixTQUFTO1lBQ1QsVUFBVTtZQU9MLHVCQUF1QjtZQUNmLGdCQUFnQjs7O3VCQXFCNUIsZUFBZSxTQUFDLFNBQVMsRUFBRTtvQkFDeEIsV0FBVyxFQUFFLElBQUk7aUJBQ3BCOzJCQU9BLEtBQUs7cUNBRUwsS0FBSzsrQkFLTCxLQUFLOzs7Ozs7O0FDbERWLE1BT2Esc0JBQXNCOzs7O0lBSS9CLFlBQ1ksa0JBQTZDO1FBQTdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFIL0Msa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBSzVDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxNQUFXO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7S0FDTDs7Ozs7SUFHRCxRQUFRLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFDOzs7WUFyQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQ0FBbUM7YUFDaEQ7Ozs7WUFKUSx5QkFBeUI7Ozs0QkFPN0IsTUFBTTt1QkFhTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0FDckJyQyxNQUdhLGFBQWE7Ozs7O0lBQ3RCLE9BQU8sb0JBQW9CLENBQUMsYUFBa0Q7O2NBQ3BFLE1BQU0sR0FBRyxDQUNYLE9BQXdCO1lBRXhCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDZixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNwQyxHQUFHLENBQUMsUUFBUTtvQkFDUixPQUFPLFFBQVEsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztpQkFDaEUsQ0FBQyxDQUNMLENBQUM7YUFDTDtpQkFBTTtnQkFDSCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7O0FDckJELE1BeUJhLHFCQUFxQjtJQU85QixpQkFBZ0I7Ozs7O0lBSmhCLElBQW9CLE1BQU0sQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN0RDs7Ozs7SUFJRCxRQUFRLENBQUMsT0FBd0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xDOzs7WUF0QkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFDSixvRUFBb0U7Z0JBQ3hFLFNBQVMsRUFBRTtvQkFDUDt3QkFDSSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxNQUFNLHFCQUFxQixDQUFDO3dCQUNwRCxLQUFLLEVBQUUsSUFBSTtxQkFDZDtpQkFDSjthQUNKOzs7OztxQkFJSSxLQUFLOztNQXNCRyxxQkFBcUI7SUFPOUIsaUJBQWdCOzs7OztJQUpoQixJQUFvQixNQUFNLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdEQ7Ozs7O0lBSUQsUUFBUSxDQUFDLE9BQXdCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNsQzs7O1lBdEJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQ0osbUVBQW1FO2dCQUN2RSxTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSxxQkFBcUIsQ0FBQzt3QkFDcEQsS0FBSyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0o7YUFDSjs7Ozs7cUJBSUksS0FBSzs7TUFxQkcsdUJBQXVCO0lBR2hDO1FBRlMsbUJBQWMsR0FBK0MsQ0FBQyxLQUFVLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBRS9FOzs7OztJQUVoQixRQUFRLENBQUMsT0FBd0I7UUFDN0IsT0FBTyxhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNFOzs7WUFqQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwyRkFBMkY7Z0JBQ3JHLFNBQVMsRUFBRTtvQkFDUDt3QkFDSSxPQUFPLEVBQUUsbUJBQW1CO3dCQUM1QixXQUFXLEVBQUUsdUJBQXVCO3dCQUNwQyxLQUFLLEVBQUUsSUFBSTtxQkFDZDtpQkFDSjthQUNKOzs7Ozs2QkFFSSxLQUFLOzs7Ozs7O0FDM0VWO01BVU0sWUFBWSxHQUFHO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQkFBcUI7Q0FDeEI7QUFPRCxNQUFhLGtCQUFrQjs7Ozs7SUFDM0IsT0FBTyxPQUFPLENBQUMsTUFBZ0M7UUFDM0MsT0FBTztZQUNILFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjthQUNKO1NBQ0osQ0FBQztLQUNMOzs7WUFoQkosUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxZQUFZO2dCQUMxQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLFdBQVcsQ0FBQzthQUMxQzs7Ozs7Ozs7Ozs7Ozs7OyJ9