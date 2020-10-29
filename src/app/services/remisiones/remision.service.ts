import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Remision } from '../../model/remision/remision.model';
import { AltaRemision } from '../../model/remision/remisionAlta.model';

@Injectable(
  {
    providedIn: "root"
  }
)
export class RemisionService {

  private baseUrl: string = `${environment.apiServer}Remision`;
  constructor(private http: HttpClient) { }

  public getRemision()
    : Observable<Remision[]> {
    return this.http.get<Remision[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  public eliminarRemision(remisionId: number)
    : Observable<any> {
    let url = this.baseUrl + "/" + remisionId;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public postActualizarRemision(remision: AltaRemision)
    : Observable<AltaRemision> {
    let url = this.baseUrl + "/ActualizarRemision";
    return this.http.post<AltaRemision>(url, remision)
      .pipe(
        catchError(this.handleError)
      );
  }

  public postRemision(remision: AltaRemision)
  : Observable<AltaRemision> {
  return this.http.post<AltaRemision>(this.baseUrl, remision)
    .pipe(
      catchError(this.handleError)
    );
  }


  public getRemisionPorId(remisionId: number)
    : Observable<AltaRemision> {
    let url = this.baseUrl + "/ObtenerRemisionPorId?id=" + remisionId;
    return this.http.get<AltaRemision>(url)
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
