import { Injectable } from '@angular/core';
import { StatsForm } from '../enums/stats-form.enum';
import { MileageStatistics } from '../models/mileage-statistics.model';

@Injectable({
  providedIn: 'root'
})
export class MileageStatsService {

  constructor() { }

  getForm = (current: MileageStatistics, previous: MileageStatistics):StatsForm => {
    
    if (current.mileage > previous.mileage) {
      return StatsForm.Up;
    } else if (current.mileage < previous.mileage) {
      return StatsForm.Down;
    } else {
      return StatsForm.Equal;
    }
  }
}
