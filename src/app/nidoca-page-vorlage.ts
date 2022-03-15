import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {CRUDProperty, GenericPostgrestController} from "..";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {Vorlage} from "./model/vorlage";
import Mustache from "mustache";

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

  getProperties(): CRUDProperty[] {
    const properties = super.getProperties();
    properties.forEach((propertie: CRUDProperty) => {
      if (propertie.key == "template") propertie.type = "textarea";
      if (propertie.key == "json") propertie.type = "textarea";
    });
    return properties;
  }

  async search(searchText: string): Promise<Vorlage[]> {
    const result: any[] | undefined = await NidocaPostgrestClient.search(
      this.getPath(),
      "?offset=0&limit=100&order=name.asc&name=like.*"
        .concat(searchText)
        .concat("*")
        .concat(history.state ? (history.state.searchParam ? history.state.searchParam : "") : "")
    );
    return result ? result : [];
  }
}

@customElement("nidoca-page-vorlage")
export class NidocaPageVorlage extends LitElement {
  static styles = css``;

  private controller: VorlageListController = new VorlageListController();

  @property({type: Vorlage, converter: Object})
  model: Vorlage | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-generic-crud
        @nidoca-event-generic-crud-new-item="${(event: CustomEvent) => {
          this.model = event.detail;
        }}"
        .controller="${this.controller}"
      >
        <div>${html`${this.renderModel(this.model)}`}</div>
      </nidoca-generic-crud>
    `;
  }
  renderModel(model: Vorlage | undefined): string {
    if (model) {
      const view = model.json;
      const output = Mustache.render(model.template, view);
      console.log(output);
      return output;
    }
    return "";
  }
}
