import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-chip')
export class NidocaChip extends NidocaHtml {
  static styles = css`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }
    .clickable {
      cursor: pointer;
    }
  `;

  @property({ type: Boolean })
  clickable: boolean = true;

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.surface;

  @property({ type: String })
  text: string = '';

  render(): TemplateResult {
    return html`
      <style>
        .chip:hover {
          background-color: var(--app-color-${this.theme}-background-dark);
        }
        .chip {
          background-color: var(--app-color-${this.theme}-background-light);
        }
      </style>
      <div class="chip ${this.clickable ? 'clickable' : ''}">
        <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>
        <slot></slot>
      </div>
    `;
  }
  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-chip slot="${slotName}" clickable text="Mein Chip"></nidoca-chip>`;
  }
}
