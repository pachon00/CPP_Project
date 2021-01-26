import { OnInit, EventEmitter } from '@angular/core';
import { NgxFormValidatorDirective } from './form-validator.directive';
import * as ɵngcc0 from '@angular/core';
export declare class NgxFormSubmitDirective implements OnInit {
    private validatorDirective;
    ngxFormSubmit: EventEmitter<{}>;
    constructor(validatorDirective: NgxFormValidatorDirective);
    ngOnInit(): void;
    onSubmit($event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxFormSubmitDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgxFormSubmitDirective, "[ngxFormSubmit],[ngx-form-submit]", never, {}, {
    "ngxFormSubmit": "ngxFormSubmit";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zdWJtaXQuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImZvcm0tc3VibWl0LmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ3hGb3JtU3VibWl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHZhbGlkYXRvckRpcmVjdGl2ZTtcbiAgICBuZ3hGb3JtU3VibWl0OiBFdmVudEVtaXR0ZXI8e30+O1xuICAgIGNvbnN0cnVjdG9yKHZhbGlkYXRvckRpcmVjdGl2ZTogTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvblN1Ym1pdCgkZXZlbnQ6IGFueSk6IHZvaWQ7XG59XG4iXX0=