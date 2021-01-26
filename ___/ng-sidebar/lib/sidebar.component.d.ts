import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { SidebarContainer } from './sidebar-container.component';
import * as ɵngcc0 from '@angular/core';
export declare class Sidebar implements OnInit, OnChanges, OnDestroy {
    private _container;
    private _ref;
    opened: boolean;
    openedChange: EventEmitter<boolean>;
    mode: 'over' | 'push' | 'slide';
    dock: boolean;
    dockedSize: string;
    position: 'start' | 'end' | 'left' | 'right' | 'top' | 'bottom';
    animate: boolean;
    autoCollapseHeight: number;
    autoCollapseWidth: number;
    autoCollapseOnInit: boolean;
    sidebarClass: string;
    ariaLabel: string;
    trapFocus: boolean;
    autoFocus: boolean;
    showBackdrop: boolean;
    closeOnClickBackdrop: boolean;
    closeOnClickOutside: boolean;
    keyClose: boolean;
    keyCode: number;
    onOpenStart: EventEmitter<null>;
    onOpened: EventEmitter<null>;
    onCloseStart: EventEmitter<null>;
    onClosed: EventEmitter<null>;
    onTransitionEnd: EventEmitter<null>;
    onModeChange: EventEmitter<string>;
    onPositionChange: EventEmitter<string>;
    /** @internal */
    _onRerender: EventEmitter<null>;
    /** @internal */
    _elSidebar: ElementRef;
    private _focusableElementsString;
    private _focusableElements;
    private _focusedBeforeOpen;
    private _tabIndexAttr;
    private _tabIndexIndicatorAttr;
    private _wasCollapsed;
    private _shouldAnimate;
    private _clickEvent;
    private _onClickOutsideAttached;
    private _onKeyDownAttached;
    private _onResizeAttached;
    private _isBrowser;
    constructor(_container: SidebarContainer, _ref: ChangeDetectorRef, platformId: Object);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Opens the sidebar and emits the appropriate events.
     */
    open(): void;
    /**
     * Closes the sidebar and emits the appropriate events.
     */
    close(): void;
    /**
     * Manually trigger a re-render of the container. Useful if the sidebar contents might change.
     */
    triggerRerender(): void;
    /**
     * @internal
     *
     * Computes the transform styles for the sidebar template.
     *
     * @return {CSSStyleDeclaration} The transform styles, with the WebKit-prefixed version as well.
     */
    _getStyle(): CSSStyleDeclaration;
    /**
     * @internal
     *
     * Handles the `transitionend` event on the sidebar to emit the onOpened/onClosed events after the transform
     * transition is completed.
     */
    _onTransitionEnd(e: TransitionEvent): void;
    /**
     * Returns whether focus should be trapped within the sidebar.
     *
     * @return {boolean} Trap focus inside sidebar.
     */
    private readonly _shouldTrapFocus;
    /**
     * Sets focus to the first focusable element inside the sidebar.
     */
    private _focusFirstItem;
    /**
     * Loops focus back to the start of the sidebar if set to do so.
     */
    private _onFocusTrap;
    /**
     * Handles the ability to focus sidebar elements when it's open/closed to ensure that the sidebar is inert when
     * appropriate.
     */
    private _setFocused;
    /**
     * Initializes event handlers for the closeOnClickOutside and keyClose options.
     */
    private _initCloseListeners;
    private _initCloseClickListener;
    private _initCloseKeyDownListener;
    /**
     * Destroys all event handlers from _initCloseListeners.
     */
    private _destroyCloseListeners;
    private _destroyCloseClickListener;
    private _destroyCloseKeyDownListener;
    /**
     * Handles `click` events on anything while the sidebar is open for the closeOnClickOutside option.
     * Programatically closes the sidebar if a click occurs outside the sidebar.
     *
     * @param e {MouseEvent} Mouse click event.
     */
    private _onClickOutside;
    /**
     * Handles the `keydown` event for the keyClose option.
     *
     * @param e {KeyboardEvent} Normalized keydown event.
     */
    private _onKeyDown;
    private _initCollapseListeners;
    private _destroyCollapseListeners;
    private _collapse;
    /**
     * @internal
     *
     * Returns the rendered height of the sidebar (or the docked size).
     * This is used in the sidebar container.
     *
     * @return {number} Height of sidebar.
     */
    readonly _height: number;
    /**
     * @internal
     *
     * Returns the rendered width of the sidebar (or the docked size).
     * This is used in the sidebar container.
     *
     * @return {number} Width of sidebar.
     */
    readonly _width: number;
    /**
     * @internal
     *
     * Returns the docked size as a number.
     *
     * @return {number} Docked size.
     */
    readonly _dockedSize: number;
    /**
     * @internal
     *
     * Returns whether the sidebar is over mode.
     *
     * @return {boolean} Sidebar's mode is "over".
     */
    readonly _isModeOver: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is push mode.
     *
     * @return {boolean} Sidebar's mode is "push".
     */
    readonly _isModePush: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is slide mode.
     *
     * @return {boolean} Sidebar's mode is "slide".
     */
    readonly _isModeSlide: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is "docked" -- i.e. it is closed but in dock mode.
     *
     * @return {boolean} Sidebar is docked.
     */
    readonly _isDocked: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is positioned at the left or top.
     *
     * @return {boolean} Sidebar is positioned at the left or top.
     */
    readonly _isLeftOrTop: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is positioned at the left or right.
     *
     * @return {boolean} Sidebar is positioned at the left or right.
     */
    readonly _isLeftOrRight: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is inert -- i.e. the contents cannot be focused.
     *
     * @return {boolean} Sidebar is inert.
     */
    readonly _isInert: boolean;
    /**
     * "Normalizes" position. For example, "start" would be "left" if the page is LTR.
     */
    private _normalizePosition;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Sidebar>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Sidebar, "ng-sidebar", never, {
    "opened": "opened";
    "mode": "mode";
    "dock": "dock";
    "dockedSize": "dockedSize";
    "position": "position";
    "animate": "animate";
    "autoCollapseOnInit": "autoCollapseOnInit";
    "trapFocus": "trapFocus";
    "autoFocus": "autoFocus";
    "showBackdrop": "showBackdrop";
    "closeOnClickBackdrop": "closeOnClickBackdrop";
    "closeOnClickOutside": "closeOnClickOutside";
    "keyClose": "keyClose";
    "keyCode": "keyCode";
    "autoCollapseHeight": "autoCollapseHeight";
    "autoCollapseWidth": "autoCollapseWidth";
    "sidebarClass": "sidebarClass";
    "ariaLabel": "ariaLabel";
}, {
    "openedChange": "openedChange";
    "onOpenStart": "onOpenStart";
    "onOpened": "onOpened";
    "onCloseStart": "onCloseStart";
    "onClosed": "onClosed";
    "onTransitionEnd": "onTransitionEnd";
    "onModeChange": "onModeChange";
    "onPositionChange": "onPositionChange";
    "_onRerender": "_onRerender";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic2lkZWJhci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlOQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpZGViYXJDb250YWluZXIgfSBmcm9tICcuL3NpZGViYXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaWRlYmFyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfY29udGFpbmVyO1xuICAgIHByaXZhdGUgX3JlZjtcbiAgICBvcGVuZWQ6IGJvb2xlYW47XG4gICAgb3BlbmVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgbW9kZTogJ292ZXInIHwgJ3B1c2gnIHwgJ3NsaWRlJztcbiAgICBkb2NrOiBib29sZWFuO1xuICAgIGRvY2tlZFNpemU6IHN0cmluZztcbiAgICBwb3NpdGlvbjogJ3N0YXJ0JyB8ICdlbmQnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2JvdHRvbSc7XG4gICAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgICBhdXRvQ29sbGFwc2VIZWlnaHQ6IG51bWJlcjtcbiAgICBhdXRvQ29sbGFwc2VXaWR0aDogbnVtYmVyO1xuICAgIGF1dG9Db2xsYXBzZU9uSW5pdDogYm9vbGVhbjtcbiAgICBzaWRlYmFyQ2xhc3M6IHN0cmluZztcbiAgICBhcmlhTGFiZWw6IHN0cmluZztcbiAgICB0cmFwRm9jdXM6IGJvb2xlYW47XG4gICAgYXV0b0ZvY3VzOiBib29sZWFuO1xuICAgIHNob3dCYWNrZHJvcDogYm9vbGVhbjtcbiAgICBjbG9zZU9uQ2xpY2tCYWNrZHJvcDogYm9vbGVhbjtcbiAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiBib29sZWFuO1xuICAgIGtleUNsb3NlOiBib29sZWFuO1xuICAgIGtleUNvZGU6IG51bWJlcjtcbiAgICBvbk9wZW5TdGFydDogRXZlbnRFbWl0dGVyPG51bGw+O1xuICAgIG9uT3BlbmVkOiBFdmVudEVtaXR0ZXI8bnVsbD47XG4gICAgb25DbG9zZVN0YXJ0OiBFdmVudEVtaXR0ZXI8bnVsbD47XG4gICAgb25DbG9zZWQ6IEV2ZW50RW1pdHRlcjxudWxsPjtcbiAgICBvblRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxudWxsPjtcbiAgICBvbk1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuICAgIG9uUG9zaXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfb25SZXJlbmRlcjogRXZlbnRFbWl0dGVyPG51bGw+O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfZWxTaWRlYmFyOiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nO1xuICAgIHByaXZhdGUgX2ZvY3VzYWJsZUVsZW1lbnRzO1xuICAgIHByaXZhdGUgX2ZvY3VzZWRCZWZvcmVPcGVuO1xuICAgIHByaXZhdGUgX3RhYkluZGV4QXR0cjtcbiAgICBwcml2YXRlIF90YWJJbmRleEluZGljYXRvckF0dHI7XG4gICAgcHJpdmF0ZSBfd2FzQ29sbGFwc2VkO1xuICAgIHByaXZhdGUgX3Nob3VsZEFuaW1hdGU7XG4gICAgcHJpdmF0ZSBfY2xpY2tFdmVudDtcbiAgICBwcml2YXRlIF9vbkNsaWNrT3V0c2lkZUF0dGFjaGVkO1xuICAgIHByaXZhdGUgX29uS2V5RG93bkF0dGFjaGVkO1xuICAgIHByaXZhdGUgX29uUmVzaXplQXR0YWNoZWQ7XG4gICAgcHJpdmF0ZSBfaXNCcm93c2VyO1xuICAgIGNvbnN0cnVjdG9yKF9jb250YWluZXI6IFNpZGViYXJDb250YWluZXIsIF9yZWY6IENoYW5nZURldGVjdG9yUmVmLCBwbGF0Zm9ybUlkOiBPYmplY3QpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgc2lkZWJhciBhbmQgZW1pdHMgdGhlIGFwcHJvcHJpYXRlIGV2ZW50cy5cbiAgICAgKi9cbiAgICBvcGVuKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBzaWRlYmFyIGFuZCBlbWl0cyB0aGUgYXBwcm9wcmlhdGUgZXZlbnRzLlxuICAgICAqL1xuICAgIGNsb3NlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgdHJpZ2dlciBhIHJlLXJlbmRlciBvZiB0aGUgY29udGFpbmVyLiBVc2VmdWwgaWYgdGhlIHNpZGViYXIgY29udGVudHMgbWlnaHQgY2hhbmdlLlxuICAgICAqL1xuICAgIHRyaWdnZXJSZXJlbmRlcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqXG4gICAgICogQ29tcHV0ZXMgdGhlIHRyYW5zZm9ybSBzdHlsZXMgZm9yIHRoZSBzaWRlYmFyIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gVGhlIHRyYW5zZm9ybSBzdHlsZXMsIHdpdGggdGhlIFdlYktpdC1wcmVmaXhlZCB2ZXJzaW9uIGFzIHdlbGwuXG4gICAgICovXG4gICAgX2dldFN0eWxlKCk6IENTU1N0eWxlRGVjbGFyYXRpb247XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICpcbiAgICAgKiBIYW5kbGVzIHRoZSBgdHJhbnNpdGlvbmVuZGAgZXZlbnQgb24gdGhlIHNpZGViYXIgdG8gZW1pdCB0aGUgb25PcGVuZWQvb25DbG9zZWQgZXZlbnRzIGFmdGVyIHRoZSB0cmFuc2Zvcm1cbiAgICAgKiB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICAgKi9cbiAgICBfb25UcmFuc2l0aW9uRW5kKGU6IFRyYW5zaXRpb25FdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGZvY3VzIHNob3VsZCBiZSB0cmFwcGVkIHdpdGhpbiB0aGUgc2lkZWJhci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRyYXAgZm9jdXMgaW5zaWRlIHNpZGViYXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2hvdWxkVHJhcEZvY3VzO1xuICAgIC8qKlxuICAgICAqIFNldHMgZm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluc2lkZSB0aGUgc2lkZWJhci5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9mb2N1c0ZpcnN0SXRlbTtcbiAgICAvKipcbiAgICAgKiBMb29wcyBmb2N1cyBiYWNrIHRvIHRoZSBzdGFydCBvZiB0aGUgc2lkZWJhciBpZiBzZXQgdG8gZG8gc28uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25Gb2N1c1RyYXA7XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgYWJpbGl0eSB0byBmb2N1cyBzaWRlYmFyIGVsZW1lbnRzIHdoZW4gaXQncyBvcGVuL2Nsb3NlZCB0byBlbnN1cmUgdGhhdCB0aGUgc2lkZWJhciBpcyBpbmVydCB3aGVuXG4gICAgICogYXBwcm9wcmlhdGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2V0Rm9jdXNlZDtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNsb3NlT25DbGlja091dHNpZGUgYW5kIGtleUNsb3NlIG9wdGlvbnMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdENsb3NlTGlzdGVuZXJzO1xuICAgIHByaXZhdGUgX2luaXRDbG9zZUNsaWNrTGlzdGVuZXI7XG4gICAgcHJpdmF0ZSBfaW5pdENsb3NlS2V5RG93bkxpc3RlbmVyO1xuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGFsbCBldmVudCBoYW5kbGVycyBmcm9tIF9pbml0Q2xvc2VMaXN0ZW5lcnMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZGVzdHJveUNsb3NlTGlzdGVuZXJzO1xuICAgIHByaXZhdGUgX2Rlc3Ryb3lDbG9zZUNsaWNrTGlzdGVuZXI7XG4gICAgcHJpdmF0ZSBfZGVzdHJveUNsb3NlS2V5RG93bkxpc3RlbmVyO1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYGNsaWNrYCBldmVudHMgb24gYW55dGhpbmcgd2hpbGUgdGhlIHNpZGViYXIgaXMgb3BlbiBmb3IgdGhlIGNsb3NlT25DbGlja091dHNpZGUgb3B0aW9uLlxuICAgICAqIFByb2dyYW1hdGljYWxseSBjbG9zZXMgdGhlIHNpZGViYXIgaWYgYSBjbGljayBvY2N1cnMgb3V0c2lkZSB0aGUgc2lkZWJhci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIHtNb3VzZUV2ZW50fSBNb3VzZSBjbGljayBldmVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9vbkNsaWNrT3V0c2lkZTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBga2V5ZG93bmAgZXZlbnQgZm9yIHRoZSBrZXlDbG9zZSBvcHRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSB7S2V5Ym9hcmRFdmVudH0gTm9ybWFsaXplZCBrZXlkb3duIGV2ZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgX29uS2V5RG93bjtcbiAgICBwcml2YXRlIF9pbml0Q29sbGFwc2VMaXN0ZW5lcnM7XG4gICAgcHJpdmF0ZSBfZGVzdHJveUNvbGxhcHNlTGlzdGVuZXJzO1xuICAgIHByaXZhdGUgX2NvbGxhcHNlO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqXG4gICAgICogUmV0dXJucyB0aGUgcmVuZGVyZWQgaGVpZ2h0IG9mIHRoZSBzaWRlYmFyIChvciB0aGUgZG9ja2VkIHNpemUpLlxuICAgICAqIFRoaXMgaXMgdXNlZCBpbiB0aGUgc2lkZWJhciBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhlaWdodCBvZiBzaWRlYmFyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IF9oZWlnaHQ6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKlxuICAgICAqIFJldHVybnMgdGhlIHJlbmRlcmVkIHdpZHRoIG9mIHRoZSBzaWRlYmFyIChvciB0aGUgZG9ja2VkIHNpemUpLlxuICAgICAqIFRoaXMgaXMgdXNlZCBpbiB0aGUgc2lkZWJhciBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFdpZHRoIG9mIHNpZGViYXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgX3dpZHRoOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIHRoZSBkb2NrZWQgc2l6ZSBhcyBhIG51bWJlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gRG9ja2VkIHNpemUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgX2RvY2tlZFNpemU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgc2lkZWJhciBpcyBvdmVyIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBTaWRlYmFyJ3MgbW9kZSBpcyBcIm92ZXJcIi5cbiAgICAgKi9cbiAgICByZWFkb25seSBfaXNNb2RlT3ZlcjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgc2lkZWJhciBpcyBwdXNoIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBTaWRlYmFyJ3MgbW9kZSBpcyBcInB1c2hcIi5cbiAgICAgKi9cbiAgICByZWFkb25seSBfaXNNb2RlUHVzaDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgc2lkZWJhciBpcyBzbGlkZSBtb2RlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gU2lkZWJhcidzIG1vZGUgaXMgXCJzbGlkZVwiLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IF9pc01vZGVTbGlkZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgc2lkZWJhciBpcyBcImRvY2tlZFwiIC0tIGkuZS4gaXQgaXMgY2xvc2VkIGJ1dCBpbiBkb2NrIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBTaWRlYmFyIGlzIGRvY2tlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBfaXNEb2NrZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHNpZGViYXIgaXMgcG9zaXRpb25lZCBhdCB0aGUgbGVmdCBvciB0b3AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBTaWRlYmFyIGlzIHBvc2l0aW9uZWQgYXQgdGhlIGxlZnQgb3IgdG9wLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IF9pc0xlZnRPclRvcDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgc2lkZWJhciBpcyBwb3NpdGlvbmVkIGF0IHRoZSBsZWZ0IG9yIHJpZ2h0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gU2lkZWJhciBpcyBwb3NpdGlvbmVkIGF0IHRoZSBsZWZ0IG9yIHJpZ2h0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IF9pc0xlZnRPclJpZ2h0OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzaWRlYmFyIGlzIGluZXJ0IC0tIGkuZS4gdGhlIGNvbnRlbnRzIGNhbm5vdCBiZSBmb2N1c2VkLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gU2lkZWJhciBpcyBpbmVydC5cbiAgICAgKi9cbiAgICByZWFkb25seSBfaXNJbmVydDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBcIk5vcm1hbGl6ZXNcIiBwb3NpdGlvbi4gRm9yIGV4YW1wbGUsIFwic3RhcnRcIiB3b3VsZCBiZSBcImxlZnRcIiBpZiB0aGUgcGFnZSBpcyBMVFIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbm9ybWFsaXplUG9zaXRpb247XG59XG4iXX0=