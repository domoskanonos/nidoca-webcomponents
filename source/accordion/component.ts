import { css, customElement, html, property, query, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { AccordionItemComponent } from './item/component';
import { TabComponent } from '..';

const componentCSS = require('./component.css');

export class AccordionType {
   static SINGLE: string = 'SINGLE';
   static MULTI: string = 'MULTI';
}

@customElement('component-accordion')
export class AccordionComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   accordionType: string = AccordionType.SINGLE;

   @query('#accordionSlot')
   accordionSlot: HTMLSlotElement | undefined;

   render() {
      return html`
         <div @component-accordion-item-click="${(event: CustomEvent) => this.accordionSwitched(event)}">
            <slot id="accordionSlot"></slot>
         </div>
      `;
   }

   private accordionSwitched(event: CustomEvent) {
      let accordionItemComponent: AccordionItemComponent = event.detail;
      switch (this.accordionType) {
         case AccordionType.SINGLE:
            if (this.accordionSlot != null) {
               let assignedElements: Element[] = this.accordionSlot.assignedElements();
               for (let index = 0; index < assignedElements.length; index++) {
                  let element: Element = assignedElements[index];
                  if (element instanceof AccordionItemComponent && element != accordionItemComponent) {
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
