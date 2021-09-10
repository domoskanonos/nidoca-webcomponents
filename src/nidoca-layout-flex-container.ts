import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

export enum NidocaFlexDirection {
  ROW = "row",
  ROW_REVERSE = "rowData-reverse",
  COLUMN = "column",
  COLUMN_REVERSE = "column-reverse",
}

export enum NidocaFlexWrap {
  WRAP = "wrap",
  NO_WRAP = "nowrap",
  WRAP_REVERSE = "flexWrap-reverse",
}

export enum NidocaFlexJustifyContent {
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
}

export enum NidocaFlexAlignItems {
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

export enum NidocaFlexAlignContent {
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

@customElement("nidoca-layout-flex-container")
export class NidocaLayoutFlexContainer extends LitElement {
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
      width:100%;
    }

    .flexItem,
    ::slotted(.flexItem) {
      box-sizing: border-box;
      overflow: auto;
    }
  `;

  @property({type: String})
  flexDirection: NidocaFlexDirection = NidocaFlexDirection.ROW;

  @property({type: String})
  flexWrap: NidocaFlexWrap = NidocaFlexWrap.WRAP;

  @property({type: String})
  flexJustifyContent: NidocaFlexJustifyContent = NidocaFlexJustifyContent.FLEX_START;

  @property({type: String})
  flexAlignItems: NidocaFlexAlignItems = NidocaFlexAlignItems.FLEX_START;

  @property({type: String})
  flexAlignContent: NidocaFlexAlignContent = NidocaFlexAlignContent.FLEX_START;

  @property({type: String})
  containerStyle: string = "";

  @property({type: String})
  itemStyle: string = "";

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
