import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-inputframe-showcase-page')
export class NidocaFormInputframeShowcasePage extends NidocaShowcaseTemplate {
  @property()
  label: string | undefined | null = '';

  @property()
  errorText: string | undefined | null = '';

  @property()
  infoText: string | undefined | null = '';

  @property()
  warningText: string | undefined | null = '';

  @property()
  selected: boolean | undefined | null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
