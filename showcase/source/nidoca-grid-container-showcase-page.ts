import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-grid-showcase-page')
export class NidocaGridShowcasePage extends NidocaShowcaseTemplate {
  @property()
  gridTemplateRows: string[] | undefined | null = [];

  @property()
  gridTemplateColumns: string[] | undefined | null = [];

  @property()
  gridJustifyItems: string | undefined | null = '';

  @property()
  gridAlignItems: string | undefined | null = '';

  @property()
  height: string | undefined | null = '';

  @property()
  minHeight: string | undefined | null = '';

  @property()
  width: string | undefined | null = '';

  @property()
  minWidth: string | undefined | null = '';

  getMainComponent(): TemplateResult {
    return html``;
  }
}
