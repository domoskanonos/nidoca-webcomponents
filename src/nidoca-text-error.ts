import {html, TemplateResult} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {NidocaTextCaption} from './nidoca-text-caption';

@customElement('nidoca-text-error')
export class NidocaTextError extends NidocaTextCaption {
  render(): TemplateResult {
    return html`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`;
  }
}
