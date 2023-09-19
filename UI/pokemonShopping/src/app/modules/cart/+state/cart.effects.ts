import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import * as CartActions from './cart.actions';
import { ShoppingCartService } from '../../api/services';
import { ProductDto, ShoppingCartDto } from '../../api/models';

@Injectable()
export class CartEffects {

  loadCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.loadCart),
    switchMap(action => this.service.apiShoppingCartGet$Json()
      .pipe(
        map(result => CartActions.loadCartSuccess({
          cart: result.payload as ShoppingCartDto
        })),
        catchError(error =>
          {
            if(error as HttpErrorResponse)  {
              return of(CartActions.loadCartFailure({ error: error.error?.message ?? "" }));
            }
            return EMPTY
          })
      ))
    )
  );


  addToCart$ = createEffect(() => this.actions$.pipe(
    ofType(CartActions.addToCart),
    switchMap(action => this.service.addToCart$Json({
      body: action.add
    })
      .pipe(
        map(result => CartActions.loadCartSuccess({
          cart: result.payload as ShoppingCartDto
        })),
        catchError(error =>
          {
            if(error as HttpErrorResponse)  {
              return of(CartActions.loadCartFailure({ error: error.error?.message ?? "" }));
            }
            return EMPTY
          })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: ShoppingCartService
  ) {}
}
