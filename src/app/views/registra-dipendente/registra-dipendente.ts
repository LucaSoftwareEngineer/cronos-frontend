import { Component, inject, OnInit, signal } from '@angular/core';
import { Ruolo } from '../../services/ruolo';
import { RuoloResponse } from '../../dto/response/RuoloResponse';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Dipendente } from '../../services/dipendente';
import { DipendenteRequest } from '../../dto/request/DipendenteRequest';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registra-dipendente',
  imports: [FormsModule, RouterLink],
  templateUrl: './registra-dipendente.html',
  styleUrl: './registra-dipendente.css',
})
export class RegistraDipendente implements OnInit {

  dipendenteService = inject(Dipendente);
  ruoloService = inject(Ruolo);
  toastr = inject(ToastrService);
  router = inject(Router);

  nome = signal<string>("");
  cognome = signal<string>("");
  ruoli = signal<RuoloResponse[]>([]);
  ruolo = signal<string>("0");

  ngOnInit(): void {
    this.getRuoli();
  }

  add() {
    let nErr = 0;

    if (this.nome() == "") {
      this.toastr.warning("Inserire il nome...", "Attenzione!")
      nErr++;
    }

    if (this.cognome() == "") {
      this.toastr.warning("Inserire il cognome...", "Attenzione!")
      nErr++;
    }

    if (this.ruolo() == "0") {
      this.toastr.warning("Selezionare un ruolo...", "Attenzione!")
      nErr++;
    }

    if (nErr == 0) {

      const request: DipendenteRequest = {
        nome: this.nome(),
        cognome: this.cognome(),
        ruoloId: this.ruolo()
      }

      this.dipendenteService.add(request).subscribe(
        res => {
          this.toastr.success("Registrazione completata correttamente...", "Successo!");
          setTimeout(() => {
            this.router.navigate(["registra/ingresso"]);
          }, 2000);
        }, err => {
          this.toastr.warning("Riprova più tardi...", "Attenzione!")
        }
      );
    }
  }

  getRuoli() {
    this.ruoloService.list().subscribe(r => {
      this.ruoli.set(r);
    });
  }

}
