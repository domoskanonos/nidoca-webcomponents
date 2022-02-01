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

    @property()
    username: string | null | undefined;

    @property()
    hrefResetPassword: string = "#reset_password";

    @property()
    hrefRegister: string = "#register";

    @query("#authenitcate-form")
    formComponent: NidocaForm | undefined;

    @property()
    errorMessage: string = "";

    @property({type: NidocaTheme, converter: String})
    theme: string | undefined = NidocaTheme.PRIMARY;

    render(): TemplateResult {
        return html`
            ${NidocaTheme.getStyle(this.theme)}
            <nidoca-form id="authenitcate-form" @input="">
                <nidoca-text class="paddingBottom" .type="${NidocaTypographyType.H1}">Registrieren</nidoca-text>

                <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                  name="username"
                                  .textType="${NidocaTextType.EMAIL}"
                                  .value="${this.username}"
                                  label="username"
                                  trailingIcon="account_circle"
                ></nidoca-form-text>

                <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                  .textType="${NidocaTextType.PASSWORD}"
                                  label="password"
                                  name="password"
                                  trailingIcon="vpn_key"
                ></nidoca-form-text>

                <nidoca-button theme="${NidocaTheme.getOposite(this.theme)}" class="paddingBottom"
                               @nidoca-event-button-clicked="${() => alert("Login")}">Login
                </nidoca-button>

                <nidoca-text
                        slot="errorMessages"
                        .type="${NidocaTypographyType.OVERLINE}"
                        text="${this.errorMessage}"
                ></nidoca-text>
            </nidoca-form>

        `;
    }

}
