import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  // FIELDS

  public max: number = 100;
  public showWarning: boolean = false;
  public dynamicValue: number;
  public type: string;

  // CONSTRUCTOR

  constructor() {
    this.randomize();
  }

  // LIFECYCLE HOOKS

  ngOnInit(): void {
  }

  // HELPER FUNCTIONS

  randomize(): void {
    let value = Math.floor (Math.random () * 100 + 1);
    let progressBarType: string;

    if (value < 25) {
      progressBarType = 'success';
    } else if (value < 50) {
      progressBarType = 'info';
    } else if (value < 75) {
      progressBarType = 'warning';
    } else {
      progressBarType = 'danger';
    }

    this.dynamicValue = value;
    this.type = progressBarType;
  }
}
