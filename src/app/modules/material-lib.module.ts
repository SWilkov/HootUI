import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    
  ],
  imports: [
   CommonModule,   
  ],
  exports: [
    ...modules
  ]
})
export class MaterialLibModule { }
