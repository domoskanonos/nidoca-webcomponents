import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTypographyType} from ".";

@customElement("nidoca-menu-area")
export class NidocaMenuArea extends LitElement {
  static styles = css`
    .container {
      display: flex;
    }
  `;

  @property({type: String})
  text: string = "";

  render(): TemplateResult {
    return html`
      <div class="container">
        <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>
        ${this.text
          ? html`<nidoca-typography .typographyType="${NidocaTypographyType.CAPTION}">${this.text}</nidoca-typography>`
          : html``}
        <slot></slot>
      </div>
    `;
  }
}
