import { Action, createReducer, on } from "@ngrx/store";
import * as searchActions from '../actions/search.actions';

export interface SearchState {
  includeDvla: boolean;
  current: string;
}

const initState: SearchState = {
  includeDvla: true,
  current: ''
};

const _searchReducer = createReducer(
  initState,

  on(searchActions.toggleDvlaSearch,
    (state) => ({
      ...state,
      includeDvla: !state.includeDvla
    })),
  on(searchActions.setRegistration,
    (state, {payload}) => ({
      ...state,
      current: payload
    }))
);

export function searchReducer(state: SearchState | undefined, action: Action) {
  return _searchReducer(state, action);
}

export const getIncludeDvla = (state: SearchState) => state.includeDvla;
export const getCurrentRegistration = (state: SearchState)=> state.current;
