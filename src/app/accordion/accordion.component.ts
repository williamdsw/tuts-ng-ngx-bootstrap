import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styles: []
})
export class AccordionComponent implements OnInit {

  headers: string[] = ['Header One', 'Header Two','Header Three'];
  contents: string[] = ['First content', 'Other content', 'Another content'];
  headerChanged: string = null;
  isDisabled = false;

  accordionGroup = [
    { header: 'Header 1', content: 'Content 1' },
    { header: 'Header 2', content: 'Content 2' },
  ];

  constructor() { }

  ngOnInit() {}

  onHeaderIsOpenChange(headerIndex: number): void {
    this.headerChanged = `${headerIndex}º header was toggled!`;
  }

  addGroupItem(): void {
    this.accordionGroup.push ({
      header: `Header ${this.accordionGroup.length + 1}`,
      content: `Content ${this.accordionGroup.length + 1}`,
    });
  }
}
