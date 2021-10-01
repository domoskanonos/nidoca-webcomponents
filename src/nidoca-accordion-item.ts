import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {
  NidocaLayoutFlexAlignContent,
  NidocaLayoutFlexAlignItems,
  NidocaLayoutFlexDirection,
  NidocaLayoutFlexJustifyContent,
  NidocaLayoutFlexWrap,
} from ".";
import {NidocaBorderProperty} from "./nidoca-border";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";

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

  render(): any {
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
          <nidoca-layout-flex
            class="ACCORDION_HEADER"
            @click="${() => this.toggle()}"
            .flexDirection="${NidocaLayoutFlexDirection.ROW}"
            .flexWrap="${NidocaLayoutFlexWrap.WRAP}"
            .flexJustifyContent="${NidocaLayoutFlexJustifyContent.SPACE_BETWEEN}"
            .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
            .flexAlignContent="${NidocaLayoutFlexAlignContent.CENTER}"
          >
            <nidoca-layout-spacer
              spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
              .spacerTypes="${[NidocaLayoutSpacerType.LEFT]}"
            >
              <nidoca-typography text="${this.header}"></nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-icon icon="${this.opened ? "keyboard_arrow_down" : "keyboard_arrow_up"}"></nidoca-icon>
          </nidoca-layout-flex>
          ${this.opened ? html`<slot></slot>` : html``}
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
