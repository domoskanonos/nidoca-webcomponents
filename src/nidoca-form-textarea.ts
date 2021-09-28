import {css, html} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {InputframeMode} from ".";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";

@customElement("nidoca-form-textarea")
export class NidocaFormTextarea extends NidocaFormAbstractInputElement {
  static styles = css`
    textarea {
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

  @property({type: Number})
  rows: number = 5;

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

  render(): any {
    return html`
      <nidoca-form-inputframe
        label="${this.label}"
        .errorText="${this.errorText}"
        .infoText="${this.infoText}"
        .warningText="${this.warningText}"
        .inputframeMode="${this.inputframeMode}"
      >
        <textarea
          id="inputElement"
          name="${this.name}"
          placeholder="${this.placeholder ? this.placeholder : this.label}"
          rows="${this.rows}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
        >
${this.value}</textarea
        >
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
