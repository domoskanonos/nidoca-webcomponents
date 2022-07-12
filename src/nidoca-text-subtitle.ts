import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-subtitle")
export class NidocaTextSubtitle extends NidocaText {
   static styles = css`
      :host,
      slot,
      ::slotted(:host),
      ::slotted(slot) {
         display: block;
         line-height: 1;
         font-weight: 400;
      }
   `;
   render(): TemplateResult {
      return html` ${super.render()}`;
   }
}
