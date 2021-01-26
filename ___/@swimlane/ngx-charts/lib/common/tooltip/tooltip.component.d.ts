import { ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { PlacementTypes } from './position';
import { StyleTypes } from './style.type';
import { AlignmentTypes } from './alignment.type';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipContentComponent implements AfterViewInit {
    element: ElementRef;
    private renderer;
    host: any;
    showCaret: boolean;
    type: StyleTypes;
    placement: PlacementTypes;
    alignment: AlignmentTypes;
    spacing: number;
    cssClass: string;
    title: string;
    template: any;
    context: any;
    caretElm: any;
    readonly cssClasses: string;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    position(): void;
    positionContent(nativeElm: any, hostDim: any, elmDim: any): void;
    positionCaret(hostDim: any, elmDim: any): void;
    checkFlip(hostDim: any, elmDim: any): void;
    onWindowResize(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipContentComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipContentComponent, "ngx-tooltip-content", never, {
    "placement": "placement";
    "host": "host";
    "showCaret": "showCaret";
    "type": "type";
    "alignment": "alignment";
    "spacing": "spacing";
    "cssClass": "cssClass";
    "title": "title";
    "template": "template";
    "context": "context";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidG9vbHRpcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYWNlbWVudFR5cGVzIH0gZnJvbSAnLi9wb3NpdGlvbic7XG5pbXBvcnQgeyBTdHlsZVR5cGVzIH0gZnJvbSAnLi9zdHlsZS50eXBlJztcbmltcG9ydCB7IEFsaWdubWVudFR5cGVzIH0gZnJvbSAnLi9hbGlnbm1lbnQudHlwZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUb29sdGlwQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBob3N0OiBhbnk7XG4gICAgc2hvd0NhcmV0OiBib29sZWFuO1xuICAgIHR5cGU6IFN0eWxlVHlwZXM7XG4gICAgcGxhY2VtZW50OiBQbGFjZW1lbnRUeXBlcztcbiAgICBhbGlnbm1lbnQ6IEFsaWdubWVudFR5cGVzO1xuICAgIHNwYWNpbmc6IG51bWJlcjtcbiAgICBjc3NDbGFzczogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdGVtcGxhdGU6IGFueTtcbiAgICBjb250ZXh0OiBhbnk7XG4gICAgY2FyZXRFbG06IGFueTtcbiAgICByZWFkb25seSBjc3NDbGFzc2VzOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgcG9zaXRpb24oKTogdm9pZDtcbiAgICBwb3NpdGlvbkNvbnRlbnQobmF0aXZlRWxtOiBhbnksIGhvc3REaW06IGFueSwgZWxtRGltOiBhbnkpOiB2b2lkO1xuICAgIHBvc2l0aW9uQ2FyZXQoaG9zdERpbTogYW55LCBlbG1EaW06IGFueSk6IHZvaWQ7XG4gICAgY2hlY2tGbGlwKGhvc3REaW06IGFueSwgZWxtRGltOiBhbnkpOiB2b2lkO1xuICAgIG9uV2luZG93UmVzaXplKCk6IHZvaWQ7XG59XG4iXX0=