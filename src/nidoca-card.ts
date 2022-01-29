import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaShadowType} from "./nidoca-box-shadow";

@customElement("nidoca-card")
export class NidocaCard extends LitElement {
  static styles = css`
    .slotContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `;

  render(): TemplateResult {
    return html`
      <nidoca-box-shadow .shadowType="${NidocaShadowType.KEY_LIGHT}">
        <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `;
  }
}
