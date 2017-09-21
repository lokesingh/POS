import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTopEditComponent } from './expense-top-edit.component';

describe('ExpenseTopEditComponent', () => {
  let component: ExpenseTopEditComponent;
  let fixture: ComponentFixture<ExpenseTopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
