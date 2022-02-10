import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
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

    render(): TemplateResult {
        return html`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[
                    NidocaImgProperties.ROUND,
                ]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`;
    }
}
