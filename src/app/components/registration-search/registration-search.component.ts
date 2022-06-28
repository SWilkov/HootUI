import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, switchMap, debounceTime } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { map } from 'rxjs/operators';
import { TextService } from 'src/app/mot/services/text.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers/root-index';
import { Vehicle } from 'src/app/mot/models/vehicle.model';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import * as searchActions from '../../actions/search.actions';
import * as searchSelectors from '../../selectors/search.selector';
import { MatCheckboxChange } from '@angular/material/checkbox';
export interface SearchFormProps {
  searchText: FormControl<string|null>;
}

@Component({
  selector: 'app-registration-search',
  templateUrl: './registration-search.component.html',
  styleUrls: ['./registration-search.component.scss']
})
export class RegistrationSearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  registration: string | null | undefined = '' ;
  searchForm: FormGroup<SearchFormProps> = new FormGroup<SearchFormProps>({
    searchText: new FormControl('', [Validators.required])
  });
  faSearch: IconDefinition = faSearch;

  vehicle$: Observable<Vehicle> | undefined;
  vehicle: Vehicle | undefined;

  includeDvla$: Observable<boolean>;
  
  constructor(private store: Store<AppState>,
    private textService: TextService,
    private router: Router) { }

  ngOnInit() {
    this.includeDvla$ = this.store.select(searchSelectors.selectIncludeDvla);

    this.subscription =
      this.searchForm.controls.searchText?.valueChanges
        .pipe(
          debounceTime(150),
          distinctUntilChanged()
        )
        .subscribe((input) => {          
          if (input) {
            this.searchForm.controls.searchText.patchValue(input.toUpperCase(), {emitEvent: false});
          }
        });    
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  search() {    
    this.registration = this.searchForm.value.searchText;
    this.registration?.trim();
    if (this.registration) {
      let cleanRegistration = this.textService.clean(this.registration);
      this.searchForm.controls.searchText?.setValue(cleanRegistration);
      this.router.navigate([`vehicles/${cleanRegistration}`]);
    }
   }  

   includeDvlaChanged = (change: MatCheckboxChange) => {
    if (change) {
      this.store.dispatch(searchActions.toggleDvlaSearch());
    }
   }
}
