import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carid-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() headerText: string = '';
  @Input() subheaderText: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
