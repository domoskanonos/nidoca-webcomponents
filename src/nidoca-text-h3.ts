import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-h3")
export class NidocaTextH3 extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-h1);
      line-height: 1;
      font-weight: 400;
    }
  `;

  render(): TemplateResult {
    return html` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`;
  }
}
