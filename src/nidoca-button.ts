import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme} from '.';

export enum NidocaButtonType {
  CONTAINED = 'CONTAINED',
  OUTLINED = 'OUTLINED',
  TEXT = 'TEXT',
}

@customElement('nidoca-button')
export class NidocaButton extends LitElement {
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

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined = NidocaTheme.PRIMARY;

  @property({type: NidocaButtonType, converter: String})
  buttonType: NidocaButtonType = NidocaButtonType.CONTAINED;

  @property({type: String})
  leadingIcon: string = '';

  @property({type: String})
  text: string = '';

  render(): TemplateResult {
    return html`
      <style>
        .OUTLINED {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .CONTAINED {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .TEXT {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${() => {
          this.clicked();
        }}"
      >
        ${this.leadingIcon
          ? html` <nidoca-icon .clickable="${false}" .icon="${this.leadingIcon}"></nidoca-icon>`
          : html``}

        <nidoca-text-button text="${this.text}">
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
}
