import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { AbstractInputData } from '../../abstract-component/component';
import { LitElement } from 'lit-element';
import { AccordionItemComponent, AccordionItemInputData } from '../item/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class AccordionInputData extends AbstractInputData {
   items?: AccordionItemInputData[];
}

@customElement('component-accordion')
export class AccordionComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'AccordionComponent';

   @property()
   items: AccordionItemInputData[] = [];

   render() {
      return html`
         <div>
            ${guard(
               [this.items],
               () => html`
                  ${repeat(
                     this.items,
                     (item) => item.header,
                     (item) => html`
                        <component-accordion-item .inputData="${item}"></component-accordion-item>
                     `
                  )}
               `
            )}
            <slot></slot>
         </div>
      `;
   }
}
