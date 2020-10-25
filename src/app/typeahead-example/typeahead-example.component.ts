import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typeahead-example',
  templateUrl: './typeahead-example.component.html',
})
export class TypeaheadExampleComponent implements OnInit {

  public placeholder = 'Type a band...';

  public bands: string[] = [
    'Black Sabbath', 'KISS', 'Soundgarden', 'Alice In Chains', 'Metallica',
    'AC/DC', 'Tool', 'The Beatles', 'Ted Nugent', 'Nine Inch Nails',
    'Iron Maiden', 'Megadeth', 'Whitesnake'
  ];
  public currentBand: string;

  public otherBands: any[] = [
    { id: 1, name: 'Guns n Roses', genre: 'Heavy Metal' },
    { id: 2, name: 'Poison', genre: 'Glam Metal' },
    { id: 3, name: 'Deep Purple', genre: 'Hard Rock' },
    { id: 4, name: 'UFO', genre: 'Hard Rock' },
    { id: 5, name: 'Stone Temple Pilots', genre: 'Grunge' },
    { id: 6, name: 'Pearl Jam', genre: 'Grunge' },
    { id: 7, name: 'Led Zeppelin', genre: 'Classic Rock' },
    { id: 8, name: 'Kansas', genre: 'Progressive Rock' },
    { id: 9, name: 'Tom Petty and The Heartbreakers', genre: 'Country Rock' },
    { id: 10, name: 'The Clash', genre: 'Punk Rock' },
    { id: 11, name: 'Billy Idol', genre: 'Punk Rock' },
  ];

  public currentOtherBand: string;

  constructor() { }

  ngOnInit(): void {}

}
