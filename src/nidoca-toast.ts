import { css, html, TemplateResult, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('nidoca-toast')
export class NidocaToast extends LitElement {
  static styles = css`
    .toast {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #323232;
      color: white;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      min-width: 250px;
      text-align: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 1000; /* Sicherstellen, dass der Toast über anderen Elementen liegt */
    }

    .toast.show {
      opacity: 1;
      visibility: visible;
    }
  `;

  @property({ type: String })
  message: string = 'Dies ist eine Testnachricht';

  @query('#toast')
  private toastElement!: HTMLDivElement;

  showToast(duration: number = 3000): void {
    this.toastElement.classList.add('show');
    setTimeout(() => {
      this.hideToast();
    }, duration);

  }

  hideToast(): void {
    this.toastElement.classList.remove('show');
  }

  render(): TemplateResult {
    return html`
      <div id="toast" class="toast">
        ${this.message}
      </div>
    `;
  }
}
