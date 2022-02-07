import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaImg} from "./nidoca-img";

@customElement("nidoca-img-round")
export class NidocaImgRound extends NidocaImg {
  static styles = css`
    :host {
      font-size: 0;
      display: block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }
  `;

  render(): TemplateResult {
    return html`<img width="${this.width}" height="${this.height}" src="${this.src}" />`;
  }
}
