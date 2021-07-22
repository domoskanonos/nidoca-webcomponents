import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {NidocaBorderProperty, BorderSize} from "./nidoca-border";
import {VisibleType} from "./nidoca-visible";
import {FlexAlignContent} from "./nidoca-layout-flex-container";
import {NidocaTypographyType} from "./nidoca-typography";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {NidocaColorScheme} from ".";

export enum InputframeMode {
  NORMAL = "NORMAL",
  CLEAR = "CLEAR",
}

@customElement("nidoca-form-inputframe")
export class NidocaFormInputframe extends LitElement {
  static styles = css`
    .label {
      visibility: hidden;
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
  colorScheme: NidocaColorScheme = NidocaColorScheme.SURFACE;

  @property({type: String})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  render(): TemplateResult {
    return this.inputframeMode == InputframeMode.NORMAL
      ? html`
          <style>
            .main {
              color: var(--app-color-${this.colorScheme});
              background-color: var(--app-color-${this.colorScheme}-background-light);
            }

            :focus-within {
              background-color: var(--app-color-${this.colorScheme}-background);
            }

            :focus-within .label {
              visibility: visible;
            }
            
          </style>
          <nidoca-border
            class="main"
            .colorScheme="${this.colorScheme}"
            .borderSize="${BorderSize.MEDIUM}"
            .borderProperties="${[
              NidocaBorderProperty.FULL_WIDTH,
              NidocaBorderProperty.BOTTOM_SELECTED,
              NidocaBorderProperty.BOTTOM,
            ]}"
          >
            <nidoca-layout-spacer
              cssStyle="width:100%;"
              spacerSize="${NidocaLayoutSpacerSize.SMALL}"
              .spacerTypes="${[NidocaLayoutSpacerType.ALL]}"
            >
              <nidoca-layout-flex-container
                .flexAlignContent="${FlexAlignContent.CENTER}"
                itemStyle="flex-basis: 100%;"
              >
                <nidoca-typography
                  class="label"
                  .typographyType="${NidocaTypographyType.CAPTION}"
                  text="${this.label}"
                ></nidoca-typography>
                <slot></slot>
              </nidoca-layout-flex-container>
            </nidoca-layout-spacer>
          </nidoca-border>

          <nidoca-visible visibleType="${this.infoText ? VisibleType.NORMAL : VisibleType.HIDE}">
            <nidoca-typography
              .typographyType="${NidocaTypographyType.BODY1}"
              text="${this.infoText}"
            ></nidoca-typography>
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
            ></nidoca-typography>
          </nidoca-visible>
        `
      : html`<slot></slot>`;
  }

  async mouseover(): Promise<void> {
    this.selected = true;
  }

  async mouseout(): Promise<void> {
    this.selected = false;
  }
}
