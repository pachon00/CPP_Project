import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, EventEmitter, NgZone, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { NgbCarouselConfig } from './carousel-config';
/**
 * A directive that wraps the individual carousel slide.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbSlide {
    tplRef: TemplateRef<any>;
    /**
     * Slide id that must be unique for the entire document.
     *
     * If not provided, will be generated in the `ngb-slide-xx` format.
     */
    id: string;
    constructor(tplRef: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbSlide>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NgbSlide, "ng-template[ngbSlide]", never, {
    "id": "id";
}, {}, never>;
}
/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */
export declare class NgbCarousel implements AfterContentChecked, AfterContentInit, OnDestroy {
    private _platformId;
    private _ngZone;
    private _cd;
    slides: QueryList<NgbSlide>;
    NgbSlideEventSource: typeof NgbSlideEventSource;
    private _destroy$;
    private _interval$;
    private _mouseHover$;
    private _pauseOnHover$;
    private _pause$;
    private _wrap$;
    /**
     * The slide id that should be displayed **initially**.
     *
     * For subsequent interactions use methods `select()`, `next()`, etc. and the `(slide)` output.
     */
    activeId: string;
    /**
     * Time in milliseconds before the next slide is shown.
     */
    interval: number;
    /**
     * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
     */
    wrap: boolean;
    /**
     * If `true`, allows to interact with carousel using keyboard 'arrow left' and 'arrow right'.
     */
    keyboard: boolean;
    /**
     * If `true`, will pause slide switching when mouse cursor hovers the slide.
     *
     * @since 2.2.0
     */
    pauseOnHover: boolean;
    /**
     * If `true`, 'previous' and 'next' navigation arrows will be visible on the slide.
     *
     * @since 2.2.0
     */
    showNavigationArrows: boolean;
    /**
     * If `true`, navigation indicators at the bottom of the slide will be visible.
     *
     * @since 2.2.0
     */
    showNavigationIndicators: boolean;
    /**
     * An event emitted right after the slide transition is completed.
     *
     * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
     */
    slide: EventEmitter<NgbSlideEvent>;
    constructor(config: NgbCarouselConfig, _platformId: any, _ngZone: NgZone, _cd: ChangeDetectorRef);
    mouseEnter(): void;
    mouseLeave(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    /**
     * Navigates to a slide with the specified identifier.
     */
    select(slideId: string, source?: NgbSlideEventSource): void;
    /**
     * Navigates to the previous slide.
     */
    prev(source?: NgbSlideEventSource): void;
    /**
     * Navigates to the next slide.
     */
    next(source?: NgbSlideEventSource): void;
    /**
     * Pauses cycling through the slides.
     */
    pause(): void;
    /**
     * Restarts cycling through the slides from left to right.
     */
    cycle(): void;
    private _cycleToSelected;
    private _getSlideEventDirection;
    private _getSlideById;
    private _getSlideIdxById;
    private _getNextSlide;
    private _getPrevSlide;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbCarousel>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgbCarousel, "ngb-carousel", ["ngbCarousel"], {
    "interval": "interval";
    "wrap": "wrap";
    "keyboard": "keyboard";
    "pauseOnHover": "pauseOnHover";
    "showNavigationArrows": "showNavigationArrows";
    "showNavigationIndicators": "showNavigationIndicators";
    "activeId": "activeId";
}, {
    "slide": "slide";
}, ["slides"]>;
}
/**
 * A slide change event emitted right after the slide transition is completed.
 */
export interface NgbSlideEvent {
    /**
     * The previous slide id.
     */
    prev: string;
    /**
     * The current slide id.
     */
    current: string;
    /**
     * The slide event direction.
     *
     * Possible values are `'left' | 'right'`.
     */
    direction: NgbSlideEventDirection;
    /**
     * Whether the pause() method was called (and no cycle() call was done afterwards).
     *
     * @since 5.1.0
     */
    paused: boolean;
    /**
     * Source triggering the slide change event.
     *
     * Possible values are `'timer' | 'arrowLeft' | 'arrowRight' | 'indicator'`
     *
     * @since 5.1.0
     */
    source?: NgbSlideEventSource;
}
/**
 * Defines the carousel slide transition direction.
 */
export declare enum NgbSlideEventDirection {
    LEFT,
    RIGHT
}
export declare enum NgbSlideEventSource {
    TIMER = "timer",
    ARROW_LEFT = "arrowLeft",
    ARROW_RIGHT = "arrowRight",
    INDICATOR = "indicator"
}
export declare const NGB_CAROUSEL_DIRECTIVES: (typeof NgbSlide | typeof NgbCarousel)[];

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZC50cyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIE9uRGVzdHJveSwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLWNvbmZpZyc7XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgd3JhcHMgdGhlIGluZGl2aWR1YWwgY2Fyb3VzZWwgc2xpZGUuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlNsaWRlIHtcbiAgICB0cGxSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgLyoqXG4gICAgICogU2xpZGUgaWQgdGhhdCBtdXN0IGJlIHVuaXF1ZSBmb3IgdGhlIGVudGlyZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgd2lsbCBiZSBnZW5lcmF0ZWQgaW4gdGhlIGBuZ2Itc2xpZGUteHhgIGZvcm1hdC5cbiAgICAgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHRwbFJlZjogVGVtcGxhdGVSZWY8YW55Pik7XG59XG4vKipcbiAqIENhcm91c2VsIGlzIGEgY29tcG9uZW50IHRvIGVhc2lseSBjcmVhdGUgYW5kIGNvbnRyb2wgc2xpZGVzaG93cy5cbiAqXG4gKiBBbGxvd3MgdG8gc2V0IGludGVydmFscywgY2hhbmdlIHRoZSB3YXkgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgc2xpZGVzIGFuZCBwcm92aWRlcyBhIHByb2dyYW1tYXRpYyBBUEkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYkNhcm91c2VsIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9wbGF0Zm9ybUlkO1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICBwcml2YXRlIF9jZDtcbiAgICBzbGlkZXM6IFF1ZXJ5TGlzdDxOZ2JTbGlkZT47XG4gICAgTmdiU2xpZGVFdmVudFNvdXJjZTogdHlwZW9mIE5nYlNsaWRlRXZlbnRTb3VyY2U7XG4gICAgcHJpdmF0ZSBfZGVzdHJveSQ7XG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWwkO1xuICAgIHByaXZhdGUgX21vdXNlSG92ZXIkO1xuICAgIHByaXZhdGUgX3BhdXNlT25Ib3ZlciQ7XG4gICAgcHJpdmF0ZSBfcGF1c2UkO1xuICAgIHByaXZhdGUgX3dyYXAkO1xuICAgIC8qKlxuICAgICAqIFRoZSBzbGlkZSBpZCB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgKippbml0aWFsbHkqKi5cbiAgICAgKlxuICAgICAqIEZvciBzdWJzZXF1ZW50IGludGVyYWN0aW9ucyB1c2UgbWV0aG9kcyBgc2VsZWN0KClgLCBgbmV4dCgpYCwgZXRjLiBhbmQgdGhlIGAoc2xpZGUpYCBvdXRwdXQuXG4gICAgICovXG4gICAgYWN0aXZlSWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaW1lIGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIG5leHQgc2xpZGUgaXMgc2hvd24uXG4gICAgICovXG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHdpbGwgJ3dyYXAnIHRoZSBjYXJvdXNlbCBieSBzd2l0Y2hpbmcgZnJvbSB0aGUgbGFzdCBzbGlkZSBiYWNrIHRvIHRoZSBmaXJzdC5cbiAgICAgKi9cbiAgICB3cmFwOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgYWxsb3dzIHRvIGludGVyYWN0IHdpdGggY2Fyb3VzZWwgdXNpbmcga2V5Ym9hcmQgJ2Fycm93IGxlZnQnIGFuZCAnYXJyb3cgcmlnaHQnLlxuICAgICAqL1xuICAgIGtleWJvYXJkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgd2lsbCBwYXVzZSBzbGlkZSBzd2l0Y2hpbmcgd2hlbiBtb3VzZSBjdXJzb3IgaG92ZXJzIHRoZSBzbGlkZS5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAyLjIuMFxuICAgICAqL1xuICAgIHBhdXNlT25Ib3ZlcjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsICdwcmV2aW91cycgYW5kICduZXh0JyBuYXZpZ2F0aW9uIGFycm93cyB3aWxsIGJlIHZpc2libGUgb24gdGhlIHNsaWRlLlxuICAgICAqXG4gICAgICogQHNpbmNlIDIuMi4wXG4gICAgICovXG4gICAgc2hvd05hdmlnYXRpb25BcnJvd3M6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBuYXZpZ2F0aW9uIGluZGljYXRvcnMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2xpZGUgd2lsbCBiZSB2aXNpYmxlLlxuICAgICAqXG4gICAgICogQHNpbmNlIDIuMi4wXG4gICAgICovXG4gICAgc2hvd05hdmlnYXRpb25JbmRpY2F0b3JzOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYWZ0ZXIgdGhlIHNsaWRlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxuICAgICAqXG4gICAgICogU2VlIFtgTmdiU2xpZGVFdmVudGBdKCMvY29tcG9uZW50cy9jYXJvdXNlbC9hcGkjTmdiU2xpZGVFdmVudCkgZm9yIHBheWxvYWQgZGV0YWlscy5cbiAgICAgKi9cbiAgICBzbGlkZTogRXZlbnRFbWl0dGVyPE5nYlNsaWRlRXZlbnQ+O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiQ2Fyb3VzZWxDb25maWcsIF9wbGF0Zm9ybUlkOiBhbnksIF9uZ1pvbmU6IE5nWm9uZSwgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgbW91c2VFbnRlcigpOiB2b2lkO1xuICAgIG1vdXNlTGVhdmUoKTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byBhIHNsaWRlIHdpdGggdGhlIHNwZWNpZmllZCBpZGVudGlmaWVyLlxuICAgICAqL1xuICAgIHNlbGVjdChzbGlkZUlkOiBzdHJpbmcsIHNvdXJjZT86IE5nYlNsaWRlRXZlbnRTb3VyY2UpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byB0aGUgcHJldmlvdXMgc2xpZGUuXG4gICAgICovXG4gICAgcHJldihzb3VyY2U/OiBOZ2JTbGlkZUV2ZW50U291cmNlKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIG5leHQgc2xpZGUuXG4gICAgICovXG4gICAgbmV4dChzb3VyY2U/OiBOZ2JTbGlkZUV2ZW50U291cmNlKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBQYXVzZXMgY3ljbGluZyB0aHJvdWdoIHRoZSBzbGlkZXMuXG4gICAgICovXG4gICAgcGF1c2UoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXN0YXJ0cyBjeWNsaW5nIHRocm91Z2ggdGhlIHNsaWRlcyBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICovXG4gICAgY3ljbGUoKTogdm9pZDtcbiAgICBwcml2YXRlIF9jeWNsZVRvU2VsZWN0ZWQ7XG4gICAgcHJpdmF0ZSBfZ2V0U2xpZGVFdmVudERpcmVjdGlvbjtcbiAgICBwcml2YXRlIF9nZXRTbGlkZUJ5SWQ7XG4gICAgcHJpdmF0ZSBfZ2V0U2xpZGVJZHhCeUlkO1xuICAgIHByaXZhdGUgX2dldE5leHRTbGlkZTtcbiAgICBwcml2YXRlIF9nZXRQcmV2U2xpZGU7XG59XG4vKipcbiAqIEEgc2xpZGUgY2hhbmdlIGV2ZW50IGVtaXR0ZWQgcmlnaHQgYWZ0ZXIgdGhlIHNsaWRlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlNsaWRlRXZlbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBwcmV2aW91cyBzbGlkZSBpZC5cbiAgICAgKi9cbiAgICBwcmV2OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2xpZGUgaWQuXG4gICAgICovXG4gICAgY3VycmVudDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBzbGlkZSBldmVudCBkaXJlY3Rpb24uXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGAnbGVmdCcgfCAncmlnaHQnYC5cbiAgICAgKi9cbiAgICBkaXJlY3Rpb246IE5nYlNsaWRlRXZlbnREaXJlY3Rpb247XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgcGF1c2UoKSBtZXRob2Qgd2FzIGNhbGxlZCAoYW5kIG5vIGN5Y2xlKCkgY2FsbCB3YXMgZG9uZSBhZnRlcndhcmRzKS5cbiAgICAgKlxuICAgICAqIEBzaW5jZSA1LjEuMFxuICAgICAqL1xuICAgIHBhdXNlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTb3VyY2UgdHJpZ2dlcmluZyB0aGUgc2xpZGUgY2hhbmdlIGV2ZW50LlxuICAgICAqXG4gICAgICogUG9zc2libGUgdmFsdWVzIGFyZSBgJ3RpbWVyJyB8ICdhcnJvd0xlZnQnIHwgJ2Fycm93UmlnaHQnIHwgJ2luZGljYXRvcidgXG4gICAgICpcbiAgICAgKiBAc2luY2UgNS4xLjBcbiAgICAgKi9cbiAgICBzb3VyY2U/OiBOZ2JTbGlkZUV2ZW50U291cmNlO1xufVxuLyoqXG4gKiBEZWZpbmVzIHRoZSBjYXJvdXNlbCBzbGlkZSB0cmFuc2l0aW9uIGRpcmVjdGlvbi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgZW51bSBOZ2JTbGlkZUV2ZW50RGlyZWN0aW9uIHtcbiAgICBMRUZULFxuICAgIFJJR0hUXG59XG5leHBvcnQgZGVjbGFyZSBlbnVtIE5nYlNsaWRlRXZlbnRTb3VyY2Uge1xuICAgIFRJTUVSID0gXCJ0aW1lclwiLFxuICAgIEFSUk9XX0xFRlQgPSBcImFycm93TGVmdFwiLFxuICAgIEFSUk9XX1JJR0hUID0gXCJhcnJvd1JpZ2h0XCIsXG4gICAgSU5ESUNBVE9SID0gXCJpbmRpY2F0b3JcIlxufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgTkdCX0NBUk9VU0VMX0RJUkVDVElWRVM6ICh0eXBlb2YgTmdiU2xpZGUgfCB0eXBlb2YgTmdiQ2Fyb3VzZWwpW107XG4iXX0=