import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/root-index';
import { EffectsModule } from '@ngrx/effects';
import { MotEffects } from './mot/effects/mot.effects';
import { HomeComponent } from './pages/home/home.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { TextService } from './mot/services/text.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialLibModule } from './modules/material-lib.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MotLookupModule } from './mot/mot-lookup.module';
import { ControlsModule } from './components/controls.module';
import { DvlaEffects } from './dvla/effects/dvla.effects';
import { DvlaModule } from './dvla/dvla.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    VehicleComponent,    
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialLibModule,
    ControlsModule,
    StoreModule.forRoot(reducers, {
      
    }),
    EffectsModule.forRoot([
      MotEffects,
      DvlaEffects
    ]),
    FontAwesomeModule,
    MotLookupModule,
    DvlaModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports: [
    HomeComponent,
    VehicleComponent,
    VehiclesComponent,    
  ],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
