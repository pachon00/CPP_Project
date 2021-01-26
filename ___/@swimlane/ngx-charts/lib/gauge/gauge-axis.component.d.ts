import { OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class GaugeAxisComponent implements OnChanges {
    bigSegments: any;
    smallSegments: any;
    min: any;
    max: any;
    angleSpan: number;
    startAngle: number;
    radius: any;
    valueScale: any;
    tickFormatting: any;
    ticks: any;
    rotationAngle: number;
    rotate: string;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getTicks(): any;
    getTextAnchor(angle: any): string;
    getTickPath(startDistance: any, tickLength: any, angle: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GaugeAxisComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GaugeAxisComponent, "g[ngx-charts-gauge-axis]", never, {
    "bigSegments": "bigSegments";
    "smallSegments": "smallSegments";
    "min": "min";
    "max": "max";
    "angleSpan": "angleSpan";
    "startAngle": "startAngle";
    "radius": "radius";
    "valueScale": "valueScale";
    "tickFormatting": "tickFormatting";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtYXhpcy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ2F1Z2UtYXhpcy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHYXVnZUF4aXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIGJpZ1NlZ21lbnRzOiBhbnk7XG4gICAgc21hbGxTZWdtZW50czogYW55O1xuICAgIG1pbjogYW55O1xuICAgIG1heDogYW55O1xuICAgIGFuZ2xlU3BhbjogbnVtYmVyO1xuICAgIHN0YXJ0QW5nbGU6IG51bWJlcjtcbiAgICByYWRpdXM6IGFueTtcbiAgICB2YWx1ZVNjYWxlOiBhbnk7XG4gICAgdGlja0Zvcm1hdHRpbmc6IGFueTtcbiAgICB0aWNrczogYW55O1xuICAgIHJvdGF0aW9uQW5nbGU6IG51bWJlcjtcbiAgICByb3RhdGU6IHN0cmluZztcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBnZXRUaWNrcygpOiBhbnk7XG4gICAgZ2V0VGV4dEFuY2hvcihhbmdsZTogYW55KTogc3RyaW5nO1xuICAgIGdldFRpY2tQYXRoKHN0YXJ0RGlzdGFuY2U6IGFueSwgdGlja0xlbmd0aDogYW55LCBhbmdsZTogYW55KTogYW55O1xufVxuIl19