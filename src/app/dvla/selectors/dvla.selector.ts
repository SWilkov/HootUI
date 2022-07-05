import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/reducers/root-index";
import * as fromDvla from '../reducers/dvla.reducer';
import * as fromSearch from '../../reducers/search.reducer';

const dvlaState = (state: AppState) => state.dvlas;
const searchState = (state: AppState) => state.searches;

export const selectAll = createSelector(
  dvlaState,
  fromDvla.all
);

export const selectByRegistration = createSelector(
  dvlaState, searchState,
  (state, searchState) => {
    let registration: string = fromSearch.getCurrentRegistration(searchState);
    if (registration) {
      return fromDvla.getByRegistration(state, registration);
    }
    return undefined;
  }
);

export const selectLoading = createSelector(
  dvlaState,
  fromDvla.getLoading
);

export const selectLoaded = createSelector(
  dvlaState,
  fromDvla.getLoaded
);