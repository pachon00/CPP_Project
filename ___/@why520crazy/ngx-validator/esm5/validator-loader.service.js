/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { NGX_VALIDATOR_CONFIG, DEFAULT_GLOBAL_VALIDATION_MESSAGES } from './validator.class';
import { ValidationFeedbackStrategyBuilder } from './strategies';
import * as i0 from "@angular/core";
import * as i1 from "./validator.class";
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
    /** @nocollapse */ NgxValidatorLoader.ngInjectableDef = i0.defineInjectable({ factory: function NgxValidatorLoader_Factory() { return new NgxValidatorLoader(i0.inject(i1.NGX_VALIDATOR_CONFIG, 8)); }, token: NgxValidatorLoader, providedIn: "root" });
    return NgxValidatorLoader;
}());
export { NgxValidatorLoader };
if (false) {
    /** @type {?} */
    NgxValidatorLoader.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJ2YWxpZGF0b3ItbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBSUgsb0JBQW9CLEVBQ3BCLGtDQUFrQyxFQUNyQyxNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFBOEIsaUNBQWlDLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7SUFFdkYsc0JBQXNCLEdBQTZCO0lBQ3JELDBCQUEwQixFQUFFLGlDQUFpQyxDQUFDLFNBQVMsRUFBRTtJQUN6RSxrQkFBa0IsRUFBRSxFQUFFO0NBQ3pCO0FBRUQ7SUFnQ0ksNEJBR0ksTUFBZ0M7UUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQWhDTyx3REFBMkI7Ozs7SUFBbkMsVUFBb0MsR0FBVztRQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNILE9BQU8sa0NBQWtDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRUQsc0JBQUksa0RBQWtCOzs7O1FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMERBQTBCOzs7O1FBQTlCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsaUNBQWlDLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDMUY7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBVTs7OztRQUFkO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7YUFDckM7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBVUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCw0Q0FBZTs7Ozs7OztJQUFmLFVBQWdCLElBQVksRUFBRSxHQUFXLEVBQUUscUJBQTJCOztZQUM5RCxPQUFPLEdBQUcsRUFBRTtRQUNoQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckUsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsMkJBQTJCO0lBQzNCLHdEQUF3RDtJQUN4RCxrRUFBa0U7SUFDbEUsNkdBQTZHO0lBQzdHLFlBQVk7SUFDWixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLElBQUk7Ozs7Ozs7Ozs7Ozs7O0lBRUosa0RBQXFCOzs7Ozs7Ozs7Ozs7OztJQUFyQixVQUFzQixRQUErQjtRQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCx3REFBMkI7Ozs7SUFBM0IsVUFBNEIsa0JBQXNDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEdBQUcsa0JBQWtCLENBQUM7SUFDOUQsQ0FBQzs7Z0JBdkVKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0RBK0JRLFFBQVEsWUFDUixNQUFNLFNBQUMsb0JBQW9COzs7NkJBbERwQztDQXdGQyxBQXhFRCxJQXdFQztTQXJFWSxrQkFBa0I7OztJQUMzQixvQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyxcbiAgICBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMsXG4gICAgRGljdGlvbmFyeSxcbiAgICBOR1hfVkFMSURBVE9SX0NPTkZJRyxcbiAgICBERUZBVUxUX0dMT0JBTF9WQUxJREFUSU9OX01FU1NBR0VTXG59IGZyb20gJy4vdmFsaWRhdG9yLmNsYXNzJztcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSwgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyIH0gZnJvbSAnLi9zdHJhdGVnaWVzJztcblxuY29uc3QgZGVmYXVsdFZhbGlkYXRvckNvbmZpZzogTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnID0ge1xuICAgIHZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5OiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneUJ1aWxkZXIuYm9vdHN0cmFwKCksXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzOiB7fVxufTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hWYWxpZGF0b3JMb2FkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWc7XG5cbiAgICBwcml2YXRlIGdldERlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZShrZXk6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzICYmIHRoaXMuY29uZmlnLmdsb2JhbFZhbGlkYXRpb25NZXNzYWdlc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gREVGQVVMVF9HTE9CQUxfVkFMSURBVElPTl9NRVNTQUdFU1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlcztcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSA9IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlci5ib290c3RyYXAoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgZ2V0IHZhbGlkYXRlT24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnZhbGlkYXRlT24pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnZhbGlkYXRlT24gPSAnc3VibWl0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudmFsaWRhdGVPbjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQE9wdGlvbmFsKClcbiAgICAgICAgQEluamVjdChOR1hfVkFMSURBVE9SX0NPTkZJRylcbiAgICAgICAgY29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWdcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0VmFsaWRhdG9yQ29uZmlnLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzXG4gICAgICogQHBhcmFtIG5hbWUgZm9ybUNvbnRyb2wgbmFtZSwgZS5nLiB1c2VybmFtZSBvciBlbWFpbFxuICAgICAqIEBwYXJhbSBrZXkgdmFsaWRhdG9yIG5hbWUsIGUuZy4gcmVxdWlyZWQgb3IgcGF0dGVyblxuICAgICAqL1xuICAgIGdldEVycm9yTWVzc2FnZShuYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWxpZGF0aW9uRXJyb3JWYWx1ZXM/OiBhbnkpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdICYmIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdW2tleV0pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25NZXNzYWdlc1tuYW1lXVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0RXJyb3JNZXNzYWdlcyhuYW1lOiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMpIHtcbiAgICAvLyAgICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgICAvLyAgICAgZm9yIChjb25zdCB2YWxpZGF0aW9uRXJyb3IgaW4gdmFsaWRhdGlvbkVycm9ycykge1xuICAgIC8vICAgICAgICAgaWYgKHZhbGlkYXRpb25FcnJvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdGlvbkVycm9yKSkge1xuICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2godGhpcy5nZXRFcnJvck1lc3NhZ2UobmFtZSwgdmFsaWRhdGlvbkVycm9yLCB2YWxpZGF0aW9uRXJyb3JzW3ZhbGlkYXRpb25FcnJvcl0pKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgLy8gfVxuXG4gICAgYWRkVmFsaWRhdGlvbk1lc3NhZ2VzKG1lc3NhZ2VzOiBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMsIG1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXModmFsaWRhdGlvbk1lc3NhZ2VzOiBEaWN0aW9uYXJ5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzID0gdmFsaWRhdGlvbk1lc3NhZ2VzO1xuICAgIH1cbn1cbiJdfQ==