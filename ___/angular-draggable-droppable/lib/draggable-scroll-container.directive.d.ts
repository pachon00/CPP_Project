import { ElementRef } from '@angular/core';
/**
 * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
 * ```html
  <div style="overflow: scroll" mwlDraggableScrollContainer>
    <div mwlDraggable>Drag me!</div>
  </div>
  ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class DraggableScrollContainerDirective {
    elementRef: ElementRef<HTMLElement>;
    /**
     * Trigger the DragStart after a long touch in scrollable container when true
     * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
     */
    activeLongPressDrag: boolean;
    /**
     * Configuration of a long touch
     * Duration in ms of a long touch before activating DragStart
     * Delta of the
     * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
     */
    longPressConfig: {
        duration: number;
        delta: number;
    };
    /**
     * @hidden
     */
    constructor(elementRef: ElementRef<HTMLElement>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DraggableScrollContainerDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DraggableScrollContainerDirective, "[mwlDraggableScrollContainer]", never, {
    "activeLongPressDrag": "activeLongPressDrag";
    "longPressConfig": "longPressConfig";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImRyYWdnYWJsZS1zY3JvbGwtY29udGFpbmVyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBJZiB0aGUgd2luZG93IGlzbid0IHNjcm9sbGFibGUsIHRoZW4gcGxhY2UgdGhpcyBvbiB0aGUgc2Nyb2xsYWJsZSBjb250YWluZXIgdGhhdCBkcmFnZ2FibGUgZWxlbWVudHMgYXJlIGluc2lkZS4gZS5nLlxuICogYGBgaHRtbFxuICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6IHNjcm9sbFwiIG13bERyYWdnYWJsZVNjcm9sbENvbnRhaW5lcj5cbiAgICA8ZGl2IG13bERyYWdnYWJsZT5EcmFnIG1lITwvZGl2PlxuICA8L2Rpdj5cbiAgYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSB7XG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgLyoqXG4gICAgICogVHJpZ2dlciB0aGUgRHJhZ1N0YXJ0IGFmdGVyIGEgbG9uZyB0b3VjaCBpbiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRydWVcbiAgICAgKiBAZGVwcmVjYXRlZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUgKHVzZSBbdG91Y2hTdGFydExvbmdQcmVzc109XCJ7ZGVsYXk6IDMwMCwgZGVsdGE6IDMwfVwiIG9uIHRoZSBtd2xEcmFnZ2FibGUgZWxlbWVudCBpbnN0ZWFkKVxuICAgICAqL1xuICAgIGFjdGl2ZUxvbmdQcmVzc0RyYWc6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ29uZmlndXJhdGlvbiBvZiBhIGxvbmcgdG91Y2hcbiAgICAgKiBEdXJhdGlvbiBpbiBtcyBvZiBhIGxvbmcgdG91Y2ggYmVmb3JlIGFjdGl2YXRpbmcgRHJhZ1N0YXJ0XG4gICAgICogRGVsdGEgb2YgdGhlXG4gICAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHY1ICh1c2UgW3RvdWNoU3RhcnRMb25nUHJlc3NdPVwie2RlbGF5OiAzMDAsIGRlbHRhOiAzMH1cIiBvbiB0aGUgbXdsRHJhZ2dhYmxlIGVsZW1lbnQgaW5zdGVhZClcbiAgICAgKi9cbiAgICBsb25nUHJlc3NDb25maWc6IHtcbiAgICAgICAgZHVyYXRpb246IG51bWJlcjtcbiAgICAgICAgZGVsdGE6IG51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik7XG59XG4iXX0=