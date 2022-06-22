import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MotLookupService } from "../services/mot-lookup.service";
import * as motActions from '../actions/mot.actions';
import { catchError, map, mergeMap, of } from "rxjs";
@Injectable()
export class MotEffects {
  constructor(private actions$: Actions,
    private motlookupService: MotLookupService) {

  }

  loadMot$ = createEffect(() => this.actions$
    .pipe(
      ofType(motActions.loadMot),
      mergeMap(({payload}) => this.motlookupService.get(payload)
        .pipe(
          map((response) => motActions.loadMotSuccess({payload: response})),
          catchError((error) => of(motActions.loadMotFail({payload: error})))
        ))
    ));
}