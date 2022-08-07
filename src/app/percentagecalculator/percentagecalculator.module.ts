
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentagecalculatorComponent } from './percentagecalculator.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [PercentagecalculatorComponent]
})
export class PercentagecalculatorModule { }
