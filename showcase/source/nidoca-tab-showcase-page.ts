import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-tab-showcase-page')
export class NidocaTabShowcasePage extends NidocaShowcaseTemplate {
  @property()
  selected: boolean | undefined | null = false;

  @property()
  text: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
