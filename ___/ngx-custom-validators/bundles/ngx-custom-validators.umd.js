(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-custom-validators', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory(global['ngx-custom-validators'] = {}, global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    function isDate(obj) {
        try {
            var date = new Date(obj);
            return !isNaN(date.getTime());
        }
        catch (e) {
            return false;
        }
    }
    function parseDate(obj) {
        try {
            // Moment.js
            if (obj._d instanceof Date) {
                var d = obj._d;
                var month = +d.getMonth() + 1;
                var day = +d.getDate();
                return d.getFullYear() + "-" + formatDayOrMonth(month) + "-" + formatDayOrMonth(day);
            }
            // NgbDateStruct
            if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
                var month = +obj.month;
                var day = +obj.day;
                return obj.year + "-" + formatDayOrMonth(month) + "-" + formatDayOrMonth(day);
            }
        }
        catch (e) { }
        return obj;
    }
    function formatDayOrMonth(month) {
        return month < 10 ? "0" + month : month;
    }

    var arrayLength = function (value) {
        return function (control) {
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var obj = control.value;
            return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
        };
    };

    var ARRAY_LENGTH_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return ArrayLengthValidator; }),
        multi: true
    };
    var ArrayLengthValidator = /** @class */ (function () {
        function ArrayLengthValidator() {
        }
        ArrayLengthValidator.prototype.ngOnInit = function () {
            this.validator = arrayLength(this.arrayLength);
        };
        ArrayLengthValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'arrayLength') {
                    this.validator = arrayLength(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        ArrayLengthValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        ArrayLengthValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], ArrayLengthValidator.prototype, "arrayLength", void 0);
        ArrayLengthValidator = __decorate([
            core.Directive({
                selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
                providers: [ARRAY_LENGTH_VALIDATOR]
            })
        ], ArrayLengthValidator);
        return ArrayLengthValidator;
    }());

    var base64 = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { base64: true };
    };

    var BASE64_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return Base64Validator; }),
        multi: true
    };
    var Base64Validator = /** @class */ (function () {
        function Base64Validator() {
        }
        Base64Validator.prototype.validate = function (c) {
            return base64(c);
        };
        Base64Validator = __decorate([
            core.Directive({
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            })
        ], Base64Validator);
        return Base64Validator;
    }());

    var creditCard = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        var sanitized = v.replace(/[^0-9]+/g, '');
        // problem with chrome
        /* tslint:disable */
        if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized))) {
            return { creditCard: true };
        }
        /* tslint:enable */
        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;
        for (var i = sanitized.length - 1; i >= 0; i--) {
            digit = sanitized.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += ((tmpNum % 10) + 1);
                }
                else {
                    sum += tmpNum;
                }
            }
            else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        if (Boolean((sum % 10) === 0 ? sanitized : false)) {
            return null;
        }
        return { creditCard: true };
    };

    var CREDIT_CARD_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return CreditCardValidator; }),
        multi: true
    };
    var CreditCardValidator = /** @class */ (function () {
        function CreditCardValidator() {
        }
        CreditCardValidator.prototype.validate = function (c) {
            return creditCard(c);
        };
        CreditCardValidator = __decorate([
            core.Directive({
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            })
        ], CreditCardValidator);
        return CreditCardValidator;
    }());

    var dateISO = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
    };

    var DATE_ISO_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return DateISOValidator; }),
        multi: true
    };
    var DateISOValidator = /** @class */ (function () {
        function DateISOValidator() {
        }
        DateISOValidator.prototype.validate = function (c) {
            return dateISO(c);
        };
        DateISOValidator = __decorate([
            core.Directive({
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            })
        ], DateISOValidator);
        return DateISOValidator;
    }());

    var date = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        v = parseDate(v);
        return isDate(v) ? null : { date: true };
    };

    var DATE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return DateValidator; }),
        multi: true
    };
    var DateValidator = /** @class */ (function () {
        function DateValidator() {
        }
        DateValidator.prototype.validate = function (c) {
            return date(c);
        };
        DateValidator = __decorate([
            core.Directive({
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            })
        ], DateValidator);
        return DateValidator;
    }());

    var digits = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        return /^\d+$/.test(v) ? null : { digits: true };
    };

    var DIGITS_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return DigitsValidator; }),
        multi: true
    };
    var DigitsValidator = /** @class */ (function () {
        function DigitsValidator() {
        }
        DigitsValidator.prototype.validate = function (c) {
            return digits(c);
        };
        DigitsValidator = __decorate([
            core.Directive({
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            })
        ], DigitsValidator);
        return DigitsValidator;
    }());

    var email = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        /* tslint:disable */
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
        /* tslint:enable */
    };

    var EMAIL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return EmailValidator; }),
        multi: true
    };
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.validate = function (c) {
            return email(c);
        };
        EmailValidator = __decorate([
            core.Directive({
                selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
                providers: [EMAIL_VALIDATOR]
            })
        ], EmailValidator);
        return EmailValidator;
    }());

    var equalTo = function (equalControl) {
        var subscribe = false;
        return function (control) {
            if (!subscribe) {
                subscribe = true;
                equalControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            var v = control.value;
            return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
        };
    };

    var EQUAL_TO_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return EqualToValidator; }),
        multi: true
    };
    var EqualToValidator = /** @class */ (function () {
        function EqualToValidator() {
        }
        EqualToValidator.prototype.ngOnInit = function () {
            this.validator = equalTo(this.equalTo);
        };
        EqualToValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        __decorate([
            core.Input()
        ], EqualToValidator.prototype, "equalTo", void 0);
        EqualToValidator = __decorate([
            core.Directive({
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            })
        ], EqualToValidator);
        return EqualToValidator;
    }());

    var equal = function (val) {
        return function (control) {
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            return val === v ? null : { equal: { value: val } };
        };
    };

    var EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return EqualValidator; }),
        multi: true
    };
    var EqualValidator = /** @class */ (function () {
        function EqualValidator() {
        }
        EqualValidator.prototype.ngOnInit = function () {
            this.validator = equal(this.equal);
        };
        EqualValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'equal') {
                    this.validator = equal(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        EqualValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        EqualValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], EqualValidator.prototype, "equal", void 0);
        EqualValidator = __decorate([
            core.Directive({
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            })
        ], EqualValidator);
        return EqualValidator;
    }());

    var gte = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v >= +value ? null : { gte: { value: value } };
        };
    };

    var GREATER_THAN_EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return GreaterThanEqualValidator; }),
        multi: true
    };
    var GreaterThanEqualValidator = /** @class */ (function () {
        function GreaterThanEqualValidator() {
        }
        GreaterThanEqualValidator.prototype.ngOnInit = function () {
            this.validator = gte(this.gte);
        };
        GreaterThanEqualValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'gte') {
                    this.validator = gte(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        GreaterThanEqualValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        GreaterThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], GreaterThanEqualValidator.prototype, "gte", void 0);
        GreaterThanEqualValidator = __decorate([
            core.Directive({
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            })
        ], GreaterThanEqualValidator);
        return GreaterThanEqualValidator;
    }());

    var gt = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v > +value ? null : { gt: { value: value } };
        };
    };

    var GREATER_THAN_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return GreaterThanValidator; }),
        multi: true
    };
    var GreaterThanValidator = /** @class */ (function () {
        function GreaterThanValidator() {
        }
        GreaterThanValidator.prototype.ngOnInit = function () {
            this.validator = gt(this.gt);
        };
        GreaterThanValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'gt') {
                    this.validator = gt(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        GreaterThanValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        GreaterThanValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], GreaterThanValidator.prototype, "gt", void 0);
        GreaterThanValidator = __decorate([
            core.Directive({
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            })
        ], GreaterThanValidator);
        return GreaterThanValidator;
    }());

    var json = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        try {
            var obj = JSON.parse(v);
            if (Boolean(obj) && typeof obj === 'object') {
                return null;
            }
        }
        catch (e) { }
        return { json: true };
    };

    var JSON_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return JSONValidator; }),
        multi: true
    };
    var JSONValidator = /** @class */ (function () {
        function JSONValidator() {
        }
        JSONValidator.prototype.validate = function (c) {
            return json(c);
        };
        JSONValidator = __decorate([
            core.Directive({
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            })
        ], JSONValidator);
        return JSONValidator;
    }());

    var lte = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v <= +value ? null : { lte: { value: value } };
        };
    };

    var LESS_THAN_EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return LessThanEqualValidator; }),
        multi: true
    };
    var LessThanEqualValidator = /** @class */ (function () {
        function LessThanEqualValidator() {
        }
        LessThanEqualValidator.prototype.ngOnInit = function () {
            this.validator = lte(this.lte);
        };
        LessThanEqualValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'lte') {
                    this.validator = lte(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        LessThanEqualValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        LessThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], LessThanEqualValidator.prototype, "lte", void 0);
        LessThanEqualValidator = __decorate([
            core.Directive({
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            })
        ], LessThanEqualValidator);
        return LessThanEqualValidator;
    }());

    var lt = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v < +value ? null : { lt: { value: value } };
        };
    };

    var LESS_THAN_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return LessThanValidator; }),
        multi: true
    };
    var LessThanValidator = /** @class */ (function () {
        function LessThanValidator() {
        }
        LessThanValidator.prototype.ngOnInit = function () {
            this.validator = lt(this.lt);
        };
        LessThanValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'lt') {
                    this.validator = lt(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        LessThanValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        LessThanValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], LessThanValidator.prototype, "lt", void 0);
        LessThanValidator = __decorate([
            core.Directive({
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            })
        ], LessThanValidator);
        return LessThanValidator;
    }());

    var maxDate = function (maxInput) {
        var value;
        var subscribe = false;
        var maxValue = maxInput;
        var isForm = maxInput instanceof forms.FormControl || maxInput instanceof forms.NgModel;
        return function (control) {
            if (!subscribe && isForm) {
                subscribe = true;
                maxInput.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            if (isForm) {
                maxValue = maxInput.value;
            }
            value = parseDate(maxValue);
            if (!isDate(value) && !(value instanceof Function)) {
                if (value == null) {
                    return null;
                }
                else if (isForm) {
                    return { maxDate: { error: 'maxDate is invalid' } };
                }
                else {
                    throw Error('maxDate value must be or return a formatted date');
                }
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var d = new Date(parseDate(control.value)).getTime();
            if (!isDate(d)) {
                return { value: true };
            }
            if (value instanceof Function) {
                value = value();
            }
            return d <= new Date(value).getTime() ? null : (isForm ? { maxDate: { control: maxInput, value: maxInput.value } } : { maxDate: { value: maxValue, control: undefined } });
        };
    };

    var MAX_DATE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MaxDateValidator; }),
        multi: true
    };
    var MaxDateValidator = /** @class */ (function () {
        function MaxDateValidator() {
        }
        MaxDateValidator.prototype.ngOnInit = function () {
            this.validator = maxDate(this.maxDate);
        };
        MaxDateValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'maxDate') {
                    this.validator = maxDate(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        MaxDateValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        MaxDateValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], MaxDateValidator.prototype, "maxDate", void 0);
        MaxDateValidator = __decorate([
            core.Directive({
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            })
        ], MaxDateValidator);
        return MaxDateValidator;
    }());

    var max = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v <= +value ? null : { max: { value: value } };
        };
    };

    var MAX_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MaxValidator; }),
        multi: true
    };
    var MaxValidator = /** @class */ (function () {
        function MaxValidator() {
        }
        MaxValidator.prototype.ngOnInit = function () {
            this.validator = max(this.max);
        };
        MaxValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'max') {
                    this.validator = max(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        MaxValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        MaxValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], MaxValidator.prototype, "max", void 0);
        MaxValidator = __decorate([
            core.Directive({
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            })
        ], MaxValidator);
        return MaxValidator;
    }());

    var minDate = function (minInput) {
        var value;
        var subscribe = false;
        var minValue = minInput;
        var isForm = minInput instanceof forms.FormControl || minInput instanceof forms.NgModel;
        return function (control) {
            if (!subscribe && isForm) {
                subscribe = true;
                minInput.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            if (isForm) {
                minValue = minInput.value;
            }
            value = parseDate(minValue);
            if (!isDate(value) && !(value instanceof Function)) {
                if (value == null) {
                    return null;
                }
                else if (isForm) {
                    return { minDate: { error: 'minDate is invalid' } };
                }
                else {
                    throw Error('minDate value must be or return a formatted date');
                }
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var d = new Date(parseDate(control.value)).getTime();
            if (!isDate(d)) {
                return { value: true };
            }
            if (value instanceof Function) {
                value = value();
            }
            return d >= new Date(value).getTime() ? null : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
        };
    };

    var MIN_DATE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MinDateValidator; }),
        multi: true
    };
    var MinDateValidator = /** @class */ (function () {
        function MinDateValidator() {
        }
        MinDateValidator.prototype.ngOnInit = function () {
            this.validator = minDate(this.minDate);
        };
        MinDateValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'minDate') {
                    this.validator = minDate(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        MinDateValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        MinDateValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], MinDateValidator.prototype, "minDate", void 0);
        MinDateValidator = __decorate([
            core.Directive({
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            })
        ], MinDateValidator);
        return MinDateValidator;
    }());

    var min = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v >= +value ? null : { min: { value: value } };
        };
    };

    var MIN_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MinValidator; }),
        multi: true
    };
    var MinValidator = /** @class */ (function () {
        function MinValidator() {
        }
        MinValidator.prototype.ngOnInit = function () {
            this.validator = min(this.min);
        };
        MinValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'min') {
                    this.validator = min(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        MinValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        MinValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], MinValidator.prototype, "min", void 0);
        MinValidator = __decorate([
            core.Directive({
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            })
        ], MinValidator);
        return MinValidator;
    }());

    var notEqualTo = function (notEqualControl) {
        var subscribe = false;
        return function (control) {
            if (!subscribe) {
                subscribe = true;
                notEqualControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            var v = control.value;
            if (notEqualControl.value == null && v == null) {
                return null;
            }
            return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
        };
    };

    var NOT_EQUAL_TO_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return NotEqualToValidator; }),
        multi: true
    };
    var NotEqualToValidator = /** @class */ (function () {
        function NotEqualToValidator() {
        }
        NotEqualToValidator.prototype.ngOnInit = function () {
            this.validator = notEqualTo(this.notEqualTo);
        };
        NotEqualToValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        __decorate([
            core.Input()
        ], NotEqualToValidator.prototype, "notEqualTo", void 0);
        NotEqualToValidator = __decorate([
            core.Directive({
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            })
        ], NotEqualToValidator);
        return NotEqualToValidator;
    }());

    var notEqual = function (val) {
        return function (control) {
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            return val !== v ? null : { notEqual: { value: val } };
        };
    };

    var NOT_EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return NotEqualValidator; }),
        multi: true
    };
    var NotEqualValidator = /** @class */ (function () {
        function NotEqualValidator() {
        }
        NotEqualValidator.prototype.ngOnInit = function () {
            this.validator = notEqual(this.notEqual);
        };
        NotEqualValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'notEqual') {
                    this.validator = notEqual(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        NotEqualValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        NotEqualValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], NotEqualValidator.prototype, "notEqual", void 0);
        NotEqualValidator = __decorate([
            core.Directive({
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            })
        ], NotEqualValidator);
        return NotEqualValidator;
    }());

    var number = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
    };

    var NUMBER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return NumberValidator; }),
        multi: true
    };
    var NumberValidator = /** @class */ (function () {
        function NumberValidator() {
        }
        NumberValidator.prototype.validate = function (c) {
            return number(c);
        };
        NumberValidator = __decorate([
            core.Directive({
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            })
        ], NumberValidator);
        return NumberValidator;
    }());

    var property = function (value) {
        return function (control) {
            var e_1, _a;
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var properties = value.split(',');
            var obj = control.value;
            var isValid = true;
            try {
                for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                    var prop = properties_1_1.value;
                    if (obj[prop] == null) {
                        isValid = false;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return isValid ? null : { hasProperty: { value: value } };
        };
    };

    var PROPERTY_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return PropertyValidator; }),
        multi: true
    };
    var PropertyValidator = /** @class */ (function () {
        function PropertyValidator() {
        }
        PropertyValidator.prototype.ngOnInit = function () {
            this.validator = property(this.property);
        };
        PropertyValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'property') {
                    this.validator = property(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        PropertyValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        PropertyValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], PropertyValidator.prototype, "property", void 0);
        PropertyValidator = __decorate([
            core.Directive({
                selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                providers: [PROPERTY_VALIDATOR]
            })
        ], PropertyValidator);
        return PropertyValidator;
    }());

    var rangeLength = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: { value: value } };
        };
    };

    var RANGE_LENGTH_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return RangeLengthValidator; }),
        multi: true
    };
    var RangeLengthValidator = /** @class */ (function () {
        function RangeLengthValidator() {
        }
        RangeLengthValidator.prototype.ngOnInit = function () {
            this.validator = rangeLength(this.rangeLength);
        };
        RangeLengthValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'rangeLength') {
                    this.validator = rangeLength(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        RangeLengthValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        RangeLengthValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], RangeLengthValidator.prototype, "rangeLength", void 0);
        RangeLengthValidator = __decorate([
            core.Directive({
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            })
        ], RangeLengthValidator);
        return RangeLengthValidator;
    }());

    var range = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v >= value[0] && v <= value[1] ? null : { range: { value: value } };
        };
    };

    var RANGE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return RangeValidator; }),
        multi: true
    };
    var RangeValidator = /** @class */ (function () {
        function RangeValidator() {
        }
        RangeValidator.prototype.ngOnInit = function () {
            this.validator = range(this.range);
        };
        RangeValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'range') {
                    this.validator = range(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        RangeValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        RangeValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], RangeValidator.prototype, "range", void 0);
        RangeValidator = __decorate([
            core.Directive({
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            })
        ], RangeValidator);
        return RangeValidator;
    }());

    var url = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        /* tslint:disable */
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
        /* tslint:enable */
    };

    var URL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return UrlValidator; }),
        multi: true
    };
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.prototype.validate = function (c) {
            return url(c);
        };
        UrlValidator = __decorate([
            core.Directive({
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            })
        ], UrlValidator);
        return UrlValidator;
    }());

    var uuids = {
        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    var uuid = function (version) {
        return function (control) {
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            var pattern = uuids[version] || uuids.all;
            return (new RegExp(pattern)).test(v) ? null : { uuid: true };
        };
    };

    var UUID_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return UUIDValidator; }),
        multi: true
    };
    var UUIDValidator = /** @class */ (function () {
        function UUIDValidator() {
        }
        UUIDValidator.prototype.ngOnInit = function () {
            this.validator = uuid(this.uuid);
        };
        UUIDValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'uuid') {
                    this.validator = uuid(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        UUIDValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        UUIDValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input()
        ], UUIDValidator.prototype, "uuid", void 0);
        UUIDValidator = __decorate([
            core.Directive({
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            })
        ], UUIDValidator);
        return UUIDValidator;
    }());

    var CustomValidators = {
        arrayLength: arrayLength,
        base64: base64,
        creditCard: creditCard,
        date: date,
        dateISO: dateISO,
        digits: digits,
        email: email,
        equal: equal,
        equalTo: equalTo,
        gt: gt,
        gte: gte,
        json: json,
        lt: lt,
        lte: lte,
        max: max,
        maxDate: maxDate,
        min: min,
        minDate: minDate,
        notEqual: notEqual,
        notEqualTo: notEqualTo,
        number: number,
        property: property,
        range: range,
        rangeLength: rangeLength,
        url: url,
        uuid: uuid
    };
    var CustomDirectives = [
        ArrayLengthValidator,
        Base64Validator,
        CreditCardValidator,
        DateValidator,
        DateISOValidator,
        DigitsValidator,
        EmailValidator,
        EqualValidator,
        EqualToValidator,
        GreaterThanValidator,
        GreaterThanEqualValidator,
        JSONValidator,
        LessThanValidator,
        LessThanEqualValidator,
        MaxValidator,
        MaxDateValidator,
        MinValidator,
        MinDateValidator,
        NotEqualValidator,
        NotEqualToValidator,
        NumberValidator,
        PropertyValidator,
        RangeValidator,
        RangeLengthValidator,
        UrlValidator,
        UUIDValidator
    ];
    var CustomFormsModule = /** @class */ (function () {
        function CustomFormsModule() {
        }
        CustomFormsModule = __decorate([
            core.NgModule({
                declarations: [CustomDirectives],
                exports: [CustomDirectives]
            })
        ], CustomFormsModule);
        return CustomFormsModule;
    }());

    exports.CustomFormsModule = CustomFormsModule;
    exports.CustomValidators = CustomValidators;
    exports.ɵa = arrayLength;
    exports.ɵb = base64;
    exports.ɵba = ArrayLengthValidator;
    exports.ɵbb = Base64Validator;
    exports.ɵbc = CreditCardValidator;
    exports.ɵbd = DateValidator;
    exports.ɵbe = DateISOValidator;
    exports.ɵbf = DigitsValidator;
    exports.ɵbg = EmailValidator;
    exports.ɵbh = EqualValidator;
    exports.ɵbi = EqualToValidator;
    exports.ɵbj = GreaterThanValidator;
    exports.ɵbk = GreaterThanEqualValidator;
    exports.ɵbl = JSONValidator;
    exports.ɵbm = LessThanValidator;
    exports.ɵbn = LessThanEqualValidator;
    exports.ɵbo = MaxValidator;
    exports.ɵbp = MaxDateValidator;
    exports.ɵbq = MinValidator;
    exports.ɵbr = MinDateValidator;
    exports.ɵbs = NotEqualValidator;
    exports.ɵbt = NotEqualToValidator;
    exports.ɵbu = NumberValidator;
    exports.ɵbv = PropertyValidator;
    exports.ɵbw = RangeValidator;
    exports.ɵbx = RangeLengthValidator;
    exports.ɵby = UrlValidator;
    exports.ɵbz = UUIDValidator;
    exports.ɵc = creditCard;
    exports.ɵd = date;
    exports.ɵe = dateISO;
    exports.ɵf = digits;
    exports.ɵg = email;
    exports.ɵh = equal;
    exports.ɵi = equalTo;
    exports.ɵj = gt;
    exports.ɵk = gte;
    exports.ɵl = json;
    exports.ɵm = lt;
    exports.ɵn = lte;
    exports.ɵo = max;
    exports.ɵp = maxDate;
    exports.ɵq = min;
    exports.ɵr = minDate;
    exports.ɵs = notEqual;
    exports.ɵt = notEqualTo;
    exports.ɵu = number;
    exports.ɵv = property;
    exports.ɵw = range;
    exports.ɵx = rangeLength;
    exports.ɵy = url;
    exports.ɵz = uuid;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-custom-validators.umd.js.map
