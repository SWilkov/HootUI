import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvlaLookupService } from './services/dvla-lookup.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialLibModule } from '../modules/material-lib.module';
import { DvlaInfoComponent } from './controls/dvla-info/dvla-info.component';

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
  ],
  exports: [
    ...components
  ],
  providers: [
    DvlaLookupService
  ]
})
export class DvlaModule { }
