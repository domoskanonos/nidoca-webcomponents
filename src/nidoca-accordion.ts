import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {NidocaTheme, NidocaThemeHelper} from ".";
import {NidocaAccordionItem} from "./nidoca-accordion-item";

export enum AccordionType {
   SINGLE = "SINGLE",
   MULTI = "MULTI",
}

@customElement("nidoca-accordion")
export class NidocaAccordion extends LitElement {
   static styles = css`
      :host {
         border-top-style: solid;
         border-width: thin;
         display: block;
         width: 100%;
         box-sizing: border-box;
      }

      slot {
         font-size: 0;
      }
   `;

   @property({type: NidocaTheme, converter: String})
   theme: string = NidocaTheme.surface;

   @property({type: AccordionType, converter: String})
   accordionType: string = AccordionType.SINGLE;

   @query("#accordionSlot")
   private accordionSlot: HTMLSlotElement | undefined;

   render(): TemplateResult {
      return html`
         ${NidocaThemeHelper.getStyle(this.theme)}
         <slot
            @nidoca-event-accordion-item-clicked="${(event: CustomEvent) =>
               this.accordionSwitched(event)}"
            id="accordionSlot"
         ></slot>
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
      event.stopPropagation();
   }
}
