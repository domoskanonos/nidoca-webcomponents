import { css, html, TemplateResult } from 'lit';

import { customElement, property } from 'lit/decorators.js';
import { NidocaHtml } from './nidoca-webcomponents';

@customElement('nidoca-toast')
export class NidocaToast extends NidocaHtml {
  static styles = css`
    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--toast-background-color, #323232);
      color: var(--toast-text-color, #ffffff);
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 200px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    .toast.show {
      opacity: 1;
      visibility: visible;
    }

    .toast-button {
      background: none;
      border: none;
      color: inherit;
      font-size: 1.2em;
      cursor: pointer;
      margin-left: 16px;
    }
  `;

  @property({ type: String })
  message: string = 'Toast Message';

  @property({ type: Number })
  duration: number = 3000;

  private timeoutId: number | null = null;

  render(): TemplateResult {
    return html`
      <div class="toast" id="toast">
        <span>${this.message}</span>
        <button class="toast-button" @click="${this.closeToast}">&times;</button>
      </div>
    `;
  }

  showToast(): void {
    const toast = this.shadowRoot?.getElementById('toast');
    if (toast) {
      toast.classList.add('show');
      this.timeoutId = window.setTimeout(() => {
        this.closeToast();
      }, this.duration);
    }
  }

  closeToast(): void {
    const toast = this.shadowRoot?.getElementById('toast');
    if (toast) {
      toast.classList.remove('show');
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-toast slot="${slotName}" message="Beispielnachricht"></nidoca-toast>`;
  }

}
