import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaButtonType, NidocaTextType, NidocaTheme, NidocaTypographyType} from ".";

@customElement("nidoca-form-contact")
export class NidocaFormContact extends LitElement {
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

    render(): TemplateResult {
        return html`
            ${NidocaTheme.getStyle(this.theme)}
            <nidoca-form id="authenitcate-form">
                <nidoca-text class="paddingBottom" .type="${NidocaTypographyType.H2}">Kontaktformular</nidoca-text>
                <nidoca-form-text theme="${this.theme}" class="paddingBottom" name="name"
                                  .textType="${NidocaTextType.TEXT}" value="" label="name"></nidoca-form-text>
                <nidoca-form-text theme="${this.theme}" class="paddingBottom" .textType="${NidocaTextType.EMAIL}"
                                  label="email" name="email"></nidoca-form-text>
                <nidoca-form-text theme="${this.theme}" class="paddingBottom" name="title"
                                  .textType="${NidocaTextType.TEXT}" value="" label="title"></nidoca-form-text>
                <nidoca-form-textarea theme="${this.theme}" class="paddingBottom" label="message" name="message"
                                      trailingIcon="vpn_key"></nidoca-form-textarea>
                <nidoca-button theme="${NidocaTheme.getOposite(this.theme)}" class="paddingBottom"
                               text="Senden"
                               @nidoca-event-button-clicked="${() => alert("Login")}"
                               .buttonType="${NidocaButtonType.CONTAINED}"
                ></nidoca-button>
                <nidoca-text theme="${this.theme}" class="paddingBottom"
                             slot="errorMessages"
                             .type="${NidocaTypographyType.OVERLINE}"
                             text="huhu"
                ></nidoca-text>
            </nidoca-form>
        `;
    }
}
