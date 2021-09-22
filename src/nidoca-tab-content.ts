import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-tab-content")
export class NidocaTabContent extends LitElement {
  static styles = css``;

  @property({type: Boolean})
  selected: boolean = false;

  render(): any {
    return this.selected ? html`<slot></slot>` : html``;
  }
}
