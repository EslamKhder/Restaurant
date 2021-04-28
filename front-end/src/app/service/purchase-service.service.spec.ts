import { TestBed } from '@angular/core/testing';

import { PurchaseServiceService } from './purchase-service.service';

describe('PurchaseServiceService', () => {
  let service: PurchaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
