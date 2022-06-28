
import { createSelector } from '@ngrx/store';
import * as fromMot from '../reducers/mot.reducer';
import { AppState } from '../../reducers/root-index';

const motState = (state: AppState) => state.mots;

export const selectAll = createSelector(
  motState, fromMot.all
);

export const selectByRegistration = (registration: string) => createSelector(
  motState,
  (state) => fromMot.getByRegistration(state, registration)
);

export const selectLoading = createSelector(motState, fromMot.getLoading);
export const selectLoaded = createSelector(motState, fromMot.getLoaded);

