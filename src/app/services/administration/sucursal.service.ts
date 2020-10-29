import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Sucursal } from '../../model/administration/Sucursal.model';

@Injectable(
  {
    providedIn: "root"
  }
)

export class SucursalService {


  private baseUrl: string = `${environment.apiServer}Sucursal`;

  constructor(private http: HttpClient) { }


  public getSucursal()
    : Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  public postSucursal(sucursal: Sucursal)
  : Observable<Sucursal> {
  return this.http.post<Sucursal>(this.baseUrl, sucursal)
    .pipe(
      catchError(this.handleError)
    );
  }

  public postActualizarSucursal(sucursal: Sucursal)
  : Observable<Sucursal> {
  let url = this.baseUrl + "/ActualizarSucursal";
  return this.http.post<Sucursal>(url, sucursal)
    .pipe(
      catchError(this.handleError)
    );
  }


  public eliminarSucursal(sucursalId: number)
    : Observable<any> {
    let url = this.baseUrl + "/" + sucursalId;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }


  public getProveedorPorId(sucursalId: number)
  : Observable<Sucursal> {
  let url = this.baseUrl + "/ObtenerSucursalPorId?id=" + sucursalId;
  return this.http.get<Sucursal>(url)
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
