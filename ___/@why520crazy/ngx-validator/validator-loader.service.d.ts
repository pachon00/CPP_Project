import { NgxValidatorGlobalConfig, NgxValidationMessages, Dictionary } from './validator.class';
import { ValidationFeedbackStrategy } from './strategies';
import * as ɵngcc0 from '@angular/core';
export declare class NgxValidatorLoader {
    private config;
    private getDefaultValidationMessage;
    readonly validationMessages: Dictionary<Dictionary<string>>;
    readonly validationFeedbackStrategy: ValidationFeedbackStrategy;
    readonly validateOn: import("./validator.class").NgxValidateOn;
    constructor(config: NgxValidatorGlobalConfig);
    /**
     * get validation error messages
     * @param name formControl name, e.g. username or email
     * @param key validator name, e.g. required or pattern
     */
    getErrorMessage(name: string, key: string, validationErrorValues?: any): string;
    addValidationMessages(messages: NgxValidationMessages): void;
    setGlobalValidationMessages(validationMessages: Dictionary<string>): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxValidatorLoader>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgxValidatorLoader>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWxvYWRlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInZhbGlkYXRvci1sb2FkZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZywgTmd4VmFsaWRhdGlvbk1lc3NhZ2VzLCBEaWN0aW9uYXJ5IH0gZnJvbSAnLi92YWxpZGF0b3IuY2xhc3MnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmd4VmFsaWRhdG9yTG9hZGVyIHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIGdldERlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICByZWFkb25seSB2YWxpZGF0aW9uTWVzc2FnZXM6IERpY3Rpb25hcnk8RGljdGlvbmFyeTxzdHJpbmc+PjtcbiAgICByZWFkb25seSB2YWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTogVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k7XG4gICAgcmVhZG9ubHkgdmFsaWRhdGVPbjogaW1wb3J0KFwiLi92YWxpZGF0b3IuY2xhc3NcIikuTmd4VmFsaWRhdGVPbjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyk7XG4gICAgLyoqXG4gICAgICogZ2V0IHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgKiBAcGFyYW0gbmFtZSBmb3JtQ29udHJvbCBuYW1lLCBlLmcuIHVzZXJuYW1lIG9yIGVtYWlsXG4gICAgICogQHBhcmFtIGtleSB2YWxpZGF0b3IgbmFtZSwgZS5nLiByZXF1aXJlZCBvciBwYXR0ZXJuXG4gICAgICovXG4gICAgZ2V0RXJyb3JNZXNzYWdlKG5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbGlkYXRpb25FcnJvclZhbHVlcz86IGFueSk6IHN0cmluZztcbiAgICBhZGRWYWxpZGF0aW9uTWVzc2FnZXMobWVzc2FnZXM6IE5neFZhbGlkYXRpb25NZXNzYWdlcyk6IHZvaWQ7XG4gICAgc2V0R2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzKHZhbGlkYXRpb25NZXNzYWdlczogRGljdGlvbmFyeTxzdHJpbmc+KTogdm9pZDtcbn1cbiJdfQ==