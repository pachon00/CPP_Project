import { EventEmitter } from '@angular/core';
import { DatatableFooterDirective } from './footer.directive';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableFooterComponent {
    footerHeight: number;
    rowCount: number;
    pageSize: number;
    offset: number;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    totalMessage: string;
    footerTemplate: DatatableFooterDirective;
    selectedCount: number;
    selectedMessage: string | boolean;
    page: EventEmitter<any>;
    readonly isVisible: boolean;
    readonly curPage: number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableFooterComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableFooterComponent, "datatable-footer", never, {
    "selectedCount": "selectedCount";
    "footerHeight": "footerHeight";
    "rowCount": "rowCount";
    "pageSize": "pageSize";
    "offset": "offset";
    "pagerLeftArrowIcon": "pagerLeftArrowIcon";
    "pagerRightArrowIcon": "pagerRightArrowIcon";
    "pagerPreviousIcon": "pagerPreviousIcon";
    "pagerNextIcon": "pagerNextIcon";
    "totalMessage": "totalMessage";
    "footerTemplate": "footerTemplate";
    "selectedMessage": "selectedMessage";
}, {
    "page": "page";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJmb290ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vZm9vdGVyLmRpcmVjdGl2ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRhVGFibGVGb290ZXJDb21wb25lbnQge1xuICAgIGZvb3RlckhlaWdodDogbnVtYmVyO1xuICAgIHJvd0NvdW50OiBudW1iZXI7XG4gICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICBwYWdlckxlZnRBcnJvd0ljb246IHN0cmluZztcbiAgICBwYWdlclJpZ2h0QXJyb3dJY29uOiBzdHJpbmc7XG4gICAgcGFnZXJQcmV2aW91c0ljb246IHN0cmluZztcbiAgICBwYWdlck5leHRJY29uOiBzdHJpbmc7XG4gICAgdG90YWxNZXNzYWdlOiBzdHJpbmc7XG4gICAgZm9vdGVyVGVtcGxhdGU6IERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZTtcbiAgICBzZWxlY3RlZENvdW50OiBudW1iZXI7XG4gICAgc2VsZWN0ZWRNZXNzYWdlOiBzdHJpbmcgfCBib29sZWFuO1xuICAgIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHJlYWRvbmx5IGlzVmlzaWJsZTogYm9vbGVhbjtcbiAgICByZWFkb25seSBjdXJQYWdlOiBudW1iZXI7XG59XG4iXX0=