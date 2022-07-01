import { Component, OnInit } from '@angular/core';
import { faCarOn, faIdCard, faDatabase, IconDefinition,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'carid-help-info',
  templateUrl: './help-info.component.html',
  styleUrls: ['./help-info.component.scss']
})
export class HelpInfoComponent implements OnInit {
  faIdCard: IconDefinition = faIdCard;
  faCarOn: IconDefinition = faCarOn;
  faDatabase: IconDefinition = faDatabase;
  
  constructor() { }

  ngOnInit(): void {
  }

}
