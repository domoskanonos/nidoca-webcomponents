import { css, html, TemplateResult } from 'lit';
import { NidocaHtml } from './nidoca-html';

import { customElement } from 'lit/decorators.js';
import { NidocaText } from './nidoca-text';

@customElement('nidoca-text-subtitle')
export class NidocaTextSubtitle extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }
  `;

  render(): TemplateResult {
    return html` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`;
  }
}
