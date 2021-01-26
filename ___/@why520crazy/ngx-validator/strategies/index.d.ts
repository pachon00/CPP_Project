import { NoopValidationFeedbackStrategy } from './noop-validation-feedback-strategy';
import { BootstrapValidationFeedbackStrategy } from './bootstrap-validation-feedback-strategy';
import { ValidationFeedbackStrategy } from './validation-feedback-strategy';
export declare class ValidationFeedbackStrategyBuilder {
    static noop(): ValidationFeedbackStrategy;
    static bootstrap(): ValidationFeedbackStrategy;
}
export { ValidationFeedbackStrategy, NoopValidationFeedbackStrategy, BootstrapValidationFeedbackStrategy };
