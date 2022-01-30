import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {NidocaTheme, NidocaTypographyType} from ".";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";

export enum NidocaDateType {
  DATE = "date",
  DATETIME_LOCAL = "datetime-local",
  MONTH = "month",
  TIME = "time",
  WEEK = "week",
}

@customElement("nidoca-form-date")
export class NidocaFormDate extends NidocaFormAbstractInputElement {
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
    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-3);
      line-height: var(--line-height-3);
      padding-left: var(--space-3);
      padding-right: var(--space-3);
    }
    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined;

  @property({type: String})
  trailingIcon: string = "";

  @property()
  type: NidocaDateType = NidocaDateType.DATE;

  @property({type: String})
  name: string = "";

  @property({type: String})
  value: string = "";

  @property({type: String})
  label: string = "";

  @property({type: Boolean})
  required: boolean = false;

  @property({type: String})
  placeholder: string = "";

  @property({type: Boolean})
  disabled: boolean = false;

  @property({type: String})
  errorText: string = "";

  @property({type: String})
  infoText: string = "";

  @property({type: String})
  warningText: string = "";

  @query("#inputElement")
  private inputElement: HTMLInputElement | undefined;

  render(): TemplateResult {
    return html`
      <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        .border,
        ::slotted(.border) {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
        }
        .border:focus-within,
        ::slotted(.border:focus-within) {
          border-color: var(--app-color-${this.theme}-border-selected);
        }
      </style>
      <div class="parentContainer border">
        ${this.trailingIcon
          ? html`<nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-3);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`
          : html``}
        <div class="container">
          <nidoca-text
            style="padding-left:var(--space-3); padding-right:var(--space-3);"
            class="label"
            .type="${NidocaTypographyType.CAPTION}"
            text="${this.label}"
          ></nidoca-text>
          <input
            id="inputElement"
            name="${this.name}"
            type="${this.type}"
            value="${this.value}"
            placeholder="${this.placeholder ? this.placeholder : this.label}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          />
        </div>
      </div>
      ${this.infoText || this.warningText || this.errorText
        ? html`<div>
            ${this.infoText
              ? html` <nidoca-text
                  .type="${NidocaTypographyType.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-text>`
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
        : html``}
    `;
  }

  getOutputData(): FormOutputData {
    return <FormOutputData>{
      key: this.name,
      value: this.inputElement?.value,
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
