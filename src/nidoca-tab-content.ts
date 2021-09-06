import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {VisibleType} from "./nidoca-visible";

@customElement("nidoca-tab-content")
export class NidocaTabContent extends LitElement {
  static styles = css``;

  @property({type: Boolean})
  selected: boolean = false;

  render(): any {
    return html`
      <nidoca-visible visibleType="${this.selected ? VisibleType.NORMAL : VisibleType.HIDE}">
        <slot></slot>
      </nidoca-visible>
    `;
  }
}
