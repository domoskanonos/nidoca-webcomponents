import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaBorderProperty, NidocaBorderSize} from "./nidoca-border";
import {NidocaVisibleType as NidocaVisibleType} from "./nidoca-visible";
import {NidocaFlexAlignContent} from "./nidoca-layout-flex-container";
import {NidocaTypographyType} from "./nidoca-typography";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {NidocaColorScheme, NidocaFormDate} from ".";
import {query} from "lit/decorators.js";

export enum InputframeMode {
  NORMAL = "NORMAL",
  CLEAR = "CLEAR",
}

@customElement("nidoca-form-inputframe")
export class NidocaFormInputframe extends LitElement {
  static styles = css``;

  @property({type: String})
  label: string = "";

  @property({type: Boolean})
  showLabel: boolean = true;

  @property({type: String})
  errorText: string = "";

  @property({type: String})
  infoText: string = "";

  @property({type: String})
  warningText: string = "";

  @property({type: String})
  colorScheme: NidocaColorScheme = NidocaColorScheme.SURFACE;

  @property({type: String})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  render(): any {
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
          </style>
          <nidoca-border
            @slotchange="${() => this.setShowLabel()}"
            @click="${() => this.setShowLabel()}"
            @input="${() => this.setShowLabel()}"
            class="main"
            .colorScheme="${this.colorScheme}"
            .borderSize="${NidocaBorderSize.MEDIUM}"
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
                .flexAlignContent="${NidocaFlexAlignContent.CENTER}"
                itemStyle="flex-basis: 100%;"
              >
                <nidoca-visible
                  .visibleType="${this.showLabel ? NidocaVisibleType.NORMAL : NidocaVisibleType.INVISIBLE}"
                >
                  <nidoca-typography
                    class="label"
                    .typographyType="${NidocaTypographyType.CAPTION}"
                    text="${this.label}"
                  ></nidoca-typography>
                </nidoca-visible>

                <slot id="slotElement"></slot>
              </nidoca-layout-flex-container>
            </nidoca-layout-spacer>
          </nidoca-border>

          <nidoca-visible visibleType="${this.infoText ? NidocaVisibleType.NORMAL : NidocaVisibleType.HIDE}">
            <nidoca-typography
              .typographyType="${NidocaTypographyType.BODY1}"
              text="${this.infoText}"
            ></nidoca-typography>
          </nidoca-visible>

          <nidoca-visible visibleType="${this.warningText ? NidocaVisibleType.NORMAL : NidocaVisibleType.HIDE}">
            <nidoca-typography
              style="color:var(--app-color-warning-background)"
              .typographyType="${NidocaTypographyType.BODY1}"
              text="${this.warningText}"
            ></nidoca-typography>
          </nidoca-visible>

          <nidoca-visible visibleType="${this.errorText ? NidocaVisibleType.NORMAL : NidocaVisibleType.HIDE}">
            <nidoca-typography
              style="color:var(--app-color-error-background)"
              .typographyType="${NidocaTypographyType.BODY1}"
              text="${this.errorText}"
            ></nidoca-typography>
          </nidoca-visible>
        `
      : html`<slot id="slotElement"></slot>`;
  }

  setShowLabel(): void {
    if (this.slotElement) {
      const assignedElements: Element[] = this.slotElement.assignedElements();
      for (let index = 0; index < assignedElements.length; index++) {
        const element: Element = assignedElements[index];
        if (
          element.tagName === "SELECT" ||
          element.getAttribute("type") === "date" ||
          element.getAttribute("type") === "datetime-local" ||
          element.getAttribute("type") === "month" ||
          element.getAttribute("type") === "time" ||
          element.getAttribute("type") === "week"
        ) {
          this.showLabel = true;
        } else if (element instanceof HTMLInputElement) {
          const htmlElement: HTMLInputElement = <HTMLInputElement>element;
          this.showLabel = true;
        }
      }
    }
  }
}
