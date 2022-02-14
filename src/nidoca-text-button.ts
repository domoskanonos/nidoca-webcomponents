import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-button")
export class NidocaTextButton extends NidocaText {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      font-size:calc(var(--font-size) * 0.9);
      line-height:calc(var(--font-size) * 0.9);
      filter: brightness(var(--app-lighten-3));
    }
  `;
  render(): TemplateResult {
    return html`
      ${super.render()}`;
  }
}
