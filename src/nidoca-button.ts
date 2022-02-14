import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
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
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      border-style: solid;
      border-width: var(--border-width);
      height: var(--line-height-input);
      padding: var(--space-3);
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
                    border-color: var(--app-color-${this.theme}-background);
                }

                .CONTAINED {
                    color: var(--app-color-${this.theme});
                    background-color: var(--app-color-${this.theme}-background);
                    border-color: var(--app-color-${this.theme}-background);
                }

                .TEXT {
                    font-weight: 900;
                    color: var(--app-color-${this.theme}-background);
                }

                .OUTLINED:focus-within,
                ::slotted(.OUTLINED:focus-within) {
                    border-color: var(--app-color-${this.theme}-selected);
                }
            </style>
            <nidoca-ripple class="fullWidth">
                <div
                        class="BUTTON ${this.buttonType}"
                        @click="${() => {
                            this.clicked();
                        }}"
                >
                    ${this.leadingIcon ? html`
                        <nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>` : html``}

                    <nidoca-text-button text="${this.text}">
                        <slot></slot>
                    </nidoca-text-button>
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
