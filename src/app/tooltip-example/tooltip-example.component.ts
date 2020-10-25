import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html'
})
export class TooltipExampleComponent implements OnInit {

  // FIELDS

  public tooltips = [
    { title: 'Tooltip on top', content: 'First...', placement: 'top' },
    { title: 'Tooltip on right', content: 'Second...', placement: 'right' },
    { title: 'Tooltip on left', content: 'Third...', placement: 'left' },
    { title: 'Tooltip on bottom', content: 'Fourth...', placement: 'bottom' },
    { title: 'Tooltip on auto', content: 'Fifth...', placement: 'auto' },
  ];

  constructor() { }

  ngOnInit(): void {}

}
