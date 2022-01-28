import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaForm, NidocaTextType, NidocaTheme, NidocaTypographyType} from "..";

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
      <nidoca-layout-container minWidth="350px" maxWidth="80%" .theme="${NidocaTheme.BACKGROUND}">
        <nidoca-layout-spacer
          left="var(--space-big)"
          right="var(--space-big)"
          top="var(--space-big)"
          bottom="var(--space-big)"
        >
          <nidoca-form id="authenitcate-form">
          <nidoca-typography .type="${NidocaTypographyType.H1}">Anmeldung</nidoca-typography>
            <nidoca-form-text
              name="username"
              .textType="${NidocaTextType.EMAIL}"
              .value="${this.username}"
              label="username"
              trailingIcon="account_circle"
            ></nidoca-form-text>
            <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
            <nidoca-form-text
              .textType="${NidocaTextType.PASSWORD}"
              label="password"
              name="password"
              trailingIcon="vpn_key"
            ></nidoca-form-text>
            <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
            <nidoca-button text="Login" @nidoca-event-button-clicked="${() => alert("Login")}"></nidoca-button>
            <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
            <nidoca-button @nidoca-event-button-clicked="${() => this.closePopup()}">Schließen</nidoca-button>
            <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
            <nidoca-typography
              slot="errorMessages"
              .type="${NidocaTypographyType.OVERLINE}"
              text="${this.errorMessage}"
            ></nidoca-typography>
          </nidoca-form>
        </nidoca-layout-spacer>
      </nidoca-layout-container>
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
