import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-dialog-showcase-page')
export class NidocaDialogShowcasePage extends NidocaShowcaseTemplate {
  @property()
  show: boolean | undefined | null = false;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
