import { Action, createReducer } from "@ngrx/store";
import { Vehicle } from "../models/vehicle.model";

export interface MotState {
  list: Vehicle[];
  loading: boolean;
  loaded: boolean;
}

const initState: MotState = {
  list: [],
  loaded: false,
  loading: false
};

const _motReducer = createReducer(
  initState
);

export function motReducer(state: MotState, action: Action) {
  return _motReducer(state, action);
}

