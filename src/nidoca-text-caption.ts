import {css, html, TemplateResult} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {NidocaText} from './nidoca-text';

@customElement('nidoca-text-caption')
export class NidocaTextCaption extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `;

  render(): TemplateResult {
    return html`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`;
  }
}
