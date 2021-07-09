import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import { property } from "lit/decorators/property";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from ".";
import {NidocaBorderProperty} from "./nidoca-border";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {VisibleType} from "./nidoca-visible";

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
          <nidoca-layout-flex-container
            class="ACCORDION_HEADER"
            @click="${() => this.toggle()}"
            .flexDirection="${FlexDirection.ROW}"
            .flexWrap="${FlexWrap.WRAP}"
            .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
            .flexAlignItems="${FlexAlignItems.CENTER}"
            .flexAlignContent="${FlexAlignContent.CENTER}"
          >
            <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.MEDIUM}" .spacerTypes="${[NidocaLayoutSpacerType.LEFT]}">
              <nidoca-typography text="${this.header}"></nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-icon icon="${this.opened ? "keyboard_arrow_down" : "keyboard_arrow_up"}"></nidoca-icon>
          </nidoca-layout-flex-container>
          <nidoca-visible visibleType="${this.opened ? VisibleType.NORMAL : VisibleType.HIDE}">
            <slot></slot>
          </nidoca-visible>
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
