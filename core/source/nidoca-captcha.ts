import {css, customElement, html, LitElement, property, query, TemplateResult} from 'lit-element';
import {NidocaFormText} from './nidoca-form-text';

@customElement('nidoca-captcha-component')
export class NidocaCaptcha extends LitElement {
  static styles = css``;

  @property()
  numberOne: number = 1;

  @property()
  numberTwo: number = 10;

  @query('#inputfield')
  inputfield: NidocaFormText | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-form-text
        id="inputfield"
        @nidoca-event-inputfield-focus-out="${() => this.validate()}"
        label="${'nidoca-captcha-label'
          .concat(String(this.numberOne))
          .concat(' + ')
          .concat(String(this.numberTwo))
          .concat(' = ?')}"
        name="captcha"
        trailingIcon="create"
        value=""
      ></nidoca-form-text>
    `;
  }

  public isValid(): boolean {
    if (this.inputfield != undefined) {
      return this.numberOne + this.numberTwo == Number(this.inputfield.getOutputData().value);
    } else {
      return false;
    }
  }

  public validate(): boolean {
    let isValid: boolean = this.isValid();
    if (isValid && this.inputfield != undefined) {
      this.inputfield.errorText = '';
    } else if (this.inputfield != undefined) {
      this.inputfield.errorText = 'nidoca-captcha-wrong-value';
    }
    return isValid;
  }
}
