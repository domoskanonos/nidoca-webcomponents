import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaButtonType, NidocaTextType, NidocaTypographyType} from ".";

@customElement("nidoca-form-contact")
export class NidocaFormContact extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
      <nidoca-form id="authenitcate-form">
        <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Kontaktformular</nidoca-typography>
        <nidoca-form-text name="name" .textType="${NidocaTextType.TEXT}" value="" label="name"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text .textType="${NidocaTextType.EMAIL}" label="email" name="email"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text name="title" .textType="${NidocaTextType.TEXT}" value="" label="title"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-form-textarea label="message" name="message" trailingIcon="vpn_key"></nidoca-form-textarea>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-button
          text="Senden"
          @nidoca-event-button-clicked="${() => alert("Login")}"
          .buttonType="${NidocaButtonType.CONTAINED}"
        ></nidoca-button>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-typography
          slot="errorMessages"
          .typographyType="${NidocaTypographyType.OVERLINE}"
          text="huhu"
        ></nidoca-typography>
      </nidoca-form>
    `;
  }
}
