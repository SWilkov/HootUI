import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Vehicle } from "../models/vehicle.model";
import * as motActions from '../actions/mot.actions';

export interface MotState extends EntityState<Vehicle> {  
  loading: boolean;
  loaded: boolean;
}

export const adaptor: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>({});

const initState: MotState = adaptor.getInitialState({  
  loaded: false,
  loading: false
});

const _motReducer = createReducer(
  initState,

  on(motActions.loadMot,
    (state, {payload}) => ({
      ...state,
      loading: true
    })),
  on(motActions.loadMotSuccess,
    (state, {payload}) => {
      return adaptor.setOne(payload, {
        ...state,
        loading: false,
        loaded: true
      })
    }),
  on(motActions.loadMotFail,
    (state, {payload}) => ({
      ...state,
      loading: false
    }))
);

export function motReducer(state: MotState | undefined, action: Action) {
  return _motReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adaptor.getSelectors();

export const all = (state: MotState) => selectAll(state);

export const getByRegistration = (state: MotState, registration: string): Vehicle | undefined => { 
    return selectAll(state).find(x => x.registration.toLowerCase() === registration.toLowerCase());  
}

export const getLoading = (state: MotState) => state.loading;
export const getLoaded = (state: MotState) => state.loaded;

