import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-search-bar-showcase-page')
export class NidocaSearchBarShowcasePage extends NidocaTemplate {
  @property()
  placeholder: string | undefined | null = '';

  @property()
  value: string | undefined | null = '';

  @property()
  htmlInputElement: HTMLInputElement | undefined | null = undefined;

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
