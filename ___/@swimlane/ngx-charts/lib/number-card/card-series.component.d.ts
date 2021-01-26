import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface CardModel {
    x: any;
    y: any;
    width: number;
    height: number;
    color: string;
    label: string;
    data: any;
    tooltipText: string;
}
export declare class CardSeriesComponent implements OnChanges {
    data: any[];
    slots: any[];
    dims: any;
    colors: any;
    innerPadding: number;
    cardColor: any;
    bandColor: any;
    emptyColor: string;
    textColor: any;
    valueFormatting: any;
    labelFormatting: any;
    animations: boolean;
    select: EventEmitter<any>;
    cards: CardModel[];
    emptySlots: any[];
    medianSize: number;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getCards(): any[];
    trackBy(index: any, card: any): string;
    onClick(data: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardSeriesComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CardSeriesComponent, "g[ngx-charts-card-series]", never, {
    "innerPadding": "innerPadding";
    "emptyColor": "emptyColor";
    "animations": "animations";
    "data": "data";
    "slots": "slots";
    "dims": "dims";
    "colors": "colors";
    "cardColor": "cardColor";
    "bandColor": "bandColor";
    "textColor": "textColor";
    "valueFormatting": "valueFormatting";
    "labelFormatting": "labelFormatting";
}, {
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zZXJpZXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcmQtc2VyaWVzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZE1vZGVsIHtcbiAgICB4OiBhbnk7XG4gICAgeTogYW55O1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGRhdGE6IGFueTtcbiAgICB0b29sdGlwVGV4dDogc3RyaW5nO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FyZFNlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgZGF0YTogYW55W107XG4gICAgc2xvdHM6IGFueVtdO1xuICAgIGRpbXM6IGFueTtcbiAgICBjb2xvcnM6IGFueTtcbiAgICBpbm5lclBhZGRpbmc6IG51bWJlcjtcbiAgICBjYXJkQ29sb3I6IGFueTtcbiAgICBiYW5kQ29sb3I6IGFueTtcbiAgICBlbXB0eUNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dENvbG9yOiBhbnk7XG4gICAgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG4gICAgbGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gICAgYW5pbWF0aW9uczogYm9vbGVhbjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGNhcmRzOiBDYXJkTW9kZWxbXTtcbiAgICBlbXB0eVNsb3RzOiBhbnlbXTtcbiAgICBtZWRpYW5TaXplOiBudW1iZXI7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZ2V0Q2FyZHMoKTogYW55W107XG4gICAgdHJhY2tCeShpbmRleDogYW55LCBjYXJkOiBhbnkpOiBzdHJpbmc7XG4gICAgb25DbGljayhkYXRhOiBhbnkpOiB2b2lkO1xufVxuIl19