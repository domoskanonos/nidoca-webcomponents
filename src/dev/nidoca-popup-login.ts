import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";

@customElement("nidoca-popup-login")
export class NidocaPopupLogin extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      Login

      <nidoca-button @nidoca-event-button-clicked="${() => this.closePopup()}">Schließen</nidoca-button>
    `;
  }
  closePopup(): void {
    this.dispatchEvent(
      new CustomEvent("nidoca-popup-login-closePopup", {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }
}
