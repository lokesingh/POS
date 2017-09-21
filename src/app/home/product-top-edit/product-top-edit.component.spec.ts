import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopEditComponent } from './product-top-edit.component';

describe('ProductTopEditComponent', () => {
  let component: ProductTopEditComponent;
  let fixture: ComponentFixture<ProductTopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
