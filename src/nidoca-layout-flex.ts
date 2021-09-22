import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

export enum NidocaFlexLayoutDirection {
  ROW = "row",
  ROW_REVERSE = "rowData-reverse",
  COLUMN = "column",
  COLUMN_REVERSE = "column-reverse",
}

export enum NidocaFlexLayoutWrap {
  WRAP = "wrap",
  NO_WRAP = "nowrap",
  WRAP_REVERSE = "flexWrap-reverse",
}

export enum NidocaFlexLayoutJustifyContent {
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
}

export enum NidocaFlexLayoutAlignItems {
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  STRETCH = "stretch",
  START = "start",
  END = "end",
  BASELINE = "baseline",
  FIRST_BASELINE = "first baseline",
  LAST_BASLINE = "last baseline",
  SAFE = "safe",
  UNSAFE = "unsafe",
}

export enum NidocaFlexLayoutAlignContent {
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  STRETCH = "stretch",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
  SPACE_BETWEEN = "space-between",
  START = "start",
  END = "end",
  BASELINE = "baseline",
  FIRST_BASELINE = "first baseline",
  LAST_BASLINE = "last baseline",
  SAFE = "safe",
  UNSAFE = "unsafe",
}

@customElement("nidoca-layout-flex")
export class NidocaFlexLayout extends LitElement {
  static styles = css`
    :host,
    *,
    ::slotted(*) {
      box-sizing: border-box;
      display: inline-block;
    }

    .flexContainer,
    ::slotted(.flexContainer) {
      margin: auto;
      display: flex;
      overflow: auto;
      box-sizing: border-boxed;
      width: 100%;
    }

    .flexItem,
    ::slotted(.flexItem) {
      box-sizing: border-box;
    }
  `;

  @property({type: NidocaFlexLayoutDirection, converter: String})
  flexDirection: NidocaFlexLayoutDirection = NidocaFlexLayoutDirection.ROW;

  @property({type: NidocaFlexLayoutWrap, converter: String})
  flexWrap: NidocaFlexLayoutWrap = NidocaFlexLayoutWrap.WRAP;

  @property({type: NidocaFlexLayoutJustifyContent, converter: String})
  flexJustifyContent: NidocaFlexLayoutJustifyContent = NidocaFlexLayoutJustifyContent.FLEX_START;

  @property({type: NidocaFlexLayoutAlignItems, converter: String})
  flexAlignItems: NidocaFlexLayoutAlignItems = NidocaFlexLayoutAlignItems.FLEX_START;

  @property({type: NidocaFlexLayoutAlignContent, converter: String})
  flexAlignContent: NidocaFlexLayoutAlignContent = NidocaFlexLayoutAlignContent.FLEX_START;

  render(): any {
    return html`
      <slot
        class="flexContainer flexContainerDevice"
        style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this
          .flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this.flexAlignContent};"
        id="slotElement"
        @slotchange="${(event: Event) => this.slotChanged(event)}"
      ></slot>
    `;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    this.changeSlotComponentsStyle(slotElement);
  }

  private changeSlotComponentsStyle(slotElement: HTMLSlotElement | undefined) {
    if (slotElement == undefined) {
      return;
    }
    const elements: Element[] = slotElement.assignedElements();
    for (let index = 0; index < elements.length; index++) {
      const element: Element = elements[index];
      const classList = element.classList;
      if (!classList.contains("flexItem")) {
        classList.add("flexItem");
      }
      if (!classList.contains("flexItemDevice")) {
        classList.add("flexItemDevice");
      }
    }
  }
}
