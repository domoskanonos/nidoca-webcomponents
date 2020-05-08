import { css, customElement, html, property, unsafeCSS, query, LitElement } from 'lit-element';
import { ListItemComponent } from './item/component';

const componentCSS = require('./component.css');

@customElement('nidoca-list')
export class ListComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   selectionMode: boolean = false;

   @query('#slotElement')
   slotElement: HTMLSlotElement | undefined;

   protected update(changedProperties: Map<PropertyKey, unknown>): void {
      super.update(changedProperties);
      if (changedProperties.get('selectionMode') != undefined) {
         this.getItems().forEach((listItemComponent) => {
            listItemComponent.selectionMode = this.selectionMode;
         });
      }
   }

   render() {
      return html`
         <slot class="LIST_SLOT" id="slotElement"></slot>
      `;
   }

   getItems(): ListItemComponent[] {
      let all: ListItemComponent[] = [];
      if (this.slotElement != null) {
         let slottedElements = this.slotElement.assignedElements();
         for (let index = 0; index < slottedElements.length; index++) {
            let element = slottedElements[index];
            if (element instanceof ListItemComponent) {
               all.push(element);
            }
         }
      }
      return all;
   }

   getSelectedItems(): ListItemComponent[] {
      let selection: ListItemComponent[] = [];
      if (this.slotElement != null) {
         let slottedElements = this.slotElement.assignedElements();
         for (let index = 0; index < slottedElements.length; index++) {
            let element = slottedElements[index];
            if (element instanceof ListItemComponent) {
               if (element.selected) {
                  selection.push(element);
               }
            }
         }
      }
      return selection;
   }
}
