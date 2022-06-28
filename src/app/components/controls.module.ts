import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { RegistrationSearchComponent } from './registration-search/registration-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialLibModule } from '../modules/material-lib.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const items = [
  FooterComponent,
  HeaderComponent,
  TopBarComponent,
  HomeInfoComponent,
  RegistrationSearchComponent,
]

@NgModule({
  declarations: [
    ...items],
  imports: [    
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialLibModule,
    FontAwesomeModule
  ],
  exports: [
    ...items
  ]
})
export class ControlsModule { }
