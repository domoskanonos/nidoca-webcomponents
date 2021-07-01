import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {query} from "lit/decorators/query";
import {ifDefined} from "lit/directives/if-defined";
import {InputframeMode} from ".";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";

@customElement("nidoca-form-textarea")
export class NidocaFormTextarea extends NidocaFormAbstractInputElement {
  static styles = css``;

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
          value="${this.value}"
          placeholder="${this.placeholder ? this.placeholder : this.label}"
          size="${ifDefined(this.size)}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          @keyup="${this.handleKeyup}"
          @change="${() => this.handleChange()}"
          @focus="${() => this.handleFocus()}"
          @focusout="${() => this.handleFocusout()}"
        ></textarea>
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

  async handleFocus(): Promise<void> {
    this.dispatchOutputDataChangeEvent("nidoca-form-text-event-focus");
  }

  async handleFocusout(): Promise<void> {
    this.dispatchOutputDataChangeEvent("nidoca-form-text-focusout");
  }

  async handleChange(): Promise<void> {
    this.dispatchOutputDataChangeEvent("nidoca-form-text-event-change");
  }

  async handleKeyup(): Promise<void> {
    this.dispatchOutputDataChangeEvent("nidoca-form-text-event-change");
  }

  async dispatchOutputDataChangeEvent(eventName: string): Promise<void> {
    if (this.validate()) {
      const customEvent = new CustomEvent(eventName, {
        detail: this.getOutputData(),
        bubbles: true,
        composed: true,
      });
      console.debug("dispatch custom event type: %s, detail: %s", customEvent.type, JSON.stringify(customEvent.detail));
      this.dispatchEvent(customEvent);
    }
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
