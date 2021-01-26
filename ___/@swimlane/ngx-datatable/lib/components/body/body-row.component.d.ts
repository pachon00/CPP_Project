import { ElementRef, KeyValueDiffers, EventEmitter, ChangeDetectorRef, DoCheck } from '@angular/core';
import { TreeStatus } from './body-cell.component';
import { ScrollbarHelper } from '../../services/scrollbar-helper.service';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableBodyRowComponent implements DoCheck {
    private differs;
    private scrollbarHelper;
    private cd;
    columns: any[];
    innerWidth: number;
    expanded: boolean;
    rowClass: any;
    row: any;
    group: any;
    isSelected: boolean;
    rowIndex: number;
    displayCheck: any;
    treeStatus: TreeStatus;
    offsetX: number;
    readonly cssClass: string;
    rowHeight: number;
    readonly columnsTotalWidths: string;
    activate: EventEmitter<any>;
    treeAction: EventEmitter<any>;
    _element: any;
    _columnGroupWidths: any;
    _columnsByPin: any;
    _offsetX: number;
    _columns: any[];
    _innerWidth: number;
    _groupStyles: {
        [prop: string]: {};
    };
    private _rowDiffer;
    constructor(differs: KeyValueDiffers, scrollbarHelper: ScrollbarHelper, cd: ChangeDetectorRef, element: ElementRef);
    ngDoCheck(): void;
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    buildStylesByGroup(): void;
    calcStylesByGroup(group: string): {
        width: string;
    };
    onActivate(event: any, index: number): void;
    onKeyDown(event: KeyboardEvent): void;
    onMouseenter(event: any): void;
    recalculateColumns(val?: any[]): void;
    onTreeAction(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableBodyRowComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableBodyRowComponent, "datatable-body-row", never, {
    "treeStatus": "treeStatus";
    "columns": "columns";
    "innerWidth": "innerWidth";
    "offsetX": "offsetX";
    "expanded": "expanded";
    "rowClass": "rowClass";
    "row": "row";
    "group": "group";
    "isSelected": "isSelected";
    "rowIndex": "rowIndex";
    "displayCheck": "displayCheck";
    "rowHeight": "rowHeight";
}, {
    "activate": "activate";
    "treeAction": "treeAction";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1yb3cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImJvZHktcm93LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBLZXlWYWx1ZURpZmZlcnMsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVTdGF0dXMgfSBmcm9tICcuL2JvZHktY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsYmFySGVscGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2Nyb2xsYmFyLWhlbHBlci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERhdGFUYWJsZUJvZHlSb3dDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgICBwcml2YXRlIGRpZmZlcnM7XG4gICAgcHJpdmF0ZSBzY3JvbGxiYXJIZWxwZXI7XG4gICAgcHJpdmF0ZSBjZDtcbiAgICBjb2x1bW5zOiBhbnlbXTtcbiAgICBpbm5lcldpZHRoOiBudW1iZXI7XG4gICAgZXhwYW5kZWQ6IGJvb2xlYW47XG4gICAgcm93Q2xhc3M6IGFueTtcbiAgICByb3c6IGFueTtcbiAgICBncm91cDogYW55O1xuICAgIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgcm93SW5kZXg6IG51bWJlcjtcbiAgICBkaXNwbGF5Q2hlY2s6IGFueTtcbiAgICB0cmVlU3RhdHVzOiBUcmVlU3RhdHVzO1xuICAgIG9mZnNldFg6IG51bWJlcjtcbiAgICByZWFkb25seSBjc3NDbGFzczogc3RyaW5nO1xuICAgIHJvd0hlaWdodDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGNvbHVtbnNUb3RhbFdpZHRoczogc3RyaW5nO1xuICAgIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB0cmVlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBfZWxlbWVudDogYW55O1xuICAgIF9jb2x1bW5Hcm91cFdpZHRoczogYW55O1xuICAgIF9jb2x1bW5zQnlQaW46IGFueTtcbiAgICBfb2Zmc2V0WDogbnVtYmVyO1xuICAgIF9jb2x1bW5zOiBhbnlbXTtcbiAgICBfaW5uZXJXaWR0aDogbnVtYmVyO1xuICAgIF9ncm91cFN0eWxlczoge1xuICAgICAgICBbcHJvcDogc3RyaW5nXToge307XG4gICAgfTtcbiAgICBwcml2YXRlIF9yb3dEaWZmZXI7XG4gICAgY29uc3RydWN0b3IoZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLCBzY3JvbGxiYXJIZWxwZXI6IFNjcm9sbGJhckhlbHBlciwgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50OiBFbGVtZW50UmVmKTtcbiAgICBuZ0RvQ2hlY2soKTogdm9pZDtcbiAgICB0cmFja0J5R3JvdXBzKGluZGV4OiBudW1iZXIsIGNvbEdyb3VwOiBhbnkpOiBhbnk7XG4gICAgY29sdW1uVHJhY2tpbmdGbihpbmRleDogbnVtYmVyLCBjb2x1bW46IGFueSk6IGFueTtcbiAgICBidWlsZFN0eWxlc0J5R3JvdXAoKTogdm9pZDtcbiAgICBjYWxjU3R5bGVzQnlHcm91cChncm91cDogc3RyaW5nKToge1xuICAgICAgICB3aWR0aDogc3RyaW5nO1xuICAgIH07XG4gICAgb25BY3RpdmF0ZShldmVudDogYW55LCBpbmRleDogbnVtYmVyKTogdm9pZDtcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIG9uTW91c2VlbnRlcihldmVudDogYW55KTogdm9pZDtcbiAgICByZWNhbGN1bGF0ZUNvbHVtbnModmFsPzogYW55W10pOiB2b2lkO1xuICAgIG9uVHJlZUFjdGlvbigpOiB2b2lkO1xufVxuIl19