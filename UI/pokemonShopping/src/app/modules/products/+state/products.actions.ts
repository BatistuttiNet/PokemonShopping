import { createAction, props } from '@ngrx/store';
import { ProductDto } from '../../api/models';

export const loadProducts = createAction('[Products] Load Products', props<{ filter: any }>());
export const loadProductsSuccess = createAction('[Products] Load Products Success', props<{ products: ProductDto[] }>());
export const loadProductsFailure = createAction('[Products] Load Products Failure', props<{ error: any }>());
