import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {GenericPostgrestController} from "..";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {Vorlage} from "./model/vorlage";

export class VorlageListController extends GenericPostgrestController<Vorlage> {
    getModel() {
        return new Vorlage();
    }

    getPath(): string {
        return "/vorlage";
    }

    getSectionKey(): string {
        return "url";
    }

    getPrimaryText(item: Vorlage): string {
        return item.name;
    }

    getSecondaryText(item: Vorlage): string {
        return item.name;
    }

    async search(searchText: string): Promise<Vorlage[]> {
        const result: any[] | undefined = await NidocaPostgrestClient.search(
            this.getPath(),
            "?offset=0&limit=100&order=name.asc&name=like.*".concat(searchText).concat("*").concat(history.state ? history.state.searchParam ? history.state.searchParam : "" : "")
        );
        return result ? result : [];
    }
}

@customElement("nidoca-page-vorlage")
export class NidocaPageVorlage extends LitElement {
    static styles = css``;

    render(): TemplateResult {
        return html`
            <nidoca-generic-crud .controller="${new VorlageListController()}"></nidoca-generic-crud> `;
    }
}
