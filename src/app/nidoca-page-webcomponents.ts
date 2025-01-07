import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from '../abstract/nidoca-html';
import { customElement } from 'lit/decorators.js';

@customElement('nidoca-page-webcomponents')
export class NidocaPageWebcomponents extends NidocaHtml {
  static styles = css`
    .infobox {
      padding: var(--space-2);
    }
  `;
  render(): TemplateResult {
    return html`
      <nidoca-container>
        <nidoca-viewer></nidoca-viewer>
      </nidoca-container>
    `;
  }
}
