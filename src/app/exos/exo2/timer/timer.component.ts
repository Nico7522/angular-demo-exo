import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  secondes: number;
  minutes: number;
  heures: number;
  isDisable: boolean;
  btnDisable = false;
  constructor() {
    this.secondes = 50;
    this.minutes = 59;
    this.heures = 23;
    this.isDisable = false;
  }

  addTime() {
    const time = setInterval(() => {
      this.btnDisable = false;
      this.secondes += 1;
      if (this.secondes > 59) {
        this.secondes = 0;
        this.minutes += 1;
      }
      if (this.minutes > 59) {
        this.secondes = 0;
        this.minutes = 0;
        this.heures += 1;
      }
      if (this.heures > 23) {
        this.heures = 0;
        this.minutes = 0;
        this.secondes = 0;
      }
      if (this.isDisable === true) {
        clearInterval(time);
        this.isDisable = false;
      }
    }, 1000);
  }

  removeTimer() {
    this.secondes = 0;
    this.minutes = 0;
    this.heures = 0;
    this.btnDisable = true;
  }
}
