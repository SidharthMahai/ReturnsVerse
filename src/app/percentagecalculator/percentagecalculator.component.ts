import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentagecalculator',
  templateUrl: './percentagecalculator.component.html',
  styleUrls: ['./percentagecalculator.component.scss'],
})
export class PercentagecalculatorComponent implements OnInit {
  initialValue: number;
  finalValue: number;
  percentageValue: number;
  differenceValue: number;
  constructor() {}

  ngOnInit() {}

  onInitialChange() {
    if (this.initialValue && this.finalValue) {
      this.differenceValue = this.finalValue - this.initialValue;
      this.percentageValue = (100 * this.differenceValue) / this.initialValue;
      this.percentageValue = Math.round(this.percentageValue * 100) / 100;
    }
    if (this.initialValue && this.percentageValue && !this.finalValue) {
      this.finalValue =
        this.initialValue + (this.percentageValue / 100) * this.initialValue;
      this.finalValue = Math.round(this.finalValue * 100) / 100;
      this.differenceValue = this.finalValue - this.initialValue;
      this.percentageValue = (100 * this.differenceValue) / this.initialValue;
      this.percentageValue = Math.round(this.percentageValue * 100) / 100;
    }
  }

  onFinalChange() {
    if (this.initialValue && this.finalValue && !this.percentageValue) {
      this.differenceValue = this.finalValue - this.initialValue;
      this.percentageValue = (100 * this.differenceValue) / this.initialValue;
      this.percentageValue = Math.round(this.percentageValue * 100) / 100;
    }
    if (this.finalValue && this.percentageValue) {
      this.initialValue = this.finalValue / (1 + this.percentageValue / 100);
      this.initialValue = Math.round(this.initialValue * 100) / 100;
      this.differenceValue = this.finalValue - this.initialValue;
    }
  }

  onPercentageChange() {
    if (this.initialValue && this.percentageValue && !this.finalValue) {
      this.finalValue =
        this.initialValue + (this.percentageValue / 100) * this.initialValue;
      this.finalValue = Math.round(this.finalValue * 100) / 100;
      this.differenceValue = this.finalValue - this.initialValue;
    }
    if (this.percentageValue && this.finalValue) {
      this.initialValue = this.finalValue / (1 + this.percentageValue / 100);
      this.initialValue = Math.round(this.initialValue * 100) / 100;
      this.differenceValue = this.finalValue - this.initialValue;
    }
  }
}
