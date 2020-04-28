import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BorderType } from '../..';
import { GridAlignItems, GridJustifyItems } from '../../grid-container/component';

const componentCSS = require('./component.css');

@customElement('component-accordion-item')
export class AccordionItemComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   header: string = '';

   @property()
   stateClazz: string = 'closed';

   render() {
      return html`
         <div class="ACCORDION_ITEM">
            <component-border borderType="${BorderType.ALL}">
               <component-grid-container class="ACCORDION_HEADER"
                  @click="${() => this.toggle()}"
                  .gridJustifyItems="${GridJustifyItems.CENTER}"
                  .gridAlignItems="${GridAlignItems.CENTER}"
                  .gridTemplateRows="${['1fr']}"
                  .gridTemplateColumns="${['1fr', '1fr']}"
               >
                  <component-typography text="${this.header}"></component-typography>
                  <component-icon
                     style="float:right;"
                     icon="${this.stateClazz == 'closed' ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}"
                  ></component-icon>
               </component-grid-container>

               <div class="accordionContent ${this.stateClazz}">
                  <slot></slot>
               </div>
            </component-border>
         </div>
      `;
   }

   toggle() {
      console.log('accordion clicked, state=' + this.stateClazz);
      if ('open' == this.stateClazz) {
         this.stateClazz = 'closed';
      } else {
         this.stateClazz = 'open';
      }
      console.log('accordion clicked, after state=' + this.stateClazz);
      //this.reqUpdate();
   }
}
