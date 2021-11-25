import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {InputframeMode} from ".";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";

export enum NidocaTextType {
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
    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
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

  @property({type: String})
  type: NidocaTextType = NidocaTextType.TEXT;

  @property({type: String})
  name: string = "";

  @property()
  value: any = "";

  @property({type: String})
  label: string = "";

  @property({type: Boolean})
  required: boolean = false;

  @property({type: String})
  placeholder: string = "";

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

  @property({type: String})
  errorText: string = "";

  @property({type: String})
  infoText: string = "";

  @property({type: String})
  warningText: string = "";

  @property({type: String})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  @query("#inputElement")
  private inputElement: HTMLInputElement | undefined;

  render(): TemplateResult {
    return this.type == NidocaTextType.HIDDEN
      ? html`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`
      : html`
          <nidoca-form-inputframe
            label="${this.label}"
            .errorText="${this.errorText}"
            .infoText="${this.infoText}"
            .warningText="${this.warningText}"
            .inputframeMode="${this.inputframeMode}"
          >
            <input
              id="inputElement"
              name="${this.name}"
              type="${this.type}"
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
          </nidoca-form-inputframe>
        `;
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
