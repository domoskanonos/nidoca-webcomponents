import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-navigation-link-showcase-page')
export class NidocaNavigationLinkShowcasePage extends NidocaShowcaseTemplate {
  @property()
  icon: string | undefined | null = '';

  @property()
  text: string | undefined | null = '';

  @property()
  href: string | undefined | null = '';

  @property()
  rendered: boolean | undefined | null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
