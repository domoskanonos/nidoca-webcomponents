import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTextType} from ".";
import {NidocaImgProperties} from "./nidoca-img copy";

@customElement("nidoca-avatar")
export class NidocaAvatar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({type: String})
  imgSrc: string = "";

  @property({type: String})
  primaryText: string = "";

  @property({type: String})
  description: string = "";

  render(): TemplateResult {
    return html` <div
      style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
    >
        <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[
      NidocaImgProperties.ROUND,
    ]}"> </nidoca-img-round>
        <nidoca-layout-spacer
          left="var(--space)"
          right="var(--space)"
          top="var(--space)"
          bottom="var(--space)"
        >
          <nidoca-text type="${NidocaTextType.H5}">${this.primaryText}</nidoca-text>
        </nidoca-layout-spacer>
        <nidoca-text type="${NidocaTextType.H6}">${this.description}</nidoca-text>
  </div>
    </div>`;
  }
}
