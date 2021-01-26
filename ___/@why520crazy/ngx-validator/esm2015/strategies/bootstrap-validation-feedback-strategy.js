/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const INVALID_CLASS = 'is-invalid';
/** @type {?} */
const INVALID_FEEDBACK_CLASS = 'invalid-feedback';
export class BootstrapValidationFeedbackStrategy {
    constructor() { }
    /**
     * @param {?} element
     * @param {?} errorMessages
     * @return {?}
     */
    showError(element, errorMessages) {
        if (element) {
            element.classList.add(INVALID_CLASS);
        }
        if (element && element.parentElement) {
            /** @type {?} */
            const documentFrag = document.createDocumentFragment();
            /** @type {?} */
            const divNode = document.createElement('DIV');
            /** @type {?} */
            const textNode = document.createTextNode(errorMessages[0]);
            divNode.appendChild(textNode);
            divNode.setAttribute('class', INVALID_FEEDBACK_CLASS);
            documentFrag.appendChild(divNode);
            element.parentElement.append(documentFrag);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removeError(element) {
        if (element) {
            element.classList.remove(INVALID_CLASS);
        }
        if (element && element.parentElement) {
            /** @type {?} */
            const invalidFeedback = element.parentElement.querySelector(`.${INVALID_FEEDBACK_CLASS}`);
            if (invalidFeedback) {
                element.parentElement.removeChild(invalidFeedback);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad2h5NTIwY3Jhenkvbmd4LXZhbGlkYXRvci8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvYm9vdHN0cmFwLXZhbGlkYXRpb24tZmVlZGJhY2stc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7TUFFTSxhQUFhLEdBQUcsWUFBWTs7TUFDNUIsc0JBQXNCLEdBQUcsa0JBQWtCO0FBRWpELE1BQU0sT0FBTyxtQ0FBbUM7SUFDNUMsZ0JBQWUsQ0FBQzs7Ozs7O0lBRWhCLFNBQVMsQ0FBQyxPQUFvQixFQUFFLGFBQXVCO1FBQ25ELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFOztrQkFDNUIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTs7a0JBQ2hELE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzs7a0JBQ3ZDLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLENBQUM7WUFDdEQsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQW9CO1FBQzVCLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFOztrQkFDNUIsZUFBZSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQztZQUN6RixJQUFJLGVBQWUsRUFBRTtnQkFDakIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEQ7U0FDSjtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IH0gZnJvbSAnLi92YWxpZGF0aW9uLWZlZWRiYWNrLXN0cmF0ZWd5JztcblxuY29uc3QgSU5WQUxJRF9DTEFTUyA9ICdpcy1pbnZhbGlkJztcbmNvbnN0IElOVkFMSURfRkVFREJBQ0tfQ0xBU1MgPSAnaW52YWxpZC1mZWVkYmFjayc7XG5cbmV4cG9ydCBjbGFzcyBCb290c3RyYXBWYWxpZGF0aW9uRmVlZGJhY2tTdHJhdGVneSBpbXBsZW1lbnRzIFZhbGlkYXRpb25GZWVkYmFja1N0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzaG93RXJyb3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoSU5WQUxJRF9DTEFTUyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50RnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZXJyb3JNZXNzYWdlc1swXSk7XG4gICAgICAgICAgICBkaXZOb2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgICAgIGRpdk5vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIElOVkFMSURfRkVFREJBQ0tfQ0xBU1MpO1xuICAgICAgICAgICAgZG9jdW1lbnRGcmFnLmFwcGVuZENoaWxkKGRpdk5vZGUpO1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZChkb2N1bWVudEZyYWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRXJyb3IoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShJTlZBTElEX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRGZWVkYmFjayA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtJTlZBTElEX0ZFRURCQUNLX0NMQVNTfWApO1xuICAgICAgICAgICAgaWYgKGludmFsaWRGZWVkYmFjaykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbnZhbGlkRmVlZGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19