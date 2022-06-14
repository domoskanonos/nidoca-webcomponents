import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {Vertrag} from "./model/vertrag";
import {CRUDProperty, GenericPostgrestController} from "..";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";

export class VertragListController extends GenericPostgrestController<any> {
    getModel() {
        return new Vertrag();
    }

    getPath(): string {
        return "/vertrag";
    }

    getPrimaryText(item: any): string {
        return item.name;
    }

    getSecondaryText(item: any): string {
        return item.beschreibung;
    }

    getSectionKey(): string {
        return "name";
    }

    getProperties(): CRUDProperty[] {
        const properties = super.getProperties();
        properties.forEach((propertie: CRUDProperty) => {
            if (propertie.key == "adresse" || propertie.key == "beschreibung") propertie.type = "textarea";
            if (propertie.key == "name") propertie.required = true;
        });
        return properties;
    }

    async search(searchText: string): Promise<any[]> {
        const result: any[] | undefined = await NidocaPostgrestClient.search(
            this.getPath(),
            "?offset=0&limit=100&order=name.asc&name=like.*".concat(searchText).concat("*")
        );
        return result ? result : [];
    }

}

@customElement("nidoca-page-vertrag")
export class NidocaPageVertrag extends LitElement {
    static styles = css``;

    render(): TemplateResult {
        return html`
            <nidoca-generic-crud .controller="${new VertragListController()}"></nidoca-generic-crud> `;
    }
}
