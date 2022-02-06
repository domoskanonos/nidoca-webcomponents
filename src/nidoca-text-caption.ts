import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-caption")
export class NidocaTextCaption extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-caption);
      line-height: calc(var(--font-size-caption) * var(--font-line-height-multiplicator));
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
