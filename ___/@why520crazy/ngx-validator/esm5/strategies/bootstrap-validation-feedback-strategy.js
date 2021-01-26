/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var INVALID_CLASS = 'is-invalid';
/** @type {?} */
var INVALID_FEEDBACK_CLASS = 'invalid-feedback';
var BootstrapValidationFeedbackStrategy = /** @class */ (function () {
    function BootstrapValidationFeedbackStrategy() {
    }
    /**
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    BootstrapValidationFeedbackStrategy.prototype.showError = /**
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    function (element, errorMessages) {
        if (element) {
            element.classList.add(INVALID_CLASS);
        }
        if (element && element.parentElement) {
            /** @type {?} */
            var documentFrag = document.createDocumentFragment();
            /** @type {?} */
            var divNode = document.createElement('DIV');
            /** @type {?} */
            var textNode = document.createTextNode(errorMessages[0]);
            divNode.appendChild(textNode);
            divNode.setAttribute('class', INVALID_FEEDBACK_CLASS);
            documentFrag.appendChild(divNode);
            element.parentElement.append(documentFrag);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BootstrapValidationFeedbackStrategy.prototype.removeError = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element) {
            element.classList.remove(INVALID_CLASS);
        }
        if (element && element.parentElement) {
            /** @type {?} */
            var invalidFeedback = element.parentElement.querySelector("." + INVALID_FEEDBACK_CLASS);
            if (invalidFeedback) {
                element.parentElement.removeChild(invalidFeedback);
            }
        }
    };
    return BootstrapValidationFeedbackStrategy;
}());
export { BootstrapValidationFeedbackStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvYm9vdHN0cmFwLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFFTSxhQUFhLEdBQUcsWUFBWTs7SUFDNUIsc0JBQXNCLEdBQUcsa0JBQWtCO0FBRWpEO0lBQ0k7SUFBZSxDQUFDOzs7Ozs7SUFFaEIsdURBQVM7Ozs7O0lBQVQsVUFBVSxPQUFvQixFQUFFLGFBQXVCO1FBQ25ELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFOztnQkFDNUIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTs7Z0JBQ2hELE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7Z0JBQ3ZDLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLENBQUM7WUFDdEQsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7Ozs7O0lBRUQseURBQVc7Ozs7SUFBWCxVQUFZLE9BQW9CO1FBQzVCLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFOztnQkFDNUIsZUFBZSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQUksc0JBQXdCLENBQUM7WUFDekYsSUFBSSxlQUFlLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsMENBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kgfSBmcm9tICcuL3ZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3knO1xuXG5jb25zdCBJTlZBTElEX0NMQVNTID0gJ2lzLWludmFsaWQnO1xuY29uc3QgSU5WQUxJRF9GRUVEQkFDS19DTEFTUyA9ICdpbnZhbGlkLWZlZWRiYWNrJztcblxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IGltcGxlbWVudHMgVmFsaWRhdGlvbkZlZWRiYWNrU3RyYXRlZ3kge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHNob3dFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXJyb3JNZXNzYWdlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChJTlZBTElEX0NMQVNTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgY29uc3QgZGl2Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlcnJvck1lc3NhZ2VzWzBdKTtcbiAgICAgICAgICAgIGRpdk5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICAgICAgZGl2Tm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgSU5WQUxJRF9GRUVEQkFDS19DTEFTUyk7XG4gICAgICAgICAgICBkb2N1bWVudEZyYWcuYXBwZW5kQ2hpbGQoZGl2Tm9kZSk7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kKGRvY3VtZW50RnJhZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVFcnJvcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKElOVkFMSURfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaW52YWxpZEZlZWRiYWNrID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke0lOVkFMSURfRkVFREJBQ0tfQ0xBU1N9YCk7XG4gICAgICAgICAgICBpZiAoaW52YWxpZEZlZWRiYWNrKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGludmFsaWRGZWVkYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=