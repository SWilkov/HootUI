import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carid-home-image',
  templateUrl: './home-image.component.html',
  styleUrls: ['./home-image.component.scss']
})
export class HomeImageComponent implements OnInit {
  @Input() mainImageUrl: string = '';
  @Input() secondImageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  get main() {
    return `url('${this.mainImageUrl}')`;
  }

  get second() {
    return `url('${this.secondImageUrl}')`;
  }
}
