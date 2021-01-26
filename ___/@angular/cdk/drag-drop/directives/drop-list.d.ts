/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { ElementRef, EventEmitter, OnDestroy, QueryList, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { CdkDrag } from './drag';
import { CdkDragDrop, CdkDragEnter, CdkDragExit, CdkDragSortEvent } from '../drag-events';
import { CdkDropListGroup } from './drop-list-group';
import { DropListRef } from '../drop-list-ref';
import { DragDrop } from '../drag-drop';
/**
 * Internal compile-time-only representation of a `CdkDropList`.
 * Used to avoid circular import issues between the `CdkDropList` and the `CdkDrag`.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export interface CdkDropListInternal extends CdkDropList {
}
/** Container that wraps a set of draggable items. */
export declare class CdkDropList<T = any> implements AfterContentInit, OnDestroy {
    /** Element that the drop list is attached to. */
    element: ElementRef<HTMLElement>;
    private _changeDetectorRef;
    private _dir?;
    private _group?;
    /** Emits when the list has been destroyed. */
    private _destroyed;
    /** Keeps track of the drop lists that are currently on the page. */
    private static _dropLists;
    /** Reference to the underlying drop list instance. */
    _dropListRef: DropListRef<CdkDropList<T>>;
    /** Draggable items in the container. */
    _draggables: QueryList<CdkDrag>;
    /**
     * Other draggable containers that this container is connected to and into which the
     * container's items can be transferred. Can either be references to other drop containers,
     * or their unique IDs.
     */
    connectedTo: (CdkDropList | string)[] | CdkDropList | string;
    /** Arbitrary data to attach to this container. */
    data: T;
    /** Direction in which the list is oriented. */
    orientation: 'horizontal' | 'vertical';
    /**
     * Unique ID for the drop zone. Can be used as a reference
     * in the `connectedTo` of another `CdkDropList`.
     */
    id: string;
    /** Locks the position of the draggable elements inside the container along the specified axis. */
    lockAxis: 'x' | 'y';
    /** Whether starting a dragging sequence from this container is disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /** Whether sorting within this drop list is disabled. */
    sortingDisabled: boolean;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    enterPredicate: (drag: CdkDrag, drop: CdkDropList) => boolean;
    /** Whether to auto-scroll the view when the user moves their pointer close to the edges. */
    autoScrollDisabled: boolean;
    /** Emits when the user drops an item inside the container. */
    dropped: EventEmitter<CdkDragDrop<T, any>>;
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    entered: EventEmitter<CdkDragEnter<T>>;
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    exited: EventEmitter<CdkDragExit<T>>;
    /** Emits as the user is swapping items while actively dragging. */
    sorted: EventEmitter<CdkDragSortEvent<T>>;
    constructor(
    /** Element that the drop list is attached to. */
    element: ElementRef<HTMLElement>, dragDrop: DragDrop, _changeDetectorRef: ChangeDetectorRef, _dir?: Directionality | undefined, _group?: CdkDropListGroup<CdkDropList<any>> | undefined);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Starts dragging an item.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    start(): void;
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     *
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    drop(item: CdkDrag, currentIndex: number, previousContainer: CdkDropList, isPointerOverContainer: boolean): void;
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    enter(item: CdkDrag, pointerX: number, pointerY: number): void;
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    exit(item: CdkDrag): void;
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    getItemIndex(item: CdkDrag): number;
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    private _setupInputSyncSubscription;
    /** Handles events from the underlying DropListRef. */
    private _handleEvents;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_sortingDisabled: BooleanInput;
    static ngAcceptInputType_autoScrollDisabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDropList<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDropList<any>, "[cdkDropList], cdk-drop-list", ["cdkDropList"], {
    "connectedTo": "cdkDropListConnectedTo";
    "orientation": "cdkDropListOrientation";
    "id": "id";
    "sortingDisabled": "cdkDropListSortingDisabled";
    "enterPredicate": "cdkDropListEnterPredicate";
    "autoScrollDisabled": "cdkDropListAutoScrollDisabled";
    "disabled": "cdkDropListDisabled";
    "data": "cdkDropListData";
    "lockAxis": "cdkDropListLockAxis";
}, {
    "dropped": "cdkDropListDropped";
    "entered": "cdkDropListEntered";
    "exited": "cdkDropListExited";
    "sorted": "cdkDropListSorted";
}, ["_draggables"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LmQudHMiLCJzb3VyY2VzIjpbImRyb3AtbGlzdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpSEEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgUXVlcnlMaXN0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDZGtEcmFnIH0gZnJvbSAnLi9kcmFnJztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBDZGtEcmFnRW50ZXIsIENka0RyYWdFeGl0LCBDZGtEcmFnU29ydEV2ZW50IH0gZnJvbSAnLi4vZHJhZy1ldmVudHMnO1xuaW1wb3J0IHsgQ2RrRHJvcExpc3RHcm91cCB9IGZyb20gJy4vZHJvcC1saXN0LWdyb3VwJztcbmltcG9ydCB7IERyb3BMaXN0UmVmIH0gZnJvbSAnLi4vZHJvcC1saXN0LXJlZic7XG5pbXBvcnQgeyBEcmFnRHJvcCB9IGZyb20gJy4uL2RyYWctZHJvcCc7XG4vKipcbiAqIEludGVybmFsIGNvbXBpbGUtdGltZS1vbmx5IHJlcHJlc2VudGF0aW9uIG9mIGEgYENka0Ryb3BMaXN0YC5cbiAqIFVzZWQgdG8gYXZvaWQgY2lyY3VsYXIgaW1wb3J0IGlzc3VlcyBiZXR3ZWVuIHRoZSBgQ2RrRHJvcExpc3RgIGFuZCB0aGUgYENka0RyYWdgLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENka0Ryb3BMaXN0SW50ZXJuYWwgZXh0ZW5kcyBDZGtEcm9wTGlzdCB7XG59XG4vKiogQ29udGFpbmVyIHRoYXQgd3JhcHMgYSBzZXQgb2YgZHJhZ2dhYmxlIGl0ZW1zLiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrRHJvcExpc3Q8VCA9IGFueT4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIC8qKiBFbGVtZW50IHRoYXQgdGhlIGRyb3AgbGlzdCBpcyBhdHRhY2hlZCB0by4gKi9cbiAgICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwcml2YXRlIF9kaXI/O1xuICAgIHByaXZhdGUgX2dyb3VwPztcbiAgICAvKiogRW1pdHMgd2hlbiB0aGUgbGlzdCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkO1xuICAgIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZHJvcCBsaXN0cyB0aGF0IGFyZSBjdXJyZW50bHkgb24gdGhlIHBhZ2UuICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2Ryb3BMaXN0cztcbiAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIGRyb3AgbGlzdCBpbnN0YW5jZS4gKi9cbiAgICBfZHJvcExpc3RSZWY6IERyb3BMaXN0UmVmPENka0Ryb3BMaXN0PFQ+PjtcbiAgICAvKiogRHJhZ2dhYmxlIGl0ZW1zIGluIHRoZSBjb250YWluZXIuICovXG4gICAgX2RyYWdnYWJsZXM6IFF1ZXJ5TGlzdDxDZGtEcmFnPjtcbiAgICAvKipcbiAgICAgKiBPdGhlciBkcmFnZ2FibGUgY29udGFpbmVycyB0aGF0IHRoaXMgY29udGFpbmVyIGlzIGNvbm5lY3RlZCB0byBhbmQgaW50byB3aGljaCB0aGVcbiAgICAgKiBjb250YWluZXIncyBpdGVtcyBjYW4gYmUgdHJhbnNmZXJyZWQuIENhbiBlaXRoZXIgYmUgcmVmZXJlbmNlcyB0byBvdGhlciBkcm9wIGNvbnRhaW5lcnMsXG4gICAgICogb3IgdGhlaXIgdW5pcXVlIElEcy5cbiAgICAgKi9cbiAgICBjb25uZWN0ZWRUbzogKENka0Ryb3BMaXN0IHwgc3RyaW5nKVtdIHwgQ2RrRHJvcExpc3QgfCBzdHJpbmc7XG4gICAgLyoqIEFyYml0cmFyeSBkYXRhIHRvIGF0dGFjaCB0byB0aGlzIGNvbnRhaW5lci4gKi9cbiAgICBkYXRhOiBUO1xuICAgIC8qKiBEaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGxpc3QgaXMgb3JpZW50ZWQuICovXG4gICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIElEIGZvciB0aGUgZHJvcCB6b25lLiBDYW4gYmUgdXNlZCBhcyBhIHJlZmVyZW5jZVxuICAgICAqIGluIHRoZSBgY29ubmVjdGVkVG9gIG9mIGFub3RoZXIgYENka0Ryb3BMaXN0YC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIC8qKiBMb2NrcyB0aGUgcG9zaXRpb24gb2YgdGhlIGRyYWdnYWJsZSBlbGVtZW50cyBpbnNpZGUgdGhlIGNvbnRhaW5lciBhbG9uZyB0aGUgc3BlY2lmaWVkIGF4aXMuICovXG4gICAgbG9ja0F4aXM6ICd4JyB8ICd5JztcbiAgICAvKiogV2hldGhlciBzdGFydGluZyBhIGRyYWdnaW5nIHNlcXVlbmNlIGZyb20gdGhpcyBjb250YWluZXIgaXMgZGlzYWJsZWQuICovXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICAvKiogV2hldGhlciBzb3J0aW5nIHdpdGhpbiB0aGlzIGRyb3AgbGlzdCBpcyBkaXNhYmxlZC4gKi9cbiAgICBzb3J0aW5nRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGl0ZW1cbiAgICAgKiBpcyBhbGxvd2VkIHRvIGJlIG1vdmVkIGludG8gYSBkcm9wIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBlbnRlclByZWRpY2F0ZTogKGRyYWc6IENka0RyYWcsIGRyb3A6IENka0Ryb3BMaXN0KSA9PiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRvIGF1dG8tc2Nyb2xsIHRoZSB2aWV3IHdoZW4gdGhlIHVzZXIgbW92ZXMgdGhlaXIgcG9pbnRlciBjbG9zZSB0byB0aGUgZWRnZXMuICovXG4gICAgYXV0b1Njcm9sbERpc2FibGVkOiBib29sZWFuO1xuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGRyb3BzIGFuIGl0ZW0gaW5zaWRlIHRoZSBjb250YWluZXIuICovXG4gICAgZHJvcHBlZDogRXZlbnRFbWl0dGVyPENka0RyYWdEcm9wPFQsIGFueT4+O1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHdoZW4gdGhlIHVzZXIgaGFzIG1vdmVkIGEgbmV3IGRyYWcgaXRlbSBpbnRvIHRoaXMgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGVudGVyZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRW50ZXI8VD4+O1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHdoZW4gdGhlIHVzZXIgcmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIGNvbnRhaW5lclxuICAgICAqIGJ5IGRyYWdnaW5nIGl0IGludG8gYW5vdGhlciBjb250YWluZXIuXG4gICAgICovXG4gICAgZXhpdGVkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0V4aXQ8VD4+O1xuICAgIC8qKiBFbWl0cyBhcyB0aGUgdXNlciBpcyBzd2FwcGluZyBpdGVtcyB3aGlsZSBhY3RpdmVseSBkcmFnZ2luZy4gKi9cbiAgICBzb3J0ZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnU29ydEV2ZW50PFQ+PjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvKiogRWxlbWVudCB0aGF0IHRoZSBkcm9wIGxpc3QgaXMgYXR0YWNoZWQgdG8uICovXG4gICAgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIGRyYWdEcm9wOiBEcmFnRHJvcCwgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgX2Rpcj86IERpcmVjdGlvbmFsaXR5IHwgdW5kZWZpbmVkLCBfZ3JvdXA/OiBDZGtEcm9wTGlzdEdyb3VwPENka0Ryb3BMaXN0PGFueT4+IHwgdW5kZWZpbmVkKTtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBkcmFnZ2luZyBhbiBpdGVtLlxuICAgICAqIEBkZXByZWNhdGVkIE5vIGxvbmdlciBiZWluZyB1c2VkLiBUbyBiZSByZW1vdmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgc3RhcnQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBEcm9wcyBhbiBpdGVtIGludG8gdGhpcyBjb250YWluZXIuXG4gICAgICogQHBhcmFtIGl0ZW0gSXRlbSBiZWluZyBkcm9wcGVkIGludG8gdGhlIGNvbnRhaW5lci5cbiAgICAgKiBAcGFyYW0gY3VycmVudEluZGV4IEluZGV4IGF0IHdoaWNoIHRoZSBpdGVtIHNob3VsZCBiZSBpbnNlcnRlZC5cbiAgICAgKiBAcGFyYW0gcHJldmlvdXNDb250YWluZXIgQ29udGFpbmVyIGZyb20gd2hpY2ggdGhlIGl0ZW0gZ290IGRyYWdnZWQgaW4uXG4gICAgICogQHBhcmFtIGlzUG9pbnRlck92ZXJDb250YWluZXIgV2hldGhlciB0aGUgdXNlcidzIHBvaW50ZXIgd2FzIG92ZXIgdGhlXG4gICAgICogICAgY29udGFpbmVyIHdoZW4gdGhlIGl0ZW0gd2FzIGRyb3BwZWQuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIGRyb3AoaXRlbTogQ2RrRHJhZywgY3VycmVudEluZGV4OiBudW1iZXIsIHByZXZpb3VzQ29udGFpbmVyOiBDZGtEcm9wTGlzdCwgaXNQb2ludGVyT3ZlckNvbnRhaW5lcjogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlciBtb3ZlZCBhbiBpdGVtIGludG8gdGhlIGNvbnRhaW5lci5cbiAgICAgKiBAcGFyYW0gaXRlbSBJdGVtIHRoYXQgd2FzIG1vdmVkIGludG8gdGhlIGNvbnRhaW5lci5cbiAgICAgKiBAcGFyYW0gcG9pbnRlclggUG9zaXRpb24gb2YgdGhlIGl0ZW0gYWxvbmcgdGhlIFggYXhpcy5cbiAgICAgKiBAcGFyYW0gcG9pbnRlclkgUG9zaXRpb24gb2YgdGhlIGl0ZW0gYWxvbmcgdGhlIFkgYXhpcy5cbiAgICAgKiBAZGVwcmVjYXRlZCBObyBsb25nZXIgYmVpbmcgdXNlZC4gVG8gYmUgcmVtb3ZlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIGVudGVyKGl0ZW06IENka0RyYWcsIHBvaW50ZXJYOiBudW1iZXIsIHBvaW50ZXJZOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBjb250YWluZXIgYWZ0ZXIgaXQgd2FzIGRyYWdnZWQgaW50byBhbm90aGVyIGNvbnRhaW5lciBieSB0aGUgdXNlci5cbiAgICAgKiBAcGFyYW0gaXRlbSBJdGVtIHRoYXQgd2FzIGRyYWdnZWQgb3V0LlxuICAgICAqIEBkZXByZWNhdGVkIE5vIGxvbmdlciBiZWluZyB1c2VkLiBUbyBiZSByZW1vdmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgZXhpdChpdGVtOiBDZGtEcmFnKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBGaWd1cmVzIG91dCB0aGUgaW5kZXggb2YgYW4gaXRlbSBpbiB0aGUgY29udGFpbmVyLlxuICAgICAqIEBwYXJhbSBpdGVtIEl0ZW0gd2hvc2UgaW5kZXggc2hvdWxkIGJlIGRldGVybWluZWQuXG4gICAgICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgKi9cbiAgICBnZXRJdGVtSW5kZXgoaXRlbTogQ2RrRHJhZyk6IG51bWJlcjtcbiAgICAvKiogU3luY3MgdGhlIGlucHV0cyBvZiB0aGUgQ2RrRHJvcExpc3Qgd2l0aCB0aGUgb3B0aW9ucyBvZiB0aGUgdW5kZXJseWluZyBEcm9wTGlzdFJlZi4gKi9cbiAgICBwcml2YXRlIF9zZXR1cElucHV0U3luY1N1YnNjcmlwdGlvbjtcbiAgICAvKiogSGFuZGxlcyBldmVudHMgZnJvbSB0aGUgdW5kZXJseWluZyBEcm9wTGlzdFJlZi4gKi9cbiAgICBwcml2YXRlIF9oYW5kbGVFdmVudHM7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NvcnRpbmdEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvU2Nyb2xsRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==