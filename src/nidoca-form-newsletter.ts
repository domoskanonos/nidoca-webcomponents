import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaButtonType, NidocaTextType, NidocaTheme, NidocaTypographyType} from ".";

@customElement("nidoca-form-newsletter")
export class NidocaFormNewsletter extends LitElement {
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

  render(): TemplateResult {
    return html`
      ${NidocaTheme.getStyle(this.theme)}
      <nidoca-form id="authenitcate-form">
        <nidoca-text class="paddingBottom" .type="${NidocaTypographyType.H2}">Newsletter</nidoca-text>
        <nidoca-form-text
          .theme="${this.theme}"
          class="paddingBottom"
          name="email"
          .textType="${NidocaTextType.EMAIL}"
          value=""
          label="Deine Email"
          placeholder=" "
        ></nidoca-form-text>
        <nidoca-button
          theme="${NidocaTheme.getOposite(this.theme)}"
          class="paddingBottom"
          @nidoca-event-button-clicked="${() => alert("Login")}"
          .buttonType="${NidocaButtonType.CONTAINED}"
          >Senden</nidoca-button
        >
        <nidoca-text
          .theme="${this.theme}"
          class="paddingBottom"
          slot="errorMessages"
          .type="${NidocaTypographyType.OVERLINE}"
          text="huhu"
        ></nidoca-text>
      </nidoca-form>
    `;
  }
}
