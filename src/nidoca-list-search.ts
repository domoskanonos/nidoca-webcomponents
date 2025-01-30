import { html } from "lit-html";
import { css } from "lit";
import { customElement, query } from 'lit/decorators.js';
import { NidocaHtml, NidocaList } from "./nidoca-webcomponents";

@customElement('nidoca-list-search')
export class NidocaListSearch extends NidocaHtml {

    @query('#listElement')
    private slotElement: NidocaList | undefined;

  render() {
    return html`
    <nidoca-container>
      <nidoca-search-bar></nidoca-search-bar>
      <nidoca-list id="listElement">
        <slot></slot>
      </nidoca-list>
    </nidoca-container>
    `;
  }

}


