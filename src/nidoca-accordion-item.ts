import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaBorderProperty} from "./nidoca-border";

@customElement("nidoca-accordion-item")
export class NidocaAccordionItem extends LitElement {
  static styles = css`
    .ACCORDION_HEADER {
      cursor: pointer;
    }
  `;

  @property({type: String})
  header: string = "";

  @property({type: Boolean})
  opened: boolean = false;

  render(): TemplateResult {
    return html`
      <div class="ACCORDION_ITEM">
        <nidoca-border
          .borderProperties="${[
            NidocaBorderProperty.BOTTOM,
            NidocaBorderProperty.LEFT,
            NidocaBorderProperty.RIGHT,
            NidocaBorderProperty.FULL_WIDTH,
          ]}"
        >
          <div
            class="ACCORDION_HEADER"
            @click="${() => this.toggle()}"
            style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;align-content:center;"
          >
            <nidoca-layout-spacer left="var(--space-medium)">
              <nidoca-typography text="${this.header}"></nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-icon icon="${this.opened ? "keyboard_arrow_down" : "keyboard_arrow_up"}"></nidoca-icon>
          </div>
          ${this.opened ? html` <slot></slot>` : html``}
        </nidoca-border>
      </div>
    `;
  }

  toggle() {
    console.log("accordion clicked, state=" + this.opened);
    this.opened = Boolean(!this.opened);
    console.log("accordion clicked, after state=" + this.opened);
    this.dispatchEvent(
      new CustomEvent("nidoca-event-accordion-item-clicked", {detail: this, bubbles: true, composed: true})
    );
  }
}
