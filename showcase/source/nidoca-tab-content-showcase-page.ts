import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-tab-content-showcase-page')
export class NidocaTabContentShowcasePage extends NidocaShowcaseTemplate {
  @property()
  selected: boolean | undefined | null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
