import { InjectionToken } from '@angular/core';
import { ValidationFeedbackStrategy } from './strategies';
export interface Dictionary<T> {
    [key: string]: T;
}
export declare type NgxValidationMessages = Dictionary<Dictionary<string>>;
export declare type NgxValidateOn = 'submit' | 'blur';
export interface NgxValidatorConfig {
    validationFeedbackStrategy?: ValidationFeedbackStrategy;
    validationMessages?: NgxValidationMessages;
    validateOn?: NgxValidateOn;
}
export interface NgxValidatorGlobalConfig extends NgxValidatorConfig {
    globalValidationMessages?: Dictionary<string>;
}
export declare const NGX_VALIDATOR_CONFIG: InjectionToken<NgxValidatorGlobalConfig>;
export declare const DEFAULT_GLOBAL_VALIDATION_MESSAGES: {
    required: string;
    maxlength: string;
    minlength: string;
    ngxUniqueCheck: string;
    email: string;
    repeat: string;
    pattern: string;
    number: string;
    url: string;
    max: string;
    min: string;
};
