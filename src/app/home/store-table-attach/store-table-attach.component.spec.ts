import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTableAttachComponent } from './store-table-attach.component';

describe('StoreTableAttachComponent', () => {
  let component: StoreTableAttachComponent;
  let fixture: ComponentFixture<StoreTableAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreTableAttachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTableAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
