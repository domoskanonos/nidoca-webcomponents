import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {Vertrag} from "./model/vertrag";
import {CRUDProperty, GenericCRUDController} from "..";
import {PostgRESTClient} from "./service/postgrest-client";

export class VertragListController extends GenericCRUDController<Vertrag> {
  private postgrestClient: PostgRESTClient = new PostgRESTClient(
    "http://".concat(window.location.hostname).concat(":3000"),
    "/vertrag"
  );

  async search(searchText: string): Promise<Vertrag[]> {
    return this.postgrestClient.search("?offset=0&limit=100&order=name.asc&name=like.*".concat(searchText).concat("*"));
  }

  delete(item: Vertrag): Promise<boolean> {
    return this.postgrestClient.delete(item.id);
  }

  persist(item: Vertrag): Promise<Vertrag> {
    delete item.id;
    return this.postgrestClient.persist(item);
  }

  update(item: Vertrag): Promise<boolean> {
    return this.postgrestClient.update(item.id, item);
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
