import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';
import { NidocaImgRound } from './nidoca-img-round';

@customElement('nidoca-list-item')
export class NidocaListItem extends NidocaHtml {
  static styles = css`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: min-content 1fr min-content;
      padding: var(--space-2);
    }

    .item {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .left {
      padding-right: var(--space-2);
    }

    .right {
      padding-left: var(--space-2);
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.surface;

  @property({ type: String })
  primaryText: string = '';

  @property({ type: String })
  secondaryText: string = '';

  @property({ type: String })
  tertiaryText: string = '';

  @property({ type: String })
  infoText: string = '';

  @property({ type: Boolean })
  selected: boolean = false;

  render(): TemplateResult {
    return html`
      <style>
        .container {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
        .container.selected {
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div @click="${() => this.switchSelected()}" class="container ${this.selected ? 'selected' : ''}">
        <slot name="left" class="item left"></slot>
        <div class="containerTypography">
          ${this.primaryText
        ? html` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>`
        : html``}
          <slot></slot>
          ${this.secondaryText
        ? html` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-caption>`
        : html``}
          <slot name="secondary"></slot>

          ${this.tertiaryText
        ? html` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.tertiaryText}
              </nidoca-text-caption>`
        : html``}
          <slot name="tertiary"></slot>

          ${this.infoText
        ? html` <nidoca-text-caption theme="${this.theme}" class="item right"
                >${this.infoText}
              </nidoca-text-caption>`
        : html``}

        </div>
        <slot name="right" class="item right"></slot>
      </div>
    `;
  }

  switchSelected(): void {
    this.selected = Boolean(!this.selected);
    this.dispatchEvent(
      new CustomEvent('nidoca-event-list-item-clicked', {
        detail: this.selected,
        bubbles: true,
        composed: true,
      })
    );
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-list-item
      theme="primary"
      slot="${slotName}"
      primaryText="List Item"
      secondaryText="List Item Secondary Text"
    >
      ${NidocaImgRound.example('left')}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`;
  }
}
