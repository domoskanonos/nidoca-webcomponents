import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-menu")
export class NidocaMenu extends LitElement {
  static styles = css`
    :host,
    slot {
      display: block;
    }

    slot {
      padding-left: var(--space-4);
      padding-right: var(--space-4);
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined;

  render(): TemplateResult {
    return html` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <slot></slot>`;
  }
}
