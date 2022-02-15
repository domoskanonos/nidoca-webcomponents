import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-menu-area")
export class NidocaMenuArea extends LitElement {
    static styles = css`
    .container {
      display: flex;
      padding:var(--space);
    }
  `;

    @property({type: String})
    text: string = "";

    render(): TemplateResult {
        return html`
            <div class="container">
                ${this.text ? html`
                    <nidoca-text-button>${this.text}</nidoca-text-button>` : html``}
                <slot></slot>
            </div>
        `;
    }
}
