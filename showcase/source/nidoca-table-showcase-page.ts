import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-table-showcase-page')
export class NidocaTableShowcasePage extends NidocaTemplate {
  @property()
  headers: any[] | undefined | null = [];

  @property()
  rows: [any[]] | undefined | null = [[]];

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
