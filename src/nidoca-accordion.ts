import { css, html, LitElement, TemplateResult, PropertyValues } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { query } from 'lit/decorators.js';

import { NidocaAccordionItem } from './nidoca-accordion-item';
import { NidocaTheme, NidocaThemeHelper } from './nidoca-meta';
import { NidocaArticle } from './nidoca-article';

export enum AccordionType {
  single = 'single',
  multi = 'multi',
}

@customElement('nidoca-accordion')
export class NidocaAccordion extends NidocaHtml {
  static styles = css`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.plain;

  @property({ type: AccordionType, converter: String })
  accordionType: string = AccordionType.single;

  @query('#accordionSlot')
  private accordionSlot: HTMLSlotElement | undefined;

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    changedProperties.forEach((_oldValue, propName) => {
      if (propName == 'theme') {
        if (this.accordionSlot != null) {
          const slottedElements = this.accordionSlot.assignedElements();
          for (let index = 0; index < slottedElements.length; index++) {
            const element = slottedElements[index];
            if (element instanceof NidocaAccordionItem) {
              element.theme = this.theme;
            }
          }
        }
      }
    });
  }

  render(): TemplateResult {
    return html`
      ${NidocaThemeHelper.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${(event: CustomEvent) => this.accordionSwitched(event)}"
        id="accordionSlot"
      ></slot>
    `;
  }

  private accordionSwitched(event: CustomEvent) {
    const accordionItemComponent: NidocaAccordionItem = event.detail;
    switch (this.accordionType) {
      case AccordionType.single:
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
      case AccordionType.multi:
        break;
    }
    event.stopPropagation();
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-accordion slot="${slotName}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${NidocaArticle.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${NidocaArticle.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${NidocaArticle.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${NidocaArticle.example()} </nidoca-accordion-item>
    </nidoca-accordion>`;
  }
}
