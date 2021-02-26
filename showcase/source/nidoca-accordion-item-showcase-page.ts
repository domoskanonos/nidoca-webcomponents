import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-accordion-item-showcase-page')
export class NidocaAccordionItemShowcasePage extends NidocaShowcaseTemplate {
  @property()
  header: string | undefined | null = '';

  @property()
  opened: boolean | undefined | null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
