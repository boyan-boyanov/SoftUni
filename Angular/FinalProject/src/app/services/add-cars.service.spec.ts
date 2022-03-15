import { TestBed } from '@angular/core/testing';


import { AddCarsService } from './add-cars.service';

describe('AddCarsServicesService', () => {
  let service: AddCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
