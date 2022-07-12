import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-text")
export class NidocaText extends LitElement {
   static styles = css`
      :host,
      slot,
      ::slotted(:host),
      ::slotted(slot) {
         display: block;
         font-weight: 400;
         line-height: 1.5em;
      }
   `;

   @property({type: String})
   text: string = "";

   render(): TemplateResult {
      return html` <slot id="slotElement">${this.text}</slot>`;
   }
}
