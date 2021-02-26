import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-floating-container-showcase-page')
export class NidocaFloatingContainerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  height: string | undefined | null = '';

  @property()
  width: string | undefined | null = '';

  @property()
  left: string | undefined | null = '';

  @property()
  top: string | undefined | null = '';

  @property()
  right: string | undefined | null = '';

  @property()
  bottom: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
