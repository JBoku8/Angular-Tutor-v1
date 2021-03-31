import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth/shared/auth.service';
import { FirebaseAuthService } from './auth/shared/firebase-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private authService: AuthService,
    private fireAuthService: FirebaseAuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // if (!this.authService.isAuthorized()) {
    //   this.authService.redirectUrl = state.url;
    //   this._router.navigate(['auth/sign-in']);
    // }

    return this.fireAuthService.currentUser$.pipe(
      map((user) => {
        if (user && user.uid) {
          return true;
        } else {
          this._router.navigate(['auth/sign-in']);
          return false;
        }
      })
    );
  }
}
