import { css, html, TemplateResult } from 'lit';

import { customElement } from 'lit/decorators.js';
import { NidocaText } from './nidoca-text';

@customElement('nidoca-text-body')
export class NidocaTextBody extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 450;
      font-size: 105%;
    }
  `;

  render(): TemplateResult {
    return html` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`;
  }
}
