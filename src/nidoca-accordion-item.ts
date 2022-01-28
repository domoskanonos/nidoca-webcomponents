import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaBorderProperty} from "./nidoca-border";

@customElement("nidoca-accordion-item")
export class NidocaAccordionItem extends LitElement {
  static styles = css`
    :host {
      width: 100%;
    }

    .container {
      display: block;
      border: 1px solid black;
      width: 100%;
    }
  `;

  @property({type: String})
  header: string = "";

  @property({type: Boolean})
  opened: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-border
        style="width:100%;"
        .borderProperties="${[NidocaBorderProperty.BOTTOM, NidocaBorderProperty.LEFT, NidocaBorderProperty.RIGHT]}"
      >
        <div
          @click="${() => this.toggle()}"
          style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;align-content:center; cursor:pointer;"
        >
          <nidoca-typography style="padding-left:var(--space-medium);" text="${this.header}"></nidoca-typography>
          <nidoca-icon icon="${this.opened ? "keyboard_arrow_down" : "keyboard_arrow_up"}"></nidoca-icon>
        </div>
        ${this.opened ? html` <slot></slot>` : html``}
      </nidoca-border>
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
