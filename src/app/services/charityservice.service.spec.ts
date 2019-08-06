import { TestBed } from '@angular/core/testing';

import { CharityserviceService } from './charityservice.service';

describe('CharityserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharityserviceService = TestBed.get(CharityserviceService);
    expect(service).toBeTruthy();
  });
});
