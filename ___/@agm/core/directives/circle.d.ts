import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { MouseEvent } from '../map-types';
import { LatLng, LatLngBounds, LatLngLiteral } from '../services/google-maps-types';
import { CircleManager } from '../services/managers/circle-manager';
import * as ɵngcc0 from '@angular/core';
export declare class AgmCircle implements OnInit, OnChanges, OnDestroy {
    private _manager;
    /**
     * The latitude position of the circle (required).
     */
    latitude: number;
    /**
     * The clickable position of the circle (required).
     */
    longitude: number;
    /**
     * Indicates whether this Circle handles mouse events. Defaults to true.
     */
    clickable: boolean;
    /**
     * If set to true, the user can drag this circle over the map. Defaults to false.
     */
    draggable: boolean;
    /**
     * If set to true, the user can edit this circle by dragging the control points shown at
     * the center and around the circumference of the circle. Defaults to false.
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
     * The radius in meters on the Earth's surface.
     */
    radius: number;
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
     * Whether this circle is visible on the map. Defaults to true.
     */
    visible: boolean;
    /**
     * The zIndex compared to other polys.
     */
    zIndex: number;
    /**
     * This event is fired when the circle's center is changed.
     */
    centerChange: EventEmitter<LatLngLiteral>;
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */
    circleClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */
    circleDblClick: EventEmitter<MouseEvent>;
    /**
     * This event is repeatedly fired while the user drags the circle.
     */
    drag: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user stops dragging the circle.
     */
    dragEnd: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user starts dragging the circle.
     */
    dragStart: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mousedown event is fired on the circle.
     */
    mouseDown: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the circle.
     */
    mouseMove: EventEmitter<MouseEvent>;
    /**
     * This event is fired on circle mouseout.
     */
    mouseOut: EventEmitter<MouseEvent>;
    /**
     * This event is fired on circle mouseover.
     */
    mouseOver: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mouseup event is fired on the circle.
     */
    mouseUp: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the circle's radius is changed.
     */
    radiusChange: EventEmitter<number>;
    /**
     * This event is fired when the circle is right-clicked on.
     */
    rightClick: EventEmitter<MouseEvent>;
    private _circleAddedToManager;
    private static _mapOptions;
    private _eventSubscriptions;
    constructor(_manager: CircleManager);
    /** @internal */
    ngOnInit(): void;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _updateCircleOptionsChanges;
    private _registerEventListeners;
    /** @internal */
    ngOnDestroy(): void;
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds(): Promise<LatLngBounds>;
    getCenter(): Promise<LatLng>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmCircle>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmCircle, "agm-circle", never, {
    "clickable": "clickable";
    "draggable": "circleDraggable";
    "editable": "editable";
    "radius": "radius";
    "strokePosition": "strokePosition";
    "strokeWeight": "strokeWeight";
    "visible": "visible";
    "latitude": "latitude";
    "longitude": "longitude";
    "fillColor": "fillColor";
    "fillOpacity": "fillOpacity";
    "strokeColor": "strokeColor";
    "strokeOpacity": "strokeOpacity";
    "zIndex": "zIndex";
}, {
    "centerChange": "centerChange";
    "circleClick": "circleClick";
    "circleDblClick": "circleDblClick";
    "drag": "drag";
    "dragEnd": "dragEnd";
    "dragStart": "dragStart";
    "mouseDown": "mouseDown";
    "mouseMove": "mouseMove";
    "mouseOut": "mouseOut";
    "mouseOver": "mouseOver";
    "mouseUp": "mouseUp";
    "radiusChange": "radiusChange";
    "rightClick": "rightClick";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmQudHMiLCJzb3VyY2VzIjpbImNpcmNsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gJy4uL21hcC10eXBlcyc7XG5pbXBvcnQgeyBMYXRMbmcsIExhdExuZ0JvdW5kcywgTGF0TG5nTGl0ZXJhbCB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IENpcmNsZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9jaXJjbGUtbWFuYWdlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZ21DaXJjbGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9tYW5hZ2VyO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXRpdHVkZSBwb3NpdGlvbiBvZiB0aGUgY2lyY2xlIChyZXF1aXJlZCkuXG4gICAgICovXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY2xpY2thYmxlIHBvc2l0aW9uIG9mIHRoZSBjaXJjbGUgKHJlcXVpcmVkKS5cbiAgICAgKi9cbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIENpcmNsZSBoYW5kbGVzIG1vdXNlIGV2ZW50cy4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICBjbGlja2FibGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgY2lyY2xlIG92ZXIgdGhlIG1hcC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICovXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZWRpdCB0aGlzIGNpcmNsZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbCBwb2ludHMgc2hvd24gYXRcbiAgICAgKiB0aGUgY2VudGVyIGFuZCBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2Ugb2YgdGhlIGNpcmNsZS4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICovXG4gICAgZWRpdGFibGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGZpbGwgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWQgY29sb3JzLlxuICAgICAqL1xuICAgIGZpbGxDb2xvcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBmaWxsIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMC5cbiAgICAgKi9cbiAgICBmaWxsT3BhY2l0eTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSByYWRpdXMgaW4gbWV0ZXJzIG9uIHRoZSBFYXJ0aCdzIHN1cmZhY2UuXG4gICAgICovXG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHN0cm9rZSBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXG4gICAgICovXG4gICAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgc3Ryb2tlIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICAgICAqL1xuICAgIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Ryb2tlIHBvc2l0aW9uLiBEZWZhdWx0cyB0byBDRU5URVIuXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBub3Qgc3VwcG9ydGVkIG9uIEludGVybmV0IEV4cGxvcmVyIDggYW5kIGVhcmxpZXIuXG4gICAgICovXG4gICAgc3Ryb2tlUG9zaXRpb246ICdDRU5URVInIHwgJ0lOU0lERScgfCAnT1VUU0lERSc7XG4gICAgLyoqXG4gICAgICogVGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbHMuXG4gICAgICovXG4gICAgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGlzIGNpcmNsZSBpcyB2aXNpYmxlIG9uIHRoZSBtYXAuIERlZmF1bHRzIHRvIHRydWUuXG4gICAgICovXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgekluZGV4IGNvbXBhcmVkIHRvIG90aGVyIHBvbHlzLlxuICAgICAqL1xuICAgIHpJbmRleDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlJ3MgY2VudGVyIGlzIGNoYW5nZWQuXG4gICAgICovXG4gICAgY2VudGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGF0TG5nTGl0ZXJhbD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgY2lyY2xlLlxuICAgICAqL1xuICAgIGNpcmNsZUNsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgY2lyY2xlLlxuICAgICAqL1xuICAgIGNpcmNsZURibENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBjaXJjbGUuXG4gICAgICovXG4gICAgZHJhZzogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgY2lyY2xlLlxuICAgICAqL1xuICAgIGRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBjaXJjbGUuXG4gICAgICovXG4gICAgZHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBjaXJjbGUuXG4gICAgICovXG4gICAgbW91c2VEb3duOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vtb3ZlIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBjaXJjbGUuXG4gICAgICovXG4gICAgbW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBjaXJjbGUgbW91c2VvdXQuXG4gICAgICovXG4gICAgbW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIGNpcmNsZSBtb3VzZW92ZXIuXG4gICAgICovXG4gICAgbW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgY2lyY2xlLlxuICAgICAqL1xuICAgIG1vdXNlVXA6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNpcmNsZSdzIHJhZGl1cyBpcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHJhZGl1c0NoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBjaXJjbGUgaXMgcmlnaHQtY2xpY2tlZCBvbi5cbiAgICAgKi9cbiAgICByaWdodENsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgcHJpdmF0ZSBfY2lyY2xlQWRkZWRUb01hbmFnZXI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX21hcE9wdGlvbnM7XG4gICAgcHJpdmF0ZSBfZXZlbnRTdWJzY3JpcHRpb25zO1xuICAgIGNvbnN0cnVjdG9yKF9tYW5hZ2VyOiBDaXJjbGVNYW5hZ2VyKTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2U7XG4gICAgfSk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfdXBkYXRlQ2lyY2xlT3B0aW9uc0NoYW5nZXM7XG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3RlbmVycztcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBMYXRMbmdCb3VuZHMgb2YgdGhpcyBDaXJjbGUuXG4gICAgICovXG4gICAgZ2V0Qm91bmRzKCk6IFByb21pc2U8TGF0TG5nQm91bmRzPjtcbiAgICBnZXRDZW50ZXIoKTogUHJvbWlzZTxMYXRMbmc+O1xufVxuIl19