import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../../model/usuario/usuario.model';
import { UsuarioAlta } from 'src/app/model/usuario/usuarioAlta.model';

@Injectable(
  {
    providedIn: "root"
  })

export class UsuarioService {

  private baseUrl: string = `${environment.apiServer}Usuario`;
  constructor(private http: HttpClient) { }

  public getUsuarios()
    : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  public postUsuario(usuario: UsuarioAlta)
    : Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario)
      .pipe(
        catchError(this.handleError)
      );
  }

  public postActualizarUsuario(usuario: UsuarioAlta)
    : Observable<Usuario> {
    let url = this.baseUrl + "/ActualizarUsuario";
    return this.http.post<Usuario>(this.baseUrl, usuario)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getUsuarioPorId(usuarioId: number)
    : Observable<Usuario> {
    let url = this.baseUrl + "/ObtenerUsuarioPorId?id=" + usuarioId;
    return this.http.get<Usuario>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public eliminarUsuario(usuarioId: number)
    : Observable<any> {
    let url = this.baseUrl + "/" + usuarioId;
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
