import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {GenericPostgrestController} from "..";
import {CRUDProperty} from "../nidoca-generic-crud";
import {Aufgabe} from "./model/vertrag";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";

export class AufgabeListController extends GenericPostgrestController<Aufgabe> {
    getModel() {
        return new Aufgabe();
    }

    getPath(): string {
        return "/aufgabe";
    }

    getSectionKey(): string {
        return "ablaufdatum";
    }

    getPrimaryText(item: Aufgabe): string {
        return item.titel;
    }

    getSecondaryText(item: Aufgabe): string {
        return item.beschreibung;
    }

    getProperties(): CRUDProperty[] {
        const properties = super.getProperties();
        properties.forEach((propertie: CRUDProperty) => {
            if (propertie.key == "beschreibung") propertie.type = "textarea";
            if (propertie.key == "ablaufdatum") propertie.required = true;
        });
        return properties;
    }

    async search(searchText: string): Promise<Aufgabe[]> {
        const result: any[] | undefined = await NidocaPostgrestClient.search(
            this.getPath(),
            "?offset=0&limit=100&order=ablaufdatum.asc&titel=like.*".concat(searchText).concat("*")
        );
        return result ? result : [];
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
