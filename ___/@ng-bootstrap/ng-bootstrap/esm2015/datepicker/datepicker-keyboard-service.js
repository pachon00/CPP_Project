/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Key } from '../util/key';
import * as i0 from "@angular/core";
/**
 * A service that represents the keyboard navigation.
 *
 * Default keyboard shortcuts [are documented in the overview](#/components/datepicker/overview#keyboard-shortcuts)
 *
 * \@since 5.2.0
 */
export class NgbDatepickerKeyboardService {
    /**
     * Processes a keyboard event.
     * @param {?} event
     * @param {?} datepicker
     * @param {?} calendar
     * @return {?}
     */
    processKey(event, datepicker, calendar) {
        /** @type {?} */
        const state = datepicker.state;
        // tslint:disable-next-line:deprecation
        switch (event.which) {
            case Key.PageUp:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
                break;
            case Key.PageDown:
                datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
                break;
            case Key.End:
                datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
                break;
            case Key.Home:
                datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
                break;
            case Key.ArrowLeft:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', 1));
                break;
            case Key.ArrowUp:
                datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', calendar.getDaysPerWeek()));
                break;
            case Key.ArrowRight:
                datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', 1));
                break;
            case Key.ArrowDown:
                datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', calendar.getDaysPerWeek()));
                break;
            case Key.Enter:
            case Key.Space:
                datepicker.focusSelect();
                break;
            default:
                return;
        }
        event.preventDefault();
        event.stopPropagation();
    }
}
NgbDatepickerKeyboardService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ NgbDatepickerKeyboardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgbDatepickerKeyboardService_Factory() { return new NgbDatepickerKeyboardService(); }, token: NgbDatepickerKeyboardService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1rZXlib2FyZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvIiwic291cmNlcyI6WyJkYXRlcGlja2VyL2RhdGVwaWNrZXIta2V5Ym9hcmQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7QUFVaEMsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7Ozs7SUFJdkMsVUFBVSxDQUFDLEtBQW9CLEVBQUUsVUFBeUIsRUFBRSxRQUFxQjs7Y0FDekUsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLO1FBQzlCLHVDQUF1QztRQUN2QyxRQUFRLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDbkIsS0FBSyxHQUFHLENBQUMsTUFBTTtnQkFDYixVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixNQUFNO1lBQ1IsS0FBSyxHQUFHLENBQUMsUUFBUTtnQkFDZixVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixNQUFNO1lBQ1IsS0FBSyxHQUFHLENBQUMsR0FBRztnQkFDVixVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEUsTUFBTTtZQUNSLEtBQUssR0FBRyxDQUFDLElBQUk7Z0JBQ1gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZFLE1BQU07WUFDUixLQUFLLEdBQUcsQ0FBQyxTQUFTO2dCQUNoQixVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsTUFBTTtZQUNSLEtBQUssR0FBRyxDQUFDLE9BQU87Z0JBQ2QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFGLE1BQU07WUFDUixLQUFLLEdBQUcsQ0FBQyxVQUFVO2dCQUNqQixVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsTUFBTTtZQUNSLEtBQUssR0FBRyxDQUFDLFNBQVM7Z0JBQ2hCLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxRixNQUFNO1lBQ1IsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2YsS0FBSyxHQUFHLENBQUMsS0FBSztnQkFDWixVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pCLE1BQU07WUFDUjtnQkFDRSxPQUFPO1NBQ1Y7UUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTFDRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQ2FsZW5kYXJ9IGZyb20gJy4vbmdiLWNhbGVuZGFyJztcbmltcG9ydCB7TmdiRGF0ZXBpY2tlcn0gZnJvbSAnLi9kYXRlcGlja2VyJztcbmltcG9ydCB7S2V5fSBmcm9tICcuLi91dGlsL2tleSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRoYXQgcmVwcmVzZW50cyB0aGUga2V5Ym9hcmQgbmF2aWdhdGlvbi5cbiAqXG4gKiBEZWZhdWx0IGtleWJvYXJkIHNob3J0Y3V0cyBbYXJlIGRvY3VtZW50ZWQgaW4gdGhlIG92ZXJ2aWV3XSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9vdmVydmlldyNrZXlib2FyZC1zaG9ydGN1dHMpXG4gKlxuICogQHNpbmNlIDUuMi4wXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVwaWNrZXJLZXlib2FyZFNlcnZpY2Uge1xuICAvKipcbiAgICogUHJvY2Vzc2VzIGEga2V5Ym9hcmQgZXZlbnQuXG4gICAqL1xuICBwcm9jZXNzS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBkYXRlcGlja2VyOiBOZ2JEYXRlcGlja2VyLCBjYWxlbmRhcjogTmdiQ2FsZW5kYXIpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGRhdGVwaWNrZXIuc3RhdGU7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgY2FzZSBLZXkuUGFnZVVwOlxuICAgICAgICBkYXRlcGlja2VyLmZvY3VzRGF0ZShjYWxlbmRhci5nZXRQcmV2KHN0YXRlLmZvY3VzZWREYXRlLCBldmVudC5zaGlmdEtleSA/ICd5JyA6ICdtJywgMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5LlBhZ2VEb3duOlxuICAgICAgICBkYXRlcGlja2VyLmZvY3VzRGF0ZShjYWxlbmRhci5nZXROZXh0KHN0YXRlLmZvY3VzZWREYXRlLCBldmVudC5zaGlmdEtleSA/ICd5JyA6ICdtJywgMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5LkVuZDpcbiAgICAgICAgZGF0ZXBpY2tlci5mb2N1c0RhdGUoZXZlbnQuc2hpZnRLZXkgPyBzdGF0ZS5tYXhEYXRlIDogc3RhdGUubGFzdERhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5LkhvbWU6XG4gICAgICAgIGRhdGVwaWNrZXIuZm9jdXNEYXRlKGV2ZW50LnNoaWZ0S2V5ID8gc3RhdGUubWluRGF0ZSA6IHN0YXRlLmZpcnN0RGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXkuQXJyb3dMZWZ0OlxuICAgICAgICBkYXRlcGlja2VyLmZvY3VzRGF0ZShjYWxlbmRhci5nZXRQcmV2KHN0YXRlLmZvY3VzZWREYXRlLCAnZCcsIDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleS5BcnJvd1VwOlxuICAgICAgICBkYXRlcGlja2VyLmZvY3VzRGF0ZShjYWxlbmRhci5nZXRQcmV2KHN0YXRlLmZvY3VzZWREYXRlLCAnZCcsIGNhbGVuZGFyLmdldERheXNQZXJXZWVrKCkpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleS5BcnJvd1JpZ2h0OlxuICAgICAgICBkYXRlcGlja2VyLmZvY3VzRGF0ZShjYWxlbmRhci5nZXROZXh0KHN0YXRlLmZvY3VzZWREYXRlLCAnZCcsIDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleS5BcnJvd0Rvd246XG4gICAgICAgIGRhdGVwaWNrZXIuZm9jdXNEYXRlKGNhbGVuZGFyLmdldE5leHQoc3RhdGUuZm9jdXNlZERhdGUsICdkJywgY2FsZW5kYXIuZ2V0RGF5c1BlcldlZWsoKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5LkVudGVyOlxuICAgICAgY2FzZSBLZXkuU3BhY2U6XG4gICAgICAgIGRhdGVwaWNrZXIuZm9jdXNTZWxlY3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==