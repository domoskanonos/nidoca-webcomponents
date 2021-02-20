import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-link-interface-showcase-page')
export class NidocaLinkInterfaceShowcasePage extends NidocaTemplate {
  @property()
  text: string | undefined | null = '';

  @property()
  href: string | undefined | null = '';

  @property()
  targetType: string | undefined | null = '';

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
@customElement('nidoca-link-showcase-page')
export class NidocaLinkShowcasePage extends NidocaTemplate {
  @property()
  text: string | undefined | null = '';

  @property()
  href: string | undefined | null = '';

  @property()
  targetType: string | undefined | null = '';

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
