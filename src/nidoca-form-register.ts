import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { NidocaTheme, NidocaThemeHelper } from './nidoca-meta';
import { NidocaForm } from './nidoca-form';
import { NidocaFormTextType } from './nidoca-form-text';

@customElement('nidoca-form-register')
export class NidocaFormRegister extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string | undefined = NidocaTheme.primary;

  @property({ type: String, converter: String })
  label: string = 'Registrieren';

  @property({ type: String, converter: String })
  emailLabel: string = 'Email';

  @property({ type: String, converter: String })
  passwordLabel: string = 'Passwort';

  @property({ type: String, converter: String })
  buttonLabel: string = 'Registrieren';

  @query('#form')
  formComponent: NidocaForm | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-box theme="${ifDefined(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${NidocaFormTextType.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${NidocaFormTextType.password}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `;
  }

  private register() {
    if (this.formComponent && this.formComponent.validate()) {
      this.dispatchEvent(
        new CustomEvent('nidoca-form-register-submit', {
          detail: this.formComponent.getOutputData(),
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
