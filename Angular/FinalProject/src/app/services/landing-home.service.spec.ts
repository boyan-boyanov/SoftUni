import { TestBed } from '@angular/core/testing';

import { LandingHomeService } from './landing-home.service';

describe('LandingHomeService', () => {
  let service: LandingHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
