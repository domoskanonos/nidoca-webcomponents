import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaDevice} from ".";

@customElement("nidoca-section")
export class NidocaSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: auto;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    ::slotted(.item),
    item {
      display: block;
      flex-basis: auto;
    }

    @media only screen and (min-width: ${NidocaDevice.TABLET.minWidth}px) and (max-width: ${NidocaDevice.TABLET
        .maxWidth}px) {
    }

    @media only screen and (max-width: ${NidocaDevice.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `;

  @property({type: NidocaDevice, converter: Array})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET];

  @property({type: String})
  width: string = "100%";

  @query("#container")
  private container: HTMLElement | undefined;

  updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    if (_changedProperties.has("width") && this.width != "") {
      for (let i = 0; i < this.devices.length; i++) {
        const device: NidocaDevice = this.devices[i];
        if (this.container != undefined && device == NidocaDevice.getCurrentScreen()) {
          this.container.style.width = this.width;
        }
        break;
      }
    }
  }

  render(): TemplateResult {
    return html`
      <slot id="container" class="container" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
    `;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    const elements: Element[] = slotElement.assignedElements();
    const elementSize = elements.length;
    const modifyElements: HTMLElement[] = [];
    for (let index = 0; index < elementSize; index++) {
      const element: Element = elements[index];
      element.setAttribute("class", "item");
      for (let i = 0; i < this.devices.length; i++) {
        const device: NidocaDevice = this.devices[i];
        if (
          element instanceof HTMLElement &&
          element.style.width.length == 0 &&
          element.style.flexBasis.length == 0 &&
          device == NidocaDevice.getCurrentScreen()
        ) {
          modifyElements.push(element);
        }
        break;
      }
    }

    Hier noch die Größe des eigentlichen Elements abziehen udn die parent größe als grundlage nehmen
    const modifyElementsSize = modifyElements.length;
    for (let index = 0; index < modifyElementsSize; index++) {
      const htmlElement: HTMLElement = modifyElements[index];
      htmlElement.style.flexBasis = String(100 / modifyElementsSize) + "%";
    }
  }
}
