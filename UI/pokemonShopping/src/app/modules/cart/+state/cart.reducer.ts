import { createReducer, on } from '@ngrx/store';
import { ProductDto, ShoppingCartDto } from '../../api/models';
import * as CartActions from './cart.actions';

export const CartReducerfeatureKey = 'CartState';

export interface CartState {
  cart: ShoppingCartDto | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CartState = {
  cart: null,
  loading: false,
  error: null
};

export const CartReducer = createReducer(
  initialState,
  on(CartActions.loadCart, state => ({ ...state, loading: true })),
  on(CartActions.loadCartSuccess, (state, { cart }) => ({ ...state, cart, loading: false, error: ''})),
  on(CartActions.loadCartFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(CartActions.addToCart, state => ({ ...state, loading: true })),
);
