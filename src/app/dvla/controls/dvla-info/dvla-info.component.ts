import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/reducers/root-index';
import * as searchSelectors from '../../../selectors/search.selector';
import { DvlaVehicle } from '../../models/dvla-vehicle.model';
import * as dvlaSelectors from '../../selectors/dvla.selector';
import * as dvlaActions from '../../actions/dvla.actions';
import { DvlaRequest } from '../../models/dvla-request.model';
import { DvlaInfo } from '../../models/dvla-info.model';
import { TaxStatus } from '../../enums/tax-status.enum';
import { faCircleQuestion, IconDefinition, faMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'carid-dvla-info',
  templateUrl: './dvla-info.component.html',
  styleUrls: ['./dvla-info.component.scss']
})
export class DvlaInfoComponent implements OnInit {
  
  currentRegistration$: Observable<string>;  
  currentRegistrationSubscription: Subscription;

  dvlaVehicle$: Observable<DvlaVehicle | undefined>;
  dvlaVehicleSubscription: Subscription;
  faCircleQuestion: IconDefinition = faCircleQuestion;
  faMinus: IconDefinition = faMinus;

  constructor(private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    this.currentRegistration$ = this.store.select(searchSelectors.selectCurrentRegistration);
    this.currentRegistrationSubscription = this.currentRegistration$.subscribe(reg => {
      if (reg) {
        this.dvlaVehicle$ = this.store.select(dvlaSelectors.selectByRegistration(reg));
        this.dvlaVehicleSubscription = this.dvlaVehicle$.subscribe(v => {
          if (v === undefined || v === null) {
            let request: DvlaRequest = {
              registration: reg
            };
            this.store.dispatch(dvlaActions.loadDvla({payload: request}));
          }  
        });
      }
    });

    const req: DvlaRequest = {
      registration: 'AE15XUX'
    }

    this.store.dispatch(dvlaActions.loadDvla({payload: req}));
    this.dvlaVehicle$ = this.store.select(dvlaSelectors.selectByRegistration('GV17XEN'));
  }

  getTaxStatus = (status: string): TaxStatus => {
    if (status) {
       switch(status.toLowerCase()) {
        case 'taxed': 
          return TaxStatus.Taxed;
        case 'untaxed':
          return TaxStatus.Untaxed;
        default:
          return TaxStatus.Unknown;
       }
    } else {
      return TaxStatus.Unknown;
    }
  }

}
