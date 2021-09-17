import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFlexAlignItems, NidocaFlexJustifyContent, NidocaFlexWrap} from "./nidoca-layout-flex-container";
import {NidocaVisibleType} from "./nidoca-visible";
import {NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {NidocaTypographyType} from "./nidoca-typography";
import {NidocaBorderSize, NidocaColorScheme} from ".";

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
      line-height: 48px;
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `;

  @property({type: NidocaColorScheme, converter: String})
  colorScheme: NidocaColorScheme = NidocaColorScheme.PRIMARY;

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
          color: var(--app-color-${this.colorScheme}-background);
          background-color: var(--app-color-${this.colorScheme});
        }

        .CONTAINED {
          color: var(--app-color-${this.colorScheme});
          background-color: var(--app-color-${this.colorScheme}-background);
        }

        .TEXT {
          font-weight: 900;
          color: var(--app-color-${this.colorScheme}-background);
        }
      </style>
      <nidoca-ripple>
        <nidoca-border
          colorScheme="${this.colorScheme}"
          borderSize="${this.buttonType == NidocaButtonType.TEXT ? NidocaBorderSize.NONE : NidocaBorderSize.THIN}"
        >
          <nidoca-layout-flex-container
            class="BUTTON ${this.buttonType}"
            @click="${() => {
              this.clicked();
            }}"
            flexWrap="${NidocaFlexWrap.NO_WRAP}"
            .flexJustifyContent="${NidocaFlexJustifyContent.CENTER}"
            .flexAlignItems="${NidocaFlexAlignItems.CENTER}"
          >
            <nidoca-visible visibleType="${this.leadingIcon ? NidocaVisibleType.NORMAL : NidocaVisibleType.HIDE}">
              <nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>
            </nidoca-visible>

            <nidoca-visible
              visibleType="${!this.leadingIcon && this.buttonType != NidocaButtonType.TEXT
                ? NidocaVisibleType.NORMAL
                : NidocaVisibleType.HIDE}"
            >
              <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"> </nidoca-layout-spacer>
            </nidoca-visible>

            <nidoca-typography text="${this.text}" typographyType="${NidocaTypographyType.BUTTON}">
              <slot></slot>
            </nidoca-typography>

            <nidoca-visible
              visibleType="${this.buttonType != NidocaButtonType.TEXT
                ? NidocaVisibleType.NORMAL
                : NidocaVisibleType.HIDE}"
            >
              <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"></nidoca-layout-spacer>
            </nidoca-visible>
          </nidoca-layout-flex-container>
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
