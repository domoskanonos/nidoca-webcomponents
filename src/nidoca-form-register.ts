import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaForm, NidocaTextType, NidocaTheme, NidocaTypographyType} from "./index";

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

    @property()
    username: string | null | undefined;

    @property()
    hrefResetPassword: string = "#reset_password";

    @property()
    hrefRegister: string = "#register";

    @query("#form")
    formComponent: NidocaForm | undefined;

    render(): TemplateResult {
        return html`
            ${NidocaTheme.getStyle(this.theme)}
            <nidoca-form id="form">
                <nidoca-text class="paddingBottom" .type="${NidocaTypographyType.H1}">Registrieren</nidoca-text>

                <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                  required
                                  name="username"
                                  .textType="${NidocaTextType.EMAIL}"
                                  .value="${this.username}"
                                  label="username"
                                  trailingIcon="account_circle"
                ></nidoca-form-text>

                <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                  required
                                  .textType="${NidocaTextType.PASSWORD}"
                                  label="password"
                                  name="password"
                                  trailingIcon="vpn_key"
                ></nidoca-form-text>

                <nidoca-button theme="${NidocaTheme.getOposite(this.theme)}" class="paddingBottom"
                               @nidoca-event-button-clicked="${() => this.register()}">Registrieren
                </nidoca-button>

            </nidoca-form>

        `;
    }

    private register() {
        if (this.formComponent && this.formComponent.validate()) {
            alert(JSON.stringify(this.formComponent.getOutputData()));
        }
    }

}
