import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";

@customElement("nidoca-navigation")
export class NidocaNavigation extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html`
      <div>
        <slot name="contentBefore"></slot>
        <slot name="links"></slot>
        <slot name="contentAfter"></slot>
      </div>
    `;
  }
}
