import { InjectionToken, Inject, Injectable, Optional, Directive, forwardRef, Input, NgModule, NgZone, Renderer2, ElementRef, ContentChildren, Output, HostListener, EventEmitter, defineInjectable, inject } from '@angular/core';
import { NgForm, FormGroupDirective, ControlContainer, NgControl, NG_VALIDATORS, Validators, NG_ASYNC_VALIDATORS, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
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
NgxValidatorLoader.ɵfac = function NgxValidatorLoader_Factory(t) { return new (t || NgxValidatorLoader)(ɵngcc0.ɵɵinject(NGX_VALIDATOR_CONFIG, 8)); };
NgxValidatorLoader.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxValidatorLoader, factory: NgxValidatorLoader.ɵfac, providedIn: 'root' });
/** @nocollapse */
NgxValidatorLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NGX_VALIDATOR_CONFIG,] }] }
];
/** @nocollapse */ NgxValidatorLoader.ngInjectableDef = defineInjectable({ factory: function NgxValidatorLoader_Factory() { return new NgxValidatorLoader(inject(NGX_VALIDATOR_CONFIG, 8)); }, token: NgxValidatorLoader, providedIn: "root" });
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
NgxFormValidatorService.ɵfac = function NgxFormValidatorService_Factory(t) { return new (t || NgxFormValidatorService)(ɵngcc0.ɵɵinject(NgxValidatorLoader)); };
NgxFormValidatorService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxFormValidatorService, factory: NgxFormValidatorService.ɵfac });
/** @nocollapse */
NgxFormValidatorService.ctorParameters = () => [
    { type: NgxValidatorLoader }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxFormValidatorService, [{
        type: Injectable
    }], function () { return [{ type: NgxValidatorLoader }]; }, null); })();

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
NgxFormValidatorDirective.ɵfac = function NgxFormValidatorDirective_Factory(t) { return new (t || NgxFormValidatorDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxFormValidatorService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ControlContainer)); };
NgxFormValidatorDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgxFormValidatorDirective, selectors: [["form", "ngxFormValidator", ""], ["form", "ngx-form-validator", ""]], contentQueries: function NgxFormValidatorDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NgControl, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.controls = _t);
    } }, inputs: { ngxFormValidatorConfig: "ngxFormValidatorConfig", ngxFormValidator: "ngxFormValidator", enterKeyMode: "enterKeyMode" }, exportAs: ["ngxFormValidator"], features: [ɵngcc0.ɵɵProvidersFeature([NgxFormValidatorService])] });
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
NgxFormSubmitDirective.ɵfac = function NgxFormSubmitDirective_Factory(t) { return new (t || NgxFormSubmitDirective)(ɵngcc0.ɵɵdirectiveInject(NgxFormValidatorDirective)); };
NgxFormSubmitDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgxFormSubmitDirective, selectors: [["", "ngxFormSubmit", ""], ["", "ngx-form-submit", ""]], hostBindings: function NgxFormSubmitDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NgxFormSubmitDirective_click_HostBindingHandler($event) { return ctx.onSubmit($event); });
    } }, outputs: { ngxFormSubmit: "ngxFormSubmit" } });
/** @nocollapse */
NgxFormSubmitDirective.ctorParameters = () => [
    { type: NgxFormValidatorDirective }
];
NgxFormSubmitDirective.propDecorators = {
    ngxFormSubmit: [{ type: Output }],
    onSubmit: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
MinValidatorDirective.ɵfac = function MinValidatorDirective_Factory(t) { return new (t || MinValidatorDirective)(); };
MinValidatorDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MinValidatorDirective, selectors: [["", "ngxMin", "", "formControlName", ""], ["", "ngxMin", "", "formControl", ""], ["", "ngxMin", "", "ngModel", ""], [""]], inputs: { ngxMin: "ngxMin" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => MinValidatorDirective),
                multi: true
            }
        ])] });
/** @nocollapse */
MinValidatorDirective.ctorParameters = () => [];
MinValidatorDirective.propDecorators = {
    ngxMin: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxMin][formControlName],[ngxMin][formControl],[ngxMin][ngModel],',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => MinValidatorDirective),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { ngxMin: [{
            type: Input
        }] }); })();
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
MaxValidatorDirective.ɵfac = function MaxValidatorDirective_Factory(t) { return new (t || MaxValidatorDirective)(); };
MaxValidatorDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxValidatorDirective, selectors: [["", "ngxMax", "", "formControlName", ""], ["", "ngxMax", "", "formControl", ""], ["", "ngxMax", "", "ngModel", ""]], inputs: { ngxMax: "ngxMax" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => MaxValidatorDirective),
                multi: true
            }
        ])] });
/** @nocollapse */
MaxValidatorDirective.ctorParameters = () => [];
MaxValidatorDirective.propDecorators = {
    ngxMax: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxMax][formControlName],[ngxMax][formControl],[ngxMax][ngModel]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => MaxValidatorDirective),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { ngxMax: [{
            type: Input
        }] }); })();
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
NgxUniqueCheckDirective.ɵfac = function NgxUniqueCheckDirective_Factory(t) { return new (t || NgxUniqueCheckDirective)(); };
NgxUniqueCheckDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgxUniqueCheckDirective, selectors: [["", "ngxUniqueCheck", "", "formControlName", ""], ["", "ngxUniqueCheck", "", "formControl", ""], ["", "ngxUniqueCheck", "", "ngModel", ""]], inputs: { ngxUniqueCheck: "ngxUniqueCheck" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_ASYNC_VALIDATORS,
                useExisting: NgxUniqueCheckDirective,
                multi: true
            }
        ])] });
/** @nocollapse */
NgxUniqueCheckDirective.ctorParameters = () => [];
NgxUniqueCheckDirective.propDecorators = {
    ngxUniqueCheck: [{ type: Input }]
};
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
                exports: [...declarations, FormsModule]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NgxValidators, NgxValidatorModule, NgxValidatorLoader, NGX_VALIDATOR_CONFIG, DEFAULT_GLOBAL_VALIDATION_MESSAGES, NgxEnterKeyMode, NgxFormValidatorDirective, NgxFormSubmitDirective, ValidationFeedbackStrategyBuilder, NoopValidationFeedbackStrategy, BootstrapValidationFeedbackStrategy, MaxValidatorDirective as ɵc, MinValidatorDirective as ɵb, NgxUniqueCheckDirective as ɵd, NgxFormValidatorService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2h5NTIwY3Jhenktbmd4LXZhbGlkYXRvci5qcyIsInNvdXJjZXMiOlsibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3ZhbGlkYXRvci5jbGFzcy50cyIsIm5nOi9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9zdHJhdGVnaWVzL25vb3AtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneS50cyIsIm5nOi9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci9zdHJhdGVnaWVzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5LnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3N0cmF0ZWdpZXMvaW5kZXgudHMiLCJuZzovQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvdmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL21lc3NhZ2UtdHJhbnNmb3JtZXJzLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3ZhbGlkYXRvci5zZXJ2aWNlLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL3ZhbGlkYXRvcnMudHMiLCJuZzovQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvZGlyZWN0aXZlcy92YWxpZGF0b3JzLnRzIiwibmc6L0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBb0JBLE1BQWEsb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBQTJCLHVCQUF1QixDQUFDOztBQUV6RyxNQUFhLGtD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T0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsUUFBUSxFQUFFLE1BQU07aUJBQ25CO2FBQ0o7U0FDSixDQUFDO0tBQ0w7Ozs7Q0FDSjt1QkFqQkEsUUFBUSxTQUFDLGtCQUNOLFlBQVksRUFBRSxZQUFZLGtCQUMxQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQ3RCLE9BQU8sRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFO0dBQVcsQ0FBQyxjQUMxQzs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGljdGlvbmFyeTxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMgPSBEaWN0aW9uYXJ5PERpY3Rpb25hcnk8c3RyaW5nPj47XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgTmd4VmFsaWRhdGVPbiA9ICdzdWJtaXQnIHwgJ2JsdXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neFZhbGlkYXRvckNvbmZpZyB7XG4gICAgdmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k/OiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM/OiBOZ3hWYWxpZGF0aW9uTWVzc2FnZXM7XG4gICAgdmFsaWRhdGVPbj86IE5neFZhbGlkYXRlT247XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyBleHRlbmRzIE5neFZhbGlkYXRvckNvbmZpZyB7XG4gICAgZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzPzogRGljdGlvbmFyeTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgTkdYX1ZBTElEQVRPUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Tmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnPignTkdYX1ZBTElEQVRJT05fQ09ORklHJyk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0dMT0JBTF9WQUxJREFUSU9OX01FU1NBR0VTID0ge1xuICAgIHJlcXVpcmVkOiAnw6jCr8Klw6nCgMKJw6nCocK5w6TCuMKNw6jCg8K9w6TCuMK6w6fCqcK6JyxcbiAgICBtYXhsZW5ndGg6ICfDqMKvwqXDqcKAwonDqcKhwrnDqMK+wpPDpcKFwqXDpcKAwrzDqcKVwr/DpcK6wqbDpMK4wo3DqMKDwr3DpcKkwqfDpMK6wo57cmVxdWlyZWRMZW5ndGh9JyxcbiAgICBtaW5sZW5ndGg6ICfDqMKvwqXDqcKAwonDqcKhwrnDqMK+wpPDpcKFwqXDpcKAwrzDqcKVwr/DpcK6wqbDpMK4wo3DqMKDwr3DpcKwwo/DpMK6wo57cmVxdWlyZWRMZW5ndGh9JyxcbiAgICBuZ3hVbmlxdWVDaGVjazogJ8Oowr7Ck8OlwoXCpcOlwoDCvMOlwrfCssOnwrvCj8Olwq3CmMOlwpzCqMOvwrzCjMOowq/Ct8OpwofCjcOmwpbCsMOowr7Ck8OlwoXCpScsXG4gICAgZW1haWw6ICfDqMK+wpPDpcKFwqXDqcKCwq7DpMK7wrbDp8KawoTDpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq4nLFxuICAgIHJlcGVhdDogJ8OkwrjCpMOmwqzCocOowr7Ck8OlwoXCpcOkwrjCjcOkwrjCgMOowofCtCcsXG4gICAgcGF0dGVybjogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOmwqDCvMOlwrzCj8OkwrjCjcOmwq3Co8OnwqHCricsXG4gICAgbnVtYmVyOiAnw6XCv8KFw6nCocK7w6jCvsKTw6XChcKlw6bClcKww6XCrcKXJyxcbiAgICB1cmw6ICfDqMK+wpPDpcKFwqVVUkzDpsKgwrzDpcK8wo/DpMK4wo3DpsKtwqPDp8Khwq4nLFxuICAgIG1heDogJ8Oowq/CpcOpwoDCicOpwqHCucOowr7Ck8OlwoXCpcOlwoDCvMOkwrjCjcOowoPCvcOlwqTCp8OkwrrCjnttYXh9JyxcbiAgICBtaW46ICfDqMKvwqXDqcKAwonDqcKhwrnDqMK+wpPDpcKFwqXDpcKAwrzDpMK4wo3DqMKDwr3DpcKwwo/DpMK6wo57bWlufSdcbn07XG4iLCJpbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneSc7XG5cbmV4cG9ydCBjbGFzcyBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgaW1wbGVtZW50cyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgLyoqIERvZXMgbm90aGluZywgYXMgdGhpcyB2YWxpZGF0aW9uIG1lc3NhZ2UgZGlzcGxheSBzdHJhdGVneSBpcyBhIG5vLW9wLiAqL1xuICAgIHNob3dFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pOiB2b2lkIHt9XG5cbiAgICByZW1vdmVFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge31cbn1cbiIsImltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi92YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcblxuY29uc3QgSU5WQUxJRF9DTEFTUyA9ICdpcy1pbnZhbGlkJztcbmNvbnN0IElOVkFMSURfRkVFREJBQ0tfQ0xBU1MgPSAnaW52YWxpZC1mZWVkYmFjayc7XG5cbmV4cG9ydCBjbGFzcyBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSBpbXBsZW1lbnRzIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzaG93RXJyb3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoSU5WQUxJRF9DTEFTUyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50RnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZXJyb3JNZXNzYWdlc1swXSk7XG4gICAgICAgICAgICBkaXZOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgICAgIGRpdk5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIElOVkFMSURfRkVFREJBQ0tfQ0xBU1MpO1xuICAgICAgICAgICAgZG9jdW1lbnRGcmFnLmFwcGVuZENoaWxkKGRpdk5vZGUpO1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZChkb2N1bWVudEZyYWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRXJyb3IoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShJTlZBTElEX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtJTlZBTElEX0ZFRURCQUNLX0NMQVNTfWApO1xuICAgICAgICAgICAgaWYgKGludmFsaWRGZWVkYmFjaykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbnZhbGlkRmVlZGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTm9vcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi9ub29wLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL2Jvb3RzdHJhcC12YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcbmltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi92YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlciB7XG4gICAgc3RhdGljIG5vb3AoKTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gbmV3IE5vb3BWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBib290c3RyYXAoKTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgICAgICByZXR1cm4gbmV3IEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSwgTm9vcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5LCBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9O1xuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcsXG4gICAgTmd4VmFsaWRhdGlvbk1lc3NhZ2VzLFxuICAgIERpY3Rpb25hcnksXG4gICAgTkdYX1ZBTElEQVRPUl9DT05GSUcsXG4gICAgREVGQVVMVF9HTE9CQUxfVkFMSURBVElPTl9NRVNTQUdFU1xufSBmcm9tICcuL3ZhbGlkYXRvci5jbGFzcyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3ksIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlciB9IGZyb20gJy4vc3RyYXRlZ2llcyc7XG5cbmNvbnN0IGRlZmF1bHRWYWxpZGF0b3JDb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyA9IHtcbiAgICB2YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyLmJvb3RzdHJhcCgpLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlczoge31cbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdG9yTG9hZGVyIHtcbiAgICBwcml2YXRlIGNvbmZpZzogTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnO1xuXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2Uoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlcyAmJiB0aGlzLmNvbmZpZy5nbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIERFRkFVTFRfR0xPQkFMX1ZBTElEQVRJT05fTUVTU0FHRVNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWxpZGF0aW9uTWVzc2FnZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXM7XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCk6IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSkge1xuICAgICAgICAgICAgdGhpcy5jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgPSBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneUJ1aWxkZXIuYm9vdHN0cmFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5O1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0ZU9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy52YWxpZGF0ZU9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy52YWxpZGF0ZU9uID0gJ3N1Ym1pdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnZhbGlkYXRlT247XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBPcHRpb25hbCgpXG4gICAgICAgIEBJbmplY3QoTkdYX1ZBTElEQVRPUl9DT05GSUcpXG4gICAgICAgIGNvbmZpZzogTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnXG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFZhbGlkYXRvckNvbmZpZywgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgICAqIEBwYXJhbSBuYW1lIGZvcm1Db250cm9sIG5hbWUsIGUuZy4gdXNlcm5hbWUgb3IgZW1haWxcbiAgICAgKiBAcGFyYW0ga2V5IHZhbGlkYXRvciBuYW1lLCBlLmcuIHJlcXVpcmVkIG9yIHBhdHRlcm5cbiAgICAgKi9cbiAgICBnZXRFcnJvck1lc3NhZ2UobmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzPzogYW55KSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXSAmJiB0aGlzLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVtrZXldKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1ba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldERlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIC8vIGdldEVycm9yTWVzc2FnZXMobmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgLy8gICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgLy8gICAgIGZvciAoY29uc3QgdmFsaWRhdGlvbkVycm9yIGluIHZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAvLyAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmhhc093blByb3BlcnR5KHZhbGlkYXRpb25FcnJvcikpIHtcbiAgICAvLyAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHRoaXMuZ2V0RXJyb3JNZXNzYWdlKG5hbWUsIHZhbGlkYXRpb25FcnJvciwgdmFsaWRhdGlvbkVycm9yc1t2YWxpZGF0aW9uRXJyb3JdKSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIC8vIH1cblxuICAgIGFkZFZhbGlkYXRpb25NZXNzYWdlcyhtZXNzYWdlczogTmd4VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzLCBtZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgc2V0R2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzKHZhbGlkYXRpb25NZXNzYWdlczogRGljdGlvbmFyeTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlcyA9IHZhbGlkYXRpb25NZXNzYWdlcztcbiAgICB9XG59XG4iLCJmdW5jdGlvbiBtYXhPck1pbkxlbmd0aFRyYW5zZm9ybWVyKG1lc3NhZ2U6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzOiB7IHJlcXVpcmVkTGVuZ3RoOiBudW1iZXIgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZShge3JlcXVpcmVkTGVuZ3RofWAsIHZhbGlkYXRpb25FcnJvclZhbHVlcy5yZXF1aXJlZExlbmd0aC50b1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gbWF4VHJhbnNmb3JtZXIobWVzc2FnZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM6IHsgbWF4OiBudW1iZXI7IGFjdHVhbDogbnVtYmVyIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoYHttYXh9YCwgdmFsaWRhdGlvbkVycm9yVmFsdWVzLm1heC50b1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gbWlueFRyYW5zZm9ybWVyKG1lc3NhZ2U6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yVmFsdWVzOiB7IG1pbjogbnVtYmVyOyBhY3R1YWw6IG51bWJlciB9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKGB7bWlufWAsIHZhbGlkYXRpb25FcnJvclZhbHVlcy5taW4udG9TdHJpbmcoKSk7XG59XG5cbmNvbnN0IHRyYW5zZm9ybWVyTWFwID0ge1xuICAgIG1pbmxlbmd0aDogbWF4T3JNaW5MZW5ndGhUcmFuc2Zvcm1lcixcbiAgICBtYXhsZW5ndGg6IG1heE9yTWluTGVuZ3RoVHJhbnNmb3JtZXIsXG4gICAgbWF4OiBtYXhUcmFuc2Zvcm1lcixcbiAgICBtaW46IG1pbnhUcmFuc2Zvcm1lclxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1lc3NhZ2UodmFsaWRhdG9yTmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlczogYW55KSB7XG4gICAgaWYgKHRyYW5zZm9ybWVyTWFwW3ZhbGlkYXRvck5hbWVdICYmIHZhbGlkYXRpb25FcnJvclZhbHVlcykge1xuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZXJNYXBbdmFsaWRhdG9yTmFtZV0obWVzc2FnZSwgdmFsaWRhdGlvbkVycm9yVmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5nRm9ybSxcbiAgICBBYnN0cmFjdENvbnRyb2wsXG4gICAgVmFsaWRhdGlvbkVycm9ycyxcbiAgICBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgRm9ybUNvbnRyb2xOYW1lLFxuICAgIE5nQ29udHJvbFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JMb2FkZXIgfSBmcm9tICcuL3ZhbGlkYXRvci1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hWYWxpZGF0b3JDb25maWcsIERpY3Rpb25hcnkgfSBmcm9tICcuL3ZhbGlkYXRvci5jbGFzcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLXRyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbmdGb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmU7XG5cbiAgICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9jb25maWc6IE5neFZhbGlkYXRvckNvbmZpZztcblxuICAgIHByaXZhdGUgX2NvbnRyb2xzOiBOZ0NvbnRyb2xbXSA9IFtdO1xuXG4gICAgLy8gcHVibGljIGVycm9yczogc3RyaW5nW107XG5cbiAgICAvLyDDqMKuwrDDpcK9wpXDpsKJwoDDpsKcwonDpcKFwoPDp8K0wqDDp8KawoTDqcKqwozDqMKvwoHDpMK/wqHDpsKBwq9cbiAgICBwdWJsaWMgdmFsaWRhdGlvbnM6IERpY3Rpb25hcnk8e1xuICAgICAgICBoYXNFcnJvcj86IGJvb2xlYW47XG4gICAgICAgIGVycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICB9PiA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKSB7XG4gICAgICAgIGNvbnN0IHN0cmF0ZWd5ID1cbiAgICAgICAgICAgICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KSB8fFxuICAgICAgICAgICAgdGhpcy50aHlGb3JtVmFsaWRhdGVMb2FkZXIudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgICAgIGlmICghc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdmFsaWRhdGlvbiBkaXNwbGF5IHN0cmF0ZWd5IGlzIG51bGxgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0RWxlbWVudChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50W25hbWVdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9JyR7bmFtZX0nXWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJFbGVtZW50RXJyb3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25zW25hbWVdICYmIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnNbbmFtZV0uZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fZ2V0VmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKS5yZW1vdmVFcnJvcih0aGlzLl9nZXRFbGVtZW50KG5hbWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90cnlHZXRWYWxpZGF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24obmFtZSwgdGhpcy5fZ2V0Q29udHJvbEJ5TmFtZShuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbnNbbmFtZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUZvcm1Db250cm9sVmFsaWRhdGlvbihuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nQ29udHJvbCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25zW25hbWVdID0ge1xuICAgICAgICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlczogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN0Rm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb24uaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2UobmFtZTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JOYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlcz86IGFueSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLl9jb25maWcgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMgJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV0gJiZcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1bdmFsaWRhdGlvbkVycm9yTmFtZV1cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5fY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVt2YWxpZGF0aW9uRXJyb3JOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci5nZXRFcnJvck1lc3NhZ2UobmFtZSwgdmFsaWRhdGlvbkVycm9yTmFtZSwgdmFsaWRhdGlvbkVycm9yVmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1NZXNzYWdlKHZhbGlkYXRpb25FcnJvck5hbWUsIG1lc3NhZ2UsIHZhbGlkYXRpb25FcnJvclZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKG5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yczogVmFsaWRhdGlvbkVycm9ycykge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb25FcnJvciBpbiB2YWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0aW9uRXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZShuYW1lLCB2YWxpZGF0aW9uRXJyb3IsIHZhbGlkYXRpb25FcnJvcnNbdmFsaWRhdGlvbkVycm9yXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWU6IHN0cmluZywgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IHRoaXMuX3RyeUdldFZhbGlkYXRpb24obmFtZSk7XG4gICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlcyA9IGVycm9yTWVzc2FnZXM7XG4gICAgICAgIHZhbGlkYXRpb24uaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLl9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpLnNob3dFcnJvcih0aGlzLl9nZXRFbGVtZW50KG5hbWUpLCBlcnJvck1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdG9yQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGh5Rm9ybVZhbGlkYXRlTG9hZGVyOiBOZ3hWYWxpZGF0b3JMb2FkZXIpIHt9XG5cbiAgICBpbml0aWFsaXplKG5nRm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlLCBmb3JtRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fbmdGb3JtID0gbmdGb3JtO1xuICAgICAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIH1cblxuICAgIGluaXRpYWxpemVGb3JtQ29udHJvbHNWYWxpZGF0aW9uKGNvbnRyb2xzOiBOZ0NvbnRyb2xbXSkge1xuICAgICAgICBpZiAoKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcudmFsaWRhdGVPbiA9PT0gJ2JsdXInKSB8fCB0aGlzLnRoeUZvcm1WYWxpZGF0ZUxvYWRlci52YWxpZGF0ZU9uID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIChjb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogTmdDb250cm9sKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jb250cm9scy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBjb250cm9sLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVGb3JtQ29udHJvbFZhbGlkYXRpb24oY29udHJvbC5uYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KGNvbnRyb2wubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uYmx1ciA9IChldmVudDogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sKGNvbnRyb2wubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9scyA9IGNvbnRyb2xzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VmFsaWRhdG9yQ29uZmlnKGNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDb250cm9scygpIHtcbiAgICAgICAgaWYgKHRoaXMuX25nRm9ybSBpbnN0YW5jZW9mIE5nRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9uZ0Zvcm0gYXMgTmdGb3JtKS5jb250cm9scztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ0Zvcm0gaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0ge307XG4gICAgICAgICAgICAodGhpcy5fbmdGb3JtIGFzIEZvcm1Hcm91cERpcmVjdGl2ZSkuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbHNbZGlyZWN0aXZlLm5hbWVdID0gZGlyZWN0aXZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDb250cm9sQnlOYW1lKG5hbWU6IHN0cmluZyk6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5fZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzW25hbWVdO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJFbGVtZW50RXJyb3IobmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9nZXRDb250cm9sQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSB0aGlzLl9nZXRWYWxpZGF0aW9uTWVzc2FnZXMobmFtZSwgY29udHJvbC5lcnJvcnMpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Q29udHJvbFZhbGlkYXRpb25FcnJvcihuYW1lLCBlcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIC8vIMOkwrjCu8OowqbCgcOmwpjCryDDpsKXwqDDpsKzwpXDpsKjwoDDpsK1wovDpcKIwrAgbmdGb3JtIMOnwprChCBjb250cm9scyDDp8KawoTDpcKPwpjDpcKMwpbDr8K8wozDpsKIwpbDqMKAwoXDpsKYwq/DpsKIwpHDpsKywqHDpsKcwonDpsKJwr7DpcKIwrBcbiAgICAgICAgLy8gw6nCqsKMw6jCr8KBw6fCmsKEw6bCl8K2w6XCgMKZw6XCvsKqw6fCjsKvIG5nRm9ybSDDp8KawoQgY29udHJvbHMgw6nCqsKMw6jCr8KBXG4gICAgICAgIC8vIMOlwo/CkcOnwo7CsMOmwrLCocOmwpzCiSB2YWxpZGF0aW9uIMOlwojCncOlwqfCi8OlwozClsOkwrjCgMOkwrjCqsOvwrzCjMOlwrfCssOnwrvCj8Olwq3CmMOlwpzCqMOkwrjCjcOkwrzCmsOpwofCjcOmwpbCsMOlwojCncOlwqfCi8OlwozClsOvwrzCjMOkwr/CncOlwq3CmMOnwrzCk8Olwq3CmMOmwpXCsMOmwo3CrlxuICAgICAgICBjb25zdCBjb250cm9scyA9IHRoaXMuX2dldENvbnRyb2xzKCk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBjb250cm9scykge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5R2V0VmFsaWRhdGlvbihuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDDp8KnwrvDqcKZwqTDpcK3wrLDp8K7wo/DpMK4wo3DpcKtwpjDpcKcwqjDp8KawoQgdmFsaWRhdGlvblxuICAgICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMudmFsaWRhdGlvbnMpO1xuICAgICAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgkZXZlbnQ/OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLl9uZ0Zvcm0ub25TdWJtaXQoJGV2ZW50KTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZ0Zvcm0udmFsaWQ7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX25nRm9ybS5yZXNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy52YWxpZGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXN0Rm9ybUNvbnRyb2xWYWxpZGF0aW9uKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0NvbnRyb2xBc0Vycm9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyRWxlbWVudEVycm9yKG5hbWUpO1xuICAgICAgICB0aGlzLl9zZXRDb250cm9sVmFsaWRhdGlvbkVycm9yKG5hbWUsIFttZXNzYWdlXSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgT25Jbml0LFxuICAgIE5nWm9uZSxcbiAgICBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuLi92YWxpZGF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBOZ0Zvcm0sIENvbnRyb2xDb250YWluZXIsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neFZhbGlkYXRvckNvbmZpZyB9IGZyb20gJy4uL3ZhbGlkYXRvci5jbGFzcyc7XG5cbmNvbnN0IEtFWV9DT0RFU19FTlRFUiA9IDEzO1xuXG4vLyAxLiBzdWJtaXQgw6bCjMKJIEVudGVyIMOpwpTCrsOmwo/CkMOkwrrCpCwgVGV4dGFyZSDDqcKZwqTDpcKkwpbDr8K8wozDqcKcwoDDqMKmwoHDpsKMwokgQ3RybCB8IENvbW1hbmQgKyBFbnRlciDDpsKPwpDDpMK6wqRcbi8vIDIuIGFsd2F5c1N1Ym1pdCDDpMK4wo3Dp8KuwqHDpsKYwq/DpcKTwqrDpMK4wqrDpcKFwoPDp8K0wqAgw6bCjMKJIEVudGVyIMOpwpTCrsOpwoPCvcOmwo/CkMOkwrrCpFxuLy8gMy4gZm9yYmlkU3VibWl0IFxiRW50ZXIgw6nClMKuw6fCpsKBw6bCrcKiw6bCj8KQw6TCusKkXG4vLyDDqcK7wpjDqMKuwqQgc3VibWl0XG5leHBvcnQgZW51bSBOZ3hFbnRlcktleU1vZGUge1xuICAgIHN1Ym1pdCA9ICdzdWJtaXQnLFxuICAgIGFsd2F5c1N1Ym1pdCA9ICdhbHdheXNTdWJtaXQnLFxuICAgIGZvcmJpZFN1Ym1pdCA9ICdmb3JiaWRTdWJtaXQnXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZm9ybVtuZ3hGb3JtVmFsaWRhdG9yXSxmb3JtW25neC1mb3JtLXZhbGlkYXRvcl0nLFxuICAgIHByb3ZpZGVyczogW05neEZvcm1WYWxpZGF0b3JTZXJ2aWNlXSxcbiAgICBleHBvcnRBczogJ25neEZvcm1WYWxpZGF0b3InXG59KVxuZXhwb3J0IGNsYXNzIE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ0NvbnRyb2wsIHtcbiAgICAgICAgZGVzY2VuZGFudHM6IHRydWVcbiAgICB9KVxuICAgIHB1YmxpYyBjb250cm9sczogUXVlcnlMaXN0PE5nQ29udHJvbD47XG5cbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlOiAoKSA9PiB2b2lkO1xuXG4gICAgb25TdWJtaXRTdWNjZXNzOiAoJGV2ZW50OiBhbnkpID0+IHZvaWQ7XG5cbiAgICBASW5wdXQoKSBlbnRlcktleU1vZGU6IE5neEVudGVyS2V5TW9kZTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5neEZvcm1WYWxpZGF0b3JDb25maWcoY29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3Iuc2V0VmFsaWRhdG9yQ29uZmlnKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmd4Rm9ybVZhbGlkYXRvcihjb25maWc6IE5neFZhbGlkYXRvckNvbmZpZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5zZXRWYWxpZGF0b3JDb25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBuZ0Zvcm06IENvbnRyb2xDb250YWluZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICdrZXlkb3duJyxcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbGlkYXRvci5pbml0aWFsaXplKHRoaXMubmdGb3JtIGFzIE5nRm9ybSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24odGhpcy5jb250cm9scy50b0FycmF5KCkpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzLmNoYW5nZXMuc3Vic2NyaWJlKGNvbnRyb2xzID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmluaXRpYWxpemVGb3JtQ29udHJvbHNWYWxpZGF0aW9uKHRoaXMuY29udHJvbHMudG9BcnJheSgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3VibWl0KCRldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKCRldmVudCkgJiYgdGhpcy5vblN1Ym1pdFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXRTdWNjZXNzKCRldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRSdW5JblpvbmUoJGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXQoJGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25LZXlkb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5wdXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBrZXkgPSAkZXZlbnQud2hpY2ggfHwgJGV2ZW50LmtleUNvZGU7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWV9DT0RFU19FTlRFUiAmJiBjdXJyZW50SW5wdXQudGFnTmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVudGVyS2V5TW9kZSB8fCB0aGlzLmVudGVyS2V5TW9kZSA9PT0gTmd4RW50ZXJLZXlNb2RlLnN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIC8vIFRFWFRBUkVBIEN0cmwgKyBFbnRlciDDpsKIwpbDqMKAwoUgQ29tbWFuZCArIEVudGVyIMOpwpjCu8Omwq3Colxiw6nCu8KYw6jCrsKkw6jCocKMw6TCuMK6w6XCucK2w6bCj8KQw6TCusKkXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbnB1dC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQuY3RybEtleSB8fCAkZXZlbnQubWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gw6TCuMKNw6bCmMKvIFRFWFRBUkVBIEVudGVyIMOpwpjCu8Omwq3Colxiw6nCu8KYw6jCrsKkw6jCocKMw6TCuMK6w6XCucK2w6bCj8KQw6TCusKkXG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbnRlcktleU1vZGUgPT09IE5neEVudGVyS2V5TW9kZS5hbHdheXNTdWJtaXQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFJ1bkluWm9uZSgkZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neEZvcm1TdWJtaXRdLFtuZ3gtZm9ybS1zdWJtaXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBPdXRwdXQoKSBuZ3hGb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdmFsaWRhdG9yRGlyZWN0aXZlOiBOZ3hGb3JtVmFsaWRhdG9yRGlyZWN0aXZlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yRGlyZWN0aXZlLm9uU3VibWl0U3VjY2VzcyA9ICgkZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ3hGb3JtU3VibWl0LmVtaXQoJGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25TdWJtaXQoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JEaXJlY3RpdmUuc3VibWl0KCRldmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRvcnMge1xuICAgIHN0YXRpYyB1bmlxdWVDaGVja1ZhbGlkYXRvcih1bmlxdWVDaGVja0ZuOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoXG4gICAgICAgICAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2xcbiAgICAgICAgKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9PiB7XG4gICAgICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmlxdWVDaGVja0ZuKGNvbnRyb2wudmFsdWUpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIG1hcChpc1VuaXF1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNVbmlxdWUgPyB7IG5neFVuaXF1ZUNoZWNrOiB7IHZhbHVlOiB0cnVlIH0gfSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQXR0cmlidXRlLCBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBOR19WQUxJREFUT1JTLFxuICAgIFZhbGlkYXRvcixcbiAgICBBYnN0cmFjdENvbnRyb2wsXG4gICAgVmFsaWRhdG9ycyxcbiAgICBWYWxpZGF0b3JGbixcbiAgICBOR19BU1lOQ19WQUxJREFUT1JTLFxuICAgIEFzeW5jVmFsaWRhdG9yLFxuICAgIFZhbGlkYXRpb25FcnJvcnNcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFZhbGlkYXRvcnMgfSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6XG4gICAgICAgICdbbmd4TWluXVtmb3JtQ29udHJvbE5hbWVdLFtuZ3hNaW5dW2Zvcm1Db250cm9sXSxbbmd4TWluXVtuZ01vZGVsXSwnLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWluVmFsaWRhdG9yRGlyZWN0aXZlKSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1pblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuXG4gICAgQElucHV0KCkgcHVibGljIHNldCBuZ3hNaW4odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWluKHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGNvbnRyb2wpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6XG4gICAgICAgICdbbmd4TWF4XVtmb3JtQ29udHJvbE5hbWVdLFtuZ3hNYXhdW2Zvcm1Db250cm9sXSxbbmd4TWF4XVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXhWYWxpZGF0b3JEaXJlY3RpdmUpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF4VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgc2V0IG5neE1heCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5tYXgocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoY29udHJvbCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hVbmlxdWVDaGVja11bZm9ybUNvbnRyb2xOYW1lXSxbbmd4VW5pcXVlQ2hlY2tdW2Zvcm1Db250cm9sXSxbbmd4VW5pcXVlQ2hlY2tdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfQVNZTkNfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFVuaXF1ZUNoZWNrRGlyZWN0aXZlIGltcGxlbWVudHMgQXN5bmNWYWxpZGF0b3Ige1xuICAgIEBJbnB1dCgpIG5neFVuaXF1ZUNoZWNrOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuIHwgbnVsbD4gPSAodmFsdWU6IGFueSkgPT4gb2YobnVsbCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnM+IHwgT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzPiB7XG4gICAgICAgIHJldHVybiBOZ3hWYWxpZGF0b3JzLnVuaXF1ZUNoZWNrVmFsaWRhdG9yKHRoaXMubmd4VW5pcXVlQ2hlY2spKGNvbnRyb2wpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neEZvcm1TdWJtaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlJztcblxuLy8gaW1wb3J0IHsgTmd4VW5pcXVlQ2hlY2tEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS11bmlxdWUtY2hlY2suZGlyZWN0aXZlJztcbmltcG9ydCB7IE1heFZhbGlkYXRvckRpcmVjdGl2ZSwgTWluVmFsaWRhdG9yRGlyZWN0aXZlLCBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcblxuaW1wb3J0IHsgTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnLCBOR1hfVkFMSURBVE9SX0NPTkZJRyB9IGZyb20gJy4vdmFsaWRhdG9yLmNsYXNzJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICAgIE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgTmd4Rm9ybVN1Ym1pdERpcmVjdGl2ZSxcbiAgICBOZ3hVbmlxdWVDaGVja0RpcmVjdGl2ZSxcbiAgICBNYXhWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgTWluVmFsaWRhdG9yRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZV0sXG4gICAgZXhwb3J0czogWy4uLmRlY2xhcmF0aW9ucywgRm9ybXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRvck1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hWYWxpZGF0b3JNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IE5HWF9WQUxJREFUT1JfQ09ORklHLFxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==