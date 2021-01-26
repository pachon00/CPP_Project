import { Renderer2, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { ResizableDirective } from './resizable.directive';
import { Edges } from './interfaces/edges.interface';
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class ResizeHandleDirective implements OnDestroy {
    private renderer;
    private element;
    private zone;
    private resizable;
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     */
    resizeEdges: Edges;
    private eventListeners;
    constructor(renderer: Renderer2, element: ElementRef, zone: NgZone, resizable: ResizableDirective);
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    onMousedown(event: MouseEvent | TouchEvent, clientX: number, clientY: number): void;
    /**
     * @hidden
     */
    onMouseup(clientX: number, clientY: number): void;
    private onMousemove;
    private unsubscribeEventListeners;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResizeHandleDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ResizeHandleDirective, "[mwlResizeHandle]", never, {
    "resizeEdges": "resizeEdges";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsicmVzaXplLWhhbmRsZS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzaXphYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9yZXNpemFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEVkZ2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2VkZ2VzLmludGVyZmFjZSc7XG4vKipcbiAqIEFuIGVsZW1lbnQgcGxhY2VkIGluc2lkZSBhIGBtd2xSZXNpemFibGVgIGRpcmVjdGl2ZSB0byBiZSB1c2VkIGFzIGEgZHJhZyBhbmQgcmVzaXplIGhhbmRsZVxuICpcbiAqIEZvciBleGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBtd2xSZXNpemFibGU+XG4gKiAgIDxkaXYgbXdsUmVzaXplSGFuZGxlIFtyZXNpemVFZGdlc109XCJ7Ym90dG9tOiB0cnVlLCByaWdodDogdHJ1ZX1cIj48L2Rpdj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJlc2l6ZUhhbmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBwcml2YXRlIGVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB6b25lO1xuICAgIHByaXZhdGUgcmVzaXphYmxlO1xuICAgIC8qKlxuICAgICAqIFRoZSBgRWRnZXNgIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBlZGdlcyBvZiB0aGUgcGFyZW50IGVsZW1lbnQgdGhhdCBkcmFnZ2luZyB0aGUgaGFuZGxlIHdpbGwgdHJpZ2dlciBhIHJlc2l6ZSBvblxuICAgICAqL1xuICAgIHJlc2l6ZUVkZ2VzOiBFZGdlcztcbiAgICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzO1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHpvbmU6IE5nWm9uZSwgcmVzaXphYmxlOiBSZXNpemFibGVEaXJlY3RpdmUpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCwgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBvbk1vdXNldXAoY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkO1xuICAgIHByaXZhdGUgb25Nb3VzZW1vdmU7XG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzO1xufVxuIl19