import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraDipendente } from './registra-dipendente';

describe('RegistraDipendente', () => {
  let component: RegistraDipendente;
  let fixture: ComponentFixture<RegistraDipendente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistraDipendente],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistraDipendente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
