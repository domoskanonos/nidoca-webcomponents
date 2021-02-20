import {ButtonType, NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-button-showcase-page')
export class NidocaButtonShowcasePage extends NidocaTemplate {
  @property()
  buttonType: ButtonType | undefined | null = undefined;

  @property()
  leadingIcon: string | null | undefined = '';

  @property()
  text: string | undefined | null = '';

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
