import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, productsReducerfeatureKey } from './products.reducer';

export const selectTokenInfoState = createFeatureSelector<ProductsState>(
  productsReducerfeatureKey
);

export const selectIsLoading = createSelector(
  selectTokenInfoState,
  (state: ProductsState) => state.loading
);

export const selectProducts = createSelector(
  selectTokenInfoState,
  (state: ProductsState) => state.products ?? []
);
