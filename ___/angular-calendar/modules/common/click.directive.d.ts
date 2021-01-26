import { Renderer2, ElementRef, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ClickDirective implements OnInit, OnDestroy {
    private renderer;
    private elm;
    private document;
    clickListenerDisabled: boolean;
    click: EventEmitter<MouseEvent>;
    private destroy$;
    constructor(renderer: Renderer2, elm: ElementRef<HTMLElement>, document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private listen;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClickDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ClickDirective, "[mwlClick]", never, {
    "clickListenerDisabled": "clickListenerDisabled";
}, {
    "click": "mwlClick";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImNsaWNrLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbGlja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xuICAgIHByaXZhdGUgZWxtO1xuICAgIHByaXZhdGUgZG9jdW1lbnQ7XG4gICAgY2xpY2tMaXN0ZW5lckRpc2FibGVkOiBib29sZWFuO1xuICAgIGNsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgcHJpdmF0ZSBkZXN0cm95JDtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbG06IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBkb2N1bWVudDogYW55KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBsaXN0ZW47XG59XG4iXX0=