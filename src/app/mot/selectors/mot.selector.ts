
import { createSelector } from '@ngrx/store';
import * as fromMot from '../reducers/mot.reducer';
import { AppState } from '../../reducers/root-index';
import * as fromSearch from '../../reducers/search.reducer';

const motState = (state: AppState) => state.mots;
const searchState = (state: AppState) => state.searches;

export const selectAll = createSelector(
  motState, fromMot.all
);

export const selectByRegistration = () => createSelector(
  motState,
  searchState,
  (state, searchState) => {
    let registration: string = fromSearch.getCurrentRegistration(searchState);
    if (registration) {
      return fromMot.getByRegistration(state, registration);
    }
    return undefined;
  }
);

export const selectLoading = createSelector(motState, fromMot.getLoading);
export const selectLoaded = createSelector(motState, fromMot.getLoaded);

