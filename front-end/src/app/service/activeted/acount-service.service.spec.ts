import { TestBed } from '@angular/core/testing';

import { AcountServiceService } from './acount-service.service';

describe('AcountServiceService', () => {
  let service: AcountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
