import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaMenuItem, NidocaTheme} from ".";

@customElement("nidoca-menu")
export class NidocaMenu extends LitElement {
   static styles = css`
      :host,
      slot {
         display: block;
      }
   `;

   @property({type: NidocaTheme, converter: String})
   theme: string | undefined = NidocaTheme.secondary;

   @query("#slotElement")
   private slotElement: HTMLSlotElement | undefined;

   render(): TemplateResult {
      return html` <style>
            :host,
            *,
            ::slotted(*) {
               color: var(--app-color-${this.theme});
               background-color: var(--app-color-${this.theme}-background);
               border-color: var(--app-color-${this.theme}-border);
            }
         </style>
         <slot id="slotElement"></slot>`;
   }

   protected firstUpdated() {
      this.addEventListener("click", (event: MouseEvent) => {
         if (this.slotElement != null) {
            const slottedElements = this.slotElement.assignedElements();
            for (let index = 0; index < slottedElements.length; index++) {
               const element = slottedElements[index];
               if (element instanceof NidocaMenuItem) {
                  const rect = element.getBoundingClientRect();
                  if (rect.left < event.x && rect.right > event.x) {
                     if (rect.top < event.y && rect.bottom > event.y) {
                        element.selected = true;
                     } else {
                        element.selected = false;
                     }
                  }
               }
            }
         }
      });
   }
}
