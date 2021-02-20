import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-grid-showcase-page')
export class NidocaGridShowcasePage extends NidocaTemplate {
  @property()
  gridTemplateRows: string[] | undefined | null = [];

  @property()
  gridTemplateColumns: string[] | undefined | null = [];

  @property()
  gridJustifyItems: string | undefined | null = '';

  @property()
  gridAlignItems: string | undefined | null = '';

  @property()
  height: string | undefined | null = '';

  @property()
  minHeight: string | undefined | null = '';

  @property()
  width: string | undefined | null = '';

  @property()
  minWidth: string | undefined | null = '';

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
