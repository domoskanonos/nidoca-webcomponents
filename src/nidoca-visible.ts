import { css, customElement, html, LitElement, property, TemplateResult } from "lit-element";

export enum VisibleType {
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

  @property({ type: VisibleType })
  visibleType: VisibleType = VisibleType.NORMAL;

  render(): TemplateResult {
    return html` <slot class="${this.visibleType}"></slot> `;
  }
}
