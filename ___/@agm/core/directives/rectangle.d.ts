import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { MouseEvent } from '../map-types';
import { LatLngBounds, LatLngBoundsLiteral } from '../services/google-maps-types';
import { RectangleManager } from '../services/managers/rectangle-manager';
import * as ɵngcc0 from '@angular/core';
export declare class AgmRectangle implements OnInit, OnChanges, OnDestroy {
    private _manager;
    /**
     * The north position of the rectangle (required).
     */
    north: number;
    /**
     * The east position of the rectangle (required).
     */
    east: number;
    /**
     * The south position of the rectangle (required).
     */
    south: number;
    /**
     * The west position of the rectangle (required).
     */
    west: number;
    /**
     * Indicates whether this Rectangle handles mouse events. Defaults to true.
     */
    clickable: boolean;
    /**
     * If set to true, the user can drag this rectangle over the map. Defaults to false.
     */
    draggable: boolean;
    /**
     * If set to true, the user can edit this rectangle by dragging the control points shown at
     * the center and around the circumference of the rectangle. Defaults to false.
     */
    editable: boolean;
    /**
     * The fill color. All CSS3 colors are supported except for extended named colors.
     */
    fillColor: string;
    /**
     * The fill opacity between 0.0 and 1.0.
     */
    fillOpacity: number;
    /**
     * The stroke color. All CSS3 colors are supported except for extended named colors.
     */
    strokeColor: string;
    /**
     * The stroke opacity between 0.0 and 1.0
     */
    strokeOpacity: number;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */
    strokePosition: 'CENTER' | 'INSIDE' | 'OUTSIDE';
    /**
     * The stroke width in pixels.
     */
    strokeWeight: number;
    /**
     * Whether this rectangle is visible on the map. Defaults to true.
     */
    visible: boolean;
    /**
     * The zIndex compared to other polys.
     */
    zIndex: number;
    /**
     * This event is fired when the rectangle's is changed.
     */
    boundsChange: EventEmitter<LatLngBoundsLiteral>;
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */
    rectangleClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user clicks on the rectangle.
     */
    rectangleDblClick: EventEmitter<MouseEvent>;
    /**
     * This event is repeatedly fired while the user drags the rectangle.
     */
    drag: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user stops dragging the rectangle.
     */
    dragEnd: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user starts dragging the rectangle.
     */
    dragStart: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mousedown event is fired on the rectangle.
     */
    mouseDown: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the rectangle.
     */
    mouseMove: EventEmitter<MouseEvent>;
    /**
     * This event is fired on rectangle mouseout.
     */
    mouseOut: EventEmitter<MouseEvent>;
    /**
     * This event is fired on rectangle mouseover.
     */
    mouseOver: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mouseup event is fired on the rectangle.
     */
    mouseUp: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the rectangle is right-clicked on.
     */
    rightClick: EventEmitter<MouseEvent>;
    private _rectangleAddedToManager;
    private static _mapOptions;
    private _eventSubscriptions;
    constructor(_manager: RectangleManager);
    /** @internal */
    ngOnInit(): void;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _updateRectangleOptionsChanges;
    private _registerEventListeners;
    /** @internal */
    ngOnDestroy(): void;
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds(): Promise<LatLngBounds>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmRectangle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmRectangle, "agm-rectangle", never, {
    "clickable": "clickable";
    "draggable": "rectangleDraggable";
    "editable": "editable";
    "strokePosition": "strokePosition";
    "strokeWeight": "strokeWeight";
    "visible": "visible";
    "north": "north";
    "east": "east";
    "south": "south";
    "west": "west";
    "fillColor": "fillColor";
    "fillOpacity": "fillOpacity";
    "strokeColor": "strokeColor";
    "strokeOpacity": "strokeOpacity";
    "zIndex": "zIndex";
}, {
    "boundsChange": "boundsChange";
    "rectangleClick": "rectangleClick";
    "rectangleDblClick": "rectangleDblClick";
    "drag": "drag";
    "dragEnd": "dragEnd";
    "dragStart": "dragStart";
    "mouseDown": "mouseDown";
    "mouseMove": "mouseMove";
    "mouseOut": "mouseOut";
    "mouseOver": "mouseOver";
    "mouseUp": "mouseUp";
    "rightClick": "rightClick";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdGFuZ2xlLmQudHMiLCJzb3VyY2VzIjpbInJlY3RhbmdsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtJQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSAnLi4vbWFwLXR5cGVzJztcbmltcG9ydCB7IExhdExuZ0JvdW5kcywgTGF0TG5nQm91bmRzTGl0ZXJhbCB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IFJlY3RhbmdsZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9yZWN0YW5nbGUtbWFuYWdlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZ21SZWN0YW5nbGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9tYW5hZ2VyO1xuICAgIC8qKlxuICAgICAqIFRoZSBub3J0aCBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIChyZXF1aXJlZCkuXG4gICAgICovXG4gICAgbm9ydGg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgZWFzdCBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIChyZXF1aXJlZCkuXG4gICAgICovXG4gICAgZWFzdDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBzb3V0aCBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIChyZXF1aXJlZCkuXG4gICAgICovXG4gICAgc291dGg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgd2VzdCBwb3NpdGlvbiBvZiB0aGUgcmVjdGFuZ2xlIChyZXF1aXJlZCkuXG4gICAgICovXG4gICAgd2VzdDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgUmVjdGFuZ2xlIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAqL1xuICAgIGNsaWNrYWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyByZWN0YW5nbGUgb3ZlciB0aGUgbWFwLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBkcmFnZ2FibGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBlZGl0IHRoaXMgcmVjdGFuZ2xlIGJ5IGRyYWdnaW5nIHRoZSBjb250cm9sIHBvaW50cyBzaG93biBhdFxuICAgICAqIHRoZSBjZW50ZXIgYW5kIGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSBvZiB0aGUgcmVjdGFuZ2xlLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBlZGl0YWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZmlsbCBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXG4gICAgICovXG4gICAgZmlsbENvbG9yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGZpbGwgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wLlxuICAgICAqL1xuICAgIGZpbGxPcGFjaXR5OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHN0cm9rZSBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXG4gICAgICovXG4gICAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgc3Ryb2tlIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICAgICAqL1xuICAgIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Ryb2tlIHBvc2l0aW9uLiBEZWZhdWx0cyB0byBDRU5URVIuXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBub3Qgc3VwcG9ydGVkIG9uIEludGVybmV0IEV4cGxvcmVyIDggYW5kIGVhcmxpZXIuXG4gICAgICovXG4gICAgc3Ryb2tlUG9zaXRpb246ICdDRU5URVInIHwgJ0lOU0lERScgfCAnT1VUU0lERSc7XG4gICAgLyoqXG4gICAgICogVGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbHMuXG4gICAgICovXG4gICAgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGlzIHJlY3RhbmdsZSBpcyB2aXNpYmxlIG9uIHRoZSBtYXAuIERlZmF1bHRzIHRvIHRydWUuXG4gICAgICovXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgekluZGV4IGNvbXBhcmVkIHRvIG90aGVyIHBvbHlzLlxuICAgICAqL1xuICAgIHpJbmRleDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgcmVjdGFuZ2xlJ3MgaXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBib3VuZHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYXRMbmdCb3VuZHNMaXRlcmFsPjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSByZWN0YW5nbGUuXG4gICAgICovXG4gICAgcmVjdGFuZ2xlQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSByZWN0YW5nbGUuXG4gICAgICovXG4gICAgcmVjdGFuZ2xlRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJlcGVhdGVkbHkgZmlyZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MgdGhlIHJlY3RhbmdsZS5cbiAgICAgKi9cbiAgICBkcmFnOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSByZWN0YW5nbGUuXG4gICAgICovXG4gICAgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIHJlY3RhbmdsZS5cbiAgICAgKi9cbiAgICBkcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIHJlY3RhbmdsZS5cbiAgICAgKi9cbiAgICBtb3VzZURvd246IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIHJlY3RhbmdsZS5cbiAgICAgKi9cbiAgICBtb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIHJlY3RhbmdsZSBtb3VzZW91dC5cbiAgICAgKi9cbiAgICBtb3VzZU91dDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gcmVjdGFuZ2xlIG1vdXNlb3Zlci5cbiAgICAgKi9cbiAgICBtb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZXVwIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSByZWN0YW5nbGUuXG4gICAgICovXG4gICAgbW91c2VVcDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgcmVjdGFuZ2xlIGlzIHJpZ2h0LWNsaWNrZWQgb24uXG4gICAgICovXG4gICAgcmlnaHRDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIHByaXZhdGUgX3JlY3RhbmdsZUFkZGVkVG9NYW5hZ2VyO1xuICAgIHByaXZhdGUgc3RhdGljIF9tYXBPcHRpb25zO1xuICAgIHByaXZhdGUgX2V2ZW50U3Vic2NyaXB0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihfbWFuYWdlcjogUmVjdGFuZ2xlTWFuYWdlcik7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xuICAgIH0pOiB2b2lkO1xuICAgIHByaXZhdGUgX3VwZGF0ZVJlY3RhbmdsZU9wdGlvbnNDaGFuZ2VzO1xuICAgIHByaXZhdGUgX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnM7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgTGF0TG5nQm91bmRzIG9mIHRoaXMgUmVjdGFuZ2xlLlxuICAgICAqL1xuICAgIGdldEJvdW5kcygpOiBQcm9taXNlPExhdExuZ0JvdW5kcz47XG59XG4iXX0=