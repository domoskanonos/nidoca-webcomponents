import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import { NidocaFormText, NidocaTextType } from "./nidoca-form-text";

@customElement("nidoca-captcha")
export class NidocaCaptcha extends LitElement {

  static styles = css``;

  @property({ type: Number })
  min: number = 1;

  @property({ type: Number })
  max: number = 10;

  @property({ type: String })
  errorText: string = "nidoca-captcha-wrong-value";

  private numberOne: number = 1;
  private numberTwo: number = 1;

  @query("#inputfield")
  private inputfield: NidocaFormText | undefined;

  render(): any {
    return html`
      <nidoca-form-text
        id="inputfield"
        @nidoca-form-text-focusout="${() => this.validate()}"
        label="${"nidoca-captcha-label"
        .concat(" ")
        .concat(String(this.numberOne))
        .concat(" + ")
        .concat(String(this.numberTwo))
        .concat(" = ?")}"
        name="captcha"
        trailingIcon="create"
        type="${NidocaTextType.NUMBER}"
        value=""
      ></nidoca-form-text>
    `;
  }


  updated(_changedProperties: PropertyValues) : void {
    if (_changedProperties.has("min") || _changedProperties.has("max")) {
      this.generateNewNumber();
    }
    super.updated(_changedProperties);
  }

  private generateNewNumber(): any {
    this.numberOne = Math.round(this.getRandomNumber(this.min, this.max));
    this.numberTwo = Math.round(this.getRandomNumber(this.min, this.max));
    this.requestUpdate();
  }

  private getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  public isValid(): boolean {
    if (this.inputfield != undefined) {
      return this.numberOne + this.numberTwo == Number(this.inputfield.getOutputData().value);
    } else {
      return false;
    }
  }

  public validate(): boolean {
    const isValid: boolean = this.isValid();
    if (isValid && this.inputfield != undefined) {
      this.inputfield.errorText = "";
    } else if (this.inputfield != undefined) {
      this.inputfield.errorText = this.errorText;
    }
    return isValid;
  }

}
