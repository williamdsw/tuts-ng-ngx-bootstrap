import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SortableExampleComponent } from './sortable-example.component';

describe('SortableExampleComponent', () => {
  let component: SortableExampleComponent;
  let fixture: ComponentFixture<SortableExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
