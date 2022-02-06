import {html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaText} from ".";

@customElement("nidoca-text-info")
export class NidocaTextInfo extends NidocaText {
  render(): TemplateResult {
    return html`<style>
        :host,
        slot {
          color: var(--app-color-info-${this.theme});
        }</style
      >${super.render()}`;
  }
}
