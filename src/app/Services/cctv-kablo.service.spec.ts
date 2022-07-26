import { TestBed } from '@angular/core/testing';

import { CctvKabloService } from './cctv-kablo.service';

describe('CctvKabloService', () => {
  let service: CctvKabloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CctvKabloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
