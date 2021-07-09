import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {NidocaBorderProperty, BorderSize} from "./nidoca-border";
import {VisibleType} from "./nidoca-visible";
import {FlexAlignContent} from "./nidoca-layout-flex-container";
import {NidocaTypographyType} from "./nidoca-typography";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";

export enum InputframeMode {
  NORMAL = "NORMAL",
  CLEAR = "CLEAR",
}

@customElement("nidoca-form-inputframe")
export class NidocaFormInputframe extends LitElement {
  static styles = css`
    .main {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
    }
  `;

  @property({type: String})
  label: string = "";

  @property({type: String})
  errorText: string = "";

  @property({type: String})
  infoText: string = "";

  @property({type: String})
  warningText: string = "";

  @property({type: Boolean})
  selected: boolean = false;

  @property({type: String})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  render(): TemplateResult {
    return this.inputframeMode == InputframeMode.NORMAL
      ? html`
          <nidoca-border
            class="main"
            .borderSize="${this.selected ? BorderSize.THIN : BorderSize.MEDIUM}"
            .borderProperties="${[
              NidocaBorderProperty.FULL_WIDTH,
              this.selected ? NidocaBorderProperty.BOTTOM_SELECTED : NidocaBorderProperty.BOTTOM,
            ]}"
            @mouseover="${() => this.mouseover()}"
            @mouseout="${() => this.mouseout()}"
          >
            <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.SMALL}" .spacerTypes="${[NidocaLayoutSpacerType.ALL]}">
              <nidoca-layout-flex-container .flexAlignContent="${FlexAlignContent.CENTER}" itemStyle="flex-basis: 100%;">
                <nidoca-typography .typographyType="${NidocaTypographyType.CAPTION}" text="${this.label}"></nidoca-typography>
                <slot></slot>
              </nidoca-layout-flex-container>
            </nidoca-layout-spacer>
          </nidoca-border>

          <nidoca-layout-flex-container .flexAlignContent="${FlexAlignContent.CENTER}" itemStyle="flex-basis: 100%;"
            ><nidoca-visible visibleType="${this.infoText ? VisibleType.NORMAL : VisibleType.HIDE}">
              <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}" text="${this.infoText}"></nidoca-typography>
            </nidoca-visible>

            <nidoca-visible visibleType="${this.warningText ? VisibleType.NORMAL : VisibleType.HIDE}">
              <nidoca-typography
                style="color:var(--app-color-warning-background)"
                .typographyType="${NidocaTypographyType.BODY1}"
                text="${this.warningText}"
              ></nidoca-typography>
            </nidoca-visible>

            <nidoca-visible visibleType="${this.errorText ? VisibleType.NORMAL : VisibleType.HIDE}">
              <nidoca-typography
                style="color:var(--app-color-error-background)"
                .typographyType="${NidocaTypographyType.BODY1}"
                text="${this.errorText}"
              ></nidoca-typography> </nidoca-visible
          ></nidoca-layout-flex-container>
        `
      : html`<slot></slot>`;
  }

  async mouseover() {
    this.selected = true;
  }

  async mouseout() {
    this.selected = false;
  }
}
