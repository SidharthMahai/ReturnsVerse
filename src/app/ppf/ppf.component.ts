import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { PPF } from '../models/ppf';

@Component({
  selector: 'app-ppf',
  templateUrl: './ppf.component.html',
  styleUrls: ['./ppf.component.scss']
})
export class PpfComponent implements OnInit {
investment: number = 500;
years: number = 15;
valueChange: boolean = false;
PPFList: Array<PPF> = [];
currentYear: Date;
amountInvested: number;
maturityAmount: number;
profit: number;

  constructor() { }

  ngOnInit() {
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  onInputChange(event: MatSliderChange) {
    this.valueChange = true;
  this.investment = event.value;
  this.calculateReturnsOnPPF(this.investment, this.years);
}
onYearChange(event: MatSliderChange) {
  this.valueChange = true;
  this.years = event.value;
  this.calculateReturnsOnPPF(this.investment, this.years);
}

calculateReturnsOnPPF(investmentYearly: number, years: number)
{
  this.PPFList = [];
  for(var x=0;x<years;x++)
  {
    let obj = new PPF();
    if(x==0)
    {
      obj.year = new Date().getFullYear();
      obj.newInvestment = investmentYearly;
      obj.totalInvestment = investmentYearly;
      obj.interest = Math.round(0.071*obj.totalInvestment);
      obj.investmentIncludingInterest = obj.totalInvestment + obj.interest;
      this.PPFList.push(obj);
    }
    else{
      obj.year = this.PPFList[x-1].year + 1;
      obj.newInvestment = investmentYearly;
      obj.totalInvestment = investmentYearly + this.PPFList[x-1].investmentIncludingInterest;
      obj.interest = Math.round(0.071*obj.totalInvestment);
      obj.investmentIncludingInterest = obj.totalInvestment + obj.interest;
      this.PPFList.push(obj);
    }
  }

  this.amountInvested = this.PPFList.reduce((accumulator, obj) =>{
    return accumulator + obj.newInvestment;
  },0);

  this.maturityAmount = this.PPFList[this.years-1].investmentIncludingInterest;


  this.profit = this.maturityAmount - this.amountInvested;

}

}
