import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-spacer-showcase-page')
export class NidocaSpacerShowcasePage extends NidocaTemplate {
  @property()
  spacerSize: string | undefined | null = '';

  @property()
  spacerAlignment: string | undefined | null = '';

  @property()
  size: string | undefined | null = '';

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
