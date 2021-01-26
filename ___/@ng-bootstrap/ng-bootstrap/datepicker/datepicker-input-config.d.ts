import { NgbDatepickerConfig } from './datepicker-config';
import { PlacementArray } from '../util/positioning';
/**
 * A configuration service for the [`NgbDatepickerInput`](#/components/datepicker/api#NgbDatepicker) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepicker inputs used in the application.
 *
 * @since 5.2.0
 */
import * as ɵngcc0 from '@angular/core';
export declare class NgbInputDatepickerConfig extends NgbDatepickerConfig {
    autoClose: boolean | 'inside' | 'outside';
    container: null | 'body';
    positionTarget: string | HTMLElement;
    placement: PlacementArray;
    restoreFocus: true | HTMLElement | string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgbInputDatepickerConfig>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgbInputDatepickerConfig>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC1jb25maWcuZC50cyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci1pbnB1dC1jb25maWcuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nYkRhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXItY29uZmlnJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAnLi4vdXRpbC9wb3NpdGlvbmluZyc7XG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JEYXRlcGlja2VySW5wdXRgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiRGF0ZXBpY2tlcikgY29tcG9uZW50LlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpblxuICogb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHRoZSBkYXRlcGlja2VyIGlucHV0cyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmdiSW5wdXREYXRlcGlja2VyQ29uZmlnIGV4dGVuZHMgTmdiRGF0ZXBpY2tlckNvbmZpZyB7XG4gICAgYXV0b0Nsb3NlOiBib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZSc7XG4gICAgY29udGFpbmVyOiBudWxsIHwgJ2JvZHknO1xuICAgIHBvc2l0aW9uVGFyZ2V0OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcbiAgICBwbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5O1xuICAgIHJlc3RvcmVGb2N1czogdHJ1ZSB8IEhUTUxFbGVtZW50IHwgc3RyaW5nO1xufVxuIl19