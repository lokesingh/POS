import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTopNavComponent } from './expense-top-nav.component';

describe('ExpenseTopNavComponent', () => {
  let component: ExpenseTopNavComponent;
  let fixture: ComponentFixture<ExpenseTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
