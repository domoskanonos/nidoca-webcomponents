import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {NidocaTheme, NidocaTypographyType} from ".";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";

export enum NidocaTextType {
  COLOR = "color",
  EMAIL = "email",
  HIDDEN = "hidden",
  NUMBER = "number",
  PASSWORD = "password",
  TEL = "tel",
  TEXT = "text",
  SEARCH = "search",
  URL = "url",
}

@customElement("nidoca-form-text")
export class NidocaFormText extends NidocaFormAbstractInputElement {
  static styles = css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    .border {
      border-bottom-style: solid;
      border-width: var(--border-width);
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      background: inherit;
      color: inherit;
      height: var(--line-height-2);
      line-height: var(--line-height-2);
      padding-left: var(--space-2);
      padding-right: var(--space-2);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    input:focus::placeholder {
      color: transparent;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.BACKGROUND;

  @property({type: NidocaTextType, converter: String})
  type: string = NidocaTextType.TEXT;

  @property({type: String})
  label: string = "";

  @property({type: String})
  placeholder: string = "";

  @property({type: String})
  trailingIcon: string = "";

  @property({type: String})
  errorText: string = "";

  @property({type: String})
  infoText: string = "";

  @property({type: String})
  warningText: string = "";

  @property({type: String})
  name: string = "";

  @property()
  value: string = "";

  @property({type: Boolean})
  required: boolean = false;

  @property({type: Boolean})
  disabled: boolean = false;

  @property({type: Boolean})
  checked: boolean = false;

  @property({type: Number})
  maxlength: number | undefined;

  @property({type: Number})
  minlength: number | undefined;

  @property({type: Number})
  min: number | undefined;

  @property({type: Number})
  max: number | undefined;

  @property({type: Number})
  step: number | undefined;

  @property({type: Number})
  size: number | undefined;

  @query("#inputElement")
  private inputElement: HTMLInputElement | undefined;

  render(): TemplateResult {
    return this.type == NidocaTextType.HIDDEN
      ? html`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`
      : html` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }
            .border,
            ::slotted(.border) {
              border-color: var(--app-color-${this.theme}-border);
            }
            .border:focus-within,
            ::slotted(.border:focus-within) {
              border-color: var(--app-color-${this.theme}-border-selected);
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon
              ? html`<nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space-2);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`
              : html``}
            <div class="container">
              <nidoca-text
                style="padding-left:var(--space-2); padding-right:var(--space-2);"
                class="label"
                .type="${NidocaTypographyType.CAPTION}"
                text="${this.label}"
              ></nidoca-text>

              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder ? this.placeholder : this.label}"
                size="${ifDefined(this.size)}"
                minlength="${ifDefined(this.minlength)}"
                maxlength="${ifDefined(this.maxlength)}"
                min="${ifDefined(this.min)}"
                max="${ifDefined(this.max)}"
                step="${ifDefined(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText || this.warningText || this.errorText
            ? html`<div style="display:flex;flex-direction:column;">
                ${this.infoText
                  ? html` <nidoca-text .type="${NidocaTypographyType.SUBTITLE1}" text="${this.infoText}"></nidoca-text>`
                  : html``}
                ${this.warningText
                  ? html` <nidoca-text
                      style="color:var(--app-color-warning-background)"
                      .type="${NidocaTypographyType.SUBTITLE1}"
                      text="${this.warningText}"
                    ></nidoca-text>`
                  : html``}
                ${this.errorText
                  ? html` <nidoca-text
                      style="color:var(--app-color-error-background)"
                      .type="${NidocaTypographyType.SUBTITLE1}"
                      text="${this.errorText}"
                    ></nidoca-text>`
                  : html``}
              </div> `
            : html``}`;
  }

  getOutputData(): FormOutputData {
    const outputValue: string | undefined = this.inputElement?.value;
    return <FormOutputData>{
      key: this.name,
      value: outputValue,
    };
  }

  public validate(): boolean {
    this.errorText = "";
    if (
      this.inputElement != null &&
      !this.inputElement.validity.valid &&
      this.inputElement.validationMessage != this.errorText
    ) {
      this.errorText = this.inputElement.validationMessage;
    }
    return this.errorText == "";
  }
}
