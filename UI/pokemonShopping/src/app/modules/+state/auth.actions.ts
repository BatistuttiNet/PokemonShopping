import { createAction, props } from '@ngrx/store';
import { AuthResponse, CreateUserDto } from '../api/models';

export const login = createAction('[User] Load User', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[User] Load User Success', props<{ auth: AuthResponse }>());
export const loginFailure = createAction('[User] Load User Failure', props<{ error: any }>());

export const createUSer = createAction('[User] Create user', props<{ user: CreateUserDto }>());
export const createUSerSuccess = createAction('[User] Create user Success');
export const createUSerFailure = createAction('[User] Create user Failure', props<{ error: any }>());

export const logout = createAction('[User] Logout');
