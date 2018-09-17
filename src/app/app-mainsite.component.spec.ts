import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainsiteComponent } from './app-mainsite.component';

describe('AppMainsiteComponent', () => {
  let component: AppMainsiteComponent;
  let fixture: ComponentFixture<AppMainsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
