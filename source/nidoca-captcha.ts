import {css, customElement, html, LitElement, property, query, TemplateResult} from 'lit-element';
import {NidocaFormText, TextType} from './nidoca-form-text';

@customElement('nidoca-captcha')
export class NidocaCaptcha extends LitElement {
  
  static styles = css``;

  @property({type : Number})
  min: number = 1;

  @property({type : Number})
  max: number = 10;

  @property({type : String})
  errorText: string = 'nidoca-captcha-wrong-value';

  private numberOne: number = 1;
  private numberTwo: number = 1;

  @query('#inputfield')
  private inputfield: NidocaFormText | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-form-text
        id="inputfield"
        @nidoca-form-text-focusout="${() => this.validate()}"
        label="${'nidoca-captcha-label'
          .concat(String(this.numberOne))
          .concat(' + ')
          .concat(String(this.numberTwo))
          .concat(' = ?')}"
        name="captcha"
        trailingIcon="create"
        .textType="${TextType.NUMBER}"
        value=""
      ></nidoca-form-text>
    `;
  }
  
  attributeChangedCallback(name: string, oldval: any, newval: any) {
    if(name == 'min' || name =='max'){
      this.generateNewNumber();
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  private generateNewNumber(): any {
    this.numberOne = this.getRandomNumber(this.min,this.max);
    this.numberTwo = this.getRandomNumber(this.min,this.max);
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
    let isValid: boolean = this.isValid();
    if (isValid && this.inputfield != undefined) {
      this.inputfield.errorText = '';
    } else if (this.inputfield != undefined) {
      this.inputfield.errorText = this.errorText;
    }
    return isValid;
  }

}
