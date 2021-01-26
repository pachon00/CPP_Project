import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
export declare class NgxValidators {
    static uniqueCheckValidator(uniqueCheckFn: (value: any) => Observable<boolean>): (control: AbstractControl) => Promise<ValidationErrors> | Observable<ValidationErrors>;
}
