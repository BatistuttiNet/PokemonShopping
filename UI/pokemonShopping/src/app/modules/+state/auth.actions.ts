import { createAction, props } from '@ngrx/store';
import { AuthResponse } from '../api/models';

export const login = createAction('[User] Load User', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[User] Load User Success', props<{ auth: AuthResponse }>());
export const loginFailure = createAction('[User] Load User Failure', props<{ error: any }>());

export const logout = createAction('[User] Logout');
