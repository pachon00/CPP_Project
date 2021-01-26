import { TemplateRef } from '@angular/core';
import { CalendarEvent, EventAction } from 'calendar-utils';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarEventActionsComponent {
    event: CalendarEvent;
    customTemplate: TemplateRef<any>;
    trackByActionId: (index: number, action: EventAction) => string | number | EventAction;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarEventActionsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarEventActionsComponent, "mwl-calendar-event-actions", never, {
    "event": "event";
    "customTemplate": "customTemplate";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZXZlbnQtYWN0aW9ucy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FsZW5kYXItZXZlbnQtYWN0aW9ucy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQsIEV2ZW50QWN0aW9uIH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJFdmVudEFjdGlvbnNDb21wb25lbnQge1xuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICAgIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHRyYWNrQnlBY3Rpb25JZDogKGluZGV4OiBudW1iZXIsIGFjdGlvbjogRXZlbnRBY3Rpb24pID0+IHN0cmluZyB8IG51bWJlciB8IEV2ZW50QWN0aW9uO1xufVxuIl19