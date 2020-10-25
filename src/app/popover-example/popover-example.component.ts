import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-example',
  templateUrl: './popover-example.component.html'
})
export class PopoverExampleComponent implements OnInit {

  // FIELDS

  public popovers = [
    { title: 'Popover on top', content: 'First...', placement: 'top' },
    { title: 'Popover on right', content: 'Second...', placement: 'right' },
    { title: 'Popover on left', content: 'Third...', placement: 'left' },
    { title: 'Popover on bottom', content: 'Fourth...', placement: 'bottom' },
    { title: 'Popover on auto', content: 'Fifth...', placement: 'auto' },
  ];

  constructor() { }

  ngOnInit(): void {}

}
