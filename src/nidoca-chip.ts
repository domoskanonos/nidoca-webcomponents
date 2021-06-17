import {css, customElement, html, property, TemplateResult} from "lit-element";
import {LitElement} from "lit-element";

@customElement("nidoca-chip")
export class NidocaChip extends LitElement {
  static styles = css`
    .chip {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 var(--space-normal);
      border-radius: var(--line-height-large);
      line-height: var(--line-height-large);
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
