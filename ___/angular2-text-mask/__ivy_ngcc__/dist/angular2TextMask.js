"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var textMaskCore_1 = require("text-mask-core/dist/textMaskCore");
var ɵngcc0 = require('@angular/core');
var TextMaskConfig = /** @class */ (function () {
    function TextMaskConfig() {
    }
    return TextMaskConfig;
}());
exports.TextMaskConfig = TextMaskConfig;
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = platform_browser_1.ɵgetDOM() ? platform_browser_1.ɵgetDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
var MaskedInputDirective = /** @class */ (function () {
    function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype._setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    MaskedInputDirective.prototype._compositionStart = function () { this._composing = true; };
    MaskedInputDirective.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this._handleInput(value);
    };
    /** @nocollapse */
    MaskedInputDirective.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [forms_1.COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    MaskedInputDirective.propDecorators = {
        'textMaskConfig': [{ type: core_1.Input, args: ['textMask',] },],
    };
MaskedInputDirective.ɵfac = function MaskedInputDirective_Factory(t) { return new (t || MaskedInputDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(forms_1.COMPOSITION_BUFFER_MODE, 8)); };
MaskedInputDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaskedInputDirective, selectors: [["", "textMask", ""]], hostBindings: function MaskedInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function MaskedInputDirective_input_HostBindingHandler($event) { return ctx._handleInput($event.target.value); })("blur", function MaskedInputDirective_blur_HostBindingHandler($event) { return ctx.onTouched(); })("compositionstart", function MaskedInputDirective_compositionstart_HostBindingHandler($event) { return ctx._compositionStart(); })("compositionend", function MaskedInputDirective_compositionend_HostBindingHandler($event) { return ctx._compositionEnd($event.target.value); });
    } }, inputs: { textMaskConfig: ["textMask", "textMaskConfig"] }, exportAs: ["textMask"], features: [ɵngcc0.ɵɵProvidersFeature([exports.MASKEDINPUT_VALUE_ACCESSOR]), ɵngcc0.ɵɵNgOnChangesFeature()] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaskedInputDirective, [{
        type: core_1.Directive,
        args: [{
                host: {
                    '(input)': '_handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '_compositionStart()',
                    '(compositionend)': '_compositionEnd($event.target.value)'
                },
                selector: '[textMask]',
                exportAs: 'textMask',
                providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: core_1.Optional
            }, {
                type: core_1.Inject,
                args: [forms_1.COMPOSITION_BUFFER_MODE]
            }] }]; }, { textMaskConfig: [{
            type: core_1.Input,
            args: ['textMask']
        }] }); })();
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = /** @class */ (function () {
    function TextMaskModule() {
    }
    /** @nocollapse */
    TextMaskModule.ctorParameters = function () { return []; };
TextMaskModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TextMaskModule });
TextMaskModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TextMaskModule_Factory(t) { return new (t || TextMaskModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TextMaskModule, { declarations: [MaskedInputDirective], exports: [MaskedInputDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextMaskModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [MaskedInputDirective],
                exports: [MaskedInputDirective]
            }]
    }], function () { return []; }, null); })();
    return TextMaskModule;
}());
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = require("text-mask-core/dist/textMaskCore");
exports.conformToMask = textMaskCore_2.conformToMask;

//# sourceMappingURL=angular2TextMask.js.map