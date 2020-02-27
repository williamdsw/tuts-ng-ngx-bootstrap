import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  // FIELDS

  public bsInlineValue = new Date();
  public bsInlineRangeValue: Date[] = [];
  private maxDate = new Date();

  public bsConfigFirst = { isAnimated: true };
  public bsConfigSecond = { adaptivePosition: true };
  public bsConfigThird = { dateInputFormat: 'YYYY-MM-DD' };
  public bsConfigFourth = { dateInputFormat: 'MM/DD/YYYY' };
  public bsConfigFifth = { dateInputFormat: 'MMMM Do YYYY, h:mm:ss a' };

  public themes: string[] = [
    'theme-default', 'theme-green', 'theme-blue', 'theme-dark-blue', 'theme-red', 'theme-orange'
  ];
  public colorTheme: string = 'theme-green';
  public bsConfigCustom: Partial<BsDatepickerConfig>;

  public currentLocale: string = 'en';
  public locales = listLocales ();

  public minDate: Date = new Date();
  public otherMaxDate: Date = new Date();

  public daysDisabled: number[] = [
    0, //SUNDAY
    6, //SATURDAY
  ];

  public datesDisabled: Date[] = [
    new Date ('2020-02-01'),
    new Date ('2020-03-02'),
    new Date ('2020-04-03'),
  ];

  // CONSTRUCTOR

  constructor(private localeService: BsLocaleService) {
    this.maxDate.setDate (this.maxDate.getDate () + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];

    this.minDate.setDate (this.minDate.getDate () - 1);
    this.otherMaxDate.setDate (this.otherMaxDate.getDate () + 7);
  }

  // LIFE CYCLE HOOKS

  ngOnInit(): void {
  }

  // HELPER FUNCTIONS

  applyTheme(datepicker: any) : void {
    this.bsConfigCustom = Object.assign ({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      datepicker.show ();
    });
  }

  applyLocale(datepicker: any) {
    this.localeService.use (this.currentLocale);
    datepicker.hide ();
    datepicker.show ();
  }
}
