import {NidocaPostgrestClient} from "./nidoca-postgrest-client";
import {NidocaStore} from "./nidoca-store";

export enum ChannelsEnum {
    isLoggedIn = "isLoggedIn",
    alleVertraege = 'alleVertraege',
    alleAufgaben = 'alleAufgaben',
    alleVertragKategorie = 'alleVertragKategorie',
}

export class AppController {

    static async loadData(): Promise<void> {
        NidocaStore.updateItem(ChannelsEnum.isLoggedIn, NidocaPostgrestClient.isLoggedIn());
        NidocaStore.updateItem(ChannelsEnum.alleVertraege, await NidocaPostgrestClient.search("/vertrag", ""));
        NidocaStore.updateItem(ChannelsEnum.alleAufgaben, await NidocaPostgrestClient.search("/aufgabe", "?offset=0&limit=100&order=ablaufdatum.asc"));
        NidocaStore.updateItem(ChannelsEnum.alleVertragKategorie, await NidocaPostgrestClient.search("/vertrag_kategorie", ""));
    }

}