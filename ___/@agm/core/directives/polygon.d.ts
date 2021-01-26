import { AfterContentInit, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';
import { PolygonManager } from '../services/managers/polygon-manager';
import { MvcEventType } from '../utils/mvcarray-utils';
/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
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
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmPolygon implements OnDestroy, OnChanges, AfterContentInit {
    private _polygonManager;
    /**
     * Indicates whether this Polygon handles mouse events. Defaults to true.
     */
    clickable: boolean;
    /**
     * If set to true, the user can drag this shape over the map. The geodesic
     * property defines the mode of dragging. Defaults to false.
     */
    draggable: boolean;
    /**
     * If set to true, the user can edit this shape by dragging the control
     * points shown at the vertices and on each segment. Defaults to false.
     */
    editable: boolean;
    /**
     * The fill color. All CSS3 colors are supported except for extended
     * named colors.
     */
    fillColor: string;
    /**
     * The fill opacity between 0.0 and 1.0
     */
    fillOpacity: number;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will
     * follow the curvature of the Earth. When false, edges of the polygon are
     * rendered as straight lines in screen space. Note that the shape of a
     * geodesic polygon may appear to change when dragged, as the dimensions
     * are maintained relative to the surface of the earth. Defaults to false.
     */
    geodesic: boolean;
    /**
     * The ordered sequence of coordinates that designates a closed loop.
     * Unlike polylines, a polygon may consist of one or more paths.
     *  As a result, the paths property may specify one or more arrays of
     * LatLng coordinates. Paths are closed automatically; do not repeat the
     * first vertex of the path as the last vertex. Simple polygons may be
     * defined using a single array of LatLngs. More complex polygons may
     * specify an array of arrays. Any simple arrays are converted into Arrays.
     * Inserting or removing LatLngs from the Array will automatically update
     * the polygon on the map.
     */
    paths: Array<LatLng | LatLngLiteral> | Array<Array<LatLng | LatLngLiteral>>;
    /**
     * The stroke color. All CSS3 colors are supported except for extended
     * named colors.
     */
    strokeColor: string;
    /**
     * The stroke opacity between 0.0 and 1.0
     */
    strokeOpacity: number;
    /**
     * The stroke width in pixels.
     */
    strokeWeight: number;
    /**
     * Whether this polygon is visible on the map. Defaults to true.
     */
    visible: boolean;
    /**
     * The zIndex compared to other polys.
     */
    zIndex: number;
    /**
     * This event is fired when the DOM click event is fired on the Polygon.
     */
    polyClick: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired when the DOM dblclick event is fired on the Polygon.
     */
    polyDblClick: EventEmitter<PolyMouseEvent>;
    /**
     * This event is repeatedly fired while the user drags the polygon.
     */
    polyDrag: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user stops dragging the polygon.
     */
    polyDragEnd: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the user starts dragging the polygon.
     */
    polyDragStart: EventEmitter<MouseEvent>;
    /**
     * This event is fired when the DOM mousedown event is fired on the Polygon.
     */
    polyMouseDown: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired when the DOM mousemove event is fired on the Polygon.
     */
    polyMouseMove: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired on Polygon mouseout.
     */
    polyMouseOut: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired on Polygon mouseover.
     */
    polyMouseOver: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired whe the DOM mouseup event is fired on the Polygon
     */
    polyMouseUp: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired when the Polygon is right-clicked on.
     */
    polyRightClick: EventEmitter<PolyMouseEvent>;
    /**
     * This event is fired after Polygon first path changes.
     */
    polyPathsChange: EventEmitter<PolygonPathEvent<any>>;
    private static _polygonOptionsAttributes;
    private _id;
    private _polygonAddedToManager;
    private _subscriptions;
    constructor(_polygonManager: PolygonManager);
    /** @internal */
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): any;
    private _init;
    private _addEventListeners;
    private _updatePolygonOptions;
    /** @internal */
    id(): string;
    /** @internal */
    ngOnDestroy(): void;
    getPath(): Promise<Array<LatLng>>;
    getPaths(): Promise<Array<Array<LatLng>>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmPolygon>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmPolygon, "agm-polygon", never, {
    "clickable": "clickable";
    "draggable": "polyDraggable";
    "editable": "editable";
    "geodesic": "geodesic";
    "paths": "paths";
    "fillColor": "fillColor";
    "fillOpacity": "fillOpacity";
    "strokeColor": "strokeColor";
    "strokeOpacity": "strokeOpacity";
    "strokeWeight": "strokeWeight";
    "visible": "visible";
    "zIndex": "zIndex";
}, {
    "polyClick": "polyClick";
    "polyDblClick": "polyDblClick";
    "polyDrag": "polyDrag";
    "polyDragEnd": "polyDragEnd";
    "polyDragStart": "polyDragStart";
    "polyMouseDown": "polyMouseDown";
    "polyMouseMove": "polyMouseMove";
    "polyMouseOut": "polyMouseOut";
    "polyMouseOver": "polyMouseOver";
    "polyMouseUp": "polyMouseUp";
    "polyRightClick": "polyRightClick";
    "polyPathsChange": "polyPathsChange";
}, never>;
}
export interface PolygonPathEvent<T extends (LatLng | Array<LatLng>)> {
    newArr: LatLng[][];
    eventName: MvcEventType;
    index: number;
    previous?: T;
}
export interface PathCollectionChangePolygonPathEvent extends PolygonPathEvent<Array<LatLng>> {
}
export interface PathChangePolygonPathEvent extends PolygonPathEvent<LatLng> {
    pathIndex: number;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5kLnRzIiwic291cmNlcyI6WyJwb2x5Z29uLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF0TG5nLCBMYXRMbmdMaXRlcmFsLCBQb2x5TW91c2VFdmVudCB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IFBvbHlnb25NYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyJztcbmltcG9ydCB7IE12Y0V2ZW50VHlwZSB9IGZyb20gJy4uL3V0aWxzL212Y2FycmF5LXV0aWxzJztcbi8qKlxuICogQWdtUG9seWdvbiByZW5kZXJzIGEgcG9seWdvbiBvbiBhIHtAbGluayBBZ21NYXB9XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgYWdtLW1hcCB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLXBvbHlnb24gW3BhdGhzXT1cInBhdGhzXCI+XG4gKiAgICAgIDwvYWdtLXBvbHlnb24+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBNeU1hcENtcCB7XG4gKiAgIGxhdDogbnVtYmVyID0gMDtcbiAqICAgbG5nOiBudW1iZXIgPSAwO1xuICogICB6b29tOiBudW1iZXIgPSAxMDtcbiAqICAgcGF0aHM6IEFycmF5PExhdExuZ0xpdGVyYWw+ID0gW1xuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9XG4gKiAgIF1cbiAqICAgLy8gTmVzdGluZyBwYXRocyB3aWxsIGNyZWF0ZSBhIGhvbGUgd2hlcmUgdGhleSBvdmVybGFwO1xuICogICBuZXN0ZWRQYXRoczogQXJyYXk8QXJyYXk8TGF0TG5nTGl0ZXJhbD4+ID0gW1tcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfVxuICogICBdLCBbXG4gKiAgICAgeyBsYXQ6IDAsIGxuZzogMTUgfSxcbiAqICAgICB7IGxhdDogMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiA1LCBsbmc6IDIwIH0sXG4gKiAgICAgeyBsYXQ6IDUsIGxuZzogMTUgfSxcbiAqICAgICB7IGxhdDogMCwgbG5nOiAxNSB9XG4gKiAgIF1dXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdtUG9seWdvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwcml2YXRlIF9wb2x5Z29uTWFuYWdlcjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIFBvbHlnb24gaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAgICovXG4gICAgY2xpY2thYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZHJhZyB0aGlzIHNoYXBlIG92ZXIgdGhlIG1hcC4gVGhlIGdlb2Rlc2ljXG4gICAgICogcHJvcGVydHkgZGVmaW5lcyB0aGUgbW9kZSBvZiBkcmFnZ2luZy4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICovXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZWRpdCB0aGlzIHNoYXBlIGJ5IGRyYWdnaW5nIHRoZSBjb250cm9sXG4gICAgICogcG9pbnRzIHNob3duIGF0IHRoZSB2ZXJ0aWNlcyBhbmQgb24gZWFjaCBzZWdtZW50LiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBlZGl0YWJsZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZmlsbCBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZFxuICAgICAqIG5hbWVkIGNvbG9ycy5cbiAgICAgKi9cbiAgICBmaWxsQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZmlsbCBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjBcbiAgICAgKi9cbiAgICBmaWxsT3BhY2l0eTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgZWRnZXMgb2YgdGhlIHBvbHlnb24gYXJlIGludGVycHJldGVkIGFzIGdlb2Rlc2ljIGFuZCB3aWxsXG4gICAgICogZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2YgdGhlIEVhcnRoLiBXaGVuIGZhbHNlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmVcbiAgICAgKiByZW5kZXJlZCBhcyBzdHJhaWdodCBsaW5lcyBpbiBzY3JlZW4gc3BhY2UuIE5vdGUgdGhhdCB0aGUgc2hhcGUgb2YgYVxuICAgICAqIGdlb2Rlc2ljIHBvbHlnb24gbWF5IGFwcGVhciB0byBjaGFuZ2Ugd2hlbiBkcmFnZ2VkLCBhcyB0aGUgZGltZW5zaW9uc1xuICAgICAqIGFyZSBtYWludGFpbmVkIHJlbGF0aXZlIHRvIHRoZSBzdXJmYWNlIG9mIHRoZSBlYXJ0aC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICovXG4gICAgZ2VvZGVzaWM6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIG9yZGVyZWQgc2VxdWVuY2Ugb2YgY29vcmRpbmF0ZXMgdGhhdCBkZXNpZ25hdGVzIGEgY2xvc2VkIGxvb3AuXG4gICAgICogVW5saWtlIHBvbHlsaW5lcywgYSBwb2x5Z29uIG1heSBjb25zaXN0IG9mIG9uZSBvciBtb3JlIHBhdGhzLlxuICAgICAqICBBcyBhIHJlc3VsdCwgdGhlIHBhdGhzIHByb3BlcnR5IG1heSBzcGVjaWZ5IG9uZSBvciBtb3JlIGFycmF5cyBvZlxuICAgICAqIExhdExuZyBjb29yZGluYXRlcy4gUGF0aHMgYXJlIGNsb3NlZCBhdXRvbWF0aWNhbGx5OyBkbyBub3QgcmVwZWF0IHRoZVxuICAgICAqIGZpcnN0IHZlcnRleCBvZiB0aGUgcGF0aCBhcyB0aGUgbGFzdCB2ZXJ0ZXguIFNpbXBsZSBwb2x5Z29ucyBtYXkgYmVcbiAgICAgKiBkZWZpbmVkIHVzaW5nIGEgc2luZ2xlIGFycmF5IG9mIExhdExuZ3MuIE1vcmUgY29tcGxleCBwb2x5Z29ucyBtYXlcbiAgICAgKiBzcGVjaWZ5IGFuIGFycmF5IG9mIGFycmF5cy4gQW55IHNpbXBsZSBhcnJheXMgYXJlIGNvbnZlcnRlZCBpbnRvIEFycmF5cy5cbiAgICAgKiBJbnNlcnRpbmcgb3IgcmVtb3ZpbmcgTGF0TG5ncyBmcm9tIHRoZSBBcnJheSB3aWxsIGF1dG9tYXRpY2FsbHkgdXBkYXRlXG4gICAgICogdGhlIHBvbHlnb24gb24gdGhlIG1hcC5cbiAgICAgKi9cbiAgICBwYXRoczogQXJyYXk8TGF0TG5nIHwgTGF0TG5nTGl0ZXJhbD4gfCBBcnJheTxBcnJheTxMYXRMbmcgfCBMYXRMbmdMaXRlcmFsPj47XG4gICAgLyoqXG4gICAgICogVGhlIHN0cm9rZSBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZFxuICAgICAqIG5hbWVkIGNvbG9ycy5cbiAgICAgKi9cbiAgICBzdHJva2VDb2xvcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdHJva2Ugb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAgICovXG4gICAgc3Ryb2tlT3BhY2l0eTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxzLlxuICAgICAqL1xuICAgIHN0cm9rZVdlaWdodDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhpcyBwb2x5Z29uIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSB6SW5kZXggY29tcGFyZWQgdG8gb3RoZXIgcG9seXMuXG4gICAgICovXG4gICAgekluZGV4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXG4gICAgICovXG4gICAgcG9seUNsaWNrOiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIGRibGNsaWNrIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uLlxuICAgICAqL1xuICAgIHBvbHlEYmxDbGljazogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIHJlcGVhdGVkbHkgZmlyZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MgdGhlIHBvbHlnb24uXG4gICAgICovXG4gICAgcG9seURyYWc6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIHBvbHlnb24uXG4gICAgICovXG4gICAgcG9seURyYWdFbmQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBwb2x5Z29uLlxuICAgICAqL1xuICAgIHBvbHlEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXG4gICAgICovXG4gICAgcG9seU1vdXNlRG93bjogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXG4gICAgICovXG4gICAgcG9seU1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIFBvbHlnb24gbW91c2VvdXQuXG4gICAgICovXG4gICAgcG9seU1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8UG9seU1vdXNlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWdvbiBtb3VzZW92ZXIuXG4gICAgICovXG4gICAgcG9seU1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZSB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb25cbiAgICAgKi9cbiAgICBwb2x5TW91c2VVcDogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIFBvbHlnb24gaXMgcmlnaHQtY2xpY2tlZCBvbi5cbiAgICAgKi9cbiAgICBwb2x5UmlnaHRDbGljazogRXZlbnRFbWl0dGVyPFBvbHlNb3VzZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIGFmdGVyIFBvbHlnb24gZmlyc3QgcGF0aCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHBvbHlQYXRoc0NoYW5nZTogRXZlbnRFbWl0dGVyPFBvbHlnb25QYXRoRXZlbnQ8YW55Pj47XG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BvbHlnb25PcHRpb25zQXR0cmlidXRlcztcbiAgICBwcml2YXRlIF9pZDtcbiAgICBwcml2YXRlIF9wb2x5Z29uQWRkZWRUb01hbmFnZXI7XG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihfcG9seWdvbk1hbmFnZXI6IFBvbHlnb25NYW5hZ2VyKTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGFueTtcbiAgICBwcml2YXRlIF9pbml0O1xuICAgIHByaXZhdGUgX2FkZEV2ZW50TGlzdGVuZXJzO1xuICAgIHByaXZhdGUgX3VwZGF0ZVBvbHlnb25PcHRpb25zO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBpZCgpOiBzdHJpbmc7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgZ2V0UGF0aCgpOiBQcm9taXNlPEFycmF5PExhdExuZz4+O1xuICAgIGdldFBhdGhzKCk6IFByb21pc2U8QXJyYXk8QXJyYXk8TGF0TG5nPj4+O1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uUGF0aEV2ZW50PFQgZXh0ZW5kcyAoTGF0TG5nIHwgQXJyYXk8TGF0TG5nPik+IHtcbiAgICBuZXdBcnI6IExhdExuZ1tdW107XG4gICAgZXZlbnROYW1lOiBNdmNFdmVudFR5cGU7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBwcmV2aW91cz86IFQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBhdGhDb2xsZWN0aW9uQ2hhbmdlUG9seWdvblBhdGhFdmVudCBleHRlbmRzIFBvbHlnb25QYXRoRXZlbnQ8QXJyYXk8TGF0TG5nPj4ge1xufVxuZXhwb3J0IGludGVyZmFjZSBQYXRoQ2hhbmdlUG9seWdvblBhdGhFdmVudCBleHRlbmRzIFBvbHlnb25QYXRoRXZlbnQ8TGF0TG5nPiB7XG4gICAgcGF0aEluZGV4OiBudW1iZXI7XG59XG4iXX0=