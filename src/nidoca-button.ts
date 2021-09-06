import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {FlexAlignItems, FlexJustifyContent, FlexWrap} from "./nidoca-layout-flex-container";
import {VisibleType} from "./nidoca-visible";
import {NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {NidocaTypographyType} from "./nidoca-typography";

export enum ButtonType {
  CONTAINED = "CONTAINED",
  OUTLINED = "OUTLINED",
  TEXT = "TEXT",
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

    .TEXT {
      font-weight: 900;
      color: var(--app-color-primary-background)
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `;

  @property({type: String})
  buttonType: ButtonType = ButtonType.CONTAINED;

  @property({type: String})
  leadingIcon: string = "";

  @property({type: String})
  text: string = "";

  render(): any {
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

          <nidoca-visible visibleType="${this.buttonType == ButtonType.TEXT ? VisibleType.HIDE : VisibleType.NORMAL}">
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
