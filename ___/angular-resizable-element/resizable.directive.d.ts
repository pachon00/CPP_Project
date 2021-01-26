import { Renderer2, ElementRef, OnInit, EventEmitter, OnDestroy, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Edges } from './interfaces/edges.interface';
import { ResizeEvent } from './interfaces/resize-event.interface';
import * as ɵngcc0 from '@angular/core';
export interface ResizeCursors {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
    leftOrRight: string;
    topOrBottom: string;
}
export declare const MOUSE_MOVE_THROTTLE_MS: number;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
export declare class ResizableDirective implements OnInit, OnChanges, OnDestroy {
    private platformId;
    private renderer;
    elm: ElementRef;
    private zone;
    /**
     * A function that will be called before each resize event. Return `true` to allow the resize event to propagate or `false` to cancel it
     */
    validateResize: (resizeEvent: ResizeEvent) => boolean;
    /**
     * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
     * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
     */
    resizeEdges: Edges;
    /**
     * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
     */
    enableGhostResize: boolean;
    /**
     * A snap grid that resize events will be locked to.
     *
     * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
     */
    resizeSnapGrid: Edges;
    /**
     * The mouse cursors that will be set on the resize edges
     */
    resizeCursors: ResizeCursors;
    /**
     * Mouse over thickness to active cursor.
     * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
     */
    resizeCursorPrecision: number;
    /**
     * Define the positioning of the ghost element (can be fixed or absolute)
     */
    ghostElementPositioning: 'fixed' | 'absolute';
    /**
     * Allow elements to be resized to negative dimensions
     */
    allowNegativeResizes: boolean;
    /**
     * The mouse move throttle in milliseconds, default: 50 ms
     */
    mouseMoveThrottleMS: number;
    /**
     * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
     */
    resizeStart: EventEmitter<ResizeEvent>;
    /**
     * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
     */
    resizing: EventEmitter<ResizeEvent>;
    /**
     * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
     */
    resizeEnd: EventEmitter<ResizeEvent>;
    /**
     * @hidden
     */
    mouseup: Subject<{
        clientX: number;
        clientY: number;
        edges?: Edges;
    }>;
    /**
     * @hidden
     */
    mousedown: Subject<{
        clientX: number;
        clientY: number;
        edges?: Edges;
    }>;
    /**
     * @hidden
     */
    mousemove: Subject<{
        clientX: number;
        clientY: number;
        edges?: Edges;
        event: MouseEvent | TouchEvent;
    }>;
    private pointerEventListeners;
    private destroy$;
    private resizeEdges$;
    /**
     * @hidden
     */
    constructor(platformId: any, renderer: Renderer2, elm: ElementRef, zone: NgZone);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    private setElementClass;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResizableDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ResizableDirective, "[mwlResizable]", never, {
    "resizeEdges": "resizeEdges";
    "enableGhostResize": "enableGhostResize";
    "resizeSnapGrid": "resizeSnapGrid";
    "resizeCursors": "resizeCursors";
    "resizeCursorPrecision": "resizeCursorPrecision";
    "ghostElementPositioning": "ghostElementPositioning";
    "allowNegativeResizes": "allowNegativeResizes";
    "mouseMoveThrottleMS": "mouseMoveThrottleMS";
    "validateResize": "validateResize";
}, {
    "resizeStart": "resizeStart";
    "resizing": "resizing";
    "resizeEnd": "resizeEnd";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJyZXNpemFibGUuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBIQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgTmdab25lLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVkZ2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2VkZ2VzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBSZXNpemVFdmVudCB9IGZyb20gJy4vaW50ZXJmYWNlcy9yZXNpemUtZXZlbnQuaW50ZXJmYWNlJztcbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXplQ3Vyc29ycyB7XG4gICAgdG9wTGVmdDogc3RyaW5nO1xuICAgIHRvcFJpZ2h0OiBzdHJpbmc7XG4gICAgYm90dG9tTGVmdDogc3RyaW5nO1xuICAgIGJvdHRvbVJpZ2h0OiBzdHJpbmc7XG4gICAgbGVmdE9yUmlnaHQ6IHN0cmluZztcbiAgICB0b3BPckJvdHRvbTogc3RyaW5nO1xufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgTU9VU0VfTU9WRV9USFJPVFRMRV9NUzogbnVtYmVyO1xuLyoqXG4gKiBQbGFjZSB0aGlzIG9uIGFuIGVsZW1lbnQgdG8gbWFrZSBpdCByZXNpemFibGUuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXZcbiAqICAgbXdsUmVzaXphYmxlXG4gKiAgIFtyZXNpemVFZGdlc109XCJ7Ym90dG9tOiB0cnVlLCByaWdodDogdHJ1ZSwgdG9wOiB0cnVlLCBsZWZ0OiB0cnVlfVwiXG4gKiAgIFtlbmFibGVHaG9zdFJlc2l6ZV09XCJ0cnVlXCI+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZXNpemFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHBsYXRmb3JtSWQ7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBlbG06IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSB6b25lO1xuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgZWFjaCByZXNpemUgZXZlbnQuIFJldHVybiBgdHJ1ZWAgdG8gYWxsb3cgdGhlIHJlc2l6ZSBldmVudCB0byBwcm9wYWdhdGUgb3IgYGZhbHNlYCB0byBjYW5jZWwgaXRcbiAgICAgKi9cbiAgICB2YWxpZGF0ZVJlc2l6ZTogKHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCkgPT4gYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZWRnZXMgdGhhdCBhbiBlbGVtZW50IGNhbiBiZSByZXNpemVkIGZyb20uIFBhc3MgYW4gb2JqZWN0IGxpa2UgYHt0b3A6IHRydWUsIGJvdHRvbTogZmFsc2V9YC4gQnkgZGVmYXVsdCBubyBlZGdlcyBjYW4gYmUgcmVzaXplZC5cbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgYSByZXNpemUgaGFuZGxlIGluc3RlYWQgdGhhdCBwb3NpdGlvbnMgaXRzZWxmIHRvIHRoZSBzaWRlIG9mIHRoZSBlbGVtZW50IHlvdSB3b3VsZCBsaWtlIHRvIHJlc2l6ZVxuICAgICAqL1xuICAgIHJlc2l6ZUVkZ2VzOiBFZGdlcztcbiAgICAvKipcbiAgICAgKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSBhIHRlbXBvcmFyeSByZXNpemluZyBlZmZlY3Qgb2YgdGhlIGVsZW1lbnQgaW4gYmV0d2VlbiB0aGUgYHJlc2l6ZVN0YXJ0YCBhbmQgYHJlc2l6ZUVuZGAgZXZlbnRzLlxuICAgICAqL1xuICAgIGVuYWJsZUdob3N0UmVzaXplOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEEgc25hcCBncmlkIHRoYXQgcmVzaXplIGV2ZW50cyB3aWxsIGJlIGxvY2tlZCB0by5cbiAgICAgKlxuICAgICAqIGUuZy4gdG8gb25seSBhbGxvdyB0aGUgZWxlbWVudCB0byBiZSByZXNpemVkIGV2ZXJ5IDEwcHggc2V0IGl0IHRvIGB7bGVmdDogMTAsIHJpZ2h0OiAxMH1gXG4gICAgICovXG4gICAgcmVzaXplU25hcEdyaWQ6IEVkZ2VzO1xuICAgIC8qKlxuICAgICAqIFRoZSBtb3VzZSBjdXJzb3JzIHRoYXQgd2lsbCBiZSBzZXQgb24gdGhlIHJlc2l6ZSBlZGdlc1xuICAgICAqL1xuICAgIHJlc2l6ZUN1cnNvcnM6IFJlc2l6ZUN1cnNvcnM7XG4gICAgLyoqXG4gICAgICogTW91c2Ugb3ZlciB0aGlja25lc3MgdG8gYWN0aXZlIGN1cnNvci5cbiAgICAgKiBAZGVwcmVjYXRlZCBpbnZhbGlkIHdoZW4geW91IG1pZ3JhdGUgdG8gdXNlIHJlc2l6ZSBoYW5kbGVzIGluc3RlYWQgb2Ygc2V0dGluZyByZXNpemVFZGdlcyBvbiB0aGUgZWxlbWVudFxuICAgICAqL1xuICAgIHJlc2l6ZUN1cnNvclByZWNpc2lvbjogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgcG9zaXRpb25pbmcgb2YgdGhlIGdob3N0IGVsZW1lbnQgKGNhbiBiZSBmaXhlZCBvciBhYnNvbHV0ZSlcbiAgICAgKi9cbiAgICBnaG9zdEVsZW1lbnRQb3NpdGlvbmluZzogJ2ZpeGVkJyB8ICdhYnNvbHV0ZSc7XG4gICAgLyoqXG4gICAgICogQWxsb3cgZWxlbWVudHMgdG8gYmUgcmVzaXplZCB0byBuZWdhdGl2ZSBkaW1lbnNpb25zXG4gICAgICovXG4gICAgYWxsb3dOZWdhdGl2ZVJlc2l6ZXM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIG1vdXNlIG1vdmUgdGhyb3R0bGUgaW4gbWlsbGlzZWNvbmRzLCBkZWZhdWx0OiA1MCBtc1xuICAgICAqL1xuICAgIG1vdXNlTW92ZVRocm90dGxlTVM6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW91c2UgaXMgcHJlc3NlZCBhbmQgYSByZXNpemUgZXZlbnQgaXMgYWJvdXQgdG8gYmVnaW4uIGAkZXZlbnRgIGlzIGEgYFJlc2l6ZUV2ZW50YCBvYmplY3QuXG4gICAgICovXG4gICAgcmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxSZXNpemVFdmVudD47XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGFzIHRoZSBtb3VzZSBpcyBkcmFnZ2VkIGFmdGVyIGEgcmVzaXplIGV2ZW50IGhhcyBiZWd1bi4gYCRldmVudGAgaXMgYSBgUmVzaXplRXZlbnRgIG9iamVjdC5cbiAgICAgKi9cbiAgICByZXNpemluZzogRXZlbnRFbWl0dGVyPFJlc2l6ZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIG1vdXNlIGlzIHJlbGVhc2VkIGFmdGVyIGEgcmVzaXplIGV2ZW50LiBgJGV2ZW50YCBpcyBhIGBSZXNpemVFdmVudGAgb2JqZWN0LlxuICAgICAqL1xuICAgIHJlc2l6ZUVuZDogRXZlbnRFbWl0dGVyPFJlc2l6ZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbW91c2V1cDogU3ViamVjdDx7XG4gICAgICAgIGNsaWVudFg6IG51bWJlcjtcbiAgICAgICAgY2xpZW50WTogbnVtYmVyO1xuICAgICAgICBlZGdlcz86IEVkZ2VzO1xuICAgIH0+O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBtb3VzZWRvd246IFN1YmplY3Q8e1xuICAgICAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICAgICAgZWRnZXM/OiBFZGdlcztcbiAgICB9PjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbW91c2Vtb3ZlOiBTdWJqZWN0PHtcbiAgICAgICAgY2xpZW50WDogbnVtYmVyO1xuICAgICAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgICAgIGVkZ2VzPzogRWRnZXM7XG4gICAgICAgIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbiAgICB9PjtcbiAgICBwcml2YXRlIHBvaW50ZXJFdmVudExpc3RlbmVycztcbiAgICBwcml2YXRlIGRlc3Ryb3kkO1xuICAgIHByaXZhdGUgcmVzaXplRWRnZXMkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkOiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsbTogRWxlbWVudFJlZiwgem9uZTogTmdab25lKTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzZXRFbGVtZW50Q2xhc3M7XG59XG4iXX0=