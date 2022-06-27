import { ActionReducerMap } from '@ngrx/store';
import * as fromMot from '../reducers/mot.reducer';

export interface AppState {
  mots: fromMot.MotState
}

export const reducers: ActionReducerMap<AppState> = {
  mots: fromMot.motReducer
};
