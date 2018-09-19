import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerClusterDemoComponentComponent } from './marker-cluster-demo-component.component';

describe('MarkerClusterDemoComponentComponent', () => {
  let component: MarkerClusterDemoComponentComponent;
  let fixture: ComponentFixture<MarkerClusterDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerClusterDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerClusterDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
