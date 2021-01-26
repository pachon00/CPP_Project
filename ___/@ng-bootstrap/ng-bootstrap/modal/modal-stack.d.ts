import { ApplicationRef, ComponentFactoryResolver, Injector, NgZone, RendererFactory2 } from '@angular/core';
import { ScrollBar } from '../util/scrollbar';
import { NgbModalRef } from './modal-ref';
import * as ɵngcc0 from '@angular/core';
export declare class NgbModalStack {
    private _applicationRef;
    private _injector;
    private _document;
    private _scrollBar;
    private _rendererFactory;
    private _ngZone;
    private _activeWindowCmptHasChanged;
    private _ariaHiddenValues;
    private _backdropAttributes;
    private _modalRefs;
    private _windowAttributes;
    private _windowCmpts;
    constructor(_applicationRef: ApplicationRef, _injector: Injector, _document: any, _scrollBar: ScrollBar, _rendererFactory: RendererFactory2, _ngZone: NgZone);
    open(moduleCFR: ComponentFactoryResolver, contentInjector: Injector, content: any, options: any): NgbModalRef;
    dismissAll(reason?: any): void;
    hasOpenModals(): boolean;
    private _attachBackdrop;
    private _attachWindowComponent;
    private _applyWindowOptions;
    private _applyBackdropOptions;
    private _getContentRef;
    private _createFromTemplateRef;
    private _createFromString;
    private _createFromComponent;
    private _setAriaHidden;
    private _revertAriaHidden;
    private _registerModalRef;
    private _registerWindowCmpt;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbModalStack>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbModalStack>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtc3RhY2suZC50cyIsInNvdXJjZXMiOlsibW9kYWwtc3RhY2suZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIE5nWm9uZSwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsQmFyIH0gZnJvbSAnLi4vdXRpbC9zY3JvbGxiYXInO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ2JNb2RhbFN0YWNrIHtcbiAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjtcbiAgICBwcml2YXRlIF9pbmplY3RvcjtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9zY3JvbGxCYXI7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXJGYWN0b3J5O1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICBwcml2YXRlIF9hY3RpdmVXaW5kb3dDbXB0SGFzQ2hhbmdlZDtcbiAgICBwcml2YXRlIF9hcmlhSGlkZGVuVmFsdWVzO1xuICAgIHByaXZhdGUgX2JhY2tkcm9wQXR0cmlidXRlcztcbiAgICBwcml2YXRlIF9tb2RhbFJlZnM7XG4gICAgcHJpdmF0ZSBfd2luZG93QXR0cmlidXRlcztcbiAgICBwcml2YXRlIF93aW5kb3dDbXB0cztcbiAgICBjb25zdHJ1Y3RvcihfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLCBfaW5qZWN0b3I6IEluamVjdG9yLCBfZG9jdW1lbnQ6IGFueSwgX3Njcm9sbEJhcjogU2Nyb2xsQmFyLCBfcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBfbmdab25lOiBOZ1pvbmUpO1xuICAgIG9wZW4obW9kdWxlQ0ZSOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGNvbnRlbnRJbmplY3RvcjogSW5qZWN0b3IsIGNvbnRlbnQ6IGFueSwgb3B0aW9uczogYW55KTogTmdiTW9kYWxSZWY7XG4gICAgZGlzbWlzc0FsbChyZWFzb24/OiBhbnkpOiB2b2lkO1xuICAgIGhhc09wZW5Nb2RhbHMoKTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9hdHRhY2hCYWNrZHJvcDtcbiAgICBwcml2YXRlIF9hdHRhY2hXaW5kb3dDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfYXBwbHlXaW5kb3dPcHRpb25zO1xuICAgIHByaXZhdGUgX2FwcGx5QmFja2Ryb3BPcHRpb25zO1xuICAgIHByaXZhdGUgX2dldENvbnRlbnRSZWY7XG4gICAgcHJpdmF0ZSBfY3JlYXRlRnJvbVRlbXBsYXRlUmVmO1xuICAgIHByaXZhdGUgX2NyZWF0ZUZyb21TdHJpbmc7XG4gICAgcHJpdmF0ZSBfY3JlYXRlRnJvbUNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9zZXRBcmlhSGlkZGVuO1xuICAgIHByaXZhdGUgX3JldmVydEFyaWFIaWRkZW47XG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJNb2RhbFJlZjtcbiAgICBwcml2YXRlIF9yZWdpc3RlcldpbmRvd0NtcHQ7XG59XG4iXX0=