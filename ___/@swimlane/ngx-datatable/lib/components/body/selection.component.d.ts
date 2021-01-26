import { EventEmitter } from '@angular/core';
import { SelectionType } from '../../types/selection.type';
import * as ɵngcc0 from '@angular/core';
export interface Model {
    type: string;
    event: MouseEvent | KeyboardEvent;
    row: any;
    rowElement: any;
    cellElement: any;
    cellIndex: number;
}
export declare class DataTableSelectionComponent {
    rows: any[];
    selected: any[];
    selectEnabled: boolean;
    selectionType: SelectionType;
    rowIdentity: any;
    selectCheck: any;
    activate: EventEmitter<any>;
    select: EventEmitter<any>;
    prevIndex: number;
    selectRow(event: KeyboardEvent | MouseEvent, index: number, row: any): void;
    onActivate(model: Model, index: number): void;
    onKeyboardFocus(model: Model): void;
    focusRow(rowElement: any, keyCode: number): void;
    getPrevNextRow(rowElement: any, keyCode: number): any;
    focusCell(cellElement: any, rowElement: any, keyCode: number, cellIndex: number): void;
    getRowSelected(row: any): boolean;
    getRowSelectedIdx(row: any, selected: any[]): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableSelectionComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableSelectionComponent, "datatable-selection", never, {
    "rows": "rows";
    "selected": "selected";
    "selectEnabled": "selectEnabled";
    "selectionType": "selectionType";
    "rowIdentity": "rowIdentity";
    "selectCheck": "selectCheck";
}, {
    "activate": "activate";
    "select": "select";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzZWxlY3Rpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdGlvbi50eXBlJztcbmV4cG9ydCBpbnRlcmZhY2UgTW9kZWwge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gICAgcm93OiBhbnk7XG4gICAgcm93RWxlbWVudDogYW55O1xuICAgIGNlbGxFbGVtZW50OiBhbnk7XG4gICAgY2VsbEluZGV4OiBudW1iZXI7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEYXRhVGFibGVTZWxlY3Rpb25Db21wb25lbnQge1xuICAgIHJvd3M6IGFueVtdO1xuICAgIHNlbGVjdGVkOiBhbnlbXTtcbiAgICBzZWxlY3RFbmFibGVkOiBib29sZWFuO1xuICAgIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGU7XG4gICAgcm93SWRlbnRpdHk6IGFueTtcbiAgICBzZWxlY3RDaGVjazogYW55O1xuICAgIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHByZXZJbmRleDogbnVtYmVyO1xuICAgIHNlbGVjdFJvdyhldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIHJvdzogYW55KTogdm9pZDtcbiAgICBvbkFjdGl2YXRlKG1vZGVsOiBNb2RlbCwgaW5kZXg6IG51bWJlcik6IHZvaWQ7XG4gICAgb25LZXlib2FyZEZvY3VzKG1vZGVsOiBNb2RlbCk6IHZvaWQ7XG4gICAgZm9jdXNSb3cocm93RWxlbWVudDogYW55LCBrZXlDb2RlOiBudW1iZXIpOiB2b2lkO1xuICAgIGdldFByZXZOZXh0Um93KHJvd0VsZW1lbnQ6IGFueSwga2V5Q29kZTogbnVtYmVyKTogYW55O1xuICAgIGZvY3VzQ2VsbChjZWxsRWxlbWVudDogYW55LCByb3dFbGVtZW50OiBhbnksIGtleUNvZGU6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIpOiB2b2lkO1xuICAgIGdldFJvd1NlbGVjdGVkKHJvdzogYW55KTogYm9vbGVhbjtcbiAgICBnZXRSb3dTZWxlY3RlZElkeChyb3c6IGFueSwgc2VsZWN0ZWQ6IGFueVtdKTogbnVtYmVyO1xufVxuIl19