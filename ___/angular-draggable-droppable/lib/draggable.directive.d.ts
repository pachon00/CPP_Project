import { OnInit, ElementRef, Renderer2, EventEmitter, OnDestroy, OnChanges, NgZone, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { DraggableHelper } from './draggable-helper.provider';
import { DraggableScrollContainerDirective } from './draggable-scroll-container.directive';
import * as ɵngcc0 from '@angular/core';
export interface Coordinates {
    x: number;
    y: number;
}
export interface DragAxis {
    x: boolean;
    y: boolean;
}
export interface SnapGrid {
    x?: number;
    y?: number;
}
export interface DragPointerDownEvent extends Coordinates {
}
export interface DragStartEvent {
    cancelDrag$: ReplaySubject<void>;
}
export interface DragMoveEvent extends Coordinates {
}
export interface DragEndEvent extends Coordinates {
    dragCancelled: boolean;
}
export interface ValidateDragParams extends Coordinates {
    transform: {
        x: number;
        y: number;
    };
}
export declare type ValidateDrag = (params: ValidateDragParams) => boolean;
export interface PointerEvent {
    clientX: number;
    clientY: number;
    event: MouseEvent | TouchEvent;
}
export interface TimeLongPress {
    timerBegin: number;
    timerEnd: number;
}
export interface GhostElementCreatedEvent {
    clientX: number;
    clientY: number;
    element: HTMLElement;
}
export declare class DraggableDirective implements OnInit, OnChanges, OnDestroy {
    private element;
    private renderer;
    private draggableHelper;
    private zone;
    private vcr;
    private scrollContainer;
    private document;
    /**
     * an object of data you can pass to the drop event
     */
    dropData: any;
    /**
     * The axis along which the element is draggable
     */
    dragAxis: DragAxis;
    /**
     * Snap all drags to an x / y grid
     */
    dragSnapGrid: SnapGrid;
    /**
     * Show a ghost element that shows the drag when dragging
     */
    ghostDragEnabled: boolean;
    /**
     * Show the original element when ghostDragEnabled is true
     */
    showOriginalElementWhileDragging: boolean;
    /**
     * Allow custom behaviour to control when the element is dragged
     */
    validateDrag: ValidateDrag;
    /**
     * The cursor to use when hovering over a draggable element
     */
    dragCursor: string;
    /**
     * The css class to apply when the element is being dragged
     */
    dragActiveClass: string;
    /**
     * The element the ghost element will be appended to. Default is next to the dragged element
     */
    ghostElementAppendTo: HTMLElement;
    /**
     * An ng-template to be inserted into the parent element of the ghost element. It will overwrite any child nodes.
     */
    ghostElementTemplate: TemplateRef<any>;
    /**
     * Amount of milliseconds to wait on touch devices before starting to drag the element (so that you can scroll the page by touching a draggable element)
     */
    touchStartLongPress: {
        delay: number;
        delta: number;
    };
    autoScroll: {
        margin: number | {
            top?: number;
            left?: number;
            right?: number;
            bottom?: number;
        };
        maxSpeed?: number | {
            top?: number;
            left?: number;
            right?: number;
            bottom?: number;
        };
        scrollWhenOutside?: boolean;
    };
    /**
     * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
     */
    dragPointerDown: EventEmitter<DragPointerDownEvent>;
    /**
     * Called when the element has started to be dragged.
     * Only called after at least one mouse or touch move event.
     * If you call $event.cancelDrag$.emit() it will cancel the current drag
     */
    dragStart: EventEmitter<DragStartEvent>;
    /**
     * Called after the ghost element has been created
     */
    ghostElementCreated: EventEmitter<GhostElementCreatedEvent>;
    /**
     * Called when the element is being dragged
     */
    dragging: EventEmitter<DragMoveEvent>;
    /**
     * Called after the element is dragged
     */
    dragEnd: EventEmitter<DragEndEvent>;
    /**
     * @hidden
     */
    pointerDown$: Subject<PointerEvent>;
    /**
     * @hidden
     */
    pointerMove$: Subject<PointerEvent>;
    /**
     * @hidden
     */
    pointerUp$: Subject<PointerEvent>;
    private eventListenerSubscriptions;
    private ghostElement;
    private destroy$;
    private timeLongPress;
    private scroller;
    /**
     * @hidden
     */
    constructor(element: ElementRef<HTMLElement>, renderer: Renderer2, draggableHelper: DraggableHelper, zone: NgZone, vcr: ViewContainerRef, scrollContainer: DraggableScrollContainerDirective, document: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private checkEventListeners;
    private onMouseDown;
    private onMouseUp;
    private onTouchStart;
    private onTouchEnd;
    private onMouseEnter;
    private onMouseLeave;
    private canDrag;
    private setCursor;
    private unsubscribeEventListeners;
    private setElementStyles;
    private getScrollElement;
    private getScrollPosition;
    private shouldBeginDrag;
    private enableScroll;
    private disableScroll;
    private hasScrollbar;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DraggableDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DraggableDirective, "[mwlDraggable]", never, {
    "dragAxis": "dragAxis";
    "dragSnapGrid": "dragSnapGrid";
    "ghostDragEnabled": "ghostDragEnabled";
    "showOriginalElementWhileDragging": "showOriginalElementWhileDragging";
    "dragCursor": "dragCursor";
    "autoScroll": "autoScroll";
    "dropData": "dropData";
    "validateDrag": "validateDrag";
    "dragActiveClass": "dragActiveClass";
    "ghostElementAppendTo": "ghostElementAppendTo";
    "ghostElementTemplate": "ghostElementTemplate";
    "touchStartLongPress": "touchStartLongPress";
}, {
    "dragPointerDown": "dragPointerDown";
    "dragStart": "dragStart";
    "ghostElementCreated": "ghostElementCreated";
    "dragging": "dragging";
    "dragEnd": "dragEnd";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJkcmFnZ2FibGUuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0xBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkNoYW5nZXMsIE5nWm9uZSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERyYWdnYWJsZUhlbHBlciB9IGZyb20gJy4vZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlcic7XG5pbXBvcnQgeyBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWdnYWJsZS1zY3JvbGwtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVzIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBEcmFnQXhpcyB7XG4gICAgeDogYm9vbGVhbjtcbiAgICB5OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTbmFwR3JpZCB7XG4gICAgeD86IG51bWJlcjtcbiAgICB5PzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBEcmFnUG9pbnRlckRvd25FdmVudCBleHRlbmRzIENvb3JkaW5hdGVzIHtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1N0YXJ0RXZlbnQge1xuICAgIGNhbmNlbERyYWckOiBSZXBsYXlTdWJqZWN0PHZvaWQ+O1xufVxuZXhwb3J0IGludGVyZmFjZSBEcmFnTW92ZUV2ZW50IGV4dGVuZHMgQ29vcmRpbmF0ZXMge1xufVxuZXhwb3J0IGludGVyZmFjZSBEcmFnRW5kRXZlbnQgZXh0ZW5kcyBDb29yZGluYXRlcyB7XG4gICAgZHJhZ0NhbmNlbGxlZDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGVEcmFnUGFyYW1zIGV4dGVuZHMgQ29vcmRpbmF0ZXMge1xuICAgIHRyYW5zZm9ybToge1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICB9O1xufVxuZXhwb3J0IGRlY2xhcmUgdHlwZSBWYWxpZGF0ZURyYWcgPSAocGFyYW1zOiBWYWxpZGF0ZURyYWdQYXJhbXMpID0+IGJvb2xlYW47XG5leHBvcnQgaW50ZXJmYWNlIFBvaW50ZXJFdmVudCB7XG4gICAgY2xpZW50WDogbnVtYmVyO1xuICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFRpbWVMb25nUHJlc3Mge1xuICAgIHRpbWVyQmVnaW46IG51bWJlcjtcbiAgICB0aW1lckVuZDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBHaG9zdEVsZW1lbnRDcmVhdGVkRXZlbnQge1xuICAgIGNsaWVudFg6IG51bWJlcjtcbiAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBwcml2YXRlIGRyYWdnYWJsZUhlbHBlcjtcbiAgICBwcml2YXRlIHpvbmU7XG4gICAgcHJpdmF0ZSB2Y3I7XG4gICAgcHJpdmF0ZSBzY3JvbGxDb250YWluZXI7XG4gICAgcHJpdmF0ZSBkb2N1bWVudDtcbiAgICAvKipcbiAgICAgKiBhbiBvYmplY3Qgb2YgZGF0YSB5b3UgY2FuIHBhc3MgdG8gdGhlIGRyb3AgZXZlbnRcbiAgICAgKi9cbiAgICBkcm9wRGF0YTogYW55O1xuICAgIC8qKlxuICAgICAqIFRoZSBheGlzIGFsb25nIHdoaWNoIHRoZSBlbGVtZW50IGlzIGRyYWdnYWJsZVxuICAgICAqL1xuICAgIGRyYWdBeGlzOiBEcmFnQXhpcztcbiAgICAvKipcbiAgICAgKiBTbmFwIGFsbCBkcmFncyB0byBhbiB4IC8geSBncmlkXG4gICAgICovXG4gICAgZHJhZ1NuYXBHcmlkOiBTbmFwR3JpZDtcbiAgICAvKipcbiAgICAgKiBTaG93IGEgZ2hvc3QgZWxlbWVudCB0aGF0IHNob3dzIHRoZSBkcmFnIHdoZW4gZHJhZ2dpbmdcbiAgICAgKi9cbiAgICBnaG9zdERyYWdFbmFibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNob3cgdGhlIG9yaWdpbmFsIGVsZW1lbnQgd2hlbiBnaG9zdERyYWdFbmFibGVkIGlzIHRydWVcbiAgICAgKi9cbiAgICBzaG93T3JpZ2luYWxFbGVtZW50V2hpbGVEcmFnZ2luZzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBbGxvdyBjdXN0b20gYmVoYXZpb3VyIHRvIGNvbnRyb2wgd2hlbiB0aGUgZWxlbWVudCBpcyBkcmFnZ2VkXG4gICAgICovXG4gICAgdmFsaWRhdGVEcmFnOiBWYWxpZGF0ZURyYWc7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnNvciB0byB1c2Ugd2hlbiBob3ZlcmluZyBvdmVyIGEgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICAgKi9cbiAgICBkcmFnQ3Vyc29yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGNzcyBjbGFzcyB0byBhcHBseSB3aGVuIHRoZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICAgKi9cbiAgICBkcmFnQWN0aXZlQ2xhc3M6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGUgZ2hvc3QgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkIHRvLiBEZWZhdWx0IGlzIG5leHQgdG8gdGhlIGRyYWdnZWQgZWxlbWVudFxuICAgICAqL1xuICAgIGdob3N0RWxlbWVudEFwcGVuZFRvOiBIVE1MRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBBbiBuZy10ZW1wbGF0ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgZ2hvc3QgZWxlbWVudC4gSXQgd2lsbCBvdmVyd3JpdGUgYW55IGNoaWxkIG5vZGVzLlxuICAgICAqL1xuICAgIGdob3N0RWxlbWVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBvbiB0b3VjaCBkZXZpY2VzIGJlZm9yZSBzdGFydGluZyB0byBkcmFnIHRoZSBlbGVtZW50IChzbyB0aGF0IHlvdSBjYW4gc2Nyb2xsIHRoZSBwYWdlIGJ5IHRvdWNoaW5nIGEgZHJhZ2dhYmxlIGVsZW1lbnQpXG4gICAgICovXG4gICAgdG91Y2hTdGFydExvbmdQcmVzczoge1xuICAgICAgICBkZWxheTogbnVtYmVyO1xuICAgICAgICBkZWx0YTogbnVtYmVyO1xuICAgIH07XG4gICAgYXV0b1Njcm9sbDoge1xuICAgICAgICBtYXJnaW46IG51bWJlciB8IHtcbiAgICAgICAgICAgIHRvcD86IG51bWJlcjtcbiAgICAgICAgICAgIGxlZnQ/OiBudW1iZXI7XG4gICAgICAgICAgICByaWdodD86IG51bWJlcjtcbiAgICAgICAgICAgIGJvdHRvbT86IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgbWF4U3BlZWQ/OiBudW1iZXIgfCB7XG4gICAgICAgICAgICB0b3A/OiBudW1iZXI7XG4gICAgICAgICAgICBsZWZ0PzogbnVtYmVyO1xuICAgICAgICAgICAgcmlnaHQ/OiBudW1iZXI7XG4gICAgICAgICAgICBib3R0b20/OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgICAgIHNjcm9sbFdoZW5PdXRzaWRlPzogYm9vbGVhbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGNhbiBiZSBkcmFnZ2VkIGFsb25nIG9uZSBheGlzIGFuZCBoYXMgdGhlIG1vdXNlIG9yIHBvaW50ZXIgZGV2aWNlIHByZXNzZWQgb24gaXRcbiAgICAgKi9cbiAgICBkcmFnUG9pbnRlckRvd246IEV2ZW50RW1pdHRlcjxEcmFnUG9pbnRlckRvd25FdmVudD47XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaGFzIHN0YXJ0ZWQgdG8gYmUgZHJhZ2dlZC5cbiAgICAgKiBPbmx5IGNhbGxlZCBhZnRlciBhdCBsZWFzdCBvbmUgbW91c2Ugb3IgdG91Y2ggbW92ZSBldmVudC5cbiAgICAgKiBJZiB5b3UgY2FsbCAkZXZlbnQuY2FuY2VsRHJhZyQuZW1pdCgpIGl0IHdpbGwgY2FuY2VsIHRoZSBjdXJyZW50IGRyYWdcbiAgICAgKi9cbiAgICBkcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFdmVudD47XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGFmdGVyIHRoZSBnaG9zdCBlbGVtZW50IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgKi9cbiAgICBnaG9zdEVsZW1lbnRDcmVhdGVkOiBFdmVudEVtaXR0ZXI8R2hvc3RFbGVtZW50Q3JlYXRlZEV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkXG4gICAgICovXG4gICAgZHJhZ2dpbmc6IEV2ZW50RW1pdHRlcjxEcmFnTW92ZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgZHJhZ2dlZFxuICAgICAqL1xuICAgIGRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxEcmFnRW5kRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwb2ludGVyRG93biQ6IFN1YmplY3Q8UG9pbnRlckV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcG9pbnRlck1vdmUkOiBTdWJqZWN0PFBvaW50ZXJFdmVudD47XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHBvaW50ZXJVcCQ6IFN1YmplY3Q8UG9pbnRlckV2ZW50PjtcbiAgICBwcml2YXRlIGV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zO1xuICAgIHByaXZhdGUgZ2hvc3RFbGVtZW50O1xuICAgIHByaXZhdGUgZGVzdHJveSQ7XG4gICAgcHJpdmF0ZSB0aW1lTG9uZ1ByZXNzO1xuICAgIHByaXZhdGUgc2Nyb2xsZXI7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCByZW5kZXJlcjogUmVuZGVyZXIyLCBkcmFnZ2FibGVIZWxwZXI6IERyYWdnYWJsZUhlbHBlciwgem9uZTogTmdab25lLCB2Y3I6IFZpZXdDb250YWluZXJSZWYsIHNjcm9sbENvbnRhaW5lcjogRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlLCBkb2N1bWVudDogYW55KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBjaGVja0V2ZW50TGlzdGVuZXJzO1xuICAgIHByaXZhdGUgb25Nb3VzZURvd247XG4gICAgcHJpdmF0ZSBvbk1vdXNlVXA7XG4gICAgcHJpdmF0ZSBvblRvdWNoU3RhcnQ7XG4gICAgcHJpdmF0ZSBvblRvdWNoRW5kO1xuICAgIHByaXZhdGUgb25Nb3VzZUVudGVyO1xuICAgIHByaXZhdGUgb25Nb3VzZUxlYXZlO1xuICAgIHByaXZhdGUgY2FuRHJhZztcbiAgICBwcml2YXRlIHNldEN1cnNvcjtcbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnM7XG4gICAgcHJpdmF0ZSBzZXRFbGVtZW50U3R5bGVzO1xuICAgIHByaXZhdGUgZ2V0U2Nyb2xsRWxlbWVudDtcbiAgICBwcml2YXRlIGdldFNjcm9sbFBvc2l0aW9uO1xuICAgIHByaXZhdGUgc2hvdWxkQmVnaW5EcmFnO1xuICAgIHByaXZhdGUgZW5hYmxlU2Nyb2xsO1xuICAgIHByaXZhdGUgZGlzYWJsZVNjcm9sbDtcbiAgICBwcml2YXRlIGhhc1Njcm9sbGJhcjtcbn1cbiJdfQ==