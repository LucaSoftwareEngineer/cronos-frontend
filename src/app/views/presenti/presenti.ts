import { Component, inject, OnInit, signal } from '@angular/core';
import { IngressoUscita } from '../../services/ingresso-uscita';
import { IngressoUscitaResponse } from '../../dto/response/IngressoUscitaResponse';
import { IngressoUscitaRequest } from '../../dto/request/IngressoUscitaRequest';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-presenti',
  imports: [],
  templateUrl: './presenti.html',
  styleUrl: './presenti.css',
})
export class Presenti implements OnInit {

  ingressoUscitaService = inject(IngressoUscita);
  toastr = inject(ToastrService);

  presenze = signal<IngressoUscitaResponse[]>([]);
  DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.ingressoUscitaService.getList().subscribe(i => {
      this.presenze.set(i);
    });
  }

  exit(id: string): void {

    const request: IngressoUscitaRequest = {
      id: id,
      dataUscita: moment().format(this.DATE_TIME_FORMAT)
    }
    this.ingressoUscitaService.update(request).subscribe(res => {
        this.toastr.success("uscita registrata correttamente...", "Successo!");
        this.getList();
      }
    );
  }

}
