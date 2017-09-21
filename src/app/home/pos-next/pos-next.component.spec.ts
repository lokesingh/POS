import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSNextComponent } from './pos-next.component';

describe('POSNextComponent', () => {
  let component: POSNextComponent;
  let fixture: ComponentFixture<POSNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
