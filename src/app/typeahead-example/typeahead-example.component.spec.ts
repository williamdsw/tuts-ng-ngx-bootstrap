import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypeaheadExampleComponent } from './typeahead-example.component';

describe('TypeheadExampleComponent', () => {
  let component: TypeaheadExampleComponent;
  let fixture: ComponentFixture<TypeaheadExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
