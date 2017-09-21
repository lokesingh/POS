import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditProductComponent } from './category-edit-product.component';

describe('CategoryEditProductComponent', () => {
  let component: CategoryEditProductComponent;
  let fixture: ComponentFixture<CategoryEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
