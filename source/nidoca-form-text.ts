import {css, customElement, html, property, query, TemplateResult} from 'lit-element';
import { InputframeMode } from '.';
import {FormOutputData, NidocaFormAbstractInputElement} from './nidoca-form-abstract-input-element';

export enum TextType {
  EMAIL = 'email',
  HIDDEN = 'hidden',
  NUMBER = 'number',
  PASSWORD = 'password',
  TEL = 'tel',
  TEXT = 'text',
  SEARCH = 'search',
  URL = 'url',
}

@customElement('nidoca-form-text')
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
  `;

  @property({type: TextType})
  textType: TextType = TextType.TEXT;

  @property({type: String})
  name: string = '';

  @property()
  value: any = '';

  @property({type: String})
  label: string = '';

  @property({type: Boolean})
  required: boolean = false;

  @property({type: String})
  placeholder: string = '';

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

  @property({type: InputframeMode})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  @query('#inputElement')
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
        <input
          id="inputElement"
          name="${this.name}"
          type="${this.textType}"
          value="${this.value}"
          placeholder="${this.placeholder ? this.placeholder : this.label}"
          size="${this.size}"
          minlength="${this.minlength}"
          maxlength="${this.maxlength}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          @keyup="${this.handleKeyup}"
          @change="${() => this.handleChange()}"
          @focus="${() => this.handleFocus()}"
          @focusout="${() => this.handleFocusout()}"
        />
      </nidoca-form-inputframe>
    `;
  }

  getOutputData(): FormOutputData {
    let outputValue: any = this.inputElement?.value;
    return <FormOutputData>{
      key: this.name,
      value: outputValue,
    };
  }

  async handleFocus() {
    this.dispatchOutputDataChangeEvent('nidoca-form-text-event-focus');
  }

  async handleFocusout() {
    this.dispatchOutputDataChangeEvent('nidoca-form-text-focusout');
  }

  async handleChange() {
    this.dispatchOutputDataChangeEvent('nidoca-form-text-event-change');
  }

  async handleKeyup() {
    this.dispatchOutputDataChangeEvent('nidoca-form-text-event-change');
  }

  async dispatchOutputDataChangeEvent(eventName: string) {
    if (this.validate()) {
      let customEvent = new CustomEvent(eventName, {
        detail: this.getOutputData(),
        bubbles: true,
        composed: true,
      });
      console.debug('dispatch custom event type: %s, detail: %s', customEvent.type, JSON.stringify(customEvent.detail));
      this.dispatchEvent(customEvent);
    }
  }

  public validate(): boolean {
    this.errorText = '';
    if (
      this.inputElement != null &&
      !this.inputElement.validity.valid &&
      this.inputElement.validationMessage != this.errorText
    ) {
      this.errorText = this.inputElement.validationMessage;
    }
    return this.errorText == '';
  }
}
