import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import * as ProductsActions from './products.actions';
import { ProductService } from '../../api/services';
import { ProductDto } from '../../api/models';

@Injectable()
export class ProductsEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(ProductsActions.loadProducts),
    switchMap(action => this.service.apiProductGetProductsByFilterGet$Json({

    })
      .pipe(
        map(result => ProductsActions.loadProductsSuccess({
          products: result.payload as ProductDto[]
        })),
        catchError(error =>
          {
            if(error as HttpErrorResponse)  {
              return of(ProductsActions.loadProductsFailure({ error: error.error?.message ?? "" }));
            }
            return EMPTY
          })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: ProductService
  ) {}
}
