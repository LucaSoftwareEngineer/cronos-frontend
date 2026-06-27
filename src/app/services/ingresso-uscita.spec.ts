import { TestBed } from '@angular/core/testing';

import { IngressoUscita } from './ingresso-uscita';

describe('IngressoUscita', () => {
  let service: IngressoUscita;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngressoUscita);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
