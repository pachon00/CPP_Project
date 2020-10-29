import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormaPago } from '../../../model/administration/FormaPago';
import { FormaPagoService } from '../formapago.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : "root"
})

export class ProveedorResolver implements Resolve<FormaPago[]> {
  constructor(private formaPagoService: FormaPagoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FormaPago[]>
  {
     return this.formaPagoService.getFormaPago();
  }
}
