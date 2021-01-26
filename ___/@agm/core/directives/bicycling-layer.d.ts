import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LayerManager } from '../services/managers/layer-manager';
import * as ɵngcc0 from '@angular/core';
export declare class AgmBicyclingLayer implements OnInit, OnChanges, OnDestroy {
    private _manager;
    private _addedToManager;
    private _id;
    /**
     * Hide/show bicycling layer
     */
    visible: boolean;
    constructor(_manager: LayerManager);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmBicyclingLayer>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmBicyclingLayer, "agm-bicycling-layer", never, {
    "visible": "visible";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmljeWNsaW5nLWxheWVyLmQudHMiLCJzb3VyY2VzIjpbImJpY3ljbGluZy1sYXllci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvbGF5ZXItbWFuYWdlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZ21CaWN5Y2xpbmdMYXllciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX21hbmFnZXI7XG4gICAgcHJpdmF0ZSBfYWRkZWRUb01hbmFnZXI7XG4gICAgcHJpdmF0ZSBfaWQ7XG4gICAgLyoqXG4gICAgICogSGlkZS9zaG93IGJpY3ljbGluZyBsYXllclxuICAgICAqL1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoX21hbmFnZXI6IExheWVyTWFuYWdlcik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgaWQoKTogc3RyaW5nO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=