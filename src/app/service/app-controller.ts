import {NidocaPostgrestClient} from "./nidoca-postgrest-client";
import {Vertrag} from "../model/vertrag";

export class AppController {

    static async alleVertraege(): Promise<Vertrag[]> {
        return NidocaPostgrestClient.search("/vertrag", "");
    }

    static async alleKostenpflichtigeVertraege(): Promise<Vertrag[]> {
        const alleVertraege: Vertrag[] = await this.alleVertraege();
        const kostenpflichtigeVertraege = alleVertraege
            .filter((item: Vertrag) => item.kosten > 0)
            .sort((item: Vertrag, compareItem: Vertrag) =>
                item.kosten / item.abrechnungsperiode > compareItem.kosten / compareItem.abrechnungsperiode ? -1 : 1
            );
        return kostenpflichtigeVertraege;
    }

}