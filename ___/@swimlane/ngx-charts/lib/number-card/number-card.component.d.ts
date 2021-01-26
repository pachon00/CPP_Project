import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class NumberCardComponent extends BaseChartComponent {
    cardColor: string;
    bandColor: string;
    emptyColor: string;
    innerPadding: number;
    textColor: string;
    valueFormatting: any;
    labelFormatting: any;
    designatedTotal: number;
    dims: ViewDimensions;
    data: any[];
    slots: any[];
    colors: ColorHelper;
    transform: string;
    domain: any[];
    margin: number[];
    backgroundCards: any[];
    readonly clickable: boolean;
    update(): void;
    getDomain(): any[];
    onClick(data: any): void;
    setColors(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NumberCardComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NumberCardComponent, "ngx-charts-number-card", never, {
    "emptyColor": "emptyColor";
    "innerPadding": "innerPadding";
    "cardColor": "cardColor";
    "bandColor": "bandColor";
    "textColor": "textColor";
    "valueFormatting": "valueFormatting";
    "labelFormatting": "labelFormatting";
    "designatedTotal": "designatedTotal";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNhcmQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm51bWJlci1jYXJkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi92aWV3LWRpbWVuc2lvbnMuaGVscGVyJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOdW1iZXJDYXJkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgICBjYXJkQ29sb3I6IHN0cmluZztcbiAgICBiYW5kQ29sb3I6IHN0cmluZztcbiAgICBlbXB0eUNvbG9yOiBzdHJpbmc7XG4gICAgaW5uZXJQYWRkaW5nOiBudW1iZXI7XG4gICAgdGV4dENvbG9yOiBzdHJpbmc7XG4gICAgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG4gICAgbGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gICAgZGVzaWduYXRlZFRvdGFsOiBudW1iZXI7XG4gICAgZGltczogVmlld0RpbWVuc2lvbnM7XG4gICAgZGF0YTogYW55W107XG4gICAgc2xvdHM6IGFueVtdO1xuICAgIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gICAgZG9tYWluOiBhbnlbXTtcbiAgICBtYXJnaW46IG51bWJlcltdO1xuICAgIGJhY2tncm91bmRDYXJkczogYW55W107XG4gICAgcmVhZG9ubHkgY2xpY2thYmxlOiBib29sZWFuO1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGdldERvbWFpbigpOiBhbnlbXTtcbiAgICBvbkNsaWNrKGRhdGE6IGFueSk6IHZvaWQ7XG4gICAgc2V0Q29sb3JzKCk6IHZvaWQ7XG59XG4iXX0=