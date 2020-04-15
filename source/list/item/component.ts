import {css, customElement, html, LitElement, property, unsafeCSS} from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
import { BorderType } from '../..';


const componentCSS = require('./component.css');

@customElement('component-list-item')
export class ListItemComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static EVENT_LIST_ITEM_CLICKED: string = 'component-list-item-clicked';
   static EVENT_LIST_ITEM_SELECT: string = 'component-list-item-select';
   static EVENT_LIST_ITEM_UNSELECT: string = 'component-list-item-unselect';

   @property()
   index: number = -1;

   @property()
   selectMode: boolean = false;

   @property()
   selected: boolean = false;

   render() {
      return html`
         <component-border borderType="${BorderType.BOTTOM}">
            <component-grid-container .gridTemplateRows="${['1fr']}" .gridTemplateColumns="${['auto', '1fr']}">
               <component-icon
                  .rendered="${this.selectMode}"
                  @click="${() => this.switchSelected()}"
                  icon="${this.selected ? 'check_box' : 'check_box_outline_blank'}"
               ></component-icon>
               <slot @click="${() => this.itemClicked()}"></slot>
            </component-grid-container>
         </component-border>
      `;
   }

   itemClicked() {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ListItemComponent.EVENT_LIST_ITEM_CLICKED, this.index);
   }

   switchSelected() {
      this.selected = !this.selected;
      if (this.selected) {
         BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ListItemComponent.EVENT_LIST_ITEM_SELECT, this.index);
      } else {
         BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ListItemComponent.EVENT_LIST_ITEM_UNSELECT, this.index);
      }
   }

}
