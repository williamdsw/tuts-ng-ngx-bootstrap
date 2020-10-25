import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html'
})
export class ModalsComponent implements OnInit {

  public modalRef: BsModalRef;
  public items: any[];
  public modalMessage: string;
  public modalConfigFirst = { animated: false };
  public modalConfigSecond = { keyboard: true };

  private changeProperties = false;

  constructor(private modalService: BsModalService) {
    this.items = Array(15).fill(0);
  }

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>, modalConfig?: any) {
    this.modalRef = this.modalService.show(template, modalConfig);
  }

  onConfirm() {
    this.modalMessage = 'Accepted!';
    this.modalRef.hide ();
  }

  onDecline() {
    this.modalMessage = 'Declined!';
    this.modalRef.hide ();
  }

  toggleModalClass() {
    this.changeProperties = !this.changeProperties;
    const widthClass = this.changeProperties ? 'modal-lg' : 'modal-sm';
    this.modalRef.setClass (widthClass);
  }
}
