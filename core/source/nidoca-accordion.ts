import {css, customElement, html, property, query, TemplateResult, unsafeCSS} from 'lit-element';
import {LitElement} from 'lit-element';
import {BorderProperties} from '.';
import {NidocaAccordionItem} from './nidoca-accordion-item';

export enum AccordionType {
  SINGLE = 'SINGLE',
  MULTI = 'MULTI',
}

@customElement('nidoca-accordion')
export class NidocaAccordion extends LitElement {
  static styles = css``;

  @property()
  accordionType: AccordionType = AccordionType.SINGLE;

  @query('#accordionSlot')
  private accordionSlot: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-border
        .borderProperties="${[BorderProperties.TOP, BorderProperties.FULL_WIDTH]}"
        @nidoca-event-accordion-item-clicked="${(event: CustomEvent) => this.accordionSwitched(event)}"
      >
        <slot id="accordionSlot"></slot>
      </nidoca-border>
    `;
  }

  private accordionSwitched(event: CustomEvent) {
    let accordionItemComponent: NidocaAccordionItem = event.detail;
    switch (this.accordionType) {
      case AccordionType.SINGLE:
        if (this.accordionSlot != null) {
          let assignedElements: Element[] = this.accordionSlot.assignedElements();
          for (let index = 0; index < assignedElements.length; index++) {
            let element: Element = assignedElements[index];
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
