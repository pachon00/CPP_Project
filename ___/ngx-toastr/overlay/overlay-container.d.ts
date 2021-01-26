import { OnDestroy } from '@angular/core';
/** Container inside which all toasts will render. */
import * as ɵngcc0 from '@angular/core';
export declare class OverlayContainer implements OnDestroy {
    protected _document: any;
    protected _containerElement: HTMLElement;
    constructor(_document: any);
    ngOnDestroy(): void;
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    getContainerElement(): HTMLElement;
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    protected _createContainer(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OverlayContainer>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OverlayContainer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuZC50cyIsInNvdXJjZXMiOlsib3ZlcmxheS1jb250YWluZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKiBDb250YWluZXIgaW5zaWRlIHdoaWNoIGFsbCB0b2FzdHMgd2lsbCByZW5kZXIuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdmVybGF5Q29udGFpbmVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBhbnk7XG4gICAgcHJvdGVjdGVkIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihfZG9jdW1lbnQ6IGFueSk7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBvdmVybGF5IGNvbnRhaW5lciBlbGVtZW50LiBJdCB3aWxsIGxhemlseVxuICAgICAqIGNyZWF0ZSB0aGUgZWxlbWVudCB0aGUgZmlyc3QgdGltZSAgaXQgaXMgY2FsbGVkIHRvIGZhY2lsaXRhdGUgdXNpbmdcbiAgICAgKiB0aGUgY29udGFpbmVyIGluIG5vbi1icm93c2VyIGVudmlyb25tZW50cy5cbiAgICAgKiBAcmV0dXJucyB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudCwgd2hpY2ggaXMgc2ltcGx5IGEgZGl2XG4gICAgICogd2l0aCB0aGUgJ2Nkay1vdmVybGF5LWNvbnRhaW5lcicgY2xhc3Mgb24gdGhlIGRvY3VtZW50IGJvZHkuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVDb250YWluZXIoKTogdm9pZDtcbn1cbiJdfQ==