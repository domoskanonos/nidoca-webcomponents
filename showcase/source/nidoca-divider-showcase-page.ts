import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-divider-showcase-page')
export class NidocaDividerShowcasePage extends NidocaTemplate {
  @property()
  dividerType: string | undefined | null = '';

  @property()
  opacity: number | undefined | null = undefined;

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
