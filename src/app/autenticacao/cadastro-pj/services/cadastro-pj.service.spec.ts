import { TestBed } from '@angular/core/testing';

import { CadastroPjService } from './cadastro-pj.service';

describe('CadastroPjService', () => {
  let service: CadastroPjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroPjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
