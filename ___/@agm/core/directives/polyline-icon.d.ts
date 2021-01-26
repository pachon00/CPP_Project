import { OnInit } from '@angular/core';
/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 *
 * @export
 * @class AgmPolylineIcon
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmPolylineIcon implements OnInit {
    /**
     * If `true`, each icon in the sequence has the same fixed rotation regardless of the
     * angle of the edge on which it lies. Defaults to `false`, in which case each icon
     * in the sequence is rotated to align with its edge.
     *
     * @type {boolean}
     * @memberof AgmPolylineIcon
     */
    fixedRotation: boolean;
    /**
     * The distance from the start of the line at which an icon is to be rendered. This
     * distance may be expressed as a percentage of line's length (e.g. '50%') or in pixels
     * (e.g. '50px'). Defaults to '100%'.
     *
     * @type {string}
     * @memberof AgmPolylineIcon
     */
    offset: string;
    /**
     * The distance between consecutive icons on the line. This distance may be expressed as
     * a percentage of the line's length (e.g. '50%') or in pixels (e.g. '50px'). To disable
     * repeating of the icon, specify '0'. Defaults to '0'.
     *
     * @type {string}
     * @memberof AgmPolylineIcon
     */
    repeat: string;
    /**
     * The x coordinate of the position of the symbol relative to the polyline. The coordinate
     * of the symbol's path is translated _left_ by the anchor's x coordinate. By default, a
     * symbol is anchored at (0, 0). The position is expressed in the same coordinate system as the
     * symbol's path.
     *
     * @type {number}
     * @memberof AgmPolylineIcon
     */
    anchorX: number;
    /**
     * The y coordinate of the position of the symbol relative to the polyline. The coordinate
     * of the symbol's path is translated _up_ by the anchor's y coordinate. By default, a
     * symbol is anchored at (0, 0). The position is expressed in the same coordinate system as the
     * symbol's path.
     *
     * @type {number}
     * @memberof AgmPolylineIcon
     */
    anchorY: number;
    /**
     * The symbol's fill color. All CSS3 colors are supported except for extended named
     * colors. Defaults to the stroke color of the corresponding polyline.
     *
     * @type {string}
     * @memberof AgmPolylineIcon
     */
    fillColor: string;
    /**
     * The symbol's fill opacity. Defaults to 0.
     */
    fillOpacity: number;
    /**
     * The symbol's path, which is a built-in symbol path, or a custom path expressed using
     * SVG path notation. Required.
     *
     * @type {SymbolPath}
     * @memberof AgmPolylineIcon
     */
    path: 'CIRCLE' | 'BACKWARD_CLOSED_ARROW' | 'BACKWARD_OPEN_ARROW' | 'FORWARD_CLOSED_ARROW' | 'FORWARD_OPEN_ARROW' | string;
    /**
     * The angle by which to rotate the symbol, expressed clockwise in degrees.
     * Defaults to 0. A symbol where `fixedRotation` is `false` is rotated relative to
     * the angle of the edge on which it lies.
     *
     * @type {number}
     * @memberof AgmPolylineIcon
     */
    rotation: number;
    /**
     * The amount by which the symbol is scaled in size. Defaults to the stroke weight
     * of the polyline; after scaling, the symbol must lie inside a square 22 pixels in
     * size centered at the symbol's anchor.
     *
     * @type {number}
     * @memberof AgmPolylineIcon
     */
    scale: number;
    /**
     * The symbol's stroke color. All CSS3 colors are supported except for extended named
     * colors. Defaults to the stroke color of the polyline.
     *
     * @type {string}
     * @memberof AgmPolylineIcon
     */
    strokeColor: string;
    /**
     * The symbol's stroke opacity. Defaults to the stroke opacity of the polyline.
     *
     * @type {number}
     * @memberof AgmPolylineIcon
     */
    strokeOpacity: number;
    /**
     * The symbol's stroke weight. Defaults to the scale of the symbol.
     *
     * @type {number}
     * @memberof AgmPolylineIcon
     */
    strokeWeight: number;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmPolylineIcon>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmPolylineIcon, "agm-polyline agm-icon-sequence", never, {
    "fixedRotation": "fixedRotation";
    "offset": "offset";
    "repeat": "repeat";
    "anchorX": "anchorX";
    "anchorY": "anchorY";
    "fillColor": "fillColor";
    "fillOpacity": "fillOpacity";
    "path": "path";
    "rotation": "rotation";
    "scale": "scale";
    "strokeColor": "strokeColor";
    "strokeOpacity": "strokeOpacity";
    "strokeWeight": "strokeWeight";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtaWNvbi5kLnRzIiwic291cmNlcyI6WyJwb2x5bGluZS1pY29uLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZHQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBBZ21Qb2x5bGluZUljb24gZW5hYmxlcyB0byBhZGQgcG9seWxpbmUgc2VxdWVuY2VzIHRvIGFkZCBhcnJvd3MsIGNpcmNsZSxcbiAqIG9yIGN1c3RvbSBpY29ucyBlaXRoZXIgYWxvbmcgdGhlIGVudGlyZSBsaW5lLCBvciBpbiBhIHNwZWNpZmljIHBhcnQgb2YgaXQuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvc2hhcGVzI3BvbHlsaW5lX2N1c3RvbWl6ZVxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGBodG1sXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxhZ20tcG9seWxpbmU+XG4gKiAgICAgICAgICA8YWdtLWljb24tc2VxdWVuY2UgW2ZpeGVkUm90YXRpb25dPVwidHJ1ZVwiIFtwYXRoXT1cIidGT1JXQVJEX09QRU5fQVJST1cnXCI+XG4gKiAgICAgICAgICA8L2FnbS1pY29uLXNlcXVlbmNlPlxuICogICAgICA8L2FnbS1wb2x5bGluZT5cbiAqICAgIDwvYWdtLW1hcD5cbiAqIGBgYFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBBZ21Qb2x5bGluZUljb25cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWdtUG9seWxpbmVJY29uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGVhY2ggaWNvbiBpbiB0aGUgc2VxdWVuY2UgaGFzIHRoZSBzYW1lIGZpeGVkIHJvdGF0aW9uIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gICAgICogYW5nbGUgb2YgdGhlIGVkZ2Ugb24gd2hpY2ggaXQgbGllcy4gRGVmYXVsdHMgdG8gYGZhbHNlYCwgaW4gd2hpY2ggY2FzZSBlYWNoIGljb25cbiAgICAgKiBpbiB0aGUgc2VxdWVuY2UgaXMgcm90YXRlZCB0byBhbGlnbiB3aXRoIGl0cyBlZGdlLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgICAqL1xuICAgIGZpeGVkUm90YXRpb246IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBsaW5lIGF0IHdoaWNoIGFuIGljb24gaXMgdG8gYmUgcmVuZGVyZWQuIFRoaXNcbiAgICAgKiBkaXN0YW5jZSBtYXkgYmUgZXhwcmVzc2VkIGFzIGEgcGVyY2VudGFnZSBvZiBsaW5lJ3MgbGVuZ3RoIChlLmcuICc1MCUnKSBvciBpbiBwaXhlbHNcbiAgICAgKiAoZS5nLiAnNTBweCcpLiBEZWZhdWx0cyB0byAnMTAwJScuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgYmV0d2VlbiBjb25zZWN1dGl2ZSBpY29ucyBvbiB0aGUgbGluZS4gVGhpcyBkaXN0YW5jZSBtYXkgYmUgZXhwcmVzc2VkIGFzXG4gICAgICogYSBwZXJjZW50YWdlIG9mIHRoZSBsaW5lJ3MgbGVuZ3RoIChlLmcuICc1MCUnKSBvciBpbiBwaXhlbHMgKGUuZy4gJzUwcHgnKS4gVG8gZGlzYWJsZVxuICAgICAqIHJlcGVhdGluZyBvZiB0aGUgaWNvbiwgc3BlY2lmeSAnMCcuIERlZmF1bHRzIHRvICcwJy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgICAqL1xuICAgIHJlcGVhdDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvc2l0aW9uIG9mIHRoZSBzeW1ib2wgcmVsYXRpdmUgdG8gdGhlIHBvbHlsaW5lLiBUaGUgY29vcmRpbmF0ZVxuICAgICAqIG9mIHRoZSBzeW1ib2wncyBwYXRoIGlzIHRyYW5zbGF0ZWQgX2xlZnRfIGJ5IHRoZSBhbmNob3IncyB4IGNvb3JkaW5hdGUuIEJ5IGRlZmF1bHQsIGFcbiAgICAgKiBzeW1ib2wgaXMgYW5jaG9yZWQgYXQgKDAsIDApLiBUaGUgcG9zaXRpb24gaXMgZXhwcmVzc2VkIGluIHRoZSBzYW1lIGNvb3JkaW5hdGUgc3lzdGVtIGFzIHRoZVxuICAgICAqIHN5bWJvbCdzIHBhdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICAgKi9cbiAgICBhbmNob3JYOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9zaXRpb24gb2YgdGhlIHN5bWJvbCByZWxhdGl2ZSB0byB0aGUgcG9seWxpbmUuIFRoZSBjb29yZGluYXRlXG4gICAgICogb2YgdGhlIHN5bWJvbCdzIHBhdGggaXMgdHJhbnNsYXRlZCBfdXBfIGJ5IHRoZSBhbmNob3IncyB5IGNvb3JkaW5hdGUuIEJ5IGRlZmF1bHQsIGFcbiAgICAgKiBzeW1ib2wgaXMgYW5jaG9yZWQgYXQgKDAsIDApLiBUaGUgcG9zaXRpb24gaXMgZXhwcmVzc2VkIGluIHRoZSBzYW1lIGNvb3JkaW5hdGUgc3lzdGVtIGFzIHRoZVxuICAgICAqIHN5bWJvbCdzIHBhdGguXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICAgKi9cbiAgICBhbmNob3JZOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHN5bWJvbCdzIGZpbGwgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWRcbiAgICAgKiBjb2xvcnMuIERlZmF1bHRzIHRvIHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIGNvcnJlc3BvbmRpbmcgcG9seWxpbmUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICAgKi9cbiAgICBmaWxsQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgc3ltYm9sJ3MgZmlsbCBvcGFjaXR5LiBEZWZhdWx0cyB0byAwLlxuICAgICAqL1xuICAgIGZpbGxPcGFjaXR5OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHN5bWJvbCdzIHBhdGgsIHdoaWNoIGlzIGEgYnVpbHQtaW4gc3ltYm9sIHBhdGgsIG9yIGEgY3VzdG9tIHBhdGggZXhwcmVzc2VkIHVzaW5nXG4gICAgICogU1ZHIHBhdGggbm90YXRpb24uIFJlcXVpcmVkLlxuICAgICAqXG4gICAgICogQHR5cGUge1N5bWJvbFBhdGh9XG4gICAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgICAqL1xuICAgIHBhdGg6ICdDSVJDTEUnIHwgJ0JBQ0tXQVJEX0NMT1NFRF9BUlJPVycgfCAnQkFDS1dBUkRfT1BFTl9BUlJPVycgfCAnRk9SV0FSRF9DTE9TRURfQVJST1cnIHwgJ0ZPUldBUkRfT1BFTl9BUlJPVycgfCBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSB0aGUgc3ltYm9sLCBleHByZXNzZWQgY2xvY2t3aXNlIGluIGRlZ3JlZXMuXG4gICAgICogRGVmYXVsdHMgdG8gMC4gQSBzeW1ib2wgd2hlcmUgYGZpeGVkUm90YXRpb25gIGlzIGBmYWxzZWAgaXMgcm90YXRlZCByZWxhdGl2ZSB0b1xuICAgICAqIHRoZSBhbmdsZSBvZiB0aGUgZWRnZSBvbiB3aGljaCBpdCBsaWVzLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAgICovXG4gICAgcm90YXRpb246IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgYW1vdW50IGJ5IHdoaWNoIHRoZSBzeW1ib2wgaXMgc2NhbGVkIGluIHNpemUuIERlZmF1bHRzIHRvIHRoZSBzdHJva2Ugd2VpZ2h0XG4gICAgICogb2YgdGhlIHBvbHlsaW5lOyBhZnRlciBzY2FsaW5nLCB0aGUgc3ltYm9sIG11c3QgbGllIGluc2lkZSBhIHNxdWFyZSAyMiBwaXhlbHMgaW5cbiAgICAgKiBzaXplIGNlbnRlcmVkIGF0IHRoZSBzeW1ib2wncyBhbmNob3IuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICAgKi9cbiAgICBzY2FsZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBzeW1ib2wncyBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWRcbiAgICAgKiBjb2xvcnMuIERlZmF1bHRzIHRvIHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIHBvbHlsaW5lLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAgICovXG4gICAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgc3ltYm9sJ3Mgc3Ryb2tlIG9wYWNpdHkuIERlZmF1bHRzIHRvIHRoZSBzdHJva2Ugb3BhY2l0eSBvZiB0aGUgcG9seWxpbmUuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICAgKi9cbiAgICBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHN5bWJvbCdzIHN0cm9rZSB3ZWlnaHQuIERlZmF1bHRzIHRvIHRoZSBzY2FsZSBvZiB0aGUgc3ltYm9sLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAgICovXG4gICAgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbn1cbiJdfQ==