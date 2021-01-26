import { OnInit, NgZone, Renderer2, ElementRef, OnDestroy, AfterContentInit, QueryList } from '@angular/core';
import { NgxFormValidatorService } from '../validator.service';
import { ControlContainer, NgControl } from '@angular/forms';
import { NgxValidatorConfig } from '../validator.class';
import * as ɵngcc0 from '@angular/core';
export declare enum NgxEnterKeyMode {
    submit = "submit",
    alwaysSubmit = "alwaysSubmit",
    forbidSubmit = "forbidSubmit"
}
export declare class NgxFormValidatorDirective implements OnInit, AfterContentInit, OnDestroy {
    private ngZone;
    private renderer;
    private elementRef;
    private _validator;
    private ngForm;
    controls: QueryList<NgControl>;
    private unsubscribe;
    onSubmitSuccess: ($event: any) => void;
    enterKeyMode: NgxEnterKeyMode;
    ngxFormValidatorConfig: NgxValidatorConfig;
    ngxFormValidator: NgxValidatorConfig;
    readonly validator: NgxFormValidatorService;
    constructor(ngZone: NgZone, renderer: Renderer2, elementRef: ElementRef, _validator: NgxFormValidatorService, ngForm: ControlContainer);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    submit($event: Event): void;
    submitRunInZone($event: Event): void;
    onKeydown($event: KeyboardEvent): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxFormValidatorDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgxFormValidatorDirective, "form[ngxFormValidator],form[ngx-form-validator]", ["ngxFormValidator"], {
    "ngxFormValidatorConfig": "ngxFormValidatorConfig";
    "ngxFormValidator": "ngxFormValidator";
    "enterKeyMode": "enterKeyMode";
}, {}, ["controls"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0b3IuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImZvcm0tdmFsaWRhdG9yLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBOZ1pvbmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vdmFsaWRhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4VmFsaWRhdG9yQ29uZmlnIH0gZnJvbSAnLi4vdmFsaWRhdG9yLmNsYXNzJztcbmV4cG9ydCBkZWNsYXJlIGVudW0gTmd4RW50ZXJLZXlNb2RlIHtcbiAgICBzdWJtaXQgPSBcInN1Ym1pdFwiLFxuICAgIGFsd2F5c1N1Ym1pdCA9IFwiYWx3YXlzU3VibWl0XCIsXG4gICAgZm9yYmlkU3VibWl0ID0gXCJmb3JiaWRTdWJtaXRcIlxufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmd4Rm9ybVZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG5nWm9uZTtcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xuICAgIHByaXZhdGUgZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF92YWxpZGF0b3I7XG4gICAgcHJpdmF0ZSBuZ0Zvcm07XG4gICAgY29udHJvbHM6IFF1ZXJ5TGlzdDxOZ0NvbnRyb2w+O1xuICAgIHByaXZhdGUgdW5zdWJzY3JpYmU7XG4gICAgb25TdWJtaXRTdWNjZXNzOiAoJGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gICAgZW50ZXJLZXlNb2RlOiBOZ3hFbnRlcktleU1vZGU7XG4gICAgbmd4Rm9ybVZhbGlkYXRvckNvbmZpZzogTmd4VmFsaWRhdG9yQ29uZmlnO1xuICAgIG5neEZvcm1WYWxpZGF0b3I6IE5neFZhbGlkYXRvckNvbmZpZztcbiAgICByZWFkb25seSB2YWxpZGF0b3I6IE5neEZvcm1WYWxpZGF0b3JTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKG5nWm9uZTogTmdab25lLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBfdmFsaWRhdG9yOiBOZ3hGb3JtVmFsaWRhdG9yU2VydmljZSwgbmdGb3JtOiBDb250cm9sQ29udGFpbmVyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIHN1Ym1pdCgkZXZlbnQ6IEV2ZW50KTogdm9pZDtcbiAgICBzdWJtaXRSdW5JblpvbmUoJGV2ZW50OiBFdmVudCk6IHZvaWQ7XG4gICAgb25LZXlkb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==