import { createAction, props } from "@ngrx/store";
import { DvlaRequest } from "../models/dvla-request.model";
import { DvlaResponse } from "../models/dvla-response.model";
import { DvlaVehicle } from "../models/dvla-vehicle.model";

export const loadDvla = createAction(
  '[DVLA] load DVLA info',
  props<{payload: DvlaRequest}>()
);

export const loadDvlaSuccess = createAction(
  '[DVLA] load DVLA info success',
  props<{payload: DvlaResponse}>()
);

export const loadDvlaFail = createAction(
  '[DVLA] load DVLA info fail',
  props<{payload: Error}>()
);