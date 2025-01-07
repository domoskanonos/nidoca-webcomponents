import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { NidocaForm } from './nidoca-form';
import { NidocaTheme, NidocaThemeHelper } from './nidoca-meta';
import { NidocaFormTextType } from './nidoca-form-text';
import { NidocaButtonType } from './nidoca-button';

@customElement('nidoca-form-contact')
export class NidocaFormContact extends NidocaHtml {
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
  label: string = 'Deine Nachricht';

  @property({ type: String, converter: String })
  nameLabel: string = 'Dein Name';

  @property({ type: String, converter: String })
  emailLabel: string = 'Deine Email';

  @property({ type: String, converter: String })
  titleLabel: string = 'Betreff';

  @property({ type: String, converter: String })
  messageLabel: string = 'Deine Nachricht';

  @property({ type: String, converter: String })
  buttonLabel: string = 'Senden';

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
            name="name"
            textType="${NidocaFormTextType.text}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${NidocaFormTextType.email}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${NidocaFormTextType.text}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.sendMessage()}"
            .buttonType="${NidocaButtonType.contained}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `;
  }

  private sendMessage() {
    if (this.formComponent && this.formComponent.validate()) {
      this.dispatchEvent(
        new CustomEvent('nidoca-form-contact-submit', {
          detail: this.formComponent.getOutputData(),
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
