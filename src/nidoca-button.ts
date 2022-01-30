import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTypographyType} from "./nidoca-text";
import {NidocaTheme} from ".";

export enum NidocaButtonType {
  CONTAINED = "CONTAINED",
  OUTLINED = "OUTLINED",
  TEXT = "TEXT",
}

@customElement("nidoca-button")
export class NidocaButton extends LitElement {
  static styles = css`
    :host,
    .fullWidth {
      display: block;
      width: 100%;
    }

    .BUTTON {
      cursor: pointer;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      height: var(--line-height-2);
      text-transform: uppercase;
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      border-style: solid;
      border-width: var(--border-width);
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
  leadingIcon: string = "";

  @property({type: String})
  text: string = "";

  render(): TemplateResult {
    return html`
      <style>
        .OUTLINED {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
          border-color: var(--app-color-${this.theme}-border);
        }

        .CONTAINED {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .TEXT {
          font-weight: 900;
          color: var(--app-color-${this.theme}-background);
        }

        .OUTLINED:focus-within,
        ::slotted(.OUTLINED:focus-within) {
          border-color: var(--app-color-${this.theme}-border-selected);
        }
      </style>
      <nidoca-ripple class="fullWidth">
        <div
          class="BUTTON ${this.buttonType}"
          @click="${() => {
            this.clicked();
          }}"
        >
          ${this.leadingIcon ? html`<nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>` : html``}
          ${!this.leadingIcon && this.buttonType != NidocaButtonType.TEXT
            ? html`<nidoca-layout-spacer> </nidoca-layout-spacer>`
            : html``}

          <nidoca-text text="${this.text}" type="${NidocaTypographyType.BUTTON}">
            <slot></slot>
          </nidoca-text>

          ${this.buttonType != NidocaButtonType.TEXT ? html`<nidoca-layout-spacer></nidoca-layout-spacer>` : html``}
        </div>
      </nidoca-ripple>
    `;
  }

  clicked(): void {
    this.dispatchEvent(
      new CustomEvent("nidoca-event-button-clicked", {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }
}
