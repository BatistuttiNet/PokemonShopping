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

export const selectUserInitials = createSelector(
  selectTokenInfoState,
  (state: AuthState) => {
    const user = state.auth?.user;
    if (user) {
      const names = user?.name?.split(' ');
      if (names && names.length > 0) {
        return (names[0][0] + (names[1] ? names[1][0] : '')).toUpperCase();
      }
      return '';
    }
    return '';
  }
);

export const selectUserName = createSelector(
  selectTokenInfoState,
  (state: AuthState) => state.auth?.user?.email ?? ''
);

export const selectIsAdmin = createSelector(
  selectTokenInfoState,
  (state: AuthState) => state.auth?.user?.rol?.toLocaleLowerCase() === 'admin'
);
