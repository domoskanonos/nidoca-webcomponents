import { html, TemplateResult } from "lit-html";
import { property, state } from 'lit/decorators.js';
import { NidocaHtml } from "./nidoca-html";
import { NidocaTheme } from "../nidoca-meta";

export abstract class NidocaAbstractGenericList<T> extends NidocaHtml {

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.plain;

  @property({})
  data: T[] = [];

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

  protected abstract renderListItem(item: T): TemplateResult;

  abstract itemClicked(item: T): void;

}


