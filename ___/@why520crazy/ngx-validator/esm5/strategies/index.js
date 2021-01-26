/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NoopValidationFeedbackStrategy } from './noop-validation-feedback-strategy';
import { BootstrapValidationFeedbackStrategy } from './bootstrap-validation-feedback-strategy';
var ValidationFeedbackStrategyBuilder = /** @class */ (function () {
    function ValidationFeedbackStrategyBuilder() {
    }
    /**
     * @return {?}
     */
    ValidationFeedbackStrategyBuilder.noop = /**
     * @return {?}
     */
    function () {
        return new NoopValidationFeedbackStrategy();
    };
    /**
     * @return {?}
     */
    ValidationFeedbackStrategyBuilder.bootstrap = /**
     * @return {?}
     */
    function () {
        return new BootstrapValidationFeedbackStrategy();
    };
    return ValidationFeedbackStrategyBuilder;
}());
export { ValidationFeedbackStrategyBuilder };
export { NoopValidationFeedbackStrategy, BootstrapValidationFeedbackStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRy9GO0lBQUE7SUFRQSxDQUFDOzs7O0lBUFUsc0NBQUk7OztJQUFYO1FBQ0ksT0FBTyxJQUFJLDhCQUE4QixFQUFFLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVNLDJDQUFTOzs7SUFBaEI7UUFDSSxPQUFPLElBQUksbUNBQW1DLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0wsd0NBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7QUFFRCxPQUFPLEVBQThCLDhCQUE4QixFQUFFLG1DQUFtQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL25vb3AtdmFsaWRhdGlvbi1mZWVkYmFjay1zdHJhdGVneSc7XG5pbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vYm9vdHN0cmFwLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3ZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3lCdWlsZGVyIHtcbiAgICBzdGF0aWMgbm9vcCgpOiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9vcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGJvb3RzdHJhcCgpOiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5LCBOb29wVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3ksIEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH07XG4iXX0=