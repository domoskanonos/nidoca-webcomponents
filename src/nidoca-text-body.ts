import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-body")
export class NidocaTextBody extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size);
      line-height: 1.5;
      font-weight: 400;
    }
  `;
  render(): TemplateResult {
    return html` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-${this.theme});
        }
      </style>
      ${super.render()}`;
  }
}
