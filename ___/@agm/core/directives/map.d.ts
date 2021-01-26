import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MouseEvent } from '../map-types';
import { FitBoundsService } from '../services/fit-bounds';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { FullscreenControlOptions, LatLngBounds, LatLngBoundsLiteral, LatLngLiteral, MapRestriction, MapTypeControlOptions, MapTypeId, MapTypeStyle, Padding, PanControlOptions, RotateControlOptions, ScaleControlOptions, StreetViewControlOptions, ZoomControlOptions } from '../services/google-maps-types';
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmMap implements OnChanges, OnInit, OnDestroy {
    private _elem;
    private _mapsWrapper;
    private _platformId;
    protected _fitBoundsService: FitBoundsService;
    private _zone;
    /**
     * The longitude that defines the center of the map.
     */
    longitude: number;
    /**
     * The latitude that defines the center of the map.
     */
    latitude: number;
    /**
     * The zoom level of the map. The default zoom level is 8.
     */
    zoom: number;
    /**
     * The minimal zoom level of the map allowed. When not provided, no restrictions to the zoom level
     * are enforced.
     */
    minZoom: number;
    /**
     * The maximal zoom level of the map allowed. When not provided, no restrictions to the zoom level
     * are enforced.
     */
    maxZoom: number;
    /**
     * The control size for the default map controls. Only governs the controls made by the Maps API itself
     */
    controlSize: number;
    /**
     * Enables/disables if map is draggable.
     */
    draggable: boolean;
    /**
     * Enables/disables zoom and center on double click. Enabled by default.
     */
    disableDoubleClickZoom: boolean;
    /**
     * Enables/disables all default UI of the Google map. Please note: When the map is created, this
     * value cannot get updated.
     */
    disableDefaultUI: boolean;
    /**
     * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
     */
    scrollwheel: boolean;
    /**
     * Color used for the background of the Map div. This color will be visible when tiles have not
     * yet loaded as the user pans. This option can only be set when the map is initialized.
     */
    backgroundColor: string;
    /**
     * The name or url of the cursor to display when mousing over a draggable map. This property uses
     * the css  * cursor attribute to change the icon. As with the css property, you must specify at
     * least one fallback cursor that is not a URL. For example:
     * [draggableCursor]="'url(http://www.example.com/icon.png), auto;'"
     */
    draggableCursor: string;
    /**
     * The name or url of the cursor to display when the map is being dragged. This property uses the
     * css cursor attribute to change the icon. As with the css property, you must specify at least
     * one fallback cursor that is not a URL. For example:
     * [draggingCursor]="'url(http://www.example.com/icon.png), auto;'"
     */
    draggingCursor: string;
    /**
     * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
     * enabled by default.
     */
    keyboardShortcuts: boolean;
    /**
     * The enabled/disabled state of the Zoom control.
     */
    zoomControl: boolean;
    /**
     * Options for the Zoom control.
     */
    zoomControlOptions: ZoomControlOptions;
    /**
     * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
     * modes, these styles will only apply to labels and geometry.
     */
    styles: MapTypeStyle[];
    /**
     * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
     * used to
     * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
     */
    usePanning: boolean;
    /**
     * The initial enabled/disabled state of the Street View Pegman control.
     * This control is part of the default UI, and should be set to false when displaying a map type
     * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
     */
    streetViewControl: boolean;
    /**
     * Options for the Street View control.
     */
    streetViewControlOptions: StreetViewControlOptions;
    /**
     * Sets the viewport to contain the given bounds.
     * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
     */
    fitBounds: LatLngBoundsLiteral | LatLngBounds | boolean;
    /**
     * Padding amount for the bounds.
     */
    fitBoundsPadding: number | Padding;
    /**
     * The initial enabled/disabled state of the Scale control. This is disabled by default.
     */
    scaleControl: boolean;
    /**
     * Options for the scale control.
     */
    scaleControlOptions: ScaleControlOptions;
    /**
     * The initial enabled/disabled state of the Map type control.
     */
    mapTypeControl: boolean;
    /**
     * Options for the Map type control.
     */
    mapTypeControlOptions: MapTypeControlOptions;
    /**
     * The initial enabled/disabled state of the Pan control.
     */
    panControl: boolean;
    /**
     * Options for the Pan control.
     */
    panControlOptions: PanControlOptions;
    /**
     * The initial enabled/disabled state of the Rotate control.
     */
    rotateControl: boolean;
    /**
     * Options for the Rotate control.
     */
    rotateControlOptions: RotateControlOptions;
    /**
     * The initial enabled/disabled state of the Fullscreen control.
     */
    fullscreenControl: boolean;
    /**
     * Options for the Fullscreen control.
     */
    fullscreenControlOptions: FullscreenControlOptions;
    /**
     * The map mapTypeId. Defaults to 'roadmap'.
     */
    mapTypeId: 'roadmap' | 'hybrid' | 'satellite' | 'terrain' | string;
    /**
     * When false, map icons are not clickable. A map icon represents a point of interest,
     * also known as a POI. By default map icons are clickable.
     */
    clickableIcons: boolean;
    /**
     * A map icon represents a point of interest, also known as a POI.
     * When map icons are clickable by default, an info window is displayed.
     * When this property is set to false, the info window will not be shown but the click event
     * will still fire
     */
    showDefaultInfoWindow: boolean;
    /**
     * This setting controls how gestures on the map are handled.
     * Allowed values:
     * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
     * - 'greedy'      (All touch gestures pan or zoom the map.)
     * - 'none'        (The map cannot be panned or zoomed by user gestures.)
     * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
     */
    gestureHandling: 'cooperative' | 'greedy' | 'none' | 'auto';
    /**
     * Controls the automatic switching behavior for the angle of incidence of
     * the map. The only allowed values are 0 and 45. The value 0 causes the map
     * to always use a 0° overhead view regardless of the zoom level and
     * viewport. The value 45 causes the tilt angle to automatically switch to
     * 45 whenever 45° imagery is available for the current zoom level and
     * viewport, and switch back to 0 whenever 45° imagery is not available
     * (this is the default behavior). 45° imagery is only available for
     * satellite and hybrid map types, within some locations, and at some zoom
     * levels. Note: getTilt returns the current tilt angle, not the value
     * specified by this option. Because getTilt and this option refer to
     * different things, do not bind() the tilt property; doing so may yield
     * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
     */
    tilt: number;
    /**
     * Options for restricting the bounds of the map.
     * User cannot pan or zoom away from restricted area.
     */
    restriction: MapRestriction;
    /**
     * Map option attributes that can change over time
     */
    private static _mapOptionsAttributes;
    private _observableSubscriptions;
    private _fitBoundsSubscription;
    /**
     * This event emitter gets emitted when the user clicks on the map (but not when they click on a
     * marker or infoWindow).
     */
    mapClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user right-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */
    mapRightClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
     * on a marker or infoWindow).
     */
    mapDblClick: EventEmitter<MouseEvent>;
    /**
     * This event emitter is fired when the map center changes.
     */
    centerChange: EventEmitter<LatLngLiteral>;
    /**
     * This event is fired when the viewport bounds have changed.
     */
    boundsChange: EventEmitter<LatLngBounds>;
    /**
     * This event is fired when the mapTypeId property changes.
     */
    mapTypeIdChange: EventEmitter<MapTypeId>;
    /**
     * This event is fired when the map becomes idle after panning or zooming.
     */
    idle: EventEmitter<void>;
    /**
     * This event is fired when the zoom level has changed.
     */
    zoomChange: EventEmitter<number>;
    /**
     * This event is fired when the google map is fully initialized.
     * You get the google.maps.Map instance as a result of this EventEmitter.
     */
    mapReady: EventEmitter<any>;
    /**
     * This event is fired when the visible tiles have finished loading.
     */
    tilesLoaded: EventEmitter<void>;
    constructor(_elem: ElementRef, _mapsWrapper: GoogleMapsAPIWrapper, _platformId: Object, _fitBoundsService: FitBoundsService, _zone: NgZone);
    /** @internal */
    ngOnInit(): void;
    private _initMapInstance;
    /** @internal */
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _updateMapOptionsChanges;
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter?: boolean): Promise<void>;
    private _updatePosition;
    private _setCenter;
    private _fitBounds;
    private _subscribeToFitBoundsUpdates;
    protected _updateBounds(bounds: LatLngBounds | LatLngBoundsLiteral, padding?: number | Padding): void;
    private _isLatLngBoundsLiteral;
    private _handleMapCenterChange;
    private _handleBoundsChange;
    private _handleMapTypeIdChange;
    private _handleMapZoomChange;
    private _handleIdleEvent;
    private _handleTilesLoadedEvent;
    private _handleMapMouseEvents;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmMap>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AgmMap, "agm-map", never, {
    "longitude": "longitude";
    "latitude": "latitude";
    "zoom": "zoom";
    "draggable": "mapDraggable";
    "disableDoubleClickZoom": "disableDoubleClickZoom";
    "disableDefaultUI": "disableDefaultUI";
    "scrollwheel": "scrollwheel";
    "keyboardShortcuts": "keyboardShortcuts";
    "styles": "styles";
    "usePanning": "usePanning";
    "fitBounds": "fitBounds";
    "scaleControl": "scaleControl";
    "mapTypeControl": "mapTypeControl";
    "panControl": "panControl";
    "rotateControl": "rotateControl";
    "fullscreenControl": "fullscreenControl";
    "mapTypeId": "mapTypeId";
    "clickableIcons": "clickableIcons";
    "showDefaultInfoWindow": "showDefaultInfoWindow";
    "gestureHandling": "gestureHandling";
    "tilt": "tilt";
    "minZoom": "minZoom";
    "maxZoom": "maxZoom";
    "controlSize": "controlSize";
    "backgroundColor": "backgroundColor";
    "draggableCursor": "draggableCursor";
    "draggingCursor": "draggingCursor";
    "zoomControl": "zoomControl";
    "zoomControlOptions": "zoomControlOptions";
    "streetViewControl": "streetViewControl";
    "streetViewControlOptions": "streetViewControlOptions";
    "fitBoundsPadding": "fitBoundsPadding";
    "scaleControlOptions": "scaleControlOptions";
    "mapTypeControlOptions": "mapTypeControlOptions";
    "panControlOptions": "panControlOptions";
    "rotateControlOptions": "rotateControlOptions";
    "fullscreenControlOptions": "fullscreenControlOptions";
    "restriction": "restriction";
}, {
    "mapClick": "mapClick";
    "mapRightClick": "mapRightClick";
    "mapDblClick": "mapDblClick";
    "centerChange": "centerChange";
    "boundsChange": "boundsChange";
    "mapTypeIdChange": "mapTypeIdChange";
    "idle": "idle";
    "zoomChange": "zoomChange";
    "mapReady": "mapReady";
    "tilesLoaded": "tilesLoaded";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmQudHMiLCJzb3VyY2VzIjpbIm1hcC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlSQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSAnLi4vbWFwLXR5cGVzJztcbmltcG9ydCB7IEZpdEJvdW5kc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXQtYm91bmRzJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuaW1wb3J0IHsgRnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zLCBMYXRMbmdCb3VuZHMsIExhdExuZ0JvdW5kc0xpdGVyYWwsIExhdExuZ0xpdGVyYWwsIE1hcFJlc3RyaWN0aW9uLCBNYXBUeXBlQ29udHJvbE9wdGlvbnMsIE1hcFR5cGVJZCwgTWFwVHlwZVN0eWxlLCBQYWRkaW5nLCBQYW5Db250cm9sT3B0aW9ucywgUm90YXRlQ29udHJvbE9wdGlvbnMsIFNjYWxlQ29udHJvbE9wdGlvbnMsIFN0cmVldFZpZXdDb250cm9sT3B0aW9ucywgWm9vbUNvbnRyb2xPcHRpb25zIH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuLyoqXG4gKiBBZ21NYXAgcmVuZGVycyBhIEdvb2dsZSBNYXAuXG4gKiAqKkltcG9ydGFudCBub3RlKio6IFRvIGJlIGFibGUgc2VlIGEgbWFwIGluIHRoZSBicm93c2VyLCB5b3UgaGF2ZSB0byBkZWZpbmUgYSBoZWlnaHQgZm9yIHRoZVxuICogZWxlbWVudCBgYWdtLW1hcGAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgYWdtLW1hcCB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdtTWFwIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfZWxlbTtcbiAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjtcbiAgICBwcml2YXRlIF9wbGF0Zm9ybUlkO1xuICAgIHByb3RlY3RlZCBfZml0Qm91bmRzU2VydmljZTogRml0Qm91bmRzU2VydmljZTtcbiAgICBwcml2YXRlIF96b25lO1xuICAgIC8qKlxuICAgICAqIFRoZSBsb25naXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICAgKi9cbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbGF0aXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICAgKi9cbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSB6b29tIGxldmVsIG9mIHRoZSBtYXAuIFRoZSBkZWZhdWx0IHpvb20gbGV2ZWwgaXMgOC5cbiAgICAgKi9cbiAgICB6b29tOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltYWwgem9vbSBsZXZlbCBvZiB0aGUgbWFwIGFsbG93ZWQuIFdoZW4gbm90IHByb3ZpZGVkLCBubyByZXN0cmljdGlvbnMgdG8gdGhlIHpvb20gbGV2ZWxcbiAgICAgKiBhcmUgZW5mb3JjZWQuXG4gICAgICovXG4gICAgbWluWm9vbTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbWFsIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCBhbGxvd2VkLiBXaGVuIG5vdCBwcm92aWRlZCwgbm8gcmVzdHJpY3Rpb25zIHRvIHRoZSB6b29tIGxldmVsXG4gICAgICogYXJlIGVuZm9yY2VkLlxuICAgICAqL1xuICAgIG1heFpvb206IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY29udHJvbCBzaXplIGZvciB0aGUgZGVmYXVsdCBtYXAgY29udHJvbHMuIE9ubHkgZ292ZXJucyB0aGUgY29udHJvbHMgbWFkZSBieSB0aGUgTWFwcyBBUEkgaXRzZWxmXG4gICAgICovXG4gICAgY29udHJvbFNpemU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGlmIG1hcCBpcyBkcmFnZ2FibGUuXG4gICAgICovXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgem9vbSBhbmQgY2VudGVyIG9uIGRvdWJsZSBjbGljay4gRW5hYmxlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9kaXNhYmxlcyBhbGwgZGVmYXVsdCBVSSBvZiB0aGUgR29vZ2xlIG1hcC4gUGxlYXNlIG5vdGU6IFdoZW4gdGhlIG1hcCBpcyBjcmVhdGVkLCB0aGlzXG4gICAgICogdmFsdWUgY2Fubm90IGdldCB1cGRhdGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVEZWZhdWx0VUk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgZmFsc2UsIGRpc2FibGVzIHNjcm9sbHdoZWVsIHpvb21pbmcgb24gdGhlIG1hcC4gVGhlIHNjcm9sbHdoZWVsIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBzY3JvbGx3aGVlbDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDb2xvciB1c2VkIGZvciB0aGUgYmFja2dyb3VuZCBvZiB0aGUgTWFwIGRpdi4gVGhpcyBjb2xvciB3aWxsIGJlIHZpc2libGUgd2hlbiB0aWxlcyBoYXZlIG5vdFxuICAgICAqIHlldCBsb2FkZWQgYXMgdGhlIHVzZXIgcGFucy4gVGhpcyBvcHRpb24gY2FuIG9ubHkgYmUgc2V0IHdoZW4gdGhlIG1hcCBpcyBpbml0aWFsaXplZC5cbiAgICAgKi9cbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvciB1cmwgb2YgdGhlIGN1cnNvciB0byBkaXNwbGF5IHdoZW4gbW91c2luZyBvdmVyIGEgZHJhZ2dhYmxlIG1hcC4gVGhpcyBwcm9wZXJ0eSB1c2VzXG4gICAgICogdGhlIGNzcyAgKiBjdXJzb3IgYXR0cmlidXRlIHRvIGNoYW5nZSB0aGUgaWNvbi4gQXMgd2l0aCB0aGUgY3NzIHByb3BlcnR5LCB5b3UgbXVzdCBzcGVjaWZ5IGF0XG4gICAgICogbGVhc3Qgb25lIGZhbGxiYWNrIGN1cnNvciB0aGF0IGlzIG5vdCBhIFVSTC4gRm9yIGV4YW1wbGU6XG4gICAgICogW2RyYWdnYWJsZUN1cnNvcl09XCIndXJsKGh0dHA6Ly93d3cuZXhhbXBsZS5jb20vaWNvbi5wbmcpLCBhdXRvOydcIlxuICAgICAqL1xuICAgIGRyYWdnYWJsZUN1cnNvcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9yIHVybCBvZiB0aGUgY3Vyc29yIHRvIGRpc3BsYXkgd2hlbiB0aGUgbWFwIGlzIGJlaW5nIGRyYWdnZWQuIFRoaXMgcHJvcGVydHkgdXNlcyB0aGVcbiAgICAgKiBjc3MgY3Vyc29yIGF0dHJpYnV0ZSB0byBjaGFuZ2UgdGhlIGljb24uIEFzIHdpdGggdGhlIGNzcyBwcm9wZXJ0eSwgeW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdFxuICAgICAqIG9uZSBmYWxsYmFjayBjdXJzb3IgdGhhdCBpcyBub3QgYSBVUkwuIEZvciBleGFtcGxlOlxuICAgICAqIFtkcmFnZ2luZ0N1cnNvcl09XCIndXJsKGh0dHA6Ly93d3cuZXhhbXBsZS5jb20vaWNvbi5wbmcpLCBhdXRvOydcIlxuICAgICAqL1xuICAgIGRyYWdnaW5nQ3Vyc29yOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSWYgZmFsc2UsIHByZXZlbnRzIHRoZSBtYXAgZnJvbSBiZWluZyBjb250cm9sbGVkIGJ5IHRoZSBrZXlib2FyZC4gS2V5Ym9hcmQgc2hvcnRjdXRzIGFyZVxuICAgICAqIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBrZXlib2FyZFNob3J0Y3V0czogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgWm9vbSBjb250cm9sLlxuICAgICAqL1xuICAgIHpvb21Db250cm9sOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBab29tIGNvbnRyb2wuXG4gICAgICovXG4gICAgem9vbUNvbnRyb2xPcHRpb25zOiBab29tQ29udHJvbE9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRvIGFwcGx5IHRvIGVhY2ggb2YgdGhlIGRlZmF1bHQgbWFwIHR5cGVzLiBOb3RlIHRoYXQgZm9yIFNhdGVsbGl0ZS9IeWJyaWQgYW5kIFRlcnJhaW5cbiAgICAgKiBtb2RlcywgdGhlc2Ugc3R5bGVzIHdpbGwgb25seSBhcHBseSB0byBsYWJlbHMgYW5kIGdlb21ldHJ5LlxuICAgICAqL1xuICAgIHN0eWxlczogTWFwVHlwZVN0eWxlW107XG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlIGFuZCB0aGUgbGF0aXR1ZGUgYW5kL29yIGxvbmdpdHVkZSB2YWx1ZXMgY2hhbmdlcywgdGhlIEdvb2dsZSBNYXBzIHBhblRvIG1ldGhvZCBpc1xuICAgICAqIHVzZWQgdG9cbiAgICAgKiBjZW50ZXIgdGhlIG1hcC4gU2VlOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwXG4gICAgICovXG4gICAgdXNlUGFubmluZzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBTdHJlZXQgVmlldyBQZWdtYW4gY29udHJvbC5cbiAgICAgKiBUaGlzIGNvbnRyb2wgaXMgcGFydCBvZiB0aGUgZGVmYXVsdCBVSSwgYW5kIHNob3VsZCBiZSBzZXQgdG8gZmFsc2Ugd2hlbiBkaXNwbGF5aW5nIGEgbWFwIHR5cGVcbiAgICAgKiBvbiB3aGljaCB0aGUgU3RyZWV0IFZpZXcgcm9hZCBvdmVybGF5IHNob3VsZCBub3QgYXBwZWFyIChlLmcuIGEgbm9uLUVhcnRoIG1hcCB0eXBlKS5cbiAgICAgKi9cbiAgICBzdHJlZXRWaWV3Q29udHJvbDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBPcHRpb25zIGZvciB0aGUgU3RyZWV0IFZpZXcgY29udHJvbC5cbiAgICAgKi9cbiAgICBzdHJlZXRWaWV3Q29udHJvbE9wdGlvbnM6IFN0cmVldFZpZXdDb250cm9sT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2aWV3cG9ydCB0byBjb250YWluIHRoZSBnaXZlbiBib3VuZHMuXG4gICAgICogSWYgdGhpcyBvcHRpb24gdG8gYHRydWVgLCB0aGUgYm91bmRzIGdldCBhdXRvbWF0aWNhbGx5IGNvbXB1dGVkIGZyb20gYWxsIGVsZW1lbnRzIHRoYXQgdXNlIHRoZSB7QGxpbmsgQWdtRml0Qm91bmRzfSBkaXJlY3RpdmUuXG4gICAgICovXG4gICAgZml0Qm91bmRzOiBMYXRMbmdCb3VuZHNMaXRlcmFsIHwgTGF0TG5nQm91bmRzIHwgYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBQYWRkaW5nIGFtb3VudCBmb3IgdGhlIGJvdW5kcy5cbiAgICAgKi9cbiAgICBmaXRCb3VuZHNQYWRkaW5nOiBudW1iZXIgfCBQYWRkaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFNjYWxlIGNvbnRyb2wuIFRoaXMgaXMgZGlzYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBzY2FsZUNvbnRyb2w6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3B0aW9ucyBmb3IgdGhlIHNjYWxlIGNvbnRyb2wuXG4gICAgICovXG4gICAgc2NhbGVDb250cm9sT3B0aW9uczogU2NhbGVDb250cm9sT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBNYXAgdHlwZSBjb250cm9sLlxuICAgICAqL1xuICAgIG1hcFR5cGVDb250cm9sOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBNYXAgdHlwZSBjb250cm9sLlxuICAgICAqL1xuICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczogTWFwVHlwZUNvbnRyb2xPcHRpb25zO1xuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIFBhbiBjb250cm9sLlxuICAgICAqL1xuICAgIHBhbkNvbnRyb2w6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogT3B0aW9ucyBmb3IgdGhlIFBhbiBjb250cm9sLlxuICAgICAqL1xuICAgIHBhbkNvbnRyb2xPcHRpb25zOiBQYW5Db250cm9sT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBSb3RhdGUgY29udHJvbC5cbiAgICAgKi9cbiAgICByb3RhdGVDb250cm9sOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBSb3RhdGUgY29udHJvbC5cbiAgICAgKi9cbiAgICByb3RhdGVDb250cm9sT3B0aW9uczogUm90YXRlQ29udHJvbE9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgRnVsbHNjcmVlbiBjb250cm9sLlxuICAgICAqL1xuICAgIGZ1bGxzY3JlZW5Db250cm9sOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgZm9yIHRoZSBGdWxsc2NyZWVuIGNvbnRyb2wuXG4gICAgICovXG4gICAgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiBGdWxsc2NyZWVuQ29udHJvbE9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogVGhlIG1hcCBtYXBUeXBlSWQuIERlZmF1bHRzIHRvICdyb2FkbWFwJy5cbiAgICAgKi9cbiAgICBtYXBUeXBlSWQ6ICdyb2FkbWFwJyB8ICdoeWJyaWQnIHwgJ3NhdGVsbGl0ZScgfCAndGVycmFpbicgfCBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2hlbiBmYWxzZSwgbWFwIGljb25zIGFyZSBub3QgY2xpY2thYmxlLiBBIG1hcCBpY29uIHJlcHJlc2VudHMgYSBwb2ludCBvZiBpbnRlcmVzdCxcbiAgICAgKiBhbHNvIGtub3duIGFzIGEgUE9JLiBCeSBkZWZhdWx0IG1hcCBpY29ucyBhcmUgY2xpY2thYmxlLlxuICAgICAqL1xuICAgIGNsaWNrYWJsZUljb25zOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEEgbWFwIGljb24gcmVwcmVzZW50cyBhIHBvaW50IG9mIGludGVyZXN0LCBhbHNvIGtub3duIGFzIGEgUE9JLlxuICAgICAqIFdoZW4gbWFwIGljb25zIGFyZSBjbGlja2FibGUgYnkgZGVmYXVsdCwgYW4gaW5mbyB3aW5kb3cgaXMgZGlzcGxheWVkLlxuICAgICAqIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gZmFsc2UsIHRoZSBpbmZvIHdpbmRvdyB3aWxsIG5vdCBiZSBzaG93biBidXQgdGhlIGNsaWNrIGV2ZW50XG4gICAgICogd2lsbCBzdGlsbCBmaXJlXG4gICAgICovXG4gICAgc2hvd0RlZmF1bHRJbmZvV2luZG93OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoaXMgc2V0dGluZyBjb250cm9scyBob3cgZ2VzdHVyZXMgb24gdGhlIG1hcCBhcmUgaGFuZGxlZC5cbiAgICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICAgKiAtICdjb29wZXJhdGl2ZScgKFR3by1maW5nZXIgdG91Y2ggZ2VzdHVyZXMgcGFuIGFuZCB6b29tIHRoZSBtYXAuIE9uZS1maW5nZXIgdG91Y2ggZ2VzdHVyZXMgYXJlIG5vdCBoYW5kbGVkIGJ5IHRoZSBtYXAuKVxuICAgICAqIC0gJ2dyZWVkeScgICAgICAoQWxsIHRvdWNoIGdlc3R1cmVzIHBhbiBvciB6b29tIHRoZSBtYXAuKVxuICAgICAqIC0gJ25vbmUnICAgICAgICAoVGhlIG1hcCBjYW5ub3QgYmUgcGFubmVkIG9yIHpvb21lZCBieSB1c2VyIGdlc3R1cmVzLilcbiAgICAgKiAtICdhdXRvJyAgICAgICAgW2RlZmF1bHRdIChHZXN0dXJlIGhhbmRsaW5nIGlzIGVpdGhlciBjb29wZXJhdGl2ZSBvciBncmVlZHksIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBwYWdlIGlzIHNjcm9sbGFibGUgb3Igbm90LlxuICAgICAqL1xuICAgIGdlc3R1cmVIYW5kbGluZzogJ2Nvb3BlcmF0aXZlJyB8ICdncmVlZHknIHwgJ25vbmUnIHwgJ2F1dG8nO1xuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHRoZSBhdXRvbWF0aWMgc3dpdGNoaW5nIGJlaGF2aW9yIGZvciB0aGUgYW5nbGUgb2YgaW5jaWRlbmNlIG9mXG4gICAgICogdGhlIG1hcC4gVGhlIG9ubHkgYWxsb3dlZCB2YWx1ZXMgYXJlIDAgYW5kIDQ1LiBUaGUgdmFsdWUgMCBjYXVzZXMgdGhlIG1hcFxuICAgICAqIHRvIGFsd2F5cyB1c2UgYSAwwrAgb3ZlcmhlYWQgdmlldyByZWdhcmRsZXNzIG9mIHRoZSB6b29tIGxldmVsIGFuZFxuICAgICAqIHZpZXdwb3J0LiBUaGUgdmFsdWUgNDUgY2F1c2VzIHRoZSB0aWx0IGFuZ2xlIHRvIGF1dG9tYXRpY2FsbHkgc3dpdGNoIHRvXG4gICAgICogNDUgd2hlbmV2ZXIgNDXCsCBpbWFnZXJ5IGlzIGF2YWlsYWJsZSBmb3IgdGhlIGN1cnJlbnQgem9vbSBsZXZlbCBhbmRcbiAgICAgKiB2aWV3cG9ydCwgYW5kIHN3aXRjaCBiYWNrIHRvIDAgd2hlbmV2ZXIgNDXCsCBpbWFnZXJ5IGlzIG5vdCBhdmFpbGFibGVcbiAgICAgKiAodGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvcikuIDQ1wrAgaW1hZ2VyeSBpcyBvbmx5IGF2YWlsYWJsZSBmb3JcbiAgICAgKiBzYXRlbGxpdGUgYW5kIGh5YnJpZCBtYXAgdHlwZXMsIHdpdGhpbiBzb21lIGxvY2F0aW9ucywgYW5kIGF0IHNvbWUgem9vbVxuICAgICAqIGxldmVscy4gTm90ZTogZ2V0VGlsdCByZXR1cm5zIHRoZSBjdXJyZW50IHRpbHQgYW5nbGUsIG5vdCB0aGUgdmFsdWVcbiAgICAgKiBzcGVjaWZpZWQgYnkgdGhpcyBvcHRpb24uIEJlY2F1c2UgZ2V0VGlsdCBhbmQgdGhpcyBvcHRpb24gcmVmZXIgdG9cbiAgICAgKiBkaWZmZXJlbnQgdGhpbmdzLCBkbyBub3QgYmluZCgpIHRoZSB0aWx0IHByb3BlcnR5OyBkb2luZyBzbyBtYXkgeWllbGRcbiAgICAgKiB1bnByZWRpY3RhYmxlIGVmZmVjdHMuIChEZWZhdWx0IG9mIEFHTSBpcyAwIChkaXNhYmxlZCkuIEVuYWJsZSBpdCB3aXRoIHZhbHVlIDQ1LilcbiAgICAgKi9cbiAgICB0aWx0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogT3B0aW9ucyBmb3IgcmVzdHJpY3RpbmcgdGhlIGJvdW5kcyBvZiB0aGUgbWFwLlxuICAgICAqIFVzZXIgY2Fubm90IHBhbiBvciB6b29tIGF3YXkgZnJvbSByZXN0cmljdGVkIGFyZWEuXG4gICAgICovXG4gICAgcmVzdHJpY3Rpb246IE1hcFJlc3RyaWN0aW9uO1xuICAgIC8qKlxuICAgICAqIE1hcCBvcHRpb24gYXR0cmlidXRlcyB0aGF0IGNhbiBjaGFuZ2Ugb3ZlciB0aW1lXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX21hcE9wdGlvbnNBdHRyaWJ1dGVzO1xuICAgIHByaXZhdGUgX29ic2VydmFibGVTdWJzY3JpcHRpb25zO1xuICAgIHByaXZhdGUgX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrIG9uIGFcbiAgICAgKiBtYXJrZXIgb3IgaW5mb1dpbmRvdykuXG4gICAgICovXG4gICAgbWFwQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgcmlnaHQtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAgICogb24gYSBtYXJrZXIgb3IgaW5mb1dpbmRvdykuXG4gICAgICovXG4gICAgbWFwUmlnaHRDbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAgICogb24gYSBtYXJrZXIgb3IgaW5mb1dpbmRvdykuXG4gICAgICovXG4gICAgbWFwRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGNlbnRlciBjaGFuZ2VzLlxuICAgICAqL1xuICAgIGNlbnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPExhdExuZ0xpdGVyYWw+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdmlld3BvcnQgYm91bmRzIGhhdmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBib3VuZHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYXRMbmdCb3VuZHM+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbWFwVHlwZUlkIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICovXG4gICAgbWFwVHlwZUlkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TWFwVHlwZUlkPjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1hcCBiZWNvbWVzIGlkbGUgYWZ0ZXIgcGFubmluZyBvciB6b29taW5nLlxuICAgICAqL1xuICAgIGlkbGU6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHpvb20gbGV2ZWwgaGFzIGNoYW5nZWQuXG4gICAgICovXG4gICAgem9vbUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBnb29nbGUgbWFwIGlzIGZ1bGx5IGluaXRpYWxpemVkLlxuICAgICAqIFlvdSBnZXQgdGhlIGdvb2dsZS5tYXBzLk1hcCBpbnN0YW5jZSBhcyBhIHJlc3VsdCBvZiB0aGlzIEV2ZW50RW1pdHRlci5cbiAgICAgKi9cbiAgICBtYXBSZWFkeTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB2aXNpYmxlIHRpbGVzIGhhdmUgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgKi9cbiAgICB0aWxlc0xvYWRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIGNvbnN0cnVjdG9yKF9lbGVtOiBFbGVtZW50UmVmLCBfbWFwc1dyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBfcGxhdGZvcm1JZDogT2JqZWN0LCBfZml0Qm91bmRzU2VydmljZTogRml0Qm91bmRzU2VydmljZSwgX3pvbmU6IE5nWm9uZSk7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfaW5pdE1hcEluc3RhbmNlO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHByaXZhdGUgX3VwZGF0ZU1hcE9wdGlvbnNDaGFuZ2VzO1xuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGEgcmVzaXplIGV2ZW50IG9uIHRoZSBnb29nbGUgbWFwIGluc3RhbmNlLlxuICAgICAqIFdoZW4gcmVjZW50ZXIgaXMgdHJ1ZSwgdGhlIG9mIHRoZSBnb29nbGUgbWFwIGdldHMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgbGF0L2xuZyB2YWx1ZXMgb3IgZml0Qm91bmRzIHZhbHVlIHRvIHJlY2VudGVyIHRoZSBtYXAuXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCBnZXRzIHJlc29sdmVkIGFmdGVyIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkLlxuICAgICAqL1xuICAgIHRyaWdnZXJSZXNpemUocmVjZW50ZXI/OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbjtcbiAgICBwcml2YXRlIF9zZXRDZW50ZXI7XG4gICAgcHJpdmF0ZSBfZml0Qm91bmRzO1xuICAgIHByaXZhdGUgX3N1YnNjcmliZVRvRml0Qm91bmRzVXBkYXRlcztcbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZUJvdW5kcyhib3VuZHM6IExhdExuZ0JvdW5kcyB8IExhdExuZ0JvdW5kc0xpdGVyYWwsIHBhZGRpbmc/OiBudW1iZXIgfCBQYWRkaW5nKTogdm9pZDtcbiAgICBwcml2YXRlIF9pc0xhdExuZ0JvdW5kc0xpdGVyYWw7XG4gICAgcHJpdmF0ZSBfaGFuZGxlTWFwQ2VudGVyQ2hhbmdlO1xuICAgIHByaXZhdGUgX2hhbmRsZUJvdW5kc0NoYW5nZTtcbiAgICBwcml2YXRlIF9oYW5kbGVNYXBUeXBlSWRDaGFuZ2U7XG4gICAgcHJpdmF0ZSBfaGFuZGxlTWFwWm9vbUNoYW5nZTtcbiAgICBwcml2YXRlIF9oYW5kbGVJZGxlRXZlbnQ7XG4gICAgcHJpdmF0ZSBfaGFuZGxlVGlsZXNMb2FkZWRFdmVudDtcbiAgICBwcml2YXRlIF9oYW5kbGVNYXBNb3VzZUV2ZW50cztcbn1cbiJdfQ==