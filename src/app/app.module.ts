import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MotLookupService } from './services/mot-lookup.service';
import { reducers } from './reducers/root-index';
import { EffectsModule } from '@ngrx/effects';
import { MotEffects } from './effects/mot.effects';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextService } from './services/text.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationSearchComponent } from './components/registration-search/registration-search.component';
import { MaterialLibModule } from './modules/material-lib.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    VehicleComponent,
    FooterComponent,
    RegistrationSearchComponent,
    TopBarComponent,
    HomeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialLibModule,
    StoreModule.forRoot(reducers, {
      
    }),
    EffectsModule.forRoot([
      MotEffects
    ]),
    FontAwesomeModule
  ],
  exports: [
    HomeComponent,
    RegistrationSearchComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent, HomeInfoComponent
  ],
  providers: [MotLookupService, TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
