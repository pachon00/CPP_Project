import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { authService } from "../services/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: authService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let isAuthenticated: boolean = false;
    this.authService.isUserAuthenticate().subscribe(
      authenticated => {
        if (authenticated) {
          isAuthenticated = true;
        } else {
          // // not logged in so redirect to login page with the return url        
          isAuthenticated = false;
        }
      },
      err => {
        isAuthenticated = false;
      }
    );
    if (!isAuthenticated) {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['login/signin']);
    }
    return isAuthenticated;
  }
}
