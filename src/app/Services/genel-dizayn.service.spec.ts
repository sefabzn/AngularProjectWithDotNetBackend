import { TestBed } from '@angular/core/testing';

import { GenelDizaynService } from './genel-dizayn.service';

describe('GenelDizaynService', () => {
  let service: GenelDizaynService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenelDizaynService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
