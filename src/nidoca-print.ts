import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';

@customElement('nidoca-print')
export class NidocaPrint extends NidocaHtml {
  static styles = css`
    :host {
      display: none;
    }
  `;

  render(): TemplateResult {
    return html`<slot></slot>`;
  }

  print(): void {
    const printWindow: Window | null = window.open('');
    if (printWindow) {
      printWindow.document.write(this.innerHTML);
      printWindow.print();
      printWindow.close();
    }
  }
}
