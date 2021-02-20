import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-list-showcase-page')
export class NidocaListShowcasePage extends NidocaTemplate {
  @property()
  selectionMode: boolean | undefined | null = false;

  @property()
  slotElement: HTMLSlotElement | undefined | null = undefined;

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
