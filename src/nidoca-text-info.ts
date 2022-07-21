import {html, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {NidocaTextCaption} from '.';

@customElement('nidoca-text-info')
export class NidocaTextInfo extends NidocaTextCaption {
  render(): TemplateResult {
    return html`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`;
  }
}
