import { NgForm, FormGroupDirective, NgControl } from '@angular/forms';
import { NgxValidatorLoader } from './validator-loader.service';
import { NgxValidatorConfig, Dictionary } from './validator.class';
import * as ɵngcc0 from '@angular/core';
export declare class NgxFormValidatorService {
    private thyFormValidateLoader;
    private _ngForm;
    private _formElement;
    private _config;
    private _controls;
    validations: Dictionary<{
        hasError?: boolean;
        errorMessages?: string[];
    }>;
    private _getValidationFeedbackStrategy;
    private _getElement;
    private _clearElementError;
    _tryGetValidation(name: string): {
        hasError?: boolean;
        errorMessages?: string[];
    };
    private _initializeFormControlValidation;
    private _restFormControlValidation;
    private _getValidationMessage;
    private _getValidationMessages;
    private _setControlValidationError;
    readonly validatorConfig: NgxValidatorConfig;
    constructor(thyFormValidateLoader: NgxValidatorLoader);
    initialize(ngForm: NgForm | FormGroupDirective, formElement: HTMLElement): void;
    initializeFormControlsValidation(controls: NgControl[]): void;
    setValidatorConfig(config: NgxValidatorConfig): void;
    private _getControls;
    private _getControlByName;
    validateControl(name: string): void;
    validateControls(): void;
    validate($event?: Event): boolean;
    reset(): void;
    markControlAsError(name: string, message: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxFormValidatorService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgxFormValidatorService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidmFsaWRhdG9yLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9yTG9hZGVyIH0gZnJvbSAnLi92YWxpZGF0b3ItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9yQ29uZmlnLCBEaWN0aW9uYXJ5IH0gZnJvbSAnLi92YWxpZGF0b3IuY2xhc3MnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmd4Rm9ybVZhbGlkYXRvclNlcnZpY2Uge1xuICAgIHByaXZhdGUgdGh5Rm9ybVZhbGlkYXRlTG9hZGVyO1xuICAgIHByaXZhdGUgX25nRm9ybTtcbiAgICBwcml2YXRlIF9mb3JtRWxlbWVudDtcbiAgICBwcml2YXRlIF9jb25maWc7XG4gICAgcHJpdmF0ZSBfY29udHJvbHM7XG4gICAgdmFsaWRhdGlvbnM6IERpY3Rpb25hcnk8e1xuICAgICAgICBoYXNFcnJvcj86IGJvb2xlYW47XG4gICAgICAgIGVycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICB9PjtcbiAgICBwcml2YXRlIF9nZXRWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTtcbiAgICBwcml2YXRlIF9nZXRFbGVtZW50O1xuICAgIHByaXZhdGUgX2NsZWFyRWxlbWVudEVycm9yO1xuICAgIF90cnlHZXRWYWxpZGF0aW9uKG5hbWU6IHN0cmluZyk6IHtcbiAgICAgICAgaGFzRXJyb3I/OiBib29sZWFuO1xuICAgICAgICBlcnJvck1lc3NhZ2VzPzogc3RyaW5nW107XG4gICAgfTtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplRm9ybUNvbnRyb2xWYWxpZGF0aW9uO1xuICAgIHByaXZhdGUgX3Jlc3RGb3JtQ29udHJvbFZhbGlkYXRpb247XG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgcHJpdmF0ZSBfZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzO1xuICAgIHByaXZhdGUgX3NldENvbnRyb2xWYWxpZGF0aW9uRXJyb3I7XG4gICAgcmVhZG9ubHkgdmFsaWRhdG9yQ29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWc7XG4gICAgY29uc3RydWN0b3IodGh5Rm9ybVZhbGlkYXRlTG9hZGVyOiBOZ3hWYWxpZGF0b3JMb2FkZXIpO1xuICAgIGluaXRpYWxpemUobmdGb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUsIGZvcm1FbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQ7XG4gICAgaW5pdGlhbGl6ZUZvcm1Db250cm9sc1ZhbGlkYXRpb24oY29udHJvbHM6IE5nQ29udHJvbFtdKTogdm9pZDtcbiAgICBzZXRWYWxpZGF0b3JDb25maWcoY29uZmlnOiBOZ3hWYWxpZGF0b3JDb25maWcpOiB2b2lkO1xuICAgIHByaXZhdGUgX2dldENvbnRyb2xzO1xuICAgIHByaXZhdGUgX2dldENvbnRyb2xCeU5hbWU7XG4gICAgdmFsaWRhdGVDb250cm9sKG5hbWU6IHN0cmluZyk6IHZvaWQ7XG4gICAgdmFsaWRhdGVDb250cm9scygpOiB2b2lkO1xuICAgIHZhbGlkYXRlKCRldmVudD86IEV2ZW50KTogYm9vbGVhbjtcbiAgICByZXNldCgpOiB2b2lkO1xuICAgIG1hcmtDb250cm9sQXNFcnJvcihuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG59XG4iXX0=