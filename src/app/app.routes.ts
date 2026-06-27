import { Routes } from '@angular/router';
import { Presenti } from './views/presenti/presenti';
import { RegistraIngresso } from './views/registra-ingresso/registra-ingresso';
import { RegistraDipendente } from './views/registra-dipendente/registra-dipendente';

export const routes: Routes = [
    {path: "", component: Presenti},
    {path: "registra/ingresso", component: RegistraIngresso},
    {path: "registra/dipendente", component: RegistraDipendente}

];
