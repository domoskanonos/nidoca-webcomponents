import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';

@customElement('nidoca-infobox')
export class NidocaInfobox extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      text-align: center;
    }
    slot {
      display: block;
      padding-top: var(--icon-size);
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-bottom: var(--space-2);
    }

    .card {
      display: block;
      margin-top: calc(((var(--icon-size) / 2) +var(--space)) * -1);
    }
  `;

  @property({ type: String })
  icon: string = '';

  render(): TemplateResult {
    return html`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `;
  }

  static example(slotName: string = '', theme: string = 'surface'): TemplateResult {
    return html`
      <nidoca-infobox slot="${slotName}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${theme}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${theme}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `;
  }
}
