import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-box-showcase-page')
export class NidocaBoxShowcasePage extends NidocaShowcaseTemplate {
  @property()
  height: string | undefined | null = '';

  @property()
  width: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
