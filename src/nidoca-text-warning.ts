import {html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-warning")
export class NidocaTextWarning extends NidocaText {
  render(): TemplateResult {
    return html`<style>
        :host,
        slot {
          color: var(--app-color-warning-${this.theme});
        }</style
      >${super.render()}`;
  }
}
