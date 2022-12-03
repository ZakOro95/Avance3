import { TestBed } from '@angular/core/testing';

import { ProduccionPlayerasService } from './produccion-playeras.service';

describe('ProduccionPlayerasService', () => {
  let service: ProduccionPlayerasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduccionPlayerasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
