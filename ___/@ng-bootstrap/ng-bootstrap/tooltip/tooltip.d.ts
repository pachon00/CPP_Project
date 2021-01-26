import { EventEmitter, OnInit, OnDestroy, Injector, Renderer2, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver, NgZone, ChangeDetectorRef, ApplicationRef, OnChanges, SimpleChanges } from '@angular/core';
import { PlacementArray } from '../util/positioning';
import { NgbTooltipConfig } from './tooltip-config';
import * as ɵngcc0 from '@angular/core';
export declare class NgbTooltipWindow {
    id: string;
    tooltipClass: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTooltipWindow>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbTooltipWindow, "ngb-tooltip-window", never, {
    "id": "id";
    "tooltipClass": "tooltipClass";
}, {}, never>;
}
/**
 * A lightweight and extensible directive for fancy tooltip creation.
 */
export declare class NgbTooltip implements OnInit, OnDestroy, OnChanges {
    private _elementRef;
    private _renderer;
    private _ngZone;
    private _document;
    private _changeDetector;
    /**
     * Indicates whether the tooltip should be closed on `Escape` key and inside/outside clicks:
     *
     * * `true` - closes on both outside and inside clicks as well as `Escape` presses
     * * `false` - disables the autoClose feature (NB: triggers still apply)
     * * `"inside"` - closes on inside clicks as well as Escape presses
     * * `"outside"` - closes on outside clicks (sometimes also achievable through triggers)
     * as well as `Escape` presses
     *
     * @since 3.0.0
     */
    autoClose: boolean | 'inside' | 'outside';
    /**
     * The preferred placement of the tooltip.
     *
     * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
     * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
     * `"right-bottom"`
     *
     * Accepts an array of strings or a string with space separated possible values.
     *
     * The default order of preference is `"auto"` (same as the sequence above).
     *
     * Please see the [positioning overview](#/positioning) for more details.
     */
    placement: PlacementArray;
    /**
     * Specifies events that should trigger the tooltip.
     *
     * Supports a space separated list of event names.
     * For more details see the [triggers demo](#/components/tooltip/examples#triggers).
     */
    triggers: string;
    /**
     * A selector specifying the element the tooltip should be appended to.
     *
     * Currently only supports `"body"`.
     */
    container: string;
    /**
     * If `true`, tooltip is disabled and won't be displayed.
     *
     * @since 1.1.0
     */
    disableTooltip: boolean;
    /**
     * An optional class applied to the tooltip window element.
     *
     * @since 3.2.0
     */
    tooltipClass: string;
    /**
     * The opening delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
     *
     * @since 4.1.0
     */
    openDelay: number;
    /**
     * The closing delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
     *
     * @since 4.1.0
     */
    closeDelay: number;
    /**
     * An event emitted when the tooltip is shown. Contains no payload.
     */
    shown: EventEmitter<any>;
    /**
     * An event emitted when the popover is hidden. Contains no payload.
     */
    hidden: EventEmitter<any>;
    private _ngbTooltip;
    private _ngbTooltipWindowId;
    private _popupService;
    private _windowRef;
    private _unregisterListenersFn;
    private _zoneSubscription;
    constructor(_elementRef: ElementRef<HTMLElement>, _renderer: Renderer2, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, config: NgbTooltipConfig, _ngZone: NgZone, _document: any, _changeDetector: ChangeDetectorRef, applicationRef: ApplicationRef);
    /**
     * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
     *
     * If the content if falsy, the tooltip won't open.
     */
    ngbTooltip: string | TemplateRef<any>;
    /**
     * Opens the tooltip.
     *
     * This is considered to be a "manual" triggering.
     * The `context` is an optional value to be injected into the tooltip template when it is created.
     */
    open(context?: any): void;
    /**
     * Closes the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    close(): void;
    /**
     * Toggles the tooltip.
     *
     * This is considered to be a "manual" triggering of the tooltip.
     */
    toggle(): void;
    /**
     * Returns `true`, if the popover is currently shown.
     */
    isOpen(): boolean;
    ngOnInit(): void;
    ngOnChanges({ tooltipClass }: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbTooltip>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbTooltip, "[ngbTooltip]", ["ngbTooltip"], {
    "autoClose": "autoClose";
    "placement": "placement";
    "triggers": "triggers";
    "container": "container";
    "disableTooltip": "disableTooltip";
    "tooltipClass": "tooltipClass";
    "openDelay": "openDelay";
    "closeDelay": "closeDelay";
    "ngbTooltip": "ngbTooltip";
}, {
    "shown": "shown";
    "hidden": "hidden";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kLnRzIiwic291cmNlcyI6WyJ0b29sdGlwLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0hBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiwgQXBwbGljYXRpb25SZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXkgfSBmcm9tICcuLi91dGlsL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IE5nYlRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlRvb2x0aXBXaW5kb3cge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdG9vbHRpcENsYXNzOiBzdHJpbmc7XG59XG4vKipcbiAqIEEgbGlnaHR3ZWlnaHQgYW5kIGV4dGVuc2libGUgZGlyZWN0aXZlIGZvciBmYW5jeSB0b29sdGlwIGNyZWF0aW9uLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JUb29sdGlwIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjtcbiAgICBwcml2YXRlIF9uZ1pvbmU7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGNsb3NlZCBvbiBgRXNjYXBlYCBrZXkgYW5kIGluc2lkZS9vdXRzaWRlIGNsaWNrczpcbiAgICAgKlxuICAgICAqICogYHRydWVgIC0gY2xvc2VzIG9uIGJvdGggb3V0c2lkZSBhbmQgaW5zaWRlIGNsaWNrcyBhcyB3ZWxsIGFzIGBFc2NhcGVgIHByZXNzZXNcbiAgICAgKiAqIGBmYWxzZWAgLSBkaXNhYmxlcyB0aGUgYXV0b0Nsb3NlIGZlYXR1cmUgKE5COiB0cmlnZ2VycyBzdGlsbCBhcHBseSlcbiAgICAgKiAqIGBcImluc2lkZVwiYCAtIGNsb3NlcyBvbiBpbnNpZGUgY2xpY2tzIGFzIHdlbGwgYXMgRXNjYXBlIHByZXNzZXNcbiAgICAgKiAqIGBcIm91dHNpZGVcImAgLSBjbG9zZXMgb24gb3V0c2lkZSBjbGlja3MgKHNvbWV0aW1lcyBhbHNvIGFjaGlldmFibGUgdGhyb3VnaCB0cmlnZ2VycylcbiAgICAgKiBhcyB3ZWxsIGFzIGBFc2NhcGVgIHByZXNzZXNcbiAgICAgKlxuICAgICAqIEBzaW5jZSAzLjAuMFxuICAgICAqL1xuICAgIGF1dG9DbG9zZTogYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnO1xuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmZXJyZWQgcGxhY2VtZW50IG9mIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogUG9zc2libGUgdmFsdWVzIGFyZSBgXCJ0b3BcImAsIGBcInRvcC1sZWZ0XCJgLCBgXCJ0b3AtcmlnaHRcImAsIGBcImJvdHRvbVwiYCwgYFwiYm90dG9tLWxlZnRcImAsXG4gICAgICogYFwiYm90dG9tLXJpZ2h0XCJgLCBgXCJsZWZ0XCJgLCBgXCJsZWZ0LXRvcFwiYCwgYFwibGVmdC1ib3R0b21cImAsIGBcInJpZ2h0XCJgLCBgXCJyaWdodC10b3BcImAsXG4gICAgICogYFwicmlnaHQtYm90dG9tXCJgXG4gICAgICpcbiAgICAgKiBBY2NlcHRzIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmcgd2l0aCBzcGFjZSBzZXBhcmF0ZWQgcG9zc2libGUgdmFsdWVzLlxuICAgICAqXG4gICAgICogVGhlIGRlZmF1bHQgb3JkZXIgb2YgcHJlZmVyZW5jZSBpcyBgXCJhdXRvXCJgIChzYW1lIGFzIHRoZSBzZXF1ZW5jZSBhYm92ZSkuXG4gICAgICpcbiAgICAgKiBQbGVhc2Ugc2VlIHRoZSBbcG9zaXRpb25pbmcgb3ZlcnZpZXddKCMvcG9zaXRpb25pbmcpIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICovXG4gICAgcGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheTtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIgdGhlIHRvb2x0aXAuXG4gICAgICpcbiAgICAgKiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGV2ZW50IG5hbWVzLlxuICAgICAqIEZvciBtb3JlIGRldGFpbHMgc2VlIHRoZSBbdHJpZ2dlcnMgZGVtb10oIy9jb21wb25lbnRzL3Rvb2x0aXAvZXhhbXBsZXMjdHJpZ2dlcnMpLlxuICAgICAqL1xuICAgIHRyaWdnZXJzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICAgKlxuICAgICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGBcImJvZHlcImAuXG4gICAgICovXG4gICAgY29udGFpbmVyOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0b29sdGlwIGlzIGRpc2FibGVkIGFuZCB3b24ndCBiZSBkaXNwbGF5ZWQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgMS4xLjBcbiAgICAgKi9cbiAgICBkaXNhYmxlVG9vbHRpcDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBjbGFzcyBhcHBsaWVkIHRvIHRoZSB0b29sdGlwIHdpbmRvdyBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHNpbmNlIDMuMi4wXG4gICAgICovXG4gICAgdG9vbHRpcENsYXNzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG9wZW5pbmcgZGVsYXkgaW4gbXMuIFdvcmtzIG9ubHkgZm9yIFwibm9uLW1hbnVhbFwiIG9wZW5pbmcgdHJpZ2dlcnMgZGVmaW5lZCBieSB0aGUgYHRyaWdnZXJzYCBpbnB1dC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSA0LjEuMFxuICAgICAqL1xuICAgIG9wZW5EZWxheTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjbG9zaW5nIGRlbGF5IGluIG1zLiBXb3JrcyBvbmx5IGZvciBcIm5vbi1tYW51YWxcIiBvcGVuaW5nIHRyaWdnZXJzIGRlZmluZWQgYnkgdGhlIGB0cmlnZ2Vyc2AgaW5wdXQuXG4gICAgICpcbiAgICAgKiBAc2luY2UgNC4xLjBcbiAgICAgKi9cbiAgICBjbG9zZURlbGF5OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB0b29sdGlwIGlzIHNob3duLiBDb250YWlucyBubyBwYXlsb2FkLlxuICAgICAqL1xuICAgIHNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICAvKipcbiAgICAgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuLiBDb250YWlucyBubyBwYXlsb2FkLlxuICAgICAqL1xuICAgIGhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgcHJpdmF0ZSBfbmdiVG9vbHRpcDtcbiAgICBwcml2YXRlIF9uZ2JUb29sdGlwV2luZG93SWQ7XG4gICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3dpbmRvd1JlZjtcbiAgICBwcml2YXRlIF91bnJlZ2lzdGVyTGlzdGVuZXJzRm47XG4gICAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBpbmplY3RvcjogSW5qZWN0b3IsIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBjb25maWc6IE5nYlRvb2x0aXBDb25maWcsIF9uZ1pvbmU6IE5nWm9uZSwgX2RvY3VtZW50OiBhbnksIF9jaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZik7XG4gICAgLyoqXG4gICAgICogVGhlIHN0cmluZyBjb250ZW50IG9yIGEgYFRlbXBsYXRlUmVmYCBmb3IgdGhlIGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogSWYgdGhlIGNvbnRlbnQgaWYgZmFsc3ksIHRoZSB0b29sdGlwIHdvbid0IG9wZW4uXG4gICAgICovXG4gICAgbmdiVG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgY29uc2lkZXJlZCB0byBiZSBhIFwibWFudWFsXCIgdHJpZ2dlcmluZy5cbiAgICAgKiBUaGUgYGNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIHZhbHVlIHRvIGJlIGluamVjdGVkIGludG8gdGhlIHRvb2x0aXAgdGVtcGxhdGUgd2hlbiBpdCBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIG9wZW4oY29udGV4dD86IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSB0b29sdGlwLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBjb25zaWRlcmVkIHRvIGJlIGEgXCJtYW51YWxcIiB0cmlnZ2VyaW5nIG9mIHRoZSB0b29sdGlwLlxuICAgICAqL1xuICAgIGNsb3NlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgdG9vbHRpcC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgY29uc2lkZXJlZCB0byBiZSBhIFwibWFudWFsXCIgdHJpZ2dlcmluZyBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICB0b2dnbGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCwgaWYgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IHNob3duLlxuICAgICAqL1xuICAgIGlzT3BlbigpOiBib29sZWFuO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoeyB0b29sdGlwQ2xhc3MgfTogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==