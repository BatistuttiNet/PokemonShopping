import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import * as AuhtActions from './auth.actions';
import { UserService } from '../api/services';
import { AuthResponse } from '../api/models';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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

  dispacthRoute$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuhtActions.loginSuccess),
    tap(action => {
      this.router.navigate(['/buy/products'])
    })),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}
}
