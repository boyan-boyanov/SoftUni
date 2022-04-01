import { TestBed } from '@angular/core/testing';

import { ReserveCarService } from './reserve-car.service';

describe('ReserveCarService', () => {
  let service: ReserveCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
