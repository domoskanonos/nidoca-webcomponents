import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-divider-showcase-page')
export class NidocaDividerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  dividerType: string | undefined | null = '';

  @property()
  opacity: number | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
