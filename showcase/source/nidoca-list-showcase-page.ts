import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-list-showcase-page')
export class NidocaListShowcasePage extends NidocaShowcaseTemplate {
  @property()
  selectionMode: boolean | undefined | null = false;

  @property()
  slotElement: HTMLSlotElement | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
