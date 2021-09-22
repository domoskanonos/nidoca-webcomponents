import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFlexLayoutAlignItems, NidocaFlexLayoutJustifyContent, NidocaFlexLayoutWrap} from "./nidoca-layout-flex";
import {NidocaLayoutSpacerSize, NidocaLayoutSpacerType} from "./nidoca-layout-spacer";
import {NidocaTypographyType} from "./nidoca-typography";
import {NidocaBorderSize, NidocaTheme} from ".";

export enum NidocaButtonType {
  CONTAINED = "CONTAINED",
  OUTLINED = "OUTLINED",
  TEXT = "TEXT",
}

@customElement("nidoca-button")
export class NidocaButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: max-content;
    }

    .BUTTON {
      cursor: pointer;
      text-transform: uppercase;
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: NidocaTheme = NidocaTheme.PRIMARY;

  @property({type: NidocaButtonType, converter: String})
  buttonType: NidocaButtonType = NidocaButtonType.CONTAINED;

  @property({type: String})
  leadingIcon: string = "";

  @property({type: String})
  text: string = "";

  render(): any {
    return html`
      <style>
        .OUTLINED {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
        }

        .CONTAINED {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .TEXT {
          font-weight: 900;
          color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-ripple>
        <nidoca-border
          theme="${this.theme}"
          borderSize="${this.buttonType == NidocaButtonType.TEXT ? NidocaBorderSize.NONE : NidocaBorderSize.THIN}"
        >
          <nidoca-layout-flex
            class="BUTTON ${this.buttonType}"
            @click="${() => {
              this.clicked();
            }}"
            flexWrap="${NidocaFlexLayoutWrap.NO_WRAP}"
            .flexJustifyContent="${NidocaFlexLayoutJustifyContent.CENTER}"
            .flexAlignItems="${NidocaFlexLayoutAlignItems.CENTER}"
          >
            ${this.leadingIcon ? html`<nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>` : html``}
            ${this.leadingIcon && this.buttonType != NidocaButtonType.TEXT
              ? html`<nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"> </nidoca-layout-spacer>`
              : html``}

            <nidoca-layout-spacer
              spacerSize="${NidocaLayoutSpacerSize.BIG}"
              .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
            >
              <nidoca-typography text="${this.text}" typographyType="${NidocaTypographyType.BUTTON}">
                <slot></slot>
              </nidoca-typography>
            </nidoca-layout-spacer>

            ${this.buttonType != NidocaButtonType.TEXT
              ? html`<nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"></nidoca-layout-spacer>`
              : html``}
          </nidoca-layout-flex>
        </nidoca-border>
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
