import { html, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { NidocaTextCaption } from './nidoca-text-caption';

@customElement('nidoca-text-success')
export class NidocaTextSuccess extends NidocaTextCaption {
  render(): TemplateResult {
    return html`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`;
  }
}
