import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosAddComponent } from './pos-add-.component';

describe('PosAddComponent', () => {
  let component: PosAddComponent;
  let fixture: ComponentFixture<PosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
