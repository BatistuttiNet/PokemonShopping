import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState, CartReducerfeatureKey } from './cart.reducer';

export const selectTokenInfoState = createFeatureSelector<CartState>(
  CartReducerfeatureKey
);

export const selectIsLoading = createSelector(
  selectTokenInfoState,
  (state: CartState) => state.loading
);

export const selectCart = createSelector(
  selectTokenInfoState,
  (state: CartState) => state.cart
);

export const selectProductsInCart = createSelector(
  selectTokenInfoState,
  (state: CartState) => state.cart?.products || []
);

export const selectQuantity = createSelector(
  selectTokenInfoState,
  (state: CartState) => {
    return state.cart?.products?.reduce((sum, product) => sum + (product.quantity || 0), 0) || 0;
  }
);




export const selectTotal = createSelector(
  selectTokenInfoState,
  (state: CartState) => {
    if (!state.cart?.products) {
      return 0;
    }

    return state.cart.products.reduce(
      (sum, product) => sum + ((product.quantity ?? 0) * (product.product?.price ?? 0)),
      0
    );
  }
);
