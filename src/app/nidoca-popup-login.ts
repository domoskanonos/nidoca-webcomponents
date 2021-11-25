import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaForm, NidocaTextType, NidocaTypographyType} from "..";

@customElement("nidoca-popup-login")
export class NidocaPopupLogin extends LitElement {
  static styles = css``;

  @property()
  username: string | null = localStorage.getItem("nidoca-local-storage-authentication-username-value");

  @property()
  hrefResetPassword: string = "#reset_password";

  @property()
  hrefRegister: string = "#register";

  @query("#authenitcate-form")
  formComponent: NidocaForm | undefined;

  @property()
  errorMessage: string = "";

  render(): TemplateResult {
    return html`
      <nidoca-form id="authenitcate-form">
        <nidoca-form-text
          name="username"
          .textType="${NidocaTextType.EMAIL}"
          .value="${this.username}"
          label="username"
          trailingIcon="account_circle"
        ></nidoca-form-text>

        <nidoca-form-text
          .textType="${NidocaTextType.PASSWORD}"
          label="password"
          name="password"
          trailingIcon="vpn_key"
        ></nidoca-form-text>
        <nidoca-button text="Login" @nidoca-event-button-clicked="${() => alert("Login")}"></nidoca-button>

        <nidoca-typography
          slot="errorMessages"
          .typographyType="${NidocaTypographyType.OVERLINE}"
          text="${this.errorMessage}"
        ></nidoca-typography>
      </nidoca-form>

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
