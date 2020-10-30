import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable(
  {
    providedIn: "root"
  }
)

export class ReportesService {

  private baseUrl: string = `${environment.apiServer}Remision`;
  constructor(private http: HttpClient) { }
}
