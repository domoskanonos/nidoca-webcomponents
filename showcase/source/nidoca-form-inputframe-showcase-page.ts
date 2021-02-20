import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-form-inputframe-showcase-page')
export class NidocaFormInputframeShowcasePage extends NidocaTemplate {
  @property()
  label: string | undefined | null = '';

  @property()
  errorText: string | undefined | null = '';

  @property()
  infoText: string | undefined | null = '';

  @property()
  warningText: string | undefined | null = '';

  @property()
  selected: boolean | undefined | null = false;

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
