import { css, html, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';
import { customElement } from 'lit/decorators.js';

@customElement('nidoca-list-crud')
export class NidocaListCRUD extends NidocaHtml {
  static styles = css`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `;


   render(): TemplateResult {
      return html`
        nidoca-crud-list
      `;
    }
  

}