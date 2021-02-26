import {ButtonType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-button-showcase-page')
export class NidocaButtonShowcasePage extends NidocaShowcaseTemplate {
  @property()
  buttonType: ButtonType | undefined | null = undefined;

  @property()
  leadingIcon: string | null | undefined = '';

  @property()
  text: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
