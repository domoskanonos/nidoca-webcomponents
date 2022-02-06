import {html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-error")
export class NidocaTextError extends NidocaText {
  render(): TemplateResult {
    return html`<style>
        :host,
        slot {
          color: var(--app-color-error-${this.theme});
        }</style
      >${super.render()}`;
  }
}
