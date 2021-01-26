/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
var NgxValidators = /** @class */ (function () {
    function NgxValidators() {
    }
    /**
     * @param {?} uniqueCheckFn
     * @return {?}
     */
    NgxValidators.uniqueCheckValidator = /**
     * @param {?} uniqueCheckFn
     * @return {?}
     */
    function (uniqueCheckFn) {
        /** @type {?} */
        var result = function (control) {
            if (control.value) {
                return uniqueCheckFn(control.value).pipe(map(function (isUnique) {
                    return isUnique ? { ngxUniqueCheck: { value: true } } : null;
                }));
            }
            else {
                return of(null);
            }
        };
        return result;
    };
    return NgxValidators;
}());
export { NgxValidators };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3aHk1MjBjcmF6eS9uZ3gtdmFsaWRhdG9yLyIsInNvdXJjZXMiOlsidmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFBQTtJQWlCQSxDQUFDOzs7OztJQWhCVSxrQ0FBb0I7Ozs7SUFBM0IsVUFBNEIsYUFBa0Q7O1lBQ3BFLE1BQU0sR0FBRyxVQUNYLE9BQXdCO1lBRXhCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDZixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNwQyxHQUFHLENBQUMsVUFBQSxRQUFRO29CQUNSLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pFLENBQUMsQ0FBQyxDQUNMLENBQUM7YUFDTDtpQkFBTTtnQkFDSCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtRQUNMLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIE5neFZhbGlkYXRvcnMge1xuICAgIHN0YXRpYyB1bmlxdWVDaGVja1ZhbGlkYXRvcih1bmlxdWVDaGVja0ZuOiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoXG4gICAgICAgICAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2xcbiAgICAgICAgKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9PiB7XG4gICAgICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmlxdWVDaGVja0ZuKGNvbnRyb2wudmFsdWUpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIG1hcChpc1VuaXF1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNVbmlxdWUgPyB7IG5neFVuaXF1ZUNoZWNrOiB7IHZhbHVlOiB0cnVlIH0gfSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==