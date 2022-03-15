import { TestBed } from '@angular/core/testing';

import { AllCarsService } from './all-cars.service';

describe('AllCarsService', () => {
  let service: AllCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
