import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {GenericPostgrestController} from "./components/nidoca-generic-crud";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {Konto} from "./model/konto";

export class KontoListController extends GenericPostgrestController<Konto> {
  getModel() {
    return new Konto();
  }

  getPath(): string {
    return "/konto";
  }

  getSectionKey(): string {
    return "url";
  }

  getPrimaryText(item: Konto): string {
    return item.url;
  }

  getSecondaryText(item: Konto): string {
    return item.benutzername;
  }

  async search(searchText: string): Promise<Konto[]> {
    const result: any[] | undefined = await NidocaPostgrestClient.search(
      this.getPath(),
      "?offset=0&limit=100&order=url.asc&url=like.*"
        .concat(searchText)
        .concat("*")
        .concat(history.state ? (history.state.searchParam ? history.state.searchParam : "") : "")
    );
    return result ? result : [];
  }
}

@customElement("nidoca-page-konto")
export class NidocaPageKonto extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html` <nidoca-generic-crud .controller="${new KontoListController()}"></nidoca-generic-crud> `;
  }
}
