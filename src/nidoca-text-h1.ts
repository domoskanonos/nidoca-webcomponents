import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-h1")
export class NidocaTextH1 extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight:600;
      font-size:calc(var(--font-size) * 4);
      line-height:calc(var(--font-size) * 4);
    }
  `;

}
