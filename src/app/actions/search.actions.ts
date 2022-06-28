import { createAction, props } from "@ngrx/store";

export const toggleDvlaSearch = createAction(
  '[SEARCH] toggle dvla search'
);

export const setRegistration = createAction(
  '[SEARCH] set registration',
  props<{payload: string}>()
);

