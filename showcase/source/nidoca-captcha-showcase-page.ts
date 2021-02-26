import {NidocaFormText} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-captcha-showcase-page')
export class NidocaCaptchaShowcasePage extends NidocaShowcaseTemplate {
  @property()
  numberOne: number | undefined | null = undefined;

  @property()
  numberTwo: number | undefined | null = undefined;

  @property()
  inputfield: NidocaFormText | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
