import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';

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
      return html`<div class="accordion">
                           <div
                              class="accordionHeader" 
                              @click="${() => this.toggle()}"
                           >
                              <component-typography text="${this.header}"></component-typography>
                              <component-icon style="float:right;"
                                 icon="${this.stateClazz == 'closed' ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}"
                              ></component-icon>
                           </div>
                           <div class="accordionContent ${this.stateClazz}">      
                                <slot></slot>                           
                           </div>
                        </div>
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
