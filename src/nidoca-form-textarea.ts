import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {NidocaTheme, NidocaTextType} from ".";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";

@customElement("nidoca-form-textarea")
export class NidocaFormTextarea extends NidocaFormAbstractInputElement {
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

    textarea {
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
    }
    textarea:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    textarea:focus::placeholder {
      color: transparent;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined;

  @property({type: String})
  infoText: string = "";

  @property({type: String})
  warningText: string = "";

  @property({type: String})
  errorText: string = "";

  @property({type: String})
  name: string = "";

  @property()
  value: string = "";

  @property({type: String})
  label: string = "";

  @property({type: Boolean})
  required: boolean = false;

  @property({type: String})
  placeholder: string = "";

  @property({type: Boolean})
  disabled: boolean = false;

  @property({type: Number})
  rows: number = 5;

  @query("#inputElement")
  private inputElement: HTMLInputElement | undefined;

  render(): TemplateResult {
    return html` <style>
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
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="parentContainer border">
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>

          <textarea
            id="inputElement"
            name="${this.name}"
            placeholder="${this.placeholder}"
            rows="${this.rows}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          >
${this.value}</textarea
          >
        </div>
      </div>

      ${this.infoText || this.warningText || this.errorText
        ? html`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText
                ? html` <nidoca-text .type="${NidocaTextType.SUBTITLE1}" text="${this.infoText}"></nidoca-text>`
                : html``}
              ${this.warningText
                ? html` <nidoca-text
                    style="color:var(--app-color-warning-background)"
                    .type="${NidocaTextType.SUBTITLE1}"
                    text="${this.warningText}"
                  ></nidoca-text>`
                : html``}
              ${this.errorText
                ? html` <nidoca-text
                    style="color:var(--app-color-error-background)"
                    .type="${NidocaTextType.SUBTITLE1}"
                    text="${this.errorText}"
                  ></nidoca-text>`
                : html``}
            </div>
          `
        : html``}`;
  }

  getOutputData(): FormOutputData {
    const outputValue: any = this.inputElement?.value;
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
