import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-menu-item")
export class NidocaMenuItem extends LitElement {
    static styles = css`
    .container {
      display: flex;
      cursor: pointer;
      padding:var(--space);
    }
    
    .container:hover {
      backdrop-filter: brightness(var(--app-darken-1));
    }
    
    .selected {
      backdrop-filter: brightness(var(--app-darken-2));    
    }
      
  `;

    @property({type: String})
    text: string = "";

    @property({type: String})
    icon: string = "";

    @property({type: Boolean})
    selected: boolean = false;

    render(): TemplateResult {
        return html`
            <div class="container ${this.selected ? "selected" : ""}" @click="${() => this.clicked()}">
                ${this.icon
                        ? html`
                            <nidoca-icon
                                    slot="graphic"
                                    icon="${this.icon}"
                                    style="padding-right:var(--space); font-size:var(--icon-size);"
                            ></nidoca-icon>`
                        : html``}
                ${this.text ? html`
                    <nidoca-text>${this.text}</nidoca-text>` : html``}
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
