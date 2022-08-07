import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentagecalculator',
  templateUrl: './percentagecalculator.component.html',
  styleUrls: ['./percentagecalculator.component.scss']
})
export class PercentagecalculatorComponent implements OnInit {
initialValue: number;
finalValue: number;
percentageValue: number;
differenceValue: number;
  constructor() { }

  ngOnInit() {
  }

  onInitialChange(event: any) {
    this.initialValue = event.value;
    
  }

  onFinalChange(event: any) {

  }

  onPercentageChange(event: any) {

  }

  onDifferenceChange(event: any) {

  }

}
