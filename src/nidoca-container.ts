import { css, html, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTheme, NidocaThemeHelper } from './nidoca-meta';

@customElement('nidoca-container')
export class NidocaContainer extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
    }

    slot {
      max-width: 768px;
      display: block;
      margin: 0 auto;
      line-height: 0;
      width: auto;
      max-width: var(--max-width);
    }
  `;

  @property({ type: String })
  theme: string = NidocaTheme.plain;

  render(): unknown {
    return html`<slot></slot>`;
  }
}
