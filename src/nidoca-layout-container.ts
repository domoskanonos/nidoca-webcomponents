import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaDevice, NidocaTheme} from ".";

export class NidocaContainerSize {
  static readonly _100: string = "_100";
  static readonly _75: string = "_75";
  static readonly _50: string = "_50";
  static readonly _25: string = "_25";
  static readonly MIN_CONTENT: string = "MIN_CONTENT";
  static readonly AUTO: string = "AUTO";
}

@customElement("nidoca-layout-container")
export class NidocaContainer extends LitElement {
  static styles = css`
    .container,
    ::slotted(.container) {
      margin: auto;
    }

    ._100,
    ::slotted(._100) {
      width: 100%;
    }
    ._75,
    ::slotted(._75) {
      width: 75%;
    }
    ._50,
    ::slotted(._50) {
      width: 50%;
    }
    ._25,
    ::slotted(._25) {
      width: 25%;
    }

    .MIN_CONTENT,
    ::slotted(.MIN_CONTENT) {
      width: min-content;
    }
    .AUTO,
    ::slotted(.AUTO) {
      width: auto;
    }
    .FIT_CONTENT,
    ::slotted(.FIT_CONTENT) {
      width: fit-content;
    }
  `;

  @property({type: NidocaContainerSize, converter: String})
  containerSize: string = NidocaContainerSize.MIN_CONTENT;

  @property({type: NidocaDevice, converter: Array})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET, NidocaDevice.MOBILE];

  @property({type: NidocaTheme, converter: String})
  theme: NidocaTheme = NidocaTheme.BACKGROUND;

  render(): unknown {
    return html`
      <style>
      .container,
      ::slotted(.container) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      HUHU: ${this.theme}
      <div class="container ${NidocaDevice.applyDevices(this.containerSize, this.devices)}">
        <div class="container FIT_CONTENT">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
