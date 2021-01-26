import { OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class ScaleLegendComponent implements OnChanges {
    private sanitizer;
    valueRange: any;
    colors: any;
    height: any;
    width: any;
    horizontal: boolean;
    gradient: any;
    constructor(sanitizer: DomSanitizer);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Generates the string used in the gradient stylesheet properties
     * @param colors array of colors
     * @param splits array of splits on a scale of (0, 1)
     */
    gradientString(colors: any, splits: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScaleLegendComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScaleLegendComponent, "ngx-charts-scale-legend", never, {
    "horizontal": "horizontal";
    "valueRange": "valueRange";
    "colors": "colors";
    "height": "height";
    "width": "width";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGUtbGVnZW5kLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzY2FsZS1sZWdlbmQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2NhbGVMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgc2FuaXRpemVyO1xuICAgIHZhbHVlUmFuZ2U6IGFueTtcbiAgICBjb2xvcnM6IGFueTtcbiAgICBoZWlnaHQ6IGFueTtcbiAgICB3aWR0aDogYW55O1xuICAgIGhvcml6b250YWw6IGJvb2xlYW47XG4gICAgZ3JhZGllbnQ6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihzYW5pdGl6ZXI6IERvbVNhbml0aXplcik7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIHRoZSBzdHJpbmcgdXNlZCBpbiB0aGUgZ3JhZGllbnQgc3R5bGVzaGVldCBwcm9wZXJ0aWVzXG4gICAgICogQHBhcmFtIGNvbG9ycyBhcnJheSBvZiBjb2xvcnNcbiAgICAgKiBAcGFyYW0gc3BsaXRzIGFycmF5IG9mIHNwbGl0cyBvbiBhIHNjYWxlIG9mICgwLCAxKVxuICAgICAqL1xuICAgIGdyYWRpZW50U3RyaW5nKGNvbG9yczogYW55LCBzcGxpdHM6IGFueSk6IHN0cmluZztcbn1cbiJdfQ==