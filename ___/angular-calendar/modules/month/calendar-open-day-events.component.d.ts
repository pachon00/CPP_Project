import { EventEmitter, TemplateRef } from '@angular/core';
import { AnimationTriggerMetadata } from '@angular/animations';
import { CalendarEvent } from 'calendar-utils';
import { isWithinThreshold } from '../common/util';
import * as ɵngcc0 from '@angular/core';
export declare const collapseAnimation: AnimationTriggerMetadata;
export declare class CalendarOpenDayEventsComponent {
    locale: string;
    isOpen: boolean;
    events: CalendarEvent[];
    customTemplate: TemplateRef<any>;
    eventTitleTemplate: TemplateRef<any>;
    eventActionsTemplate: TemplateRef<any>;
    date: Date;
    eventClicked: EventEmitter<{
        event: CalendarEvent<any>;
        sourceEvent: MouseEvent | KeyboardEvent;
    }>;
    trackByEventId: (index: number, event: CalendarEvent<any>) => string | number | CalendarEvent<any>;
    validateDrag: typeof isWithinThreshold;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarOpenDayEventsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarOpenDayEventsComponent, "mwl-calendar-open-day-events", never, {
    "isOpen": "isOpen";
    "locale": "locale";
    "events": "events";
    "customTemplate": "customTemplate";
    "eventTitleTemplate": "eventTitleTemplate";
    "eventActionsTemplate": "eventActionsTemplate";
    "date": "date";
}, {
    "eventClicked": "eventClicked";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci1vcGVuLWRheS1ldmVudHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgaXNXaXRoaW5UaHJlc2hvbGQgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5leHBvcnQgZGVjbGFyZSBjb25zdCBjb2xsYXBzZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJPcGVuRGF5RXZlbnRzQ29tcG9uZW50IHtcbiAgICBsb2NhbGU6IHN0cmluZztcbiAgICBpc09wZW46IGJvb2xlYW47XG4gICAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG4gICAgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGV2ZW50QWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIGRhdGU6IERhdGU7XG4gICAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBldmVudDogQ2FsZW5kYXJFdmVudDxhbnk+O1xuICAgICAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gICAgfT47XG4gICAgdHJhY2tCeUV2ZW50SWQ6IChpbmRleDogbnVtYmVyLCBldmVudDogQ2FsZW5kYXJFdmVudDxhbnk+KSA9PiBzdHJpbmcgfCBudW1iZXIgfCBDYWxlbmRhckV2ZW50PGFueT47XG4gICAgdmFsaWRhdGVEcmFnOiB0eXBlb2YgaXNXaXRoaW5UaHJlc2hvbGQ7XG59XG4iXX0=