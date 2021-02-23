import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-visible-showcase-page')
export class NidocaVisibleShowcasePage extends NidocaShowcaseTemplate {
  @property()
  visibleType: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
