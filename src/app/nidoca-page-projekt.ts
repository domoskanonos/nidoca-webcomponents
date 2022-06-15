import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {CRUDProperty, GenericPostgrestController} from "./components/nidoca-generic-crud";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {Projekt} from "./model/projekt";

export class ProjektListController extends GenericPostgrestController<Projekt> {
    getModel() {
        return new Projekt();
    }

    getPath(): string {
        return "/projekt";
    }

    getSectionKey(): string {
        return "url";
    }

    getPrimaryText(item: Projekt): string {
        return item.name;
    }

    getSecondaryText(item: Projekt): string {
        return item.name;
    }

    getProperties(): CRUDProperty[] {
        const properties = super.getProperties();
        properties.forEach((propertie: CRUDProperty) => {
            if (propertie.key == "modul_id") propertie.type = "1:n";
        });
        return properties;
    }


    async search(searchText: string): Promise<Projekt[]> {
        const result: any[] | undefined = await NidocaPostgrestClient.search(
            this.getPath(),
            "?offset=0&limit=100&order=name.asc&name=like.*".concat(searchText).concat("*").concat(history.state ? history.state.searchParam ? history.state.searchParam : "" : "")
        );
        return result ? result : [];
    }
}

@customElement("nidoca-page-projekt")
export class NidocaPageProjekt extends LitElement {
    static styles = css``;

    render(): TemplateResult {
        return html`
            <nidoca-generic-crud .controller="${new ProjektListController()}"></nidoca-generic-crud> `;
    }
}
