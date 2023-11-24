import { TestBed } from '@angular/core/testing';

import { FuncionariorhsService } from './funcionariorhs.service';

describe('FuncionariorhsService', () => {
  let service: FuncionariorhsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionariorhsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
