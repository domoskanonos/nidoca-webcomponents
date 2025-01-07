import { css, html, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-list-section')
export class NidocaListSection extends NidocaHtml {
  static styles = css`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.surface;

  @property({ type: String })
  text: string = '';

  render(): TemplateResult {
    return html`
      <style>
        :host {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background-dark);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }

        :host {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <nidoca-text-body theme="${this.theme}" style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-body>
    `;
  }

  static example(): TemplateResult {
    return html`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`;
  }
}
