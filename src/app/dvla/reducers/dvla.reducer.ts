import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { DvlaVehicle } from "../models/dvla-vehicle.model";
import * as dvlaActions from '../actions/dvla.actions';

export interface DvlaState extends EntityState<DvlaVehicle> {
  loading: boolean;
  loaded: boolean;
}

export const adaptor: EntityAdapter<DvlaVehicle> = createEntityAdapter<DvlaVehicle>({});

const initState: DvlaState = adaptor.getInitialState({  
  loaded: false,
  loading: false
});

const _dvlaReducer = createReducer(
  initState,

  on(dvlaActions.loadDvla,
    (state, {payload}) => ({
      ...state,
      loading: true,
      loaded: false
    })),
  on(dvlaActions.loadDvlaSuccess,
    (state, {payload}) => {
      return adaptor.setOne(payload.data, {
        ...state,
        loading: false,
        loaded: true
      })
    }),
  on(dvlaActions.loadDvlaFail,
    (state, {payload}) => ({
      ...state,
      loading: false
    }))
);

export function dvlaReducer(state: DvlaState | undefined, action: Action) {
  return _dvlaReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adaptor.getSelectors();

export const all = (state: DvlaState) => selectAll(state);

export const getByRegistration = (state: DvlaState, registration: string): DvlaVehicle | undefined => 
  selectAll(state).find(x => x.registration.toLowerCase() === registration.toLowerCase());

export const getLoading = (state: DvlaState) => state.loading;
export const getLoaded = (state: DvlaState) => state.loaded;