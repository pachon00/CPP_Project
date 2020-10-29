import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Proveedor, ProveedorDto } from '../../model/administration/Proveedor.model';

@Injectable(
  {
    providedIn: "root"
  }
)

export class ProveedorService {

  private baseUrl: string = `${environment.apiServer}Proveedor`;
  constructor(private http: HttpClient) { }

  public getProveedor()
    : Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  public postProveedor(proveedor: ProveedorDto)
  : Observable<ProveedorDto> {
  return this.http.post<ProveedorDto>(this.baseUrl, proveedor)
    .pipe(
      catchError(this.handleError)
    );
  }

  public postActualizarProveedor(tipoProveedor: ProveedorDto)
  : Observable<ProveedorDto> {
  let url = this.baseUrl + "/ActualizarProveedor";
  return this.http.post<ProveedorDto>(url, tipoProveedor)
    .pipe(
      catchError(this.handleError)
    );
}

  public getProveedorPorId(proveedorId: number)
  : Observable<Proveedor> {
  let url = this.baseUrl + "/ObtenerProveedorPorId?id=" + proveedorId;
  return this.http.get<Proveedor>(url)
    .pipe(
      catchError(this.handleError)
    );
}

  public eliminarProveedor(proveedorId: number)
    : Observable<any> {
    let url = this.baseUrl + "/" + proveedorId;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    if (error.error.error) {
      return throwError(
        error.error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
