import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {NidocaDevice} from "./nidoca-meta";

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
  ZERO = "--space-zero",
  LITTLE = "--space-little",
  SMALL = "--space-small",
  MEDIUM = "--space-medium",
  NORMAL = "--space-normal",
  BIG = "--space-big",
  MAX = "--space-max",
}

@customElement("nidoca-layout-spacer")
export class NidocaSpacer extends LitElement {
  static styles = css`
    .SPACER,
    ::slotted(.SPACER) {
      box-sizing: border-box;
    }

    .slotStyle {
      display: inline-block;
    }
  `;

  @property({type: Array})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET, NidocaDevice.MOBILE];

  @property({type: Array})
  spacerTypes: NidocaLayoutSpacerType[] = [NidocaLayoutSpacerType.ALL];

  @property({type: String})
  spacerSize: NidocaLayoutSpacerSize = NidocaLayoutSpacerSize.NORMAL;

  @property({type: String})
  cssStyle: string = "";

  render(): TemplateResult {
    return html`
      <style>
        ${this.toStyle(this.devices, this.spacerTypes, this.spacerSize)}
      </style>
      <span class="SPACER" style="${this.cssStyle}">
        <slot class="slotStyle"></slot>
      </span>
    `;
  }

  private toStyle(
    devices: NidocaDevice[],
    spacerProperties: NidocaLayoutSpacerType[],
    spacerSize: NidocaLayoutSpacerSize
  ): string {
    const size = "var(".concat(spacerSize).concat(")");
    let style: string = "";
    spacerProperties.forEach((spacerType: NidocaLayoutSpacerType) => {
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

    style = ".SPACER {".concat(style).concat().concat("}");

    let styleAll = "";
    devices.forEach((device: NidocaDevice) => {
      styleAll = styleAll.concat(device.asMediaStyle(style));
    });
    return styleAll;
  }
}
