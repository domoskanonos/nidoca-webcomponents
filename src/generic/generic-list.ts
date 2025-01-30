import { html, TemplateResult } from "lit-html";
import { customElement, property } from 'lit/decorators.js';
import { NidocaHtml } from "../abstract/nidoca-html";

export abstract class NidocaGenericList extends NidocaHtml {

  @property({})
  data: any[] = [];

  render() {

    if (this.data == null || !this.data.length) {
      return html`<p>Loading data...</p>`;
    }

    return html`
            <nidoca-list theme="${this.theme}">
              ${this.data.map((item: any) => this.renderListItem(item))}
            </nidoca-list>
          `;
  }

  protected abstract renderListItem(item: any): TemplateResult;

  abstract itemClicked(item: any): void;

}


