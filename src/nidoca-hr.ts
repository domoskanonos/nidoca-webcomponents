import {css, html, TemplateResult, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme} from './nidoca-meta';

@customElement('nidoca-hr')
export class NidocaHr extends LitElement {
  static styles = css`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string;

  constructor() {
    super();
    this.theme = NidocaTheme.prototype.getParentTheme(this) || NidocaTheme.BACKGROUND;
  }

  render(): TemplateResult {
    return html`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `;
  }
}
