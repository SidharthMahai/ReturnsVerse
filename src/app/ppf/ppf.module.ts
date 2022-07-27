import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpfComponent } from './ppf.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule
  ],
  declarations: [PpfComponent]
})
export class PpfModule { }
