import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-link-interface-showcase-page')
export class NidocaLinkInterfaceShowcasePage extends NidocaShowcaseTemplate {
  @property()
  text: string | undefined | null = '';

  @property()
  href: string | undefined | null = '';

  @property()
  targetType: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
@customElement('nidoca-link-showcase-page')
export class NidocaLinkShowcasePage extends NidocaShowcaseTemplate {
  @property()
  text: string | undefined | null = '';

  @property()
  href: string | undefined | null = '';

  @property()
  targetType: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
