import {html, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {NidocaTextCaption} from '.';

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
