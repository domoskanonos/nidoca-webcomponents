import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BorderType, SpacerAlignment, SpacerSize, VisibleType } from '../..';
import { GridAlignItems, GridJustifyItems } from '../../grid-container/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

@customElement('component-accordion-item')
export class AccordionItemComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static EVENT_CLICK: string = 'component-accordion-item-click';

   @property()
   header: string = '';

   @property()
   opened: boolean = false;

   render() {
      return html`
         <div class="ACCORDION_ITEM">
            <component-border .borderProperties="${[BorderType.ALL, BorderType.FULL_WIDTH]}">
               <component-grid-container
                  class="ACCORDION_HEADER"
                  @click="${() => this.toggle()}"
                  .gridJustifyItems="${GridJustifyItems.STRETCH}"
                  .gridAlignItems="${GridAlignItems.CENTER}"
                  .gridTemplateRows="${['1fr']}"
                  .gridTemplateColumns="${['auto', '1fr', 'auto']}"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.HORIZONTAL}"
                  ></component-spacer>
                  <component-typography text="${this.header}"></component-typography>
                  <component-icon icon="${this.opened ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}"></component-icon>
               </component-grid-container>
               <component-visible visibleType="${this.opened ? VisibleType.NORMAL : VisibleType.HIDE}">
                  <slot></slot>
               </component-visible>
            </component-border>
         </div>
      `;
   }

   toggle() {
      console.log('accordion clicked, state=' + this.opened);
      this.opened = Boolean(!this.opened);
      console.log('accordion clicked, after state=' + this.opened);
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, AccordionItemComponent.EVENT_CLICK, this);
   }
}
