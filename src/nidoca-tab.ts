import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-tab")
export class NidocaTab extends LitElement {
    static styles = css`
    :host {
      display:block;
    }
 
    .container {
      line-height: var(--height-min);
      height: var(--height-min);
      box-sizing:border-box;
      cursor: pointer;
      padding-right:var(--space);
    }
    
    slot {
      display:block;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
      }

  `;

    @property({type: Boolean})
    selected: boolean = false;

    @property({type: String})
    text: string = "";

    @property({type: String})
    theme: string = NidocaTheme.SURFACE;

    render(): TemplateResult {
        return html`
            <style>
                slot {
                    border-color: var(--app-color-${this.theme}-background);
                }
                slot.selected {
                    border-color: var(--app-color-${this.theme}-selected);
                }
            </style>
            <div class="container" @click="${() => this.tabClicked()}">
                ${this.text
                        ? html`
                            <nidoca-text text="${this.text}"></nidoca-text> `
                        : html``}
                <slot class="${this.selected ? "selected" : ""}"></slot>
            </div>
        `;
    }

    private tabClicked(): void {
        console.log("tab clicked.");
        this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked", {detail: this, bubbles: true, composed: true}));
    }
}
