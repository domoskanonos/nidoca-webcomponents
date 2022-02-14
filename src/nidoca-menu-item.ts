import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-menu-item")
export class NidocaMenuItem extends LitElement {
    static styles = css`
    .container {
      display: flex;
      cursor: pointer;
    }
    
    .container:hover {
      backdrop-filter: brightness(var(--app-darken-1));
    }
      
  `;

    @property({type: String})
    text: string = "";

    @property({type: String})
    icon: string = "";

    render(): TemplateResult {
        return html`
            <div class="container" @click="${() => this.clicked()}">
                ${this.icon
                        ? html`
                            <nidoca-icon
                                    slot="graphic"
                                    icon="${this.icon}"
                                    style="padding-right:var(--space); font-size:var(--icon-size);"
                            ></nidoca-icon>`
                        : html``}
                ${this.text ? html`
                    <nidoca-text-body>${this.text}</nidoca-text-body>` : html``}
            </div>
        `;
    }

    private clicked() {
        this.dispatchEvent(
            new CustomEvent("nidoca-event-menu-item-clicked", {
                detail: this,
                bubbles: true,
                composed: true,
            })
        );
    }
}
