import { Component, Input, OnInit } from '@angular/core';
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
@Component({
  selector: 'carid-mot-details',
  templateUrl: './mot-details.component.html',
  styleUrls: ['./mot-details.component.scss']
})
export class MotDetailsComponent implements OnInit {
  currentRegistration$: Observable<string>;  
  currentRegistrationSubscription: Subscription;

  vehicle$: Observable<Vehicle | undefined>;
  vehicleSubscription: Subscription;

  constructor(private store: Store<AppState>,
    private motTestService: MotTestService) { }

  ngOnInit(): void {
    this.currentRegistration$ = this.store.select(searchSelectors.selectCurrentRegistration);
    this.currentRegistrationSubscription = this.currentRegistration$.subscribe(reg => {
      if (reg) {
        this.vehicle$ = this.store.select(motSelectors.selectByRegistration(reg));
        this.vehicleSubscription = this.vehicle$.subscribe(v => {
          if (v === undefined || v === null) {
            let request: MotRequest = {
              registration: reg,
              vehicleId: ''
            };
            this.store.dispatch(motActions.loadMot({payload: request}));         
          }  
        });
      }
    });

    let req: MotRequest = {
      registration: '',
      vehicleId: ''
    };
    this.store.dispatch(motActions.loadMot({payload: req}));    
    this.vehicle$ = this.store.select(motSelectors.selectByRegistration('AE15XUX'));
  }

  getLatest = (v: Vehicle) => {
    if (v && this.motTestService.hasTests(v)) {
      return v.motTests[0];
    }
    return null;
  }
}
