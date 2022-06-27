import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule
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
