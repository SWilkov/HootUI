import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Vehicle } from 'src/app/mot/models/vehicle.model';
import { map, switchMap } from 'rxjs/operators';
import * as motActions from '../../mot/actions/mot.actions';
import * as motSelectors from '../../mot/selectors/mot.selector';
import { AppState } from 'src/app/reducers/root-index';
import { Store } from '@ngrx/store';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import * as searchSelectors from '../../selectors/search.selector';
import * as searchActions from '../../actions/search.actions';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, OnDestroy {
  
  vehicle$: Observable<Vehicle | undefined | null>;
  vehicleLoading$: Observable<boolean>;
  vehicleLoadingSubscription: Subscription;

  vehicleSubscription: Subscription;
  spinnerMode: ProgressSpinnerMode = 'determinate';

  includeDvlaSearch$: Observable<boolean>;
  currentRegistration$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private route:ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta) {
      console.log('Vehicle const...');
     }

  ngOnInit(): void {    

      // this.currentRegistration$ = this.route.paramMap
      //   .pipe(
      //     switchMap(params => {
      //       const registration = params.get('registration');

      //       if (registration) {
      //         this.store.dispatch(searchActions.setRegistration({payload: registration}));
      //         return this.store.select(searchSelectors.selectCurrentRegistration);
      //       }
      //       return of('');            
      //     })
      //   );   

      this.currentRegistration$ = this.store.select(searchSelectors.selectCurrentRegistration);
  }

  ngOnDestroy(): void {
    this.vehicleSubscription?.unsubscribe();
    this.vehicleLoadingSubscription?.unsubscribe();
  }

}
