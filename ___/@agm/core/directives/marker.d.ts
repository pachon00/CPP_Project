import { AfterContentInit, EventEmitter, OnChanges, OnDestroy, QueryList, SimpleChange } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { MouseEvent } from '../map-types';
import { FitBoundsAccessor, FitBoundsDetails } from '../services/fit-bounds';
import * as mapTypes from '../services/google-maps-types';
import { MarkerManager } from '../services/managers/marker-manager';
import { AgmInfoWindow } from './info-window';
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmMarker implements OnDestroy, OnChanges, AfterContentInit, FitBoundsAccessor {
    private _markerManager;
    /**
     * The latitude position of the marker.
     */
    latitude: number;
    /**
     * The longitude position of the marker.
     */
    longitude: number;
    /**
     * The title of the marker.
     */
    title: string;
    /**
     * The label (a single uppercase character) for the marker.
     */
    label: string | mapTypes.MarkerLabel;
    /**
     * If true, the marker can be dragged. Default value is false.
     */
    draggable: boolean;
    /**
     * Icon (the URL of the image) for the foreground.
     */
    iconUrl: string;
    /**
     * If true, the marker is visible
     */
    visible: boolean;
    /**
     * Whether to automatically open the child info window when the marker is clicked.
     */
    openInfoWindow: boolean;
    /**
     * The marker's opacity between 0.0 and 1.0.
     */
    opacity: number;
    /**
     * All markers are displayed on the map in order of their zIndex, with higher values displaying in
     * front of markers with lower values. By default, markers are displayed according to their
     * vertical position on screen, with lower markers appearing in front of markers further up the
     * screen.
     */
    zIndex: number;
    /**
     * If true, the marker can be clicked. Default value is true.
     */
    clickable: boolean;
    /**
     * Which animation to play when marker is added to a map.
     * This can be 'BOUNCE' or 'DROP'
     */
    animation: Animation;
    /**
     * This event is fired when the marker's animation property changes.
     *
     * @memberof AgmMarker
     */
    animationChange: EventEmitter<Animation>;
    /**
     * This event emitter gets emitted when the user clicks on the marker.
     */
    markerClick: EventEmitter<AgmMarker>;
    /**
     * This event emitter gets emitted when the user clicks twice on the marker.
     */
    markerDblClick: EventEmitter<AgmMarker>;
    /**
     * This event is fired when the user rightclicks on the marker.
     */
    markerRightClick: EventEmitter<void>;
    /**
     * This event is fired when the user starts dragging the marker.
     */
    dragStart: EventEmitter<MouseEvent>;
    /**
     * This event is repeatedly fired while the user drags the marker.
     */
    drag: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user stops dragging the marker.
     */
    dragEnd: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user mouses over the marker.
     */
    mouseOver: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user mouses outside the marker.
     */
    mouseOut: EventEmitter<MouseEvent>;
    /** @internal */
    infoWindow: QueryList<AgmInfoWindow>;
    private _markerAddedToManger;
    private _id;
    private _observableSubscriptions;
    protected readonly _fitBoundsDetails$: ReplaySubject<FitBoundsDetails>;
    constructor(_markerManager: MarkerManager);
    ngAfterContentInit(): void;
    private handleInfoWindowUpdate;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    /** @internal */
    getFitBoundsDetails$(): Observable<FitBoundsDetails>;
    protected _updateFitBoundsDetails(): void;
    private _addEventListeners;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmMarker>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmMarker, "agm-marker", never, {
    "latitude": "latitude";
    "longitude": "longitude";
    "title": "title";
    "label": "label";
    "draggable": "markerDraggable";
    "iconUrl": "iconUrl";
    "openInfoWindow": "openInfoWindow";
    "opacity": "opacity";
    "visible": "visible";
    "zIndex": "zIndex";
    "animation": "animation";
    "clickable": "markerClickable";
}, {
    "markerClick": "markerClick";
    "dragStart": "dragStart";
    "drag": "drag";
    "dragEnd": "dragEnd";
    "mouseOver": "mouseOver";
    "mouseOut": "mouseOut";
    "animationChange": "animationChange";
    "markerDblClick": "markerDblClick";
    "markerRightClick": "markerRightClick";
}, ["infoWindow"]>;
}
export declare type Animation = 'BOUNCE' | 'DROP' | null;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmQudHMiLCJzb3VyY2VzIjpbIm1hcmtlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1IQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSAnLi4vbWFwLXR5cGVzJztcbmltcG9ydCB7IEZpdEJvdW5kc0FjY2Vzc29yLCBGaXRCb3VuZHNEZXRhaWxzIH0gZnJvbSAnLi4vc2VydmljZXMvZml0LWJvdW5kcyc7XG5pbXBvcnQgKiBhcyBtYXBUeXBlcyBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy10eXBlcyc7XG5pbXBvcnQgeyBNYXJrZXJNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXInO1xuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4vaW5mby13aW5kb3cnO1xuLyoqXG4gKiBBZ21NYXJrZXIgcmVuZGVycyBhIG1hcCBtYXJrZXIgaW5zaWRlIGEge0BsaW5rIEFnbU1hcH0uXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgLmFnbS1tYXAtY29udGFpbmVyIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFtsYWJlbF09XCInTSdcIj5cbiAqICAgICAgPC9hZ20tbWFya2VyPlxuICogICAgPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdtTWFya2VyIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIEZpdEJvdW5kc0FjY2Vzc29yIHtcbiAgICBwcml2YXRlIF9tYXJrZXJNYW5hZ2VyO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXRpdHVkZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGxvbmdpdHVkZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIChhIHNpbmdsZSB1cHBlcmNhc2UgY2hhcmFjdGVyKSBmb3IgdGhlIG1hcmtlci5cbiAgICAgKi9cbiAgICBsYWJlbDogc3RyaW5nIHwgbWFwVHlwZXMuTWFya2VyTGFiZWw7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBjYW4gYmUgZHJhZ2dlZC4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICBkcmFnZ2FibGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWNvbiAodGhlIFVSTCBvZiB0aGUgaW1hZ2UpIGZvciB0aGUgZm9yZWdyb3VuZC5cbiAgICAgKi9cbiAgICBpY29uVXJsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBpcyB2aXNpYmxlXG4gICAgICovXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgb3BlbiB0aGUgY2hpbGQgaW5mbyB3aW5kb3cgd2hlbiB0aGUgbWFya2VyIGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgb3BlbkluZm9XaW5kb3c6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIG1hcmtlcidzIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMC5cbiAgICAgKi9cbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQWxsIG1hcmtlcnMgYXJlIGRpc3BsYXllZCBvbiB0aGUgbWFwIGluIG9yZGVyIG9mIHRoZWlyIHpJbmRleCwgd2l0aCBoaWdoZXIgdmFsdWVzIGRpc3BsYXlpbmcgaW5cbiAgICAgKiBmcm9udCBvZiBtYXJrZXJzIHdpdGggbG93ZXIgdmFsdWVzLiBCeSBkZWZhdWx0LCBtYXJrZXJzIGFyZSBkaXNwbGF5ZWQgYWNjb3JkaW5nIHRvIHRoZWlyXG4gICAgICogdmVydGljYWwgcG9zaXRpb24gb24gc2NyZWVuLCB3aXRoIGxvd2VyIG1hcmtlcnMgYXBwZWFyaW5nIGluIGZyb250IG9mIG1hcmtlcnMgZnVydGhlciB1cCB0aGVcbiAgICAgKiBzY3JlZW4uXG4gICAgICovXG4gICAgekluZGV4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBjYW4gYmUgY2xpY2tlZC4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgICAqL1xuICAgIGNsaWNrYWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBXaGljaCBhbmltYXRpb24gdG8gcGxheSB3aGVuIG1hcmtlciBpcyBhZGRlZCB0byBhIG1hcC5cbiAgICAgKiBUaGlzIGNhbiBiZSAnQk9VTkNFJyBvciAnRFJPUCdcbiAgICAgKi9cbiAgICBhbmltYXRpb246IEFuaW1hdGlvbjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1hcmtlcidzIGFuaW1hdGlvbiBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIEFnbU1hcmtlclxuICAgICAqL1xuICAgIGFuaW1hdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEFuaW1hdGlvbj47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIG1hcmtlckNsaWNrOiBFdmVudEVtaXR0ZXI8QWdtTWFya2VyPjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHR3aWNlIG9uIHRoZSBtYXJrZXIuXG4gICAgICovXG4gICAgbWFya2VyRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxBZ21NYXJrZXI+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciByaWdodGNsaWNrcyBvbiB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIG1hcmtlclJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBtYXJrZXIuXG4gICAgICovXG4gICAgZHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBtYXJrZXIuXG4gICAgICovXG4gICAgZHJhZzogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgbWFya2VyLlxuICAgICAqL1xuICAgIGRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgbW91c2VzIG92ZXIgdGhlIG1hcmtlci5cbiAgICAgKi9cbiAgICBtb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgbW91c2VzIG91dHNpZGUgdGhlIG1hcmtlci5cbiAgICAgKi9cbiAgICBtb3VzZU91dDogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBpbmZvV2luZG93OiBRdWVyeUxpc3Q8QWdtSW5mb1dpbmRvdz47XG4gICAgcHJpdmF0ZSBfbWFya2VyQWRkZWRUb01hbmdlcjtcbiAgICBwcml2YXRlIF9pZDtcbiAgICBwcml2YXRlIF9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2ZpdEJvdW5kc0RldGFpbHMkOiBSZXBsYXlTdWJqZWN0PEZpdEJvdW5kc0RldGFpbHM+O1xuICAgIGNvbnN0cnVjdG9yKF9tYXJrZXJNYW5hZ2VyOiBNYXJrZXJNYW5hZ2VyKTtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGhhbmRsZUluZm9XaW5kb3dVcGRhdGU7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO1xuICAgIH0pOiB2b2lkO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBnZXRGaXRCb3VuZHNEZXRhaWxzJCgpOiBPYnNlcnZhYmxlPEZpdEJvdW5kc0RldGFpbHM+O1xuICAgIHByb3RlY3RlZCBfdXBkYXRlRml0Qm91bmRzRGV0YWlscygpOiB2b2lkO1xuICAgIHByaXZhdGUgX2FkZEV2ZW50TGlzdGVuZXJzO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBpZCgpOiBzdHJpbmc7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbmV4cG9ydCBkZWNsYXJlIHR5cGUgQW5pbWF0aW9uID0gJ0JPVU5DRScgfCAnRFJPUCcgfCBudWxsO1xuIl19