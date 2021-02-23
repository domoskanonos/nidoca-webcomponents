import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-list-item-showcase-page')
export class NidocaListItemShowcasePage extends NidocaShowcaseTemplate {
  @property()
  selectionMode: boolean | undefined | null = false;

  @property()
  selected: boolean | undefined | null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
