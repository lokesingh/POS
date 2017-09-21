import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoreTableComponent } from './edit-store-table.component';

describe('EditStoreTableComponent', () => {
  let component: EditStoreTableComponent;
  let fixture: ComponentFixture<EditStoreTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStoreTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
