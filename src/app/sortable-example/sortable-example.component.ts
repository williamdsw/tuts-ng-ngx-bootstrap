import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable-example',
  templateUrl: './sortable-example.component.html'
})
export class SortableExampleComponent implements OnInit {

  // FIELDS

  public hardRockBands: string[] = [
    'Whitesnake', 'AC/DC', 'Thin Lizzy', 'Kiss'
  ];
  public heavyMetalBands: string[] = [
    'Iron Maiden', 'Metallica', 'Slayer', 'Helloween', 'Judas Priest'
  ];

  public rockBands = [
    { id: 1, name: 'The Beatles' },
    { id: 2, name: 'Rolling Stones' },
    { id: 3, name: 'Pink Floyd' },
  ];

  public newWaveBands = [
    { id: 1, name: 'Duran Duran' },
    { id: 2, name: 'A-ha' },
    { id: 3, name: 'Japan' },
    { id: 4, name: 'Ultravox' },
    { id: 5, name: 'Tears for Fears' },
  ];

  // CONSTRUCTOR

  constructor() { }

  // LIFECYCLE HOOKS

  ngOnInit(): void {}

}
