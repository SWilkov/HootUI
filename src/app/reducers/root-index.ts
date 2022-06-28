import { ActionReducerMap } from '@ngrx/store';
import * as fromMot from '../mot/reducers/mot.reducer';
import * as fromDvla from '../dvla/reducers/dvla.reducer';
import * as fromSearch from '../reducers/search.reducer';
export interface AppState {
  mots: fromMot.MotState,
  dvlas: fromDvla.DvlaState,
  searches: fromSearch.SearchState
}

export const reducers: ActionReducerMap<AppState> = {
  mots: fromMot.motReducer,
  dvlas: fromDvla.dvlaReducer,
  searches: fromSearch.searchReducer
};
