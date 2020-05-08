import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
import { VisibleType } from '../..';
import { GridAlignItems, GridJustifyItems } from '../../grid-container/component';

const componentCSS = require('./component.css');

@customElement('nidoca-list-item')
export class ListItemComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static EVENT_LIST_ITEM_CLICKED: string = 'component-list-item-clicked';
   static EVENT_LIST_ITEM_SELECT: string = 'component-list-item-select';
   static EVENT_LIST_ITEM_UNSELECT: string = 'component-list-item-unselect';

   @property()
   selectionMode: boolean = false;

   @property()
   selected: boolean = false;

   protected update(changedProperties: Map<PropertyKey, unknown>): void {
      super.update(changedProperties);
      if (changedProperties.get('selectionMode') != undefined) {
         if (!this.selectionMode) {
            this.selected = false;
         }
      }
   }

   render() {
      return html`
         <nidoca-ripple>
            <nidoca-grid-container
               class="LIST_ITEM"
               .gridJustifyItems="${GridJustifyItems.START}"
               .gridAlignItems="${GridFlexAlignItems.CENTER}"
               .gridTemplateRows="${['1fr']}"
               .gridTemplateColumns="${['auto', '1fr']}"
            >
               <nidoca-visible visibleType="${this.selectionMode ? VisibleType.NORMAL : VisibleType.HIDE}">
                  <nidoca-icon
                     @click="${() => this.switchSelected()}"
                     icon="${this.selected ? 'check_box' : 'check_box_outline_blank'}"
                  ></nidoca-icon>
               </nidoca-visible>
               <slot class="LIST_ITEM_SLOT" @click="${() => this.itemClicked()}"></slot> </nidoca-grid-container
         ></nidoca-ripple>
      `;
   }

   itemClicked() {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ListItemComponent.EVENT_LIST_ITEM_CLICKED, this);
   }

   switchSelected() {
      this.selected = Boolean(!this.selected);
      if (this.selected) {
         BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ListItemComponent.EVENT_LIST_ITEM_SELECT, this);
      } else {
         BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ListItemComponent.EVENT_LIST_ITEM_UNSELECT, this);
      }
   }
}
