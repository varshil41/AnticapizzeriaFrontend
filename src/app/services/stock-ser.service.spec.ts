import { TestBed } from '@angular/core/testing';

import { StockSerService } from './stock-ser.service';

describe('StockSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockSerService = TestBed.get(StockSerService);
    expect(service).toBeTruthy();
  });
});
