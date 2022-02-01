import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaForm, NidocaTextType, NidocaTheme, NidocaTypographyType} from ".";

@customElement("nidoca-form-newsletter")
export class NidocaFormNewsletter extends LitElement {
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
    label: string = "Newsletter";

    @property({type: String, converter: String})
    emailLabel: string = "Deine Emailadresse";

    @property({type: String, converter: String})
    buttonLabel: string = "Registrieren";

    @query("#form")
    formComponent: NidocaForm | undefined;

    render(): TemplateResult {
        return html`
            ${NidocaTheme.getStyle(this.theme)}
            <nidoca-form id="form">
                <nidoca-text class="paddingBottom" .type="${NidocaTypographyType.H1}">${this.label}</nidoca-text>

                <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                  textType="${NidocaTextType.EMAIL}"
                                  label="${this.emailLabel}"
                                  name="email"
                                  trailingIcon="account_circle"
                                  required
                                  minLength="4"
                                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
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
            this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit", {
                detail: this.formComponent.getOutputData(),
                bubbles: true,
                composed: true,
            }));
        }
    }

}
