import {html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-success")
export class NidocaTextSuccess extends NidocaText {
  render(): TemplateResult {
    return html`<style>
        :host,
        slot {
          color: var(--app-color-success-${this.theme});
        }</style
      >${super.render()}`;
  }
}
