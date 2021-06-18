import {customElement, html, LitElement, TemplateResult} from "lit-element";
import {TypographyType} from "..";

@customElement("nidoca-dev")
export class NidocaShowcase extends LitElement {
  render(): TemplateResult {
    return html`
      <nidoca-template>
        <nidoca-icon slot="content" icon="menu"></nidoca-icon>
        <nidoca-typography slot="topCenter" typographyType="${TypographyType.BODY1}"
          >nidoca framework</nidoca-typography
        >
        <nidoca-icon slot="topRight" icon="menu"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="menu"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="menu"></nidoca-icon>
        
        <nidoca-typography slot="content" typographyType="H1">Testinhalt</nidoca-typography>
      </nidoca-template>
    `;
  }
}
