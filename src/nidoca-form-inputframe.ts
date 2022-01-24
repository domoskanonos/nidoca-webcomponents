import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaBorderProperty, NidocaBorderSize} from "./nidoca-border";
import {NidocaTypographyType} from "./nidoca-typography";
import {NidocaTheme} from ".";
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
  theme: NidocaTheme = NidocaTheme.SURFACE;

  @property({type: String})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return this.inputframeMode == InputframeMode.NORMAL
      ? html`
          <style>
            .main {
              color: var(--app-color-${this.theme});
              background-color: var(--app-color-${this.theme}-background-light);
            }

            :focus-within {
              background-color: var(--app-color-${this.theme}-background);
            }
          </style>
          <nidoca-border
            @slotchange="${() => this.setShowLabel()}"
            @click="${() => this.setShowLabel()}"
            @input="${() => this.setShowLabel()}"
            class="main"
            .theme="${this.theme}"
            .borderSize="${NidocaBorderSize.MEDIUM}"
            .borderProperties="${[
              NidocaBorderProperty.FULL_WIDTH,
              NidocaBorderProperty.BOTTOM_SELECTED,
              NidocaBorderProperty.BOTTOM,
            ]}"
          >
            <nidoca-layout-spacer cssStyle="width:100%;">
              <div style="display:flex;align-content:center;">
                ${this.showLabel
                  ? html`
                      <nidoca-typography
                        style="flex-basis:100%;"
                        class="label"
                        .typographyType="${NidocaTypographyType.CAPTION}"
                        text="${this.label}"
                      ></nidoca-typography>
                    `
                  : html``}
                <slot style="flex-basis:100%;" id="slotElement"></slot>
              </div>
            </nidoca-layout-spacer>
          </nidoca-border>

          ${this.infoText
            ? html` <nidoca-typography
                .typographyType="${NidocaTypographyType.BODY1}"
                text="${this.infoText}"
              ></nidoca-typography>`
            : html``}
          ${this.warningText
            ? html` <nidoca-typography
                style="color:var(--app-color-warning-background)"
                .typographyType="${NidocaTypographyType.BODY1}"
                text="${this.warningText}"
              ></nidoca-typography>`
            : html``}
          ${this.errorText
            ? html` <nidoca-typography
                style="color:var(--app-color-error-background)"
                .typographyType="${NidocaTypographyType.BODY1}"
                text="${this.errorText}"
              ></nidoca-typography>`
            : html``}
        `
      : html` <slot id="slotElement"></slot>`;
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
