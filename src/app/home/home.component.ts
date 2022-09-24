import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
timerActive: boolean = true;
  constructor() {
    this.startCountdown(2);
   }

  ngOnInit() {
  }

   startCountdown(seconds) {
    let counter = seconds;
      
    const interval = setInterval(() => {
      counter--;
      if (counter < 0 ) {
        this.timerActive = false;
        clearInterval(interval);
      }
    }, 1000);
  }

}
