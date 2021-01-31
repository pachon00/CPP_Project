import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { authService } from "../services/auth/auth.service";
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: authService) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree{
    if (this.authService.isAuthenticate) {
      return true;
    }
    else {
      return this.router.parseUrl('/login/signin');
    }
  }
}
