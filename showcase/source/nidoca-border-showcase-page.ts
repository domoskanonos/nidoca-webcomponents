import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-border-showcase-page')
export class NidocaBorderShowcasePage extends NidocaTemplate {
  @property()
  borderProperties: string[] | undefined | null = [];

  @property()
  borderSize: string | undefined | null = '';

  @property()
  shadowType: string | undefined | null = '';

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
