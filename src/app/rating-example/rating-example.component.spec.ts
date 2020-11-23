import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RatingExampleComponent } from './rating-example.component';

describe('RatingExampleComponent', () => {
  let component: RatingExampleComponent;
  let fixture: ComponentFixture<RatingExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
