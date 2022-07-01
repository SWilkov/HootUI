import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvlaLookupService } from './services/dvla-lookup.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialLibModule } from '../modules/material-lib.module';
import { DvlaInfoComponent } from './controls/dvla-info/dvla-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ControlsModule } from '../components/controls.module';

const components = [
  DvlaInfoComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialLibModule,
    FontAwesomeModule,
    ControlsModule
  ],
  exports: [
    ...components
  ],
  providers: [
    DvlaLookupService
  ]
})
export class DvlaModule { }
