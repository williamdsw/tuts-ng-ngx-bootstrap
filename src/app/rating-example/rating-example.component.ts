import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-example',
  templateUrl: './rating-example.component.html',
  styleUrls: ['./rating-example.component.css']
})
export class RatingExampleComponent implements OnInit {

  // FIELDS

  public max: number = 10;
  public currentRate: number = 7;
  public isReadonly: boolean = true;

  public otherCurrentRate: number = 5;
  public overStar: number | undefined;
  public percent: number;
  public labelClass = {
    'label-warning': this.percent < 30,
    'label-info': this.percent >= 30 && this.percent < 70,
    'label-success': this.percent >= 70
  };
  public labelStyle = {
    display: 'inline'
  };

  public customRateFirst: number = 4;
  public customRateSecond: number = 8;

  // CONSTRUCTOR

  constructor() {
    this.onHoveringOver(this.otherCurrentRate);
   }

  // LIFECYCLE HOOKS

  ngOnInit(): void {
  }

  // HELPER FUNCTIONS

  onHoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  onResetStar(): void {
    this.onHoveringOver (this.otherCurrentRate);
    this.overStar = 0;
  }

}
