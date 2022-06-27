import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version: string = '';
  year: number = 2022;

  constructor(private router: Router) { }

  ngOnInit() {
    this.version = '1.6.0';    
    this.year = new Date().getFullYear();
  }

  gotoContact(): void {
    this.router.navigate(['/contact']);
  }
}
