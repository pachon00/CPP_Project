import { EventEmitter, TemplateRef } from '@angular/core';
import { MonthViewDay, CalendarEvent } from 'calendar-utils';
import { isWithinThreshold } from '../common/util';
import { PlacementArray } from 'positioning';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarMonthCellComponent {
    day: MonthViewDay;
    openDay: MonthViewDay;
    locale: string;
    tooltipPlacement: PlacementArray;
    tooltipAppendToBody: boolean;
    customTemplate: TemplateRef<any>;
    tooltipTemplate: TemplateRef<any>;
    tooltipDelay: number | null;
    highlightDay: EventEmitter<any>;
    unhighlightDay: EventEmitter<any>;
    eventClicked: EventEmitter<{
        event: CalendarEvent<any>;
        sourceEvent: MouseEvent;
    }>;
    trackByEventId: (index: number, event: CalendarEvent<any>) => string | number | CalendarEvent<any>;
    validateDrag: typeof isWithinThreshold;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarMonthCellComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarMonthCellComponent, "mwl-calendar-month-cell", never, {
    "day": "day";
    "openDay": "openDay";
    "locale": "locale";
    "tooltipPlacement": "tooltipPlacement";
    "tooltipAppendToBody": "tooltipAppendToBody";
    "customTemplate": "customTemplate";
    "tooltipTemplate": "tooltipTemplate";
    "tooltipDelay": "tooltipDelay";
}, {
    "highlightDay": "highlightDay";
    "unhighlightDay": "unhighlightDay";
    "eventClicked": "eventClicked";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtY2VsbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FsZW5kYXItbW9udGgtY2VsbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb250aFZpZXdEYXksIENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBpc1dpdGhpblRocmVzaG9sZCB9IGZyb20gJy4uL2NvbW1vbi91dGlsJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJNb250aENlbGxDb21wb25lbnQge1xuICAgIGRheTogTW9udGhWaWV3RGF5O1xuICAgIG9wZW5EYXk6IE1vbnRoVmlld0RheTtcbiAgICBsb2NhbGU6IHN0cmluZztcbiAgICB0b29sdGlwUGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheTtcbiAgICB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICAgIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICB0b29sdGlwRGVsYXk6IG51bWJlciB8IG51bGw7XG4gICAgaGlnaGxpZ2h0RGF5OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB1bmhpZ2hsaWdodERheTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBldmVudDogQ2FsZW5kYXJFdmVudDxhbnk+O1xuICAgICAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgICB9PjtcbiAgICB0cmFja0J5RXZlbnRJZDogKGluZGV4OiBudW1iZXIsIGV2ZW50OiBDYWxlbmRhckV2ZW50PGFueT4pID0+IHN0cmluZyB8IG51bWJlciB8IENhbGVuZGFyRXZlbnQ8YW55PjtcbiAgICB2YWxpZGF0ZURyYWc6IHR5cGVvZiBpc1dpdGhpblRocmVzaG9sZDtcbn1cbiJdfQ==