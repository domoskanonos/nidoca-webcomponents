import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";

@customElement("nidoca-list")
export class NidocaMenu extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
      <div>
        <slot name="contentBefore"></slot>
        <slot></slot>
        <slot name="contentAfter"></slot>
      </div>
    `;
  }
}
