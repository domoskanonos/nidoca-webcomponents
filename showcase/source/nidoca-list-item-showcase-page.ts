import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-list-item-showcase-page')
export class NidocaListItemShowcasePage extends NidocaTemplate {
  @property()
  selectionMode: boolean | undefined | null = false;

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
