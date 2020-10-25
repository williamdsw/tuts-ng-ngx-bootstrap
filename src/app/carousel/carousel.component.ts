import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  slides = [
    {
      src: 'https://picsum.photos/id/0/5616/3744.jpg',
      alt: 'First Image',
      header: 'First label',
      body: 'Image discription here',
    },
    {
      src: 'https://picsum.photos/id/1/5616/3744.jpg',
      alt: 'Second Image',
      header: 'Second label',
      body: 'Image discription here',
    },
    {
      src: 'https://picsum.photos/id/2/5616/3744.jpg',
      alt: 'Third Image',
      header: 'Third label',
      body: 'Image discription here',
    },
    {
      src: 'https://picsum.photos/id/3/5616/3744.jpg',
      alt: 'Fourth Image',
      header: 'Fourth label',
      body: 'Image discription here',
    },
  ];

  public slideInterval = 2000;

  constructor() {}

  ngOnInit(): void {}
}
