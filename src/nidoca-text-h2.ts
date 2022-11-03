import {css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {NidocaText} from '.';

@customElement('nidoca-text-h2')
export class NidocaTextH2 extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `;
}
