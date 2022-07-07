import {NidocaPostgrestClient} from './nidoca-postgrest-client';
import {NidocaStore} from './nidoca-store';

export enum ChannelsEnum {
  isLoggedIn = 'isLoggedIn',
  alleVertraege = 'alleVertraege',
  alleAufgaben = 'alleAufgaben',
  alleVertragKategorie = 'alleVertragKategorie',
  alleKontakte = 'alleKontakte',
}

export class AppController {
  static async loadData(): Promise<void> {
    NidocaStore.updateItem(ChannelsEnum.isLoggedIn, NidocaPostgrestClient.isLoggedIn());
    NidocaStore.updateItem(ChannelsEnum.alleVertraege, await NidocaPostgrestClient.search('/vertrag', ''));
    NidocaStore.updateItem(ChannelsEnum.alleKontakte, await NidocaPostgrestClient.search('/kontakt', ''));
    NidocaStore.updateItem(
      ChannelsEnum.alleAufgaben,
      await NidocaPostgrestClient.search('/aufgabe', '?order=ablaufdatum.asc')
    );
    NidocaStore.updateItem(
      ChannelsEnum.alleVertragKategorie,
      await NidocaPostgrestClient.search('/vertrag_kategorie', '')
    );
  }
}
