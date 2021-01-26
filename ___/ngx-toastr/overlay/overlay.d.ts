import { ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { ToastContainerDirective } from '../toastr/toast.directive';
import { OverlayContainer } from './overlay-container';
import { OverlayRef } from './overlay-ref';
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Overlay {
    private _overlayContainer;
    private _componentFactoryResolver;
    private _appRef;
    private _document;
    private _paneElements;
    constructor(_overlayContainer: OverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef, _document: any);
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    create(positionClass?: string, overlayContainer?: ToastContainerDirective): OverlayRef;
    getPaneElement(positionClass?: string, overlayContainer?: ToastContainerDirective): HTMLElement;
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    private _createPaneElement;
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    private _createPortalHost;
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    private _createOverlayRef;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Overlay>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<Overlay>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5kLnRzIiwic291cmNlcyI6WyJvdmVybGF5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9hc3RyL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnLi9vdmVybGF5LXJlZic7XG4vKipcbiAqIFNlcnZpY2UgdG8gY3JlYXRlIE92ZXJsYXlzLiBPdmVybGF5cyBhcmUgZHluYW1pY2FsbHkgYWRkZWQgcGllY2VzIG9mIGZsb2F0aW5nIFVJLCBtZWFudCB0byBiZVxuICogdXNlZCBhcyBhIGxvdy1sZXZlbCBidWlsZGluZyBidWlsZGluZyBibG9jayBmb3Igb3RoZXIgY29tcG9uZW50cy4gRGlhbG9ncywgdG9vbHRpcHMsIG1lbnVzLFxuICogc2VsZWN0cywgZXRjLiBjYW4gYWxsIGJlIGJ1aWx0IHVzaW5nIG92ZXJsYXlzLiBUaGUgc2VydmljZSBzaG91bGQgcHJpbWFyaWx5IGJlIHVzZWQgYnkgYXV0aG9yc1xuICogb2YgcmUtdXNhYmxlIGNvbXBvbmVudHMgcmF0aGVyIHRoYW4gZGV2ZWxvcGVycyBidWlsZGluZyBlbmQtdXNlciBhcHBsaWNhdGlvbnMuXG4gKlxuICogQW4gb3ZlcmxheSAqaXMqIGEgUG9ydGFsSG9zdCwgc28gYW55IGtpbmQgb2YgUG9ydGFsIGNhbiBiZSBsb2FkZWQgaW50byBvbmUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXkge1xuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI7XG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICAgIHByaXZhdGUgX2FwcFJlZjtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9wYW5lRWxlbWVudHM7XG4gICAgY29uc3RydWN0b3IoX292ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsIF9kb2N1bWVudDogYW55KTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG92ZXJsYXkuXG4gICAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBjcmVhdGUocG9zaXRpb25DbGFzcz86IHN0cmluZywgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlKTogT3ZlcmxheVJlZjtcbiAgICBnZXRQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzPzogc3RyaW5nLCBvdmVybGF5Q29udGFpbmVyPzogVG9hc3RDb250YWluZXJEaXJlY3RpdmUpOiBIVE1MRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBET00gZWxlbWVudCBmb3IgYW4gb3ZlcmxheSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgICogQHJldHVybnMgTmV3bHktY3JlYXRlZCBwYW5lIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jcmVhdGVQYW5lRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBEb21Qb3J0YWxIb3N0IGludG8gd2hpY2ggdGhlIG92ZXJsYXkgY29udGVudCBjYW4gYmUgbG9hZGVkLlxuICAgICAqIEBwYXJhbSBwYW5lIFRoZSBET00gZWxlbWVudCB0byB0dXJuIGludG8gYSBwb3J0YWwgaG9zdC5cbiAgICAgKiBAcmV0dXJucyBBIHBvcnRhbCBob3N0IGZvciB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY3JlYXRlUG9ydGFsSG9zdDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIE92ZXJsYXlSZWYgZm9yIGFuIG92ZXJsYXkgaW4gdGhlIGdpdmVuIERPTSBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBwYW5lIERPTSBlbGVtZW50IGZvciB0aGUgb3ZlcmxheVxuICAgICAqL1xuICAgIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWY7XG59XG4iXX0=