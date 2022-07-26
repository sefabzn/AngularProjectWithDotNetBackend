import { TestBed } from '@angular/core/testing';

import { MakinaService } from './makina.service';

describe('MakinaService', () => {
  let service: MakinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
