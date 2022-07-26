import { TestBed } from '@angular/core/testing';

import { KabloUretimService } from './kablo-uretim.service';

describe('KabloUretimService', () => {
  let service: KabloUretimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KabloUretimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
