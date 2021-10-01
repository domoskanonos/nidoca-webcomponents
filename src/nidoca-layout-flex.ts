import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

export class NidocaFlexLayoutDirection {
  static readonly ROW = "row";
  static readonly ROW_REVERSE = "rowData-reverse";
  static readonly COLUMN = "column";
  static readonly COLUMN_REVERSE = "column-reverse";
}

export class NidocaFlexLayoutWrap {
  static readonly WRAP = "wrap";
  static readonly NO_WRAP = "nowrap";
  static readonly WRAP_REVERSE = "flexWrap-reverse";
}

export class NidocaFlexLayoutJustifyContent {
  static readonly FLEX_START = "flex-start";
  static readonly FLEX_END = "flex-end";
  static readonly CENTER = "center";
  static readonly SPACE_BETWEEN = "space-between";
  static readonly SPACE_AROUND = "space-around";
  static readonly SPACE_EVENLY = "space-evenly";
}

export class NidocaFlexLayoutAlignItems {
  static readonly FLEX_START = "flex-start";
  static readonly FLEX_END = "flex-end";
  static readonly CENTER = "center";
  static readonly STRETCH = "stretch";
  static readonly START = "start";
  static readonly END = "end";
  static readonly BASELINE = "baseline";
  static readonly FIRST_BASELINE = "first baseline";
  static readonly LAST_BASLINE = "last baseline";
  static readonly SAFE = "safe";
  static readonly UNSAFE = "unsafe";
}

export class NidocaFlexLayoutAlignContent {
  static readonly FLEX_START = "flex-start";
  static readonly FLEX_END = "flex-end";
  static readonly CENTER = "center";
  static readonly STRETCH = "stretch";
  static readonly SPACE_AROUND = "space-around";
  static readonly SPACE_EVENLY = "space-evenly";
  static readonly SPACE_BETWEEN = "space-between";
  static readonly START = "start";
  static readonly END = "end";
  static readonly BASELINE = "baseline";
  static readonly FIRST_BASELINE = "first baseline";
  static readonly LAST_BASLINE = "last baseline";
  static readonly SAFE = "safe";
  static readonly UNSAFE = "unsafe";
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
