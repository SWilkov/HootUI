import { createAction, props } from "@ngrx/store";
import { MotRequest } from "../models/mot-request.model";
import { Vehicle } from "../models/vehicle.model";

export const loadMot = createAction(
  '[MOT] load mot',
  props<{payload: MotRequest}>()
);

export const loadMotSuccess = createAction(
  '[MOT] load mot success',
  props<{payload: Vehicle}>()
);

export const loadMotFail = createAction(
  '[MOT] load mot fail',
  props<{payload: Error}>()
);