import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-search-bar-showcase-page')
export class NidocaSearchBarShowcasePage extends NidocaShowcaseTemplate {
  @property()
  placeholder: string | undefined | null = '';

  @property()
  value: string | undefined | null = '';

  @property()
  htmlInputElement: HTMLInputElement | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
