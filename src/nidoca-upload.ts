import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

@customElement("nidoca-upload")
export class NidocaUpload extends LitElement {
  static styles = css``;

  @property({type: String})
  code: string = "";

  render(): any {
    return html``;
  }
}
