import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotLookupService } from './services/mot-lookup.service';
import { MotDetailsComponent } from './controls/mot-details/mot-details.component';
import { MaterialLibModule } from '../modules/material-lib.module';
import { MotTestService } from './services/mot-test.service';

const components = [
  MotDetailsComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MaterialLibModule
  ],
  exports: [
    ...components
  ],
  providers: [
    MotLookupService,
    MotTestService
  ]
})
export class MotLookupModule { }
