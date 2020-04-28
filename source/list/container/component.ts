import { css, customElement, html, property, unsafeCSS, query, LitElement } from 'lit-element';
import { ListItemComponent } from '../item/component';
import { BasicService } from '@domoskanonos/frontend-basis';
import { BorderType } from '../..';

const componentCSS = require('./component.css');

@customElement('component-list')
export class ListComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static EVENT_SELECTION_CHANGED: string = 'component-list-selection-changed';

   static EVENT_SELECTION_MODE_CHANGED: string = 'component-list-selection-mode-changed';

   @property()
   selectMode: boolean = false;

   @query('#slotElement')
   slotElement: HTMLSlotElement | undefined;

   render() {
      return html`
         <component-border borderType="${BorderType.BOTTOM}">
            <slot
               class="LIST_SLOT"
               id="slotElement"
               @component-list-item-select="${(event: CustomEvent) => this.listItemSelected(event)}"
               @component-list-item-unselect="${(event: CustomEvent) => this.listItemUnSelected(event)}"
            ></slot>
         </component-border>
      `;
   }

   listItemSelected(event: CustomEvent) {
      let index: number = event.detail;
      console.log(index);
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ListComponent.EVENT_SELECTION_CHANGED, index);
   }

   listItemUnSelected(event: CustomEvent) {
      let index: number = event.detail;
      console.log(index);
      if (this.getOutputData().length == 0) {
         this.resetSelectionMode();
      }
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, ListComponent.EVENT_SELECTION_CHANGED, index);
   }

   resetSelectionMode(): void {
      this.selectMode = false;
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(
         this,
         ListComponent.EVENT_SELECTION_MODE_CHANGED,
         this.selectMode
      );
   }

   getOutputData(): number[] {
      let selection: number[] = [];
      if (this.slotElement != null) {
         let slottedElements = this.slotElement.assignedElements();
         let indexListItemComponents = 0;
         for (let index = 0; index < slottedElements.length; index++) {
            let element = slottedElements[index];
            if (element instanceof ListItemComponent) {
               if (element.selected) {
                  selection.push(indexListItemComponents);
               }
               indexListItemComponents++;
            }
         }
      }
      return selection;
   }
}
