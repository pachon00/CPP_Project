import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Sidebar } from './sidebar.component';
import * as ɵngcc0 from '@angular/core';
export declare class SidebarContainer implements AfterContentInit, OnChanges, OnDestroy {
    private _ref;
    animate: boolean;
    allowSidebarBackdropControl: boolean;
    showBackdrop: boolean;
    showBackdropChange: EventEmitter<boolean>;
    onBackdropClicked: EventEmitter<null>;
    contentClass: string;
    backdropClass: string;
    private _sidebars;
    private _isBrowser;
    constructor(_ref: ChangeDetectorRef, platformId: Object);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * @internal
     *
     * Adds a sidebar to the container's list of sidebars.
     *
     * @param sidebar {Sidebar} A sidebar within the container to register.
     */
    _addSidebar(sidebar: Sidebar): void;
    /**
     * @internal
     *
     * Removes a sidebar from the container's list of sidebars.
     *
     * @param sidebar {Sidebar} The sidebar to remove.
     */
    _removeSidebar(sidebar: Sidebar): void;
    /**
     * @internal
     *
     * Computes `margin` value to push page contents to accommodate open sidebars as needed.
     *
     * @return {CSSStyleDeclaration} margin styles for the page content.
     */
    _getContentStyle(): CSSStyleDeclaration;
    /**
     * @internal
     *
     * Closes sidebars when the backdrop is clicked, if they have the
     * `closeOnClickBackdrop` option set.
     */
    _onBackdropClicked(): void;
    /**
     * Subscribes from a sidebar events to react properly.
     */
    private _subscribe;
    /**
     * Unsubscribes from all sidebars.
     */
    private _unsubscribe;
    /**
     * Check if we should show the backdrop when a sidebar is toggled.
     */
    private _onToggle;
    /**
     * Triggers change detection to recompute styles.
     */
    private _markForCheck;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SidebarContainer>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SidebarContainer, "ng-sidebar-container", never, {
    "animate": "animate";
    "allowSidebarBackdropControl": "allowSidebarBackdropControl";
    "showBackdrop": "showBackdrop";
    "contentClass": "contentClass";
    "backdropClass": "backdropClass";
}, {
    "showBackdropChange": "showBackdropChange";
    "onBackdropClicked": "onBackdropClicked";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1jb250YWluZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNpZGViYXItY29udGFpbmVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdG9yUmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnLi9zaWRlYmFyLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaWRlYmFyQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3JlZjtcbiAgICBhbmltYXRlOiBib29sZWFuO1xuICAgIGFsbG93U2lkZWJhckJhY2tkcm9wQ29udHJvbDogYm9vbGVhbjtcbiAgICBzaG93QmFja2Ryb3A6IGJvb2xlYW47XG4gICAgc2hvd0JhY2tkcm9wQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgb25CYWNrZHJvcENsaWNrZWQ6IEV2ZW50RW1pdHRlcjxudWxsPjtcbiAgICBjb250ZW50Q2xhc3M6IHN0cmluZztcbiAgICBiYWNrZHJvcENsYXNzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2lkZWJhcnM7XG4gICAgcHJpdmF0ZSBfaXNCcm93c2VyO1xuICAgIGNvbnN0cnVjdG9yKF9yZWY6IENoYW5nZURldGVjdG9yUmVmLCBwbGF0Zm9ybUlkOiBPYmplY3QpO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICpcbiAgICAgKiBBZGRzIGEgc2lkZWJhciB0byB0aGUgY29udGFpbmVyJ3MgbGlzdCBvZiBzaWRlYmFycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaWRlYmFyIHtTaWRlYmFyfSBBIHNpZGViYXIgd2l0aGluIHRoZSBjb250YWluZXIgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgX2FkZFNpZGViYXIoc2lkZWJhcjogU2lkZWJhcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICpcbiAgICAgKiBSZW1vdmVzIGEgc2lkZWJhciBmcm9tIHRoZSBjb250YWluZXIncyBsaXN0IG9mIHNpZGViYXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNpZGViYXIge1NpZGViYXJ9IFRoZSBzaWRlYmFyIHRvIHJlbW92ZS5cbiAgICAgKi9cbiAgICBfcmVtb3ZlU2lkZWJhcihzaWRlYmFyOiBTaWRlYmFyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKlxuICAgICAqIENvbXB1dGVzIGBtYXJnaW5gIHZhbHVlIHRvIHB1c2ggcGFnZSBjb250ZW50cyB0byBhY2NvbW1vZGF0ZSBvcGVuIHNpZGViYXJzIGFzIG5lZWRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0NTU1N0eWxlRGVjbGFyYXRpb259IG1hcmdpbiBzdHlsZXMgZm9yIHRoZSBwYWdlIGNvbnRlbnQuXG4gICAgICovXG4gICAgX2dldENvbnRlbnRTdHlsZSgpOiBDU1NTdHlsZURlY2xhcmF0aW9uO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqXG4gICAgICogQ2xvc2VzIHNpZGViYXJzIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQsIGlmIHRoZXkgaGF2ZSB0aGVcbiAgICAgKiBgY2xvc2VPbkNsaWNrQmFja2Ryb3BgIG9wdGlvbiBzZXQuXG4gICAgICovXG4gICAgX29uQmFja2Ryb3BDbGlja2VkKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyBmcm9tIGEgc2lkZWJhciBldmVudHMgdG8gcmVhY3QgcHJvcGVybHkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3Vic2NyaWJlO1xuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlcyBmcm9tIGFsbCBzaWRlYmFycy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF91bnN1YnNjcmliZTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB3ZSBzaG91bGQgc2hvdyB0aGUgYmFja2Ryb3Agd2hlbiBhIHNpZGViYXIgaXMgdG9nZ2xlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9vblRvZ2dsZTtcbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBjaGFuZ2UgZGV0ZWN0aW9uIHRvIHJlY29tcHV0ZSBzdHlsZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrO1xufVxuIl19