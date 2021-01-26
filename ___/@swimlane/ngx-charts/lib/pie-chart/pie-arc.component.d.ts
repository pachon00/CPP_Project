import { EventEmitter, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PieArcComponent implements OnChanges {
    fill: any;
    startAngle: number;
    endAngle: number;
    innerRadius: any;
    outerRadius: any;
    cornerRadius: number;
    value: any;
    max: any;
    data: any;
    explodeSlices: boolean;
    gradient: boolean;
    animate: boolean;
    pointerEvents: boolean;
    isActive: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    dblclick: EventEmitter<any>;
    element: HTMLElement;
    path: any;
    startOpacity: number;
    radialGradientId: string;
    linearGradientId: string;
    gradientFill: string;
    initialized: boolean;
    private _timeout;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    getGradient(): any;
    getPointerEvents(): "auto" | "none";
    update(): void;
    calculateArc(): any;
    loadAnimation(): void;
    updateAnimation(): void;
    onClick(): void;
    onDblClick(event: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PieArcComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PieArcComponent, "g[ngx-charts-pie-arc]", never, {
    "startAngle": "startAngle";
    "endAngle": "endAngle";
    "cornerRadius": "cornerRadius";
    "explodeSlices": "explodeSlices";
    "gradient": "gradient";
    "animate": "animate";
    "pointerEvents": "pointerEvents";
    "isActive": "isActive";
    "fill": "fill";
    "innerRadius": "innerRadius";
    "outerRadius": "outerRadius";
    "value": "value";
    "max": "max";
    "data": "data";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
    "dblclick": "dblclick";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWFyYy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicGllLWFyYy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGllQXJjQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBmaWxsOiBhbnk7XG4gICAgc3RhcnRBbmdsZTogbnVtYmVyO1xuICAgIGVuZEFuZ2xlOiBudW1iZXI7XG4gICAgaW5uZXJSYWRpdXM6IGFueTtcbiAgICBvdXRlclJhZGl1czogYW55O1xuICAgIGNvcm5lclJhZGl1czogbnVtYmVyO1xuICAgIHZhbHVlOiBhbnk7XG4gICAgbWF4OiBhbnk7XG4gICAgZGF0YTogYW55O1xuICAgIGV4cGxvZGVTbGljZXM6IGJvb2xlYW47XG4gICAgZ3JhZGllbnQ6IGJvb2xlYW47XG4gICAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgICBwb2ludGVyRXZlbnRzOiBib29sZWFuO1xuICAgIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRibGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwYXRoOiBhbnk7XG4gICAgc3RhcnRPcGFjaXR5OiBudW1iZXI7XG4gICAgcmFkaWFsR3JhZGllbnRJZDogc3RyaW5nO1xuICAgIGxpbmVhckdyYWRpZW50SWQ6IHN0cmluZztcbiAgICBncmFkaWVudEZpbGw6IHN0cmluZztcbiAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF90aW1lb3V0O1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIGdldEdyYWRpZW50KCk6IGFueTtcbiAgICBnZXRQb2ludGVyRXZlbnRzKCk6IFwiYXV0b1wiIHwgXCJub25lXCI7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgY2FsY3VsYXRlQXJjKCk6IGFueTtcbiAgICBsb2FkQW5pbWF0aW9uKCk6IHZvaWQ7XG4gICAgdXBkYXRlQW5pbWF0aW9uKCk6IHZvaWQ7XG4gICAgb25DbGljaygpOiB2b2lkO1xuICAgIG9uRGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xufVxuIl19