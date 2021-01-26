import { PlacementArray } from '../util/positioning';
/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbPopoverConfig {
    autoClose: boolean | 'inside' | 'outside';
    placement: PlacementArray;
    triggers: string;
    container: string;
    disablePopover: boolean;
    popoverClass: string;
    openDelay: number;
    closeDelay: number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbPopoverConfig>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbPopoverConfig>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb25maWcuZC50cyIsInNvdXJjZXMiOlsicG9wb3Zlci1jb25maWcuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAnLi4vdXRpbC9wb3NpdGlvbmluZyc7XG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JQb3BvdmVyYF0oIy9jb21wb25lbnRzL3BvcG92ZXIvYXBpI05nYlBvcG92ZXIpIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW5cbiAqIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGUgcG9wb3ZlcnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5nYlBvcG92ZXJDb25maWcge1xuICAgIGF1dG9DbG9zZTogYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnO1xuICAgIHBsYWNlbWVudDogUGxhY2VtZW50QXJyYXk7XG4gICAgdHJpZ2dlcnM6IHN0cmluZztcbiAgICBjb250YWluZXI6IHN0cmluZztcbiAgICBkaXNhYmxlUG9wb3ZlcjogYm9vbGVhbjtcbiAgICBwb3BvdmVyQ2xhc3M6IHN0cmluZztcbiAgICBvcGVuRGVsYXk6IG51bWJlcjtcbiAgICBjbG9zZURlbGF5OiBudW1iZXI7XG59XG4iXX0=