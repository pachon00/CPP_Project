import { OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FitBoundsAccessor, FitBoundsService } from '../services/fit-bounds';
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmFitBounds implements OnInit, OnDestroy, OnChanges {
    private readonly _fitBoundsAccessor;
    private readonly _fitBoundsService;
    /**
     * If the value is true, the element gets added to the bounds of the map.
     * Default: true.
     */
    agmFitBounds: boolean;
    private _destroyed$;
    private _latestFitBoundsDetails;
    constructor(_fitBoundsAccessor: FitBoundsAccessor, _fitBoundsService: FitBoundsService);
    /**
     * @internal
     */
    ngOnChanges(): void;
    /**
     * @internal
     */
    ngOnInit(): void;
    private _updateBounds;
    /**
     * @internal
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmFitBounds>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmFitBounds, "[agmFitBounds]", never, {
    "agmFitBounds": "agmFitBounds";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LWJvdW5kcy5kLnRzIiwic291cmNlcyI6WyJmaXQtYm91bmRzLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRml0Qm91bmRzQWNjZXNzb3IsIEZpdEJvdW5kc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXQtYm91bmRzJztcbi8qKlxuICogQWRkcyB0aGUgZ2l2ZW4gZGlyZWN0aXZlIHRvIHRoZSBhdXRvIGZpdCBib3VuZHMgZmVhdHVyZSB3aGVuIHRoZSB2YWx1ZSBpcyB0cnVlLlxuICogVG8gbWFrZSBpdCB3b3JrIHdpdGggeW91IGN1c3RvbSBBR00gY29tcG9uZW50LCB5b3UgYWxzbyBoYXZlIHRvIGltcGxlbWVudCB0aGUge0BsaW5rIEZpdEJvdW5kc0FjY2Vzc29yfSBhYnN0cmFjdCBjbGFzcy5cbiAqIEBleGFtcGxlXG4gKiA8YWdtLW1hcmtlciBbYWdtRml0Qm91bmRzXT1cInRydWVcIj48L2FnbS1tYXJrZXI+XG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFnbUZpdEJvdW5kcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZpdEJvdW5kc0FjY2Vzc29yO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZpdEJvdW5kc1NlcnZpY2U7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIHZhbHVlIGlzIHRydWUsIHRoZSBlbGVtZW50IGdldHMgYWRkZWQgdG8gdGhlIGJvdW5kcyBvZiB0aGUgbWFwLlxuICAgICAqIERlZmF1bHQ6IHRydWUuXG4gICAgICovXG4gICAgYWdtRml0Qm91bmRzOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2Rlc3Ryb3llZCQ7XG4gICAgcHJpdmF0ZSBfbGF0ZXN0Rml0Qm91bmRzRGV0YWlscztcbiAgICBjb25zdHJ1Y3RvcihfZml0Qm91bmRzQWNjZXNzb3I6IEZpdEJvdW5kc0FjY2Vzc29yLCBfZml0Qm91bmRzU2VydmljZTogRml0Qm91bmRzU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgX3VwZGF0ZUJvdW5kcztcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19