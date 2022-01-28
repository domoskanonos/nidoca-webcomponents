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
  static styles = css`
    :host,
    slot,
    .container {
      display: block;
      width: 100%;
    }
  `;

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

  @property({type: Object})
  theme: NidocaTheme = NidocaTheme.SURFACE;

  @property({type: String})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  @property({type: String})
  trailingIcon: string = "";

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return this.inputframeMode == InputframeMode.NORMAL
      ? html`
          <style>
            .container {
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
            class="container"
            .theme="${this.theme}"
            .borderSize="${NidocaBorderSize.MEDIUM}"
            .borderProperties="${[
              NidocaBorderProperty.FULL_WIDTH,
              NidocaBorderProperty.BOTTOM_SELECTED,
              NidocaBorderProperty.BOTTOM,
            ]}"
          >
            <div style="display:flex;align-content:center;align-items:center;flex-direction:row;">
              ${this.trailingIcon
                ? html`<nidoca-layout-spacer left="var(--space-medium)"
                    ><nidoca-icon style="font-size: var(--icon-size-big);" icon="${this.trailingIcon}"></nidoca-icon
                  ></nidoca-layout-spacer>`
                : html``}
              <nidoca-layout-spacer left="var(--space-medium)" style="width:100%;">
                <div style="display:flex;align-content:center;flex-direction:column;">
                  ${this.showLabel
                    ? html`
                        <nidoca-typography
                          style="flex-basis:100%;"
                          class="label"
                          .type="${NidocaTypographyType.CAPTION}"
                          text="${this.label}"
                        ></nidoca-typography>
                      `
                    : html``}
                  <slot style="flex-basis:100%;" id="slotElement"></slot>
                </div>
              </nidoca-layout-spacer>
            </div>
          </nidoca-border>

          ${this.infoText
            ? html` <nidoca-typography
                .type="${NidocaTypographyType.BODY1}"
                text="${this.infoText}"
              ></nidoca-typography>`
            : html``}
          ${this.warningText
            ? html` <nidoca-typography
                style="color:var(--app-color-warning-background)"
                .type="${NidocaTypographyType.BODY1}"
                text="${this.warningText}"
              ></nidoca-typography>`
            : html``}
          ${this.errorText
            ? html` <nidoca-typography
                style="color:var(--app-color-error-background)"
                .type="${NidocaTypographyType.BODY1}"
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
