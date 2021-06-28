import {css, customElement, html, property, unsafeCSS, LitElement, TemplateResult} from "lit";
import {NidocaDevice} from ".";
import { NidocaSpacerType } from "./nidoca-spacer";

@customElement("nidoca-gallery")
export class NidocaGallery extends LitElement {
  static styles = css`
    slot, ::slotted(slot) {
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      justify-content:space-evenly;
    }

    .flexItem,
    ::slotted(.flexItem) {
      flex-basis: 24%;
      padding-top: var(--space-medium);
    }
  `;

  render(): TemplateResult {
    return html`
    
    <nidoca-spacer .spacerTypes="${[NidocaSpacerType.BOTTOM]}">
    <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
    </nidoca-spacer>
    
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
