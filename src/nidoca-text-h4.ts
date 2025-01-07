import { css } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { NidocaText } from './nidoca-text';

@customElement('nidoca-text-h4')
export class NidocaTextH4 extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `;
}
