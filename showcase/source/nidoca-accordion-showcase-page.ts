import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-accordion-showcase-page')
export class NidocaAccordionShowcasePage extends NidocaShowcaseTemplate {
  @property()
  accordionType: string | undefined | null = '';

  @property()
  accordionSlot: HTMLSlotElement | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
