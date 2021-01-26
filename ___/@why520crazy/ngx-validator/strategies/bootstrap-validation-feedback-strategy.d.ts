import { ValidationFeedbackStrategy } from './validation-feedback-strategy';
export declare class BootstrapValidationFeedbackStrategy implements ValidationFeedbackStrategy {
    constructor();
    showError(element: HTMLElement, errorMessages: string[]): void;
    removeError(element: HTMLElement): void;
}
