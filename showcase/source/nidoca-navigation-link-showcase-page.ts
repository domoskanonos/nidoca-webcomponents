import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-navigation-link-showcase-page')
export class NidocaNavigationLinkShowcasePage extends NidocaTemplate {
  @property()
  icon: string | undefined | null = '';

  @property()
  text: string | undefined | null = '';

  @property()
  href: string | undefined | null = '';

  @property()
  rendered: boolean | undefined | null = false;

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
