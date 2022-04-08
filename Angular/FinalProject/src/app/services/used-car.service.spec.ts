import { TestBed } from '@angular/core/testing';

import { UsedCarService } from './used-car.service';

describe('UsedCarService', () => {
  let service: UsedCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsedCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
