import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-tab-content")
export class NidocaTabContent extends LitElement {
    static styles = css`
      :host,slot {
      display:block;
    }
  `;

    @property({type: Boolean})
    selected: boolean = false;

    render(): TemplateResult {
        return this.selected ? html`
            <slot></slot>` : html``;
    }
}
