import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-tabs-showcase-page')
export class NidocaTabsShowcasePage extends NidocaShowcaseTemplate {
  @property()
  tabSlot: HTMLSlotElement | undefined | null = undefined;

  @property()
  tabContentSlot: HTMLSlotElement | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
