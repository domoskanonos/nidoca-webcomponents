import {css, html, TemplateResult,LitElement} from "lit";
import {customElement} from "lit/decorators";
import {query} from "lit/decorators";
import {NidocaTabContent} from "./nidoca-tab-content";
import {NidocaTab} from "./nidoca-tab";

@customElement("nidoca-tabs")
export class NidocaTabs extends LitElement {
  static styles = css`
    slot {
      display: inline;
    }

    #tabSlot {
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  @query("#tabSlot")
  private tabSlot: HTMLSlotElement | undefined;

  @query("#tabContentSlot")
  private tabContentSlot: HTMLSlotElement | undefined;

  protected firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void {
    super.firstUpdated(_changedProperties);
    this.changeSelectedTabStyle();
  }

  protected update(changedProperties: Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.get("tabType") != undefined) {
      this.changeSelectedTabStyle();
    }
  }

  private changeSelectedTabStyle() {
    if (this.tabSlot != null) {
      const assignedElements: Element[] = this.tabSlot.assignedElements();
      console.log(assignedElements.length);
      const length: number = assignedElements.length;
      const widthPerTab = 100 / length;
      for (let index = 0; index < assignedElements.length; index++) {
        const element: Element = assignedElements[index];
        if (element instanceof NidocaTab) {
          element.style.width = String(widthPerTab).concat("%");
          if (element.selected) {
            element.classList.add("SELECTED");
          }
        }
      }
    }
  }

  render(): TemplateResult {
    return html`
      <nidoca-grid-container
        @nidoca-event-tab-clicked="${(event: CustomEvent) => this.tabClicked(event)}"
        .gridTemplateRows="${["auto", "auto"]}"
        .gridTemplateColumns="${["100%"]}"
      >
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </nidoca-grid-container>
    `;
  }

  private tabClicked(event: CustomEvent): void {
    const clickedTab: NidocaTab = event.detail;

    if (clickedTab.selected) {
      return;
    }

    let tabIndex: number = 0;
    if (this.tabSlot != null) {
      const assignedElements: Element[] = this.tabSlot.assignedElements();
      for (let index = 0; index < assignedElements.length; index++) {
        const element: Element = assignedElements[index];
        if (element instanceof NidocaTab) {
          if (element == clickedTab) {
            tabIndex = index;
            element.selected = true;
            element.classList.add("SELECTED");
          } else {
            element.selected = false;
            element.classList.remove("SELECTED");
          }
        }
      }
    }

    console.log("tab selected, index = %s", tabIndex);

    let tabContentIndex: number = 0;
    if (this.tabContentSlot != null) {
      const assignedElements: Element[] = this.tabContentSlot.assignedElements();
      for (let index = 0; index < assignedElements.length; index++) {
        const tabContentElement: Element = assignedElements[index];
        if (tabContentElement instanceof NidocaTabContent) {
          if (tabIndex == tabContentIndex) {
            tabContentElement.selected = true;
          } else {
            tabContentElement.selected = false;
          }
          tabContentIndex++;
        }
      }
    }
  }
}
