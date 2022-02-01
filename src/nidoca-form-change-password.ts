import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {NidocaForm, NidocaTextType, NidocaTheme, NidocaTypographyType} from ".";

@customElement("nidoca-form-change-password")
export class NidocaFormChangePassword extends LitElement {
  static styles = css`
    :host {
      padding: var(--space-6);
      display: block;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined = NidocaTheme.PRIMARY;

  @property({type: String, converter: String})
  label: string = "Passwort ändern";

  @property({type: String, converter: String})
  oldPasswordLabel: string = "Altes Passwort";

  @property({type: String, converter: String})
  newPasswordLabel: string = "Neues Passwort";

  @property({type: String, converter: String})
  repeatNewPasswordLabel: string = "Wiederholen";

  @property({type: String, converter: String})
  buttonLabel: string = "Ändern";

  @query("#form")
  formComponent: NidocaForm | undefined;

  @query("#oldPassword")
  currentPasswordInputField: HTMLInputElement | undefined;

  @query("#newPassword")
  newPasswordInputField: HTMLInputElement | undefined;

  @query("#repeatNewPassword")
  repeatNewPasswordInputField: HTMLInputElement | undefined;

  showErrorMessageSamePassword: boolean = false;

  @property()
  errorMessageSamePasswordLabel: string = "Altes und neues Passwort dürfen nicht übereinstimmen.";

  showErrorMessagePasswordDiff: boolean = false;

  @property()
  errorMessagePasswordDiffLabel: string = "Die Passwörter stimmen nicht überein";

  render(): TemplateResult {
    return html`
      ${NidocaTheme.getStyle(this.theme)}
      <nidoca-form id="form">
        <nidoca-text class="paddingBottom" .type="${NidocaTypographyType.H1}">${this.label}</nidoca-text>

        <nidoca-form-text
          id="oldPassword"
          theme="${ifDefined(this.theme)}"
          class="paddingBottom"
          textType="${NidocaTextType.PASSWORD}"
          label="${this.oldPasswordLabel}"
          name="oldPassword"
          required
        ></nidoca-form-text>

        <nidoca-form-text
          id="newPassword"
          theme="${ifDefined(this.theme)}"
          class="paddingBottom"
          textType="${NidocaTextType.PASSWORD}"
          label="${this.newPasswordLabel}"
          name="newPassword"
          required
        ></nidoca-form-text>

        <nidoca-form-text
          id="repeatNewPassword"
          theme="${ifDefined(this.theme)}"
          class="paddingBottom"
          textType="${NidocaTextType.PASSWORD}"
          label="${this.repeatNewPasswordLabel}"
          name="repeatNewPassword"
          required
        ></nidoca-form-text>

        <nidoca-button
          theme="${NidocaTheme.getOposite(this.theme)}"
          class="paddingBottom"
          @nidoca-event-button-clicked="${() => this.changePassword()}"
          >${this.buttonLabel}
        </nidoca-button>

        <slot></slot>
      </nidoca-form>

      ${this.showErrorMessageSamePassword
        ? html`<nidoca-text
            type="${NidocaTypographyType.CAPTION}"
            text="${this.errorMessageSamePasswordLabel}"
          ></nidoca-text>`
        : html``}
      ${this.showErrorMessagePasswordDiff
        ? html`<nidoca-text
            type="${NidocaTypographyType.CAPTION}"
            text="${this.errorMessagePasswordDiffLabel}"
          ></nidoca-text>`
        : html``}
    `;
  }

  private changePassword() {
    this.showErrorMessagePasswordDiff = false;
    this.showErrorMessageSamePassword = false;
    if (this.newPasswordInputField?.value != this.repeatNewPasswordInputField?.value) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      this.showErrorMessagePasswordDiff = true;
    }

    if (this.currentPasswordInputField?.value == this.newPasswordInputField?.value) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      this.showErrorMessageSamePassword = true;
    }

    if (!this.showErrorMessagePasswordDiff && !this.showErrorMessageSamePassword) {
      if (this.formComponent && this.formComponent.validate()) {
        this.dispatchEvent(
          new CustomEvent("nidoca-form-change-password-submit", {
            detail: this.formComponent.getOutputData(),
            bubbles: true,
            composed: true,
          })
        );
      }
    } else {
      console.log("uihuih");
      this.requestUpdate();
    }
  }
}
