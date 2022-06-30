import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotLookupService } from './services/mot-lookup.service';
import { MotDetailsComponent } from './controls/mot-details/mot-details.component';
import { MaterialLibModule } from '../modules/material-lib.module';
import { MotTestService } from './services/mot-test.service';
import { MileageStatsComponent } from './controls/mileage-stats/mileage-stats.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MileageStatsService } from './services/mileage-stats.service';
import { MotTestComponent } from './controls/mot-test/mot-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsModule } from '../components/controls.module';
const components = [
  MotDetailsComponent,
  MileageStatsComponent,
  MotTestComponent
]

@NgModule({
  declarations: [
    ...components,
    MotTestComponent,    
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialLibModule,
    FontAwesomeModule,
    ControlsModule
  ],
  exports: [
    ...components
  ],
  providers: [
    MotLookupService,
    MotTestService,
    MileageStatsService
  ]
})
export class MotLookupModule { }
