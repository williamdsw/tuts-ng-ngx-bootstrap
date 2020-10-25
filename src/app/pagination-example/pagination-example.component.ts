import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-pagination-example',
  templateUrl: './pagination-example.component.html'
})
export class PaginationExampleComponent implements OnInit {

  // FIELDS

  public maxSize = 10;
  public totalItems = 200;
  public currentPage = 1;

  public contentArray = new Array(90).fill('');
  public returnedArray: string[] = [];

  // CONSTRUCTOR

  constructor() { }

  // LIFE CYCLE HOOKS

  ngOnInit(): void {
    this.contentArray = this.contentArray.map ((value: string, index: number) => `Content line ${index + 1}`);
    this.returnedArray = this.contentArray.slice (0, 10);
  }

  // HELPER FUNCTIONS

  onPageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice (startItem, endItem);
  }
}
