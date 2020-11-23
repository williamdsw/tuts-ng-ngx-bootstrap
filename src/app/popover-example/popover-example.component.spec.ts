import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopoverExampleComponent } from './popover-example.component';

describe('PopoverExampleComponent', () => {
  let component: PopoverExampleComponent;
  let fixture: ComponentFixture<PopoverExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
