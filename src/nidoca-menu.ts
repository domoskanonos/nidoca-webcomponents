import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-menu")
export class NidocaMenu extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      padding-left: var(--space-normal);
      padding-right: var(--space-normal);
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
