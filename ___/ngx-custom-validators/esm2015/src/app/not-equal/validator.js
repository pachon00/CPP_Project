import { Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
export const notEqual = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val !== v ? null : { notEqual: { value: val } };
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9ub3QtZXF1YWwvdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBa0QsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFRLEVBQWUsRUFBRTtJQUNoRCxPQUFPLENBQUMsT0FBd0IsRUFBb0IsRUFBRTtRQUNwRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sQ0FBQyxHQUFRLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFN0IsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDekQsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzUHJlc2VudCB9IGZyb20gJy4uL3V0aWwvbGFuZyc7XG5cbmV4cG9ydCBjb25zdCBub3RFcXVhbCA9ICh2YWw6IGFueSk6IFZhbGlkYXRvckZuID0+IHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzID0+IHtcbiAgICBpZiAoaXNQcmVzZW50KFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCkpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB2OiBhbnkgPSBjb250cm9sLnZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbCAhPT0gdiA/IG51bGwgOiB7IG5vdEVxdWFsOiB7IHZhbHVlOiB2YWwgfSB9O1xuICB9O1xufTtcbiJdfQ==