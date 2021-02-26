import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-table-showcase-page')
export class NidocaTableShowcasePage extends NidocaShowcaseTemplate {
  @property()
  headers: any[] | undefined | null = [];

  @property()
  rows: [any[]] | undefined | null = [[]];

  getMainComponent(): TemplateResult {
    return html``;
  }
}
