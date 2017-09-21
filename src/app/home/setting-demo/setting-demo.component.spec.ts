import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingDemoComponent } from './setting-demo.component';

describe('SettingDemoComponent', () => {
  let component: SettingDemoComponent;
  let fixture: ComponentFixture<SettingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
