import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: []
})
export class AlertsComponent implements OnInit {

  // FIELDS

  alerts = [
    { type: 'success', title: 'Well Done!', body: 'Success alert message.' },
    { type: 'info', title: 'Heads up!', body: 'Additional information message.' },
    { type: 'warning', title: 'Warning!', body: 'Warning alert message.' },
    { type: 'danger', title: 'Oh snap!', body: 'Danger alert message.' },
  ];

  dismissableAlerts = [
    { type: 'success', title: 'Well Done!', body: 'Success alert message.' },
    { type: 'info', title: 'Heads up!', body: 'Additional information message.' },
    { type: 'warning', title: 'Warning!', body: 'Warning alert message.' },
    { type: 'danger', title: 'Oh snap!', body: 'Danger alert message.' },
  ];

  dismissible = true;

  messages: string[] = [
    'Lorem ipsum dolor sit amet.',
    'Neque porro quisquam est qui dolorem.',
    'Ipsum quia dolor sit amet, consectetur, adipisci velit...'
  ];

  currentIndex = 0;

  // CONSTRUCTOR

  constructor() { }

  // LIFE CYCLE HOOKS

  ngOnInit(): void {}

  // HELPER FUNCTIONS

  onCloseAlert(dismissedAlert: any): void {
    this.dismissableAlerts = this.dismissableAlerts.filter (alert => alert !== dismissedAlert);
  }

  onReset(): void {
    this.dismissableAlerts = this.alerts;
  }

  onChangeText(): void {
    if (this.messages.length - 1 !== this.currentIndex) {
      this.currentIndex++;
    }
  }
}
