export class Vertrag {
    id: number | undefined = 0;
    name: string = "";
    beschreibung: string = "";
    internetseite: string = "";
    benutzername: string = "";
    adresse: string = "";
    email: string = "";
    iban: string = "";
    vertragsnehmer: string = "";
    kategorie: string = "";
    vertragsbeginn: Date = new Date();
    vertragsende: Date = new Date();
    kuendigungsfrist: number = 0;
    vertragsnummer: string = "";
    ansprechpatrtner: string = "";
    supporttelefon: string = "";
    kosten: number = 0;
    abrechnungsperiode: number = 0;
    aktiv: boolean = false;
    gekuendigt: boolean = false;
}

export interface VertragKategorie {
    kategorie: string;
    kosten: number;
}