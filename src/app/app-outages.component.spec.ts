import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOutagesComponent } from './app-outages.component';

describe('AppOutagesComponent', () => {
  let component: AppOutagesComponent;
  let fixture: ComponentFixture<AppOutagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOutagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOutagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
