import { createReducer, on } from '@ngrx/store';
import { ProductDto } from '../../api/models';
import * as ProductsActions from './products.actions';

export const productsReducerfeatureKey = 'ProductsState';

export interface ProductsState {
  products: ProductDto[] | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ProductsState = {
  products: null,
  loading: false,
  error: null
};

export const ProductsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, state => ({ ...state, loading: true })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({ ...state, products, loading: false, error: ''})),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
