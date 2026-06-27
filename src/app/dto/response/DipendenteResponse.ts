import { RuoloResponse } from "./RuoloResponse";

export interface DipendenteResponse {
    id: string;
	nome: string;
	cognome: string;
	ruolo: RuoloResponse;
}