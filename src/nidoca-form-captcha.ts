import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { NidocaFormText, NidocaFormTextType } from './nidoca-form-text';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-form-captcha')
export class NidocaFormCaptcha extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string | undefined;

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  placeholder: string = '';

  @property({ type: String })
  name: string = '';

  @property({ type: Number })
  min: number = 1;

  @property({ type: Number })
  max: number = 10;

  @property({ type: String })
  errorText: string = '';

  private numberOne: number = 1;
  private numberTwo: number = 1;

  @query('#inputfield')
  private inputfield: NidocaFormText | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-form-text
        theme="${ifDefined(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label
        .concat(' ')
        .concat(String(this.numberOne))
        .concat(' + ')
        .concat(String(this.numberTwo))
        .concat(' = ?')}"
        @nidoca-form-text-focusout="${() => this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${NidocaFormTextType.number}"
        value=""
      ></nidoca-form-text>
    `;
  }

  updated(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('min') || _changedProperties.has('max')) {
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
      this.inputfield.errorText = '';
    } else if (this.inputfield != undefined) {
      this.inputfield.errorText = this.errorText;
    }
    return isValid;
  }
}
