import { ElementRef, OnChanges, Provider, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class TextMaskConfig {
    mask: Array<string | RegExp> | ((raw: string) => Array<string | RegExp>) | false;
    guide?: boolean;
    placeholderChar?: string;
    pipe?: (conformedValue: string, config: TextMaskConfig) => false | string | object;
    keepCharPositions?: boolean;
    showMask?: boolean;
}
export declare const MASKEDINPUT_VALUE_ACCESSOR: Provider;
export declare class MaskedInputDirective implements ControlValueAccessor, OnChanges {
    private _renderer;
    private _elementRef;
    private _compositionMode;
    textMaskConfig: TextMaskConfig;
    onChange: (_: any) => void;
    onTouched: () => void;
    private textMaskInputElement;
    private inputElement;
    /** Whether the user is creating a composition string (IME events). */
    private _composing;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _compositionMode: boolean);
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    _handleInput(value: any): void;
    _setupMask(create?: boolean): void;
    _compositionStart(): void;
    _compositionEnd(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MaskedInputDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MaskedInputDirective, "[textMask]", ["textMask"], {
    "textMaskConfig": "textMask";
}, {}, never>;
}
export declare class TextMaskModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TextMaskModule, [typeof MaskedInputDirective], never, [typeof MaskedInputDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TextMaskModule>;
}
export { conformToMask } from 'text-mask-core/dist/textMaskCore';

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjJUZXh0TWFzay5kLnRzIiwic291cmNlcyI6WyJhbmd1bGFyMlRleHRNYXNrLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBOzs7O0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFByb3ZpZGVyLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGV4dE1hc2tDb25maWcge1xuICAgIG1hc2s6IEFycmF5PHN0cmluZyB8IFJlZ0V4cD4gfCAoKHJhdzogc3RyaW5nKSA9PiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+KSB8IGZhbHNlO1xuICAgIGd1aWRlPzogYm9vbGVhbjtcbiAgICBwbGFjZWhvbGRlckNoYXI/OiBzdHJpbmc7XG4gICAgcGlwZT86IChjb25mb3JtZWRWYWx1ZTogc3RyaW5nLCBjb25maWc6IFRleHRNYXNrQ29uZmlnKSA9PiBmYWxzZSB8IHN0cmluZyB8IG9iamVjdDtcbiAgICBrZWVwQ2hhclBvc2l0aW9ucz86IGJvb2xlYW47XG4gICAgc2hvd01hc2s/OiBib29sZWFuO1xufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgTUFTS0VESU5QVVRfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWFza2VkSW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjtcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX2NvbXBvc2l0aW9uTW9kZTtcbiAgICB0ZXh0TWFza0NvbmZpZzogVGV4dE1hc2tDb25maWc7XG4gICAgb25DaGFuZ2U6IChfOiBhbnkpID0+IHZvaWQ7XG4gICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgdGV4dE1hc2tJbnB1dEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ7XG4gICAgLyoqIFdoZXRoZXIgdGhlIHVzZXIgaXMgY3JlYXRpbmcgYSBjb21wb3NpdGlvbiBzdHJpbmcgKElNRSBldmVudHMpLiAqL1xuICAgIHByaXZhdGUgX2NvbXBvc2luZztcbiAgICBjb25zdHJ1Y3RvcihfcmVuZGVyZXI6IFJlbmRlcmVyMiwgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIF9jb21wb3NpdGlvbk1vZGU6IGJvb2xlYW4pO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XG4gICAgX2hhbmRsZUlucHV0KHZhbHVlOiBhbnkpOiB2b2lkO1xuICAgIF9zZXR1cE1hc2soY3JlYXRlPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgX2NvbXBvc2l0aW9uU3RhcnQoKTogdm9pZDtcbiAgICBfY29tcG9zaXRpb25FbmQodmFsdWU6IGFueSk6IHZvaWQ7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUZXh0TWFza01vZHVsZSB7XG59XG5leHBvcnQgeyBjb25mb3JtVG9NYXNrIH0gZnJvbSAndGV4dC1tYXNrLWNvcmUvZGlzdC90ZXh0TWFza0NvcmUnO1xuIl19