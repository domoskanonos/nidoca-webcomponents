import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('form-output-data-showcase-page')
export class FormOutputDataShowcasePage extends NidocaTemplate {
  @property()
  key: string | undefined | null = '';

  @property()
  value: any | undefined | null = undefined;

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
@customElement('nidoca-form-abstract-input-element-showcase-page')
export class NidocaFormAbstractInputElementShowcasePage extends NidocaTemplate {
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
