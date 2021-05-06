import { TestBed } from '@angular/core/testing';

import { RouteActivteService } from './route-activte.service';

describe('RouteActivteService', () => {
  let service: RouteActivteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteActivteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
