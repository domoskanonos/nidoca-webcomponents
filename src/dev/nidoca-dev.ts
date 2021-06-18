import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {TypographyType} from "..";

@customElement("nidoca-dev")
export class NidocaShowcase extends LitElement {
  @property({type: Boolean})
  prominent: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-template .prominent="${this.prominent}">
        <nidoca-icon slot="content" icon="menu"></nidoca-icon>
        <nidoca-typography slot="topCenter" typographyType="${TypographyType.BODY1}"
          >nidoca framework</nidoca-typography
        >
        <nidoca-icon
          slot="topRight"
          icon="search"
          @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
        ></nidoca-icon>
        <nidoca-icon slot="topRight" icon="person"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="more_vert"></nidoca-icon>

        <nidoca-form-text name="search" slot="prominent"></nidoca-form-text>

        <nidoca-typography slot="content" typographyType="H1">Testinhalt</nidoca-typography>
        
      </nidoca-template>
    `;
  }
}
