import { Component, Input, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';
import { MotTest } from '../../models/mot-test.model';

@Component({
  selector: 'carid-mot-test',
  templateUrl: './mot-test.component.html',
  styleUrls: ['./mot-test.component.scss']
})
export class MotTestComponent implements OnInit {
  @Input() tests: MotTest[];
  
  step: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  goto = (index: number) => {
    this.step = index;
  }

  next = () => {
    this.step++;
  }

  previous = () => {
    this.step--;
  }

}
