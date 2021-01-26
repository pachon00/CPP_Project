/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 * @template T
 */
export function Dictionary() { }
/**
 * @record
 */
export function NgxValidatorConfig() { }
if (false) {
    /** @type {?|undefined} */
    NgxValidatorConfig.prototype.validationFeedbackStrategy;
    /** @type {?|undefined} */
    NgxValidatorConfig.prototype.validationMessages;
    /** @type {?|undefined} */
    NgxValidatorConfig.prototype.validateOn;
}
/**
 * @record
 */
export function NgxValidatorGlobalConfig() { }
if (false) {
    /** @type {?|undefined} */
    NgxValidatorGlobalConfig.prototype.globalValidationMessages;
}
/** @type {?} */
export var NGX_VALIDATOR_CONFIG = new InjectionToken('NGX_VALIDATION_CONFIG');
/** @type {?} */
export var DEFAULT_GLOBAL_VALIDATION_MESSAGES = {
    required: '该选项不能为空',
    maxlength: '该选项输入值长度不能大于{requiredLength}',
    minlength: '该选项输入值长度不能小于{requiredLength}',
    ngxUniqueCheck: '输入值已经存在，请重新输入',
    email: '输入邮件的格式不正确',
    repeat: '两次输入不一致',
    pattern: '该选项输入格式不正确',
    number: '必须输入数字',
    url: '输入URL格式不正确',
    max: '该选项输入值不能大于{max}',
    min: '该选项输入值不能小于{min}'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdoeTUyMGNyYXp5L25neC12YWxpZGF0b3IvIiwic291cmNlcyI6WyJ2YWxpZGF0b3IuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRy9DLGdDQUVDOzs7O0FBTUQsd0NBSUM7OztJQUhHLHdEQUF3RDs7SUFDeEQsZ0RBQTJDOztJQUMzQyx3Q0FBMkI7Ozs7O0FBRS9CLDhDQUVDOzs7SUFERyw0REFBOEM7OztBQUdsRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBQTJCLHVCQUF1QixDQUFDOztBQUV6RyxNQUFNLEtBQU8sa0NBQWtDLEdBQUc7SUFDOUMsUUFBUSxFQUFFLFNBQVM7SUFDbkIsU0FBUyxFQUFFLDhCQUE4QjtJQUN6QyxTQUFTLEVBQUUsOEJBQThCO0lBQ3pDLGNBQWMsRUFBRSxlQUFlO0lBQy9CLEtBQUssRUFBRSxZQUFZO0lBQ25CLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxZQUFZO0lBQ2pCLEdBQUcsRUFBRSxpQkFBaUI7SUFDdEIsR0FBRyxFQUFFLGlCQUFpQjtDQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGljdGlvbmFyeTxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZ3hWYWxpZGF0aW9uTWVzc2FnZXMgPSBEaWN0aW9uYXJ5PERpY3Rpb25hcnk8c3RyaW5nPj47XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgTmd4VmFsaWRhdGVPbiA9ICdzdWJtaXQnIHwgJ2JsdXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neFZhbGlkYXRvckNvbmZpZyB7XG4gICAgdmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3k/OiBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneTtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM/OiBOZ3hWYWxpZGF0aW9uTWVzc2FnZXM7XG4gICAgdmFsaWRhdGVPbj86IE5neFZhbGlkYXRlT247XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFZhbGlkYXRvckdsb2JhbENvbmZpZyBleHRlbmRzIE5neFZhbGlkYXRvckNvbmZpZyB7XG4gICAgZ2xvYmFsVmFsaWRhdGlvbk1lc3NhZ2VzPzogRGljdGlvbmFyeTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgTkdYX1ZBTElEQVRPUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Tmd4VmFsaWRhdG9yR2xvYmFsQ29uZmlnPignTkdYX1ZBTElEQVRJT05fQ09ORklHJyk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0dMT0JBTF9WQUxJREFUSU9OX01FU1NBR0VTID0ge1xuICAgIHJlcXVpcmVkOiAn6K+l6YCJ6aG55LiN6IO95Li656m6JyxcbiAgICBtYXhsZW5ndGg6ICfor6XpgInpobnovpPlhaXlgLzplb/luqbkuI3og73lpKfkuo57cmVxdWlyZWRMZW5ndGh9JyxcbiAgICBtaW5sZW5ndGg6ICfor6XpgInpobnovpPlhaXlgLzplb/luqbkuI3og73lsI/kuo57cmVxdWlyZWRMZW5ndGh9JyxcbiAgICBuZ3hVbmlxdWVDaGVjazogJ+i+k+WFpeWAvOW3sue7j+WtmOWcqO+8jOivt+mHjeaWsOi+k+WFpScsXG4gICAgZW1haWw6ICfovpPlhaXpgq7ku7bnmoTmoLzlvI/kuI3mraPnoa4nLFxuICAgIHJlcGVhdDogJ+S4pOasoei+k+WFpeS4jeS4gOiHtCcsXG4gICAgcGF0dGVybjogJ+ivpemAiemhuei+k+WFpeagvOW8j+S4jeato+ehricsXG4gICAgbnVtYmVyOiAn5b+F6aG76L6T5YWl5pWw5a2XJyxcbiAgICB1cmw6ICfovpPlhaVVUkzmoLzlvI/kuI3mraPnoa4nLFxuICAgIG1heDogJ+ivpemAiemhuei+k+WFpeWAvOS4jeiDveWkp+S6jnttYXh9JyxcbiAgICBtaW46ICfor6XpgInpobnovpPlhaXlgLzkuI3og73lsI/kuo57bWlufSdcbn07XG4iXX0=