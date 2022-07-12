import {css} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-h5")
export class NidocaTextH5 extends NidocaText {
   static styles = css`
      :host,
      slot,
      ::slotted(:host),
      ::slotted(slot) {
         display: block;
         font-weight: 400;
         font-size: 110%;
         line-height: 1.5em;
      }
   `;
}
