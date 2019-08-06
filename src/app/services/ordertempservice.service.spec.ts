import { TestBed } from '@angular/core/testing';

import { OrdertempserviceService } from './ordertempservice.service';

describe('OrdertempserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdertempserviceService = TestBed.get(OrdertempserviceService);
    expect(service).toBeTruthy();
  });
});
