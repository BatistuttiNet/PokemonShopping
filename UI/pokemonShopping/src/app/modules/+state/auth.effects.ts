import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import * as AuhtActions from './auth.actions';
import { UserService } from '../api/services';
import { AuthResponse } from '../api/models';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartState } from '../cart/+state/cart.reducer';
import { Store } from '@ngrx/store';
import { loadCart } from '../cart/+state/cart.actions';

@Injectable()
export class AuthEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuhtActions.login),
    switchMap(action => this.userService.apiUserLoginPost$Json({
      body: {
        ...action
      }
    })
      .pipe(
        map(result => AuhtActions.loginSuccess({
          auth: result.payload as AuthResponse
        })),
        catchError(error =>
          {
            if(error as HttpErrorResponse)  {
              return of(AuhtActions.loginFailure({ error: error.error?.message ?? "" }));
            }
            return EMPTY
          })
      ))
    )
  );

  loginWithGoogle$ = createEffect(() => this.actions$.pipe(
    ofType(AuhtActions.loginWithGoogle),
    switchMap(action => this.userService.apiUserAuthenticateWithGooglePost$Json({
      body: {
        credential: action.googleCredentials
      }
    })
      .pipe(
        map(result => AuhtActions.loginSuccess({
          auth: result.payload as AuthResponse
        })),
        catchError(error =>
          {
            if(error as HttpErrorResponse)  {
              return of(AuhtActions.loginFailure({ error: error.error?.message ?? "" }));
            }
            return EMPTY
          })
      ))
    )
  );

  loginSuccess$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuhtActions.loginSuccess),
    tap(action => {
      this.cartStore.dispatch(loadCart())
      this.router.navigate(['/buy/products'])
    })),
    { dispatch: false }
  );


  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuhtActions.createUSer),
    switchMap(action => this.userService.apiUserCreateUserPost$Json({
      body: {
        ...action.user,
        rol: 'user' //todo brecha de seguridad
      }
    })
      .pipe(
        map(result => AuhtActions.loginSuccess({
          auth: result.payload as AuthResponse
        })),
        catchError(error =>
          {
            if(error as HttpErrorResponse)  {
              return of(AuhtActions.createUSerFailure({ error: error.error?.message ?? "" }));
            }
            return EMPTY
          })
      ))
    )
  );

  createUSerSuccess$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuhtActions.createUSerSuccess),
    tap(action => {
      this.router.navigate(['/auth'])
    })),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuhtActions.logout),
    tap(action => {
      this.router.navigate(['/auth'])
    })),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    private cartStore: Store<CartState>
  ) {}
}
