import { TestBed } from '@angular/core/testing';

import { EditCarService } from './edit-car.service';

describe('EditCarService', () => {
  let service: EditCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
