import { createReducer, on } from '@ngrx/store';
import * as UserActions from './auth.actions';
import { AuthResponse } from '../api/models';

export const featureKey = 'AuthState';

export interface AuthState {
  auth: AuthResponse | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  auth: null,
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(UserActions.login, state => ({ ...state, loading: true })),
  on(UserActions.loginSuccess, (state, { auth }) => ({ ...state, auth, loading: false, error: ''})),
  on(UserActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(UserActions.createUSer, state => ({ ...state, loading: true })),
  on(UserActions.createUSerSuccess, (state,) => ({ ...state, loading: false, error: ''})),
  on(UserActions.createUSerFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(UserActions.logout, (state) => ({ ...state, auth: null}))
);
