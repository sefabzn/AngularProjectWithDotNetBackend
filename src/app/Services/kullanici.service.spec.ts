import { TestBed } from '@angular/core/testing';

import { KullaniciService } from './kullanici.service';

describe('KullaniciService', () => {
  let service: KullaniciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KullaniciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
