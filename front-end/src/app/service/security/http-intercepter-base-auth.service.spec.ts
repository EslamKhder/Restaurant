import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBaseAuthService } from './http-intercepter-base-auth.service';

describe('HttpIntercepterBaseAuthService', () => {
  let service: HttpIntercepterBaseAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterBaseAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
