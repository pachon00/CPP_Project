import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../../model/usuario/usuario.model';
import { UsuarioAlta } from 'src/app/model/usuario/usuarioAlta.model';
import { UsuarioViewModel, UsuarioAutenticado } from '../../model/usuario/usuarioAutenticado.model';

@Injectable(
  {
    providedIn: "root"
  })

export class authService {

  private baseUrl: string = `${environment.apiServer}Auth`;
  constructor(private http: HttpClient) { }

  public authenticate(usuario: UsuarioViewModel)
    : Observable<UsuarioAutenticado> {
    return this.http.post<UsuarioAutenticado>(this.baseUrl+"/login", usuario)
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
