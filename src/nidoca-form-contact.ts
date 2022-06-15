import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {NidocaButtonType, NidocaFormTextType, NidocaTheme, NidocaForm} from ".";

@customElement("nidoca-form-contact")
export class NidocaFormContact extends LitElement {
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
  theme: string | undefined = NidocaTheme.PRIMARY;

  @property({type: String, converter: String})
  label: string = "Deine Nachricht";

  @property({type: String, converter: String})
  nameLabel: string = "Dein Name";

  @property({type: String, converter: String})
  emailLabel: string = "Deine Email";

  @property({type: String, converter: String})
  titleLabel: string = "Betreff";

  @property({type: String, converter: String})
  messageLabel: string = "Deine Nachricht";

  @property({type: String, converter: String})
  buttonLabel: string = "Senden";

  @query("#authenitcate-form")
  formComponent: NidocaForm | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-box theme="${ifDefined(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${NidocaTheme.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${NidocaFormTextType.TEXT}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${NidocaTheme.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${NidocaTheme.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${NidocaFormTextType.TEXT}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${NidocaTheme.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${NidocaTheme.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${() => this.sendMessage()}"
            .buttonType="${NidocaButtonType.CONTAINED}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `;
  }

  private sendMessage() {
    if (this.formComponent && this.formComponent.validate()) {
      this.dispatchEvent(
        new CustomEvent("nidoca-form-contact-submit", {
          detail: this.formComponent.getOutputData(),
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
