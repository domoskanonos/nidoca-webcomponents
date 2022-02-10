import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-overline")
export class NidocaTextOverline extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-caption);
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
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
