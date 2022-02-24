import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {Aufgabe} from "./model/vertrag";
import {CRUDProperty, GenericCRUDController} from "..";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";

export class AufgabeListController extends GenericCRUDController<Aufgabe> {
  async search(searchText: string): Promise<Aufgabe[]> {
    return NidocaPostgrestClient.search(
      "/aufgabe",
      "?offset=0&limit=100&order=titel.asc&titel=like.*".concat(searchText).concat("*")
    );
  }

  delete(item: Aufgabe): Promise<boolean> {
    return NidocaPostgrestClient.delete("/aufgabe", item.id);
  }

  persist(item: Aufgabe): Promise<Aufgabe> {
    delete item.id;
    return NidocaPostgrestClient.persist("/aufgabe", item);
  }

  update(item: Aufgabe): Promise<boolean> {
    return NidocaPostgrestClient.update("/aufgabe", item.id, item);
  }

  getProperties(): CRUDProperty[] {
    const properties = this.fromModel(new Aufgabe());
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

  getPrimaryText(item: Aufgabe): string {
    return item.title;
  }

  getSecondaryText(item: Aufgabe): string {
    return String(item.erledigt);
  }
}

@customElement("nidoca-page-aufgabe")
export class NidocaPageAufgabe extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html` <nidoca-generic-crud .controller="${new AufgabeListController()}"></nidoca-generic-crud> `;
  }
}
