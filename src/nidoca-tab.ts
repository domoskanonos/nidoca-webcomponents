import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-tab')
export class NidocaTab extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      margin-right: var(--space);
      overflow: hidden;
    }

    .container {
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `;

  @property({ type: Boolean })
  selected: boolean = false;

  @property({ type: String })
  text: string = '';

  @property({ type: String })
  theme: string = NidocaTheme.surface;

  render(): TemplateResult {
    return html`
      <style>
        .container {
          color: var(--app-color-text-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background-light);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
        :hover {
          border-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected ? 'selected' : ''}" @click="${() => this.tabClicked()}">
        ${this.text ? html` <nidoca-text text="${this.text}"></nidoca-text> ` : html``}
        <slot></slot>
      </div>
    `;
  }

  private tabClicked(): void {
    console.log('tab clicked.');
    this.dispatchEvent(new CustomEvent('nidoca-event-tab-clicked', { detail: this, bubbles: true, composed: true }));
  }
}
