import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  checklist: string[] = ['Passes and failures', 'the mileage recorded at the time of the test', 'the location id of the test centre', 'when the vehicle was first registered', 'the next due date for a MOT', 'major and minor parts failures/advisories'];

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('MOT & Dvla information about your vehicle | HOOT.com');
  }
}
