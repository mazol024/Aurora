import { TestBed } from '@angular/core/testing';

import { OutagesService } from './outages.service';

describe('OutagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutagesService = TestBed.get(OutagesService);
    expect(service).toBeTruthy();
  });
});
