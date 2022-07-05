import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/reducers/root-index';
import { Vehicle } from '../../models/vehicle.model';
import * as searchSelectors from '../../../selectors/search.selector';
import * as motSelectors from '../../selectors/mot.selector';
import * as motActions from '../../actions/mot.actions';
import { MotRequest } from '../../models/mot-request.model';
import { MotTest } from '../../models/mot-test.model';
import { MotTestService } from '../../services/mot-test.service';
import { faMinus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'carid-mot-details',
  templateUrl: './mot-details.component.html',
  styleUrls: ['./mot-details.component.scss']
})
export class MotDetailsComponent implements OnInit, OnDestroy {
  currentRegistration$: Observable<string>;  
  currentRegistrationSubscription: Subscription;
  registration: string = '';

  vehicle$: Observable<Vehicle | undefined>;
  vehicleSubscription: Subscription;
  loading$: Observable<boolean>;

  faMinus: IconDefinition = faMinus;

  constructor(private store: Store<AppState>,
    private motTestService: MotTestService) { }

  ngOnInit(): void {
    this.currentRegistration$ = this.store.select(searchSelectors.selectCurrentRegistration);
    this.vehicle$ = this.store.select(motSelectors.selectByRegistration());    
    this.loading$ = this.store.select(motSelectors.selectLoading);    
  }

  getLatest = (v: Vehicle) => {
    if (v && this.motTestService.hasTests(v)) {
      return v.motTests[0];
    }
    return null;
  }

  ngOnDestroy(): void {
    this.currentRegistrationSubscription?.unsubscribe();
    this.vehicleSubscription?.unsubscribe();
  }
}
