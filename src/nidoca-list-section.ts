import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme, NidocaThemeHelper} from "./nidoca-meta";

@customElement("nidoca-list-section")
export class NidocaListSection extends LitElement {
   static styles = css`
  :host {
     display:block;
     padding-left: var(--space-2);  
  `;

   @property({type: NidocaTheme, converter: String})
   theme: string | undefined;

   @property({type: String})
   text: string = "";

   constructor() {
      super();
      this.theme = NidocaThemeHelper.prototype.getParentTheme(this) || NidocaTheme.background;
   }

   render(): TemplateResult {
      return html`
         <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
            <slot></slot>
         </nidoca-text-caption>
      `;
   }
}
