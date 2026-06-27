import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DipendenteRequest } from '../dto/request/DipendenteRequest';
import { Observable } from 'rxjs';
import { DipendenteResponse } from '../dto/response/DipendenteResponse';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Dipendente {

  http = inject(HttpClient);

  add(request: DipendenteRequest): Observable<DipendenteResponse> {
    return this.http.post<DipendenteResponse>(`${environment.apiUrl}/api/dipendente/add`, request);
  }

}
