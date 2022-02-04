import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {CrudyboyClient} from "@domoskanonos/crudyboy-client";
import {Vertrag} from "./model/vertrag";
import {CRUDProperty, GenericCRUDController} from "..";

export class VertragListController extends GenericCRUDController<Vertrag> {
  private crudyboy: CrudyboyClient = new CrudyboyClient("http://localhost:8081", "/vertrag");

  async search(searchText: string): Promise<Vertrag[]> {
    return this.crudyboy.search(0, 0, "name:asc", "name=".concat(searchText));
  }

  save(item: Vertrag): Promise<Vertrag> {
      console.log(JSON.stringify(item));
    return this.crudyboy.update(item);
  }

  getProperties(): CRUDProperty[] {
    const properties = this.fromModel(new Vertrag());
    return properties;
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
