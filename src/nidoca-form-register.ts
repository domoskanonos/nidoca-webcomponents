import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaForm, NidocaTextType, NidocaTheme, NidocaTextType} from "./index";

@customElement("nidoca-form-register")
export class NidocaFormRegister extends LitElement {
    static styles = css`
  
  :host {
  padding:var(--space-6);
  display:block;
  }
  
  .paddingBottom {
  padding-bottom: var(--space-3);
}
  
  `;

    @property({type: NidocaTheme, converter: String})
    theme: string | undefined = NidocaTheme.PRIMARY;

    @property({type: String, converter: String})
    label: string = "Registrieren";

    @property({type: String, converter: String})
    emailLabel: string = "Email";

    @property({type: String, converter: String})
    passwordLabel: string = "Passwort";

    @property({type: String, converter: String})
    buttonLabel: string = "Registrieren";

    @query("#form")
    formComponent: NidocaForm | undefined;

    render(): TemplateResult {
        return html`
            ${NidocaTheme.getStyle(this.theme)}
            <nidoca-form id="form">
                <nidoca-text class="paddingBottom" .type="${NidocaTextType.H1}">${this.label}</nidoca-text>

                <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                  textType="${NidocaTextType.EMAIL}"
                                  label="${this.emailLabel}"
                                  name="email"
                                  trailingIcon="account_circle"
                                  required
                                  minLength="4"
                                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                ></nidoca-form-text>

                <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                  textType="${NidocaTextType.PASSWORD}"
                                  label="${this.passwordLabel}"
                                  name="password"
                                  trailingIcon="vpn_key"
                                  required
                                  minLength="8"
                ></nidoca-form-text>

                <nidoca-button theme="${NidocaTheme.getOposite(this.theme)}" class="paddingBottom"
                               @nidoca-event-button-clicked="${() => this.register()}">${this.buttonLabel}
                </nidoca-button>

                <slot></slot>
                
            </nidoca-form>

        `;
    }

    private register() {
        if (this.formComponent && this.formComponent.validate()) {
            this.dispatchEvent(new CustomEvent("nidoca-form-register-submit", {
                detail: this.formComponent.getOutputData(),
                bubbles: true,
                composed: true,
            }));
        }
    }

}
