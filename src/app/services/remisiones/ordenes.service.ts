import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AltaOrden, AltaOrdenDetail } from 'src/app/model/remision/ordenesAlta.model';
import { Ordenes, PagarOrden } from 'src/app/model/remision/ordenes.model';

@Injectable(
  {
    providedIn: "root"
  }
)

export class OrdenService {

  private baseUrl: string = `${environment.apiServer}Ordenes`;
  constructor(private http: HttpClient) { }

  public getCreateOrders(): Observable<Ordenes[]> {
      return this.http.get<Ordenes[]>(this.baseUrl+'/OrdenesCreadas')
      .pipe(
        catchError(this.handleError)
      );
  }

  public getOrdenesById(id:number): Observable<AltaOrden[]> {
    return this.http.get<AltaOrden[]>(this.baseUrl+'/'+id)
    .pipe(
      catchError(this.handleError)
    );
  }

  public saveOrdenes( item: AltaOrdenDetail)
    : Observable<AltaOrdenDetail> {
    return this.http.post<AltaOrdenDetail>(this.baseUrl,item)
    .pipe(
      catchError(this.handleError)
    );
  }

  public updateOrdenes(item:AltaOrdenDetail)
    :Observable<AltaOrdenDetail> {
    return this.http.put<AltaOrdenDetail>(this.baseUrl,item)
    .pipe(
      catchError(this.handleError)
    );
  }

  public deleteOrdenes(id:number){
    return this.http.delete<AltaOrden>(this.baseUrl+'/'+id)
    .pipe(
      catchError(this.handleError)
    );
  }

  public getOrdenesByIdSupplier(id:number)
  : Observable<AltaOrden[]> {
  return this.http.get<AltaOrden[]>(this.baseUrl+'/'+id)
    .pipe(
      catchError(this.handleError)
    );
  }

  public savePagarOrden(item:PagarOrden)
  :Observable<PagarOrden> {
  return this.http.post<PagarOrden>(this.baseUrl+'/PagarOrden',item)
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