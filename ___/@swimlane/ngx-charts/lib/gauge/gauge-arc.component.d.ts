import { EventEmitter, TemplateRef } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class GaugeArcComponent {
    backgroundArc: any;
    valueArc: any;
    cornerRadius: any;
    colors: ColorHelper;
    isActive: boolean;
    tooltipDisabled: boolean;
    valueFormatting: (value: any) => string;
    tooltipTemplate: TemplateRef<any>;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipText(arc: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GaugeArcComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GaugeArcComponent, "g[ngx-charts-gauge-arc]", never, {
    "isActive": "isActive";
    "tooltipDisabled": "tooltipDisabled";
    "animations": "animations";
    "backgroundArc": "backgroundArc";
    "valueArc": "valueArc";
    "cornerRadius": "cornerRadius";
    "colors": "colors";
    "valueFormatting": "valueFormatting";
    "tooltipTemplate": "tooltipTemplate";
}, {
    "select": "select";
    "activate": "activate";
    "deactivate": "deactivate";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtYXJjLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnYXVnZS1hcmMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHYXVnZUFyY0NvbXBvbmVudCB7XG4gICAgYmFja2dyb3VuZEFyYzogYW55O1xuICAgIHZhbHVlQXJjOiBhbnk7XG4gICAgY29ybmVyUmFkaXVzOiBhbnk7XG4gICAgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgICB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgdmFsdWVGb3JtYXR0aW5nOiAodmFsdWU6IGFueSkgPT4gc3RyaW5nO1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBhbmltYXRpb25zOiBib29sZWFuO1xuICAgIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHRvb2x0aXBUZXh0KGFyYzogYW55KTogc3RyaW5nO1xufVxuIl19