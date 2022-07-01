import { Component, Input, OnInit } from '@angular/core';
import { MileageStatistics } from '../../models/mileage-statistics.model';
import { faArrowDown, faArrowUp, faEquals, faMinus, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { MileageStatsService } from '../../services/mileage-stats.service';
import { StatsForm } from '../../enums/stats-form.enum';

@Component({
  selector: 'carid-mileage-stats',
  templateUrl: './mileage-stats.component.html',
  styleUrls: ['./mileage-stats.component.scss']
})
export class MileageStatsComponent implements OnInit {
  @Input() stats: MileageStatistics[];
  faArrowUp: IconDefinition = faArrowUp;
  faArrowDown: IconDefinition = faArrowDown;
  faEquals: IconDefinition = faEquals;
  faMinus: IconDefinition = faMinus;
  constructor(private statsService: MileageStatsService) { }

  ngOnInit(): void {
    
  }

  getForm = (index: number): IconDefinition => {  
    if (index === 0) {
      return faMinus;
    }
    let form = this.statsService.getForm(this.stats[index], this.stats[index - 1]);

    switch(form) {
      case StatsForm.Up:
        return faArrowUp;
      case StatsForm.Down:
        return faArrowDown;
      case StatsForm.Equal:
        return faEquals;
      default:
        return faMinus;
    }
  }

}
