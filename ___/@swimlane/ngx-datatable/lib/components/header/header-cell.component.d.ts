import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { SortType } from '../../types/sort.type';
import { SelectionType } from '../../types/selection.type';
import { TableColumn } from '../../types/table-column.type';
import { SortDirection } from '../../types/sort-direction.type';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableHeaderCellComponent {
    private cd;
    sortType: SortType;
    sortAscendingIcon: string;
    sortDescendingIcon: string;
    isTarget: boolean;
    targetMarkerTemplate: any;
    targetMarkerContext: any;
    _allRowsSelected: boolean;
    allRowsSelected: any;
    selectionType: SelectionType;
    column: TableColumn;
    headerHeight: number;
    sorts: any[];
    sort: EventEmitter<any>;
    select: EventEmitter<any>;
    columnContextmenu: EventEmitter<{
        event: MouseEvent;
        column: any;
    }>;
    readonly columnCssClasses: any;
    readonly name: string;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly width: number;
    readonly isCheckboxable: boolean;
    sortFn: any;
    sortClass: string;
    sortDir: SortDirection;
    selectFn: any;
    cellContext: any;
    private _column;
    private _sorts;
    constructor(cd: ChangeDetectorRef);
    onContextmenu($event: MouseEvent): void;
    calcSortDir(sorts: any[]): any;
    onSort(): void;
    calcSortClass(sortDir: SortDirection): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableHeaderCellComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableHeaderCellComponent, "datatable-header-cell", never, {
    "allRowsSelected": "allRowsSelected";
    "column": "column";
    "sorts": "sorts";
    "sortType": "sortType";
    "sortAscendingIcon": "sortAscendingIcon";
    "sortDescendingIcon": "sortDescendingIcon";
    "isTarget": "isTarget";
    "targetMarkerTemplate": "targetMarkerTemplate";
    "targetMarkerContext": "targetMarkerContext";
    "selectionType": "selectionType";
    "headerHeight": "headerHeight";
}, {
    "sort": "sort";
    "select": "select";
    "columnContextmenu": "columnContextmenu";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNlbGwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImhlYWRlci1jZWxsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3J0VHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NvcnQudHlwZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgVGFibGVDb2x1bW4gfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XG5pbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvc29ydC1kaXJlY3Rpb24udHlwZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRhVGFibGVIZWFkZXJDZWxsQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNkO1xuICAgIHNvcnRUeXBlOiBTb3J0VHlwZTtcbiAgICBzb3J0QXNjZW5kaW5nSWNvbjogc3RyaW5nO1xuICAgIHNvcnREZXNjZW5kaW5nSWNvbjogc3RyaW5nO1xuICAgIGlzVGFyZ2V0OiBib29sZWFuO1xuICAgIHRhcmdldE1hcmtlclRlbXBsYXRlOiBhbnk7XG4gICAgdGFyZ2V0TWFya2VyQ29udGV4dDogYW55O1xuICAgIF9hbGxSb3dzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgYWxsUm93c1NlbGVjdGVkOiBhbnk7XG4gICAgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZTtcbiAgICBjb2x1bW46IFRhYmxlQ29sdW1uO1xuICAgIGhlYWRlckhlaWdodDogbnVtYmVyO1xuICAgIHNvcnRzOiBhbnlbXTtcbiAgICBzb3J0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGNvbHVtbkNvbnRleHRtZW51OiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBldmVudDogTW91c2VFdmVudDtcbiAgICAgICAgY29sdW1uOiBhbnk7XG4gICAgfT47XG4gICAgcmVhZG9ubHkgY29sdW1uQ3NzQ2xhc3NlczogYW55O1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBtaW5XaWR0aDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IG1heFdpZHRoOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICByZWFkb25seSBpc0NoZWNrYm94YWJsZTogYm9vbGVhbjtcbiAgICBzb3J0Rm46IGFueTtcbiAgICBzb3J0Q2xhc3M6IHN0cmluZztcbiAgICBzb3J0RGlyOiBTb3J0RGlyZWN0aW9uO1xuICAgIHNlbGVjdEZuOiBhbnk7XG4gICAgY2VsbENvbnRleHQ6IGFueTtcbiAgICBwcml2YXRlIF9jb2x1bW47XG4gICAgcHJpdmF0ZSBfc29ydHM7XG4gICAgY29uc3RydWN0b3IoY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBvbkNvbnRleHRtZW51KCRldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgY2FsY1NvcnREaXIoc29ydHM6IGFueVtdKTogYW55O1xuICAgIG9uU29ydCgpOiB2b2lkO1xuICAgIGNhbGNTb3J0Q2xhc3Moc29ydERpcjogU29ydERpcmVjdGlvbik6IHN0cmluZztcbn1cbiJdfQ==