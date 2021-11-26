import {css, html, TemplateResult, LitElement, HTMLTemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaDevice} from "./";

export enum NidocaLayoutSpacerType {
  ALL = "ALL",
  VERTICAL = "VERTICAL",
  HORIZONTAL = "HORIZONTAL",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

export enum NidocaLayoutSpacerSize {
  ZERO = "var(--space-zero)",
  LITTLE = "var(--space-little)",
  SMALL = "var(--space-small)",
  MEDIUM = "var(--space-medium)",
  NORMAL = "var(--space-normal)",
  BIG = "var(--space-big)",
  MAX = "var(--space-max)",
}

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

  @property({type: Array})
  spacerTypes: NidocaLayoutSpacerType[] = [NidocaLayoutSpacerType.ALL];

  @property({type: String})
  spacerSize: string = NidocaLayoutSpacerSize.NORMAL;

  @property({type: String})
  cssStyle: string = "";

  render(): TemplateResult {
    return html`
      <style>
        ${this.toStyle(this.devices, this.spacerTypes, this.spacerSize)}
      </style>
      <span class="spacer" style="${this.cssStyle}">
        <slot></slot>
      </span>
    `;
  }

  private toStyle(
    devices: NidocaDevice[],
    spacerTypes: NidocaLayoutSpacerType[],
    spacerSize: string
  ): string {
    const size = spacerSize;
    let style: string = "";
    spacerTypes.forEach((spacerType: NidocaLayoutSpacerType) => {
      switch (spacerType) {
        case NidocaLayoutSpacerType.LEFT:
          style = style.concat("padding-left:".concat(size).concat(";"));
          break;
        case NidocaLayoutSpacerType.RIGHT:
          style = style.concat("padding-right:".concat(size).concat(";"));
          break;
        case NidocaLayoutSpacerType.TOP:
          style = style.concat("padding-top:".concat(size).concat(";"));
          break;
        case NidocaLayoutSpacerType.BOTTOM:
          style = style.concat("padding-bottom:".concat(size).concat(";"));
          break;
        case NidocaLayoutSpacerType.ALL:
          style = style.concat("padding-left:".concat(size).concat(";"));
          style = style.concat("padding-right:".concat(size).concat(";"));
          style = style.concat("padding-top:".concat(size).concat(";"));
          style = style.concat("padding-bottom:".concat(size).concat(";"));
          break;
        case NidocaLayoutSpacerType.HORIZONTAL:
          style = style.concat("padding-left:".concat(size).concat(";"));
          style = style.concat("padding-right:".concat(size).concat(";"));
          break;
        case NidocaLayoutSpacerType.VERTICAL:
          style = style.concat("padding-top:".concat(size).concat(";"));
          style = style.concat("padding-bottom:".concat(size).concat(";"));
          break;
      }
    });

    style = ".spacer {".concat(style).concat().concat("}");

    let styleAll = "";
    devices.forEach((device: NidocaDevice) => {
      styleAll = styleAll.concat(device.asMediaStyle(style));
    });
    return styleAll;
  }
}
