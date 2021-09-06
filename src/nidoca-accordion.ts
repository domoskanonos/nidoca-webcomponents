import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {NidocaBorderProperty} from ".";
import {NidocaAccordionItem} from "./nidoca-accordion-item";

export enum AccordionType {
  SINGLE = "SINGLE",
  MULTI = "MULTI",
}

@customElement("nidoca-accordion")
export class NidocaAccordion extends LitElement {
  static styles = css``;

  @property({type: AccordionType})
  accordionType: AccordionType = AccordionType.SINGLE;

  @query("#accordionSlot")
  private accordionSlot: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-border
        .borderProperties="${[NidocaBorderProperty.TOP, NidocaBorderProperty.FULL_WIDTH]}"
        @nidoca-event-accordion-item-clicked="${(event: CustomEvent) => this.accordionSwitched(event)}"
      >
        <slot id="accordionSlot"></slot>
      </nidoca-border>
    `;
  }

  private accordionSwitched(event: CustomEvent) {
    const accordionItemComponent: NidocaAccordionItem = event.detail;
    switch (this.accordionType) {
      case AccordionType.SINGLE:
        if (this.accordionSlot != null) {
          const assignedElements: Element[] = this.accordionSlot.assignedElements();
          for (let index = 0; index < assignedElements.length; index++) {
            const element: Element = assignedElements[index];
            if (element instanceof NidocaAccordionItem && element != accordionItemComponent) {
              element.opened = false;
            }
          }
        }
        break;
      case AccordionType.MULTI:
        break;
    }
  }
}
