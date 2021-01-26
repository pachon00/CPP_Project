/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
export class NgxValidators {
    /**
     * @param {?} uniqueCheckFn
     * @return {?}
     */
    static uniqueCheckValidator(uniqueCheckFn) {
        /** @type {?} */
        const result = (control) => {
            if (control.value) {
                return uniqueCheckFn(control.value).pipe(map(isUnique => {
                    return isUnique ? { ngxUniqueCheck: { value: true } } : null;
                }));
            }
            else {
                return of(null);
            }
        };
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yLyIsInNvdXJjZXMiOlsidmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3RCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxhQUFrRDs7Y0FDcEUsTUFBTSxHQUFHLENBQ1gsT0FBd0IsRUFDOEMsRUFBRTtZQUN4RSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDcEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNYLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pFLENBQUMsQ0FBQyxDQUNMLENBQUM7YUFDTDtpQkFBTTtnQkFDSCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtRQUNMLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgTmd4VmFsaWRhdG9ycyB7XG4gICAgc3RhdGljIHVuaXF1ZUNoZWNrVmFsaWRhdG9yKHVuaXF1ZUNoZWNrRm46ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChcbiAgICAgICAgICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbFxuICAgICAgICApOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0+IHtcbiAgICAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZUNoZWNrRm4oY29udHJvbC52YWx1ZSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKGlzVW5pcXVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1VuaXF1ZSA/IHsgbmd4VW5pcXVlQ2hlY2s6IHsgdmFsdWU6IHRydWUgfSB9IDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIl19