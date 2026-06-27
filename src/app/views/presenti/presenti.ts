import { Component, inject, OnInit, signal } from '@angular/core';
import { IngressoUscita } from '../../services/ingresso-uscita';
import { IngressoUscitaResponse } from '../../dto/response/IngressoUscitaResponse';

@Component({
  selector: 'app-presenti',
  imports: [],
  templateUrl: './presenti.html',
  styleUrl: './presenti.css',
})
export class Presenti implements OnInit {

  ingressoUscitaService = inject(IngressoUscita);
  presenze = signal<IngressoUscitaResponse[]>([]);

  ngOnInit(): void {
    this.ingressoUscitaService.getList().subscribe(i => {
      this.presenze.set(i);
    });
  }

}
