import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LoadingBarService implements OnDestroy {
    private platformId;
    readonly progress$: Subject<number>;
    private _pendingRequests;
    private _value;
    private _incTimeout;
    constructor(platformId: Object);
    start(initialValue?: number): void;
    stop(): void;
    complete(): void;
    /**
     * Set the loading bar's width to a certain percent.
     *
     * @param n any value between 0 and 100
     */
    set(n: any): void;
    /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     */
    increment(rnd?: number): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoadingBarService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LoadingBarService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1iYXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJsb2FkaW5nLWJhci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExvYWRpbmdCYXJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHBsYXRmb3JtSWQ7XG4gICAgcmVhZG9ubHkgcHJvZ3Jlc3MkOiBTdWJqZWN0PG51bWJlcj47XG4gICAgcHJpdmF0ZSBfcGVuZGluZ1JlcXVlc3RzO1xuICAgIHByaXZhdGUgX3ZhbHVlO1xuICAgIHByaXZhdGUgX2luY1RpbWVvdXQ7XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZDogT2JqZWN0KTtcbiAgICBzdGFydChpbml0aWFsVmFsdWU/OiBudW1iZXIpOiB2b2lkO1xuICAgIHN0b3AoKTogdm9pZDtcbiAgICBjb21wbGV0ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbG9hZGluZyBiYXIncyB3aWR0aCB0byBhIGNlcnRhaW4gcGVyY2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuIGFueSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMFxuICAgICAqL1xuICAgIHNldChuOiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEluY3JlbWVudHMgdGhlIGxvYWRpbmcgYmFyIGJ5IGEgcmFuZG9tIGFtb3VudFxuICAgICAqIGJ1dCBzbG93cyBkb3duIGFzIGl0IHByb2dyZXNzZXNcbiAgICAgKi9cbiAgICBpbmNyZW1lbnQocm5kPzogbnVtYmVyKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19