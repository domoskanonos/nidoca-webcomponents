import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BorderProperties, SpacerAlignment, SpacerSize, VisibleType } from '../..';
import { GridAlignItems, GridJustifyItems } from '../../grid-container/component';
import { BasicService } from '@domoskanonos/frontend-basis/lib';

const componentCSS = require('./component.css');

@customElement('nidoca-accordion-item')
export class NidocaAccordionItem extends LitElement {

   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   header: string = '';

   @property()
   opened: boolean = false;

   render() {
      return html`
         <div class="ACCORDION_ITEM">
            <nidoca-border .borderProperties="${[BorderProperties.ALL, BorderProperties.FULL_WIDTH]}">
               <nidoca-grid-container
                  class="ACCORDION_HEADER"
                  @click="${() => this.toggle()}"
                  .gridJustifyItems="${GridJustifyItems.STRETCH}"
                  .gridAlignItems="${GridAlignItems.CENTER}"
                  .gridTemplateRows="${['1fr']}"
                  .gridTemplateColumns="${['auto', '1fr', 'auto']}"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.HORIZONTAL}"
                  ></nidoca-spacer>
                  <nidoca-typography text="${this.header}"></nidoca-typography>
                  <nidoca-icon icon="${this.opened ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}"></nidoca-icon>
               </nidoca-grid-container>
               <nidoca-visible visibleType="${this.opened ? VisibleType.NORMAL : VisibleType.HIDE}">
                  <slot></slot>
               </nidoca-visible>
            </nidoca-border>
         </div>
      `;
   }

   toggle() {
      console.log('accordion clicked, state=' + this.opened);
      this.opened = Boolean(!this.opened);
      console.log('accordion clicked, after state=' + this.opened);
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-accordion-item-clicked', this);
   }

}
