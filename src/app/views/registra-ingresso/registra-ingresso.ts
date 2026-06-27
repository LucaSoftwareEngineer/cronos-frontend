import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DipendenteResponse } from '../../dto/response/DipendenteResponse';
import { Dipendente } from '../../services/dipendente';
import { IngressoUscita } from '../../services/ingresso-uscita';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IngressoUscitaRequest } from '../../dto/request/IngressoUscitaRequest';
import moment from 'moment';

@Component({
  selector: 'app-registra-ingresso',
  imports: [FormsModule],
  templateUrl: './registra-ingresso.html',
  styleUrl: './registra-ingresso.css',
})
export class RegistraIngresso implements OnInit {

  toastr = inject(ToastrService);
  router = inject(Router);
  dipendenteService = inject(Dipendente);
  ingressoUscitaService = inject(IngressoUscita);

  avvisoNuovoDipendente: boolean = true;
  dipendenti = signal<DipendenteResponse[]>([]);
  dipendente = "0";
  DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';

  ngOnInit(): void {
    this.getDipendenti();
  }

  mostraNascondiAvviso() {
    this.avvisoNuovoDipendente = !this.avvisoNuovoDipendente;
  }

  vaiInRegistraNuovoDipendente() {
    this.router.navigate(["/registra/dipendente"]);
  }

  getDipendenti() {
    this.dipendenteService.list().subscribe(d => {
      this.dipendenti.set(d);
    });
  }

  enter() {

    let nErr = 0;

    if (this.dipendente == "0") {
      this.toastr.warning("Selezionare un dipendente...", "Attenzione!");
      nErr++;
    }

    if (nErr == 0) {

      const request: IngressoUscitaRequest = {
        dipendenteId: this.dipendente,
        dataIngresso: moment().format(this.DATE_TIME_FORMAT)
      };

      this.ingressoUscitaService.add(request).subscribe(res => {
        this.toastr.success("Sei entrato in azienda...", "Successo!");
        this.router.navigate(["/"]);
      }, err => {
        this.toastr.warning("Riprova più tardi...", "Attenzione!");
      });

    }

  }

}
