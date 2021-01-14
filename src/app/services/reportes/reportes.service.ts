import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RemisionesVencidas,PagoRemisiones } from '../../model/reportes/remisionesvencidas.model';
import { PagoProveedores } from 'src/app/model/reportes/pagoproveedores.model';

@Injectable(
  {
    providedIn: "root"
  })

export class ReportesService {

  private baseUrl: string = `${environment.apiServer}Reportes`;
  constructor(private http: HttpClient) { }

  public getRemisionesVencidas(proveedorId:number, sucursalId:number): Observable<RemisionesVencidas[]> {
    return this.http.get<RemisionesVencidas[]>(this.baseUrl +"/RemisionesVencidas?proveedorId=" + proveedorId + "&sucursalId=" +sucursalId )
    .pipe(
      catchError(this.handleError)
    );
  }


  public getRemisionesPorVencer(proveedorId:number, sucursalId:number): Observable<RemisionesVencidas[]> {
    return this.http.get<RemisionesVencidas[]>(this.baseUrl +"/RemisionesPorVencer?proveedorId=" + proveedorId + "&sucursalId=" +sucursalId )
    .pipe(
      catchError(this.handleError)
    );
  }

  public getPagoRemisiones(proveedorId:number, sucursalId:number): Observable<PagoRemisiones[]> {
    return this.http.get<PagoRemisiones[]>(this.baseUrl +"/PagoRemisiones?proveedorId=" + proveedorId + "&sucursalId=" +sucursalId )
    .pipe(
      catchError(this.handleError)
    );
  }

  public getPagoOrdenesProveedor(proveedorId:number): Observable<PagoProveedores[]> {
    return this.http.get<PagoProveedores[]>(this.baseUrl +"/PagoProveedores?proveedorId=" + proveedorId)
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
