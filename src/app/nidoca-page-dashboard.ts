import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("nidoca-page-dashboard")
export class NidocaPageDashboard extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`Dashboard`;
  }
}
