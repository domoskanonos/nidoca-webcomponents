import {css, html, TemplateResult,LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

export enum NidocaVisibleType {
  HIDE = "HIDE",
  INVISIBLE = "INVISIBLE",
  NORMAL = "NORMAL",
}

@customElement("nidoca-visible")
export class NidocaVisible extends LitElement {
  static styles = css`
    .HIDE,
    ::slotted(.HIDE) {
      display: none !important;
      visibility: hidden !important;
    }

    .INVISIBLE,
    ::slotted(.INVISIBLE) {
      visibility: hidden !important;
    }
  `;

  @property({ type: String })
  visibleType: NidocaVisibleType = NidocaVisibleType.NORMAL;

  render(): any {
    return html` <slot class="${this.visibleType}"></slot> `;
  }
}
