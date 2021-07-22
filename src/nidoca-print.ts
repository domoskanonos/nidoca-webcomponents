import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";

@customElement("nidoca-print")
export class NidocaPrint extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html` <div>PrintMe :-)</div> `;
  }
}
