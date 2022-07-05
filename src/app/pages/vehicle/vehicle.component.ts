import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Vehicle } from 'src/app/mot/models/vehicle.model';
import { AppState } from 'src/app/reducers/root-index';
import { Store } from '@ngrx/store';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import * as searchSelectors from '../../selectors/search.selector';
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
      
     }

  ngOnInit(): void {    
      this.currentRegistration$ = this.store.select(searchSelectors.selectCurrentRegistration);
  }

  ngOnDestroy(): void {
    this.vehicleSubscription?.unsubscribe();
    this.vehicleLoadingSubscription?.unsubscribe();
  }

}
