import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ITipoProveedorAlta, TipoProveedor } from '../../model/administration/TipoProveedor.model';

@Injectable(
  {
    providedIn: "root"
  }
)
export class TipoProveedorService {

  private baseUrl: string = `${environment.apiServer}TipoProveedor`;
  constructor(private http: HttpClient) { }

  public getTipoProveedor()
    : Observable<TipoProveedor[]> {
    return this.http.get<TipoProveedor[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  public postProveedor(tipoProveedor: ITipoProveedorAlta)
    : Observable<ITipoProveedorAlta> {
    return this.http.post<ITipoProveedorAlta>(this.baseUrl, tipoProveedor)
      .pipe(
        catchError(this.handleError)
      );
  }

  public postActualizarTipoProveedor(tipoProveedor: ITipoProveedorAlta)
    : Observable<ITipoProveedorAlta> {
    let url = this.baseUrl + "/ActualizarTipoProveedor";
    return this.http.post<ITipoProveedorAlta>(url, tipoProveedor)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getTipoProveedorPorId(proveedorId: number)
    : Observable<TipoProveedor> {
    let url = this.baseUrl + "/ObtenerProveedorPorId?id=" + proveedorId;
    return this.http.get<TipoProveedor>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public eliminarTipoProveedor(proveedorId: number)
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
