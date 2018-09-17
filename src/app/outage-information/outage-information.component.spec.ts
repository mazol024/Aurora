import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutageInformationComponent } from './outage-information.component';

describe('OutageInformationComponent', () => {
  let component: OutageInformationComponent;
  let fixture: ComponentFixture<OutageInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutageInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
