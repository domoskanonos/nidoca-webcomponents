import { css, customElement, html, query, unsafeCSS, LitElement, property } from 'lit-element';
import { TabContentComponent } from './tab-content/component';
import { TabComponent } from './tab/component';

const componentCSS = require('./component.css');

@customElement('nidoca-tabs')
export class TabsComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @query('#tabSlot')
   tabSlot: HTMLSlotElement | undefined;

   @query('#tabContentSlot')
   tabContentSlot: HTMLSlotElement | undefined;

   protected firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void {
      super.firstUpdated(_changedProperties);
      this.changeSelectedTabStyle();
   }

   protected update(changedProperties: Map<PropertyKey, unknown>): void {
      super.update(changedProperties);
      if (changedProperties.get('tabType') != undefined) {
         this.changeSelectedTabStyle();
      }
   }

   private changeSelectedTabStyle() {
      if (this.tabSlot != null) {
         let assignedElements: Element[] = this.tabSlot.assignedElements();
         console.log(assignedElements.length);
         let length: number = assignedElements.length;
         let widthPerTab = 100 / length;
         for (let index = 0; index < assignedElements.length; index++) {
            let element: Element = assignedElements[index];
            if (element instanceof TabComponent) {
               element.style.width = String(widthPerTab).concat('%');
               if (element.selected) {
                  element.classList.add('SELECTED');
               }
            }
         }
      }
   }

   render() {
      return html`
         <nidoca-grid-container
            @component-tab-click="${(event: CustomEvent) => this.tabClicked(event)}"
            .gridTemplateRows="${['auto', 'auto']}"
            .gridTemplateColumns="${['100%']}"
         >
            <slot id="tabSlot" name="tab"></slot>
            <slot id="tabContentSlot" name="tabContent"></slot>
         </nidoca-grid-container>
      `;
   }

   private tabClicked(event: CustomEvent): void {
      let clickedTab: TabComponent = event.detail;

      if (clickedTab.selected) {
         return;
      }

      let tabIndex: number = 0;
      if (this.tabSlot != null) {
         let assignedElements: Element[] = this.tabSlot.assignedElements();
         for (let index = 0; index < assignedElements.length; index++) {
            let element: Element = assignedElements[index];
            if (element instanceof TabComponent) {
               if (element == clickedTab) {
                  tabIndex = index;
                  element.selected = true;
                  element.classList.add('SELECTED');
               } else {
                  element.selected = false;
                  element.classList.remove('SELECTED');
               }
            }
         }
      }

      console.log('tab selected, index = %s', tabIndex);

      let tabContentIndex: number = 0;
      if (this.tabContentSlot != null) {
         let assignedElements: Element[] = this.tabContentSlot.assignedElements();
         for (let index = 0; index < assignedElements.length; index++) {
            let tabContentElement: Element = assignedElements[index];
            if (tabContentElement instanceof TabContentComponent) {
               if (tabIndex == tabContentIndex) {
                  tabContentElement.selected = true;
               } else {
                  tabContentElement.selected = false;
               }
               tabContentIndex++;
            }
         }
      }
   }
}
