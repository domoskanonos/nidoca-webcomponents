import { css, customElement, html, query, unsafeCSS, LitElement, property } from 'lit-element';
import { TabContentComponent } from './tab-content/component';
import { TabComponent } from './tab/component';

const componentCSS = require('./component.css');

export class TabType {
   static NORMAL: string = 'NORMAL';
   static FULL_WIDTH: string = 'FULL_WIDTH';
}

@customElement('component-tabs')
export class TabsComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   tabType: string = TabType.NORMAL;

   @query('#tabSlot')
   tabSlot: HTMLSlotElement | undefined;

   @query('#tabContentSlot')
   tabContentSlot: HTMLSlotElement | undefined;

   render() {
      return html`
         <component-grid-container
            @component-tab-click="${(event: CustomEvent) => this.tabClicked(event)}"
            .gridTemplateRows="${['auto', 'auto']}"
            .gridTemplateColumns="${['auto']}"
         >
            <slot id="tabSlot" name="tab" class="${this.tabType}"></slot>
            <slot id="tabContentSlot" name="tabContent"></slot>
         </component-grid-container>
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
               } else {
                  element.selected = false;
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
