import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";

import {NidocaDevice} from ".";

@customElement("nidoca-layout-flex-device")
export class NidocaLayoutFlexDevice extends LitElement {
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
  containerStyle: string = "";

  @property({type: String})
  itemStyle: string = "";

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  render(): any {
    return html`
      <style>
        ${this.toDeviceStyle("flexContainerDevice", this.devices, this.containerStyle)}
        ${this.toDeviceStyle("flexItemDevice", this.devices, this.itemStyle)}
      </style>
      TODO:
      <slot></slot>
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

  toDeviceStyle(className: string, devices: NidocaDevice[], style: string): string {
    style = "."
      .concat(className)
      .concat(", ::slotted(.")
      .concat(className)
      .concat(") {")
      .concat(style)
      .concat()
      .concat("}");
    let styleAll = "";
    devices.forEach((device: NidocaDevice) => {
      styleAll = styleAll.concat(device.asMediaStyle(style));
    });
    return styleAll;
  }
}
