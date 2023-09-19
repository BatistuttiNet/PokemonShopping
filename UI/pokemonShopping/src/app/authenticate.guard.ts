import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AuthState } from './modules/+state/auth.reducer';
import { selectToken } from './modules/+state/auth.selector';
import { logout } from './modules/+state/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(private store: Store<AuthState>) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectToken)
        .pipe(map(token => {

          if (!token) {
            this.store.dispatch(logout());
          }

          return true;
        }));
  }

}
