import {css, customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {NidocaDevice} from "./nidoca-meta";

export enum NidocaSpacerType {
  ALL = "ALL",
  VERTICAL = "VERTICAL",
  HORIZONTAL = "HORIZONTAL",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

export enum NidocaSpacerSize {
  ZERO = "--space-zero",
  LITTLE = "--space-little",
  SMALL = "--space-small",
  MEDIUM = "--space-medium",
  NORMAL = "--space-normal",
  BIG = "--space-big",
  MAX = "--space-max",
}

@customElement("nidoca-spacer")
export class NidocaSpacer extends LitElement {
  static styles = css`
    .SPACER,
    ::slotted(.SPACER) {
      box-sizing: border-box;
      display: block;
    }

    .slotStyle {
      display:flex;
      flex-direction: column;
    }

  `;

  @property({type: Array})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET, NidocaDevice.MOBILE];

  @property({type: Array})
  spacerTypes: NidocaSpacerType[] = [NidocaSpacerType.ALL];

  @property({type: String})
  spacerSize: NidocaSpacerSize = NidocaSpacerSize.NORMAL;

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
    spacerProperties: NidocaSpacerType[],
    spacerSize: NidocaSpacerSize
  ): string {
    const size = "var(".concat(spacerSize).concat(")");
    let style: string = "";
    spacerProperties.forEach((spacerType: NidocaSpacerType) => {
      switch (spacerType) {
        case NidocaSpacerType.LEFT:
          style = style.concat("padding-left:".concat(size).concat(";"));
          break;
        case NidocaSpacerType.RIGHT:
          style = style.concat("padding-right:".concat(size).concat(";"));
          break;
        case NidocaSpacerType.TOP:
          style = style.concat("padding-top:".concat(size).concat(";"));
          break;
        case NidocaSpacerType.BOTTOM:
          style = style.concat("padding-bottom:".concat(size).concat(";"));
          break;
        case NidocaSpacerType.ALL:
          style = style.concat("padding-left:".concat(size).concat(";"));
          style = style.concat("padding-right:".concat(size).concat(";"));
          style = style.concat("padding-top:".concat(size).concat(";"));
          style = style.concat("padding-bottom:".concat(size).concat(";"));
          break;
        case NidocaSpacerType.HORIZONTAL:
          style = style.concat("padding-left:".concat(size).concat(";"));
          style = style.concat("padding-right:".concat(size).concat(";"));
          break;
        case NidocaSpacerType.VERTICAL:
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
