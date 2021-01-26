import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LayerManager } from '../services/managers/layer-manager';
import * as ɵngcc0 from '@angular/core';
export declare class AgmTransitLayer implements OnInit, OnChanges, OnDestroy {
    private _manager;
    private _addedToManager;
    private _id;
    /**
     * Hide/show transit layer
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmTransitLayer>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmTransitLayer, "agm-transit-layer", never, {
    "visible": "visible";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdC1sYXllci5kLnRzIiwic291cmNlcyI6WyJ0cmFuc2l0LWxheWVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllck1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9sYXllci1tYW5hZ2VyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFnbVRyYW5zaXRMYXllciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX21hbmFnZXI7XG4gICAgcHJpdmF0ZSBfYWRkZWRUb01hbmFnZXI7XG4gICAgcHJpdmF0ZSBfaWQ7XG4gICAgLyoqXG4gICAgICogSGlkZS9zaG93IHRyYW5zaXQgbGF5ZXJcbiAgICAgKi9cbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKF9tYW5hZ2VyOiBMYXllck1hbmFnZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGlkKCk6IHN0cmluZztcbiAgICAvKiogQGludGVybmFsICovXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19