import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-h2")
export class NidocaTextH2 extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight:400;
      font-size:calc(var(--font-size) * 2);
      line-height:calc(var(--font-size) * 2);
    }
  `;
}
