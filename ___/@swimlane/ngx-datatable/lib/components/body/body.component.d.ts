import { EventEmitter, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ScrollerComponent } from './scroller.component';
import { SelectionType } from '../../types/selection.type';
import { RowHeightCache } from '../../utils/row-height-cache';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableBodyComponent implements OnInit, OnDestroy {
    private cd;
    scrollbarV: boolean;
    scrollbarH: boolean;
    loadingIndicator: boolean;
    externalPaging: boolean;
    rowHeight: number | 'auto' | ((row?: any) => number);
    offsetX: number;
    emptyMessage: string;
    selectionType: SelectionType;
    selected: any[];
    rowIdentity: any;
    rowDetail: any;
    groupHeader: any;
    selectCheck: any;
    displayCheck: any;
    trackByProp: string;
    rowClass: any;
    groupedRows: any;
    groupExpansionDefault: boolean;
    innerWidth: number;
    groupRowsBy: string;
    virtualization: boolean;
    summaryRow: boolean;
    summaryPosition: string;
    summaryHeight: number;
    pageSize: number;
    rows: any[];
    columns: any[];
    offset: number;
    rowCount: number;
    readonly bodyWidth: string;
    bodyHeight: any;
    scroll: EventEmitter<any>;
    page: EventEmitter<any>;
    activate: EventEmitter<any>;
    select: EventEmitter<any>;
    detailToggle: EventEmitter<any>;
    rowContextmenu: EventEmitter<{
        event: MouseEvent;
        row: any;
    }>;
    treeAction: EventEmitter<any>;
    scroller: ScrollerComponent;
    /**
     * Returns if selection is enabled.
     */
    readonly selectEnabled: boolean;
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     */
    readonly scrollHeight: number | undefined;
    rowHeightsCache: RowHeightCache;
    temp: any[];
    offsetY: number;
    indexes: any;
    columnGroupWidths: any;
    columnGroupWidthsWithoutGroup: any;
    rowTrackingFn: any;
    listener: any;
    rowIndexes: any;
    rowExpansions: any[];
    _rows: any[];
    _bodyHeight: any;
    _columns: any[];
    _rowCount: number;
    _offset: number;
    _pageSize: number;
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd: ChangeDetectorRef);
    /**
     * Called after the constructor, initializing input properties
     */
    ngOnInit(): void;
    /**
     * Called once, before the instance is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Updates the Y offset given a new offset.
     */
    updateOffsetY(offset?: number): void;
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    onBodyScroll(event: any): void;
    /**
     * Updates the page given a direction.
     */
    updatePage(direction: string): void;
    /**
     * Updates the rows in the view port
     */
    updateRows(): void;
    /**
     * Get the row height
     */
    getRowHeight(row: any): number;
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group: any): number;
    /**
     * Calculate row height based on the expanded state of the row.
     */
    getRowAndDetailHeight(row: any): number;
    /**
     * Get the height of the detail row.
     */
    getDetailRowHeight: (row?: any, index?: any) => number;
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getRowsStyles(rows: any): any;
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getBottomSummaryRowStyles(): any;
    /**
     * Hides the loading indicator
     */
    hideIndicator(): void;
    /**
     * Updates the index of the rows in the viewport
     */
    updateIndexes(): void;
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    refreshRowHeightCache(): void;
    /**
     * Gets the index for the view port
     */
    getAdjustedViewPortIndex(): number;
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    toggleRowExpansion(row: any): void;
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    toggleAllRows(expanded: boolean): void;
    /**
     * Recalculates the table
     */
    recalcLayout(): void;
    /**
     * Tracks the column
     */
    columnTrackingFn(index: number, column: any): any;
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group: string): {
        width: string;
    };
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row: any): boolean;
    getRowExpandedIdx(row: any, expanded: any[]): number;
    /**
     * Gets the row index given a row
     */
    getRowIndex(row: any): number;
    onTreeAction(row: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableBodyComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableBodyComponent, "datatable-body", never, {
    "selected": "selected";
    "pageSize": "pageSize";
    "rows": "rows";
    "columns": "columns";
    "offset": "offset";
    "rowCount": "rowCount";
    "bodyHeight": "bodyHeight";
    "offsetX": "offsetX";
    "loadingIndicator": "loadingIndicator";
    "scrollbarV": "scrollbarV";
    "scrollbarH": "scrollbarH";
    "externalPaging": "externalPaging";
    "rowHeight": "rowHeight";
    "emptyMessage": "emptyMessage";
    "selectionType": "selectionType";
    "rowIdentity": "rowIdentity";
    "rowDetail": "rowDetail";
    "groupHeader": "groupHeader";
    "selectCheck": "selectCheck";
    "displayCheck": "displayCheck";
    "trackByProp": "trackByProp";
    "rowClass": "rowClass";
    "groupedRows": "groupedRows";
    "groupExpansionDefault": "groupExpansionDefault";
    "innerWidth": "innerWidth";
    "groupRowsBy": "groupRowsBy";
    "virtualization": "virtualization";
    "summaryRow": "summaryRow";
    "summaryPosition": "summaryPosition";
    "summaryHeight": "summaryHeight";
}, {
    "scroll": "scroll";
    "page": "page";
    "activate": "activate";
    "select": "select";
    "detailToggle": "detailToggle";
    "rowContextmenu": "rowContextmenu";
    "treeAction": "treeAction";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYm9keS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsZXJDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgUm93SGVpZ2h0Q2FjaGUgfSBmcm9tICcuLi8uLi91dGlscy9yb3ctaGVpZ2h0LWNhY2hlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERhdGFUYWJsZUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBjZDtcbiAgICBzY3JvbGxiYXJWOiBib29sZWFuO1xuICAgIHNjcm9sbGJhckg6IGJvb2xlYW47XG4gICAgbG9hZGluZ0luZGljYXRvcjogYm9vbGVhbjtcbiAgICBleHRlcm5hbFBhZ2luZzogYm9vbGVhbjtcbiAgICByb3dIZWlnaHQ6IG51bWJlciB8ICdhdXRvJyB8ICgocm93PzogYW55KSA9PiBudW1iZXIpO1xuICAgIG9mZnNldFg6IG51bWJlcjtcbiAgICBlbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xuICAgIHNlbGVjdGVkOiBhbnlbXTtcbiAgICByb3dJZGVudGl0eTogYW55O1xuICAgIHJvd0RldGFpbDogYW55O1xuICAgIGdyb3VwSGVhZGVyOiBhbnk7XG4gICAgc2VsZWN0Q2hlY2s6IGFueTtcbiAgICBkaXNwbGF5Q2hlY2s6IGFueTtcbiAgICB0cmFja0J5UHJvcDogc3RyaW5nO1xuICAgIHJvd0NsYXNzOiBhbnk7XG4gICAgZ3JvdXBlZFJvd3M6IGFueTtcbiAgICBncm91cEV4cGFuc2lvbkRlZmF1bHQ6IGJvb2xlYW47XG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xuICAgIGdyb3VwUm93c0J5OiBzdHJpbmc7XG4gICAgdmlydHVhbGl6YXRpb246IGJvb2xlYW47XG4gICAgc3VtbWFyeVJvdzogYm9vbGVhbjtcbiAgICBzdW1tYXJ5UG9zaXRpb246IHN0cmluZztcbiAgICBzdW1tYXJ5SGVpZ2h0OiBudW1iZXI7XG4gICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICByb3dzOiBhbnlbXTtcbiAgICBjb2x1bW5zOiBhbnlbXTtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICByb3dDb3VudDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGJvZHlXaWR0aDogc3RyaW5nO1xuICAgIGJvZHlIZWlnaHQ6IGFueTtcbiAgICBzY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRldGFpbFRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgcm93Q29udGV4dG1lbnU6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIGV2ZW50OiBNb3VzZUV2ZW50O1xuICAgICAgICByb3c6IGFueTtcbiAgICB9PjtcbiAgICB0cmVlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBzY3JvbGxlcjogU2Nyb2xsZXJDb21wb25lbnQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiBzZWxlY3Rpb24gaXMgZW5hYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWxlY3RFbmFibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRoYXQgd291bGQgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2Ygc2Nyb2xsIGJhclxuICAgICAqIGJhc2VkIG9uIHRoZSByb3cgaGVpZ2h0cyBjYWNoZSBmb3IgdmlydHVhbCBzY3JvbGwgYW5kIHZpcnR1YWxpemF0aW9uLiBPdGhlciBzY2VuYXJpb3NcbiAgICAgKiBjYWxjdWxhdGUgc2Nyb2xsIGhlaWdodCBhdXRvbWF0aWNhbGx5IChhcyBoZWlnaHQgd2lsbCBiZSB1bmRlZmluZWQpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjcm9sbEhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIHJvd0hlaWdodHNDYWNoZTogUm93SGVpZ2h0Q2FjaGU7XG4gICAgdGVtcDogYW55W107XG4gICAgb2Zmc2V0WTogbnVtYmVyO1xuICAgIGluZGV4ZXM6IGFueTtcbiAgICBjb2x1bW5Hcm91cFdpZHRoczogYW55O1xuICAgIGNvbHVtbkdyb3VwV2lkdGhzV2l0aG91dEdyb3VwOiBhbnk7XG4gICAgcm93VHJhY2tpbmdGbjogYW55O1xuICAgIGxpc3RlbmVyOiBhbnk7XG4gICAgcm93SW5kZXhlczogYW55O1xuICAgIHJvd0V4cGFuc2lvbnM6IGFueVtdO1xuICAgIF9yb3dzOiBhbnlbXTtcbiAgICBfYm9keUhlaWdodDogYW55O1xuICAgIF9jb2x1bW5zOiBhbnlbXTtcbiAgICBfcm93Q291bnQ6IG51bWJlcjtcbiAgICBfb2Zmc2V0OiBudW1iZXI7XG4gICAgX3BhZ2VTaXplOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNkOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENhbGxlZCBvbmNlLCBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZC5cbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIFkgb2Zmc2V0IGdpdmVuIGEgbmV3IG9mZnNldC5cbiAgICAgKi9cbiAgICB1cGRhdGVPZmZzZXRZKG9mZnNldD86IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQm9keSB3YXMgc2Nyb2xsZWQsIHRoaXMgaXMgbWFpbmx5IHVzZWZ1bCBmb3JcbiAgICAgKiB3aGVuIGEgdXNlciBpcyBzZXJ2ZXItc2lkZSBwYWdpbmF0aW9uIHZpYSB2aXJ0dWFsIHNjcm9sbC5cbiAgICAgKi9cbiAgICBvbkJvZHlTY3JvbGwoZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFnZSBnaXZlbiBhIGRpcmVjdGlvbi5cbiAgICAgKi9cbiAgICB1cGRhdGVQYWdlKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSByb3dzIGluIHRoZSB2aWV3IHBvcnRcbiAgICAgKi9cbiAgICB1cGRhdGVSb3dzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByb3cgaGVpZ2h0XG4gICAgICovXG4gICAgZ2V0Um93SGVpZ2h0KHJvdzogYW55KTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBncm91cCB0aGUgZ3JvdXAgd2l0aCBhbGwgcm93c1xuICAgICAqL1xuICAgIGdldEdyb3VwSGVpZ2h0KGdyb3VwOiBhbnkpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHJvdyBoZWlnaHQgYmFzZWQgb24gdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSByb3cuXG4gICAgICovXG4gICAgZ2V0Um93QW5kRGV0YWlsSGVpZ2h0KHJvdzogYW55KTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaGVpZ2h0IG9mIHRoZSBkZXRhaWwgcm93LlxuICAgICAqL1xuICAgIGdldERldGFpbFJvd0hlaWdodDogKHJvdz86IGFueSwgaW5kZXg/OiBhbnkpID0+IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzdHlsZXMgZm9yIHRoZSByb3cgc28gdGhhdCB0aGUgcm93cyBjYW4gYmUgbW92ZWQgaW4gMkQgc3BhY2VcbiAgICAgKiBkdXJpbmcgdmlydHVhbCBzY3JvbGwgaW5zaWRlIHRoZSBET00uICAgSW4gdGhlIGJlbG93IGNhc2UgdGhlIFkgcG9zaXRpb24gaXNcbiAgICAgKiBtYW5pcHVsYXRlZC4gICBBcyBhbiBleGFtcGxlLCBpZiB0aGUgaGVpZ2h0IG9mIHJvdyAwIGlzIDMwIHB4IGFuZCByb3cgMSBpc1xuICAgICAqIDEwMCBweCB0aGVuIGZvbGxvd2luZyBzdHlsZXMgYXJlIGdlbmVyYXRlZDpcbiAgICAgKlxuICAgICAqIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7ICAgIC0+ICByb3cwXG4gICAgICogdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDMwcHgsIDBweCk7ICAgLT4gIHJvdzFcbiAgICAgKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMTMwcHgsIDBweCk7ICAtPiAgcm93MlxuICAgICAqXG4gICAgICogUm93IGhlaWdodHMgaGF2ZSB0byBiZSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSByb3cgaGVpZ2h0cyBjYWNoZSBhcyB3ZSB3b250XG4gICAgICogYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hpY2ggcm93IGlzIG9mIHdoYXQgaGVpZ2h0IGJlZm9yZSBoYW5kLiAgSW4gdGhlIGFib3ZlXG4gICAgICogY2FzZSB0aGUgcG9zaXRpb25ZIG9mIHRoZSB0cmFuc2xhdGUzZCBmb3Igcm93MiB3b3VsZCBiZSB0aGUgc3VtIG9mIGFsbCB0aGVcbiAgICAgKiBoZWlnaHRzIG9mIHRoZSByb3dzIGJlZm9yZSBpdCAoaS5lLiByb3cwIGFuZCByb3cxKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3dzIHRoZSByb3cgdGhhdCBuZWVkcyB0byBiZSBwbGFjZWQgaW4gdGhlIDJEIHNwYWNlLlxuICAgICAqIEByZXR1cm5zIHRoZSBDU1MzIHN0eWxlIHRvIGJlIGFwcGxpZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0Um93c1N0eWxlcyhyb3dzOiBhbnkpOiBhbnk7XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGJvdHRvbSBzdW1tYXJ5IHJvdyBvZmZzZXQgZm9yIHNjcm9sbGJhciBtb2RlLlxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGNhY2hlIGFuZCBvZmZzZXQgY2FsY3VsYXRpb25cbiAgICAgKiBzZWUgZGVzY3JpcHRpb24gZm9yIGBnZXRSb3dzU3R5bGVzYCBtZXRob2RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRoZSBDU1MzIHN0eWxlIHRvIGJlIGFwcGxpZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50XG4gICAgICovXG4gICAgZ2V0Qm90dG9tU3VtbWFyeVJvd1N0eWxlcygpOiBhbnk7XG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIGxvYWRpbmcgaW5kaWNhdG9yXG4gICAgICovXG4gICAgaGlkZUluZGljYXRvcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGluZGV4IG9mIHRoZSByb3dzIGluIHRoZSB2aWV3cG9ydFxuICAgICAqL1xuICAgIHVwZGF0ZUluZGV4ZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGZ1bGwgUm93IEhlaWdodCBjYWNoZS4gIFNob3VsZCBiZSB1c2VkXG4gICAgICogd2hlbiB0aGUgZW50aXJlIHJvdyBhcnJheSBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWZyZXNoUm93SGVpZ2h0Q2FjaGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbmRleCBmb3IgdGhlIHZpZXcgcG9ydFxuICAgICAqL1xuICAgIGdldEFkanVzdGVkVmlld1BvcnRJbmRleCgpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHRoZSBFeHBhbnNpb24gb2YgdGhlIHJvdyBpLmUuIGlmIHRoZSByb3cgaXMgZXhwYW5kZWQgdGhlbiBpdCB3aWxsXG4gICAgICogY29sbGFwc2UgYW5kIHZpY2UgdmVyc2EuICAgTm90ZSB0aGF0IHRoZSBleHBhbmRlZCBzdGF0dXMgaXMgc3RvcmVkIGFzXG4gICAgICogYSBwYXJ0IG9mIHRoZSByb3cgb2JqZWN0IGl0c2VsZiBhcyB3ZSBoYXZlIHRvIHByZXNlcnZlIHRoZSBleHBhbmRlZCByb3dcbiAgICAgKiBzdGF0dXMgaW4gY2FzZSBvZiBzb3J0aW5nIGFuZCBmaWx0ZXJpbmcgb2YgdGhlIHJvdyBzZXQuXG4gICAgICovXG4gICAgdG9nZ2xlUm93RXhwYW5zaW9uKHJvdzogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBFeHBhbmQvQ29sbGFwc2UgYWxsIHRoZSByb3dzIG5vIG1hdHRlciB3aGF0IHRoZWlyIHN0YXRlIGlzLlxuICAgICAqL1xuICAgIHRvZ2dsZUFsbFJvd3MoZXhwYW5kZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlY2FsY3VsYXRlcyB0aGUgdGFibGVcbiAgICAgKi9cbiAgICByZWNhbGNMYXlvdXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUcmFja3MgdGhlIGNvbHVtblxuICAgICAqL1xuICAgIGNvbHVtblRyYWNraW5nRm4oaW5kZXg6IG51bWJlciwgY29sdW1uOiBhbnkpOiBhbnk7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcm93IHBpbm5pbmcgZ3JvdXAgc3R5bGVzXG4gICAgICovXG4gICAgc3R5bGVzQnlHcm91cChncm91cDogc3RyaW5nKToge1xuICAgICAgICB3aWR0aDogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgcm93IHdhcyBleHBhbmRlZCBhbmQgc2V0IGRlZmF1bHQgcm93IGV4cGFuc2lvbiB3aGVuIHJvdyBleHBhbnNpb24gaXMgZW1wdHlcbiAgICAgKi9cbiAgICBnZXRSb3dFeHBhbmRlZChyb3c6IGFueSk6IGJvb2xlYW47XG4gICAgZ2V0Um93RXhwYW5kZWRJZHgocm93OiBhbnksIGV4cGFuZGVkOiBhbnlbXSk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByb3cgaW5kZXggZ2l2ZW4gYSByb3dcbiAgICAgKi9cbiAgICBnZXRSb3dJbmRleChyb3c6IGFueSk6IG51bWJlcjtcbiAgICBvblRyZWVBY3Rpb24ocm93OiBhbnkpOiB2b2lkO1xufVxuIl19