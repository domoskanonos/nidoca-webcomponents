import {css, html, LitElement, PropertyValues} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaDevice, NidocaTheme} from ".";

@customElement("nidoca-layout-container")
export class NidocaContainer extends LitElement {
  static styles = css`
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `;

  @property({type: String})
  width: string = "auto";

  @property({type: String})
  height: string = "auto";

  @property({type: String})
  contentWidth: string = "auto";

  @property({type: String})
  contentHeight: string = "auto";

  @property({type: NidocaDevice, converter: Array})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET, NidocaDevice.MOBILE];

  @property({type: NidocaTheme, converter: String})
  theme: NidocaTheme = NidocaTheme.BACKGROUND;

  updated(_changedProperties: PropertyValues): void {
    for (let i = 0; i < this.devices.length; i++) {
      const device: NidocaDevice = this.devices[i];
      if (device == NidocaDevice.getCurrentScreen()) {
        if (_changedProperties.has("width")) {
          this.style.width = this.width;
        }
        if (_changedProperties.has("height")) {
          this.style.height = this.height;
        }
        break;
      }
    }
    super.updated(_changedProperties);
  }

  render(): unknown {
    return html`
      <style>
        .container,
        ::slotted(.container) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="container">
        <div style="${this.applyDevices(this.contentWidth, this.contentHeight, this.devices)}">
          <slot></slot>
        </div>
      </div>
    `;
  }

  applyDevices(width: string, height: string, devices: NidocaDevice[]): string {
    for (let i = 0; i < devices.length; i++) {
      const device: NidocaDevice = devices[i];
      if (device == NidocaDevice.getCurrentScreen()) {
        return `width:${width};height:${height};`;
      }
    }
    return "";
  }
}
