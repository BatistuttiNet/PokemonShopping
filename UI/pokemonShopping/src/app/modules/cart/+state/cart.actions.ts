import { createAction, props } from '@ngrx/store';
import { AddToCartDto, ShoppingCartDto } from '../../api/models';

export const loadCart = createAction('[Cart] Load Cart');
export const addToCart = createAction('[Cart] Add to  Cart', props<{ add: AddToCartDto }>());
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ cart: ShoppingCartDto }>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: any }>());
