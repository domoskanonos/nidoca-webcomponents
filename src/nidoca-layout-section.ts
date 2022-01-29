import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {NidocaBorderProperty} from "./nidoca-border";
import {NidocaDevice} from "./";

@customElement("nidoca-layout-section")
export class NidocaLayoutSection extends LitElement {
  static styles = css`
    slot {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
  `;

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;
  render(): TemplateResult {
    return html`<nidoca-border .borderProperties="${[NidocaBorderProperty.BOTTOM]}">
      <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"> </slot
    ></nidoca-border>`;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    const elements: Element[] = slotElement.assignedElements();
    const elementSize = elements.length;
    for (let index = 0; index < elementSize; index++) {
      const element: Element = elements[index];
      const nidocaDevice: NidocaDevice | null = NidocaDevice.getCurrentScreen();
      if (nidocaDevice) {
        switch (nidocaDevice) {
          case NidocaDevice.MOBILE:
            element.setAttribute("style", "flex-basis:100%;");
            break;
          case NidocaDevice.TABLET:
          case NidocaDevice.DESKTOP:
            element.setAttribute("style", "flex-basis:" + String(100 / elementSize) + "%;");
            break;
        }
      }
    }
  }
}
