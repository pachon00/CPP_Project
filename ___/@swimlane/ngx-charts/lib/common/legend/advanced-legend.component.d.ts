import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class AdvancedLegendComponent implements OnChanges {
    width: number;
    data: any;
    colors: any;
    label: string;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    legendItems: any[];
    total: number;
    roundedTotal: number;
    valueFormatting: (value: number) => any;
    labelFormatting: (value: string) => any;
    percentageFormatting: (value: number) => any;
    defaultValueFormatting: (value: number) => any;
    ngOnChanges(changes: SimpleChanges): void;
    getTotal(): number;
    update(): void;
    getLegendItems(): any;
    trackBy(item: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AdvancedLegendComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AdvancedLegendComponent, "ngx-charts-advanced-legend", never, {
    "label": "label";
    "animations": "animations";
    "labelFormatting": "labelFormatting";
    "percentageFormatting": "percentageFormatting";
    "width": "width";
    "data": "data";
    "colors": "colors";
    "valueFormatting": "valueFormatting";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtbGVnZW5kLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZHZhbmNlZC1sZWdlbmQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZHZhbmNlZExlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG4gICAgY29sb3JzOiBhbnk7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBhbmltYXRpb25zOiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGxlZ2VuZEl0ZW1zOiBhbnlbXTtcbiAgICB0b3RhbDogbnVtYmVyO1xuICAgIHJvdW5kZWRUb3RhbDogbnVtYmVyO1xuICAgIHZhbHVlRm9ybWF0dGluZzogKHZhbHVlOiBudW1iZXIpID0+IGFueTtcbiAgICBsYWJlbEZvcm1hdHRpbmc6ICh2YWx1ZTogc3RyaW5nKSA9PiBhbnk7XG4gICAgcGVyY2VudGFnZUZvcm1hdHRpbmc6ICh2YWx1ZTogbnVtYmVyKSA9PiBhbnk7XG4gICAgZGVmYXVsdFZhbHVlRm9ybWF0dGluZzogKHZhbHVlOiBudW1iZXIpID0+IGFueTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBnZXRUb3RhbCgpOiBudW1iZXI7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0TGVnZW5kSXRlbXMoKTogYW55O1xuICAgIHRyYWNrQnkoaXRlbTogYW55KTogYW55O1xufVxuIl19