import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbButtonLabel } from './label';
/**
 * Allows to easily create Bootstrap-style radio buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbRadioGroup implements ControlValueAccessor {
    private _radios;
    private _value;
    private _disabled;
    disabled: boolean;
    /**
     * Name of the radio group applied to radio input elements.
     *
     * Will be applied to all radio input elements inside the group,
     * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
     *
     * If not provided, will be generated in the `ngb-radio-xx` format.
     */
    name: string;
    onChange: (_: any) => void;
    onTouched: () => void;
    onRadioChange(radio: NgbRadio): void;
    onRadioValueUpdate(): void;
    register(radio: NgbRadio): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    unregister(radio: NgbRadio): void;
    writeValue(value: any): void;
    private _updateRadiosValue;
    private _updateRadiosDisabled;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbRadioGroup>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbRadioGroup, "[ngbRadioGroup]", never, {
    "name": "name";
}, {}, never>;
}
/**
 * A directive that marks an input of type "radio" as a part of the
 * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
 */
export declare class NgbRadio implements OnDestroy {
    private _group;
    private _label;
    private _renderer;
    private _element;
    private _cd;
    private _checked;
    private _disabled;
    private _value;
    /**
     * The value for the 'name' property of the input element.
     *
     * All inputs of the radio group should have the same name. If not specified,
     * the name of the enclosing group is used.
     */
    name: string;
    /**
     * The form control value when current radio button is checked.
     */
    value: any;
    /**
     * If `true`, current radio button will be disabled.
     */
    disabled: boolean;
    focused: boolean;
    readonly checked: boolean;
    readonly nameAttr: string;
    constructor(_group: NgbRadioGroup, _label: NgbButtonLabel, _renderer: Renderer2, _element: ElementRef<HTMLInputElement>, _cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    onChange(): void;
    updateValue(value: any): void;
    updateDisabled(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbRadio>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbRadio, "[ngbButton][type=radio]", never, {
    "value": "value";
    "disabled": "disabled";
    "name": "name";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uZC50cyIsInNvdXJjZXMiOlsicmFkaW8uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiQnV0dG9uTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbi8qKlxuICogQWxsb3dzIHRvIGVhc2lseSBjcmVhdGUgQm9vdHN0cmFwLXN0eWxlIHJhZGlvIGJ1dHRvbnMuXG4gKlxuICogSW50ZWdyYXRlcyB3aXRoIGZvcm1zLCBzbyB0aGUgdmFsdWUgb2YgYSBjaGVja2VkIGJ1dHRvbiBpcyBib3VuZCB0byB0aGUgdW5kZXJseWluZyBmb3JtIGNvbnRyb2xcbiAqIGVpdGhlciBpbiBhIHJlYWN0aXZlIG9yIHRlbXBsYXRlLWRyaXZlbiB3YXkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlJhZGlvR3JvdXAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgcHJpdmF0ZSBfcmFkaW9zO1xuICAgIHByaXZhdGUgX3ZhbHVlO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkO1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIHJhZGlvIGdyb3VwIGFwcGxpZWQgdG8gcmFkaW8gaW5wdXQgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBXaWxsIGJlIGFwcGxpZWQgdG8gYWxsIHJhZGlvIGlucHV0IGVsZW1lbnRzIGluc2lkZSB0aGUgZ3JvdXAsXG4gICAgICogdW5sZXNzIFtgTmdiUmFkaW9gXSgjL2NvbXBvbmVudHMvYnV0dG9ucy9hcGkjTmdiUmFkaW8pJ3Mgc3BlY2lmeSBuYW1lcyB0aGVtc2VsdmVzLlxuICAgICAqXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCB3aWxsIGJlIGdlbmVyYXRlZCBpbiB0aGUgYG5nYi1yYWRpby14eGAgZm9ybWF0LlxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvbkNoYW5nZTogKF86IGFueSkgPT4gdm9pZDtcbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG4gICAgb25SYWRpb0NoYW5nZShyYWRpbzogTmdiUmFkaW8pOiB2b2lkO1xuICAgIG9uUmFkaW9WYWx1ZVVwZGF0ZSgpOiB2b2lkO1xuICAgIHJlZ2lzdGVyKHJhZGlvOiBOZ2JSYWRpbyk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQ7XG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbiAgICB1bnJlZ2lzdGVyKHJhZGlvOiBOZ2JSYWRpbyk6IHZvaWQ7XG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZDtcbiAgICBwcml2YXRlIF91cGRhdGVSYWRpb3NWYWx1ZTtcbiAgICBwcml2YXRlIF91cGRhdGVSYWRpb3NEaXNhYmxlZDtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBtYXJrcyBhbiBpbnB1dCBvZiB0eXBlIFwicmFkaW9cIiBhcyBhIHBhcnQgb2YgdGhlXG4gKiBbYE5nYlJhZGlvR3JvdXBgXSgjL2NvbXBvbmVudHMvYnV0dG9ucy9hcGkjTmdiUmFkaW9Hcm91cCkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlJhZGlvIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9ncm91cDtcbiAgICBwcml2YXRlIF9sYWJlbDtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjtcbiAgICBwcml2YXRlIF9lbGVtZW50O1xuICAgIHByaXZhdGUgX2NkO1xuICAgIHByaXZhdGUgX2NoZWNrZWQ7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ7XG4gICAgcHJpdmF0ZSBfdmFsdWU7XG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGZvciB0aGUgJ25hbWUnIHByb3BlcnR5IG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQWxsIGlucHV0cyBvZiB0aGUgcmFkaW8gZ3JvdXAgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbmFtZS4gSWYgbm90IHNwZWNpZmllZCxcbiAgICAgKiB0aGUgbmFtZSBvZiB0aGUgZW5jbG9zaW5nIGdyb3VwIGlzIHVzZWQuXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtIGNvbnRyb2wgdmFsdWUgd2hlbiBjdXJyZW50IHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIHZhbHVlOiBhbnk7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBjdXJyZW50IHJhZGlvIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBib29sZWFuO1xuICAgIGZvY3VzZWQ6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgY2hlY2tlZDogYm9vbGVhbjtcbiAgICByZWFkb25seSBuYW1lQXR0cjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKF9ncm91cDogTmdiUmFkaW9Hcm91cCwgX2xhYmVsOiBOZ2JCdXR0b25MYWJlbCwgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIF9lbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+LCBfY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG9uQ2hhbmdlKCk6IHZvaWQ7XG4gICAgdXBkYXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgdXBkYXRlRGlzYWJsZWQoKTogdm9pZDtcbn1cbiJdfQ==