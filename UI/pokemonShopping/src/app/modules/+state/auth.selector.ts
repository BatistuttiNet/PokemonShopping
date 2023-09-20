import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, featureKey } from './auth.reducer';

export const selectTokenInfoState = createFeatureSelector<AuthState>(
  featureKey
);

export const selectIsLoading = createSelector(
  selectTokenInfoState,
  (state: AuthState) => state.loading
);

export const selectError = createSelector(
  selectTokenInfoState,
  (state: AuthState) => state.error
);

export const selectToken = createSelector(
  selectTokenInfoState,
  (state: AuthState) => state.auth?.token
);

export const selectUser = createSelector(
  selectTokenInfoState,
  (state: AuthState) => state.auth?.user
);

export const selectIsAdmin = createSelector(
  selectTokenInfoState,
  (state: AuthState) => state.auth?.user?.rol?.toLocaleLowerCase() === 'admin'
);
