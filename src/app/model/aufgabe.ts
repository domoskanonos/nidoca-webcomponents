export class Aufgabe {
  id: number | null | undefined = 0;
  titel: string = '';
  beschreibung: string = '';
  ablaufdatum: Date = new Date();
  erledigt: boolean = false;
}
