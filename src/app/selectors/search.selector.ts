
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/root-index';
import * as fromSearch from '../reducers/search.reducer';

const searchState = (state: AppState) => state.searches;

export const selectIncludeDvla = createSelector(
  searchState,
  fromSearch.getIncludeDvla
);

export const selectCurrentRegistration = createSelector(
  searchState,
  fromSearch.getCurrentRegistration
);
