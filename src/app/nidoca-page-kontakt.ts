import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {GenericPostgrestController} from "..";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {Kontakt} from "./model/kontakt";

export class KontaktListController extends GenericPostgrestController<Kontakt> {
    getModel() {
        return new Kontakt();
    }

    getPath(): string {
        return "/kontakt";
    }

    getSectionKey(): string {
        return "url";
    }

    getPrimaryText(item: Kontakt): string {
        return item.name;
    }

    getSecondaryText(item: Kontakt): string {
        return item.name;
    }

    async search(searchText: string): Promise<Kontakt[]> {
        const result: any[] | undefined = await NidocaPostgrestClient.search(
            this.getPath(),
            "?offset=0&limit=100&order=name.asc&name=like.*".concat(searchText).concat("*").concat(history.state ? history.state.searchParam ? history.state.searchParam : "" : "")
        );
        return result ? result : [];
    }
}

@customElement("nidoca-page-kontakt")
export class NidocaPageKontakt extends LitElement {
    static styles = css``;

    render(): TemplateResult {
        return html`
            <nidoca-generic-crud .controller="${new KontaktListController()}"></nidoca-generic-crud> `;
    }
}
