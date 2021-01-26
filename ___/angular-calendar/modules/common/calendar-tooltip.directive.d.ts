import { OnDestroy, Injector, ComponentFactoryResolver, ViewContainerRef, ElementRef, Renderer2, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { PlacementArray } from 'positioning';
import { CalendarEvent } from 'calendar-utils';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarTooltipWindowComponent {
    contents: string;
    placement: string;
    event: CalendarEvent;
    customTemplate: TemplateRef<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarTooltipWindowComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarTooltipWindowComponent, "mwl-calendar-tooltip-window", never, {
    "contents": "contents";
    "placement": "placement";
    "event": "event";
    "customTemplate": "customTemplate";
}, {}, never>;
}
export declare class CalendarTooltipDirective implements OnDestroy, OnChanges {
    private elementRef;
    private injector;
    private renderer;
    private viewContainerRef;
    private document;
    contents: string;
    placement: PlacementArray;
    customTemplate: TemplateRef<any>;
    event: CalendarEvent;
    appendToBody: boolean;
    delay: number | null;
    private tooltipFactory;
    private tooltipRef;
    private cancelTooltipDelay$;
    constructor(elementRef: ElementRef, injector: Injector, renderer: Renderer2, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, document: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onMouseOver(): void;
    onMouseOut(): void;
    private show;
    private hide;
    private positionTooltip;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarTooltipDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CalendarTooltipDirective, "[mwlCalendarTooltip]", never, {
    "placement": "tooltipPlacement";
    "delay": "tooltipDelay";
    "contents": "mwlCalendarTooltip";
    "customTemplate": "tooltipTemplate";
    "event": "tooltipEvent";
    "appendToBody": "tooltipAppendToBody";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdG9vbHRpcC5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiY2FsZW5kYXItdG9vbHRpcC5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBJbmplY3RvciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudCB7XG4gICAgY29udGVudHM6IHN0cmluZztcbiAgICBwbGFjZW1lbnQ6IHN0cmluZztcbiAgICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjtcbiAgICBwcml2YXRlIGRvY3VtZW50O1xuICAgIGNvbnRlbnRzOiBzdHJpbmc7XG4gICAgcGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheTtcbiAgICBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgICBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gICAgZGVsYXk6IG51bWJlciB8IG51bGw7XG4gICAgcHJpdmF0ZSB0b29sdGlwRmFjdG9yeTtcbiAgICBwcml2YXRlIHRvb2x0aXBSZWY7XG4gICAgcHJpdmF0ZSBjYW5jZWxUb29sdGlwRGVsYXkkO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGluamVjdG9yOiBJbmplY3RvciwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGRvY3VtZW50OiBhbnkpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgb25Nb3VzZU92ZXIoKTogdm9pZDtcbiAgICBvbk1vdXNlT3V0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzaG93O1xuICAgIHByaXZhdGUgaGlkZTtcbiAgICBwcml2YXRlIHBvc2l0aW9uVG9vbHRpcDtcbn1cbiJdfQ==