import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-spacer-showcase-page')
export class NidocaSpacerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  spacerSize: string | undefined | null = '';

  @property()
  spacerAlignment: string | undefined | null = '';

  @property()
  size: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
