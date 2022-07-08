import {css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {NidocaText} from '.';

@customElement('nidoca-text-caption')
export class NidocaTextCaption extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `;
}
