import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
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
    .item {
      display: block;
    }

    @media only screen and (min-width: ${NidocaDevice.TABLET.minWidth}px) and (max-width: ${NidocaDevice.TABLET
        .maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
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

  private flexBasis: string = "auto";

  render(): TemplateResult {
    return html`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
    `;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    const slotWidth = slotElement.offsetWidth;
    const elements: Element[] = slotElement.assignedElements();
    const elementSize = elements.length;
    const modifyElements: HTMLElement[] = [];
    let elementWidths: number = 0;
    for (let index = 0; index < elementSize; index++) {
      const element: Element = elements[index];
      element.setAttribute("class", "item");
      if (element instanceof HTMLElement) {
        const elementWidthStyle = element.style.width;
        if (elementWidthStyle.length == 0) {
          modifyElements.push(element);
        } else {
          const elementWidthToUpperCase = elementWidthStyle.toUpperCase();
          const elementWidth: number =
            elementWidthToUpperCase.indexOf("PX") > -1
              ? Number(elementWidthToUpperCase.replace("PX", ""))
              : (Number(elementWidthToUpperCase.replace("%", "")) / 100) * slotWidth;
          elementWidths += elementWidth;
        }
      }
    }
    let calculationPercent: number = 100;
    if (elementWidths > 0) {
      calculationPercent = 100 - 100 * (elementWidths / slotWidth);
    }
    this.flexBasis = String(calculationPercent / modifyElements.length) + "%";
    this.requestUpdate();
  }
}
