import { TestBed } from '@angular/core/testing';

import { ItemSerService } from './item-ser.service';

describe('ItemSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemSerService = TestBed.get(ItemSerService);
    expect(service).toBeTruthy();
  });
});
