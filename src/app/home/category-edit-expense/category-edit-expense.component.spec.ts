import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditExpenseComponent } from './category-edit-expense.component';

describe('CategoryEditExpenseComponent', () => {
  let component: CategoryEditExpenseComponent;
  let fixture: ComponentFixture<CategoryEditExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
