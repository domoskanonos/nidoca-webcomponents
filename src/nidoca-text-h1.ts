import {css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {NidocaText} from '.';

@customElement('nidoca-text-h1')
export class NidocaTextH1 extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1em;
    }
  `;
}
