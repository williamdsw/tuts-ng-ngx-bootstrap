import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from "ngx-bootstrap";

@Component({
  selector: 'app-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.css']
})
export class TabsExampleComponent implements OnInit {

  // FIELDS

  @ViewChild('toggleTabs', { static: false })
  public toggleTabs: TabsetComponent;

  public tabs: any[] = [
    { title: 'Title 1', content: 'Content 1', customClass: 'red-tab' },
    { title: 'Title 2', content: 'Content 2', customClass: 'green-tab' },
    { title: 'Title 3', content: 'Content 3', customClass: 'blue-tab' },
  ];

  // CONSTRUCTOR

  constructor() { }

  // LIFECYCLE HOOKS

  ngOnInit(): void {
  }

  // HELPER FUNCTIONS

  onToggleTabs(): void {
    this.toggleTabs.tabs.forEach (tab => {
      tab.disabled = !tab.disabled;
    });
  }
}
