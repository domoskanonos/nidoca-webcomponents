import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {Aufgabe} from "./model/vertrag";
import {CRUDProperty, GenericCRUDController} from "..";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";

export class AufgabeListController extends GenericCRUDController<Aufgabe> {

    async search(searchText: string): Promise<Aufgabe[]> {
        return NidocaPostgrestClient.search(
            this.getPath(),
            "?offset=0&limit=100&order=ablaufdatum.asc&titel=like.*".concat(searchText).concat("*")
        );
    }

    delete(item: Aufgabe): Promise<boolean> {
        return NidocaPostgrestClient.delete(this.getPath(), item.id);
    }

    persist(item: Aufgabe): Promise<Aufgabe> {
        delete item.id;
        return NidocaPostgrestClient.persist(this.getPath(), item);
    }

    update(item: Aufgabe): Promise<boolean> {
        return NidocaPostgrestClient.update(this.getPath(), item.id, item);
    }

    getProperties(): CRUDProperty[] {
        const properties = this.fromModel(new Aufgabe());
        properties.forEach((propertie: CRUDProperty) => {
            if (propertie.key == "beschreibung") propertie.type = "textarea";
        });
        return properties;
    }

    getPrimaryIdKey(): string {
        return "id";
    }

    getSectionText(item: Aufgabe): string {
        const nidocaDateHelper: NidocaDateHelper = new NidocaDateHelper();
        return nidocaDateHelper.formatDate(item.ablaufdatum, "dd.MM.yyyy")
    }

    newSection(previousItem: Aufgabe, item: Aufgabe): boolean {
        if (previousItem) {
            return item.ablaufdatum.getTime() > previousItem.ablaufdatum.getTime();
        }
        return false
    }

    getPrimaryText(item: Aufgabe): string {
        return item.titel;
    }

    getSecondaryText(item: Aufgabe): string {
        return String(item.beschreibung);
    }

    getPath(): string {
        return "/aufgabe";
    }

}

@customElement("nidoca-page-aufgabe")
export class NidocaPageAufgabe extends LitElement {
    static styles = css``;

    render(): TemplateResult {
        return html`
            <nidoca-generic-crud .controller="${new AufgabeListController()}"></nidoca-generic-crud> `;
    }
}
