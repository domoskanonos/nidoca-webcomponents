export class Projekt {
    id: number | undefined = 0;
    name: string = "";
}

export class Modul {
    id: number | undefined = 0;
    name: string = "";
    projekt_id: number | undefined;
}

export class Modul_Vorlage {
    modul_id: number | undefined;
    projekt_id: number | undefined;
}
