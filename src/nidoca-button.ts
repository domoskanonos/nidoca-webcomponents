import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {FlexAlignItems, FlexJustifyContent, FlexWrap} from "./nidoca-layout-flex-container";
import {VisibleType} from "./nidoca-visible";
import {NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {NidocaTypographyType} from "./nidoca-typography";

export enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  CLEAR = "CLEAR",
}

@customElement("nidoca-button")
export class NidocaButton extends LitElement {
  static styles = css`
    .BUTTON {
      cursor: pointer;
      text-transform: uppercase;
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      line-height: 48px;
    }

    .PRIMARY {
      background-color: var(--mdc-theme-primary);
      color: var(--mdc-theme-on-primary);
    }
    ::slotted(.PRIMARY:hover),
    .PRIMARY:hover,
    ::slotted(.PRIMARY:active),
    .PRIMARY:active {
      background-color: var(--mdc-theme-primary-dark);
      color: var(--mdc-theme-on-primary-dark);
    }

    .SECONDARY {
      background-color: var(--app-color-secondary-background);
      color: var(--app-color-secondary);
    }
    ::slotted(.SECONDARY:hover),
    .SECONDARY:hover,
    ::slotted(.SECONDARY:active),
    .SECONDARY:active {
      background-color: var(--app-color-secondary-background-dark);
      color: var(--app-color-secondary-dark);
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `;

  @property({type: String})
  buttonType: ButtonType = ButtonType.PRIMARY;

  @property({type: String})
  leadingIcon: string = "thumb_up";

  @property({type: String})
  text: string = "";

  render(): TemplateResult {
    return html`
      <nidoca-ripple>
        <nidoca-layout-flex-container
          class="BUTTON ${this.buttonType}"
          @click="${() => {
            this.clicked();
          }}"
          flexWrap="${FlexWrap.NO_WRAP}"
          .flexJustifyContent="${FlexJustifyContent.CENTER}"
          .flexAlignItems="${FlexAlignItems.CENTER}"
        >
          <nidoca-visible visibleType="${this.leadingIcon ? VisibleType.NORMAL : VisibleType.HIDE}">
            <nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>
          </nidoca-visible>
          <nidoca-visible visibleType="${this.leadingIcon ? VisibleType.NORMAL : VisibleType.HIDE}"> </nidoca-visible>
          <nidoca-typography text="${this.text}" typographyType="${NidocaTypographyType.BUTTON}">
            <slot></slot>
          </nidoca-typography>

          <nidoca-visible visibleType="${this.buttonType == ButtonType.CLEAR ? VisibleType.HIDE : VisibleType.NORMAL}">
            <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"></nidoca-layout-spacer>
          </nidoca-visible>
        </nidoca-layout-flex-container>
      </nidoca-ripple>
    `;
  }

  clicked() {
    this.dispatchEvent(
      new CustomEvent("nidoca-event-button-clicked", {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }
}
