import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';
import {NidocaDevice} from './nidoca-meta';

export enum SpacerType {
  ALL = 'ALL',
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export enum SpacerSize {
  ZERO = '--space-zero',
  LITTLE = '--space-little',
  SMALL = '--space-small',
  MEDIUM = '--space-medium',
  NORMAL = '--space-normal',
  BIG = '--space-big',
  MAX = '--space-max',
}

@customElement('nidoca-spacer')
export class NidocaSpacer extends LitElement {
  static styles = css`
    .SPACER,
    ::slotted(.SPACER) {
      box-sizing: border-box;
      display: block;
    }
  `;

  @property({type: NidocaDevice})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET, NidocaDevice.MOBILE];

  @property({type: SpacerType})
  spacerTypes: SpacerType[] = [SpacerType.ALL];

  @property({type: SpacerSize})
  spacerSize: SpacerSize = SpacerSize.NORMAL;

  @property({type: String})
  cssStyle: string = '';

  render(): TemplateResult {
    return html`
      <style>
        ${this.toStyle(this.devices, this.spacerTypes, this.spacerSize)}
      </style>
      <span class="SPACER" style="${this.cssStyle}">
        <slot></slot>
      </span>
    `;
  }

  private toStyle(
    devices: NidocaDevice[],
    spacerProperties: SpacerType[],
    spacerSize: SpacerSize
  ): string {
    let size = 'var('.concat(spacerSize).concat(')');
    let style: string = '';
    spacerProperties.forEach((spacerType: SpacerType) => {
      switch (spacerType) {
        case SpacerType.LEFT:
          style = style.concat('padding-left:'.concat(size).concat(';'));
          break;
        case SpacerType.RIGHT:
          style = style.concat('padding-right:'.concat(size).concat(';'));
          break;
        case SpacerType.TOP:
          style = style.concat('padding-top:'.concat(size).concat(';'));
          break;
        case SpacerType.BOTTOM:
          style = style.concat('padding-bottom:'.concat(size).concat(';'));
          break;
        case SpacerType.ALL:
          style = style.concat('padding-left:'.concat(size).concat(';'));
          style = style.concat('padding-right:'.concat(size).concat(';'));
          style = style.concat('padding-top:'.concat(size).concat(';'));
          style = style.concat('padding-bottom:'.concat(size).concat(';'));
          break;
        case SpacerType.HORIZONTAL:
          style = style.concat('padding-left:'.concat(size).concat(';'));
          style = style.concat('padding-right:'.concat(size).concat(';'));
          break;
        case SpacerType.VERTICAL:
          style = style.concat('padding-top:'.concat(size).concat(';'));
          style = style.concat('padding-bottom:'.concat(size).concat(';'));
          break;
      }
    });

    style = '.SPACER {'.concat(style).concat().concat('}');

    let styleAll = '';
    devices.forEach((device: NidocaDevice) => {
      styleAll = styleAll.concat(device.asMediaStyle(style));
    });
    return styleAll;
  }
}
