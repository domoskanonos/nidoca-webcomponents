import {NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-accordion-showcase-page')
export class NidocaAccordionShowcasePage extends NidocaTemplate {
  @property()
  accordionType: string | undefined | null = '';

  @property()
  accordionSlot: HTMLSlotElement | undefined | null = undefined;

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
