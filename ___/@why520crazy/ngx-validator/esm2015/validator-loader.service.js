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
const defaultValidatorConfig = {
    validationFeedbackStrategy: ValidationFeedbackStrategyBuilder.bootstrap(),
    validationMessages: {}
};
export class NgxValidatorLoader {
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
/** @nocollapse */ NgxValidatorLoader.ngInjectableDef = i0.defineInjectable({ factory: function NgxValidatorLoader_Factory() { return new NgxValidatorLoader(i0.inject(i1.NGX_VALIDATOR_CONFIG, 8)); }, token: NgxValidatorLoader, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgxValidatorLoader.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJ2YWxpZGF0b3ItbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBSUgsb0JBQW9CLEVBQ3BCLGtDQUFrQyxFQUNyQyxNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFBOEIsaUNBQWlDLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7TUFFdkYsc0JBQXNCLEdBQTZCO0lBQ3JELDBCQUEwQixFQUFFLGlDQUFpQyxDQUFDLFNBQVMsRUFBRTtJQUN6RSxrQkFBa0IsRUFBRSxFQUFFO0NBQ3pCO0FBS0QsTUFBTSxPQUFPLGtCQUFrQjs7OztJQTZCM0IsWUFHSSxNQUFnQztRQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBaENPLDJCQUEyQixDQUFDLEdBQVc7UUFDM0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDSCxPQUFPLGtDQUFrQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksa0JBQWtCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsSUFBSSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxpQ0FBaUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMxRjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7Ozs7Ozs7SUFlRCxlQUFlLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxxQkFBMkI7O1lBQzlELE9BQU8sR0FBRyxFQUFFO1FBQ2hCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyRSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFZRCxxQkFBcUIsQ0FBQyxRQUErQjtRQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCwyQkFBMkIsQ0FBQyxrQkFBc0M7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxrQkFBa0IsQ0FBQztJQUM5RCxDQUFDOzs7WUF2RUosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7OzRDQStCUSxRQUFRLFlBQ1IsTUFBTSxTQUFDLG9CQUFvQjs7Ozs7SUE5QmhDLG9DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgTmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnLFxuICAgIE5neFZhbGlkYXRpb25NZXNzYWdlcyxcbiAgICBEaWN0aW9uYXJ5LFxuICAgIE5HWF9WQUxJREFUT1JfQ09ORklHLFxuICAgIERFRkFVTFRfR0xPQkFMX1ZBTElEQVRJT05fTUVTU0FHRVNcbn0gZnJvbSAnLi92YWxpZGF0b3IuY2xhc3MnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5LCBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneUJ1aWxkZXIgfSBmcm9tICcuL3N0cmF0ZWdpZXMnO1xuXG5jb25zdCBkZWZhdWx0VmFsaWRhdG9yQ29uZmlnOiBOZ3hWYWxpZGF0b3JHbG9iYWxDb25maWcgPSB7XG4gICAgdmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k6IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5QnVpbGRlci5ib290c3RyYXAoKSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHt9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRvckxvYWRlciB7XG4gICAgcHJpdmF0ZSBjb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZztcblxuICAgIHByaXZhdGUgZ2V0RGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5nbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXMgJiYgdGhpcy5jb25maWcuZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5nbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBERUZBVUxUX0dMT0JBTF9WQUxJREFUSU9OX01FU1NBR0VTW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdGlvbk1lc3NhZ2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudmFsaWRhdGlvbk1lc3NhZ2VzO1xuICAgIH1cblxuICAgIGdldCB2YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSgpOiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcudmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5ID0gVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyLmJvb3RzdHJhcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy52YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTtcbiAgICB9XG5cbiAgICBnZXQgdmFsaWRhdGVPbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcudmFsaWRhdGVPbikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcudmFsaWRhdGVPbiA9ICdzdWJtaXQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy52YWxpZGF0ZU9uO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KE5HWF9WQUxJREFUT1JfQ09ORklHKVxuICAgICAgICBjb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZ1xuICAgICkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRWYWxpZGF0b3JDb25maWcsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgKiBAcGFyYW0gbmFtZSBmb3JtQ29udHJvbCBuYW1lLCBlLmcuIHVzZXJuYW1lIG9yIGVtYWlsXG4gICAgICogQHBhcmFtIGtleSB2YWxpZGF0b3IgbmFtZSwgZS5nLiByZXF1aXJlZCBvciBwYXR0ZXJuXG4gICAgICovXG4gICAgZ2V0RXJyb3JNZXNzYWdlKG5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlcz86IGFueSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV0gJiYgdGhpcy52YWxpZGF0aW9uTWVzc2FnZXNbbmFtZV1ba2V5XSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW25hbWVdW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5nZXREZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2Uoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvLyBnZXRFcnJvck1lc3NhZ2VzKG5hbWU6IHN0cmluZywgdmFsaWRhdGlvbkVycm9yczogVmFsaWRhdGlvbkVycm9ycykge1xuICAgIC8vICAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgIC8vICAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb25FcnJvciBpbiB2YWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgLy8gICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0aW9uRXJyb3IpKSB7XG4gICAgLy8gICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh0aGlzLmdldEVycm9yTWVzc2FnZShuYW1lLCB2YWxpZGF0aW9uRXJyb3IsIHZhbGlkYXRpb25FcnJvcnNbdmFsaWRhdGlvbkVycm9yXSkpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBtZXNzYWdlcztcbiAgICAvLyB9XG5cbiAgICBhZGRWYWxpZGF0aW9uTWVzc2FnZXMobWVzc2FnZXM6IE5neFZhbGlkYXRpb25NZXNzYWdlcykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLnZhbGlkYXRpb25NZXNzYWdlcywgbWVzc2FnZXMpO1xuICAgIH1cblxuICAgIHNldEdsb2JhbFZhbGlkYXRpb25NZXNzYWdlcyh2YWxpZGF0aW9uTWVzc2FnZXM6IERpY3Rpb25hcnk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLmNvbmZpZy5nbG9iYWxWYWxpZGF0aW9uTWVzc2FnZXMgPSB2YWxpZGF0aW9uTWVzc2FnZXM7XG4gICAgfVxufVxuIl19