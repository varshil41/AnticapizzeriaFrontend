import { TestBed } from '@angular/core/testing';

import { InvoiceSerService } from './invoice-ser.service';

describe('InvoiceSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceSerService = TestBed.get(InvoiceSerService);
    expect(service).toBeTruthy();
  });
});
