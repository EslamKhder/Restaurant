import { TestBed } from '@angular/core/testing';

import { StateCountryServiceService } from './state-country-service.service';

describe('StateCountryServiceService', () => {
  let service: StateCountryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateCountryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
