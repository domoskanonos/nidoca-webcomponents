import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-navigation-section-showcase-page')
export class NidocaNavigationSectionShowcasePage extends NidocaShowcaseTemplate {
  @property()
  text: string | undefined | null = '';

  @property()
  rendered: boolean | undefined | null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
