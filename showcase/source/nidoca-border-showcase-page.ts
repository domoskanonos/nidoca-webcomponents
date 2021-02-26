import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-border-showcase-page')
export class NidocaBorderShowcasePage extends NidocaShowcaseTemplate {
  @property()
  borderProperties: string[] | undefined | null = [];

  @property()
  borderSize: string | undefined | null = '';

  @property()
  shadowType: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
