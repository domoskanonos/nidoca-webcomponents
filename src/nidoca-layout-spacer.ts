import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaDevice} from "./";

@customElement("nidoca-layout-spacer")
export class NidocaSpacer extends LitElement {
    static styles = css`
    .spacer,
    ::slotted(.spacer) {
      box-sizing: border-box;
      display: block;
    }
  `;

    @property({type: Array})
    devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET, NidocaDevice.MOBILE];

    @property({type: String})
    left: string = "0";

    @property({type: String})
    right: string = "0";

    @property({type: String})
    top: string = "0";

    @property({type: String})
    bottom: string = "0";

    render(): TemplateResult {
        return html`
            <style>
                ${this.toStyle(this.devices, this.left, this.right, this.top, this.bottom)}
            </style>
            <span class="spacer">
        <slot></slot>
      </span>
        `;
    }

    private toStyle(
        devices: NidocaDevice[],
        left: string,
        right: string,
        top: string,
        bottom: string,
    ): string {
        let style: string = `padding-left:${left};padding-right:${right};padding-top:${top};padding-bottom:${bottom};`;
        style = ".spacer {".concat(style).concat().concat("}");
        let styleAll = "";
        devices.forEach((device: NidocaDevice) => {
            styleAll = styleAll.concat(device.asMediaStyle(style));
        });
        return styleAll;
    }
}
