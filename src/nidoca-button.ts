import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';

export enum NidocaButtonType {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
}

@customElement('nidoca-button')
export class NidocaButton extends NidocaHtml {
  static styles = css`
    :host,
    .fullWidth {
      display: block;
      width: 100%;
    }

    .container {
      cursor: pointer;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      border-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.primary;

  @property({ type: NidocaButtonType, converter: String })
  buttonType: NidocaButtonType = NidocaButtonType.contained;

  @property({ type: String })
  icon: string = '';

  @property({ type: String })
  text: string = '';

  render(): TemplateResult {
    return html`
      <style>
        .outlined {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-text-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .contained {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .text {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${() => {
        this.clicked();
      }}"
      >
        ${this.icon
        ? html`<nidoca-icon
              .clickable="${false}"
              .icon="${this.icon}"
              style="padding-right:var(--space);"
            ></nidoca-icon>`
        : html``}

        <nidoca-text-button theme="${this.theme}"
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `;
  }

  clicked(): void {
    this.dispatchEvent(
      new CustomEvent('nidoca-event-button-clicked', {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-button slot="${slotName}" text="Start" icon="home"></nidoca-button>`;
  }
}
