import { TestBed } from '@angular/core/testing';

import { InvoicedetailSerService } from './invoicedetail-ser.service';

describe('InvoicedetailSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoicedetailSerService = TestBed.get(InvoicedetailSerService);
    expect(service).toBeTruthy();
  });
});
