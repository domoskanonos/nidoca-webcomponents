import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-chip")
export class NidocaChip extends LitElement {
  static styles = css`
    .chip {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 var(--space-4);
      border-radius: var(--line-height-3);
      line-height: var(--line-height-3);
    }

    .chip:hover {
      background: var(--app-color-surface-background-dark);
    }

    .clickable {
      cursor: pointer;
    }
  `;

  @property({type: Boolean})
  clickable: boolean = true;

  render(): TemplateResult {
    return html`
      <div class="chip ${this.clickable ? "clickable" : ""}">
        <slot></slot>
      </div>
    `;
  }
}
