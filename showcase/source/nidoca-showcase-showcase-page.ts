import {customElement, html, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-showcase-showcase-page')
export class NidocaShowcaseShowcasePage extends NidocaShowcaseTemplate {
  getMainComponent(): TemplateResult {
    return html``;
  }
}
