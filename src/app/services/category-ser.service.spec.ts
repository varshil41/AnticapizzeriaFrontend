import { TestBed } from '@angular/core/testing';

import { CategorySerService } from '../services/category-ser.service';

describe('CategorySerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorySerService = TestBed.get(CategorySerService);
    expect(service).toBeTruthy();
  });
});
