import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageComplaintsComponent } from './voltage-complaints.component';

describe('VoltageComplaintsComponent', () => {
  let component: VoltageComplaintsComponent;
  let fixture: ComponentFixture<VoltageComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltageComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltageComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
