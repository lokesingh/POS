import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomersComponent } from './edit-customers.component';

describe('EditCustomersComponent', () => {
  let component: EditCustomersComponent;
  let fixture: ComponentFixture<EditCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
