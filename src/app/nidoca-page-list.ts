import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {Vertrag} from "./model/vertrag";
import {CRUDProperty, GenericCRUDController} from "..";
import {NidocaPostgrestClient} from "@domoskanonos/nidoca-postgrest-client";

export class VertragListController extends GenericCRUDController<Vertrag> {
  private postgrestClient: NidocaPostgrestClient = new NidocaPostgrestClient("http://89.58.33.189");

  async search(searchText: string): Promise<Vertrag[]> {
    return this.postgrestClient.search(
      "/vertrag",
      "?offset=0&limit=100&order=name.asc&name=like.*".concat(searchText).concat("*")
    );
  }

  delete(item: Vertrag): Promise<boolean> {
    return this.postgrestClient.delete("/vertrag", item.id);
  }

  persist(item: Vertrag): Promise<Vertrag> {
    delete item.id;
    return this.postgrestClient.persist("/vertrag", item);
  }

  update(item: Vertrag): Promise<boolean> {
    return this.postgrestClient.update("/vertrag", item.id, item);
  }

  getProperties(): CRUDProperty[] {
    const properties = this.fromModel(new Vertrag());
    properties.forEach((propertie: CRUDProperty) => {
      if (propertie.key == "adresse" || propertie.key == "beschreibung") propertie.type = "textarea";
      if (propertie.key == "internetseite") propertie.type = "url";
      if (propertie.key == "name") propertie.required = true;
    });
    return properties;
  }

  getPrimaryIdKey(): string {
    return "id";
  }

  getPrimaryText(item: Vertrag): string {
    return item.name;
  }

  getSecondaryText(item: Vertrag): string {
    return item.beschreibung;
  }
}

@customElement("nidoca-page-list")
export class NidocaPageList extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html` <nidoca-generic-crud .controller="${new VertragListController()}"></nidoca-generic-crud> `;
  }
}
