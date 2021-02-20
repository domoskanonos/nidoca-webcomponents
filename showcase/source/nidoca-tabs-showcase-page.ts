import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-tabs-showcase-page')
export class NidocaTabsShowcasePage extends NidocaTemplate {
  @property()
  tabSlot: HTMLSlotElement | undefined | null = undefined;

  @property()
  tabContentSlot: HTMLSlotElement | undefined | null = undefined;

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
