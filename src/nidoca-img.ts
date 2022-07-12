import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-img")
export class NidocaImg extends LitElement {
   static styles = css`
      :host {
         font-size: 0;
      }
      :host img {
         object-position: center;
         object-fit: cover;
      }
   `;

   @property({type: String})
   src: string = "";

   @property({type: String})
   width: string = "100%";

   @property({type: String})
   height: string = "100%";

   render(): TemplateResult {
      return this.src
         ? html`<img width="${this.width}" height="${this.height}" src="${this.src}" />`
         : html``;
   }
}
