import { TestBed } from '@angular/core/testing';

import { SingleCarService } from './single-car.service';

describe('SingleCarService', () => {
  let service: SingleCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
