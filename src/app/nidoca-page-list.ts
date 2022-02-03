import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {CrudyboyClient} from "@domoskanonos/crudyboy-client";
import {Vertrag} from "./model/vertrag";
import {GenericListController} from "..";

export class VertragListController extends GenericListController<Vertrag> {
  private crudyboy: CrudyboyClient = new CrudyboyClient("http://localhost:8081", "/vertrag");

  async search(searchText: string): Promise<Vertrag[]> {
    return this.crudyboy.search(0, 0, "name:asc", "name=".concat(searchText));
  }

  getPrimaryText(item: Vertrag): string {
    console.log(item.name);
    return item.name;
  }
}

@customElement("nidoca-page-list")
export class NidocaPageList extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html` <nidoca-generic-list .controller="${new VertragListController()}"></nidoca-generic-list> `;
  }
}
