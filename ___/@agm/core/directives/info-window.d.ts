import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { InfoWindowManager } from '../services/managers/info-window-manager';
import { AgmMarker } from './marker';
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
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
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmInfoWindow implements OnDestroy, OnChanges, OnInit {
    private _infoWindowManager;
    private _el;
    /**
     * The latitude position of the info window (only usefull if you use it ouside of a {@link
     * AgmMarker}).
     */
    latitude: number;
    /**
     * The longitude position of the info window (only usefull if you use it ouside of a {@link
     * AgmMarker}).
     */
    longitude: number;
    /**
     * Disable auto-pan on open. By default, the info window will pan the map so that it is fully
     * visible when it opens.
     */
    disableAutoPan: boolean;
    /**
     * All InfoWindows are displayed on the map in order of their zIndex, with higher values
     * displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed
     * according to their latitude, with InfoWindows of lower latitudes appearing in front of
     * InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers.
     */
    zIndex: number;
    /**
     * Maximum width of the infowindow, regardless of content's width. This value is only considered
     * if it is set before a call to open. To change the maximum width when changing content, call
     * close, update maxWidth, and then open.
     */
    maxWidth: number;
    /**
     * Holds the marker that is the host of the info window (if available)
     */
    hostMarker: AgmMarker;
    /**
     * Holds the native element that is used for the info window content.
     */
    content: Node;
    /**
     * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
     */
    isOpen: boolean;
    /**
     * Emits an event when the info window is closed.
     */
    infoWindowClose: EventEmitter<void>;
    private static _infoWindowOptionsInputs;
    private _infoWindowAddedToManager;
    private _id;
    constructor(_infoWindowManager: InfoWindowManager, _el: ElementRef);
    ngOnInit(): void;
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _registerEventListeners;
    private _updateOpenState;
    private _setInfoWindowOptions;
    /**
     * Opens the info window.
     */
    open(): Promise<void>;
    /**
     * Closes the info window.
     */
    close(): Promise<void>;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmInfoWindow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AgmInfoWindow, "agm-info-window", never, {
    "isOpen": "isOpen";
    "latitude": "latitude";
    "longitude": "longitude";
    "disableAutoPan": "disableAutoPan";
    "zIndex": "zIndex";
    "maxWidth": "maxWidth";
}, {
    "infoWindowClose": "infoWindowClose";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3cuZC50cyIsInNvdXJjZXMiOlsiaW5mby13aW5kb3cuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5mb1dpbmRvd01hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyJztcbmltcG9ydCB7IEFnbU1hcmtlciB9IGZyb20gJy4vbWFya2VyJztcbi8qKlxuICogQWdtSW5mb1dpbmRvdyByZW5kZXJzIGEgaW5mbyB3aW5kb3cgaW5zaWRlIGEge0BsaW5rIEFnbU1hcmtlcn0gb3Igc3RhbmRhbG9uZS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW2xhYmVsXT1cIidNJ1wiPlxuICogICAgICAgIDxhZ20taW5mby13aW5kb3cgW2Rpc2FibGVBdXRvUGFuXT1cInRydWVcIj5cbiAqICAgICAgICAgIEhpLCB0aGlzIGlzIHRoZSBjb250ZW50IG9mIHRoZSA8c3Ryb25nPmluZm8gd2luZG93PC9zdHJvbmc+XG4gKiAgICAgICAgPC9hZ20taW5mby13aW5kb3c+XG4gKiAgICAgIDwvYWdtLW1hcmtlcj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFnbUluZm9XaW5kb3cgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgICBwcml2YXRlIF9pbmZvV2luZG93TWFuYWdlcjtcbiAgICBwcml2YXRlIF9lbDtcbiAgICAvKipcbiAgICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIGluZm8gd2luZG93IChvbmx5IHVzZWZ1bGwgaWYgeW91IHVzZSBpdCBvdXNpZGUgb2YgYSB7QGxpbmtcbiAgICAgKiBBZ21NYXJrZXJ9KS5cbiAgICAgKi9cbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBsb25naXR1ZGUgcG9zaXRpb24gb2YgdGhlIGluZm8gd2luZG93IChvbmx5IHVzZWZ1bGwgaWYgeW91IHVzZSBpdCBvdXNpZGUgb2YgYSB7QGxpbmtcbiAgICAgKiBBZ21NYXJrZXJ9KS5cbiAgICAgKi9cbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGF1dG8tcGFuIG9uIG9wZW4uIEJ5IGRlZmF1bHQsIHRoZSBpbmZvIHdpbmRvdyB3aWxsIHBhbiB0aGUgbWFwIHNvIHRoYXQgaXQgaXMgZnVsbHlcbiAgICAgKiB2aXNpYmxlIHdoZW4gaXQgb3BlbnMuXG4gICAgICovXG4gICAgZGlzYWJsZUF1dG9QYW46IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQWxsIEluZm9XaW5kb3dzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlc1xuICAgICAqIGRpc3BsYXlpbmcgaW4gZnJvbnQgb2YgSW5mb1dpbmRvd3Mgd2l0aCBsb3dlciB2YWx1ZXMuIEJ5IGRlZmF1bHQsIEluZm9XaW5kb3dzIGFyZSBkaXNwbGF5ZWRcbiAgICAgKiBhY2NvcmRpbmcgdG8gdGhlaXIgbGF0aXR1ZGUsIHdpdGggSW5mb1dpbmRvd3Mgb2YgbG93ZXIgbGF0aXR1ZGVzIGFwcGVhcmluZyBpbiBmcm9udCBvZlxuICAgICAqIEluZm9XaW5kb3dzIGF0IGhpZ2hlciBsYXRpdHVkZXMuIEluZm9XaW5kb3dzIGFyZSBhbHdheXMgZGlzcGxheWVkIGluIGZyb250IG9mIG1hcmtlcnMuXG4gICAgICovXG4gICAgekluZGV4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogTWF4aW11bSB3aWR0aCBvZiB0aGUgaW5mb3dpbmRvdywgcmVnYXJkbGVzcyBvZiBjb250ZW50J3Mgd2lkdGguIFRoaXMgdmFsdWUgaXMgb25seSBjb25zaWRlcmVkXG4gICAgICogaWYgaXQgaXMgc2V0IGJlZm9yZSBhIGNhbGwgdG8gb3Blbi4gVG8gY2hhbmdlIHRoZSBtYXhpbXVtIHdpZHRoIHdoZW4gY2hhbmdpbmcgY29udGVudCwgY2FsbFxuICAgICAqIGNsb3NlLCB1cGRhdGUgbWF4V2lkdGgsIGFuZCB0aGVuIG9wZW4uXG4gICAgICovXG4gICAgbWF4V2lkdGg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBIb2xkcyB0aGUgbWFya2VyIHRoYXQgaXMgdGhlIGhvc3Qgb2YgdGhlIGluZm8gd2luZG93IChpZiBhdmFpbGFibGUpXG4gICAgICovXG4gICAgaG9zdE1hcmtlcjogQWdtTWFya2VyO1xuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBuYXRpdmUgZWxlbWVudCB0aGF0IGlzIHVzZWQgZm9yIHRoZSBpbmZvIHdpbmRvdyBjb250ZW50LlxuICAgICAqL1xuICAgIGNvbnRlbnQ6IE5vZGU7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgb3BlbiBzdGF0ZSBmb3IgdGhlIEluZm9XaW5kb3cuIFlvdSBjYW4gYWxzbyBjYWxsIHRoZSBvcGVuKCkgYW5kIGNsb3NlKCkgbWV0aG9kcy5cbiAgICAgKi9cbiAgICBpc09wZW46IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaW5mbyB3aW5kb3cgaXMgY2xvc2VkLlxuICAgICAqL1xuICAgIGluZm9XaW5kb3dDbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIHByaXZhdGUgc3RhdGljIF9pbmZvV2luZG93T3B0aW9uc0lucHV0cztcbiAgICBwcml2YXRlIF9pbmZvV2luZG93QWRkZWRUb01hbmFnZXI7XG4gICAgcHJpdmF0ZSBfaWQ7XG4gICAgY29uc3RydWN0b3IoX2luZm9XaW5kb3dNYW5hZ2VyOiBJbmZvV2luZG93TWFuYWdlciwgX2VsOiBFbGVtZW50UmVmKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTtcbiAgICB9KTogdm9pZDtcbiAgICBwcml2YXRlIF9yZWdpc3RlckV2ZW50TGlzdGVuZXJzO1xuICAgIHByaXZhdGUgX3VwZGF0ZU9wZW5TdGF0ZTtcbiAgICBwcml2YXRlIF9zZXRJbmZvV2luZG93T3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgaW5mbyB3aW5kb3cuXG4gICAgICovXG4gICAgb3BlbigpOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgaW5mbyB3aW5kb3cuXG4gICAgICovXG4gICAgY2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgaWQoKTogc3RyaW5nO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=