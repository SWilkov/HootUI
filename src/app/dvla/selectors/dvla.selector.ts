import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/reducers/root-index";
import * as fromDvla from '../reducers/dvla.reducer';

const dvlaState = (state: AppState) => state.dvlas;

export const selectAll = createSelector(
  dvlaState,
  fromDvla.all
);

export const selectByRegistration = (registration: string) => createSelector(
  dvlaState,
  (state) => fromDvla.getByRegistration(state, registration)
);

export const selectLoading = createSelector(
  dvlaState,
  fromDvla.getLoading
);

export const selectLoaded = createSelector(
  dvlaState,
  fromDvla.getLoaded
);