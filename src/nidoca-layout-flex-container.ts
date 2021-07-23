import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {query} from "lit/decorators/query";

import {NidocaDevice} from ".";

export enum FlexDirection {
  ROW = "row",
  ROW_REVERSE = "rowData-reverse",
  COLUMN = "column",
  COLUMN_REVERSE = "column-reverse",
}

export enum FlexWrap {
  WRAP = "wrap",
  NO_WRAP = "nowrap",
  WRAP_REVERSE = "flexWrap-reverse",
}

export enum FlexJustifyContent {
  FLEX_START = "flex-start",
  FLEX_END = "flex-end",
  CENTER = "center",
  SPACE_BETWEEN = "space-between",
  SPACE_AROUND = "space-around",
  SPACE_EVENLY = "space-evenly",
}

export enum FlexAlignItems {
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

export enum FlexAlignContent {
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
    }

    .flexContainer,
    ::slotted(.flexContainer) {
      margin: auto;
      display: flex;
      overflow: auto;
      box-sizing: border-boxed;
    }

    .flexItem,
    ::slotted(.flexItem) {
      box-sizing: border-box;
      overflow: auto;
    }
  `;

  @property({type: Array})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET, NidocaDevice.MOBILE];

  @property({type: String})
  flexDirection: FlexDirection = FlexDirection.ROW;

  @property({type: String})
  flexWrap: FlexWrap = FlexWrap.WRAP;

  @property({type: String})
  flexJustifyContent: FlexJustifyContent = FlexJustifyContent.FLEX_START;

  @property({type: String})
  flexAlignItems: FlexAlignItems = FlexAlignItems.FLEX_START;

  @property({type: String})
  flexAlignContent: FlexAlignContent = FlexAlignContent.FLEX_START;

  @property({type: String})
  containerStyle: string = "";

  @property({type: String})
  itemStyle: string = "";

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html`
      <style>
        ${this.toDeviceStyle("flexContainerDevice", this.devices, this.containerStyle)}
        ${this.toDeviceStyle("flexItemDevice", this.devices, this.itemStyle)}
      </style>
      <slot
        class="flexContainer flexContainerDevice"
        style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this
          .flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this.flexAlignContent};"
        id="slotElement"
        @slotchange="${(event: Event) => this.slotChanged(event)}"
      ></slot>
    `;
  }

  slotChanged(event: Event) : void {
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

  toDeviceStyle(className: string, devices: NidocaDevice[], style: string): string {
    style = ".".concat(className).concat(", ::slotted(.").concat(className).concat(") {").concat(style).concat().concat("}");
    let styleAll = "";
    devices.forEach((device: NidocaDevice) => {
      styleAll = styleAll.concat(device.asMediaStyle(style));
    });
    return styleAll;
  }
}
