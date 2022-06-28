import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DvlaLookupService } from "../services/dvla-lookup.service";
import * as dvlaActions from '../actions/dvla.actions';
import { catchError, map, mergeMap, of } from "rxjs";
@Injectable()
export class DvlaEffects {

  constructor(private actions$: Actions,
    private dvlaLookupService: DvlaLookupService) {

    }

  loadDvla$ = createEffect(() => this.actions$
    .pipe(
      ofType(dvlaActions.loadDvla),
      mergeMap(({payload}) => this.dvlaLookupService.getById(payload)
        .pipe(
          map((response) => dvlaActions.loadDvlaSuccess({payload: response})),
          catchError((error) => of(dvlaActions.loadDvlaFail({payload: error})))
        ))
    ));
}