import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginationExampleComponent } from './pagination-example.component';

describe('PaginationExampleComponent', () => {
  let component: PaginationExampleComponent;
  let fixture: ComponentFixture<PaginationExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
