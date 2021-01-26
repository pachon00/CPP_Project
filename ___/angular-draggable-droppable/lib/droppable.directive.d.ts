import { OnInit, ElementRef, OnDestroy, EventEmitter, NgZone, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { DraggableHelper } from './draggable-helper.provider';
import { DraggableScrollContainerDirective } from './draggable-scroll-container.directive';
import * as ɵngcc0 from '@angular/core';
export interface DropEvent<T = any> {
    dropData: T;
}
export declare class DroppableDirective implements OnInit, OnDestroy {
    private element;
    private draggableHelper;
    private zone;
    private renderer;
    private scrollContainer;
    /**
     * Added to the element when an element is dragged over it
     */
    dragOverClass: string;
    /**
     * Added to the element any time a draggable element is being dragged
     */
    dragActiveClass: string;
    /**
     * Called when a draggable element starts overlapping the element
     */
    dragEnter: EventEmitter<DropEvent<any>>;
    /**
     * Called when a draggable element stops overlapping the element
     */
    dragLeave: EventEmitter<DropEvent<any>>;
    /**
     * Called when a draggable element is moved over the element
     */
    dragOver: EventEmitter<DropEvent<any>>;
    /**
     * Called when a draggable element is dropped on this element
     */
    drop: EventEmitter<DropEvent<any>>;
    currentDragSubscription: Subscription;
    constructor(element: ElementRef<HTMLElement>, draggableHelper: DraggableHelper, zone: NgZone, renderer: Renderer2, scrollContainer: DraggableScrollContainerDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DroppableDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DroppableDirective, "[mwlDroppable]", never, {
    "dragOverClass": "dragOverClass";
    "dragActiveClass": "dragActiveClass";
}, {
    "dragEnter": "dragEnter";
    "dragLeave": "dragLeave";
    "dragOver": "dragOver";
    "drop": "drop";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJkcm9wcGFibGUuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgTmdab25lLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSGVscGVyIH0gZnJvbSAnLi9kcmFnZ2FibGUtaGVscGVyLnByb3ZpZGVyJztcbmltcG9ydCB7IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlJztcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEV2ZW50PFQgPSBhbnk+IHtcbiAgICBkcm9wRGF0YTogVDtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBkcmFnZ2FibGVIZWxwZXI7XG4gICAgcHJpdmF0ZSB6b25lO1xuICAgIHByaXZhdGUgcmVuZGVyZXI7XG4gICAgcHJpdmF0ZSBzY3JvbGxDb250YWluZXI7XG4gICAgLyoqXG4gICAgICogQWRkZWQgdG8gdGhlIGVsZW1lbnQgd2hlbiBhbiBlbGVtZW50IGlzIGRyYWdnZWQgb3ZlciBpdFxuICAgICAqL1xuICAgIGRyYWdPdmVyQ2xhc3M6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBZGRlZCB0byB0aGUgZWxlbWVudCBhbnkgdGltZSBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICAgKi9cbiAgICBkcmFnQWN0aXZlQ2xhc3M6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IHN0YXJ0cyBvdmVybGFwcGluZyB0aGUgZWxlbWVudFxuICAgICAqL1xuICAgIGRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPERyb3BFdmVudDxhbnk+PjtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IHN0b3BzIG92ZXJsYXBwaW5nIHRoZSBlbGVtZW50XG4gICAgICovXG4gICAgZHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PGFueT4+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgbW92ZWQgb3ZlciB0aGUgZWxlbWVudFxuICAgICAqL1xuICAgIGRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PGFueT4+O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgZHJvcHBlZCBvbiB0aGlzIGVsZW1lbnRcbiAgICAgKi9cbiAgICBkcm9wOiBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PGFueT4+O1xuICAgIGN1cnJlbnREcmFnU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIGRyYWdnYWJsZUhlbHBlcjogRHJhZ2dhYmxlSGVscGVyLCB6b25lOiBOZ1pvbmUsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHNjcm9sbENvbnRhaW5lcjogRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=