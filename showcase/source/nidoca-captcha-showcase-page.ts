import {NidocaFormText, NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-captcha-showcase-page')
export class NidocaCaptchaShowcasePage extends NidocaTemplate {
  @property()
  numberOne: number | undefined | null = undefined;

  @property()
  numberTwo: number | undefined | null = undefined;

  @property()
  inputfield: NidocaFormText | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
  getLeftNavigationContent(): TemplateResult {
    return html``;
  }
  getTopContent(): TemplateResult {
    return html``;
  }
}
