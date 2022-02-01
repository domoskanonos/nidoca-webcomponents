import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFormTextType} from ".";

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
        <nidoca-layout-spacer left="10px"></nidoca-layout-spacer>
        ${this.text
          ? html`<nidoca-text .type="${NidocaFormTextType.H5}">${this.text}</nidoca-text>`
          : html``}
        <slot></slot>
      </div>
    `;
  }
}
