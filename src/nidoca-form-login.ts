import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {NidocaForm, NidocaFormTextType, NidocaTheme, NidocaThemeHelper} from './index';

@customElement('nidoca-form-login')
export class NidocaFormLogin extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined = NidocaTheme.transparent;

  @property({type: String, converter: String})
  label: string = 'Anmeldung';

  @property({type: String, converter: String})
  usernameLabel: string = 'Benutzername/Email';

  @property({type: String, converter: String})
  passwordLabel: string = 'Passwort';

  @property({type: String, converter: String})
  buttonLabel: string = 'Anmelden';

  @query('#authenitcate-form')
  formComponent: NidocaForm | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-box theme="${ifDefined(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            type="${NidocaFormTextType.EMAIL}"
            label="${this.usernameLabel}"
            name="username"
            required
            trailingIcon="account_circle"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            type="${NidocaFormTextType.PASSWORD}"
            label="${this.passwordLabel}"
            label="password"
            name="password"
            required
            trailingIcon="vpn_key"
          ></nidoca-form-text>

          <nidoca-button
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.login()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `;
  }

  private login() {
    if (this.formComponent && this.formComponent.validate()) {
      this.dispatchEvent(
        new CustomEvent('nidoca-form-login-submit', {
          detail: this.formComponent.getOutputData(),
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
