import {NavigationStyle, NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-navigation-showcase-page')
export class NidocaNavigationShowcasePage extends NidocaTemplate {
  @property()
  closed: boolean | undefined | null = false;

  @property()
  navigationType: string | undefined | null = '';

  @property()
  navigationStyle: NavigationStyle | undefined | null = undefined;

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
