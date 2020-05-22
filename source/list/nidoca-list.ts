import { css, customElement, html, property, query, LitElement } from 'lit-element';
import { NidocaListItem } from './item/nidoca-list-item';

@customElement('nidoca-list')
export class NidocaList extends LitElement {
   static styles = css`
      .LIST_SLOT {
         display: grid;
         grid-template-rows: 1fr;
         grid-template-columns: 1fr;
      }
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
      return html` <slot class="LIST_SLOT" id="slotElement"></slot> `;
   }

   getItems(): NidocaListItem[] {
      let all: NidocaListItem[] = [];
      if (this.slotElement != null) {
         let slottedElements = this.slotElement.assignedElements();
         for (let index = 0; index < slottedElements.length; index++) {
            let element = slottedElements[index];
            if (element instanceof NidocaListItem) {
               all.push(element);
            }
         }
      }
      return all;
   }

   getSelectedItems(): NidocaListItem[] {
      let selection: NidocaListItem[] = [];
      if (this.slotElement != null) {
         let slottedElements = this.slotElement.assignedElements();
         for (let index = 0; index < slottedElements.length; index++) {
            let element = slottedElements[index];
            if (element instanceof NidocaListItem) {
               if (element.selected) {
                  selection.push(element);
               }
            }
         }
      }
      return selection;
   }

   getSelectedIndexes(): number[] {
      let selection: number[] = [];
      if (this.slotElement != null) {
         let slottedElements = this.slotElement.assignedElements();
         for (let index = 0; index < slottedElements.length; index++) {
            let element = slottedElements[index];
            if (element instanceof NidocaListItem) {
               if (element.selected) {
                  selection.push(index);
               }
            }
         }
      }
      return selection;
   }
}
